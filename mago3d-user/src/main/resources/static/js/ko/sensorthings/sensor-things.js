const SensorThings = function (magoInstance) {

    this.magoInstance = magoInstance;
    this.FROST_SERVER_URL = 'http://localhost:18888/FROST-Server/v1.0/';
    //this.FROST_SERVER_URL = 'http://iot.openindoormap.io/v1.0/';
    this.queryString = '';
    this.type = 'iot_occupancy'; // iot_occupancy, iot_dust
    this.created = true;

    this.currentPageNo = 0;
    //this.currentTime = "2020-10-23T04:59:40.000Z";
    this.currentTime = moment.utc().format();
    this.processingTime = 1800;     // 30m
    this.callInterval = 10;         // 10s
    this.filterInterval = 3600;     // 1hour

    this.things = [];
    this.selectedThingId = 0;
    this.selectedDataStreams = [];

    this.gaugeChartNeedle = {};

};

/**
 * searchWord에 해당하는 자식 객체 생성하기
 * @returns {OccupancySensorThings|DustSensorThings}
 */
SensorThings.prototype.create = function () {
    const $form = $("#searchIotForm");
    const params = getFormData($form);
    if (!params.searchWord) {
        params.searchWord = this.type;
    }
    if (params.searchWord === 'iot_occupancy') {
        return new OccupancySensorThings(this.magoInstance);
    } else if (params.searchWord === 'iot_dust') {
        return new DustSensorThings(this.magoInstance);
    }
};

/**
 * magoManager 카메라 이동시작, 카메라 이동종료 시 이벤트 걸기
 */
SensorThings.prototype.setCameraMoveEvent = function() {
    const magoManager = this.magoInstance.getMagoManager();
    magoManager.on(Mago3D.MagoManager.EVENT_TYPE.CAMERAMOVESTART, (e) => {
        // 지도상의 센서 초기화
        MAGO.sensorThings.clearOverlay();
    });
    magoManager.on(Mago3D.MagoManager.EVENT_TYPE.CAMERAMOVEEND, (e) => {
        // 지도상의 센서 위치 갱신
        MAGO.sensorThings.redrawOverlay();
    });
};

SensorThings.prototype.initF4dData = function() {

    let add = false;
    const magoManager = this.magoInstance.getMagoManager();
    const f4dController = this.magoInstance.getF4dController();

    let setIntervalInitF4dData = setInterval(function () {
        if (magoManager.hierarchyManager.existProject('50000') && !add) {
            add = true;

            $.ajax({
                url: '/sample/json/alphadom_data.json',
                type: "GET",
                headers: {"X-Requested-With": "XMLHttpRequest"},
                dataType: "json",
                success: function (json) {
                    f4dController.addF4dMember('50000', json.children);
                },
                error: function (request, status, error) {
                    alert(JS_MESSAGE["ajax.error.message"]);
                }
            });

            clearInterval(setIntervalInitF4dData);
        }
    }, 1000);

};

SensorThings.prototype.setInterval = function() {
    MAGO.updateSensorThings = setInterval(function () {
        let currentTime = MAGO.sensorThings.getCorrectTime(MAGO.sensorThings.getCurrentTime(), MAGO.sensorThings.callInterval);
        MAGO.sensorThings.setCurrentTime(currentTime);

        // TODO 램덤 값 삭제
        MAGO.sensorThings.update();

        // TODO 목록 갱신 추가
        const $form = $("#searchIotForm");
        const params = getFormData($form);
        MAGO.sensorThings.getList(MAGO.sensorThings.currentPageNo, params);

        currentTime = moment(currentTime).utc().add(MAGO.sensorThings.callInterval, 's').format();
        //currentTime = moment(currentTime).utc().add(3600, 's').format();
        MAGO.sensorThings.setCurrentTime(currentTime);
        //console.info("currentTime : " + currentTime);
        //console.info("getFilterStartTime : " + LHDT.sensorThings.getFilterStartTime());
        //console.info("getFilterEndTime : " + LHDT.sensorThings.getFilterEndTime());

    }, 1000 * MAGO.sensorThings.callInterval);
};

SensorThings.prototype.clearOverlay = function () {
    if ($('.overlayWrap').length >= 0) {
        $('#overlayDHTML').html("");
    }
};

/**
 * 화면에 보이는 지도 오버레이 thingId 가져오기
 */
SensorThings.prototype.getOverlay = function() {
    const result = [];
    for (const thing of this.things) {
        const thingId = thing['@iot.id'];
        if ($('#overlay_' + thingId).length > 0) {
            result.push(thingId);
        }
    }
    return result;
}

SensorThings.prototype.setCurrentTime = function (currentTime) {
    this.currentTime = currentTime;
};

SensorThings.prototype.getCurrentTime = function () {
    return this.currentTime;
};

SensorThings.prototype.getCorrectTime = function (filteredTime, interval) {
    const utcTime = moment(filteredTime).utc();
    const time = utcTime.hours() * 3600 + utcTime.minutes() * 60 + utcTime.seconds();
    const diff = time - Math.floor(time / interval) * interval;
    return utcTime.subtract(diff, 's').format();
};

SensorThings.prototype.getFilterStartTime = function () {
    const filteredTime = moment(this.currentTime).utc().subtract(this.processingTime, 's');
    return this.getCorrectTime(filteredTime, this.filterInterval);
};

SensorThings.prototype.getFilterEndTime = function () {
    return moment(this.getFilterStartTime()).utc().add(this.filterInterval, 's').format();
};

SensorThings.prototype.getFilterDayStartTime = function () {
    return moment(this.currentTime).utc().subtract(this.filterInterval * 24, 's').format();
};

SensorThings.prototype.observationTimeToLocalTime = function (observationTime) {
    return moment.parseZone(observationTime).local().format();
};

SensorThings.prototype.formatValueByDigits = function (value, digits) {
    return parseFloat(parseFloat(value).toFixed(digits));
};

SensorThings.prototype.geographicCoordToScreenCoord = function (coordinates) {
    const resultWorldPoint = Mago3D.ManagerUtils.geographicCoordToWorldPoint(coordinates[0], coordinates[1], coordinates[2]);
    const magoManager = this.magoInstance.getMagoManager();
    const resultScreenCoord = Mago3D.ManagerUtils.calculateWorldPositionToScreenCoord(magoManager.getGl(), resultWorldPoint.x, resultWorldPoint.y, resultWorldPoint.z, undefined, magoManager);
    return resultScreenCoord;
};

/**
 * 등급별 상태메세지 가져오기
 * @param grade
 * @returns {*}
 */
SensorThings.prototype.getGradeMessage = function (grade) {
    let message;
    const num = parseInt(grade);
    switch (num) {
        case 1:
            message = JS_MESSAGE["iot.occupancy.legend.good"];
            break;
        case 2:
            message = JS_MESSAGE["iot.occupancy.legend.normal"];
            break;
        case 3:
            message = JS_MESSAGE["iot.occupancy.legend.bad"];
            break;
        case 4:
            message = JS_MESSAGE["iot.occupancy.legend.very-bad"];
            break;
        default:
            message = JS_MESSAGE["iot.occupancy.legend.nodata"];
            break;
    }
    return message;
};

SensorThings.prototype.dataSearch = function (pageNo) {
    $('#iotInfoContent div').hide();
    const $form = $("#searchIotForm");
    const params = getFormData($form);

    if (!params.searchWord) {
        params.searchWord = this.type;
    }

    var sensorThings = MAGO.sensorThings;
    sensorThings.getList(pageNo, params);
};

SensorThings.prototype.getUnit = function(dataStream) {
    return dataStream['unitOfMeasurement']['symbol'];
}

SensorThings.prototype.getObservedPropertyName = function(dataStream) {
    return dataStream['ObservedProperty']['name'];
}

SensorThings.prototype.numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

SensorThings.prototype.closeDetail = function (obj) {
    const $iotDustMoreDHTML = $(obj).parents(".iotDustMoreDHTML");
    $iotDustMoreDHTML.hide();
    $(".show-more").show();
}

/**
 * 게이지 차트 그리기
 * @param range
 * @param total
 * @param percent
 */
SensorThings.prototype.drawGaugeChart = function (range, total, percent) {

    const gaugeChartOptions = {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        cutoutPercentage: 80
    };

    const gaugeChart = new Chart(document.getElementById("gaugeChart"), {
        type: 'doughnut',
        data: {
            labels: [this.getGradeMessage(1), this.getGradeMessage(2), this.getGradeMessage(3), this.getGradeMessage(4)],
            datasets: [
                {
                    data: [
                        (range[1] - range[0]) / total * 100,
                        (range[2] - range[1]) / total * 100,
                        (range[3] - range[2]) / total * 100,
                        (range[4] - range[3]) / total * 100
                    ],
                    backgroundColor: [
                        'rgba(30, 144, 255, 1)',
                        'rgba(0, 199, 60, 1)',
                        'rgba(255, 215, 0, 1)',
                        'rgba(255, 89, 89, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 255, 255 ,1)',
                        'rgba(255, 255, 255 ,1)',
                        'rgba(255, 255, 255 ,1)'
                    ],
                    borderWidth: 0
                }
            ]
        },
        options: gaugeChartOptions
    });

    this.gaugeChartNeedle = new Chart(document.getElementById("gaugeChartNeedle"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [percent - 0.5, 1, 100 - (percent + 0.5)],
                    backgroundColor: [
                        'rgba(0, 0, 0 ,0)',
                        'rgba(255,255,255,1)',
                        'rgba(0, 0, 0 ,0)',
                    ],
                    borderColor: [
                        'rgba(0, 0, 0 ,0)',
                        'rgba(0, 0, 0 ,1)',
                        'rgba(0, 0, 0 ,0)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: gaugeChartOptions
    });

};

/**
 * 게이지 차트 없데이트
 * @param min
 * @param max
 * @param value
 * @param grade
 */
SensorThings.prototype.updateGaugeChart = function (min, max, value, grade) {

    const _this = this;
    const percent = Math.max(Math.min(value, max), min) / (max - min) * 100;
    _this.gaugeChartNeedle.data.datasets[0].data = [percent - 0.5, 1, 100 - (percent + 0.5)];
    _this.gaugeChartNeedle.update();

    console.debug("value: " + value + ", percent: " + percent);

    // 게이지 차트 영역 값, 등급 업데이트
    $('#dustInfoValue').text(value);
    $('#dustInfoGrade').removeClass();
    $('#dustInfoGrade').addClass('dust lv' + grade);

};

SensorThings.prototype.updateInformationTable = function (dataStreamContents) {
    const $dustInfoTableWrap = $('#dustInfoTableSource');
    const dustInfoTemplate = Handlebars.compile($("#dustInfoSource").html());
    const innerHtml = $(dustInfoTemplate(dataStreamContents)).find("#dustInfoTableSource").html();
    $dustInfoTableWrap.html(innerHtml);
};
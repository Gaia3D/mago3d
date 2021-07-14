const Measure = function(magoInstance) {
	this.magoInstance = magoInstance;
	
	this.drawer;
	this._type = Measure.TYPE.NONE;
	
	this._result;
	
	this.setEventHandler();
}

Object.defineProperties(Measure.prototype, {
	type : {
		get : function() {
			return this._type;
		},
		set : function(type) {
			this._type = type;
			this.setDrawer();
		}
	},
	result : {
		get : function() {
			return this._result;
		},
		set : function(result) {
			var old = this._result;
			
			this._result = result;
			
			if(this._result) {
				this.restore();
			}
			
			if(old) {
				this.removeEntity(old);
				old = undefined;
			}
		} 
	}
});

Measure.STATUS = {
	NOTSTART : 'notstart',
	READY : 'ready',
	NEEDSTARTPOINT : 'needstartpoint',
	NEEDLINE : 'needline',
	NEEDLASTPOINT : 'needlastpoint',
	NEEDVERTEXPOINT : 'needlastpoint',
	NEEDGUIDEPOINT : 'needguidepoint',
	COMPLETE : 'complete'
}

Measure.TYPE = {
	DISTANCE : 'distance',
	AREA : 'area',
	HEIGHT : 'height',
	NONE : 'none'
}

Measure.prototype.setEventHandler = function() {
	var self = this;
	
	var $btns = $('#toolbarWrap div.toolbox-measure button.toolbox-measure-btn');
	$btns.click(function(){
		var target = this;
		$btns.each(function(_, btn) {
			if(target !== btn) $(btn).removeClass('on');
		});
		
		$(target).toggleClass('on');
		self.type = $(target).hasClass('on') ?  $(target).data('type') : Measure.TYPE.NONE;
	});
	
	var popupObserver = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			var mutationStyle = window.getComputedStyle(mutation.target);
			if(mutationStyle.display === 'none') {
				self.destroyDrawer();
				self.result = undefined;
			} else {
				$('#toolbarWrap div.detaildata.poplayer').hide().removeClass('on');
			}
			return false;			
		});
	});
	
	popupObserver.observe(document.querySelector('.toolbox-measure'), { attributes: true, attributeFilter:['style'], subtree: false, childList:false, attributeOldValue:true});	
}

Measure.prototype.restore = function() {
	var viewer = this.magoInstance.getViewer();
	//restore
	var _add = function(entt) {
		if(Array.isArray(entt)) {
			for(var i in entt) {
				_add(entt[i]);					
			}
		} else {
			viewer.entities.add(entt);
		}
	}
	for(var i in this.result) {
		var obj = this.result[i];
		_add(obj);
	}
}

Measure.prototype.removeEntity = function(obj) {
	var viewer = this.magoInstance.getViewer();
	var _remove = function(entt) {
		if(Array.isArray(entt)) {
			for(var i in entt) {
				_remove(entt[i]);					
			}
		} else {
			viewer.entities.remove(entt);
		}
	}

	for(var i in obj) {
		_remove(obj[i]);
	}
}



Measure.prototype.setDrawer = function() {
	this.destroyDrawer();
	
	if(!this.type || this.type === Measure.TYPE.NONE) return;
	
	this.result = undefined;
	this.drawer = new Cesium.ScreenSpaceEventHandler(this.magoInstance.getViewer().canvas);
	this.drawer.result = {};
	this.drawer.status = Measure.STATUS.NOTSTART;
	
	switch(this.type) {
		case Measure.TYPE.DISTANCE : {
			this.decorateDistance();
			break;
		}
		case Measure.TYPE.AREA : {
			this.decorateArea();
			break;
		}
		case Measure.TYPE.HEIGHT : {
			this.decorateHeight();
			break;
		}
	}
}

Measure.prototype.destroyDrawer = function() {
	if(!this.drawer) return;
	var viewer = this.magoInstance.getViewer();
	var _destroy = function (any) {
		if(Array.isArray(any)) {
			for(var i in any) {
				_destroy(any[i]);	
			}
		} else {
			if(any instanceof Cesium.Entity) {
				viewer.entities.remove(any);
			}
			any = undefined;
		}
	}
	
	if(this.drawer.result) {
		for(var i in this.drawer.result) {
			_destroy(this.drawer.result[i]);
		}
		
		delete this.drawer.result;
	}
	
	this.drawer = this.drawer.destroy();
}

Measure.prototype.decorateArea = function() {
console.info('decorateArea');
}

Measure.prototype.decorateHeight = function() {
console.info('decorateHeight');
}

Measure.prototype.decorateDistance = function() {
	var viewer = this.magoInstance.getViewer();
	var magoManager = this.magoInstance.getMagoManager();
	
	var self = this;
	const pointGraphic = {
		color : Cesium.Color.WHITE,
		outlineColor : Cesium.Color.RED,
		outlineWidth : 3,
		pixelSize : 6,
		heightReference : Cesium.HeightReference.CLAMP_TO_GROUND
	}
	
	let labelOption = {
        scale :0.5,
        font: "normal normal bolder 24px Helvetica",
        fillColor: Cesium.Color.RED,
        outlineColor: Cesium.Color.RED,
        outlineWidth: 1,
		pixelOffset : new Cesium.Cartesian2(-25,-10), 
        heightReference : Cesium.HeightReference.CLAMP_TO_GROUND,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        distanceDisplayCondition : new Cesium.DistanceDisplayCondition(0.0, 100000),
		backgroundColor : Cesium.Color.WHITE,
		showBackground : true
	}
	var _lineCoordinate = function() {
		var pointsCoordinates = self.drawer.result.points.map(function(point) {
			return point.position.getValue();
		});
		pointsCoordinates.push(self.drawer.result.guide.position.getValue());
		return pointsCoordinates;
	}
	
	var _accumDistance = function() {
		var existingPoint = _lineCoordinate();
		var accumDistance = existingPoint.reduce(function(acc, crts, idx, array) {
		    if(idx === 0) return acc;
		    var d = Cesium.Cartesian3.distance(crts,array[idx-1]);
		    return acc + d;
		} , 0);
		
		return `${accumDistance.toFixed(0)}m`;
	}
	
	var _complete = function(e) {
		var drawer = self.drawer;
		
		if(drawer.status !== Measure.STATUS.NEEDVERTEXPOINT) return;
		
		var point3d = API.Converter.screenCoordToMagoPoint3D(e.position.x, e.position.y, self.magoInstance.getMagoManager());
		var crts3 = API.Converter.magoToCesiumForPoint3D(point3d);
		
		drawer.result.guide.position = crts3;
		drawer.result.guide.label.text = _accumDistance();
		
		//reinitialize
		drawer.result.line.polyline.positions = _lineCoordinate();
		var cloneLine = Cesium.clone(drawer.result.line, false);
		
		drawer.result.points.push(drawer.result.guide);
		var clonePoints = drawer.result.points.map(function(point) {
			var clonePoint = Cesium.clone(point, false);
			return clonePoint;
		});
		
		drawer.status = Measure.STATUS.COMPLETE;
		$('#toolbox-measure-btn-distance').trigger('click');
		
		self.result = {
			line : cloneLine, 
			points : clonePoints
		};
	}
	
	var _click = function(e){
		var drawer = self.drawer;
		
		var point3d = API.Converter.screenCoordToMagoPoint3D(e.position.x, e.position.y, self.magoInstance.getMagoManager());
		var crts3 = API.Converter.magoToCesiumForPoint3D(point3d);
		
		if(drawer.status === Measure.STATUS.NEEDVERTEXPOINT) {
			labelOption.text = _accumDistance();
			drawer.result.points.push(viewer.entities.add({
				position : crts3,
				point : pointGraphic,
				label : labelOption
			}));
			
			if(drawer.result.points.length === 1) {
				labelOption.text = new Cesium.CallbackProperty(_accumDistance)
				drawer.result.guide.label = labelOption;
				
				drawer.status = Measure.STATUS.NEEDLINE
			}
		}
	}
	var _move = function(e) {
		var drawer = self.drawer;
		
		if(drawer.status === Measure.STATUS.COMPLETE) return;
		
		var point3d = API.Converter.screenCoordToMagoPoint3D(e.endPosition.x, e.endPosition.y, magoManager);
		var crts3 = API.Converter.magoToCesiumForPoint3D(point3d);
		
		if(drawer.status === Measure.STATUS.NOTSTART) {
			drawer.result.points = [];
			drawer.result.guide = viewer.entities.add({
				point : pointGraphic
			});
			
			drawer.status = Measure.STATUS.NEEDVERTEXPOINT;
		}
		
		if(drawer.status === Measure.STATUS.NEEDLINE) {
			drawer.result.line = viewer.entities.add({
				polyline : {
					positions : new Cesium.CallbackProperty(_lineCoordinate),
					width : 3,
					clampToGround : true,
					material : Cesium.Color.RED
				}
			});
			drawer.status = Measure.STATUS.NEEDVERTEXPOINT;
		}
		
		drawer.result.guide.position = crts3;
	}
	
	this.drawer.setInputAction(_complete ,Cesium.ScreenSpaceEventType.RIGHT_CLICK);
	this.drawer.setInputAction(_click ,Cesium.ScreenSpaceEventType.LEFT_CLICK);
	this.drawer.setInputAction(_move ,Cesium.ScreenSpaceEventType.MOUSE_MOVE);
}
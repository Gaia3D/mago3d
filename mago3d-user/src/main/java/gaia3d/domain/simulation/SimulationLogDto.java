package gaia3d.domain.simulation;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.hateoas.server.core.Relation;

import java.io.Serializable;
import java.time.LocalDateTime;

@ToString
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Relation(collectionRelation = "simulationLog")
public class SimulationLogDto implements Serializable {

    private static final long serialVersionUID = -8064328012366465946L;

    // 시뮬레이션 이력 고유번호
    private Long simulationLogId;
    // 시뮬레이션 이력 시계열 그룹 고유번호
    private Integer simulationTimeSeriesId;
    // 시뮬레이션 종류
    private String simulationType;
    // 시뮬레이션 명
    private String simulationName;
    // 사용자 아이디
    //private String userId;
    // 시뮬레이션 일시
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime simulationDate;
    // 수정일
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateDate;
    // 등록일
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime insertDate;
    // 스냅샷
    private String contents;

//    @Getter(AccessLevel.NONE)
//    @Setter(AccessLevel.NONE)
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
//    private LocalDateTime viewSimulationDate;
//
//    public LocalDateTime getViewSimulationDate() {
//        return viewSimulationDate;
//    }

    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime viewUpdateDate;

    public LocalDateTime getViewUpdateDate() {
        return this.updateDate;
    }
    
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime viewInsertDate;

    public LocalDateTime getViewInsertDate() {
        return this.insertDate;
    }

}

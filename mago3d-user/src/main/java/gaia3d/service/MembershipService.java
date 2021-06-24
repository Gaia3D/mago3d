package gaia3d.service;

import gaia3d.domain.membership.Membership;
import gaia3d.domain.membership.MembershipLog;
import gaia3d.domain.membership.MembershipUsage;

public interface MembershipService {

    /**
     * 멤버십 조회
     * @param membershipId
     * @return
     */
    Membership getMembershipById(Integer membershipId);

    /**
     * 멤버십 조회
     * @param userId
     * @return
     */
    Membership getMembershipByUserId(String userId);

    /**
     * 멤버십 사용량 조회
     * @param userId
     * @return
     */
    MembershipUsage getUsageByUserId(String userId);

    /**
     * 멤버십 마지막 로그 상태 조회
     * @param userId
     * @return
     */
    MembershipLog getLastLog(String userId);

    /**
     * 멤버십 사용량 등록
     * @param membershipUsage
     * @return
     */
    int insertUsage(MembershipUsage membershipUsage);

    /**
     * 멤버십 로그 등록
     * @param membershipLog
     * @return
     */
    int insertLog(MembershipLog membershipLog);

    /**
     * 멤버십 변환 횟수 갱신
     * @param membershipUsage
     * @return
     */
    int updateUsageFileCount(MembershipUsage membershipUsage);
    
    /**
     * 멤버십 로그 상태 변경
     * @param membershipLog
     * @return
     */
    int updateLogStatus(MembershipLog membershipLog);

    /**
     * 멤버십 사용량 변경
     * @param membershipUsage
     * @return
     */
    int updateUsage(MembershipUsage membershipUsage);
}

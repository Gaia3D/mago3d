package gaia3d.persistence;

import org.springframework.stereotype.Repository;

import gaia3d.domain.user.UserInfo;

/**
 * 사용자
 * @author jeongdae
 *
 */
@Repository
public interface UserMapper {

	/**
	 * 사용자 ID 중복 체크
	 * @param userInfo
	 * @return
	 */
	Boolean isUserIdDuplication(UserInfo userInfo);

	/**
	 * 사용자 Email 중복 체크
	 * @param email
	 * @return
	 */
	Boolean isEmailDuplication(String email);

	/**
	 * 사용자 정보 취득
	 * @param userId
	 * @return
	 */
	UserInfo getUser(String userId);

	/**
	 * 사용자 정보 취득(email)
	 * @param email
	 * @return
	 */
	UserInfo getUserByEmail(String email);

	/**
	 * 사용자 정보 취득(비밀번호 찾기)
	 * @param userInfo
	 * @return
	 */
	UserInfo getUserForFindPassword(UserInfo userInfo);

	/**
	 * 사용자 등록
	 * @param userInfo
	 * @return
	 */
	int insertUser(UserInfo userInfo);
	
	/**
	 * 사용자 비밀번호 수정
	 * @param userInfo
	 * @return
	 */
	int updatePassword(UserInfo userInfo);
	
	/**
	 * 사용자 삭제
	 * @param userId
	 * @return
	 */
    int deleteUser(String userId);
    
}

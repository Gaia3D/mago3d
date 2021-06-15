package gaia3d.service.impl;

import gaia3d.domain.cache.CacheManager;
import gaia3d.domain.policy.Policy;
import gaia3d.domain.user.UserInfo;
import gaia3d.service.SigninSocialService;
import lombok.AllArgsConstructor;
import net.minidev.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

/**
 * Sign in 관련 처리(소셜 로그인)
 * @author hansang
 *
 */
@Service
@AllArgsConstructor
public class SigninGoogleServiceImpl implements SigninSocialService {

	private RestTemplate restTemplate;

	public UserInfo socialAuthorize(String authCode) {

		Policy policy = CacheManager.getPolicy();

		MultiValueMap<String, Object> parameters = new LinkedMultiValueMap<String, Object>();
		parameters.set("grantType", "authorization_code");
		parameters.set("clientId", policy.getSocialSigninGoogleClientId());
		parameters.set("redirectUri", policy.getSocialSigninGoogleRedirectUri());
		parameters.set("clientSecret", policy.getSocialSigninGoogleClientSecret());
		parameters.set("code", authCode);

		String url = policy.getSocialSigninGoogleAccessTokenUri();

		String accessToken = getAccessToken(restTemplate, parameters, url);

		// getAuthUserInfo
		Map responseBody = getSocialUserInfo(restTemplate, accessToken, policy.getSocialSigninGoogleUserInfoUri());

		JSONObject jsonObject = new JSONObject((Map)responseBody);

		UserInfo userInfo = new UserInfo();

		String id = jsonObject.get("email").toString();
		String email = jsonObject.get("email").toString();
		String name = jsonObject.get("name").toString();

		userInfo.setUserId(id);
		userInfo.setEmail(email);
		userInfo.setUserName(name);

		return userInfo;
	}

}

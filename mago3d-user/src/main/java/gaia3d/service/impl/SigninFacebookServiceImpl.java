package gaia3d.service.impl;

import gaia3d.config.PropertiesConfig;
import gaia3d.domain.user.UserInfo;
import gaia3d.service.SigninSocialService;
import net.minidev.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.Map;

/**
 * Sign in 관련 처리(소셜 로그인)
 * @author hansang
 *
 */
@Service
public class SigninFacebookServiceImpl implements SigninSocialService {

	private final PropertiesConfig propertiesConfig;

	public SigninFacebookServiceImpl(PropertiesConfig propertiesConfig) {
		this.propertiesConfig = propertiesConfig;
	}

	public UserInfo socialAuthorize(String authCode) {

		MultiValueMap<String, Object> parameters = new LinkedMultiValueMap<String, Object>();
		parameters.set("grant_type", "authorization_code");
		parameters.set("client_id", propertiesConfig.getSocialNaverClientId());
		parameters.set("redirect_uri", propertiesConfig.getSocialNaverRedirectUri());
		parameters.set("client_secret", propertiesConfig.getSocialNaverClientSecret());
		parameters.set("code", authCode);
		parameters.set("session_state", "oauth_state");

		String getTokenUrl = propertiesConfig.getSocialNaverAccessTokenUri();

		String accessToken = getAccessToken(parameters, getTokenUrl);

		Map responseBody = getUserInfo(accessToken, propertiesConfig.getSocialNaverUserInfoUri());

		JSONObject jsonObject = new JSONObject((Map)responseBody.get("response"));

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

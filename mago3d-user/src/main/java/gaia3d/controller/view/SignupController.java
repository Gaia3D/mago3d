package gaia3d.controller.view;

import com.fasterxml.jackson.databind.ObjectMapper;
import gaia3d.config.PropertiesConfig;
import gaia3d.domain.SigninType;
import gaia3d.domain.cache.CacheManager;
import gaia3d.domain.policy.Policy;
import gaia3d.domain.user.UserGroupType;
import gaia3d.domain.user.UserInfo;
import gaia3d.domain.user.UserStatus;
import gaia3d.service.UserService;
import gaia3d.support.PasswordSupport;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

/**
 * Sign up 처리
 * 
 * @author jeongdae
 */
@Slf4j
@Controller
@RequestMapping("/sign")
public class SignupController {

	@Autowired
	private ObjectMapper objectMapper;
	@Autowired
	private PropertiesConfig propertiesConfig;
	@Autowired
	private UserService userService;
	@Autowired
	private RestTemplate restTemplate;

	private static final Charset ENCODING_TYPE = StandardCharsets.UTF_8;

	/**
	 * Sign up 페이지
	 * @param request
	 * @param model
	 * @return
	 */
	@GetMapping("/signup")
	public String signup(HttpServletRequest request, Model model) {
		Policy policy = CacheManager.getPolicy();
		log.info("@@ policy = {}", policy);
		
		UserInfo userInfo = new UserInfo();
		model.addAttribute("signupForm", userInfo);
		model.addAttribute("policy", policy);
		model.addAttribute("contentCacheVersion", policy.getContentCacheVersion());

		return "/sign/signup";
	}

	/**
	 * Sign up 처리
	 * @param request
	 * @param signupForm
	 * @param bindingResult
	 * @param model
	 * @return
	 */
	@PostMapping(value = "/process-signup")
	public String processSignup(HttpServletRequest request, @Valid @ModelAttribute("signupForm") UserInfo signupForm, BindingResult bindingResult, Model model) {
		log.info("@@ signupForm = {}", signupForm);
		Policy policy = CacheManager.getPolicy();

		Boolean duplication = userService.isUserIdDuplication(signupForm);
		log.info("@@ duplication = {}", duplication);

		signupForm.setPassword(signupForm.getNewPassword());
		String errorcode = userValidate(policy, signupForm);

		log.info("@@error = {}", errorcode);

		if(errorcode != null){
			signupForm.setErrorCode(errorcode);
			signupForm.setPassword(null);
			model.addAttribute("signupForm", signupForm);
			model.addAttribute("policy", policy);

			return "/sign/signup";
		}

		if(duplication) {
			signupForm.setErrorCode("user.id.duplication");
			signupForm.setPassword(null);
			model.addAttribute("signupForm", signupForm);
			model.addAttribute("policy", policy);

			return "/sign/signup";
		}

		// 회원 가입
		signupForm.setSigninType(SigninType.BASIC.getValue());
		signupForm.setUserGroupId(UserGroupType.USER.getValue());
		signupForm.setStatus(UserStatus.WAITING_APPROVAL.getValue());
		log.info(signupForm.getSigninType());
		userService.insertUser(signupForm);

		return "redirect:/sign/signin";
	}

	/**
	 * Sign up 완료
	 * @param request
	 * @param model
	 * @return
	 */
	@GetMapping("/signup-complete")
	public String signupComplete(HttpServletRequest request, Model model) {
		return "/sign/signup-complete";
	}

	/**
	 * validation 체크
	 * @param userInfo
	 * @return
	 */
	private String userValidate(Policy policy, UserInfo userInfo) {
		return PasswordSupport.validateUserPassword(policy, userInfo);
	}
}

package gaia3d.controller.view;

import gaia3d.config.PropertiesConfig;
import gaia3d.domain.send.Mail;
import gaia3d.service.SendService;
import gaia3d.service.impl.MailServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 전송
 * 
 * @author hansang
 */
@Slf4j
@Controller
@RequestMapping("/send")
public class SendController {

	@Autowired
	PropertiesConfig propertiesConfig;

	private SendService mailService = new MailServiceImpl();

	/**
	 * Sign in 페이지
	 * @return
	 */
	@GetMapping("/mail")
	public String dispMail() {
		return "/send/mail";
	}

	/**
	 * Sign in 페이지
	 * @param mail
	 * @return
	 */
	@PostMapping("/mail")
	public String execMail(Mail mail) {

		mailService.send(mail, propertiesConfig);

		return "redirect:/send/mail";
	}
}

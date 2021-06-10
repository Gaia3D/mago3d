package gaia3d.service;

import gaia3d.config.PropertiesConfig;
import gaia3d.domain.send.Mail;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

/**
 * 사용자
 * @author jeongdae
 *
 */
public interface SendService {

	/**
	 * 전송
	 * @param mail
	 * @return
	 */

	void send(Mail mail, PropertiesConfig propertiesConfig) throws MessagingException, UnsupportedEncodingException, Exception;

}

//package gaia3d.controller.rest;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import gaia3d.domain.DataLibraryRule;
//import gaia3d.domain.Tree;
//import gaia3d.domain.Key;
//import gaia3d.domain.rule.Rule;
//import gaia3d.domain.rule.RuleGroup;
//import gaia3d.domain.user.UserSession;
//import gaia3d.service.RuleGroupService;
//import gaia3d.service.RuleService;
//import gaia3d.support.LogMessageSupport;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.util.StringUtils;
//import org.springframework.web.bind.annotation.*;
//
//import javax.servlet.http.HttpServletRequest;
//import java.util.HashMap;
//import java.util.Map;
//
///**
// * 룰 관리
// * TODO 여긴 네가지 rule 로 Controller를 분리 해야 할거 같음
// */
//@Slf4j
//@RestController
//@RequestMapping(value = "/rules")
//public class RuleRestController {
//
//	@Autowired
//	private ObjectMapper objectMapper;
//	@Autowired
//	private RuleService ruleService;
//	@Autowired
//	private RuleGroupService ruleGroupService;
//
//	/**
//	 * 룰 Key 중복 체크
//	 * @param request
//	 * @param ruleKey
//	 * @return
//	 */
//	@GetMapping(value = "/duplication")
//	public Map<String, Object> keyDuplicationCheck(HttpServletRequest request, String ruleKey) {
//		log.info("@@ ruleKey = {}", ruleKey);
//		Map<String, Object> result = new HashMap<>();
//		String errorCode = null;
//		String message = null;
//
//		// TODO @Valid 로 구현해야 함
//		if(StringUtils.isEmpty(ruleKey)) {
//			result.put("statusCode", HttpStatus.BAD_REQUEST.value());
//			result.put("errorCode", "rule.key.empty");
//			result.put("message", message);
//
//			return result;
//		}
//
//		Boolean duplication = ruleService.isRuleKeyDuplication(ruleKey);
//		log.info("@@ duplication = {}", duplication);
//		int statusCode = HttpStatus.OK.value();
//
//		result.put("duplication", duplication);
//		result.put("statusCode", statusCode);
//		result.put("errorCode", errorCode);
//		result.put("message", message);
//
//		return result;
//	}
//
//
//	/**
//	 * 체리 나무 등록
//	 * @param request
//	 * @param tree
//	 * @return
//	 */
//	@PostMapping(value = "/trees")
//	public Map<String, Object> treesInsert(HttpServletRequest request, Tree tree) {
//		log.info("@@@@@ insert tree = {}", tree);
//
//		Map<String, Object> result = new HashMap<>();
//		String errorCode = null;
//		String message = null;
//
//		String userId = ((UserSession)request.getSession().getAttribute(Key.USER_SESSION.name())).getUserId();
//
//		RuleGroup ruleGroup = getRuleGroup(tree.getRuleGroupId());
//		tree.setRuleGroupId(ruleGroup.getRuleGroupId());
//		tree.setRuleGroupKey(ruleGroup.getRuleGroupKey());
//		tree.setRuleGroupName(ruleGroup.getRuleGroupName());
//
//		String attributes = getAttributes(tree);
//		insert(result, userId, tree, attributes);
//
//		return result;
//	}
//
//
//	private RuleGroup getRuleGroup(Integer ruleGroupId) {
//		RuleGroup ruleGroup = new RuleGroup();
//		ruleGroup.setRuleGroupId(ruleGroupId);
//		ruleGroup = ruleGroupService.getRuleGroup(ruleGroup);
//
//		return ruleGroup;
//	}
//
//	private String getUrbanAttributes(RuleUrban ruleUrban) {
//		// string json 변환 처리
//		String attributes = null;
//		try {
//			attributes = objectMapper.writeValueAsString(ruleUrban);
//		} catch (JsonProcessingException e) {
//			log.info("@@@@@ ruleUrban writeValueAsString error = {}", e.getMessage());
//			LogMessageSupport.printMessage(e);
//		}
//		return attributes;
//	}
//
//	private String getAttributes(DataLibraryRule dataLibraryRule) {
//		// string json 변환 처리
//		String attributes = null;
//		try {
//			attributes = objectMapper.writeValueAsString(dataLibraryRule);
//		} catch (JsonProcessingException e) {
//			log.info("@@@@@ streetlamp writeValueAsString error = {}", e.getMessage());
//			LogMessageSupport.printMessage(e);
//		}
//		return attributes;
//	}
//
//	// 등록 공통 처리
//	private void insert(Map<String, Object> result, String userId, DataLibraryRule dataLibraryRule, String attributes) {
//		Rule rule = new Rule();
//		rule.setRuleGroupId(dataLibraryRule.getRuleGroupId());
//		rule.setRuleName(dataLibraryRule.getRuleName());
//		rule.setRuleKey(dataLibraryRule.getRuleKey());
//		rule.setRuleType(dataLibraryRule.getRuleType());
//		rule.setUserId(userId);
//		rule.setAvailable(dataLibraryRule.getAvailable());
//		rule.setAttributes(attributes);
//		rule.setDescription(dataLibraryRule.getDescription());
//
//		ruleService.insertRule(rule);
//
//		int statusCode = HttpStatus.OK.value();
//
//		result.put("statusCode", statusCode);
//		result.put("errorCode", null);
//		result.put("message", null);
//	}
//
//
//
//	/**
//	 * 가로수 수정
//	 * @param request
//	 * @param tree
//	 * @return
//	 */
//	@PutMapping(value = "/trees/{ruleId}")
//	public Map<String, Object> treesUpdate(HttpServletRequest request, @PathVariable Integer ruleId, Tree tree) {
//		log.info("@@@@@ cherriesUpdate tree = {}", tree);
//
//		Map<String, Object> result = new HashMap<>();
//		String errorCode = null;
//		String message = null;
//
//		String userId = ((UserSession)request.getSession().getAttribute(Key.USER_SESSION.name())).getUserId();
//		RuleGroup ruleGroup = getRuleGroup(tree.getRuleGroupId());
//		tree.setRuleGroupId(ruleGroup.getRuleGroupId());
//		tree.setRuleGroupKey(ruleGroup.getRuleGroupKey());
//		tree.setRuleGroupName(ruleGroup.getRuleGroupName());
//
//		String attributes = getAttributes(tree);
//		update(result, ruleId, tree.getRuleName(), tree.getAvailable(), attributes, tree.getDescription());
//
//		return result;
//	}
//
//
//
//	private void update(Map<String, Object> result, Integer ruleId, String ruleName, Boolean available, String attributes, String description) {
//		Rule rule = new Rule();
//		rule.setRuleId(ruleId);
//		rule.setRuleName(ruleName);
//		rule.setAvailable(available);
//		rule.setAttributes(attributes);
//		rule.setDescription(description);
//
//		ruleService.updateRule(rule);
//
//		int statusCode = HttpStatus.OK.value();
//
//		result.put("statusCode", statusCode);
//		result.put("errorCode", null);
//		result.put("message", null);
//	}
//}

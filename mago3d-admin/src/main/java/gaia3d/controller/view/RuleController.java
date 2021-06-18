package gaia3d.controller.view;

import gaia3d.config.PropertiesConfig;
import gaia3d.domain.Key;
import gaia3d.domain.PageType;
import gaia3d.domain.common.Pagination;
import gaia3d.domain.data.DataGroup;
import gaia3d.domain.datalibrary.DataLibrary;
import gaia3d.domain.layer.LayerGroup;
import gaia3d.domain.rule.Rule;
import gaia3d.domain.rule.RuleGroup;
import gaia3d.domain.rule.RuleGroupType;
import gaia3d.domain.rule.RuleType;
import gaia3d.domain.user.UserSession;
import gaia3d.service.*;
import gaia3d.support.SQLInjectSupport;
import gaia3d.utils.DateUtils;
import gaia3d.utils.FormatUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

import static gaia3d.domain.rule.RuleType.*;

@Slf4j
@Controller
@RequestMapping("/rule")
public class RuleController {

	@Autowired
	private DataGroupService dataGroupService;

	@Autowired
	private DataLibraryService dataLibraryService;
	@Autowired
	private DataLibraryGroupService dataLibraryGroupService;

	@Autowired
	private LayerGroupService layerGroupService;

	@Autowired
	private PolicyService policyService;
	@Autowired
	private PropertiesConfig propertiesConfig;
	@Autowired
	private RuleService ruleService;
	@Autowired
	private RuleGroupService ruleGroupService;

	/**
	 * 타일링 목록
	 * @param request
	 * @param rule
	 * @param pageNo
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/list")
	public String list(HttpServletRequest request, @RequestParam(defaultValue="1") String pageNo, Rule rule, Model model) {
		rule.setSearchWord(SQLInjectSupport.replaceSqlInection(rule.getSearchWord()));
		rule.setOrderWord(SQLInjectSupport.replaceSqlInection(rule.getOrderWord()));

		String today = DateUtils.getToday(FormatUtils.YEAR_MONTH_DAY);
		if(StringUtils.isEmpty(rule.getStartDate())) {
			rule.setStartDate(today.substring(0,4) + DateUtils.START_DAY_TIME);
		} else {
			rule.setStartDate(rule.getStartDate().substring(0, 8) + DateUtils.START_TIME);
		}
		if(StringUtils.isEmpty(rule.getEndDate())) {
			rule.setEndDate(today + DateUtils.END_TIME);
		} else {
			rule.setEndDate(rule.getEndDate().substring(0, 8) + DateUtils.END_TIME);
		}

		long totalCount = ruleService.getRuleTotalCount(rule);
		Pagination pagination = new Pagination(request.getRequestURI(), getSearchParameters(PageType.LIST, rule), totalCount, Long.parseLong(pageNo), rule.getListCounter());
		rule.setOffset(pagination.getOffset());
		rule.setLimit(pagination.getPageRows());

		List<Rule> ruleList = new ArrayList<>();
		if(totalCount > 0l) {
			ruleList = ruleService.getListRule(rule);
		}

		model.addAttribute(pagination);
		model.addAttribute("ruleList", ruleList);
		return "/rule/list";
	}

	/**
	 * 룰 등록 페이지 이동
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/input")
	public String input(HttpServletRequest request, Integer ruleGroupId, Model model) {
		log.info("@@ ruleGroupId = {}", ruleGroupId);

		UserSession userSession = (UserSession)request.getSession().getAttribute(Key.USER_SESSION.name());

		RuleGroup ruleGroup = ruleGroupService.getRuleGroup(RuleGroup.builder().ruleGroupId(ruleGroupId).build());
		if(ruleGroup == null) {
			log.info("@@@@@@@@@@@@@@@@@@@ ruleGroup is null");
			return "redirect:/rule-group/list?errorCode=rule-group.empty";
		}

		RuleGroup ancestroRuleGroup = ruleGroupService.getAncestorRuleGroupByRuleGroupId(ruleGroupId);
		String viewName = getViewName(ancestroRuleGroup, ruleGroup);

		if(viewName == null) {
			log.info("@@@@@@@@@@@@@@@@@@@ ruleGroup is null");
			return "redirect:/rule-group/list?errorCode=rule-group.invalid";
		}

		viewName += "-input";
		String viewDirectory = getViewDirectory(ancestroRuleGroup.getRuleType());

		DataGroup dataGroup = new DataGroup();
		dataGroup.setUserId(userSession.getUserId());
		List<DataGroup> dataGroupList = dataGroupService.getListDataGroup(DataGroup.builder().userId(userSession.getUserId()).exceptBasic(true).build());
		List<DesignLayerGroup> designLayerGroupList = designLayerGroupService.getListDesignLayerGroup();
		List<LayerGroup> layerGroupList = layerGroupService.getListLayerGroup();

		DataLibrary dataLibrary = new DataLibrary();
		dataLibrary.setOffset(0L);
		dataLibrary.setLimit(1000L);
		List<DataLibrary> dataLibraryList = dataLibraryService.getListDataLibrary(dataLibrary);

		model.addAttribute("ruleGroup", ruleGroup);
		model.addAttribute("dataGroupList", dataGroupList);
		model.addAttribute("designLayerGroupList", designLayerGroupList);
		model.addAttribute("layerGroupList", layerGroupList);
		model.addAttribute("dataLibraryList", dataLibraryList);

		model.addAttribute("rule", new Rule());

		return "/rule/" + viewDirectory + "/" + viewName;
	}

	private String getViewDirectory(String ruleTypeValue) {
		RuleType ruleType = RuleType.valueOf(ruleTypeValue.toUpperCase());

		String viewDirectory;
		switch (ruleType) {
			case DATA:
				viewDirectory = "data";
				break;
			case DATA_LIBRARY:
				viewDirectory = "data-library";
				break;
			case LAYER:
				viewDirectory = "layer";
				break;
			default:
				viewDirectory = "data";
		}

		return viewDirectory;
	}

	/**
	 * 룰 수정 페이지 이동
	 * @param request
	 * @param ruleId
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/modify")
	public String modify(HttpServletRequest request, @RequestParam("ruleId") Integer ruleId, Model model) {
		log.info("@@ ruleId = {}", ruleId);
		Rule rule = ruleService.getRule(ruleId);

		RuleGroup ruleGroup = ruleGroupService.getRuleGroup(RuleGroup.builder().ruleGroupId(rule.getRuleGroupId()).build());
		RuleGroup ancestroRuleGroup = ruleGroupService.getAncestorRuleGroupByRuleGroupId(rule.getRuleGroupId());
		String viewName = getViewName(ancestroRuleGroup, ruleGroup);
		if(viewName == null) {
			log.info("@@@@@@@@@@@@@@@@@@@ ruleGroup is null");
			return "redirect:/rule-group/list?errorCode=rule-group.invalid";
		}

		viewName += "-modify";
		String viewDirectory = getViewDirectory(ancestroRuleGroup.getRuleType());

		UserSession userSession = (UserSession)request.getSession().getAttribute(Key.USER_SESSION.name());

		DataGroup dataGroup = new DataGroup();
		dataGroup.setUserId(userSession.getUserId());
		List<DataGroup> dataGroupList = dataGroupService.getListDataGroup(DataGroup.builder().userId(userSession.getUserId()).exceptBasic(true).build());
		List<DesignLayerGroup> designLayerGroupList = designLayerGroupService.getListDesignLayerGroup();
		List<LayerGroup> layerGroupList = layerGroupService.getListLayerGroup();

		DataLibrary dataLibrary = new DataLibrary();
		dataLibrary.setOffset(0L);
		dataLibrary.setLimit(1000L);
		List<DataLibrary> dataLibraryList = dataLibraryService.getListDataLibrary(dataLibrary);

		model.addAttribute("rule", rule);
		model.addAttribute("ruleGroup", ruleGroup);
		model.addAttribute("dataGroupList", dataGroupList);
		model.addAttribute("designLayerGroupList", designLayerGroupList);
		model.addAttribute("layerGroupList", layerGroupList);
		model.addAttribute("dataLibraryList", dataLibraryList);

		return "/rule/" + viewDirectory + "/" + viewName;
	}

	// 뷰 이름
	private String getViewName(RuleGroup ancestorRuleGroup, RuleGroup ruleGroup) {

		RuleType ruleType = RuleType.valueOf(ancestorRuleGroup.getRuleType().toUpperCase());

		// 룰 구분으로 1차 viewName
		String viewName;
		switch (ruleType) {
			case DATA:
				viewName = "data";
				break;
			case DATA_LIBRARY:
				viewName = getDataLibraryViewName(ruleGroup);
				break;
			case LAYER:
				viewName = "layer";
				break;
			default:
				viewName = "data";
		}

		return viewName;
	}

	private String getDataLibraryViewName(RuleGroup ruleGroup) {
		String viewName = null;
		if(RuleGroupType.TREE == RuleGroupType.valueOf(ruleGroup.getRuleGroupKey().toUpperCase())) {
			viewName = "tree";
		} else if(RuleGroupType.STREETLAMP == RuleGroupType.valueOf(ruleGroup.getRuleGroupKey().toUpperCase())) {
			// 가로등
			viewName = "streetlamp";
		} else if(RuleGroupType.BRIDGE == RuleGroupType.valueOf(ruleGroup.getRuleGroupKey().toUpperCase())) {
			// 교량
			viewName = "bridge";
		} else if(RuleGroupType.OVERPASS == RuleGroupType.valueOf(ruleGroup.getRuleGroupKey().toUpperCase())) {
			// 육교
			viewName = "overpass";
		} else if(RuleGroupType.NOISEBARRIER == RuleGroupType.valueOf(ruleGroup.getRuleGroupKey().toUpperCase())) {
			// 방음벽
			viewName = "noisebarrier";
		} else if(RuleGroupType.APARTMENT == RuleGroupType.valueOf(ruleGroup.getRuleGroupKey().toUpperCase())) {
			// 아파트
			viewName = "apartment";
		}

		return viewName;
	}

	/**
	 * 룰 삭제
	 * @param ruleId
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/delete")
	public String delete(@RequestParam("ruleId") Integer ruleId, Model model) {
		// TODO validation 체크 해야 함
		if(ruleId == null) {
			log.info("@@@ validation error ruleId = {}", ruleId);
			return "redirect:/rule/list";
		}

		ruleService.deleteRule(ruleId);

		return "redirect:/rule/list";
	}

	/**
	 * 검색 조건
	 * @param rule
	 * @return
	 */
	private String getSearchParameters(PageType pageType, Rule rule) {
		StringBuffer buffer = new StringBuffer(rule.getParameters());
		boolean isListPage = true;
		if(pageType == PageType.MODIFY || pageType == PageType.DETAIL) {
			isListPage = false;
		}

//		if(!isListPage) {
//			buffer.append("pageNo=" + request.getParameter("pageNo"));
//			buffer.append("&");
//			buffer.append("list_count=" + uploadData.getList_counter());
//		}

		return buffer.toString();
	}
}

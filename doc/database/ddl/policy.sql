drop table if exists policy cascade;

-- 운영정책
create table policy(
	policy_id								integer,
	
	user_id_min_length						integer				default 5,
	user_fail_signin_count					integer				default 3,
	user_fail_lock_release					varchar(3)			default '30',
	user_last_signin_lock					varchar(3)			default '90',
	user_duplication_signin_yn				char(1)				default 'N',
	user_signin_type						char(1)				default '0',
	user_update_check						char(1)				default '0',
	user_delete_check						char(1)				default '0',
	user_delete_type						char(1)				default '0',
	signup_type                             varchar(20)         default 'auto',
	
	password_change_term 					varchar(3)			default '30',
	password_min_length						integer				default 8,
	password_max_length						integer				default 32,
	password_eng_upper_count 				integer				default 1,
	password_eng_lower_count 				integer				default 1,
	password_number_count 					integer				default 1,
	password_special_char_count 			integer				default 1,
	password_continuous_char_count 			integer				default 3,
	password_create_type					char(1)				default '0',
	password_create_char					varchar(32)			default '!@#',
	password_exception_char					varchar(10)			default '<>&',
	
	notice_service_yn						char(1)				default 'Y',
	notice_service_send_type				char(1)				default '0',
	notice_approval_request_yn				char(1)				default 'N',
	notice_approval_sign_yn					char(1)				default 'N',
	notice_password_update_yn				char(1)				default 'N',
	notice_approval_delay_yn				char(1)				default 'N',
	notice_risk_yn							char(1)				default 'N',
	notice_risk_send_type					char(1)				default '0',
	notice_risk_grade						char(1)				default '1',

	security_session_timeout_yn				char(1)				default 'N',
	security_session_timeout				varchar(4)			default '30',
	security_user_ip_check_yn				char(1)				default 'N',
	security_session_hijacking				char(1)				default '0',
	security_log_save_type					char(1)				default '0',
	security_log_save_term					varchar(3)			default '2',
	security_dynamic_block_yn				char(1)				default 'N',
	security_api_result_secure_yn			char(1)				default 'N',
	security_masking_yn						char(1)				default 'Y',
	
	content_cache_version					integer				default 1,
	content_main_widget_count				integer				default 6,
	content_main_widget_interval			integer				default 65,
	content_monitoring_interval				integer				default 1,
	content_statistics_interval				char(1)				default '0',
	content_load_balancing_interval			integer				default 10,
	content_menu_group_root					varchar(60)			default 'mago3D',
	content_user_group_root					varchar(60)			default 'mago3D',
	content_layer_group_root				varchar(60)			default 'mago3D',
	content_data_group_root					varchar(60)			default 'mago3D',
    content_data_library_group_root			varchar(60)			default 'mago3D',
	
	user_upload_type						varchar(256)		default '3ds,obj,dae,collada,ifc,las,gml,citygml,indoorgml,fbx,jpg,jpeg,gif,png,bmp,dds,zip,mtl,max',
	user_converter_type						varchar(256)		default '3ds,obj,dae,collada,ifc,las,gml,citygml,indoorgml,fbx',
	user_upload_max_filesize				integer				default 10000,
	user_upload_max_count					integer				default 500,
	shape_upload_type						varchar(256)		default 'cpg,dbf,idx,sbn,sbx,shp,shx,prj,qpj,csv,zip',

    social_signin_google_client_id			varchar(256)        default '441453727719-u2i244q6lnvc3vpl7csno7hdabi71e83.apps.googleusercontent.com',
    social_signin_google_client_secret		varchar(256)        default 'PumSTaqaw_ZuqzPoibcSteXu',
    social_signin_google_redirect_uri		varchar(256)        default 'http://localhost/sign/social-process-signin/GOOGLE',
    social_signin_google_access_token_uri	varchar(256)        default 'https://oauth2.googleapis.com/token',
    social_signin_google_user_info_uri		varchar(256)        default 'https://www.googleapis.com/userinfo/v2/me?access_token=',
    social_signin_facebook_client_id		varchar(256)        default '',
    social_signin_facebook_client_secret	varchar(256)        default '',
    social_signin_facebook_redirect_uri		varchar(256)        default '',
    social_signin_facebook_access_token_uri	varchar(256)        default '',
    social_signin_facebook_user_info_uri		varchar(256)        default '',
    social_signin_naver_client_id			varchar(256)        default 'te6KttPWNCiXwWdXVGI6',
    social_signin_naver_client_secret		varchar(256)        default 'Yj478xU4Mt',
    social_signin_naver_redirect_uri		varchar(256)        default 'http://localhost/sign/social-process-signin/NAVER',
    social_signin_naver_access_token_uri	varchar(256)        default 'https://nid.naver.com/oauth2.0/token',
    social_signin_naver_user_info_uri		varchar(256)        default 'https://openapi.naver.com/v1/nid/me',
    social_signin_kakao_client_id			varchar(256)        default '038101f62718f9e63150e1ceb1d0e3b1',
    social_signin_kakao_redirect_uri		varchar(256)        default 'http://localhost/sign/social-process-signin/KAKAO',
    social_signin_kakao_access_token_uri	varchar(256)        default 'https://kauth.kakao.com/oauth/token',
    social_signin_kakao_user_info_uri		varchar(256)        default 'https://kapi.kakao.com/v2/user/me',

    notice_email_host                       varchar(20)         default 'localhost',
    notice_email_port                       varchar(10)         default '125',
    notice_email_admin                      varchar(20)         default '관리자 이메일',

	insert_date								timestamp with time zone			default now(),
	constraint policy_pk primary key (policy_id)	
);

comment on table policy is '운영정책';
comment on column policy.policy_id is '고유번호';

comment on column policy.user_id_min_length is '사용자 아이디 최소 길이. 기본값 5';
comment on column policy.user_fail_signin_count is '사용자 사인인 실패 횟수';
comment on column policy.user_fail_lock_release is '사용자 사인인 실패 잠금 해제 기간';
comment on column policy.user_last_signin_lock is '사용자 마지막 사인인으로 부터 잠금 기간';
comment on column policy.user_duplication_signin_yn is '중복 사인인 허용 여부. Y : 허용, N : 허용안함(기본값)';
comment on column policy.user_signin_type is '사용자 사인인 인증 방법. 0 : 일반(아이디/비밀번호(기본값)), 1 : 기업용(사번추가), 2 : 일반 + OTP, 3 : 일반 + 인증서, 4 : OTP + 인증서, 5 : 일반 + OTP + 인증서';
comment on column policy.user_update_check is '사용자 정보 수정시 확인';
comment on column policy.user_delete_check is '사용자 정보 삭제시 확인';
comment on column policy.user_delete_type is '사용자 정보 삭제 방법. 0 : 논리적(기본값), 1 : 물리적(DB 삭제)';
comment on column policy.signup_type is '회원 가입 후 승인 방법. auto : 승인 없이 사용, approval : 승인 후 사용';

comment on column policy.password_change_term is '패스워드 변경 주기 기본 30일';
comment on column policy.password_min_length is '패스워드 최소 길이 기본 8';
comment on column policy.password_max_length is '패스워드 최대 길이 기본 32';
comment on column policy.password_eng_upper_count is '패스워드 영문 대문자 개수 기본 1';
comment on column policy.password_eng_lower_count is '패스워드 영문 소문자 개수 기본 1';
comment on column policy.password_number_count is '패스워드 숫자 개수 기본 1';
comment on column policy.password_special_char_count is '패스워드 특수 문자 개수 1';
comment on column policy.password_continuous_char_count is '패스워드 연속문자 제한 개수 3';
comment on column policy.password_create_type is '초기 패스워드 생성 방법. 0 : 사용자 아이디 + 초기문자(기본값), 1 : 초기문자';
comment on column policy.password_create_char is '초기 패스워드 생성 문자열. 엑셀 업로드 등';
comment on column policy.password_exception_char is '패스워드로 사용할수 없는 특수문자(XSS). <,>,&,작은따음표,큰따움표';

comment on column policy.notice_service_yn is '알림 서비스 사용 유무. Y : 사용, N : 사용안함(기본값)';
comment on column policy.notice_service_send_type is '알림 발송 매체. 0 : SMS(기본값), 1 : 이메일, 2 : 메신저';
comment on column policy.notice_risk_yn is '알림 장애 발생시. Y : 사용, N 사용안함(기본값)';
comment on column policy.notice_risk_send_type is '알림 장애 발송 매체. 0 : SMS(기본값), 1 : 이메일, 2 : 메신저';
comment on column policy.notice_risk_grade is '알림 발송 장애 등급. 1 : 1등급(기본값), 2 : 2등급, 3 : 3등급';

comment on column policy.security_session_timeout_yn is '보안 세션 타임아웃. Y : 사용, N 사용안함(기본값)';
comment on column policy.security_session_timeout is '보안 세션 타임아웃 시간. 기본값 30분';
comment on column policy.security_user_ip_check_yn is '로그인 사용자 IP 체크 유무. Y : 사용, N 사용안함(기본값)';
comment on column policy.security_session_hijacking is '보안 세션 하이재킹 처리. 0 : 사용안함, 1 : 사용(기본값), 2 : OTP 추가 인증 ';
comment on column policy.security_log_save_type is '보안 로그 저장 방법. 0 : DB(기본값), 1 : 파일';
comment on column policy.security_log_save_term is '보안 로그 보존 기간. 2년 기본값';
comment on column policy.security_dynamic_block_yn is '보안 동적 차단. Y : 사용, N 사용안함(기본값)';
comment on column policy.security_api_result_secure_yn is 'API 결과 암호화 사용. Y : 사용, N 사용안함(기본값)';
comment on column policy.security_masking_yn is '개인정보 마스킹 처리. Y : 사용(기본값), N 사용안함';

comment on column policy.content_cache_version is 'css, js 갱신용 cache version.';
comment on column policy.content_main_widget_count is '메인 화면 위젯 표시 갯수. 기본 6개';
comment on column policy.content_main_widget_interval is '메인 화면 위젯 Refresh 간격. 기본 65초(모니터링 간격 60초에 대한 시간 간격 고려)';
comment on column policy.content_statistics_interval is '통계 기본 검색 기간. 0 : 1년 단위, 1 : 상/하반기, 2 : 분기 단위, 3 : 월 단위';
comment on column policy.content_menu_group_root is '메뉴 그룹 최상위 그룹명';
comment on column policy.content_user_group_root is '사용자 그룹 최상위 그룹명';
comment on column policy.content_layer_group_root is '레이어 그룹 최상위 그룹명';
comment on column policy.content_data_group_root is '데이터 그룹 최상위 그룹명';
comment on column policy.content_data_library_group_root is '데이터 라이브러리 그룹 최상위 그룹명';

comment on column policy.user_upload_type is '업로딩 가능 확장자. 3ds,obj,dae,collada,ifc,las,gml,citygml,indoorgml,fbx,jpg,jpeg,gif,png,bmp,dds,zip,mtl,max';
comment on column policy.user_converter_type is '변환 가능 확장자. 3ds,obj,dae,collada,ifc,las,gml,citygml,indoorgml,fbx';
comment on column policy.user_upload_max_filesize is '최대 업로딩 사이즈(단위M). 500M';
comment on column policy.user_upload_max_count is '1회, 최대 업로딩 파일 수. 50개';
comment on column policy.shape_upload_type is 'shape 파일 업로드 가능 확장자';

comment on column policy.social_signin_google_client_id is '소셜 로그인 Google Client Id';
comment on column policy.social_signin_google_client_secret is '소셜 로그인 Google Client Secret';
comment on column policy.social_signin_google_redirect_uri is '소셜 로그인 Google Redirect URI';
comment on column policy.social_signin_google_access_token_uri is '소셜 로그인 Google AccessToken URI';
comment on column policy.social_signin_google_user_info_uri is '소셜 로그인 Google UserInfo URI';
comment on column policy.social_signin_facebook_client_id is '소셜 로그인 Facebook Client Id';
comment on column policy.social_signin_facebook_client_secret is '소셜 로그인 Facebook Client Secret';
comment on column policy.social_signin_facebook_redirect_uri is '소셜 로그인 Facebook Redirect URI';
comment on column policy.social_signin_facebook_access_token_uri is '소셜 로그인 Facebook AccessToken URI';
comment on column policy.social_signin_facebook_user_info_uri is '소셜 로그인 Facebook UserInfo URI';
comment on column policy.social_signin_naver_client_id is '소셜 로그인 Naver Client Id';
comment on column policy.social_signin_naver_client_secret is '소셜 로그인 Naver Client Secret';
comment on column policy.social_signin_naver_redirect_uri is '소셜 로그인 Naver Redirect URI';
comment on column policy.social_signin_naver_access_token_uri is '소셜 로그인 Naver AccessToken URI';
comment on column policy.social_signin_naver_user_info_uri is '소셜 로그인 Naver UserInfo URI';
comment on column policy.social_signin_kakao_client_id is '소셜 로그인 Kakao Client Id';
comment on column policy.social_signin_kakao_redirect_uri is '소셜 로그인 Kakao Redirect URI';
comment on column policy.social_signin_kakao_access_token_uri is '소셜 로그인 Kakao AccessToken URI';
comment on column policy.social_signin_kakao_user_info_uri is '소셜 로그인 Kakao UserInfo URI';

comment on column policy.notice_email_host is '알림(메일) 호스트';
comment on column policy.notice_email_port is '알림(메일) 포트';
comment on column policy.notice_email_admin is '알림(메일) 관리자';

comment on column policy.insert_date is '등록일';

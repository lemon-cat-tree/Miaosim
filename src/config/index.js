// src/config/index.js
// 角色枚举（保留原有，无修改）
export const ROLE = {
    ADMIN: 1,        // 管理员
    USER: 2,         // 普通用户
    RESCUE_MEMBER: 3 // 救助组织成员
};

// 权限映射（角色可访问的页面/功能）【核心修改：补齐所有页面路径】
export const PERMISSIONS = {
    [ROLE.ADMIN]: [
        // 管理员专属
        '/pages/admin/user-manage',
        '/pages/rescue-info/manage',
        '/pages/rescue-status/manage',
        // 共享救助成员的权限
        '/pages/cat-archive/detail',
        '/pages/adopt-apply/manage',
        '/pages/rescue-info/publish',
        '/pages/dynamic/publish',
        '/pages/volunteer-apply/manage',
        '/pages/feedback/manage'
    ],
    [ROLE.RESCUE_MEMBER]: [
        '/pages/cat-archive/detail',
        '/pages/adopt-apply/manage',
        '/pages/rescue-info/publish',
        '/pages/dynamic/publish',
        '/pages/volunteer-apply/manage',
        '/pages/feedback/manage',
        // 新增：救助成员可查看救助情况公示
        '/pages/rescue-status/list'
    ],
    [ROLE.USER]: [
        '/pages/cat-archive/index',
        '/pages/adopt-apply/submit',
        '/pages/volunteer-apply/submit',
        '/pages/feedback/submit',
        // 新增：普通用户可访问的公共页面
        '/pages/rescue-info/list',
        '/pages/rescue-status/list',
        '/pages/dynamic/list',
        '/pages/home/index',
        '/pages/mine/index'
    ]
};

// 页面路径（补充新页面）【核心修改：补齐所有页面路径，统一命名规范】
export const PAGE_PATH = {
    // 通用基础页
    HOME: '/pages/home/index',
    MINE: '/pages/mine/index',
    LOGIN: '/pages/load/login/index',
    REGISTER: '/pages/load/register/index',
    FORGET_PASSWORD: '/pages/load/forget-password/index',

    // 猫猫档案
    CAT_ARCHIVE_LIST: '/pages/cat-archive/index',   // 普通用户查看
    CAT_ARCHIVE_DETAIL: '/pages/cat-archive/detail', // 管理员/救助成员编辑

    // 领养申请
    ADOPT_APPLY_SUBMIT: '/pages/adopt-apply/submit', // 普通用户提交
    ADOPT_APPLY_MANAGE: '/pages/adopt-apply/manage', // 管理员/救助成员审核

    // 救助信息
    RESCUE_INFO_LIST: '/pages/rescue-info/list',     // 所有用户查看
    RESCUE_INFO_PUBLISH: '/pages/rescue-info/publish', // 救助成员发布
    RESCUE_INFO_MANAGE: '/pages/rescue-info/manage',   // 管理员管理

    // 救助情况公示
    RESCUE_STATUS_LIST: '/pages/rescue-status/list',   // 所有用户查看
    RESCUE_STATUS_MANAGE: '/pages/rescue-status/manage', // 管理员管理

    // 动态管理
    DYNAMIC_LIST: '/pages/dynamic/list',             // 所有用户浏览
    DYNAMIC_PUBLISH: '/pages/dynamic/publish',       // 管理员/救助成员发布

    // 志愿者申请
    VOLUNTEER_APPLY_SUBMIT: '/pages/volunteer-apply/submit', // 普通用户提交
    VOLUNTEER_APPLY_MANAGE: '/pages/volunteer-apply/manage', // 管理员/救助成员审核

    // 留言反馈
    FEEDBACK_SUBMIT: '/pages/feedback/submit',       // 普通用户提交
    FEEDBACK_MANAGE: '/pages/feedback/manage',       // 管理员/救助成员回复

    // 管理员专属
    ADMIN_USER_MANAGE: '/pages/admin/user-manage',

    // 关于领养
    ABOUT_ADOPT: '/pages/about-adopt/index'
};

// API基础配置
export const API_BASE_URL = 'https://api.your-domain.com'

// API路径配置
export const API_PATH = {
    // 猫咪相关
    CAT_LIST: `${API_BASE_URL}/cats`,
    CAT_DETAIL: `${API_BASE_URL}/cats/`,

    // 领养相关
    ADOPT_SUBMIT: `${API_BASE_URL}/adoptions`,
    ADOPT_LIST: `${API_BASE_URL}/adoptions`,

    // 救助相关
    RESCUE_PUBLISH: `${API_BASE_URL}/rescues`,
    RESCUE_LIST: `${API_BASE_URL}/rescues`,

    // 动态相关
    DYNAMIC_LIST: `${API_BASE_URL}/dynamics`,
    DYNAMIC_PUBLISH: `${API_BASE_URL}/dynamics`,

    // 反馈相关
    FEEDBACK_SUBMIT: `${API_BASE_URL}/feedbacks`,
    FEEDBACK_LIST: `${API_BASE_URL}/feedbacks`,

    // 志愿者相关
    VOLUNTEER_SUBMIT: `${API_BASE_URL}/volunteers`,
    VOLUNTEER_LIST: `${API_BASE_URL}/volunteers`,

    // 用户相关
    USER_LOGIN: `${API_BASE_URL}/users/login`,
    USER_REGISTER: `${API_BASE_URL}/users/register`,
    USER_INFO: `${API_BASE_URL}/users/info`
}

// ✅ 修改为云函数名配置（不再使用HTTP URL）
export const CLOUD_FUNCTION = {
    // 用户相关
    LOGIN: 'login',
    REGISTER: 'register',
    GET_USER_LIST: 'getUserList',
    DELETE_USER: 'deleteUser',

    // 猫猫档案
    GET_CAT_LIST: 'getCatList',
    ADD_CAT: 'addCat',
    EDIT_CAT: 'editCat',

    // 领养申请
    SUBMIT_ADOPT: 'submitAdoption',
    GET_ADOPT_LIST: 'getAdoptionList',
    AUDIT_ADOPT: 'auditAdoption',

    // 救助信息
    GET_RESCUE_LIST: 'getRescueList',
    PUBLISH_RESCUE: 'publishRescue',
    AUDIT_RESCUE: 'auditRescue',

    // 动态
    GET_DYNAMIC_LIST: 'getDynamicList',
    PUBLISH_DYNAMIC: 'publishDynamic',

    // 志愿者申请
    SUBMIT_VOLUNTEER: 'submitVolunteer',
    GET_VOLUNTEER_LIST: 'getVolunteerList',
    APPROVE_VOLUNTEER: 'approveVolunteer',
    REJECT_VOLUNTEER: 'rejectVolunteer',

    // 当前用户信息
    GET_CURRENT_USER: 'getCurrentUser',
    UPDATE_USER_INFO: 'updateUserInfo',

    // 留言反馈
    SUBMIT_FEEDBACK: 'submitFeedback',
    GET_FEEDBACK_LIST: 'getFeedbackList',
    REPLY_FEEDBACK: 'replyFeedback'
};
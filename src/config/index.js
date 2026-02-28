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

// 新增：接口路径（统一管理后端接口地址，便于后续替换）
export const API_PATH = {
    // 用户相关
    USER_LOGIN: '/api/user/login',
    USER_REGISTER: '/api/user/register',
    USER_LIST: '/api/admin/user/list',
    USER_DELETE: '/api/admin/user/delete',

    // 猫猫档案
    CAT_LIST: '/api/cat/list',
    CAT_ADD: '/api/cat/add',
    CAT_EDIT: '/api/cat/edit',

    // 领养申请
    ADOPT_SUBMIT: '/api/adopt/submit',
    ADOPT_LIST: '/api/adopt/list',
    ADOPT_AUDIT: '/api/adopt/audit',

    // 救助信息
    RESCUE_LIST: '/api/rescue/list',
    RESCUE_PUBLISH: '/api/rescue/publish',
    RESCUE_AUDIT: '/api/rescue/audit',

    // 动态
    DYNAMIC_LIST: '/api/dynamic/list',
    DYNAMIC_PUBLISH: '/api/dynamic/publish',

    // 志愿者申请
    VOLUNTEER_SUBMIT: '/api/volunteer/submit',
    VOLUNTEER_LIST: '/api/volunteer/list',
    VOLUNTEER_APPROVE: '/api/volunteer/approve',
    VOLUNTEER_REJECT: '/api/volunteer/reject',

    // 当前用户信息
    USER_CURRENT: '/api/user/current',
    USER_UPDATE: '/api/user/update',

    // 留言反馈
    FEEDBACK_SUBMIT: '/api/feedback/submit',
    FEEDBACK_LIST: '/api/feedback/list',
    FEEDBACK_REPLY: '/api/feedback/reply'
};
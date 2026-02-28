import { cloudRequest } from '@/utils/request'
import { CLOUD_FUNCTION } from '@/config/index'

// 使用云函数调用，移除所有HTTP请求
export function login(params) {
    return cloudRequest(CLOUD_FUNCTION.LOGIN, params);
}

// 注册接口
export const register = (data) => {
    return cloudRequest(CLOUD_FUNCTION.REGISTER, data);
};

// 获取用户列表（管理员权限）
export const getUserList = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_USER_LIST, params);
};

// 删除用户（管理员权限）
export const deleteUser = (id) => {
    return cloudRequest(CLOUD_FUNCTION.DELETE_USER, { id });
};

// 获取当前用户信息
export const getCurrentUser = () => {
    return cloudRequest(CLOUD_FUNCTION.GET_CURRENT_USER);
};

// 更新用户信息
export const updateUserInfo = (data) => {
    return cloudRequest(CLOUD_FUNCTION.UPDATE_USER_INFO, data);
};

// ✅ 添加其他常用API
export const getCatList = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_CAT_LIST, params);
};

export const submitAdoption = (data) => {
    return cloudRequest(CLOUD_FUNCTION.SUBMIT_ADOPT, data);
};

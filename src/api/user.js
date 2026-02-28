import { request } from '@/utils/request'
import { API_PATH } from '@/config/index'

// 登录接口
export const login = (data) => {
    return request({
        url: API_PATH.USER_LOGIN,
        method: 'POST',
        data
    })
}

// 注册接口
export const register = (data) => {
    return request({
        url: API_PATH.USER_REGISTER,
        method: 'POST',
        data
    })
}

// 获取用户列表（管理员权限）
export const getUserList = (params) => {
    return request({
        url: API_PATH.USER_LIST,
        method: 'GET',
        params
    })
}

// 删除用户（管理员权限）
export const deleteUser = (id) => {
    return request({
        url: API_PATH.USER_DELETE.replace(':id', id),
        method: 'DELETE'
    })
}

// 获取当前用户信息
export const getCurrentUser = () => {
    return request({
        url: API_PATH.USER_CURRENT,
        method: 'GET'
    })
}

// 更新用户信息
export const updateUserInfo = (data) => {
    return request({
        url: API_PATH.USER_UPDATE,
        method: 'PUT',
        data
    })
}
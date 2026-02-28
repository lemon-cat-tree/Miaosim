import { cloudRequest } from '@/utils/request';
import { CLOUD_FUNCTION } from '@/config/index';

// 救助信息相关API

// 获取救助信息列表
export const getRescueList = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_RESCUE_LIST, params);
};

// 发布救助信息
export const publishRescue = (data) => {
    return cloudRequest(CLOUD_FUNCTION.PUBLISH_RESCUE, data);
};

// 审核救助信息（管理员权限）
export const auditRescue = (data) => {
    return cloudRequest(CLOUD_FUNCTION.AUDIT_RESCUE, data);
};

// 获取当前用户的救助信息记录
export const getUserRescueRecords = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_RESCUE_LIST, { ...params, userId: wx.getStorageSync('userId') });
};

// 更新救助信息状态
export const updateRescueStatus = (data) => {
    return cloudRequest(CLOUD_FUNCTION.UPDATE_RESCUE_STATUS, data);
};
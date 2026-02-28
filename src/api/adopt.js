import { cloudRequest } from '@/utils/request';
import { CLOUD_FUNCTION } from '@/config/index';

// 领养申请相关API

// 提交领养申请
export const submitAdoption = (data) => {
    return cloudRequest(CLOUD_FUNCTION.SUBMIT_ADOPT, data);
};

// 获取领养申请列表（管理员/救助成员权限）
export const getAdoptionList = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_ADOPT_LIST, params);
};

// 审核领养申请
export const auditAdoption = (data) => {
    return cloudRequest(CLOUD_FUNCTION.AUDIT_ADOPT, data);
};

// 获取当前用户的领养申请记录
export const getUserAdoptionRecords = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_ADOPT_LIST, { ...params, userId: wx.getStorageSync('userId') });
};
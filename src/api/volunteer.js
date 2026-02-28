import { cloudRequest } from '@/utils/request';
import { CLOUD_FUNCTION } from '@/config/index';

// 志愿者申请相关API

// 提交志愿者申请
export const submitVolunteer = (data) => {
    return cloudRequest(CLOUD_FUNCTION.SUBMIT_VOLUNTEER, data);
};

// 获取志愿者申请列表（管理员/救助成员权限）
export const getVolunteerList = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_VOLUNTEER_LIST, params);
};

// 审批志愿者申请
export const approveVolunteer = (data) => {
    return cloudRequest(CLOUD_FUNCTION.APPROVE_VOLUNTEER, data);
};

// 拒绝志愿者申请
export const rejectVolunteer = (data) => {
    return cloudRequest(CLOUD_FUNCTION.REJECT_VOLUNTEER, data);
};

// 获取当前用户的志愿者申请记录
export const getUserVolunteerRecords = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_VOLUNTEER_LIST, { ...params, userId: wx.getStorageSync('userId') });
};
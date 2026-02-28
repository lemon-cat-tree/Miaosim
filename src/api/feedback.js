import { cloudRequest } from '@/utils/request';
import { CLOUD_FUNCTION } from '@/config/index';

// 留言反馈相关API

// 提交留言反馈
export const submitFeedback = (data) => {
    return cloudRequest(CLOUD_FUNCTION.SUBMIT_FEEDBACK, data);
};

// 获取留言反馈列表（管理员/救助成员权限）
export const getFeedbackList = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_FEEDBACK_LIST, params);
};

// 回复留言反馈
export const replyFeedback = (data) => {
    return cloudRequest(CLOUD_FUNCTION.REPLY_FEEDBACK, data);
};

// 获取当前用户的留言反馈记录
export const getUserFeedbackRecords = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_FEEDBACK_LIST, { ...params, userId: wx.getStorageSync('userId') });
};
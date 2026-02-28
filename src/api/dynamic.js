import { cloudRequest } from '@/utils/request';
import { CLOUD_FUNCTION } from '@/config/index';

// 动态相关API

// 获取动态列表
export const getDynamicList = (params) => {
    return cloudRequest(CLOUD_FUNCTION.GET_DYNAMIC_LIST, params);
};

// 发布动态
export const publishDynamic = (data) => {
    return cloudRequest(CLOUD_FUNCTION.PUBLISH_DYNAMIC, data);
};

// 删除动态（管理员/发布者权限）
export const deleteDynamic = (id) => {
    return cloudRequest(CLOUD_FUNCTION.DELETE_DYNAMIC, { id });
};

// 点赞动态
export const likeDynamic = (id) => {
    return cloudRequest(CLOUD_FUNCTION.LIKE_DYNAMIC, { id });
};

// 评论动态
export const commentDynamic = (data) => {
    return cloudRequest(CLOUD_FUNCTION.COMMENT_DYNAMIC, data);
};
import { createAction } from 'redux-actions';
import * as types from '../types/rescue';

// 救助信息相关action

export const fetchRescueList = createAction(types.FETCH_RESCUE_LIST_REQUEST);
export const fetchRescueListSuccess = createAction(types.FETCH_RESCUE_LIST_SUCCESS);
export const fetchRescueListFailure = createAction(types.FETCH_RESCUE_LIST_FAILURE);

export const publishRescueRequest = createAction(types.PUBLISH_RESCUE_REQUEST);
export const publishRescueSuccess = createAction(types.PUBLISH_RESCUE_SUCCESS);
export const publishRescueFailure = createAction(types.PUBLISH_RESCUE_FAILURE);

export const auditRescueRequest = createAction(types.AUDIT_RESCUE_REQUEST);
export const auditRescueSuccess = createAction(types.AUDIT_RESCUE_SUCCESS);
export const auditRescueFailure = createAction(types.AUDIT_RESCUE_FAILURE);

export const updateRescueStatusRequest = createAction(types.UPDATE_RESCUE_STATUS_REQUEST);
export const updateRescueStatusSuccess = createAction(types.UPDATE_RESCUE_STATUS_SUCCESS);
export const updateRescueStatusFailure = createAction(types.UPDATE_RESCUE_STATUS_FAILURE);

// 异步action creator
export const fetchRescueListAsync = (params) => {
    return (dispatch, getState) => {
        dispatch(fetchRescueList());
        // 实际项目中需要在这里调用api.rescue.getRescueList(params)
    };
};

export const publishRescueAsync = (data) => {
    return (dispatch, getState) => {
        dispatch(publishRescueRequest());
        // 实际项目中需要在这里调用api.rescue.publishRescue(data)
    };
};

export const auditRescueAsync = (data) => {
    return (dispatch, getState) => {
        dispatch(auditRescueRequest());
        // 实际项目中需要在这里调用api.rescue.auditRescue(data)
    };
};

export const updateRescueStatusAsync = (data) => {
    return (dispatch, getState) => {
        dispatch(updateRescueStatusRequest());
        // 实际项目中需要在这里调用api.rescue.updateRescueStatus(data)
    };
};
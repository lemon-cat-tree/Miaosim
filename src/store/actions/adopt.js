import { createAction } from 'redux-actions';
import * as types from '../types/adopt';

// 领养申请相关action

export const fetchAdoptionList = createAction(types.FETCH_ADOPTION_LIST_REQUEST);
export const fetchAdoptionListSuccess = createAction(types.FETCH_ADOPTION_LIST_SUCCESS);
export const fetchAdoptionListFailure = createAction(types.FETCH_ADOPTION_LIST_FAILURE);

export const submitAdoptionRequest = createAction(types.SUBMIT_ADOPTION_REQUEST);
export const submitAdoptionSuccess = createAction(types.SUBMIT_ADOPTION_SUCCESS);
export const submitAdoptionFailure = createAction(types.SUBMIT_ADOPTION_FAILURE);

export const auditAdoptionRequest = createAction(types.AUDIT_ADOPTION_REQUEST);
export const auditAdoptionSuccess = createAction(types.AUDIT_ADOPTION_SUCCESS);
export const auditAdoptionFailure = createAction(types.AUDIT_ADOPTION_FAILURE);

// 异步action creator
export const fetchAdoptionListAsync = (params) => {
    return (dispatch, getState) => {
        dispatch(fetchAdoptionList());
        // 这里应该调用API，但为了简化，我们只做action分发
        // 实际项目中需要在这里调用api.adopt.getAdoptionList(params)
    };
};

export const submitAdoptionAsync = (data) => {
    return (dispatch, getState) => {
        dispatch(submitAdoptionRequest());
        // 实际项目中需要在这里调用api.adopt.submitAdoption(data)
    };
};

export const auditAdoptionAsync = (data) => {
    return (dispatch, getState) => {
        dispatch(auditAdoptionRequest());
        // 实际项目中需要在这里调用api.adopt.auditAdoption(data)
    };
};
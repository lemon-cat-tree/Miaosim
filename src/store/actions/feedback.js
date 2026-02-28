import { createAction } from 'redux-actions';
import * as types from '../types/feedback';

// 留言反馈相关action

export const fetchFeedbackList = createAction(types.FETCH_FEEDBACK_LIST_REQUEST);
export const fetchFeedbackListSuccess = createAction(types.FETCH_FEEDBACK_LIST_SUCCESS);
export const fetchFeedbackListFailure = createAction(types.FETCH_FEEDBACK_LIST_FAILURE);

export const submitFeedbackRequest = createAction(types.SUBMIT_FEEDBACK_REQUEST);
export const submitFeedbackSuccess = createAction(types.SUBMIT_FEEDBACK_SUCCESS);
export const submitFeedbackFailure = createAction(types.SUBMIT_FEEDBACK_FAILURE);

export const replyFeedbackRequest = createAction(types.REPLY_FEEDBACK_REQUEST);
export const replyFeedbackSuccess = createAction(types.REPLY_FEEDBACK_SUCCESS);
export const replyFeedbackFailure = createAction(types.REPLY_FEEDBACK_FAILURE);

// 异步action creator
export const fetchFeedbackListAsync = (params) => {
    return (dispatch, getState) => {
        dispatch(fetchFeedbackList());
        // 实际项目中需要在这里调用api.feedback.getFeedbackList(params)
    };
};

export const submitFeedbackAsync = (data) => {
    return (dispatch, getState) => {
        dispatch(submitFeedbackRequest());
        // 实际项目中需要在这里调用api.feedback.submitFeedback(data)
    };
};

export const replyFeedbackAsync = (data) => {
    return (dispatch, getState) => {
        dispatch(replyFeedbackRequest());
        // 实际项目中需要在这里调用api.feedback.replyFeedback(data)
    };
};
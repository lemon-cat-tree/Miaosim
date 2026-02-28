import { createAction } from 'redux-actions';
import * as types from '../types/cat';

// 猫猫档案相关action

export const fetchCatList = createAction(types.FETCH_CAT_LIST_REQUEST);
export const fetchCatListSuccess = createAction(types.FETCH_CAT_LIST_SUCCESS);
export const fetchCatListFailure = createAction(types.FETCH_CAT_LIST_FAILURE);

export const addCatRequest = createAction(types.ADD_CAT_REQUEST);
export const addCatSuccess = createAction(types.ADD_CAT_SUCCESS);
export const addCatFailure = createAction(types.ADD_CAT_FAILURE);

export const editCatRequest = createAction(types.EDIT_CAT_REQUEST);
export const editCatSuccess = createAction(types.EDIT_CAT_SUCCESS);
export const editCatFailure = createAction(types.EDIT_CAT_FAILURE);

// 异步action creator
export const fetchCatListAsync = (params) => {
    return (dispatch, getState) => {
        dispatch(fetchCatList());
        // 实际项目中需要在这里调用api.cat.getCatList(params)
    };
};

export const addCatAsync = (data) => {
    return (dispatch, getState) => {
        dispatch(addCatRequest());
        // 实际项目中需要在这里调用api.cat.addCat(data)
    };
};

export const editCatAsync = (data) => {
    return (dispatch, getState) => {
        dispatch(editCatRequest());
        // 实际项目中需要在这里调用api.cat.editCat(data)
    };
};
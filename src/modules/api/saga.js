import api from "./api";
import { apiActions, API_ACTIONS } from "./actions";
import {takeEvery, put, all} from 'redux-saga/effects';

export function* watchApiLoad() {
    //Сага которая на каждый свой тип запускает onApiLoad
    yield takeEvery(action => action.type.startsWith(API_ACTIONS.FETCH_START), onApiLoad);
}

export function* onApiLoad({payload, type}) {
    const actionType = type.replace(API_ACTIONS.FETCH_START, '').toLowerCase();

    try {
        const response = yield api.fetch(actionType, payload);
        yield put(apiActions.fetchSuccess(actionType, response));
    } catch(e) {
        yield put(apiActions.fetchFailure(actionType, e));
    }
}

export default function* apiRootSaga() {
    yield all ([watchApiLoad()]);
}

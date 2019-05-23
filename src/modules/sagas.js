import { call, all, put, takeEvery } from 'redux-saga/effects'
import action from './action';
const axios = require('axios');

const getItemsService = () => {
    return axios.get('https://getitems.free.beeceptor.com/items');
}
export function* getItems() {
  const items = yield call(getItemsService);
  
  yield put({ type: 'GET_ITEMS_SUCCESS', items: items.data })
}

export function* getItemSaga() {
  yield takeEvery(action.Types.GET_ITEMS, getItems)
}

export default function* rootSaga() {
    yield all([
        getItemSaga()
    ])
  }
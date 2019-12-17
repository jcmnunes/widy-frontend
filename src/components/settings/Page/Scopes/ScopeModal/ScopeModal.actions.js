import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Toaster } from '@binarycapsule/ui-capsules';

export const createScopeApi = params => axios.post('/api/scopes', params);

export const CREATE_SCOPE_REQUEST = 'scopes/CREATE_SCOPE_REQUEST';
export const CREATE_SCOPE_SUCCESS = 'scopes/CREATE_SCOPE_SUCCESS';

export const createScope = (values, helpers) => ({
  type: CREATE_SCOPE_REQUEST,
  values,
  helpers,
});

export const createScopeSuccess = scope => ({
  type: CREATE_SCOPE_SUCCESS,
  scope,
});

export function* createScopeSaga(action) {
  try {
    const { data: scope } = yield call(() => createScopeApi(action.values));
    yield put(createScopeSuccess(scope));
    action.helpers.closeModal();
  } catch (error) {
    const {
      response: { data },
    } = error;
    if (data && data.field && data.error) {
      action.helpers.setFieldError(data.field, data.error);
    } else {
      Toaster.error({
        title: 'Something went wrong',
        message: 'Scope could not be created',
      });
    }
  }
}

export function* watchCreateScopeSaga() {
  yield takeLatest(CREATE_SCOPE_REQUEST, createScopeSaga);
}

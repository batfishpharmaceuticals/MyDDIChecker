import * as types from '../constants/actionTypes';

export const handleLoginUser = (userId, rxData) => ({
  type: types.HANDLE_LOGIN_USER,
  payload: { userId, rxData },
});

export const AddRx = (rxInput) => ({
  type: types.ADD_RX,
  payload: rxInput,
});

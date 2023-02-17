import { userInfo } from 'os';
import { atom, selector } from 'recoil';

export const userState = selector({
  key: 'userState',
  get: () => userInfo,
});

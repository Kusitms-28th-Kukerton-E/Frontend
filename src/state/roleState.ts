import { atom } from 'recoil';
import persistAtom from './persistAtom';

export const roleState = atom<string>({
  key: 'roleState',
  default: '',
  effects: [persistAtom],
});

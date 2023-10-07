import { atom } from 'recoil';
import persistAtom from './persistAtom';

export const roleState = atom<string>({
  key: 'roleState',
  default: 'ROLE_Kid',
  effects: [persistAtom],
});

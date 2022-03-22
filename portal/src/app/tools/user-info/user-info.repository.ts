import { createStore, withProps, select } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { UserInfo } from './user-info';

interface state {
  histories: UserInfo[];
}

const store = createStore({ name: 'userInfoStore' }, withProps<state>({ histories: [] }));

persistState(store, { key: 'userInfo', storage: localStorageStrategy });

export class UserInfoState {
  histories$ = store.pipe(select((state) => state.histories));

  pushHistory(information: UserInfo) {
    let histories = store.getValue().histories;
    if (store.getValue().histories.length) {
      const lastHistory = histories.slice(-1)[0];
      if (lastHistory.headers['x-forwarded-for'] === information.headers['x-forwarded-for']) {
        return;
      }
      histories = histories.slice(-2, -1);
    }
    histories.push(information);
    store.update((state) => (state = { histories: histories }));
  }
}

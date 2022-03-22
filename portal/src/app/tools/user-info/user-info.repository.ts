import { createStore, withProps, select } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { UserInfo } from './user-info';

interface state {
  histories: UserInfo[];
}

const store = createStore({ name: 'userInfoStore' }, withProps<state>({ histories: [] }));

persistState(store, { key: 'userInfo', storage: localStorageStrategy });

export class UserInfoState {
  histories$ = store.pipe(select((state) => state.histories.reverse()));

  pushHistory(history: UserInfo) {
    let histories = store.getValue().histories;
    if (store.getValue().histories.length) {
      const lastHistory = histories.slice(-1)[0];
      if (lastHistory.headers['x-forwarded-for'] === history.headers['x-forwarded-for']) {
        return;
      }
    }
    histories.push(history);
    store.update((state) => (state = { histories: histories }));
  }

  reset() {
    store.reset();
  }
}

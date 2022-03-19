import { createStore, withProps } from '@ngneat/elf';
import { persistState, sessionStorageStrategy } from '@ngneat/elf-persist-state';

interface state {
  location: number;
}

const pageStore = createStore({ name: 'pageStore' }, withProps<state>({ location: 0 }));

persistState(pageStore, { key: 'page', storage: sessionStorageStrategy });

export class PageState {
  location = pageStore.getValue().location;

  update(key: keyof state, value: any) {
    pageStore.update((state) => ({
      ...state,
      [key]: value,
    }));
  }
}

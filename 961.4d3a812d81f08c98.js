"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[961],{6961:e=>{e.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/19","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/19/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/19/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/19/events","html_url":"https://github.com/kemu3007/portal/issues/19","id":1174254849,"node_id":"I_kwDOG7qoq85F_bUB","number":19,"title":"Angular \u72b6\u614b\u7ba1\u7406\u3092\u884c\u3046 @ngneat/elf ","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900074882,"node_id":"LA_kwDOG7qoq87odmuC","url":"https://api.github.com/repos/kemu3007/portal/labels/Angular","name":"Angular","color":"D93F0B","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":[],"created_at":"2022-03-19T12:29:12Z","updated_at":"2022-03-21T14:07:38Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"[@datorama/akita](https://github.com/datorama/akita)\u306e\u30da\u30fc\u30b8\u306b[@ngneat/elf](https://github.com/ngneat/elf)\u3092\u78ba\u8a8d\u3057\u3066\u306d\u3068\u3044\u3046\u4ee5\u4e0b\u306e\u8a18\u8f09\u304c\u3042\u3063\u305f\u306e\u3067\u52d5\u4f5c\u78ba\u8a8d\\r\\n\\r\\n`Elf, a newer state management solution, has been published. We recommend checking it out \u{1f680}`\\r\\n\\r\\n---\\r\\n\\r\\n#### \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\\r\\n\\r\\n\u4eca\u56de\u306f\u30bb\u30c3\u30b7\u30e7\u30f3\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081 `@ngneat/elf-persist-state` \u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\\r\\n\\r\\n```zsh\\r\\n$ npm i @ngneat/elf @ngneat/elf-persist-state\\r\\n```\\r\\n\\r\\n---\\r\\n\\r\\n#### \u5b9f\u88c5\\r\\n\\r\\nakita\u3068\u7570\u306a\u308a\u3001cli\u3092\u5229\u7528\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u3066\u5229\u7528\u3059\u308b\u969b\u306binject\u3059\u308b\u5f62\u3067\u306f\u306a\u304f\u3001\u4ee5\u4e0b\u306e\u8a18\u8ff0\u306e\u307f\u3067\u52d5\u304b\u3059\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\\r\\n\\r\\n- `shared/page.repository.ts`\\r\\n\\r\\n```ts\\r\\nimport { createStore, withProps } from \'@ngneat/elf\';\\r\\nimport { persistState, sessionStorageStrategy } from \'@ngneat/elf-persist-state\';\\r\\n\\r\\ninterface state {\\r\\n  location: number;\\r\\n}\\r\\n\\r\\nconst pageStore = createStore({ name: \'pageStore\' }, withProps<state>({ location: 0 }));\\r\\n\\r\\npersistState(pageStore, { key: \'page\', storage: sessionStorageStrategy });\\r\\n\\r\\nexport class PageState {\\r\\n  location = pageStore.getValue().location;\\r\\n\\r\\n  update(key: keyof state, value: any) {\\r\\n    pageStore.update((state) => ({\\r\\n      ...state,\\r\\n      [key]: value,\\r\\n    }));\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\n---\\r\\n\\r\\n#### \u611f\u60f3\\r\\n\\r\\nakita\u306e\u69cb\u9020(service, store, query)\u304c\u308f\u304b\u308a\u3084\u3059\u3044\u4ee3\u308f\u308a\u306b\u8907\u96d1\u3067\u3042\u308b\u306e\u306b\u5bfe\u3057\u3066elf\u306b\u3064\u3044\u3066\u306f\u624b\u8efd\u3067\u6271\u3044\u3084\u3059\u3044\u3068\u3044\u3046\u5370\u8c61\u3092\u53d7\u3051\u307e\u3057\u305f\u3002\\r\\n\\r\\n\u4eca\u5ea6http\u30ea\u30af\u30a8\u30b9\u30c8\u56de\u308a\u306b\u95a2\u3057\u3066\u3082\u30c6\u30b9\u30c8\u3092\u884c\u3046\u4e88\u5b9a\u3067\u3059\u3002\\r\\n\\r\\nelf\u306b\u5b8c\u5168\u79fb\u884c\u3057\u3066\u3057\u307e\u3046\u306e\u304b\u3068\u4eca\u307e\u3067\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u79fb\u884c\u306b\u3064\u3044\u3066\u3061\u3087\u3063\u3068\u8f9b\u3044\u304b\u3082\u3057\u308c\u306a\u3044\u306a\u3068\u601d\u3063\u305f\u306e\u3067\u3059\u304c[\u3053\u306e\u8fba\u308a](https://github.com/datorama/akita/discussions/770#discussioncomment-1620967)\u3092\u898b\u308b\u9650\u308a\u3067\u306f\u7dad\u6301\u306f\u3055\u308c\u308b\u3088\u3046\u3067\u3059\u3002","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/19/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/19/timeline","performed_via_github_app":null}')}}]);
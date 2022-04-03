"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[443],{5443:t=>{t.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/17","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/17/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/17/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/17/events","html_url":"https://github.com/kemu3007/portal/issues/17","id":1169514542,"node_id":"I_kwDOG7qoq85FtWAu","number":17,"title":"Angular component\u5185\u306bscript\u30bf\u30b0\u3092\u8a2d\u7f6e\u3059\u308b","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900074882,"node_id":"LA_kwDOG7qoq87odmuC","url":"https://api.github.com/repos/kemu3007/portal/labels/Angular","name":"Angular","color":"D93F0B","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2022-03-15T10:57:47Z","updated_at":"2022-03-15T10:57:47Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"script\u30bf\u30b0\u3092 `src/index.html` \u4ee5\u5916\u306b\u8a2d\u7f6e\u3057\u305f\u5834\u5408\u3001\u81ea\u52d5\u7684\u306b\u53d6\u308a\u9664\u304f\u6319\u52d5\u3092\u793a\u3057\u307e\u3059\u3002\\r\\n\\r\\n\u53c2\u8003: [angular/angular#4903](https://github.com/angular/angular/issues/4903)\\r\\n\\r\\n\u305d\u306e\u305f\u3081\u3001\u4f8b\u3048\u3070[Twitter Publish](https://publish.twitter.com/#)\u3067\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306a\u30dc\u30bf\u30f3\u3092\u8a2d\u7f6e\u3057\u305f\u969b\u3001\u30c4\u30a4\u30fc\u30c8\u30dc\u30bf\u30f3\u306ecss\u304c\u5f53\u305f\u3089\u306a\u3044\u306a\u3069\u3068\u3044\u3063\u305f\u4e0d\u5177\u5408\u304c\u767a\u751f\u3057\u307e\u3059\u3002\\r\\n\\r\\n### \u89e3\u6c7a\u7b56\\r\\n\\r\\n```ts\\r\\nimport { Component, AfterViewInit } from \'@angular/core\';\\r\\n\\r\\n@Component({\\r\\n  selector: \'app-tweet-btn\',\\r\\n  template: `<a\\r\\n    id=\\"btn\\"\\r\\n    href=\\"https://twitter.com/share?ref_src=twsrc%5Etfw\\"\\r\\n    class=\\"twitter-share-button\\"\\r\\n    data-show-count=\\"false\\"\\r\\n    >tweet</a\\r\\n  >`,\\r\\n})\\r\\nexport class TweetBtnComponent implements AfterViewInit {\\r\\n  ngAfterViewInit(): void {\\r\\n    const script = document.createElement(\'script\');\\r\\n    script.async = true;\\r\\n    script.src = \'https://platform.twitter.com/widgets.js\';\\r\\n    const btn = document.getElementById(\'btn\')!;\\r\\n    btn.insertAdjacentElement(\'afterend\', script);\\r\\n  }\\r\\n}\\r\\n\\r\\n```\\r\\n\\r\\n\u30d3\u30e5\u30fc\u306e\u521d\u671f\u5316\u5f8c\u306bscript\u30bf\u30b0\u3092\u751f\u6210\u3001\u6307\u5b9a\u3057\u305f\u30bf\u30b0\u306e\u3059\u3050\u5f8c\u308d\u306e\u4f4d\u7f6e\u306bscript\u30bf\u30b0\u3092\u8a2d\u7f6e\u3055\u305b\u3066\u3044\u307e\u3059\u3002\\r\\n\\r\\n\u3053\u306e\u30da\u30fc\u30b8\u30bf\u30a4\u30c8\u30eb\u4e0b\u90e8\u306e\u30c4\u30a4\u30fc\u30c8\u30dc\u30bf\u30f3\u3092\u8a2d\u7f6e\u3059\u308b\u969b\u306b\u5c11\u3057\u8ff7\u3063\u305f\u306e\u3067\u30e1\u30e2\u3092\u6b8b\u3057\u3066\u304a\u304d\u307e\u3059\u3002","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/17/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/17/timeline","performed_via_github_app":null}')}}]);
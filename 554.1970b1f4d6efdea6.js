"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[554],{3554:t=>{t.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/20","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/20/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/20/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/20/events","html_url":"https://github.com/kemu3007/portal/issues/20","id":1174435949,"node_id":"I_kwDOG7qoq85GAHht","number":20,"title":"\u30b5\u30a4\u30c8\u306e\u69cb\u6210\u306b\u3064\u3044\u3066","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900074882,"node_id":"LA_kwDOG7qoq87odmuC","url":"https://api.github.com/repos/kemu3007/portal/labels/Angular","name":"Angular","color":"D93F0B","default":false,"description":""},{"id":3900075763,"node_id":"LA_kwDOG7qoq87odm7z","url":"https://api.github.com/repos/kemu3007/portal/labels/Django","name":"Django","color":"5FC353","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":[],"created_at":"2022-03-20T04:20:38Z","updated_at":"2022-03-20T12:22:00Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"#### \u65e7\u30b5\u30a4\u30c8[kemu.site](https://kemu.site)\\r\\n<img width=\\"834\\" alt=\\"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2022-03-20 13 11 44\\" src=\\"https://user-images.githubusercontent.com/29157528/159147797-67a49372-2bf0-4176-a499-54cadb2d1a36.png\\">\\r\\n\\r\\n\u4e00\u822c\u7684\u306aEC2\u3092\u5229\u7528\u3057\u305fWeb\u30b5\u30fc\u30d0\u306e\u69cb\u6210\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u305d\u308c\u307b\u3069\u30a2\u30af\u30bb\u30b9\u6570\u3092\u898b\u8fbc\u3093\u3067\u3044\u306a\u3044\u3053\u3068\u304b\u3089postgres\u3092\u7acb\u3066\u305a\u3001sqlite\u3067\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002\\r\\n\\r\\n\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u306fALB\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067http -> https\u306e\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u51e6\u7406\u3092\u884c\u308f\u305b\u3066\u3044\u307e\u3059\u3002CLB\u3092\u5229\u7528\u3057\u305f\u5834\u5408\u3053\u306e\u51e6\u7406\u304c\u3067\u304d\u306a\u3044\u305f\u3081\u4ee5\u4e0b\u306e\u30da\u30fc\u30b8\u3092\u53c2\u8003\u306b\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\\r\\n\\r\\n[Classic Load Balancer \u3067 HTTP \u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092 HTTPS \u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\u3002](https://aws.amazon.com/jp/premiumsupport/knowledge-center/redirect-http-https-elb/)\\r\\n\\r\\n\u4e0a\u8a18\u51e6\u7406\u3092\u884c\u3063\u305f\u5834\u5408\u306e\u6b20\u70b9\u3068\u3057\u3066\u5168\u3066\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u3057\u3066if\u306e\u5206\u5c90\u51e6\u7406\u304c\u884c\u308f\u308c\u308b\u305f\u3081Web\u30b5\u30fc\u30d0\u3078\u306e\u8ca0\u8377\u304c\u9ad8\u307e\u308a\u3084\u3059\u3044\u3053\u3068\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002\u307e\u305f\u3001AWS WAF\u306a\u3069\u3082\u5229\u7528\u3059\u308b\u3053\u3068\u3092\u8003\u3048\u308b\u3068ALB\u3078\u79fb\u884c\u3057\u305f\u65b9\u304c\u826f\u3044\u3067\u3059\u3002\\r\\n\\r\\n\\r\\n#### \u73fe\u884c\u30b5\u30a4\u30c8[portal.kemu.site](https://portal.kemu.site)\\r\\n<img width=\\"540\\" alt=\\"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2022-03-20 13 19 50\\" src=\\"https://user-images.githubusercontent.com/29157528/159147978-0b0dcba4-c70c-4de9-adc9-8afae77027a0.png\\">\\r\\n\\r\\nGithub Actions\u4e0a\u3067Github\u306eissue\u3092\u53ce\u96c6\u3057\u3066json\u5f62\u5f0f\u3067\u51fa\u529b\u3055\u305b\u3001\u64ec\u4f3c\u7684\u306a\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u3057\u3066\u6271\u3046\u3053\u3068\u3067django\u30b5\u30fc\u30d0\u3092\u5ec3\u6b62\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u306b\u3088\u308a\u3001Web\u30b5\u30fc\u30d0\u3078\u306essh\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001\u7ba1\u7406\u624b\u7d9a\u304d\u304c\u7c21\u7565\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\\r\\n\\r\\n\u307e\u305f\u3001EC2\u306e\u6599\u91d1\u7b49\u306b\u95a2\u3057\u3066\u3082\u8003\u3048\u308b\u5fc5\u8981\u304c\u306a\u3044\u305f\u3081\u30b3\u30b9\u30c8\u9762\u3067\u306e\u6700\u9069\u5316\u3082\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u3002","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/20/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/20/timeline","performed_via_github_app":null}')}}]);
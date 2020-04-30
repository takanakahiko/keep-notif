# keep-notif

Organization に入ったときにすべてのリポジトリの通知が来るようになって通知欄がすごいことになって困ったひとが使うやつ。

その Organization のすべてのリポジトリを UnWatch します。
適当に制限を作りたかったらフィルターの部分をいじってください。

```bash
$ npm i
$ export ORG_NAME=XXXXXXX
$ export GITHUB_PERSONAL_ACCESS_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXX
$ node index.js
```

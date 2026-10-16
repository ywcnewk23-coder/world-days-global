# World Days｜世界の国家史カレンダー（拡充版 v1）

iPhone・iPad・PCのブラウザで使う静的Webアプリです。

## GitHub Pagesで公開
1. このZIPをダウンロードして、iPadの「ファイル」アプリで解凍します。
2. GitHubで新しい **Public repository** を作成します（例：`world-days-global`）。README追加は任意です。
3. リポジトリの `Add file` → `Upload files` から、このフォルダの**中身すべて**（`index.html`、`data.js`、`app.js`、`styles.css` など）をアップロードします。`index.html` がリポジトリ直下にあることが重要です。
4. `Settings` → `Pages` → `Deploy from a branch` → `main` → `/(root)` → `Save`。公開URLは `https://ユーザー名.github.io/リポジトリ名/` 形式です。
5. 公開サイトはインターネット上で見られる可能性があります。個人情報を置かないでください。GitHub Pages公式説明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## データについて
- `data.js` に現在 **75件** のイベントを収録しています。これは全世界網羅版ではなく、拡充の第一弾です。
- 各項目は `id`, `country`, `countryEn`, `date` (`MM-DD`), `name`, `nameEn`, `category`, `year`, `status`, `official`, `origin`, `sources` を使用します。
- 国民の日・独立記念日と、国家史上の重要な日付を分けるため、`status` は `official` または `historical` を使用しています。
- `origin` は背景説明です。国ごとに独立宣言、実際の独立、共和国成立、統一などは別日付になる場合があります。
- 出典リンクには政府・公的機関のトップページなど「調査の入口」も含まれます。**すべてのURLが該当日付を直接裏付けることを確認済みという意味ではありません**。公開用の確定版にする前に、各項目の根拠ページを個別に確認してください。リンクが不正確・移動済みの場合は修正してください。
- 現段階では国・地域の全数リストとの照合、重複確認、公式記念日ステータスの二次確認が未完了です。特に複雑な国家継承や複数の独立段階がある国は、単一の「建国日」に単純化しない方針です。

## 更新のしかた
`data.js` の `WORLD_DAYS_DATA` 配列に、同じ形式のイベントを追加・修正してください。データだけを差し替える場合も、ファイル名を `data.js` のままにします。変更後にGitHubへアップロードしてコミットすると、GitHub Pagesが再公開します。

# 変更記録

## 2026-10-28（日本時間）初版・GitHub Pages移行
- Sitesで作成したCommand Pocketのアプリ本体と初期サンプル12件を移行。
- Sites固有のホスティング設定・認証情報・履歴は移行対象外。
- GitHub Pages向けにdocsディレクトリと.nojekyllを用意。
- READMEに使用方法、バックアップ、保存領域の違い、公開手順を記載。
- JavaScript構文検査に成功。Sitesプレビューで検索、お気に入りの再読込み後の保持、PR URL差し替え、手動コピーへのフォールバックを確認。
- GitHub Pages公開元をmain /docsに設定。初回ビルド・配信成功: https://github.com/tetsujisugimori-coder/Command-Pocket/actions/runs/40606138599
- 公開URL: https://tetsujisugimori-coder.github.io/Command-Pocket/
- 認証情報なしのHTTP取得でindex.html・app.js・style.cssが200となり、ローカルソースとbyte一致。
- 公開版のEdge操作でPowerShell検索が2件、PR URL差し替え後のコピー成功表示とクリップボード本文の一致を確認。
- 公開画面をverification/initial-pages.jpgに保存。
- 追跡Issue: #1。今回の公開確認はデスクトップEdgeの範囲。実機iPhone Safari、登録・削除・バックアップ往復は今回未検証。

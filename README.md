# kaitori-alto-ako
買取アルト赤穂店 AI査定・集客LP

LINE・電話での「査定・出張買取の相談」を増やすためのランディングページです。
HTML / CSS / 最小限のJavaScript だけで作っており、GitHub Pages などの静的ホスティングでそのまま公開できます。

## ファイル構成

```
index.html              ページ本体（文章・リンクはすべてここ）
css/style.css           デザイン（色は冒頭の :root で一括管理）
js/main.js              クリック計測の準備・スマホ固定ボタンの表示切り替え
assets/img/
  alto-logo.jpg           ロゴ原本（横）※ページでは未使用・保管用
  alto-logo-vertical.jpg  ロゴ原本（縦）※ページでは未使用・保管用
  logo-horizontal.png     Web表示用ロゴ（原本の余白を切り抜いて縮小しただけ）
  logo-vertical.png       Web表示用ロゴ（同上）
  favicon.png / apple-touch-icon.png  ブラウザのタブ・ホーム画面用アイコン
  ogp.png                 SNS・LINEでURLを共有した時の画像（1200×630）
  staff-isogai-nakamura.png       スタッフ写真の原本（背景透過。写真左：磯谷 隆／写真右：代表 中村 紘也）
  staff-isogai-nakamura-upper.webp 表示用（「なぜ、整骨院から買取店が生まれたのか。」のセクションで使用）。原本を胸から上でトリミング・縮小
  ako-shinkyu-seikotsuin.jpg      赤穂鍼灸整骨院の外観（原本）
  ako-shinkyu-seikotsuin.webp     表示用（原本を1600px幅に縮小。切り抜きなし）
  items/item-*.webp               買取品目の商品画像24点（本部HPの画像を400px角に縮小・WebP化）
  cutouts/cut-*.webp              ファーストビューのキービジュアル用。本部HPの商品画像10点（おもちゃを含む）の白背景を透過にしたもの
  scenes/hero-room.jpg            ファーストビューの背景（明るい住まいの片付けシーン）。原本「ChatGPT 画像 2026年9月28日 15_26_08.png」（1932×814）を同じサイズのままJPEGに圧縮し、英数字のファイル名にしたもの
  scenes/scene-household.webp     家財整理の写真（本部HPの元画像を1600px幅に縮小。「ご自身の家を片付けたい方」で使用）
  scenes/scene-memorial.webp      遺品整理の写真・スタッフ入り（本部HPの元画像を1600px幅に縮小。切り抜きなし）
  scenes/scene-visit.webp         訪問査定の写真・スタッフ入り（本部HPの元画像を1600px幅に縮小。流れで使用）
  scenes/flow-contact.webp        LINE・電話で相談の写真（本部HPの元画像そのままのサイズ）※現在は未使用・保管用
  scenes/flow-payment.webp        その場でお支払いの写真（本部HPの元画像そのままのサイズ）※現在は未使用・保管用

  写真の使い方のルール：元画像を拡大しない／切り抜きは最小限／表示サイズの1.5倍以上の解像度がある画像を使う
  line-qr.svg             PC表示用のLINE友だち追加QRコード（https://lin.ee/xJC2f2J）
```

## PCで確認する方法

`index.html` をダブルクリックしてブラウザ（Chrome / Edge など）で開けば確認できます。
スマホ表示は、ブラウザの開発者ツール（Chrome なら F12 → 端末アイコン）で確認できます。

> **注意：** Claude デスクトップアプリのプレビュー欄で `index.html` を直接開くと、ページが `data:` URL として表示されるため
> CSS・画像を読み込めず、デザインが崩れて見えます（公開後のページには影響しません）。
> アプリ内で確認する場合は、下記のローカルサーバー（`.claude/launch.json` の `lp-preview`）を使ってください。

ローカルサーバーで確認する場合（追加インストール不要）：

```
powershell -ExecutionPolicy Bypass -File tools\preview-server.ps1
```

起動後、ブラウザで http://localhost:8765/ を開きます（終了は Ctrl+C）。

## よく変更する箇所

| 変更したい内容 | 場所 |
|---|---|
| 電話番号 | `index.html` 内の `tel:09082267635` と `090-8226-7635` をすべて置換 |
| LINE URL | `index.html` 内の `https://lin.ee/xJC2f2J` をすべて置換 |
| 公開URL（独自ドメイン等） | `index.html` の `<head>` 内 `https://jigulong-lgtm.github.io/kaitori-alto-ako/` をすべて置換 |
| スタッフ写真 | 原本 `staff-isogai-nakamura.png` を差し替えた場合は、表示用の `staff-isogai-nakamura-upper.webp`（胸から上）も作り直しが必要 |
| デザイン（色・書体・余白） | `css/style.css` 冒頭の `:root` と、先頭コメントの「デザインルール」を参照 |
| 受付時間・定休日 | `9:00〜18:00` / `日曜` を検索して置換 |
| 古物商許可番号 | `631662500009` を検索（店舗情報・フッターの2か所） |
| 買取品目 | `index.html` の「⑨ 買取できる物」は画像なしの文字タグ一覧です。5つの分類（家の片付けで出てくる物／趣味・ホビー／アウトドア・スポーツ／暮らしの品・コレクション／ブランド品・貴金属も）ごとの `<ul class="items-group__tags">` 内の `<li>` を追加・削除してください（画像は不要。ブランド品・貴金属の分類は最後のままにしてください） |
| ファーストビューのキービジュアル | `index.html` の `.hero__visual` 内の画像、配置は `css/style.css` の `.hero__item--*` など（スマホ用と、PC用メディアクエリ内の2か所） |
| よくある質問 | `index.html` の「⑫ よくある質問」の `<details>` をコピーして追加 |
| LINE URLを変えた場合 | `assets/img/line-qr.svg`（QRコード）も作り直しが必要 |
| 色 | `css/style.css` 冒頭の `:root` |

未確定の情報は画面に表示せず、`TODO` コメントとして残しています（`TODO` で検索すると一覧できます）。

## 広告計測（GA4 / Google Tag Manager）

- タグは `index.html` の `<head>` 冒頭と `<body>` 直後にあるコメントの位置に貼り付けます。
- `data-track` 属性を持つリンクがクリックされると、`js/main.js` が `dataLayer` に次のイベントを送ります。

| イベント名 | 対象 |
|---|---|
| `line_click` | LINEボタン（全箇所） |
| `tel_click` | 電話ボタン・電話番号リンク（全箇所） |
| `select_self` | 相談入口「ご自身の家を片付けたい方」 |
| `select_family` | 相談入口「親御さん・ご実家のことでお悩みの方」 |
| `select_care` | 相談入口「ケアマネジャー・介護事業者様」 |
| `select_hobby` | 相談入口「トレカ・ゲーム・ホビーを売りたい方」 |
| `map_click` | Googleマップのリンク |

- パラメータ `cta_location` にボタンの設置場所（`header` / `hero` / `line_steps` / `self` / `family` / `care` / `hobby` / `area` / `faq` / `final` / `shop_info` / `footer` / `fixed_bar` / `entry`）が入ります。
- GTMでは「カスタムイベント」トリガーでイベント名を指定し、データレイヤー変数 `cta_location` を使ってください。
- 各ボタンには `id="cta-line-hero"` のような個別IDも付けています。
- UTMパラメータ付きURLで流入してもページ内リンクは正常に動作します（`canonical` も設定済み）。

## 今後の予定：Instagramの最新情報セクション（未実装）

LP内に、Instagramの最新投稿を表示するセクションを追加する予定です。

- **用途：** 買取実績ではなく、お知らせ・販売中の商品・入荷情報・店舗からの案内・買取や片付けに関する情報など、随時更新する内容の掲載
- **見出しの案：** 「Instagramからのお知らせ」または「最新情報・販売中の商品」
- **表示：** 最新投稿を3〜6件程度。クリックするとInstagramの該当投稿（またはアカウント）へ移動
- **実装時の検討事項：** 表示方法（Instagram公式の埋め込み／外部の埋め込みサービス／手動で画像とリンクを更新する方式）、アカウントURL、設置位置（FAQの前後など）

## GitHub Pages で公開する

1. このフォルダの変更をコミットし、GitHub の `main` ブランチへプッシュ
2. GitHub のリポジトリ画面 → Settings → Pages
3. Source を「Deploy from a branch」、Branch を `main` / `/(root)` にして Save
4. 数分後に `https://jigulong-lgtm.github.io/kaitori-alto-ako/` で公開されます

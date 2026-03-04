# ALLサイト（all.receptionist.jp）Vercel移管計画

## 概要

- **移管元**: WordPress（AWS Lightsail / Bitnami）
- **移管先**: Vercel（Next.js / App Router）
- **構成**: Vercelのみ（Neon DB不要）
- **理由**: フロント表示ページが少数。外部リンク中心のハブサイト。投稿コンテンツは静的JSONで管理可能

---

## 1. 技術スタック

IVR・イベントレセプションの既存Vercelプロジェクトに準拠する。

| 項目 | 選定 |
|------|------|
| フレームワーク | Next.js 15（App Router） |
| 言語 | TypeScript 5.7 |
| React | React 19 |
| CSS | Vanilla CSS（CSS変数使用）。UIkitのクラス名に対応するCSSを移植 |
| コンテンツ管理 | `src/data/` に静的JSONファイル |
| 画像 | `public/img/` に配置。`next.config.ts` で `unoptimized: true` |
| デプロイ | Vercel CI/CD（GitHub連携） |

### UIkit対応方針

現行サイトはUIkit（v3系）を使用している。移管時の方針：

- **UIkitのJS（タブ切替・スティッキーヘッダー等）は使わない** → React状態管理で再実装
- **UIkitのCSSクラスは段階的に置き換える**：
  - `uk-flex` → CSS Flexbox直書き
  - `uk-grid` → CSS Grid直書き
  - `uk-width-1-3@m` → メディアクエリ付きCSS
  - `uk-sticky` → CSS `position: sticky` or React実装
  - `uk-text-center` / `uk-text-justify` → CSSユーティリティクラス
- **common.css / style.css のカスタムCSSは移植する**（UIkit依存部分を除去した上で）
- **destyle.css（CSSリセット）はそのまま使用可能**

---

## 2. ルーティング構成

### WordPressテンプレート → Next.js App Routerマッピング

| WordPress | テンプレート | Next.js ルート | 説明 |
|-----------|-------------|---------------|------|
| トップ `/` | `index.php` | `src/app/page.tsx` | ヒーロー・ロゴスライダー・サービスカード・タブ・事例・コラム/イベント導線 |
| コラム一覧 `/column/` | `page-column.php` | `src/app/column/page.tsx` | コラム記事一覧（最新4件表示） |
| コラム個別 `/column/[slug]/` | `single-theme.php` | `src/app/column/[slug]/page.tsx` | コラム記事詳細（2カラム：本文+サイドバー） |
| イベント一覧 `/event/` | `page-event.php` | `src/app/event/page.tsx` | イベント記事一覧（最新4件表示） |
| イベント個別 `/event/[slug]/` | `single-event.php` | `src/app/event/[slug]/page.tsx` | イベント記事詳細（2カラム：本文+サイドバー） |
| セミナーLP `/seminarlp/[slug]/` | `single-seminarlp.php` | `src/app/seminarlp/[slug]/page.tsx` | セミナーLP（1カラム・ヘッダーなし） |

### `next.config.ts` 設定

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',        // 静的エクスポート（SSG）
  trailingSlash: true,     // 既存URL構造を維持
  images: {
    unoptimized: true,     // 静的エクスポートでは画像最適化不可
  },
};

export default nextConfig;
```

---

## 3. プロジェクト構成

```
vercel/all/
├── package.json
├── next.config.ts
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← 共通レイアウト（head, GTM, GA4）
│   │   ├── page.tsx                ← トップページ
│   │   ├── column/
│   │   │   ├── page.tsx            ← コラム一覧
│   │   │   └── [slug]/
│   │   │       └── page.tsx        ← コラム個別
│   │   ├── event/
│   │   │   ├── page.tsx            ← イベント一覧
│   │   │   └── [slug]/
│   │   │       └── page.tsx        ← イベント個別
│   │   └── seminarlp/
│   │       └── [slug]/
│   │           └── page.tsx        ← セミナーLP個別
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          ← header-nav.php対応（PC）
│   │   │   ├── MobileNav.tsx       ← nav.php対応（SP ハンバーガー）
│   │   │   ├── Footer.tsx          ← footer.php対応
│   │   │   └── FooterService.tsx   ← footer-service.php対応
│   │   └── sections/
│   │       ├── HeroSection.tsx     ← ヒーローエリア
│   │       ├── LogoSlider.tsx      ← 導入企業ロゴスライダー
│   │       ├── ServiceCards.tsx    ← 3プロダクトカード
│   │       ├── ProductTabs.tsx     ← タブ切替（調整アポ/RECEPTIONIST/予約ルームズ）
│   │       ├── CaseStudies.tsx     ← 導入事例カード
│   │       ├── ContentNav.tsx      ← コラム/イベント導線カード
│   │       ├── CtaBanner.tsx       ← 資料ダウンロードCTA
│   │       ├── ArticleList.tsx     ← 記事一覧（コラム/イベント共通）
│   │       ├── ArticleDetail.tsx   ← 記事詳細（2カラム）
│   │       ├── SeminarLpDetail.tsx ← セミナーLP詳細（1カラム）
│   │       └── Sidebar.tsx         ← サイドバー（関連記事）
│   ├── data/
│   │   ├── columns.json            ← コラム記事データ
│   │   ├── events.json             ← イベント記事データ
│   │   ├── seminarlps.json         ← セミナーLPデータ
│   │   ├── cases.json              ← 導入事例データ（外部リンク付き）
│   │   └── logos.json              ← 導入企業ロゴデータ
│   ├── lib/
│   │   └── content.ts              ← JSON読み込み・フィルタリングユーティリティ
│   └── styles/
│       ├── globals.css             ← グローバルCSS（CSS変数・リセット）
│       ├── header.css
│       ├── footer.css
│       ├── home.css                ← トップページ
│       ├── article.css             ← 記事一覧・詳細共通
│       └── seminar-lp.css          ← セミナーLP
└── public/
    ├── img/                        ← wordpress/all/img/ から移植
    ├── uploads/                    ← wordpress/all/uploads/ から必要分を移植
    └── favicon.ico
```

---

## 4. コンテンツデータ設計

### 4.1 投稿データ（columns.json / events.json）

WordPress DBから公開投稿を抽出し、JSONに変換する。

```json
{
  "slug": "post-slug",
  "title": "記事タイトル",
  "date": "2024-01-15",
  "category": "column",
  "tags": ["バックオフィス", "DX推進"],
  "thumbnail": "/uploads/2024/01/image.jpg",
  "person": "著者名（ACFフィールド）",
  "personMessage": "著者コメント（ACFフィールド）",
  "content": "<p>HTML本文...</p>"
}
```

### 4.2 セミナーLP（seminarlps.json）

```json
{
  "slug": "seminar-slug",
  "title": "セミナータイトル",
  "thumbnail": "/uploads/2024/01/image.jpg",
  "person": "登壇者名",
  "content": "<p>LP本文HTML...</p>"
}
```

### 4.3 DB→JSON変換スクリプト

`wordpress/all/database.sql` から以下を抽出するPythonスクリプトを作成する：

1. `wp_posts` — 公開投稿（post_status='publish', post_type='post'）
2. `wp_term_relationships` + `wp_term_taxonomy` + `wp_terms` — カテゴリー・タグ
3. `wp_postmeta` — ACFフィールド値（person, person_message, 開催日時, 開催時間, 開催時間詳細）
4. アイキャッチ画像パス — `_thumbnail_id` → `wp_posts`(attachment) → `wp_postmeta`(`_wp_attached_file`)

#### 出力先

- `src/data/columns.json` — カテゴリー「コラム」の公開投稿（25件）
- `src/data/events.json` — カテゴリー「イベント」の公開投稿（55件）
- `src/data/seminarlps.json` — カテゴリー「セミナーLP」の投稿（19件、非公開含めるか要確認）

#### コンテンツ本文のHTML処理

- WordPressの `the_content()` 相当のフィルタ処理：
  - `wpautop` 相当（改行→`<p>`タグ変換）
  - 画像URLの書き換え（`wp-content/uploads/` → `/uploads/`）
  - ショートコード除去（残っている場合）
  - oEmbed → 静的iframe変換（YouTube等が埋め込まれている場合）

---

## 5. PHP→TSXテンプレート変換詳細

### 5.1 トップページ（index.php → page.tsx）

index.phpの構成要素を個別コンポーネントに分解する：

| セクション | WordPress実装 | Next.jsコンポーネント | 備考 |
|-----------|-------------|---------------------|------|
| ヒーロー | 静的HTML | `HeroSection` | キャッチコピー・CTAボタン |
| ロゴスライダー | 静的HTML（13社） | `LogoSlider` | CSS animationで再実装 |
| サービスカード | 静的HTML（3枚） | `ServiceCards` | 外部リンク先は各プロダクトサイト |
| タブ切替 | UIkit `uk-tab` + `uk-switcher` | `ProductTabs` | **Client Component**（useState使用） |
| 導入事例 | 静的HTML（3枚） | `CaseStudies` | 外部リンク（receptionist.jp/case/） |
| コラム/イベント導線 | 静的HTML | `ContentNav` | 内部リンク（/column/, /event/） |

### 5.2 一覧ページ（page-column.php / page-event.php → page.tsx）

| WordPress | Next.js | 備考 |
|-----------|---------|------|
| `WP_Query('category_name' => 'column', 'posts_per_page' => 4)` | `columns.json` から先頭4件取得 | Server Component |
| `the_post_thumbnail()` | JSONの `thumbnail` フィールド | |
| `the_field('time-detail')` / `the_field('time')` | JSONの `timeDetail` / `time` | ACFフィールド |
| CTA（資料ダウンロード） | `CtaBanner` コンポーネント | 外部リンク |
| サービス紹介 | `FooterService` コンポーネント | |

### 5.3 記事詳細（single-event.php / single-theme.php → [slug]/page.tsx）

2カラムレイアウト（article + sidebar）。

| WordPress | Next.js | 備考 |
|-----------|---------|------|
| `the_title()` | JSONの `title` | |
| `the_tags('')` | JSONの `tags` | |
| `wp_get_attachment_url(get_post_thumbnail_id())` | JSONの `thumbnail` | |
| `the_field('person')` | JSONの `person` | |
| `the_field('person_message')` | JSONの `personMessage` | single-theme.phpのみ使用 |
| `the_content()` | JSONの `content`（HTML文字列） | `dangerouslySetInnerHTML` で描画 |
| サイドバー（`query_posts('showposts=10')`） | `Sidebar` に全記事から最新10件 | |
| CTA（資料ダウンロード） | `CtaBanner` | |

### 5.4 セミナーLP（single-seminarlp.php → seminarlp/[slug]/page.tsx）

1カラムレイアウト。ヘッダーナビなし。

| WordPress | Next.js | 備考 |
|-----------|---------|------|
| `the_title()` | JSONの `title` | |
| `the_tags('')` | JSONの `tags` | |
| `the_content()` | JSONの `content` | `dangerouslySetInnerHTML` |
| ヘッダーなし | `layout.tsx` でセミナーLP用レイアウトを分岐 or 専用layout | |

---

## 6. レイアウト・共通コンポーネント

### 6.1 Header（header.php + header-nav.php）

- **PC**: ロゴ + 製品リンク3つ（受付/調整/会議室）+ 資料ダウンロードボタン
- **SP**: ロゴ + 「総合トップ」テキスト + ハンバーガーメニュー
- スティッキーヘッダー（`uk-sticky` → CSS `position: sticky`）
- セミナーLPでは非表示

### 6.2 Footer（footer.php）

4カラム構成:
1. ロゴ + ISMS認証マーク
2. RECEPTIONIST — 機能/事例/料金/FAQ/問合せ/ログイン/資料
3. 調整アポ — 同上
4. 予約ルームズ — 機能/プラン/問合せ/資料
5. サポート — イベント情報

下部: 運営会社情報 / 個人情報保護方針 / 商標 / 利用規約 / © RECEPTIONIST

### 6.3 FooterService（footer-service.php）

「RECEPTIONISTシリーズについて」セクション。3枚のサービスカード。トップ以外のページで表示。

### 6.4 CtaBanner

「資料をダウンロードください」バナー。リンク先: `https://receptionist.jp/document/`

---

## 7. アナリティクス・SEO

### GTM / GA4

- GTM ID: `GTM-MJ2BB8V` → `layout.tsx` の `<head>` と `<body>` 冒頭に設置
- GA4 ID: `G-EH9MK6BM3C` → GTM経由で管理（直接タグも併用）

### SEO

- All in One SEOプラグインのメタ情報をDBから抽出
- 各ページの `metadata` をNext.js `generateMetadata()` で出力
- OGP画像・description等もJSON or 直接記述

---

## 8. 画像・メディア

### テーマ画像（img/）

`wordpress/all/img/` → `public/img/` にコピー（147ファイル）。SVG多数。

### メディアアップロード（uploads/）

`wordpress/all/uploads/` は1,044ファイル（投稿のアイキャッチ・本文内画像）。

- 実際に公開投稿で使用されているファイルのみ `public/uploads/` にコピー
- 未使用ファイルは除外してサイズ削減
- 画像パスの書き換え: 本文HTML内の `wp-content/uploads/YYYY/MM/` → `/uploads/YYYY/MM/`

---

## 9. 実装手順

### Phase 1: プロジェクト初期化

1. `npx create-next-app@latest` でNext.js 15プロジェクト作成
2. `next.config.ts` 設定（output: 'export', trailingSlash, images unoptimized）
3. `tsconfig.json` 設定
4. テーマ画像コピー（`img/` → `public/img/`）
5. CSSリセット（destyle.css）をglobals.cssに統合
6. CSS変数定義（RECEPTIONISTブランドカラー等）

### Phase 2: レイアウト・共通コンポーネント

7. `layout.tsx` — HTML構造、GTM/GA4、フォント読み込み
8. `Header.tsx` / `MobileNav.tsx` — ヘッダー・SPナビ
9. `Footer.tsx` — フッター4カラム
10. `FooterService.tsx` — サービス紹介セクション
11. `CtaBanner.tsx` — 資料ダウンロードCTA

### Phase 3: トップページ

12. `HeroSection.tsx`
13. `LogoSlider.tsx`（CSSアニメーション）
14. `ServiceCards.tsx`
15. `ProductTabs.tsx`（Client Component — タブ切替）
16. `CaseStudies.tsx`
17. `ContentNav.tsx`
18. `page.tsx` — 全セクション組み合わせ

### Phase 4: コンテンツデータ

19. DB→JSON変換スクリプト作成（Python）
20. `database.sql` からコラム/イベント/セミナーLP投稿を抽出
21. ACFフィールド値の結合
22. アイキャッチ画像パスの解決
23. 本文HTMLの加工（wpautop相当、画像URL書き換え）
24. 使用メディアファイルの特定と `public/uploads/` へのコピー

### Phase 5: 一覧・詳細ページ

25. `lib/content.ts` — JSON読み込み・フィルタ関数
26. `ArticleList.tsx` — 記事一覧コンポーネント（コラム/イベント共通）
27. `column/page.tsx` — コラム一覧
28. `event/page.tsx` — イベント一覧
29. `ArticleDetail.tsx` — 記事詳細コンポーネント
30. `Sidebar.tsx` — 関連記事サイドバー
31. `column/[slug]/page.tsx` — コラム個別（`generateStaticParams`）
32. `event/[slug]/page.tsx` — イベント個別（`generateStaticParams`）

### Phase 6: セミナーLP

33. `SeminarLpDetail.tsx` — セミナーLP詳細コンポーネント
34. `seminarlp/[slug]/page.tsx` — セミナーLP個別（`generateStaticParams`）
35. セミナーLP用レイアウト分岐（ヘッダーなし）

### Phase 7: CSS移植

36. common.css → 各コンポーネントCSSに分解
37. UIkitクラスの置き換え（flex, grid, width, sticky等）
38. レスポンシブ対応（SP/PCブレークポイント: 960px境界）
39. フォント設定（Barlow: Google Fonts、游ゴシック: システムフォント）

### Phase 8: SEO・メタデータ

40. All in One SEOデータのDB抽出
41. 各ページの `generateMetadata()` 実装
42. OGP画像設定
43. robots.txt / sitemap.xml

### Phase 9: 検証・デプロイ

44. ローカルビルド確認（`next build && next start`）
45. 全ページの表示確認
46. リンク切れチェック
47. Vercelプロジェクト作成・GitHub連携
48. ステージングデプロイ・確認
49. DNS切り替え（all.receptionist.jp → Vercel）

---

## 10. 確認事項・リスク

### 要確認

- [ ] セミナーLP（19件）の個別デザイン差異 — 全LPが同じテンプレートか、個別にデザインが異なるか
- [ ] 非公開投稿19件の扱い — 完全除外でよいか（現在private状態）
- [ ] コンテンツ更新の要否 — 宮越さん指摘「新プロダクト未反映・内容が古い」
- [ ] コラム/イベント一覧の表示件数 — 現行4件固定。ページネーション不要か
- [ ] 投稿本文内のショートコードの有無
- [ ] 投稿本文内のoEmbed（YouTube等）の有無

### リスク

- **本文HTML内の画像パス**: `wp-content/uploads/` で直書きされている可能性。変換スクリプトで一括置換が必要
- **UIkitクラスの移植漏れ**: テーマCSS以外にUIkitユーティリティに依存しているレイアウトが多い。UIkitのCSSを部分的にカスタムCSSとして残す選択肢もある
- **ブログ本文のスタイル**: `the_content()` で出力されるHTML（h2, h3, p, ul, ol, img, table等）のスタイルがUIkitのbase CSSに依存している可能性

---

## 11. フォーム

ALLサイトにはフォームがない（お問い合わせ等のフォームは各プロダクトサイトへの外部リンク）。
reCAPTCHA / Pardot / Slack Webhook の設定は不要。

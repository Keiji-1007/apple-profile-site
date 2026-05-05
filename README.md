# apple-profile-site

自己紹介と note / X / YouTube へのリンクをまとめた、シンプルなプロフィールサイトです。  
HTML / CSS / JavaScript のみで構成しており、GitHub Pages でそのまま公開しやすい構成です。

## ファイル構成

- `index.html` - ページ本体
- `styles.css` - 見た目（黒背景のカード型デザイン）
- `script.js` - 更新日の表示などの軽い挙動

## ローカルで確認する方法

1. このリポジトリをクローン
2. `index.html` をブラウザで開く

## GitHub Pages で公開する手順

1. GitHub にこのリポジトリを push
2. GitHub のリポジトリページで **Settings** を開く
3. 左メニューの **Pages** を選択
4. **Build and deployment** の **Source** で `Deploy from a branch` を選択
5. Branch を `main`（または公開したいブランチ） / Folder を `/ (root)` に設定し **Save**
6. 数分待つと、表示される公開 URL からアクセス可能

## カスタマイズ箇所

- `index.html` の以下を自分用に変更
  - 名前
  - 自己紹介文
  - note / X / YouTube のリンク先
  - プロフィール画像 URL

import type { UIStrings } from './en';

export const ja: UIStrings = {
  // Meta
  siteTitle: 'heretix',
  siteDescription: 'Linux サーバーとコンテナ環境向けのオープンソース脆弱性管理プラットフォーム。',

  // Nav
  navDocs: 'ドキュメント',
  navGitHub: 'GitHub',

  // Hero
  heroTagline: 'オープンソース脆弱性管理プラットフォーム',
  heroDescription: 'Linux サーバーやコンテナイメージの脆弱性を、CLIからダッシュボードまで一貫して検出・追跡・管理します。',
  heroCTAPrimary: 'はじめる',
  heroCTASecondary: 'GitHub で見る',

  // Overview
  overviewTitle: 'heretix とは？',
  overviewBody: 'heretix は3つのコンポーネントで構成されたオープンソースの脆弱性管理プラットフォームです。CLIスキャナー、脆弱性データAPI、Web管理コンソールが連携し、インフラのスキャンから修正対応の追跡まで完結したワークフローを提供します。',

  // Architecture
  architectureTitle: '仕組み',

  // Components
  componentsTitle: 'コンポーネント',
  cliName: 'heretix-cli',
  cliDescription: 'Linux サーバーや Docker イメージにインストールされたパッケージ（RPM・DPKG・npm・PyPI）をスキャンし、APIに問い合わせて既知の脆弱性を検出するCLIツールです。',
  apiName: 'heretix-api',
  apiDescription: 'NVD・OSV・CISA KEV・EPSS・ベンダーアドバイザリ（Fortinet・Palo Alto・Cisco）から脆弱性データを集約・正規化する REST API です。',
  managementName: 'heretix-management',
  managementDescription: 'スキャン結果のインポート、脆弱性トレンドの可視化、アラート管理、修正対応の追跡を行う Next.js 製 Web コンソールです。',

  // Features
  featuresTitle: '主な機能',
  feature1Title: 'マルチエコシステム対応',
  feature1Desc: 'Linux ホストや Docker イメージ上の RPM・DPKG・npm・PyPI パッケージエコシステムに対応。',
  feature2Title: '脆弱性データの統合',
  feature2Desc: 'NVD・OSV・ベンダーアドバイザリのCVEデータを単一の正規化されたデータベースに集約。',
  feature3Title: 'CISA KEV 追跡',
  feature3Desc: 'CISA の既知悪用脆弱性カタログ（KEV）に掲載された脆弱性を優先度高としてフラグ付け。',
  feature4Title: 'EPSS スコアリング',
  feature4Desc: 'Exploit Prediction Scoring System のスコアを活用し、修正対応の優先順位付けを支援。',
  feature5Title: 'ベンダーアドバイザリ対応',
  feature5Desc: 'Fortinet・Palo Alto Networks・Cisco PSIRT のアドバイザリを取り込み。',
  feature6Title: 'ダッシュボード分析',
  feature6Desc: '脆弱性トレンド、深刻度分布、影響を受けるアセットのトップをWebコンソールで可視化。',

  // QuickStart
  quickstartTitle: 'クイックスタート',
  quickstartStep1: '1. heretix-cli でパッケージを収集',
  quickstartStep2: '2. インベントリを heretix-management にインポート',
  quickstartStep3: '3. 脆弱性スキャンを実行',

  // Footer
  footerLicense: 'Apache 2.0 ライセンス',
  footerOrg: 'heretix プロジェクト',
};

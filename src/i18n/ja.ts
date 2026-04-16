import type { UIStrings } from './en';

export const ja: UIStrings = {
  // Meta
  siteTitle: 'heretix',
  siteDescription: 'Linuxサーバーとコンテナ環境向けのオープンソース脆弱性管理プラットフォーム。',

  // Nav
  navDocs: 'ドキュメント',
  navGitHub: 'GitHub',

  // Hero
  heroTagline: 'オープンソース脆弱性管理プラットフォーム',
  heroDescription: 'Linux サーバーやコンテナイメージの脆弱性を、CLIからダッシュボードまで一貫して検出・追跡・管理。',
  heroCTAPrimary: 'はじめる',
  heroCTASecondary: 'GitHub で見る',

  // Overview
  overviewTitle: 'heretix とは？',
  overviewBody: 'heretix は3つのコンポーネントで構成されたオープンソースの脆弱性管理プラットフォーム。CLIスキャナー、脆弱性データAPI、Web管理コンソールが連携し、インフラのスキャンから修正対応の追跡まで完結したワークフローを提供。',

  // Architecture
  architectureTitle: '構成',

  // Components
  componentsTitle: 'コンポーネント',
  cliName: 'heretix-cli',
  cliDescription: 'Linux サーバーや Docker イメージ上のパッケージ（RPM・DPKG・Alpine/APK・npm・PyPI・Go・Composer/PHP）をスキャンし、heretix-api に問い合わせて既知の脆弱性を検出する CLI ツール。ローカルサプライチェーンセキュリティチェック（GlassWorm・依存関係混乱・悪意ある Install スクリプト・CI/CD パイプライン汚染・ハードコードされた秘密情報・ロックファイル整合性）も API 不要で実行。SBOM（CycloneDX）出力も対応。',
  apiName: 'heretix-api',
  apiDescription: 'NVD・OSV・CISA KEV・EPSS・ベンダーアドバイザリ（Fortinet・Palo Alto・Cisco）・Oracle Linux OVAL フィードから脆弱性データを集約・正規化する REST API。',
  managementName: 'heretix-management',
  managementDescription: 'heretix-cli により収集したパッケージ情報をアセットとして取り込み、脆弱性の検知および管理をおこなう Web コンソール。パッケージのバージョン追跡によるアラートの自動クローズにも対応。',

  // Features
  featuresTitle: '主な機能',
  feature1Title: 'マルチエコシステム対応',
  feature1Desc: 'Linux ホストや Docker イメージ上の RPM・DPKG・npm・PyPI・Go・Composer（PHP）パッケージエコシステムに対応。CI/CD パイプラインと統合し、デプロイ前に脆弱性を検出。',
  feature2Title: '脆弱性データの統合',
  feature2Desc: 'NVD・OSV・ベンダーアドバイザリの CVE データを単一の正規化されたデータベースに集約。',
  feature3Title: 'CISA KEV 追跡',
  feature3Desc: 'CISA の既知悪用脆弱性カタログ（KEV）に掲載された脆弱性を優先度高としてフラグ付け。',
  feature4Title: 'EPSS スコアリング',
  feature4Desc: 'Exploit Prediction Scoring System のスコアを活用し、修正対応の優先順位付けを支援。',
  feature5Title: 'ベンダーアドバイザリ対応',
  feature5Desc: 'Fortinet・Palo Alto Networks・Cisco PSIRT に対応。',
  feature6Title: 'ダッシュボード分析',
  feature6Desc: '脆弱性トレンド、深刻度分布、影響を受けるアセットのトップをWebコンソールで可視化。',
  feature7Title: 'ローカルサプライチェーンセキュリティ',
  feature7Desc: 'API 不要でサプライチェーン攻撃を検出。不可視文字インジェクション（GlassWorm）・依存関係混乱・悪意ある Install スクリプト・CI/CD パイプライン汚染・ハードコード秘密情報・ロックファイル整合性違反に対応。',

  // QuickStart
  quickstartTitle: 'クイックスタート',
  quickstartStep1: '1. heretix-cli でパッケージを収集',
  quickstartStep2: '2. インベントリを heretix-management にインポート',
  quickstartStep3: '3. 脆弱性スキャンを実行',

  // Footer
  footerLicense: 'Apache 2.0 ライセンス',
  footerOrg: 'heretix プロジェクト',
};

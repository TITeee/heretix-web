import type { UIStrings } from './en';

export const ja: UIStrings = {
  // Meta
  siteTitle: 'heretix',
  siteDescription: 'サーバー・コンテナ・CI/CDパイプライン向けのオープンソース脆弱性管理プラットフォーム。',

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
  cliDescription: 'Linux サーバー・Windows ホスト・Docker イメージ上のパッケージ（RPM・DPKG・Alpine/APK・npm・PyPI・Go・Composer/PHP）をスキャンし、heretix-api に問い合わせて既知の脆弱性を検出する CLI ツール。ECR・GCR・Docker Hub 等のレジストリ認証と Dockerfile ベースイメージチェーンスキャンに対応。ローカルサプライチェーンセキュリティチェック（GlassWorm・依存関係混乱・悪意ある Install スクリプト・CI/CD パイプライン汚染・ハードコードされた秘密情報・ロックファイル整合性）も API 不要で実行。CycloneDX SBOM 出力と GitHub Dependency Submission API へのサブミットに対応。CI/CD 向け構造化終了コード（0/1/2）を提供。',
  apiName: 'heretix-api',
  apiDescription: '14種類以上のソースから脆弱性データを集約・正規化する REST API。NVD・OSV・CISA KEV・EPSS・OSSF マリシャスパッケージ・Oracle Linux OVAL・Oracle CPU・および Fortinet・Palo Alto・Cisco PSIRT・Sophos・SonicWall PSIRT・Broadcom/VMware VMSA のベンダーアドバイザリに対応。',
  managementName: 'heretix-management',
  managementDescription: 'エンドツーエンドの脆弱性管理 Web コンソール。heretix-cli インベントリ JSON または CycloneDX SBOM のインポート、ネットワーク機器・ファイアウォールの手動登録、パッケージマネージャー外のソフトウェアを CPE・ベンダーアドバイザリ付きで管理。VEX ドキュメントのエクスポート/インポート（CycloneDX）・アラートタイムライン・一括ステータス更新・CSV/JSON エクスポート・脆弱性検索（パッケージ/CVE/CPE/アドバイザリ）・全アセット横断のアクティビティページ・メタデータ更新・スケジュール実行・ユーザー管理（admin/operator）・構造化 JSON ログに対応。',

  // Features
  featuresTitle: '主な機能',
  feature1Title: 'マルチエコシステム対応',
  feature1Desc: 'Linux・Windows ホストや Docker イメージ上の RPM・DPKG・Alpine/APK・npm・PyPI・Go・Composer（PHP）パッケージエコシステムに対応。ECR・GCR・Docker Hub のレジストリ認証をサポート。CI/CD 向け構造化終了コード（0=合格・1=検出あり・2=エラー）を提供。',
  feature2Title: '脆弱性データの統合',
  feature2Desc: 'NVD・OSV・ベンダーアドバイザリの CVE データを単一の正規化されたデータベースに集約。',
  feature3Title: 'CISA KEV 追跡',
  feature3Desc: 'CISA の既知悪用脆弱性カタログ（KEV）に掲載された脆弱性を優先度高としてフラグ付け。',
  feature4Title: 'EPSS スコアリング',
  feature4Desc: 'Exploit Prediction Scoring System のスコアを活用し、修正対応の優先順位付けを支援。',
  feature5Title: 'ベンダーアドバイザリ対応',
  feature5Desc: 'Fortinet・Palo Alto Networks・Cisco PSIRT・Sophos・SonicWall PSIRT・Broadcom/VMware VMSA のベンダーアドバイザリと OSSF マリシャスパッケージ（MAL- エントリ）に対応。',
  feature6Title: 'ダッシュボード分析',
  feature6Desc: '脆弱性トレンド、深刻度分布、影響を受けるアセットのトップをWebコンソールで可視化。',
  feature7Title: 'ローカルサプライチェーンセキュリティ',
  feature7Desc: 'API 不要でサプライチェーン攻撃を検出。不可視文字インジェクション（GlassWorm）・依存関係混乱・悪意ある Install スクリプト・CI/CD パイプライン汚染・ハードコード秘密情報・ロックファイル整合性違反に対応。',
  feature8Title: 'VEX サポート（ベータ）',
  feature8Desc: 'heretix-management から CycloneDX VEX ドキュメントのエクスポート/インポートが可能。無視したアラートは not_affected として正当化コード（code_not_reachable・requires_configuration 等）付きで出力。',
  feature9Title: 'GitHub Dependency Submission',
  feature9Desc: 'CLI コマンド1行でスキャン済みインベントリを GitHub Dependency Submission API に送信し、リポジトリ上で Dependabot アラートをネイティブに有効化。既存ワークフローの変更不要。',

  // QuickStart
  quickstartTitle: 'クイックスタート',
  quickstartStep1: '1. heretix-cli でパッケージを収集',
  quickstartStep2: '2. インベントリを heretix-management にインポート',
  quickstartStep3: '3. 脆弱性スキャンを実行',
  quickstartStep4: '4. GitHub へサブミットして Dependabot アラートを有効化（任意）',

  // Footer
  footerLicense: 'Apache 2.0 ライセンス',
  footerOrg: 'heretix プロジェクト',
};

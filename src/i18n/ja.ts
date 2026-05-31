import type { UIStrings } from './en';

export const ja: UIStrings = {
  // Meta
  siteTitle: 'heretix',
  siteDescription: '軽量なオープンソース脆弱性管理インテリジェンス — CVEスキャン・サプライチェーン攻撃検知・セルフホストWebコンソールを統合。',

  // Nav
  navDocs: 'ドキュメント',
  navGitHub: 'GitHub',

  // Hero
  heroTagline: '軽量な脆弱性管理インテリジェンス。',
  heroDescription: 'サーバー・コンテナ・CI/CDをCLIからダッシュボードまで一貫してスキャン・追跡・修正。既知のCVEだけでなく、ライブなサプライチェーン攻撃も検知。オープンソース、セルフホスト。',
  heroCTAPrimary: 'はじめる',
  heroCTASecondary: 'GitHub でスター',

  // Stats
  stat1Value: '14+',
  stat1Label: '脆弱性データソース',
  stat2Value: '7',
  stat2Label: 'パッケージエコシステム',
  stat3Value: '6',
  stat3Label: 'サプライチェーン検知器',
  stat4Value: '3',
  stat4Label: '統合コンポーネント',

  // Overview
  overviewTitle: 'heretix とは？',
  overviewBody: 'heretix は3つのコンポーネントで構成されたオープンソースの脆弱性管理プラットフォーム。CLIスキャナー、脆弱性データAPI、Web管理コンソールが連携し、インフラのスキャンからサプライチェーン攻撃の検知、修正対応の追跡まで完結したワークフローを提供。',

  // Supply-Chain Defense (headline section)
  scTitle: 'CVEだけでなく、攻撃そのものを検知',
  scSubtitle: 'CVEスキャナが教えてくれるのは既知の脆弱性だけ。heretix-cli は進行中のサプライチェーン攻撃もローカルで検知します ― API も通信も不要。出荷前に CI でブロックできます。',
  scGlasswormTitle: 'GlassWorm',
  scGlasswormDesc: 'ソースに注入された不可視・ゼロ幅 Unicode 文字で、悪意あるコードを人間のレビューから隠蔽する攻撃。',
  scDepConfusionTitle: '依存関係混乱',
  scDepConfusionDesc: '公開パッケージが社内のプライベートパッケージを上書きする置換攻撃・「Shai-Hulud」型攻撃。',
  scInstallTitle: '悪意ある Install スクリプト',
  scInstallDesc: 'npm のライフサイクルフックや Python の setup.py に潜み、インストール時に実行される危険なコマンド。',
  scCicdTitle: 'CI/CD パイプライン汚染',
  scCicdDesc: 'GitHub Actions・GitLab CI・Jenkins などのパイプライン定義に含まれる不審なパターン。',
  scSecretsTitle: 'ハードコードされた秘密情報',
  scSecretsDesc: 'ソースや設定ファイルにコミットされた認証情報・APIキー。',
  scLockfileTitle: 'ロックファイル整合性',
  scLockfileDesc: '弱いハッシュ・署名の欠落・マニフェスト／ロックファイルの乖離など、改ざんの兆候を検出。',

  // Architecture
  architectureTitle: '構成',

  // Showcase
  showcaseTitle: '実際の画面',
  showcaseSubtitle: 'ダッシュボード・アセットインベントリ・アラートトリアージを1つのセルフホストアプリで提供する本格的な管理コンソール。',
  showcaseCaptionDashboard: 'ダッシュボード ― 深刻度内訳・トレンド・KEVハイライト',
  showcaseCaptionTags: 'タグ分析 ― Internet Facing / Public Endpoint 別のリスク',
  showcaseCaptionAssets: 'heretix-cli からインポートしたアセットインベントリ',
  showcaseCaptionAlerts: 'マルチ値フィルタと一括操作によるアラートトリアージ',
  showcaseCaptionAlertsDetail: 'アラート詳細 ― CVSS・KEV・EPSS・修正バージョン・タイムライン',

  // Components
  componentsTitle: 'コンポーネント',
  cliName: 'heretix-cli',
  cliDescription: 'Linux サーバー・Windows ホスト・Docker イメージ上のパッケージ（RPM・DPKG・Alpine/APK・npm・PyPI・Go・Composer/PHP）をスキャンし、heretix-api に問い合わせて既知の脆弱性を検出する CLI ツール。ECR・GCR・Docker Hub 等のレジストリ認証と Dockerfile ベースイメージチェーンスキャンに対応。ローカルサプライチェーンセキュリティチェック（GlassWorm・依存関係混乱・悪意ある Install スクリプト・CI/CD パイプライン汚染・ハードコードされた秘密情報・ロックファイル整合性）も API 不要で実行でき、オフラインの `detect` コマンドでいつでも実施可能（ベータ）。依存ツリー・パッケージ整合性ハッシュ・distro 修飾 PURL を含む CycloneDX SBOM を出力し、GitHub Dependency Submission API へのサブミットにも対応。CI/CD 向け構造化終了コード（0/1/2）を提供。',
  apiName: 'heretix-api',
  apiDescription: '14種類以上のソースから脆弱性データを集約・正規化する REST API。NVD・OSV・CISA KEV・EPSS・OSSF マリシャスパッケージ・Oracle Linux OVAL・Oracle CPU・および Fortinet・Palo Alto・Cisco PSIRT・Sophos・SonicWall PSIRT・Broadcom/VMware VMSA のベンダーアドバイザリに対応。検索結果は各検出に対する修正バージョンを返し、CPE 2.3 検索とバッチ検索のエンドポイントも備える。',
  managementName: 'heretix-management',
  managementDescription: 'エンドツーエンドの脆弱性管理 Web コンソール。heretix-cli インベントリ JSON または CycloneDX SBOM のインポート、ネットワーク機器・ファイアウォールの手動登録、パッケージマネージャー外のソフトウェアを CPE・ベンダーアドバイザリ付きで管理。direct/indirect 分類付きのインタラクティブな依存関係グラフ（ベータ）・VEX ドキュメントのエクスポート/インポート（CycloneDX）・アラートタイムライン・修正バージョン表示・一括ステータス更新・CSV/JSON エクスポート・脆弱性検索（パッケージ/CVE/CPE/アドバイザリ）・メタデータ更新・スケジュール実行・ユーザー管理（admin/operator）・管理者専用の監査ログ・構造化 JSON ログに対応。',

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
  feature10Title: '依存関係グラフ（ベータ）',
  feature10Desc: 'heretix-management のインタラクティブなグラフで、脆弱な依存をどのパッケージが取り込んでいるかを可視化。direct/indirect を分類し、Dependents タブを掘り下げ、グラフのノードから直接アラート詳細を開けます。',
  feature11Title: '修正バージョンガイダンス',
  feature11Desc: 'heretix-api が各検出の修正バージョンを返し、heretix-management のアラート詳細に表示。どのアップグレードで脆弱性が解消されるかをチームが正確に把握できます。',
  feature12Title: 'ローカル専用 Detect',
  feature12Desc: 'heretix-cli detect コマンドは、すべてのサプライチェーン検知器を完全オフライン（API 不要）で並列実行し、CI 向けの終了コードを返します。',

  // QuickStart
  quickstartTitle: 'クイックスタート',
  quickstartStep1: '1. heretix-cli でパッケージを収集',
  quickstartStepDetect: '1b. CI でサプライチェーン攻撃をブロック（オフライン・API不要）',
  quickstartStep2: '2. インベントリを heretix-management にインポート',
  quickstartStep3: '3. 脆弱性スキャンを実行',
  quickstartStep4: '4. GitHub へサブミットして Dependabot アラートを有効化（任意）',

  // Footer
  footerLicense: 'Apache 2.0 ライセンス',
  footerOrg: 'heretix プロジェクト',
};

/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * 年月日
   * ex) 2006-01-02
   */
  Date: { input: any; output: any };
  /**
   * [RFC3339] 日時
   * ex) 2006-01-02T15:04:05Z07:00
   */
  Datetime: { input: any; output: any };
  Upload: { input: any; output: any };
};

/** コイン購入入力オブジェクト */
export type AcquireCoinInput = {
  /** カードID */
  cardId: Scalars["ID"]["input"];
  /** コイン商品ID */
  productId: Scalars["ID"]["input"];
};

export type AddAuthProviderSnsInput = {
  provider: SignUpSns;
};

/** ブログ記事コメント入力コメント */
export type AddBlogPostCommentInput = {
  /** コメント内容 */
  content: Scalars["String"]["input"];
  /** ブログ記事ID */
  postId: Scalars["ID"]["input"];
};

export type AddCreditCardInput = {
  expiration: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

/** ギャラリーコメント入力コメント */
export type AddGalleryCommentInput = {
  /** コメント内容 */
  content: Scalars["String"]["input"];
  /** ギャラリーID */
  id: Scalars["ID"]["input"];
};

export type AddMessageInput = {
  /** チャットメッセージ本文 */
  content: Scalars["String"]["input"];
  /** 生配信ID */
  liveBroadcastId: Scalars["ID"]["input"];
};

export type AddMovieCommentInput = {
  /** コメント内容 */
  content: Scalars["String"]["input"];
  /** 動画ID */
  movieId: Scalars["ID"]["input"];
};

/** アルバムタイプ */
export enum AlbumType {
  /** アルバム */
  Album = "ALBUM",
  /** シングル */
  Single = "SINGLE",
}

/** バナー-Node */
export type Banner = Node & {
  __typename?: "Banner";
  /** ID */
  id: Scalars["ID"]["output"];
  /** 画像 */
  image?: Maybe<BannerImage>;
  /** リンク */
  link?: Maybe<BannerLink>;
};

/** バナー画像 */
export type BannerImage = {
  __typename?: "BannerImage";
  /** プリセットURL */
  presetUrl?: Maybe<BannerImagePresetUrl>;
};

/** バナー画像プリセットURL */
export type BannerImagePresetUrl = {
  __typename?: "BannerImagePresetUrl";
  /** Max 1920px */
  large: Scalars["String"]["output"];
  /** Max 768px */
  medium: Scalars["String"]["output"];
  /** オリジナル */
  original: Scalars["String"]["output"];
  /** Max 480px */
  small: Scalars["String"]["output"];
  /** Max 150px */
  thumbnail: Scalars["String"]["output"];
  /** Max 2048px */
  xLarge: Scalars["String"]["output"];
};

/** バナーリンク */
export type BannerLink = {
  __typename?: "BannerLink";
  /** リンクタイプ */
  type: BannerLinkType;
  /** リンク先URL */
  url: Scalars["String"]["output"];
};

/** バナーリンクタイプ */
export enum BannerLinkType {
  /** 外部リンク */
  External = "EXTERNAL",
  /** 内部ページリンク */
  Page = "PAGE",
}

/** バナーサイズ */
export enum BannerSize {
  Big = "BIG",
  Normal = "NORMAL",
  Small = "SMALL",
}

/** ブログオブジェクト */
export type Blog = Node & {
  __typename?: "Blog";
  /** ブログカテゴリリスト取得 */
  categories: Array<BlogCategory>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** ステータス */
  isAvailable: Scalars["Boolean"]["output"];
  /** ブログ名 */
  name: Scalars["String"]["output"];
  /** ブログ記事リスト取得 */
  posts: BlogPostConnection;
  /** スラッグ */
  slug: Scalars["String"]["output"];
};

/** ブログオブジェクト */
export type BlogPostsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoryID?: InputMaybe<Scalars["ID"]["input"]>;
  endDate?: InputMaybe<Scalars["Date"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BlogPostOrderInput>;
  startDate?: InputMaybe<Scalars["Date"]["input"]>;
};

/** ブログカテゴリオブジェクト */
export type BlogCategory = {
  __typename?: "BlogCategory";
  /** ブログカテゴリ記事数取得 */
  count: Scalars["Int"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** デフォルト */
  isDefault: Scalars["Boolean"]["output"];
  /** カテゴリ名 */
  name: Scalars["String"]["output"];
  /** スラッグ */
  slug: Scalars["String"]["output"];
};

/** ブログ記事オブジェクト */
export type BlogPost = Node & {
  __typename?: "BlogPost";
  /** カテゴリ */
  category?: Maybe<BlogCategory>;
  /** ブログ記事コメントリスト取得 */
  comments: BlogPostCommentConnection;
  /** 記事コンテンツ */
  content: Scalars["String"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** ステータス */
  isAvailable: Scalars["Boolean"]["output"];
  /** コメント可否フラグ */
  isCommentable: Scalars["Boolean"]["output"];
  /** 閲覧可能フラグ */
  isViewable: Scalars["Boolean"]["output"];
  /** 公開日時 */
  startAt: Scalars["Datetime"]["output"];
  /** 記事タイトル */
  subject: Scalars["String"]["output"];
  /** サムネイル */
  thumbnailFile?: Maybe<SharedFile>;
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};

/** ブログ記事オブジェクト */
export type BlogPostCommentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BlogPostCommentOrderInput>;
};

/** ブログ記事コメントオブジェクト */
export type BlogPostComment = Node & {
  __typename?: "BlogPostComment";
  /** コメント主 */
  commenter?: Maybe<Member>;
  /** コメント内容 */
  content: Scalars["String"]["output"];
  /** 作成日時 */
  createdAt: Scalars["Datetime"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
};

/** ブログ記事コメントコネクションオブジェクト */
export type BlogPostCommentConnection = {
  __typename?: "BlogPostCommentConnection";
  /** エッジ */
  edges: Array<BlogPostCommentEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 合計コメント数 */
  totalCount: Scalars["Int"]["output"];
};

/** ブログ記事コメントエッジオブジェクト */
export type BlogPostCommentEdge = Edge & {
  __typename?: "BlogPostCommentEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: BlogPostComment;
};

/** ブログ記事コメントソート項目 */
export enum BlogPostCommentOrderField {
  /** 作成日時 */
  CreatedAt = "CREATED_AT",
}

/** ブログ記事コメントソート条件入力オブジェクト */
export type BlogPostCommentOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: BlogPostCommentOrderField;
};

/** ブログ記事コネクションオブジェクト */
export type BlogPostConnection = {
  __typename?: "BlogPostConnection";
  /** エッジ */
  edges: Array<BlogPostEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars["Int"]["output"];
};

/** ブログ記事エッジオブジェクト */
export type BlogPostEdge = Edge & {
  __typename?: "BlogPostEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: BlogPost;
};

/** ブログ記事ソート項目 */
export enum BlogPostOrderField {
  /** 作成日時 */
  CreatedAt = "CREATED_AT",
  /** 公開日時 */
  StartAt = "START_AT",
}

/** ブログ記事ソート条件入力オブジェクト */
export type BlogPostOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: BlogPostOrderField;
};

/** サブスク解約 - Input */
export type CancelSubscriptionInput = {
  /** プランID */
  planId: Scalars["ID"]["input"];
  /** レポート */
  report?: InputMaybe<CancelSubscriptionReportInput>;
};

/** サブスク解約レポート - Input */
export type CancelSubscriptionReportInput = {
  /** 解約理由詳細 解約理由がその他の場合に保存される */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** 解約理由ID */
  reasonIds: Array<Scalars["ID"]["input"]>;
};

/** 当選したデジタルコンテンツくじ */
export type CapturedDigitalContentLottery = {
  __typename?: "CapturedDigitalContentLottery";
  /** 獲得したデジタルコンテンツ数 */
  capturedDigitalContentCount: Scalars["Int"]["output"];
  /** くじ */
  lottery: Lottery;
};

export type CardPayment = PaymentMethod & {
  __typename?: "CardPayment";
  creditCard: CreditCard;
  /** @deprecated creditCardの使用を推奨 */
  maskedNo: Scalars["String"]["output"];
  paymentAt: Scalars["Datetime"]["output"];
};

export type CarrierAuth = {
  __typename?: "CarrierAuth";
  accessId: Scalars["String"]["output"];
  startUrl: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
};

export enum CarrierCompany {
  Au = "AU",
  Docomo = "DOCOMO",
  Softbank = "SOFTBANK",
}

export type CarrierPayment = PaymentMethod & {
  __typename?: "CarrierPayment";
  carrierCompany: CarrierCompany;
  paymentAt: Scalars["Datetime"]["output"];
};

export type ChangeSubscriptionPaymentMethodToCardInput = {
  cardId: Scalars["ID"]["input"];
  planId: Scalars["ID"]["input"];
};

export type ChangeSubscriptionPaymentMethodToCarrierInput = {
  carrierCompany: CarrierCompany;
  /** 失敗リダイレクトパス */
  failurePath?: InputMaybe<Scalars["String"]["input"]>;
  /** 失敗URL（deprecated: failureRedirectPathを使用） */
  failureReturnURL?: InputMaybe<Scalars["String"]["input"]>;
  planId: Scalars["ID"]["input"];
  /** 成功リダイレクトパス */
  successPath?: InputMaybe<Scalars["String"]["input"]>;
  /** 成功URL（deprecated: successRedirectPathを使用） */
  successReturnURL?: InputMaybe<Scalars["String"]["input"]>;
};

/** コイン獲得履歴 */
export type CoinAcquisitionHistory = Node & {
  __typename?: "CoinAcquisitionHistory";
  /** コインボーナス獲得枚数 */
  bonusAmount: Scalars["Int"]["output"];
  /** コイン獲得枚数 */
  coinAmount: Scalars["Int"]["output"];
  /** 獲得日時 */
  createdAt: Scalars["Datetime"]["output"];
  /** 有効期限 */
  expireAt: Scalars["Datetime"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** 支払金額 */
  price: Scalars["Int"]["output"];
};

/** コイン獲得履歴エッジオブジェクト */
export type CoinAcquisitionHistoryEdge = Edge & {
  __typename?: "CoinAcquisitionHistoryEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: CoinAcquisitionHistory;
};

/** コイン獲得履歴(有効期限nullable) */
export type CoinAcquisitionHistoryV2 = Node & {
  __typename?: "CoinAcquisitionHistoryV2";
  /** コインボーナス獲得枚数 */
  bonusAmount: Scalars["Int"]["output"];
  /** コイン獲得枚数 */
  coinAmount: Scalars["Int"]["output"];
  /** 獲得日時 */
  createdAt: Scalars["Datetime"]["output"];
  /** 有効期限 */
  expireAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** 支払金額 */
  price: Scalars["Int"]["output"];
};

/** コイン消費履歴 */
export type CoinConsumptionHistory = Node & {
  __typename?: "CoinConsumptionHistory";
  /** コイン消費枚数 */
  amount: Scalars["Int"]["output"];
  /** 消費日時 */
  createdAt: Scalars["Datetime"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** 支払い対象 */
  product: CoinConsumptionProduct;
  /** コイン消費サイト */
  site: Site;
};

/** コイン消費履歴エッジオブジェクト */
export type CoinConsumptionHistoryEdge = Edge & {
  __typename?: "CoinConsumptionHistoryEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: CoinConsumptionHistory;
};

/** コイン消費対象 */
export enum CoinConsumptionProduct {
  /** スタンプ */
  Stamp = "STAMP",
}

/** コイン履歴 */
export type CoinHistory = CoinAcquisitionHistoryV2 | CoinConsumptionHistory;

/** コイン履歴コネクションオブジェクト */
export type CoinHistoryConnection = {
  __typename?: "CoinHistoryConnection";
  /** エッジ */
  edges: Array<CoinHistoryEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
};

export type CoinHistoryEdge =
  | CoinAcquisitionHistoryEdge
  | CoinConsumptionHistoryEdge;

/** コイン履歴ソート項目 */
export enum CoinHistoryOrderField {
  /** 履歴作成日時 */
  CreatedAt = "CREATED_AT",
}

/** コイン履歴ソート条件入力オブジェクト */
export type CoinHistoryOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: CoinHistoryOrderField;
};

/** コインソート項目 */
export enum CoinOrderField {
  /** 有効期限 */
  ExpireAt = "EXPIRE_AT",
}

/** コインソート条件入力オブジェクト */
export type CoinOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: CoinOrderField;
};

/** コイン商品オブジェクト */
export type CoinProduct = Node & {
  __typename?: "CoinProduct";
  /** ボーナス枚数 */
  bonusAmount: Scalars["Int"]["output"];
  /** コイン枚数 */
  coinAmount: Scalars["Int"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** 価格 */
  price: Scalars["Int"]["output"];
};

/** コイン購入履歴 */
export type CoinPurchaseHistory = Node & {
  __typename?: "CoinPurchaseHistory";
  /** コイン購入枚数 */
  coinAmount: Scalars["Int"]["output"];
  /** 購入日時 */
  createdAt: Scalars["Datetime"]["output"];
  /** コイン有効期限 */
  expireAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** 支払い金額 */
  price: Scalars["Int"]["output"];
};

/** コンテンツ閲覧可能範囲設定 */
export type ContentsViewableScope = {
  __typename?: "ContentsViewableScope";
  /** 利用可能プラン */
  plans?: Maybe<Array<SubscriptionPlan>>;
  /** 閲覧可能範囲 */
  scopeType: ViewableScopeType;
};

/** Cookie設定値 */
export type CookieValue = {
  __typename?: "CookieValue";
  /** name */
  name: Scalars["String"]["output"];
  /** value */
  value: Scalars["String"]["output"];
};

/** クーポン-Node */
export type Coupon = Node & {
  __typename?: "Coupon";
  /** アクションタイプ */
  actionType: CouponActionType;
  /** ギフトコインアクション */
  giftCoinAction?: Maybe<CouponGiftCoinAction>;
  /** クーポンID */
  id: Scalars["ID"]["output"];
  /** サブスクリプションアクション */
  subscriptionAction?: Maybe<CouponSubscriptionAction>;
};

/** クーポンアクションタイプ */
export enum CouponActionType {
  /** ギフトコイン */
  GiftCoin = "GIFT_COIN",
  /** サブスクリプション */
  Subscription = "SUBSCRIPTION",
}

/** 割引タイプ */
export enum CouponDiscountType {
  /** 固定 */
  Fixed = "FIXED",
  /** 割合 */
  Percentage = "PERCENTAGE",
}

/** クーポンギフトコインアクション */
export type CouponGiftCoinAction = {
  __typename?: "CouponGiftCoinAction";
  /** 数量 */
  amount: Scalars["Int"]["output"];
  /** アクションID */
  id: Scalars["ID"]["output"];
};

/** クーポンプロモーション-Node */
export type CouponPromotion = Node & {
  __typename?: "CouponPromotion";
  /** クーポンリスト */
  coupons?: Maybe<Array<Coupon>>;
  /** プロモーションID */
  id: Scalars["ID"]["output"];
};

/** クーポンサブスクリプションアクション */
export type CouponSubscriptionAction = {
  __typename?: "CouponSubscriptionAction";
  /** 割引数量 */
  discountAmount: Scalars["String"]["output"];
  /** 割引タイプ */
  discountType: CouponDiscountType;
  /** 割引適用月数 */
  durationInMonths: Scalars["Int"]["output"];
  /** アクションID */
  id: Scalars["ID"]["output"];
  /** サブスクプランID */
  subscriptionPlanId: Scalars["ID"]["output"];
};

export type CreateMemberInput = {
  displayName: Scalars["String"]["input"];
  isSentMail: Scalars["Boolean"]["input"];
  profileImage?: InputMaybe<Scalars["Upload"]["input"]>;
};

export type CreateUserByEmailInput = {
  email: Scalars["String"]["input"];
  famId?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  verifyURL: Scalars["String"]["input"];
};

export type CreateUserBySnsInput = {
  sns: SignUpSns;
};

export type CreditCard = Node & {
  __typename?: "CreditCard";
  expiration: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  maskedNo: Scalars["String"]["output"];
  paymentSchedule?: Maybe<PaymentSchedule>;
};

/** 会員退会 - Input */
export type DeleteMemberInput = {
  /** 退会理由レポート */
  report?: InputMaybe<CancelSubscriptionReportInput>;
};

/** 後で消す */
export enum DeprecatedMovieCategory {
  All = "ALL",
}

/** サイトデザインオブジェクト */
export type Design = {
  __typename?: "Design";
  /** 背景カラー */
  backgroundColor: Scalars["String"]["output"];
  /** 背景画像の表示方法 */
  backgroundImageDisplayType: ImageDisplayType;
  /** 背景セカンダリカラー */
  backgroundSecondaryColor: Scalars["String"]["output"];
  /** サイトフォント欧文 */
  fontEuro?: Maybe<DesignFont>;
  /** サイトフォント和文 */
  fontJp?: Maybe<DesignFont>;
  /** PoweredBy非表示 */
  hidePoweredBy: Scalars["Boolean"]["output"];
  /** 翻訳リンク非表示 */
  hideTranslationLink: Scalars["Boolean"]["output"];
  /**
   * デザインレイアウトセクション
   * @deprecated siteスキーマに移動
   */
  layoutSections: Array<LayoutSection>;
  /** リンクカラー */
  linkColor: Scalars["String"]["output"];
  /** ロゴフォント */
  logoFont?: Maybe<DesignFont>;
  /** ロゴフォントカラー */
  logoFontColor: Scalars["String"]["output"];
  /** PCサイズ以上ロゴファイル */
  logoPcFile?: Maybe<SharedFile>;
  /** タブレットサイズ以下ロゴファイルID */
  logoTabletSpFile?: Maybe<SharedFile>;
  /** ロゴテキスト */
  logoText: Scalars["String"]["output"];
  /** メインビジュアル */
  mainVisual?: Maybe<MainVisual>;
  /** Overwrite CSS */
  overwriteCSS: Scalars["String"]["output"];
  /** サイトID */
  siteId: Scalars["ID"]["output"];
  /** テンプレート */
  template: DesignTemplate;
  /** テンプレートID */
  templateId: Scalars["Int"]["output"];
  /** 文字カラー1 */
  textColor: Scalars["String"]["output"];
  /** 文字カラー2 */
  textSecondaryColor: Scalars["String"]["output"];
  /** テーマカラー */
  themeColor: Scalars["String"]["output"];
  /** テーマセカンダリーカラー */
  themeSecondaryColor: Scalars["String"]["output"];
  /** トップページ背景カラー */
  topBackgroundColor: Scalars["String"]["output"];
  /** トップページ背景画像 */
  topBackgroundImageFile?: Maybe<SharedFile>;
};

/** 自動切替バナーグループオブジェクト */
export type DesignAutoCarouselBannerGroup = Node & {
  __typename?: "DesignAutoCarouselBannerGroup";
  /** バナー複数取得 */
  banners: Array<Maybe<DesignBanner>>;
  /** バナーサイズ(縦) */
  heightRatio?: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** バナーグループ名 */
  name: Scalars["String"]["output"];
  /** バナーサイズ(横) */
  widthRatio?: Maybe<Scalars["Float"]["output"]>;
};

/** デザインバナーオブジェクト */
export type DesignBanner = Node & {
  __typename?: "DesignBanner";
  /** バナーグループID */
  bannerGroupId: Scalars["ID"]["output"];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** ファイルID */
  fileId: Scalars["ID"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** 公開フラグ */
  isAvailable: Scalars["Boolean"]["output"];
  /** ページリンクフラグ */
  isPageLink: Scalars["Boolean"]["output"];
  /** 別タブを開くフラグ */
  isTargetBlank: Scalars["Boolean"]["output"];
  /** リンクURL */
  linkURL: Scalars["String"]["output"];
  /** 標準 */
  seq: Scalars["Int"]["output"];
  /** 公開日時 */
  startAt: Scalars["Datetime"]["output"];
};

/** デザインバナーグループオブジェクト */
export type DesignBannerGroup = Node & {
  __typename?: "DesignBannerGroup";
  /** バナータイプ(0:スライドショー,1:バナー) */
  bannerType: Scalars["Int"]["output"];
  /** バナー複数取得 */
  banners: Array<Maybe<DesignBanner>>;
  /** バナーサイズ(縦) */
  heightRatio?: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** バナーグループ名 */
  name: Scalars["String"]["output"];
  /** バナーサイズ(横) */
  widthRatio?: Maybe<Scalars["Float"]["output"]>;
};

export type DesignBannerGroupV2 =
  | DesignAutoCarouselBannerGroup
  | DesignManualCarouselBannerGroup;

/** デザインフォントオブジェクト */
export type DesignFont = {
  __typename?: "DesignFont";
  /** フォント */
  font: Scalars["String"]["output"];
  /** フォントID */
  id: Scalars["ID"]["output"];
  /** デフォルト */
  isDefault: Scalars["Boolean"]["output"];
  /** フォント名 */
  name: Scalars["String"]["output"];
  /** フォントタイプ(0:欧文, 1:和文) */
  type: Scalars["Int"]["output"];
};

/** デザインリンク */
export type DesignLink = {
  __typename?: "DesignLink";
  /** ページリンクフラグ */
  isPageLink: Scalars["Boolean"]["output"];
  /** URL/スラッグ */
  url: Scalars["String"]["output"];
};

/** 手動切替バナーグループオブジェクト */
export type DesignManualCarouselBannerGroup = Node & {
  __typename?: "DesignManualCarouselBannerGroup";
  /** バナー複数取得 */
  banners: Array<Maybe<DesignBanner>>;
  /** バナーサイズ(縦) */
  heightRatio?: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** バナーグループ名 */
  name: Scalars["String"]["output"];
  /** バナーサイズ(横) */
  widthRatio?: Maybe<Scalars["Float"]["output"]>;
};

/** デザインメニュー */
export type DesignMenu = {
  __typename?: "DesignMenu";
  /** ブログID */
  blogId?: Maybe<Scalars["ID"]["output"]>;
  /** 表示名 */
  displayName: Scalars["String"]["output"];
  /** 表示タイプ (1:常に表示, 2:未ログイン時に表示, 3:ログイン時に表示) */
  displayType: Scalars["Int"]["output"];
  /** 写真管理ID */
  galleryGroupId?: Maybe<Scalars["ID"]["output"]>;
  /** メニューID */
  id: Scalars["ID"]["output"];
  /** ページリンクフラグ */
  isPageLink: Scalars["Boolean"]["output"];
  /** メニュー名 */
  menuName: Scalars["String"]["output"];
  /** メニュータイプ */
  menuType: MenuType;
  /** URL/スラッグ */
  url: Scalars["String"]["output"];
};

/** デザインテンプレート */
export type DesignTemplate = {
  __typename?: "DesignTemplate";
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** テンプレートID */
  id: Scalars["ID"]["output"];
  /** テンプレート名 */
  name: Scalars["String"]["output"];
};

/** くじ引き-Input */
export type DrawLotteryInput = {
  /** くじID */
  lotteryId: Scalars["ID"]["input"];
  /**
   * 支払いカード情報
   *
   * 決済方法が増えた場合を考慮してNullableとする
   */
  paymentCard?: InputMaybe<PaymentCardInput>;
  /** 抽選券ID */
  ticketID: Scalars["ID"]["input"];
};

/** くじ引き-Payload */
export type DrawLotteryPayload = {
  __typename?: "DrawLotteryPayload";
  /** 抽選券購入ID */
  ticketPurchaseId: Scalars["ID"]["output"];
};

export type Edge = {
  cursor: Scalars["String"]["output"];
  node?: Maybe<Node>;
};

export type ExchangeLotteryPrizeQuantityInput = {
  /** 賞品ID */
  prizeId: Scalars["ID"]["input"];
  /** 数量 */
  quantity: Scalars["Int"]["input"];
};

/** 賞品引換え-Input */
export type ExchangeLotteryPrizesInput = {
  /** くじID */
  lotteryId: Scalars["ID"]["input"];
  /**
   * 支払いカード情報
   *
   * 決済方法が増えた場合を考慮してNullableとする
   */
  paymentCard?: InputMaybe<PaymentCardInput>;
  /** 賞品数量リスト */
  prizes: Array<ExchangeLotteryPrizeQuantityInput>;
  /**
   * 配送先住所
   *
   * 要配送アイテムが1つ以上含まれている場合のみ必須
   */
  shippingAddress?: InputMaybe<ShopShippingAddressInput>;
};

/** 賞品引換え-Payload */
export type ExchangeLotteryPrizesPayload = {
  __typename?: "ExchangeLotteryPrizesPayload";
  /** 引換ID */
  exchangeId: Scalars["ID"]["output"];
};

/** 引換可能くじ */
export type ExchangeableLottery = {
  __typename?: "ExchangeableLottery";
  /** くじ */
  lottery: Lottery;
  /** 賞品数量 */
  prizeQuantity: Scalars["Int"]["output"];
};

/** 機能 */
export type Feature = {
  __typename?: "Feature";
  /** 説明文 */
  description: Scalars["String"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** 有効ステータス */
  isAvailable: Scalars["Boolean"]["output"];
  /** 機能名 */
  name: Scalars["String"]["output"];
  /** スラッグ */
  slug: Scalars["String"]["output"];
};

export enum FeatureSlug {
  Blog = "BLOG",
  Gallery = "GALLERY",
  Movie = "MOVIE",
  Music = "MUSIC",
  News = "NEWS",
  Schedule = "SCHEDULE",
}

export type Gallery = Node & {
  __typename?: "Gallery";
  /** ギャラリーコメントリスト取得 */
  comments: GalleryCommentConnection;
  /** コンテンツ */
  contents?: Maybe<Array<GalleryContent>>;
  /**
   * コンテンツURL
   * @deprecated contentsの使用を推奨
   */
  contentsURLs: Array<Scalars["String"]["output"]>;
  /** 説明文 */
  description: Scalars["String"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** コメント可否フラグ */
  isCommentable: Scalars["Boolean"]["output"];
  /** 閲覧可能フラグ */
  isViewable: Scalars["Boolean"]["output"];
  /** 名称 */
  name: Scalars["String"]["output"];
  /** リリース日 */
  releaseDay: Scalars["Date"]["output"];
  /**
   * サムネイルURL
   * @deprecated サムネイルURLは個別に設定せず、先頭のcontentsをサムネイルとして使用
   */
  thumbnailURL: Scalars["String"]["output"];
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};

export type GalleryCommentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GalleryCommentOrderInput>;
};

/** ギャラリーコメントオブジェクト */
export type GalleryComment = Node & {
  __typename?: "GalleryComment";
  /** コメント投稿者 */
  commenter?: Maybe<Member>;
  /** コメント内容 */
  content: Scalars["String"]["output"];
  /** 作成日時 */
  createdAt: Scalars["Datetime"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
};

/** ギャラリーコメントコネクションオブジェクト */
export type GalleryCommentConnection = {
  __typename?: "GalleryCommentConnection";
  /** エッジ */
  edges: Array<GalleryCommentEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 合計コメント数 */
  totalCount: Scalars["Int"]["output"];
};

/** ギャラリーコメントエッジオブジェクト */
export type GalleryCommentEdge = Edge & {
  __typename?: "GalleryCommentEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: GalleryComment;
};

/** ギャラリーコメントソート項目 */
export enum GalleryCommentOrderField {
  /** 作成日時 */
  CreatedAt = "CREATED_AT",
}

/** ギャラリーコメントソート条件入力オブジェクト */
export type GalleryCommentOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: GalleryCommentOrderField;
};

export type GalleryConnection = {
  __typename?: "GalleryConnection";
  /** エッジ */
  edges: Array<GalleryEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars["Int"]["output"];
};

export type GalleryContent = {
  __typename?: "GalleryContent";
  /** コンテンツファイル */
  contentFile: SharedFile;
  /** ID */
  id: Scalars["ID"]["output"];
  /** 画像プリセットURL */
  imagePresetUrl?: Maybe<GalleryImagePresetUrl>;
  /** 閲覧可能フラグ */
  isViewable: Scalars["Boolean"]["output"];
  /** 順番 */
  seq: Scalars["Int"]["output"];
};

export type GalleryEdge = Edge & {
  __typename?: "GalleryEdge";
  cursor: Scalars["String"]["output"];
  node: Gallery;
};

/** 写真管理オブジェクト */
export type GalleryGroup = Node & {
  __typename?: "GalleryGroup";
  /** ギャラリーリスト取得 */
  galleries: GalleryConnection;
  /** 写真管理ID */
  id: Scalars["ID"]["output"];
  /** 公開ステータス */
  isAvailable: Scalars["Boolean"]["output"];
  /** 写真管理名 */
  name: Scalars["String"]["output"];
  /** スラッグ名 */
  slug: Scalars["String"]["output"];
};

/** 写真管理オブジェクト */
export type GalleryGroupGalleriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GalleryOrderInput>;
};

/** ギャラリー画像プリセットURL */
export type GalleryImagePresetUrl = {
  __typename?: "GalleryImagePresetUrl";
  /** Max 1920px */
  large: Scalars["String"]["output"];
  /** Max 768px */
  medium: Scalars["String"]["output"];
  /** オリジナル */
  original: Scalars["String"]["output"];
  /** Max 480px */
  small: Scalars["String"]["output"];
  /** Max 150px */
  thumbnail: Scalars["String"]["output"];
  /** Max 2048px */
  xLarge: Scalars["String"]["output"];
};

export enum GalleryOrderField {
  CreatedAt = "CREATED_AT",
  StartAt = "START_AT",
}

export type GalleryOrderInput = {
  direction: OrderDirection;
  field: GalleryOrderField;
};

export enum Gender {
  Man = "MAN",
  Unspecified = "UNSPECIFIED",
  Woman = "WOMAN",
}

/** 画像の表示方法 */
export enum ImageDisplayType {
  /** 固定 */
  Fix = "FIX",
  /** リピート */
  Repeat = "REPEAT",
}

export type InquireInput = {
  /** 問い合わせ内容 */
  content: Scalars["String"]["input"];
  /** 添付ファイル */
  file?: InputMaybe<Scalars["Upload"]["input"]>;
  /** メールアドレス */
  inquirerEmail: Scalars["String"]["input"];
  /** 名前 */
  inquirerName: Scalars["String"]["input"];
  /** 問い合わせ種別ID */
  typeId: Scalars["ID"]["input"];
};

export type InquireOfficialInput = {
  /** 会社名 */
  companyName?: InputMaybe<Scalars["String"]["input"]>;
  /** 問い合わせ内容 */
  content: Scalars["String"]["input"];
  /** 添付ファイル */
  file?: InputMaybe<Scalars["Upload"]["input"]>;
  /** メールアドレス */
  inquirerEmail: Scalars["String"]["input"];
  /** 名前 */
  inquirerName: Scalars["String"]["input"];
  /** ご利用予定の方のお名前 */
  userName?: InputMaybe<Scalars["String"]["input"]>;
};

/** 問い合わせオブジェクト */
export type Inquiry = Node & {
  __typename?: "Inquiry";
  /** 問い合わせ内容 */
  content: Scalars["String"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** 問い合わせ日時 */
  inquiredAt: Scalars["Datetime"]["output"];
  /** メールアドレス */
  inquirerEmail: Scalars["String"]["output"];
  /** 名前 */
  inquirerName: Scalars["String"]["output"];
};

/** 問い合わせ種別 */
export type InquiryType = Node & {
  __typename?: "InquiryType";
  /** ヘルプ欄 */
  helps?: Maybe<Array<Scalars["String"]["output"]>>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** 問い合わせ種別名 */
  name: Scalars["String"]["output"];
  /** FAMサポート宛フラグ */
  toFAMSupport: Scalars["Boolean"]["output"];
};

/** レイアウトボタンスタイル */
export enum LayoutButtonStyle {
  Line = "LINE",
  Paste = "PASTE",
}

/** レイアウト水平方向ポジション */
export enum LayoutHorizontalPosition {
  Center = "CENTER",
  Left = "LEFT",
  Right = "RIGHT",
}

/** レイアウトセクションオブジェクト */
export type LayoutSection = Node & {
  __typename?: "LayoutSection";
  /** 詳細 */
  detail: LayoutSectionDetail;
  /** ID */
  id: Scalars["ID"]["output"];
  /** 公開フラグ */
  isAvailable: Scalars["Boolean"]["output"];
  /** セクションタイプ名 */
  name: Scalars["String"]["output"];
  /** 表示順 */
  seq: Scalars["Int"]["output"];
};

/** レイアウトバナーグループ詳細 */
export type LayoutSectionBannerGroupDetail = {
  __typename?: "LayoutSectionBannerGroupDetail";
  /**
   * バナーグループオブジェクト
   * @deprecated `bannerGroupV2`の使用を推奨
   */
  bannerGroup: DesignBannerGroup;
  /** バナーグループオブジェクト */
  bannerGroupV2: DesignBannerGroupV2;
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
};

/** ブログセクション詳細 */
export type LayoutSectionBlogDetail = {
  __typename?: "LayoutSectionBlogDetail";
  /** ブログ */
  blog: Blog;
  /** 表示件数 */
  displayLimit: Scalars["Int"]["output"];
  /** 表示ブログ記事リスト */
  displayPosts?: Maybe<Array<BlogPost>>;
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars["String"]["output"];
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
};

/** レイアウトセクションボタン */
export type LayoutSectionButton = {
  __typename?: "LayoutSectionButton";
  /** ボタンカラーコード (NULL:テーマカラー) */
  buttonColor?: Maybe<Scalars["String"]["output"]>;
  /** ボタンスタイル */
  buttonStyle: LayoutButtonStyle;
  /** ボタンテキスト */
  buttonText: Scalars["String"]["output"];
  /** ボタンURL */
  buttonURL: Scalars["String"]["output"];
  /** ページリンクフラグ */
  isPageLink: Scalars["Boolean"]["output"];
};

/** カスタムHTML詳細 */
export type LayoutSectionCustomHtmlDetail = {
  __typename?: "LayoutSectionCustomHTMLDetail";
  /** HTML */
  html: Scalars["String"]["output"];
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
};

export type LayoutSectionDetail =
  | LayoutSectionBannerGroupDetail
  | LayoutSectionBlogDetail
  | LayoutSectionCustomHtmlDetail
  | LayoutSectionImageDetail
  | LayoutSectionImageMovieAndTextDetail
  | LayoutSectionImageMovieUpperTextDetail
  | LayoutSectionMemberRegistrationButtonDetail
  | LayoutSectionMusicDetail
  | LayoutSectionNewsDetail
  | LayoutSectionPostedGalleryDetail
  | LayoutSectionPostedMovieDetail
  | LayoutSectionScheduleDetail
  | LayoutSectionTextButtonDetail
  | LayoutSectionTwitterTimelineDetail;

/** レイアウト画像詳細 */
export type LayoutSectionImageDetail = {
  __typename?: "LayoutSectionImageDetail";
  /** PC用ファイル */
  pcFile?: Maybe<SharedFile>;
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
  /** タブレットSP用ファイル */
  tabletSpFile?: Maybe<SharedFile>;
};

/** 画像・動画とテキストセクション詳細 */
export type LayoutSectionImageMovieAndTextDetail = {
  __typename?: "LayoutSectionImageMovieAndTextDetail";
  /** ボタン */
  button: LayoutSectionButton;
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** ファイルの表示位置 */
  filePosition: LayoutHorizontalPosition;
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
  /** テキスト */
  text: LayoutSectionText;
};

/** 画像・動画上にテキストセクション詳細 */
export type LayoutSectionImageMovieUpperTextDetail = {
  __typename?: "LayoutSectionImageMovieUpperTextDetail";
  /** ボタン */
  button: LayoutSectionButton;
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** オーバーレイの色コード */
  fileOverlayColor: Scalars["String"]["output"];
  /** オーバーレイの不透明度 */
  fileOverlayOpacity: Scalars["Int"]["output"];
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
  /** テキスト */
  text: LayoutSectionText;
};

/** 会員登録ボタン */
export type LayoutSectionMemberRegistrationButtonDetail = {
  __typename?: "LayoutSectionMemberRegistrationButtonDetail";
  /** コンテンツテキスト */
  contentText: Scalars["String"]["output"];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars["String"]["output"];
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
};

export enum LayoutSectionMusicContentType {
  Album = "ALBUM",
  Playlist = "PLAYLIST",
  Single = "SINGLE",
}

/** 音楽セクション詳細 */
export type LayoutSectionMusicDetail = {
  __typename?: "LayoutSectionMusicDetail";
  /** アルバム一覧 */
  albums?: Maybe<Array<MusicAlbum>>;
  /** コンテンツタイプ */
  contentType: LayoutSectionMusicContentType;
  /** 表示件数 */
  displayLimit: Scalars["Int"]["output"];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars["String"]["output"];
  /** プレイリスト一覧 */
  playlists?: Maybe<Array<MusicPlaylist>>;
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
};

/** お知らせセクション詳細 */
export type LayoutSectionNewsDetail = {
  __typename?: "LayoutSectionNewsDetail";
  /** カテゴリ */
  category?: Maybe<NewsCategory>;
  /** 表示件数 */
  displayLimit: Scalars["Int"]["output"];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars["String"]["output"];
  /** お知らせリスト取得 */
  news?: Maybe<Array<News>>;
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
};

/** 投稿ギャラリーセクション詳細 */
export type LayoutSectionPostedGalleryDetail = {
  __typename?: "LayoutSectionPostedGalleryDetail";
  /** 表示件数 */
  displayLimit: Scalars["Int"]["output"];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 写真管理リスト取得 */
  galleryGroup: GalleryGroup;
  /** 見出しテキスト */
  headerText: Scalars["String"]["output"];
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
};

/** 投稿動画セクション詳細 */
export type LayoutSectionPostedMovieDetail = {
  __typename?: "LayoutSectionPostedMovieDetail";
  /** 動画カテゴリ */
  category?: Maybe<MovieCategory>;
  /** 表示件数 */
  displayLimit: Scalars["Int"]["output"];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars["String"]["output"];
  /** 動画リスト取得 */
  movies: Array<Movie>;
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
};

/** スケジュールセクション詳細 */
export type LayoutSectionScheduleDetail = {
  __typename?: "LayoutSectionScheduleDetail";
  category?: Maybe<ScheduleCategory>;
  /** 表示件数 */
  displayLimit: Scalars["Int"]["output"];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars["String"]["output"];
  /** スケジュールリスト */
  schedules?: Maybe<Array<ScheduleDateGroup>>;
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
};

/** レイアウトセクションテキスト */
export type LayoutSectionText = {
  __typename?: "LayoutSectionText";
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** テキスト内容 */
  textContent: Scalars["String"]["output"];
  /** コンテンツテキストカラー */
  textContentColor?: Maybe<Scalars["String"]["output"]>;
  /** テキスト見出し */
  textHeader: Scalars["String"]["output"];
  /** 見出しテキストカラー */
  textHeaderColor?: Maybe<Scalars["String"]["output"]>;
  /** テキストの水平方向の揃え位置 */
  textPosition: LayoutHorizontalPosition;
};

/** テキスト・ボタンセクション詳細 */
export type LayoutSectionTextButtonDetail = {
  __typename?: "LayoutSectionTextButtonDetail";
  /** ボタン */
  button: LayoutSectionButton;
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
  /** テキスト */
  text: LayoutSectionText;
};

/** レイアウトTwitterタイムライン */
export type LayoutSectionTwitterTimelineDetail = {
  __typename?: "LayoutSectionTwitterTimelineDetail";
  /** カラーテーマ */
  colorTheme: TwitterTimelineColorTheme;
  /** height */
  height: Scalars["Int"]["output"];
  /** セクションID */
  sectionId: Scalars["ID"]["output"];
  /** width */
  width: Scalars["Int"]["output"];
};

export type LinkAuthProviderEmailInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

/** 生配信オブジェクト */
export type LiveBroadcast = Node & {
  __typename?: "LiveBroadcast";
  /** アーカイブチャット */
  archiveChats?: Maybe<Array<LiveBroadcastChat>>;
  /** 投げ銭可能フラグ */
  canTip: Scalars["Boolean"]["output"];
  /** Agora: channel_name */
  channelName: Scalars["String"]["output"];
  /** コラボ申請ステータス */
  collaborationRequestStatus?: Maybe<LiveBroadcastCollaborationRequestStatus>;
  /** 概要欄 */
  description?: Maybe<Scalars["String"]["output"]>;
  /** 終了日時 */
  endedAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** 閲覧可能フラグ */
  isViewable: Scalars["Boolean"]["output"];
  /** タイトル */
  name: Scalars["String"]["output"];
  /** プレゼントオブジェクト */
  presents?: Maybe<Array<LiveBroadcastPresent>>;
  /** 料金ステータス */
  priceStatus: LiveBroadcastPriceStatus;
  /** ランキング */
  ranking?: Maybe<Array<LiveBroadcastRank>>;
  /** 開始予定日時 */
  scheduleAt: Scalars["Datetime"]["output"];
  /** 開始日時 */
  startedAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** サムネイル */
  thumbnailFile?: Maybe<SharedFile>;
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};

/** 生配信オブジェクト */
export type LiveBroadcastArchiveChatsArgs = {
  duration: Scalars["Int"]["input"];
  limit: Scalars["Int"]["input"];
};

export type LiveBroadcastChat =
  | LiveBroadcastMessage
  | LiveBroadcastPresentedStamp;

/** 消費コイン条件プレゼントオブジェクト */
export type LiveBroadcastCoinPresent = LiveBroadcastPresentInfo & {
  __typename?: "LiveBroadcastCoinPresent";
  /** 消費コイン下限 */
  coinLower: Scalars["Int"]["output"];
  /** 消費コイン上限 */
  coinUpper?: Maybe<Scalars["Int"]["output"]>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** 配送フラグ */
  isDelivery: Scalars["Boolean"]["output"];
  /** プレゼント名 */
  name: Scalars["String"]["output"];
  /** ランダム抽選数 */
  randomCount?: Maybe<Scalars["Int"]["output"]>;
};

/** 生配信コラボ申請ステータス */
export enum LiveBroadcastCollaborationRequestStatus {
  /** 承認済み */
  Approved = "APPROVED",
  /** 申請済み */
  Submitted = "SUBMITTED",
  /** 未申請 */
  Unsubmitted = "UNSUBMITTED",
}

/** 生配信コネクションオブジェクト */
export type LiveBroadcastConnection = {
  __typename?: "LiveBroadcastConnection";
  /** エッジ */
  edges: Array<LiveBroadcastEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars["Int"]["output"];
};

/** 生配信エッジオブジェクト */
export type LiveBroadcastEdge = Edge & {
  __typename?: "LiveBroadcastEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: LiveBroadcast;
};

/** 生配信チャットメッセージオブジェクト */
export type LiveBroadcastMessage = {
  __typename?: "LiveBroadcastMessage";
  /** チャット本文 */
  content: Scalars["String"]["output"];
  /** 表示名 */
  displayName: Scalars["String"]["output"];
  /** 再生時間(ミリ秒) */
  duration: Scalars["Int"]["output"];
};

/** 生配信ソート項目 */
export enum LiveBroadcastOrderField {
  /** 開始予定日時 */
  ScheduleAt = "SCHEDULE_AT",
}

/** 動画ソート条件入力オブジェクト */
export type LiveBroadcastOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: LiveBroadcastOrderField;
};

/** 有料会員限定プレゼントオブジェクト */
export type LiveBroadcastPremiumPresent = LiveBroadcastPresentInfo & {
  __typename?: "LiveBroadcastPremiumPresent";
  /** ID */
  id: Scalars["ID"]["output"];
  /** 配送フラグ */
  isDelivery: Scalars["Boolean"]["output"];
  /** プレゼント名 */
  name: Scalars["String"]["output"];
  /** ランダム抽選数 */
  randomCount?: Maybe<Scalars["Int"]["output"]>;
};

/** 生配信プレゼント */
export type LiveBroadcastPresent =
  | LiveBroadcastCoinPresent
  | LiveBroadcastPremiumPresent
  | LiveBroadcastRankingPresent;

/** 生配信プレゼントインターフェース */
export type LiveBroadcastPresentInfo = {
  /** ID */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** 配送フラグ */
  isDelivery: Scalars["Boolean"]["output"];
  /** プレゼント名 */
  name: Scalars["String"]["output"];
};

/** 生配信スタンププレゼント履歴オブジェクト */
export type LiveBroadcastPresentedStamp = {
  __typename?: "LiveBroadcastPresentedStamp";
  /** 表示名 */
  displayName: Scalars["String"]["output"];
  /** 再生時間(ミリ秒) */
  duration: Scalars["Int"]["output"];
  /** プロフィール画像URL */
  profileURL: Scalars["String"]["output"];
  /** スタンプ画像URL */
  stampImageURL: Scalars["String"]["output"];
  /** スタンプ名 */
  stampName: Scalars["String"]["output"];
};

/** 生配信料金ステータス */
export enum LiveBroadcastPriceStatus {
  /** 無料 */
  Free = "FREE",
  /** 途中まで無料 */
  PartiallyFree = "PARTIALLY_FREE",
  /** 有料 */
  Premium = "PREMIUM",
}

/** ランキング */
export type LiveBroadcastRank = {
  __typename?: "LiveBroadcastRank";
  /** 消費コイン */
  amount: Scalars["Int"]["output"];
  member: Member;
  /** 順位 */
  rank: Scalars["Int"]["output"];
};

/** ランキング条件プレゼントオブジェクト */
export type LiveBroadcastRankingPresent = LiveBroadcastPresentInfo & {
  __typename?: "LiveBroadcastRankingPresent";
  /** ID */
  id: Scalars["ID"]["output"];
  /** 配送フラグ */
  isDelivery: Scalars["Boolean"]["output"];
  /** プレゼント名 */
  name: Scalars["String"]["output"];
  /** 下位ランキング */
  rankingLower: Scalars["Int"]["output"];
  /** 上位ランキング */
  rankingUpper: Scalars["Int"]["output"];
};

/** 生配信用トークンオブジェクト */
export type LiveBroadcastToken = {
  __typename?: "LiveBroadcastToken";
  /** トークン */
  token: Scalars["String"]["output"];
  /** Agora ユーザーID */
  uid: Scalars["String"]["output"];
};

/** ロゴ表示位置 */
export enum LogoPosition {
  /** 真ん中寄せ */
  Center = "CENTER",
  /** 非表示 */
  Hidden = "HIDDEN",
  /** 左寄せ */
  Left = "LEFT",
  /** 右寄せ */
  Right = "RIGHT",
}

/** くじ-Node */
export type Lottery = Node & {
  __typename?: "Lottery";
  /** お知らせ */
  announcement?: Maybe<LotteryAnnouncement>;
  /** 利用可能範囲 */
  availability: LotteryContentAvailability;
  /** 本文 */
  body: Scalars["String"]["output"];
  /** 下部本文 */
  bottomBody: Scalars["String"]["output"];
  /** デジタルコンテンツダウンロード期限 */
  digitalContentDownloadDeadline?: Maybe<Scalars["Datetime"]["output"]>;
  /** 公開終了日時 */
  endAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** 発送目安 */
  estimatedShipping?: Maybe<Scalars["String"]["output"]>;
  /** 引換締切日時 */
  exchangeDeadline?: Maybe<Scalars["Datetime"]["output"]>;
  /** 引換開始日時 */
  exchangeStartAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** くじID */
  id: Scalars["ID"]["output"];
  /** 画像 */
  image?: Maybe<LotteryImage>;
  /**
   * デジタルコンテンツダウンロード可能期間フラグ
   *
   * デジタルコンテンツを獲得していなくても期間中であればTrueになる
   */
  isAvailableForDigitalContentDownload: Scalars["Boolean"]["output"];
  /** くじ抽選期間フラグ */
  isAvailableForDraw: Scalars["Boolean"]["output"];
  /** 引換受付可能フラグ */
  isExchangeable: Scalars["Boolean"]["output"];
  /** 名称 */
  name: Scalars["String"]["output"];
  /** 抽選残数 */
  remainingAmount: Scalars["Int"]["output"];
  /**
   * シーンLottie
   *
   * くじ単体取得以外では空で返します
   */
  sceneLottie?: Maybe<LotterySceneLottie>;
  /** 配送料 */
  shippingFee?: Maybe<Scalars["Int"]["output"]>;
  /** 公開開始日時 */
  startAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** 獲得済みデジタルコンテンツ数 */
  viewerCapturedDigitalContentCount?: Maybe<Scalars["Int"]["output"]>;
  /** 引換可能賞品数量 */
  viewerExchangeablePrizeQuantity?: Maybe<Scalars["Int"]["output"]>;
};

/** くじお知らせ-Node */
export type LotteryAnnouncement = Node & {
  __typename?: "LotteryAnnouncement";
  /** 本文 */
  body: Scalars["String"]["output"];
  /** くじお知らせID */
  id: Scalars["ID"]["output"];
  /** タイトル */
  title?: Maybe<Scalars["String"]["output"]>;
};

/** くじ-Connection */
export type LotteryConnection = {
  __typename?: "LotteryConnection";
  edges?: Maybe<Array<LotteryEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** くじコンテンツ利用可能範囲 */
export type LotteryContentAvailability = {
  __typename?: "LotteryContentAvailability";
  /** サブスクプランIDリスト */
  subscriptionPlanIds?: Maybe<Array<Scalars["ID"]["output"]>>;
  /** ユーザーグループ */
  userGroup: LotteryContentAvailabilityUserGroup;
  /** 閲覧者の適用可能フラグ */
  viewerSuitable: Scalars["Boolean"]["output"];
};

/** くじコンテンツ利用可能ユーザーグループ */
export enum LotteryContentAvailabilityUserGroup {
  /** 全員 */
  Everyone = "EVERYONE",
  /** 無料会員, 有料会員 */
  Members = "MEMBERS",
  /** 有料会員 */
  PaidMembers = "PAID_MEMBERS",
}

/** くじ抽選結果-Node */
export type LotteryDrawingResult = Node & {
  __typename?: "LotteryDrawingResult";
  /** 抽選日時 */
  drewAt: Scalars["Datetime"]["output"];
  /** 抽選結果ID */
  id: Scalars["ID"]["output"];
  /** くじID */
  lotteryId: Scalars["ID"]["output"];
  /** 賞品 */
  prize: LotteryPrize;
  /** 順序(N回目) */
  seq: Scalars["Int"]["output"];
};

/** くじ抽選結果-Connection */
export type LotteryDrawingResultConnection = {
  __typename?: "LotteryDrawingResultConnection";
  edges?: Maybe<Array<LotteryDrawingResultEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** くじ抽選結果-Edge */
export type LotteryDrawingResultEdge = Edge & {
  __typename?: "LotteryDrawingResultEdge";
  cursor: Scalars["String"]["output"];
  node?: Maybe<LotteryDrawingResult>;
};

/** くじ-Edge */
export type LotteryEdge = Edge & {
  __typename?: "LotteryEdge";
  cursor: Scalars["String"]["output"];
  node?: Maybe<Lottery>;
};

/** くじ賞品引換-Node */
export type LotteryExchange = Node & {
  __typename?: "LotteryExchange";
  /** 引換ID */
  id: Scalars["ID"]["output"];
  /** くじ */
  lottery: Lottery;
  /** Shop注文 */
  shopOrder: LotteryShopOrder;
};

/** くじ賞品引換-Connection */
export type LotteryExchangeConnection = {
  __typename?: "LotteryExchangeConnection";
  edges?: Maybe<Array<LotteryExchangeEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** くじ賞品引換-Edge */
export type LotteryExchangeEdge = Edge & {
  __typename?: "LotteryExchangeEdge";
  cursor: Scalars["String"]["output"];
  node?: Maybe<LotteryExchange>;
};

/** くじ画像 */
export type LotteryImage = {
  __typename?: "LotteryImage";
  /** URL */
  url: LotteryImageUrl;
};

/**
 * くじ画像URL
 *
 * サイズバリエーション(small, medium, largeなど)を増やせるようにオブジェクト構造にしている。
 */
export type LotteryImageUrl = {
  __typename?: "LotteryImageURL";
  /** デフォルト */
  default: Scalars["String"]["output"];
};

/** くじLottie */
export type LotteryLottie = {
  __typename?: "LotteryLottie";
  /** URL */
  url: Scalars["String"]["output"];
};

/** くじ賞品-Node */
export type LotteryPrize = Node & {
  __typename?: "LotteryPrize";
  /** 賞品ID */
  id: Scalars["ID"]["output"];
  /** デジタルフラグ */
  isDigital: Scalars["Boolean"]["output"];
  /** レアリティID */
  rarityId: Scalars["ID"]["output"];
  /** Shopバリエーション */
  shopVariant: LotteryShopVariant;
  /** Shopバリエーション画像 */
  shopVariantImage?: Maybe<ShopProductImage>;
  /** 獲得済み数量 */
  viewerCapturedQuantity?: Maybe<Scalars["Int"]["output"]>;
  /** 引換可能数量 */
  viewerExchangeableQuantity?: Maybe<Scalars["Int"]["output"]>;
};

/** くじ賞品-Connection */
export type LotteryPrizeConnection = {
  __typename?: "LotteryPrizeConnection";
  edges?: Maybe<Array<LotteryPrizeEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** くじデジタルコンテンツ取得-Input */
export type LotteryPrizeDigitalContentInput = {
  /** 賞品ID */
  prizeId: Scalars["ID"]["input"];
};

/** くじデジタルコンテンツ取得-Payload */
export type LotteryPrizeDigitalContentPayload = {
  __typename?: "LotteryPrizeDigitalContentPayload";
  /** MIMEタイプ */
  mimeType: Scalars["String"]["output"];
  /** 賞品ID */
  prizeId: Scalars["ID"]["output"];
  /** 署名済みクエリ */
  signedQuery: Scalars["String"]["output"];
  /** URL */
  url: Scalars["String"]["output"];
};

/** くじ賞品-Edge */
export type LotteryPrizeEdge = Edge & {
  __typename?: "LotteryPrizeEdge";
  cursor: Scalars["String"]["output"];
  node?: Maybe<LotteryPrize>;
};

/** くじレアリティ-Node */
export type LotteryRarity = Node & {
  __typename?: "LotteryRarity";
  /** レアリティID */
  id: Scalars["ID"]["output"];
  /** ラベル */
  label: Scalars["String"]["output"];
  /** 賞品数量 */
  prizeQuantity: Scalars["Int"]["output"];
  /** Shop製品 */
  shopProduct: LotteryShopProduct;
};

/** くじレアリティ-Connection */
export type LotteryRarityConnection = {
  __typename?: "LotteryRarityConnection";
  edges?: Maybe<Array<LotteryRarityEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** くじレアリティ-Edge */
export type LotteryRarityEdge = Edge & {
  __typename?: "LotteryRarityEdge";
  cursor: Scalars["String"]["output"];
  node?: Maybe<LotteryRarity>;
};

/** くじシーンLottie */
export type LotterySceneLottie = {
  __typename?: "LotterySceneLottie";
  /** 排出演出 */
  dispensing?: Maybe<LotteryLottie>;
  /** 抽選演出 */
  drawing?: Maybe<LotteryLottie>;
  /** 待機演出 */
  standby?: Maybe<LotteryLottie>;
};

/** くじ配送料支払い履歴 */
export type LotteryShippingPaymentHistory = {
  __typename?: "LotteryShippingPaymentHistory";
  /** 注文ID */
  id: Scalars["ID"]["output"];
  /** くじ */
  lottery: Lottery;
  /** 支払い日 */
  paidAt: Scalars["Datetime"]["output"];
  /** 合計配送料 */
  totalShippingFee: Scalars["Int"]["output"];
};

/** くじShop注文 */
export type LotteryShopOrder = {
  __typename?: "LotteryShopOrder";
  /** 注文ID */
  id: Scalars["ID"]["output"];
  /** アイテム数量 */
  itemQuantity: Scalars["Int"]["output"];
  /** オープンロジ出庫 */
  openLogiShipment?: Maybe<ShopOrderOpenLogiShipment>;
  /** 注文日時 */
  orderedAt: Scalars["Datetime"]["output"];
};

/** くじShop注文-Input */
export type LotteryShopOrderInput = {
  /** 配送ステータス */
  shippingStatus?: InputMaybe<ShopOrderShippingStatus>;
};

/** くじShop製品 */
export type LotteryShopProduct = {
  __typename?: "LotteryShopProduct";
  /** 説明文 */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Shop製品ID */
  id: Scalars["ID"]["output"];
  /** 名称 */
  name: Scalars["String"]["output"];
};

/** くじShopバリエーション */
export type LotteryShopVariant = {
  __typename?: "LotteryShopVariant";
  /** ShopバリエーションID */
  id: Scalars["ID"]["output"];
  /** 名称 */
  name: Scalars["String"]["output"];
};

/** 抽選券-Node */
export type LotteryTicket = Node & {
  __typename?: "LotteryTicket";
  /** 公開終了日時 */
  endAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** 抽選回数 */
  frequency: Scalars["Int"]["output"];
  /** 抽選券ID */
  id: Scalars["ID"]["output"];
  /** 名称 */
  name: Scalars["String"]["output"];
  /** 金額 */
  price: Scalars["Int"]["output"];
  /** 公開開始日時 */
  startAt?: Maybe<Scalars["Datetime"]["output"]>;
};

/** 抽選券-Connection */
export type LotteryTicketConnection = {
  __typename?: "LotteryTicketConnection";
  edges?: Maybe<Array<LotteryTicketEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** 抽選券-Edge */
export type LotteryTicketEdge = Edge & {
  __typename?: "LotteryTicketEdge";
  cursor: Scalars["String"]["output"];
  node?: Maybe<LotteryTicket>;
};

/** くじチケット購入履歴-Node */
export type LotteryTicketPurchaseHistory = Node & {
  __typename?: "LotteryTicketPurchaseHistory";
  /** 購入ID */
  id: Scalars["ID"]["output"];
  /** くじ */
  lottery: Lottery;
  /** 購入日時 */
  purchasedAt: Scalars["Datetime"]["output"];
  /** 抽選券 */
  ticket: LotteryTicket;
};

/** メインビジュアル */
export type MainVisual = {
  __typename?: "MainVisual";
  /** ファイルタイプ */
  fileType: MainVisualFileType;
  /** ファイルリスト */
  files: Array<MainVisualFile>;
  /** アスペクトフィットモード */
  isAspectFitMode: Scalars["Boolean"]["output"];
};

/** メインビジュアルファイル */
export type MainVisualFile = {
  __typename?: "MainVisualFile";
  /** ID */
  id: Scalars["ID"]["output"];
  /** PC用ファイル */
  pcFile?: Maybe<SharedFile>;
  /** タブレットSP用ファイル */
  tabletSpFile?: Maybe<SharedFile>;
};

/** メインビジュアルタイプ */
export enum MainVisualFileType {
  /** 画像 */
  Image = "IMAGE",
  /** 動画 */
  Movie = "MOVIE",
}

export type Member = {
  __typename?: "Member";
  displayName: Scalars["String"]["output"];
  /** 管理者フラグ */
  hasAdminRole: Scalars["Boolean"]["output"];
  hasPremiumRole: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  isSentMail: Scalars["Boolean"]["output"];
  /** 生配信消費コイン数 */
  liveBroadcastCoinConsumptionAmount: Scalars["Int"]["output"];
  membershipNumber?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated site.membershipCard.prefix と member.membershipNumber の結合で会員番号を表示 */
  number?: Maybe<Scalars["String"]["output"]>;
  profileURL?: Maybe<Scalars["String"]["output"]>;
  roleStatuses?: Maybe<Array<RoleStatus>>;
  site?: Maybe<Site>;
  subscriptions?: Maybe<Array<Maybe<UserSubscriptionByCardOrCarrier>>>;
};

export type MemberLiveBroadcastCoinConsumptionAmountArgs = {
  liveBroadcastID: Scalars["ID"]["input"];
};

/** メニュータイプ */
export enum MenuType {
  /** ブログ */
  Blog = "BLOG",
  /** 写真 */
  Gallery = "GALLERY",
  /** リンク */
  Link = "LINK",
  /** ログイン */
  Login = "LOGIN",
  /** 動画 */
  Movie = "MOVIE",
  /** 音楽 */
  Music = "MUSIC",
  /** マイページ */
  Mypage = "MYPAGE",
  /** ニュース */
  News = "NEWS",
  /** プロフィール */
  Profile = "PROFILE",
  /** スケジュール */
  Schedule = "SCHEDULE",
  /** 会員情報 */
  UserInfo = "USER_INFO",
  /** 会員登録 */
  UserRegister = "USER_REGISTER",
}

/** 月間コイン獲得消費履歴 */
export type MonthlyCoinHistories = {
  __typename?: "MonthlyCoinHistories";
  /** コイン獲得 */
  coinAcquisition?: Maybe<Array<SortableCoinHistory>>;
  /** コイン消費 */
  coinConsumption?: Maybe<Array<SortableCoinHistory>>;
  /** 対象月 */
  month: Scalars["Int"]["output"];
  /** 対象年 */
  year: Scalars["Int"]["output"];
};

/** 月支払い履歴 */
export type MonthlyPaymentHistories = {
  __typename?: "MonthlyPaymentHistories";
  /** コイン購入 */
  coinPurchase?: Maybe<Array<SortablePaymentHistory>>;
  /** くじ配送料支払い */
  lotteryShippingPayment?: Maybe<Array<SortablePaymentHistory>>;
  /** くじチケット購入 */
  lotteryTicketPurchase?: Maybe<Array<SortablePaymentHistory>>;
  /** 対象月 */
  month: Scalars["Int"]["output"];
  /** サブスク月額支払い */
  subscriptionPayment?: Maybe<Array<SortablePaymentHistory>>;
  /** 対象年 */
  year: Scalars["Int"]["output"];
};

export type Movie = Node & {
  __typename?: "Movie";
  /** アーカイブURL (ABR) */
  abrArchiveURL?: Maybe<Scalars["String"]["output"]>;
  /** アーカイブURL */
  archiveURL: Scalars["String"]["output"];
  /** 動画カテゴリ */
  category?: Maybe<MovieCategory>;
  /** 動画コメントリスト */
  comments: MovieCommentConnection;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** コメント可否フラグ */
  isCommentable: Scalars["Boolean"]["output"];
  /** 閲覧可能フラグ */
  isViewable: Scalars["Boolean"]["output"];
  /** 生配信詳細 */
  liveBroadcast?: Maybe<LiveBroadcast>;
  name: Scalars["String"]["output"];
  releaseDay: Scalars["Date"]["output"];
  /**
   * アーカイブ動画ファイル 署名付きCookie
   * @deprecated signedQueryを使用
   */
  signedCookie?: Maybe<SignedCookie>;
  /**
   * 署名済みクエリ
   *
   * m3u8の中身に署名付きクエリを付与するために,
   * 以下のAPIをコールしてm3u8ファイルを取得する
   *
   * `/hls/m3u8?sourceUrl={url}?{signedQuery}`
   */
  signedQuery: Scalars["String"]["output"];
  /** サムネイル */
  thumbnailFile?: Maybe<SharedFile>;
  /** @deprecated thumbnailFileの使用を推奨 */
  thumbnailURL: Scalars["String"]["output"];
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};

export type MovieCommentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MovieCommentOrderInput>;
};

export type MovieCategory = Node & {
  __typename?: "MovieCategory";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  slug: Scalars["String"]["output"];
};

export type MovieComment = Node & {
  __typename?: "MovieComment";
  commenter?: Maybe<Member>;
  /** コメント内容 */
  content: Scalars["String"]["output"];
  /** 作成日時 */
  createdAt: Scalars["Datetime"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
};

/** 動画コメントコネクションオブジェクト */
export type MovieCommentConnection = {
  __typename?: "MovieCommentConnection";
  /** エッジ */
  edges: Array<MovieCommentEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 合計コメント数 */
  totalCount: Scalars["Int"]["output"];
};

/** 動画コメントエッジオブジェクト */
export type MovieCommentEdge = Edge & {
  __typename?: "MovieCommentEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: MovieComment;
};

/** 動画コメントソート項目 */
export enum MovieCommentOrderField {
  /** 作成日時 */
  CreatedAt = "CREATED_AT",
}

/** 動画コメントソート条件入力オブジェクト */
export type MovieCommentOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: MovieCommentOrderField;
};

export type MovieConnection = {
  __typename?: "MovieConnection";
  /** エッジ */
  edges: Array<MovieEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars["Int"]["output"];
};

export type MovieEdge = Edge & {
  __typename?: "MovieEdge";
  cursor: Scalars["String"]["output"];
  node: Movie;
};

export enum MovieOrderField {
  CreatedAt = "CREATED_AT",
  StartAt = "START_AT",
}

export type MovieOrderInput = {
  direction: OrderDirection;
  field: MovieOrderField;
};

/** 音楽アルバム-Node */
export type MusicAlbum = Node & {
  __typename?: "MusicAlbum";
  /** アーティスト名 */
  artistName?: Maybe<Scalars["String"]["output"]>;
  /** アートワーク */
  artwork?: Maybe<MusicArtwork>;
  /** 利用可能範囲 */
  availability: MusicContentAvailability;
  /** コピーライト */
  copyright?: Maybe<Scalars["String"]["output"]>;
  /** アルバムID */
  id: Scalars["ID"]["output"];
  /** シングルフラグ */
  isSingle: Scalars["Boolean"]["output"];
  /** アルバム名 */
  name: Scalars["String"]["output"];
  /** リリース日 */
  releaseDate: Scalars["Date"]["output"];
  /** 公開開始日時 */
  startAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** トラック数 */
  trackCount: Scalars["Int"]["output"];
  /**
   * トラックリスト
   *
   * アルバム単体取得以外では空で返します
   */
  tracks?: Maybe<MusicTrackConnection>;
};

/** 音楽アルバム-Connection */
export type MusicAlbumConnection = {
  __typename?: "MusicAlbumConnection";
  edges?: Maybe<Array<MusicAlbumEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** 音楽アルバム-Edge */
export type MusicAlbumEdge = Edge & {
  __typename?: "MusicAlbumEdge";
  cursor: Scalars["String"]["output"];
  node?: Maybe<MusicAlbum>;
};

/** 音楽アートワーク */
export type MusicArtwork = {
  __typename?: "MusicArtwork";
  /** プリセットURL */
  presetUrl?: Maybe<MusicArtworkPresetUrl>;
  /**
   * URL
   * @deprecated Use presetUrl instead.
   */
  url: MusicArtworkUrl;
};

/** 音楽アートワークプリセットURL */
export type MusicArtworkPresetUrl = {
  __typename?: "MusicArtworkPresetUrl";
  /** Max 1920px */
  large: Scalars["String"]["output"];
  /** Max 768px */
  medium: Scalars["String"]["output"];
  /** オリジナル */
  original: Scalars["String"]["output"];
  /** Max 480px */
  small: Scalars["String"]["output"];
  /** Max 150px */
  thumbnail: Scalars["String"]["output"];
  /** Max 2048px */
  xLarge: Scalars["String"]["output"];
};

/**
 * 音楽アートワークURL
 *
 * サイズバリエーション(small, medium, largeなど)を増やせるようにオブジェクト構造にしている。
 */
export type MusicArtworkUrl = {
  __typename?: "MusicArtworkURL";
  /** デフォルト */
  default: Scalars["String"]["output"];
};

/** 音楽コンテンツ利用可能範囲 */
export type MusicContentAvailability = {
  __typename?: "MusicContentAvailability";
  /** サブスクプランIDリスト */
  subscriptionPlanIds?: Maybe<Array<Scalars["ID"]["output"]>>;
  /** ユーザーグループ */
  userGroup: MusicContentAvailabilityUserGroup;
  /** 閲覧者の適用可能フラグ */
  viewerSuitable: Scalars["Boolean"]["output"];
};

/** 音楽コンテンツ利用可能ユーザーグループ */
export enum MusicContentAvailabilityUserGroup {
  /** 全員 */
  Everyone = "EVERYONE",
  /** 無料会員, 有料会員 */
  Members = "MEMBERS",
  /** 有料会員 */
  PaidMembers = "PAID_MEMBERS",
}

/** 音楽再生イベント-Input */
export type MusicPlayEventInput = {
  /** プレイリストID */
  playlistId?: InputMaybe<Scalars["ID"]["input"]>;
  /** トラックID */
  trackId: Scalars["ID"]["input"];
};

/** 音楽再生イベント-Payload */
export type MusicPlayEventPayload = {
  __typename?: "MusicPlayEventPayload";
  result: Scalars["Boolean"]["output"];
};

/** 音楽プレイバック-Input */
export type MusicPlaybackInput = {
  /** トラックID */
  trackId: Scalars["ID"]["input"];
};

/**
 * 音楽プレイバック-Payload
 *
 * m3u8の中身に署名付きクエリを付与するために,
 * 以下のAPIをコールしてm3u8ファイルを取得する
 *
 * `/hls/m3u8?sourceUrl={url}?{signedQuery}`
 */
export type MusicPlaybackPayload = {
  __typename?: "MusicPlaybackPayload";
  /** 署名済みクエリ */
  signedQuery: Scalars["String"]["output"];
  /** トラックID */
  trackId: Scalars["ID"]["output"];
  /** URL */
  url: Scalars["String"]["output"];
};

/** 音楽プレイリスト-Node */
export type MusicPlaylist = Node & {
  __typename?: "MusicPlaylist";
  /** アートワーク */
  artwork?: Maybe<MusicArtwork>;
  /** 利用可能範囲 */
  availability: MusicContentAvailability;
  /** 説明 */
  description?: Maybe<Scalars["String"]["output"]>;
  /** プレイリストID */
  id: Scalars["ID"]["output"];
  /** プレイリスト名 */
  name: Scalars["String"]["output"];
  /** リリース日 */
  releaseDate: Scalars["Date"]["output"];
  /** 公開開始日時 */
  startAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** トラック数 */
  trackCount: Scalars["Int"]["output"];
  /**
   * トラックリスト
   *
   * プレイリスト単体取得以外では空で返します
   */
  tracks?: Maybe<MusicTrackConnection>;
};

/** 音楽プレイリスト-Connection */
export type MusicPlaylistConnection = {
  __typename?: "MusicPlaylistConnection";
  edges?: Maybe<Array<MusicPlaylistEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** 音楽プレイリスト-Edge */
export type MusicPlaylistEdge = Edge & {
  __typename?: "MusicPlaylistEdge";
  cursor: Scalars["String"]["output"];
  node?: Maybe<MusicPlaylist>;
};

/** 音楽トラック-Node */
export type MusicTrack = Node & {
  __typename?: "MusicTrack";
  /** アルバムID */
  albumId: Scalars["ID"]["output"];
  /** アーティスト名 */
  artistName?: Maybe<Scalars["String"]["output"]>;
  /** アートワーク */
  artwork?: Maybe<MusicArtwork>;
  /** 利用可能範囲 */
  availability: MusicContentAvailability;
  /** コピーライト */
  copyright?: Maybe<Scalars["String"]["output"]>;
  /** 再生時間(ms) */
  durationMS?: Maybe<Scalars["Int"]["output"]>;
  /** トラックID */
  id: Scalars["ID"]["output"];
  /** 歌詞 */
  lyrics?: Maybe<Scalars["String"]["output"]>;
  /** トラック名 */
  name: Scalars["String"]["output"];
  /** 公開開始日時 */
  startAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** トラック番号 */
  trackNumber: Scalars["Int"]["output"];
};

/** 音楽トラック-Connection */
export type MusicTrackConnection = {
  __typename?: "MusicTrackConnection";
  edges?: Maybe<Array<MusicTrackEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** 音楽トラック-Edge */
export type MusicTrackEdge = Edge & {
  __typename?: "MusicTrackEdge";
  cursor: Scalars["String"]["output"];
  node?: Maybe<MusicTrack>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** コイン購入 */
  acquireCoin: CoinAcquisitionHistory;
  /**
   * 既存ユーザーにプロパイダーのAuthプロパイダ追加
   *    firebaseとのリンクはフロントエンドで行い、こちらのmutationではDBの保存のみ行う
   *    ※password以外の追加で利用する
   */
  addAuthProviderSNS: Scalars["Boolean"]["output"];
  /** ブログ記事コメント作成 */
  addBlogPostComment: BlogPostComment;
  addCreditCard?: Maybe<CreditCard>;
  /** ギャラリーコメント作成 */
  addGalleryComment: GalleryComment;
  /** 生配信チャットメッセージ送信 */
  addMessage: LiveBroadcastMessage;
  /** 動画コメント追加 */
  addMovieComment: MovieComment;
  /** 生配信コラボ申請キャンセル */
  cancelLiveBroadcastCollaborationRequest?: Maybe<LiveBroadcastCollaborationRequestStatus>;
  /** サブスクキャンセル */
  cancelSubscription?: Maybe<UserSubscriptionByCardOrCarrier>;
  /** サブスク決済方法変更(カード) */
  changeSubscriptionPaymentMethodToCard?: Maybe<UserSubscriptionByCard>;
  /** サブスク決済方法変更(キャリア) */
  changeSubscriptionPaymentMethodToCarrier?: Maybe<CarrierAuth>;
  createMember?: Maybe<Member>;
  /** RTMトークン作成 */
  createRTMToken?: Maybe<LiveBroadcastToken>;
  /** 視聴者用のトークン作成 */
  createSubscriberRTCToken?: Maybe<LiveBroadcastToken>;
  /** Emailでユーザー登録 */
  createUserByEmail?: Maybe<User>;
  /** SNSでユーザー登録 */
  createUserBySNS?: Maybe<User>;
  /** ブログ記事コメント削除 */
  deleteBlogPostComment: BlogPostComment;
  /** ギャラリーコメント削除 */
  deleteGalleryComment: GalleryComment;
  deleteMember?: Maybe<Member>;
  /** 動画コメント削除 */
  deleteMovieComment: MovieComment;
  /**
   * くじ引き
   *
   * レスポンスは抽選券購入IDを返す
   */
  drawLottery?: Maybe<DrawLotteryPayload>;
  /**
   * 賞品引換え
   *
   * レスポンスは引換IDを返す
   * 将来的には、コインとの複合決済ができたらいい
   */
  exchangeLotteryPrizes?: Maybe<ExchangeLotteryPrizesPayload>;
  /** サイト問い合わせ作成 */
  inquire: Scalars["Boolean"]["output"];
  /** オフィシャル問い合わせ作成 */
  inquireOfficial: Scalars["Boolean"]["output"];
  /** 既存ユーザーにEmailPasswordのAuthプロパイダ追加とFirebaseへリンク */
  linkAuthProviderEmail: Scalars["Boolean"]["output"];
  /** くじデジタルコンテンツ取得 */
  lotteryPrizeDigitalContent?: Maybe<LotteryPrizeDigitalContentPayload>;
  /** 音楽再生イベント送信 */
  musicPlayEvent?: Maybe<MusicPlayEventPayload>;
  /** 音楽プレイバックを取得 */
  musicPlayback?: Maybe<MusicPlaybackPayload>;
  /** スタンプ購入 */
  purchaseStamp: Stamp;
  /** ギフトコインクーポン適用 */
  redeemGiftCoinCoupon?: Maybe<RedeemGiftCoinCouponPayload>;
  /** サブスククーポン適用 */
  redeemSubscriptionCoupon?: Maybe<RedeemSubscriptionCouponPayload>;
  /** サブスク登録(カード) */
  registerSubscriptionByCard?: Maybe<UserSubscriptionByCard>;
  /** サブスク登録(キャリア) */
  registerSubscriptionByCarrier?: Maybe<CarrierAuth>;
  removeCreditCard?: Maybe<CreditCard>;
  /** 認証メール再送信 */
  resendVerifyMail?: Maybe<User>;
  /** 生配信コラボ申請送信 */
  submitLiveBroadcastCollaborationRequest?: Maybe<LiveBroadcastCollaborationRequestStatus>;
  /** 連携を削除 */
  unlinkAuthProvider: Scalars["Boolean"]["output"];
  updateDisplayName?: Maybe<Member>;
  /**
   * Emailを更新
   * @deprecated updateUserを使用
   */
  updateEmail?: Maybe<User>;
  /**
   * FamIDを更新
   * @deprecated updateUserを使用
   */
  updateFamId?: Maybe<User>;
  updateIsSentMail?: Maybe<Member>;
  /** パスワード更新 */
  updatePassword?: Maybe<User>;
  updateProfileImage?: Maybe<Member>;
  /** ユーザー更新 */
  updateUser?: Maybe<User>;
  /** ユーザー更新とメンバー作成 */
  updateUserAndCreateMember?: Maybe<User>;
  updateUserDetail?: Maybe<UserDetail>;
  /** 認証メール送信 */
  verifyEmail?: Maybe<User>;
  /** ギャラリー閲覧 */
  viewGallery: Gallery;
  /** 生配信閲覧 */
  viewLiveBroadcast: LiveBroadcast;
  /** 動画閲覧 */
  viewMovie: Movie;
};

export type MutationAcquireCoinArgs = {
  input: AcquireCoinInput;
};

export type MutationAddAuthProviderSnsArgs = {
  input: AddAuthProviderSnsInput;
};

export type MutationAddBlogPostCommentArgs = {
  input: AddBlogPostCommentInput;
};

export type MutationAddCreditCardArgs = {
  input: AddCreditCardInput;
};

export type MutationAddGalleryCommentArgs = {
  input: AddGalleryCommentInput;
};

export type MutationAddMessageArgs = {
  input: AddMessageInput;
};

export type MutationAddMovieCommentArgs = {
  input: AddMovieCommentInput;
};

export type MutationCancelLiveBroadcastCollaborationRequestArgs = {
  broadcastID: Scalars["ID"]["input"];
};

export type MutationCancelSubscriptionArgs = {
  input: CancelSubscriptionInput;
};

export type MutationChangeSubscriptionPaymentMethodToCardArgs = {
  input: ChangeSubscriptionPaymentMethodToCardInput;
};

export type MutationChangeSubscriptionPaymentMethodToCarrierArgs = {
  input: ChangeSubscriptionPaymentMethodToCarrierInput;
};

export type MutationCreateMemberArgs = {
  input: CreateMemberInput;
};

export type MutationCreateRtmTokenArgs = {
  uid: Scalars["String"]["input"];
};

export type MutationCreateSubscriberRtcTokenArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateUserByEmailArgs = {
  input: CreateUserByEmailInput;
};

export type MutationCreateUserBySnsArgs = {
  input: CreateUserBySnsInput;
};

export type MutationDeleteBlogPostCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteGalleryCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteMemberArgs = {
  input?: InputMaybe<DeleteMemberInput>;
};

export type MutationDeleteMovieCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDrawLotteryArgs = {
  input: DrawLotteryInput;
};

export type MutationExchangeLotteryPrizesArgs = {
  input: ExchangeLotteryPrizesInput;
};

export type MutationInquireArgs = {
  input: InquireInput;
};

export type MutationInquireOfficialArgs = {
  input: InquireOfficialInput;
};

export type MutationLinkAuthProviderEmailArgs = {
  input: LinkAuthProviderEmailInput;
};

export type MutationLotteryPrizeDigitalContentArgs = {
  input: LotteryPrizeDigitalContentInput;
};

export type MutationMusicPlayEventArgs = {
  input: MusicPlayEventInput;
};

export type MutationMusicPlaybackArgs = {
  input: MusicPlaybackInput;
};

export type MutationPurchaseStampArgs = {
  input: PurchaseStampInput;
};

export type MutationRedeemGiftCoinCouponArgs = {
  input: RedeemGiftCoinCouponInput;
};

export type MutationRedeemSubscriptionCouponArgs = {
  input: RedeemSubscriptionCouponInput;
};

export type MutationRegisterSubscriptionByCardArgs = {
  input: RegisterSubscriptionByCardInput;
};

export type MutationRegisterSubscriptionByCarrierArgs = {
  input: RegisterSubscriptionByCarrierInput;
};

export type MutationRemoveCreditCardArgs = {
  input: RemoveCreditCardInput;
};

export type MutationResendVerifyMailArgs = {
  input: ResendVerifyMail;
};

export type MutationSubmitLiveBroadcastCollaborationRequestArgs = {
  broadcastID: Scalars["ID"]["input"];
};

export type MutationUnlinkAuthProviderArgs = {
  input: UnlinkAuthProviderInput;
};

export type MutationUpdateDisplayNameArgs = {
  input: UpdateDisplayNameInput;
};

export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};

export type MutationUpdateFamIdArgs = {
  input: UpdateFamIdInput;
};

export type MutationUpdateIsSentMailArgs = {
  input: UpdateIsSentMailInput;
};

export type MutationUpdatePasswordArgs = {
  password: Scalars["String"]["input"];
};

export type MutationUpdateProfileImageArgs = {
  input: UpdateProfileImageInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationUpdateUserAndCreateMemberArgs = {
  memberInput: CreateMemberInput;
  userInput: UpdateUserInput;
};

export type MutationUpdateUserDetailArgs = {
  input: UpdateUserDetailInput;
};

export type MutationVerifyEmailArgs = {
  input: VefifyEmailInput;
};

export type MutationViewGalleryArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationViewLiveBroadcastArgs = {
  broadcastID: Scalars["ID"]["input"];
};

export type MutationViewMovieArgs = {
  id: Scalars["ID"]["input"];
};

export type News = Node & {
  __typename?: "News";
  /** 認証フォーム情報 */
  authForm?: Maybe<NewsAuthForm>;
  body?: Maybe<Scalars["String"]["output"]>;
  /** カテゴリ */
  category?: Maybe<NewsCategory>;
  id: Scalars["ID"]["output"];
  /** 無料フラグ */
  isFree: Scalars["Boolean"]["output"];
  /** 閲覧可能フラグ */
  isViewable: Scalars["Boolean"]["output"];
  releaseDay: Scalars["Date"]["output"];
  subject: Scalars["String"]["output"];
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};

/** お知らせ認証フォーム情報 */
export type NewsAuthForm = {
  __typename?: "NewsAuthForm";
  /** スマホ用遷移先URL */
  spURL?: Maybe<Scalars["String"]["output"]>;
  /** 隠しタグ */
  tags?: Maybe<Array<NewsAuthFormTag>>;
  /** 遷移先URL */
  url: Scalars["String"]["output"];
};

/** お知らせ認証フォームタグ */
export type NewsAuthFormTag = {
  __typename?: "NewsAuthFormTag";
  /** タグ名 */
  name: Scalars["String"]["output"];
  /** タグ値 */
  value: Scalars["String"]["output"];
};

/** お知らせカテゴリ */
export type NewsCategory = {
  __typename?: "NewsCategory";
  /** ID */
  id: Scalars["ID"]["output"];
  /** カテゴリ名 */
  name: Scalars["String"]["output"];
  /** スラッグ */
  slug: Scalars["String"]["output"];
};

export type NewsConnection = {
  __typename?: "NewsConnection";
  /** エッジ */
  edges: Array<NewsEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars["Int"]["output"];
};

export type NewsEdge = Edge & {
  __typename?: "NewsEdge";
  cursor: Scalars["String"]["output"];
  node: News;
};

export enum NewsOrderField {
  CreatedAt = "CREATED_AT",
  StartAt = "START_AT",
}

export type NewsOrderInput = {
  direction: OrderDirection;
  field: NewsOrderField;
};

export type NextPaymentMethod = CardPayment | CarrierPayment;

export type Node = {
  id: Scalars["ID"]["output"];
};

/** 会員番号表示位置 */
export enum NumberPosition {
  /** 真ん中寄せ */
  Center = "CENTER",
  /** 左寄せ */
  Left = "LEFT",
  /** 右寄せ */
  Right = "RIGHT",
}

export enum OrderDirection {
  Asc = "ASC",
  Desc = "DESC",
}

/** OverwriteContent型は各サイトで上書き可能なコンテンツを表現します。 */
export type OverwriteContent = {
  __typename?: "OverwriteContent";
  /**
   * コンテンツ
   * HTMLなどのコンテンツがこのフィールドで返却されます。
   */
  content: Scalars["String"]["output"];
  /** コンテンツのキー */
  key: Scalars["String"]["output"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** 有料コインステータスオブジェクト */
export type PaidCoinStatus = Node & {
  __typename?: "PaidCoinStatus";
  /** コイン残枚数 */
  balance: Scalars["Int"]["output"];
  /** 有効期限 */
  expireAt: Scalars["Datetime"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
};

/** 支払いカード情報 */
export type PaymentCard = {
  __typename?: "PaymentCard";
  /** カードID */
  cardId: Scalars["ID"]["output"];
};

/** 支払いカード情報-Input */
export type PaymentCardInput = {
  /** カードID */
  cardId: Scalars["ID"]["input"];
};

export enum PaymentGroup {
  /** カード */
  Card = "CARD",
  /** キャリア */
  Carrier = "CARRIER",
}

/** 支払い履歴 */
export type PaymentHistory =
  | CoinPurchaseHistory
  | LotteryShippingPaymentHistory
  | LotteryTicketPurchaseHistory
  | SubscriptionPaymentHistory;

/** 支払履歴コネクションオブジェクト */
export type PaymentHistoryConnection = {
  __typename?: "PaymentHistoryConnection";
  /** エッジ */
  edges: Array<PaymentHistoryEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
};

/** 支払履歴 */
export type PaymentHistoryEdge =
  | CoinAcquisitionHistoryEdge
  | SubscriptionPaymentHistoryEdge;

/** 支払履歴ソート条件フィールド */
export enum PaymentHistoryOrderField {
  /** 支払履歴作成日時 */
  CreatedAt = "CREATED_AT",
}

/** 支払履歴ソート条件入力オブジェクト */
export type PaymentHistoryOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: PaymentHistoryOrderField;
};

export type PaymentMethod = {
  paymentAt: Scalars["Datetime"]["output"];
};

export type PaymentSchedule = {
  __typename?: "PaymentSchedule";
  endDay?: Maybe<Scalars["Date"]["output"]>;
  firstStartDay: Scalars["Date"]["output"];
  lastStartDay: Scalars["Date"]["output"];
};

/** スタンプ購入入力オブジェクト */
export type PurchaseStampInput = {
  /** 生配信ID */
  liveBroadcastId: Scalars["ID"]["input"];
  /** スタンプID */
  stampId: Scalars["ID"]["input"];
};

export type Query = {
  __typename?: "Query";
  /** ブログ詳細スラッグ取得 */
  blog?: Maybe<Blog>;
  /** 記事詳細取得 */
  blogPost?: Maybe<BlogPost>;
  /** 獲得したデジタルコンテンツくじ一覧取得 */
  capturedDigitalContentLotteries: LotteryConnection;
  coinProducts?: Maybe<Array<CoinProduct>>;
  /** ギフトコインアクション取得 */
  couponGiftCoinActionByPromotionCode?: Maybe<CouponGiftCoinAction>;
  /** クーポンプロモーション取得 */
  couponPromotionByPromotionCode?: Maybe<CouponPromotion>;
  /** クーポンサブスクリプションアクション取得 */
  couponSubscriptionActionByPromotionCode?: Maybe<CouponSubscriptionAction>;
  /** 引換可能くじ一覧取得 */
  exchangeableLotteries: LotteryConnection;
  /** Get a gallery by id */
  gallery?: Maybe<Gallery>;
  /** 写真管理スラッグ取得 */
  galleryGroup?: Maybe<GalleryGroup>;
  inquiryTypes: Array<InquiryType>;
  /** 生配信詳細 */
  liveBroadcast: LiveBroadcast;
  /** くじリスト取得 */
  lotteries: LotteryConnection;
  /** くじを取得 */
  lottery?: Maybe<Lottery>;
  /** くじ抽選結果リスト取得 */
  lotteryDrawingResults?: Maybe<LotteryDrawingResultConnection>;
  /** くじ引換を取得 */
  lotteryExchange?: Maybe<LotteryExchange>;
  /** くじ引換リスト取得 */
  lotteryExchanges?: Maybe<LotteryExchangeConnection>;
  /** くじ賞品を取得 */
  lotteryPrize?: Maybe<LotteryPrize>;
  /** くじ賞品一覧取得 */
  lotteryPrizes?: Maybe<LotteryPrizeConnection>;
  /** くじレアリティ一覧取得 */
  lotteryRarities?: Maybe<LotteryRarityConnection>;
  /** くじレアリティを取得 */
  lotteryRarity?: Maybe<LotteryRarity>;
  /** 抽選券を取得 */
  lotteryTicket?: Maybe<LotteryTicket>;
  /** 抽選券一覧取得 */
  lotteryTickets?: Maybe<LotteryTicketConnection>;
  /** サイト会員情報 */
  member: Member;
  /** 月間コイン獲得消費履歴取得 */
  monthlyCoinHistories: MonthlyCoinHistories;
  /** 月支払い履歴取得 */
  monthlyPaymentHistories: MonthlyPaymentHistories;
  /** Get a movie by id */
  movie?: Maybe<Movie>;
  /** 音楽アルバムを取得 */
  musicAlbum?: Maybe<MusicAlbum>;
  /** 音楽アルバムリスト取得 */
  musicAlbums: MusicAlbumConnection;
  /** 音楽プレイリストを取得 */
  musicPlaylist?: Maybe<MusicPlaylist>;
  /** 音楽プレイリストリスト取得 */
  musicPlaylists: MusicPlaylistConnection;
  /** 音楽トラックを取得 */
  musicTrack?: Maybe<MusicTrack>;
  /** Get news by id */
  news?: Maybe<News>;
  /** スケジュール詳細取得 */
  schedule: Schedule;
  /** スケジュールカテゴリ */
  scheduleCategories: Array<ScheduleCategory>;
  /**
   * スケジュール日別リスト取得
   * 日付ごとの配列で返却する
   */
  scheduleDateGroupList?: Maybe<Array<ScheduleDateGroup>>;
  /** スケジュールリスト取得 */
  scheduleList: ScheduleConnection;
  /** スクリーンバナーリスト取得 */
  screenBanners?: Maybe<Array<Banner>>;
  /** Shop注文情報を取得 */
  shopOrder?: Maybe<ShopOrder>;
  /** get site by domain(ex. https://www.fam.com/{domain}, https://www.{domain}) */
  site?: Maybe<Site>;
  /** スタンプ詳細取得 */
  stamp: Stamp;
  /** サブスク解約理由 */
  subscriptionCancelReasons: Array<SubscriptionCancelReason>;
  /** Get user by access token */
  viewer?: Maybe<User>;
};

export type QueryBlogArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryBlogPostArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCapturedDigitalContentLotteriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCouponGiftCoinActionByPromotionCodeArgs = {
  promotionCode: Scalars["String"]["input"];
};

export type QueryCouponPromotionByPromotionCodeArgs = {
  promotionCode: Scalars["String"]["input"];
};

export type QueryCouponSubscriptionActionByPromotionCodeArgs = {
  promotionCode: Scalars["String"]["input"];
  subscriptionPlanId: Scalars["ID"]["input"];
};

export type QueryExchangeableLotteriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGalleryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGalleryGroupArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryLiveBroadcastArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLotteriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLotteryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLotteryDrawingResultsArgs = {
  ticketPurchaseId: Scalars["ID"]["input"];
};

export type QueryLotteryExchangeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLotteryExchangesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  shopOrder: LotteryShopOrderInput;
};

export type QueryLotteryPrizeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLotteryPrizesArgs = {
  lotteryId: Scalars["ID"]["input"];
  rarityId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryLotteryRaritiesArgs = {
  lotteryId: Scalars["ID"]["input"];
};

export type QueryLotteryRarityArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLotteryTicketArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLotteryTicketsArgs = {
  lotteryId: Scalars["ID"]["input"];
};

export type QueryMonthlyCoinHistoriesArgs = {
  month: Scalars["Int"]["input"];
  year: Scalars["Int"]["input"];
};

export type QueryMonthlyPaymentHistoriesArgs = {
  month: Scalars["Int"]["input"];
  year: Scalars["Int"]["input"];
};

export type QueryMovieArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryMusicAlbumArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryMusicAlbumsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  albumType?: InputMaybe<AlbumType>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryMusicPlaylistArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryMusicPlaylistsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryMusicTrackArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryNewsArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryScheduleArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryScheduleDateGroupListArgs = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  yearMonth: Scalars["String"]["input"];
};

export type QueryScheduleListArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ScheduleOrderInput>;
  yearMonth?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryScreenBannersArgs = {
  screenKeyPrefix: Scalars["String"]["input"];
};

export type QueryShopOrderArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryStampArgs = {
  id: Scalars["ID"]["input"];
};

/** ギフトコインクーポン適用-Input */
export type RedeemGiftCoinCouponInput = {
  /** プロモーションコード */
  promotionCode: Scalars["String"]["input"];
};

/** ギフトコインクーポン適用-Payload */
export type RedeemGiftCoinCouponPayload = {
  __typename?: "RedeemGiftCoinCouponPayload";
  result: Scalars["Boolean"]["output"];
};

/** サブスククーポン適用-Input */
export type RedeemSubscriptionCouponInput = {
  /** プロモーションコード */
  promotionCode: Scalars["String"]["input"];
  /** サブスクID */
  subscriptionId: Scalars["ID"]["input"];
};

/** サブスククーポン適用-Payload */
export type RedeemSubscriptionCouponPayload = {
  __typename?: "RedeemSubscriptionCouponPayload";
  result: Scalars["Boolean"]["output"];
};

export type RegisterSubscriptionByCardInput = {
  /** クレジットカードID */
  cardId: Scalars["ID"]["input"];
  /** サブスクプランID */
  planId: Scalars["ID"]["input"];
  /** プロモーションコード */
  promotionCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterSubscriptionByCarrierInput = {
  carrierCompany: CarrierCompany;
  /** 失敗リダイレクトパス */
  failurePath?: InputMaybe<Scalars["String"]["input"]>;
  planId: Scalars["ID"]["input"];
  /** 成功リダイレクトパス */
  successPath?: InputMaybe<Scalars["String"]["input"]>;
};

export type RemoveCreditCardInput = {
  id: Scalars["ID"]["input"];
};

export type ResendVerifyMail = {
  verifyURL: Scalars["String"]["input"];
};

export enum RoleName {
  Free = "FREE",
  Premium = "PREMIUM",
}

export type RoleStatus = {
  __typename?: "RoleStatus";
  expireAt?: Maybe<Scalars["Datetime"]["output"]>;
  name: RoleName;
};

/** スケジュールオブジェクト */
export type Schedule = Node & {
  __typename?: "Schedule";
  /** 本文 */
  body: Scalars["String"]["output"];
  /** カテゴリ */
  category?: Maybe<ScheduleCategory>;
  /** 作成日時 */
  createdAt: Scalars["Datetime"]["output"];
  /** 日付 */
  date: Scalars["Datetime"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** 閲覧可能フラグ */
  isViewable: Scalars["Boolean"]["output"];
  /** 公開開始日時 */
  startAt: Scalars["Datetime"]["output"];
  /** 見出し */
  subject: Scalars["String"]["output"];
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};

/** スケジュールカテゴリ */
export type ScheduleCategory = {
  __typename?: "ScheduleCategory";
  /** ID */
  id: Scalars["ID"]["output"];
  /** カテゴリ名 */
  name: Scalars["String"]["output"];
  /** スラッグ */
  slug: Scalars["String"]["output"];
};

/** スケジュールコネクションオブジェクト */
export type ScheduleConnection = {
  __typename?: "ScheduleConnection";
  /** エッジ */
  edges: Array<ScheduleEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars["Int"]["output"];
};

export type ScheduleDateGroup = {
  __typename?: "ScheduleDateGroup";
  date: Scalars["Datetime"]["output"];
  schedules?: Maybe<Array<Schedule>>;
};

/** スケジュールエッジオブジェクト */
export type ScheduleEdge = Edge & {
  __typename?: "ScheduleEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: Schedule;
};

/** スケジュールソート条件フィールド */
export enum ScheduleOrderField {
  /** 日付 */
  Date = "DATE",
}

/** スケジュールソート条件入力オブジェクト */
export type ScheduleOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: ScheduleOrderField;
};

export type SharedFile = Node & {
  __typename?: "SharedFile";
  /** 代替テキスト */
  alternativeContent: Scalars["String"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** ファイル名 */
  name: Scalars["String"]["output"];
  /** アップロード日時 */
  uploadedAt: Scalars["Datetime"]["output"];
  /** URL */
  url: Scalars["String"]["output"];
};

/**
 * Shop画像URL
 *
 * サイズバリエーション(small, medium, largeなど)を増やせるようにオブジェクト構造にしている。
 */
export type ShopImageUrl = {
  __typename?: "ShopImageURL";
  /** デフォルト */
  default: Scalars["String"]["output"];
};

/** Shop注文 */
export type ShopOrder = {
  __typename?: "ShopOrder";
  /** 注文ID */
  id: Scalars["ID"]["output"];
  /** アイテムリスト */
  items: Array<ShopOrderItem>;
  /** オープンロジ出庫 */
  openLogiShipment?: Maybe<ShopOrderOpenLogiShipment>;
  /** 注文日時 */
  orderedAt: Scalars["Datetime"]["output"];
  /** 支払い情報 */
  payment?: Maybe<ShopOrderPayment>;
  /** 配送情報 */
  shipping?: Maybe<ShopOrderShipping>;
  /** 小計金額 */
  subtotalPrice: Scalars["Int"]["output"];
  /** 合計金額 */
  totalPrice: Scalars["Int"]["output"];
  /** 合計配送料 */
  totalShippingFee: Scalars["Int"]["output"];
};

/** Shop注文アイテム */
export type ShopOrderItem = {
  __typename?: "ShopOrderItem";
  /** 注文アイテムID */
  id: Scalars["ID"]["output"];
  /** 製品 */
  product: ShopOrderProduct;
  /** 数量 */
  quantity: Scalars["Int"]["output"];
  /** 製品規格 */
  variant: ShopOrderVariant;
};

/** Shop注文オープンロジ出庫 */
export type ShopOrderOpenLogiShipment = {
  __typename?: "ShopOrderOpenLogiShipment";
  /** 発送予定日 */
  assignedShippingDate?: Maybe<Scalars["Date"]["output"]>;
  /** 配送会社 */
  deliveryCarrier?: Maybe<ShopOrderOpenLogiShipmentDeliveryCarrier>;
  /** 発送日時 */
  shippedAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** 伝票番号（追跡番号）略式 */
  trackingCode?: Maybe<Scalars["String"]["output"]>;
  /** 配送状況取得URL */
  url?: Maybe<Scalars["String"]["output"]>;
};

export enum ShopOrderOpenLogiShipmentDeliveryCarrier {
  /** 佐川急便 */
  Sagawa = "SAGAWA",
  /** ヤマト運輸 */
  Yamato = "YAMATO",
}

/** Shop注文支払い */
export type ShopOrderPayment = {
  __typename?: "ShopOrderPayment";
  /** 支払い日時 */
  paidAt: Scalars["Datetime"]["output"];
  /** 支払いカード */
  paymentCard?: Maybe<PaymentCard>;
};

/** Shop注文製品 */
export type ShopOrderProduct = {
  __typename?: "ShopOrderProduct";
  /** 製品ID */
  id: Scalars["ID"]["output"];
  /** 名称 */
  name: Scalars["String"]["output"];
};

/** Shop注文配送 */
export type ShopOrderShipping = {
  __typename?: "ShopOrderShipping";
  /** 番地 */
  address1: Scalars["String"]["output"];
  /** 建物名・部屋番号 */
  address2?: Maybe<Scalars["String"]["output"]>;
  /** 市区町村 */
  city: Scalars["String"]["output"];
  /** 国 */
  country: Scalars["String"]["output"];
  /** 名前 */
  firstName: Scalars["String"]["output"];
  /** 苗字 */
  lastName: Scalars["String"]["output"];
  /** 電話番号 */
  phoneNumber: Scalars["String"]["output"];
  /** 郵便番号 */
  postcode: Scalars["String"]["output"];
  /** 都道府県 */
  prefecture: Scalars["String"]["output"];
};

/** Shop注文配送ステータス */
export enum ShopOrderShippingStatus {
  /** 発送済み */
  Shipped = "SHIPPED",
  /** 未発送 */
  Unshipped = "UNSHIPPED",
}

/** Shop注文製品規格 */
export type ShopOrderVariant = {
  __typename?: "ShopOrderVariant";
  /** 製品規格ID */
  id: Scalars["ID"]["output"];
  /** 画像 */
  image?: Maybe<ShopProductImage>;
  /** 名称 */
  name: Scalars["String"]["output"];
};

/** Shop製品画像 */
export type ShopProductImage = {
  __typename?: "ShopProductImage";
  /** URL */
  url: ShopImageUrl;
};

export type ShopShippingAddressInput = {
  /** 番地 */
  address1: Scalars["String"]["input"];
  /** 建物名・部屋番号 */
  address2?: InputMaybe<Scalars["String"]["input"]>;
  /** 市区町村 */
  city: Scalars["String"]["input"];
  /** 国 */
  country: Scalars["String"]["input"];
  /** 名前 */
  firstName: Scalars["String"]["input"];
  /** 苗字 */
  lastName: Scalars["String"]["input"];
  /** 電話番号 */
  phoneNumber: Scalars["String"]["input"];
  /** 郵便番号 */
  postcode: Scalars["String"]["input"];
  /** 都道府県 */
  prefecture: Scalars["String"]["input"];
};

export enum SignUpMethod {
  Email = "EMAIL",
  Google = "GOOGLE",
  Twitter = "TWITTER",
}

export enum SignUpSns {
  Google = "GOOGLE",
  Twitter = "TWITTER",
}

/** アーカイブ動画ファイル 署名付きCookie */
export type SignedCookie = {
  __typename?: "SignedCookie";
  /** 有効日時 */
  expireAt: Scalars["Datetime"]["output"];
  /** Cookie設定値 */
  values: Array<CookieValue>;
};

export type Site = Node & {
  __typename?: "Site";
  /** コピーライト */
  copyright: Scalars["String"]["output"];
  /** サイト概要 */
  description: Scalars["String"]["output"];
  /** デザイン */
  design: Design;
  /** サイトドメイン */
  domain: Scalars["String"]["output"];
  /** ファビコン */
  faviconFile?: Maybe<SharedFile>;
  /**
   * Get galleries by a site
   * @deprecated galleryGroupsの使用を推奨
   */
  galleries: GalleryConnection;
  /** 写真管理リスト取得 */
  galleryGroups: Array<GalleryGroup>;
  /** GoogleアナリティクスID */
  googleAnalyticsId: Scalars["String"]["output"];
  /** アイコン画像 */
  iconImageFile?: Maybe<SharedFile>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** Instagram ID */
  instagramId: Scalars["String"]["output"];
  /** 公開フラグ */
  isAvailable: Scalars["Boolean"]["output"];
  /** デザインレイアウトセクション */
  layoutSections: Array<LayoutSection>;
  /**
   * TOP表示生配信
   * 現在配信中か、未配信で配信予定日時が最も古い配信
   */
  liveBroadcastForTop?: Maybe<LiveBroadcast>;
  /** 生配信リスト取得 */
  liveBroadcasts: LiveBroadcastConnection;
  /**
   * 会員証
   * @deprecated SubscriptionPlanMembershipCardDesignに移行
   */
  membershipCard?: Maybe<SiteMembershipCard>;
  /** 会員証番号 */
  membershipNumber?: Maybe<SiteMembershipNumber>;
  /** デザインメニューを取得 */
  menus: Array<DesignMenu>;
  /** 動画カテゴリリスト */
  movieCategories?: Maybe<Array<MovieCategory>>;
  /** 動画リスト */
  movies: MovieConnection;
  /** サイト名 */
  name: Scalars["String"]["output"];
  /** Get news by a site */
  news: NewsConnection;
  /** お知らせカテゴリ */
  newsCategories?: Maybe<Array<NewsCategory>>;
  /**
   * サイトで上書き可能なコンテンツを取得します。
   * keysには、terms, privacy_policy, commercial_law などコンテンツキーを指定します。
   */
  overwriteContents: Array<OverwriteContent>;
  /**
   * プロフィール
   * @deprecated `profiles`に移行
   */
  profile?: Maybe<SiteProfile>;
  /** プロフィール */
  profiles?: Maybe<Array<SiteProfile>>;
  /** シェア用画像 */
  snsThumbnailFile?: Maybe<SharedFile>;
  /** スタンプリスト取得 */
  stamps: StampConnection;
  subscriptionPlans?: Maybe<Array<Maybe<SubscriptionPlan>>>;
  /** TikTok ID */
  tiktokId: Scalars["String"]["output"];
  /** Twitter ID */
  twitterId: Scalars["String"]["output"];
  /** YouTube URL */
  youtubeURL: Scalars["String"]["output"];
};

export type SiteGalleriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GalleryOrderInput>;
};

export type SiteLiveBroadcastsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LiveBroadcastOrderInput>;
};

export type SiteMoviesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MovieOrderInput>;
};

export type SiteNewsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<NewsOrderInput>;
};

export type SiteOverwriteContentsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type SiteStampsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** 会員証 */
export type SiteMembershipCard = {
  __typename?: "SiteMembershipCard";
  /** 背景画像ファイル */
  backgroundImageFile?: Maybe<SharedFile>;
  /** ロゴ画像ファイル */
  logoImageFile?: Maybe<SharedFile>;
  /** ロゴ表示位置 */
  logoPosition: LogoPosition;
  /** 会員番号文字色コード */
  numberColor: Scalars["String"]["output"];
  /** 会員番号表示位置 */
  numberPosition: NumberPosition;
  /** 会員番号プレフィックス（上2文字） */
  prefix: Scalars["String"]["output"];
};

/** 会員証番号 */
export type SiteMembershipNumber = {
  __typename?: "SiteMembershipNumber";
  /** 会員番号プレフィックス（上2文字） */
  prefix: Scalars["String"]["output"];
  /** 開始番号 */
  start: Scalars["Int"]["output"];
};

/** サイトプロフィール */
export type SiteProfile = {
  __typename?: "SiteProfile";
  /** サイトプロフィール別名 */
  alias: Scalars["String"]["output"];
  /** サイトプロフィール概要 */
  description: Scalars["String"]["output"];
  /** サイトプロフィールID */
  id: Scalars["ID"]["output"];
  /** プロフィール画像 */
  imageFile?: Maybe<SharedFile>;
  /** サイトプロフィール名 */
  name: Scalars["String"]["output"];
};

/** 並び替え可能コイン履歴 */
export type SortableCoinHistory = {
  __typename?: "SortableCoinHistory";
  createdAt: Scalars["Datetime"]["output"];
  item: CoinHistory;
};

/** 並び替え可能支払い履歴 */
export type SortablePaymentHistory = {
  __typename?: "SortablePaymentHistory";
  createdAt: Scalars["Datetime"]["output"];
  item: PaymentHistory;
};

/** スタンプオブジェクト */
export type Stamp = Node & {
  __typename?: "Stamp";
  /** 必要コイン枚数 */
  amount: Scalars["Int"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** アイコン画像 */
  imageFile: SharedFile;
  /** スタンプ名 */
  name: Scalars["String"]["output"];
  /** 表示順 */
  seq: Scalars["Int"]["output"];
};

/** スタンプコネクションオブジェクト */
export type StampConnection = {
  __typename?: "StampConnection";
  /** エッジ */
  edges: Array<StampEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
};

/** スタンプエッジオブジェクト */
export type StampEdge = Edge & {
  __typename?: "StampEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: Stamp;
};

/** スタンプソート項目 */
export enum StampOrderField {
  /** 表示順 */
  Seq = "SEQ",
}

/** サブスク解約理由 */
export type SubscriptionCancelReason = {
  __typename?: "SubscriptionCancelReason";
  /** 解約理由ID */
  id: Scalars["ID"]["output"];
  /** 解約理由 */
  name: Scalars["String"]["output"];
};

/** サブスクリプション割引-Node */
export type SubscriptionDiscount = Node & {
  __typename?: "SubscriptionDiscount";
  /** 割引数量 */
  discountAmount: Scalars["String"]["output"];
  /** 割引タイプ */
  discountType: SubscriptionDiscountType;
  /** 割引適用月数 */
  durationInMonths: Scalars["Int"]["output"];
  /** 終了日時 */
  endAt: Scalars["Datetime"]["output"];
  /** 割引ID */
  id: Scalars["ID"]["output"];
  /** 開始日時 */
  startAt: Scalars["Datetime"]["output"];
};

/** 割引タイプ */
export enum SubscriptionDiscountType {
  /** 固定 */
  Fixed = "FIXED",
  /** 割合 */
  Percentage = "PERCENTAGE",
}

/** サブスク支払履歴オブジェクト */
export type SubscriptionPaymentHistory = Node & {
  __typename?: "SubscriptionPaymentHistory";
  /** 支払総額 */
  amount: Scalars["Int"]["output"];
  /** 支払履歴作成日時 */
  createdAt: Scalars["Datetime"]["output"];
  /** 割引金額 */
  discountAmount: Scalars["Int"]["output"];
  /** ID */
  id: Scalars["ID"]["output"];
  /** サブスクリプションプラン */
  plan: SubscriptionPlan;
  /** サブスク対象サイト */
  site: Site;
};

/** サブスク支払履歴エッジオブジェクト */
export type SubscriptionPaymentHistoryEdge = Edge & {
  __typename?: "SubscriptionPaymentHistoryEdge";
  /** カーソル */
  cursor: Scalars["String"]["output"];
  /** ノード */
  node: SubscriptionPaymentHistory;
};

/** サブスク支払いタイミング */
export enum SubscriptionPaymentTiming {
  /** 毎月 */
  Monthly = "MONTHLY",
  /** 毎年 */
  Yearly = "YEARLY",
}

export type SubscriptionPlan = {
  __typename?: "SubscriptionPlan";
  /** 月額料金 */
  amount: Scalars["Int"]["output"];
  /**
   * 利用可能機能
   * @deprecated 機能管理v2移行のためfeaturesに移行
   */
  availableFunction?: Maybe<SubscriptionPlanAvailableFunction>;
  /** 利用可能支払いグループ */
  availablePaymentGroups: Array<PaymentGroup>;
  /** プラン詳細 */
  description: Scalars["String"]["output"];
  /** プラン機能一覧v2 */
  features: Array<Feature>;
  id: Scalars["ID"]["output"];
  /** 契約可能フラグ */
  isAvailableForContract: Scalars["Boolean"]["output"];
  /** 会員証デザイン */
  membershipCardDesign?: Maybe<SubscriptionPlanMembershipCardDesign>;
  name: Scalars["String"]["output"];
  /** 支払いタイミング */
  paymentTiming: SubscriptionPaymentTiming;
};

/** サブスクリプションプラン利用可能機能 */
export type SubscriptionPlanAvailableFunction = {
  __typename?: "SubscriptionPlanAvailableFunction";
  /** ブログリスト */
  blogs?: Maybe<Array<Blog>>;
  /** 写真管理リスト */
  galleryGroups?: Maybe<Array<GalleryGroup>>;
  /** 動画表示名 */
  movieDisplayName: Scalars["String"]["output"];
};

/** 会員証デザイン(背景色ver) */
export type SubscriptionPlanMembershipCardBackgroundColorDesign = {
  __typename?: "SubscriptionPlanMembershipCardBackgroundColorDesign";
  /** 背景色コード */
  backgroundColor: Scalars["String"]["output"];
  /** ロゴ画像ファイル */
  logoImageFile?: Maybe<SharedFile>;
  /** ロゴ表示位置 */
  logoPosition: LogoPosition;
  /** 会員番号文字色コード */
  numberColor: Scalars["String"]["output"];
  /** 会員番号表示位置 */
  numberPosition: NumberPosition;
  /** ユーザー名文字色コード */
  usernameColor: Scalars["String"]["output"];
  /** ユーザー名表示位置 */
  usernamePosition: UsernamePosition;
};

/** 会員証デザイン(背景画像ver) */
export type SubscriptionPlanMembershipCardBackgroundImageDesign = {
  __typename?: "SubscriptionPlanMembershipCardBackgroundImageDesign";
  /** 背景画像ファイル */
  backgroundImageFile?: Maybe<SharedFile>;
  /** ロゴ画像ファイル */
  logoImageFile?: Maybe<SharedFile>;
  /** ロゴ表示位置 */
  logoPosition: LogoPosition;
  /** 会員番号文字色コード */
  numberColor: Scalars["String"]["output"];
  /** 会員番号表示位置 */
  numberPosition: NumberPosition;
  /** ユーザー名文字色コード */
  usernameColor: Scalars["String"]["output"];
  /** ユーザー名表示位置 */
  usernamePosition: UsernamePosition;
};

/** 会員証デザイン */
export type SubscriptionPlanMembershipCardDesign =
  | SubscriptionPlanMembershipCardBackgroundColorDesign
  | SubscriptionPlanMembershipCardBackgroundImageDesign;

/** Twitterタイムラインカラーテーマ */
export enum TwitterTimelineColorTheme {
  /** ダーク */
  Dark = "DARK",
  /** ライト */
  Light = "LIGHT",
}

export type UnlinkAuthProviderInput = {
  provider: SignUpMethod;
};

export type UpdateDisplayNameInput = {
  displayName: Scalars["String"]["input"];
};

export type UpdateEmailInput = {
  email: Scalars["String"]["input"];
  verifyURL: Scalars["String"]["input"];
};

export type UpdateFamIdInput = {
  famId: Scalars["String"]["input"];
};

export type UpdateIsSentMailInput = {
  isSentMail: Scalars["Boolean"]["input"];
};

export type UpdateProfileImageInput = {
  file?: InputMaybe<Scalars["Upload"]["input"]>;
};

export type UpdateUserDetailInput = {
  birthday: Scalars["Date"]["input"];
  block: Scalars["String"]["input"];
  building?: InputMaybe<Scalars["String"]["input"]>;
  country: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  gender: Gender;
  lastName: Scalars["String"]["input"];
  municipality: Scalars["String"]["input"];
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  postCode: Scalars["String"]["input"];
  prefecture: Scalars["String"]["input"];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  famId?: InputMaybe<Scalars["String"]["input"]>;
  verifyURL?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = Node & {
  __typename?: "User";
  /** コイン履歴 */
  coinHistories: CoinHistoryConnection;
  creditCards?: Maybe<Array<Maybe<CreditCard>>>;
  customToken?: Maybe<Scalars["String"]["output"]>;
  detail?: Maybe<UserDetail>;
  email?: Maybe<Scalars["String"]["output"]>;
  famId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isVerifiedEmail: Scalars["Boolean"]["output"];
  members?: Maybe<Array<Maybe<Member>>>;
  /** 有料コインステータスリスト取得 */
  paidCoinStatuses?: Maybe<Array<PaidCoinStatus>>;
  /** 支払履歴リスト */
  paymentHistories: PaymentHistoryConnection;
  /** @deprecated signUpMethodListを使用 */
  signUpMethod: SignUpMethod;
  signUpMethodList?: Maybe<Array<SignUpMethod>>;
  subscriptions?: Maybe<Array<Maybe<UserSubscriptionByCardOrCarrier>>>;
  /** 合計コイン残高 */
  totalCoinBalance: Scalars["Int"]["output"];
};

export type UserCoinHistoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CoinHistoryOrderInput>;
};

export type UserMembersArgs = {
  siteIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type UserPaidCoinStatusesArgs = {
  expireAtTo: Scalars["Datetime"]["input"];
};

export type UserPaymentHistoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PaymentHistoryOrderInput>;
};

export type UserSubscriptionsArgs = {
  planIDs?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type UserDetail = {
  __typename?: "UserDetail";
  birthday: Scalars["Date"]["output"];
  block: Scalars["String"]["output"];
  building?: Maybe<Scalars["String"]["output"]>;
  country: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  gender: Gender;
  lastName: Scalars["String"]["output"];
  municipality: Scalars["String"]["output"];
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  postCode: Scalars["String"]["output"];
  prefecture: Scalars["String"]["output"];
};

export type UserSubscription = {
  cancelAt?: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["ID"]["output"];
  nextPaymentDay: Scalars["Date"]["output"];
  nextPaymentMethod?: Maybe<NextPaymentMethod>;
  plan: SubscriptionPlan;
  startAt: Scalars["Datetime"]["output"];
  /** ステータス */
  status: Scalars["String"]["output"];
  suspendedAt?: Maybe<Scalars["Datetime"]["output"]>;
};

export type UserSubscriptionByCard = UserSubscription & {
  __typename?: "UserSubscriptionByCard";
  /** キャンセル日時 */
  cancelAt?: Maybe<Scalars["Datetime"]["output"]>;
  creditCard?: Maybe<CreditCard>;
  /**
   * 割引情報
   *
   * @deprecated(reason: "discountsに移行")
   * @deprecated discountsに移行
   */
  discount?: Maybe<SubscriptionDiscount>;
  /** 割引情報リスト */
  discounts?: Maybe<Array<SubscriptionDiscount>>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** クーポン適用可能フラグ */
  isAvailableForCouponRedemption: Scalars["Boolean"]["output"];
  /** 次回支払い日 */
  nextPaymentDay: Scalars["Date"]["output"];
  /** 次回支払い方法 */
  nextPaymentMethod?: Maybe<NextPaymentMethod>;
  /** プラン */
  plan: SubscriptionPlan;
  /** 開始日時 */
  startAt: Scalars["Datetime"]["output"];
  /** ステータス */
  status: Scalars["String"]["output"];
  /** 一時停止日時 */
  suspendedAt?: Maybe<Scalars["Datetime"]["output"]>;
};

export type UserSubscriptionByCardOrCarrier =
  | UserSubscriptionByCard
  | UserSubscriptionByCarrier;

export type UserSubscriptionByCarrier = UserSubscription & {
  __typename?: "UserSubscriptionByCarrier";
  /** キャンセル日時 */
  cancelAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** キャリア会社 */
  carrierCompany: CarrierCompany;
  /** 割引情報リスト */
  discounts?: Maybe<Array<SubscriptionDiscount>>;
  /** ID */
  id: Scalars["ID"]["output"];
  /** クーポン適用可能フラグ */
  isAvailableForCouponRedemption: Scalars["Boolean"]["output"];
  /** 次回支払い日 */
  nextPaymentDay: Scalars["Date"]["output"];
  /** 次回支払い方法 */
  nextPaymentMethod?: Maybe<NextPaymentMethod>;
  /** プラン */
  plan: SubscriptionPlan;
  /** 開始日時 */
  startAt: Scalars["Datetime"]["output"];
  /** ステータス */
  status: Scalars["String"]["output"];
  /** 一時停止日時 */
  suspendedAt?: Maybe<Scalars["Datetime"]["output"]>;
};

/** ユーザー名表示位置 */
export enum UsernamePosition {
  /** 非表示 */
  Hidden = "HIDDEN",
  /** 左下 */
  LowerLeft = "LOWER_LEFT",
  /** 右下 */
  LowerRight = "LOWER_RIGHT",
  /** 左上 */
  UpperLeft = "UPPER_LEFT",
  /** 右上 */
  UpperRight = "UPPER_RIGHT",
}

export type VefifyEmailInput = {
  token: Scalars["String"]["input"];
};

/** コンテンツ閲覧可能範囲 */
export enum ViewableScopeType {
  /** 全会員公開 */
  AllMember = "ALL_MEMBER",
  /** 有料会員のみ */
  PremiumMember = "PREMIUM_MEMBER",
  /** 全体公開 */
  Public = "PUBLIC",
}

export type BlogCategoryFragment = {
  __typename?: "BlogCategory";
  id: string;
  name: string;
} & { " $fragmentName"?: "BlogCategoryFragment" };

export type BlogPostFragment = {
  __typename?: "BlogPost";
  id: string;
  subject: string;
  category?:
    | ({ __typename?: "BlogCategory" } & {
        " $fragmentRefs"?: { BlogCategoryFragment: BlogCategoryFragment };
      })
    | null;
  thumbnailFile?:
    | ({ __typename?: "SharedFile" } & {
        " $fragmentRefs"?: { SharedFileFragment: SharedFileFragment };
      })
    | null;
} & { " $fragmentName"?: "BlogPostFragment" };

export type BlogPostConnectionFragment = {
  __typename?: "BlogPostConnection";
  totalCount: number;
  pageInfo: { __typename?: "PageInfo" } & {
    " $fragmentRefs"?: { PageInfoFragment: PageInfoFragment };
  };
  edges: Array<{
    __typename?: "BlogPostEdge";
    cursor: string;
    node: { __typename?: "BlogPost" } & {
      " $fragmentRefs"?: { BlogPostFragment: BlogPostFragment };
    };
  }>;
} & { " $fragmentName"?: "BlogPostConnectionFragment" };

export type PageInfoFragment = {
  __typename?: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
  endCursor?: string | null;
} & { " $fragmentName"?: "PageInfoFragment" };

export type SharedFileFragment = {
  __typename?: "SharedFile";
  id: string;
  url: string;
  alternativeContent: string;
} & { " $fragmentName"?: "SharedFileFragment" };

export type GalleryImagePresetUrlFragment = {
  __typename?: "GalleryImagePresetUrl";
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  xLarge: string;
  original: string;
} & { " $fragmentName"?: "GalleryImagePresetUrlFragment" };

export type GalleryContentFragment = {
  __typename?: "GalleryContent";
  id: string;
  contentFile: { __typename?: "SharedFile" } & {
    " $fragmentRefs"?: { SharedFileFragment: SharedFileFragment };
  };
  imagePresetUrl?:
    | ({ __typename?: "GalleryImagePresetUrl" } & {
        " $fragmentRefs"?: {
          GalleryImagePresetUrlFragment: GalleryImagePresetUrlFragment;
        };
      })
    | null;
} & { " $fragmentName"?: "GalleryContentFragment" };

export type GalleryFragment = {
  __typename?: "Gallery";
  id: string;
  name: string;
  releaseDay: any;
  isViewable: boolean;
  contents?: Array<
    { __typename?: "GalleryContent" } & {
      " $fragmentRefs"?: { GalleryContentFragment: GalleryContentFragment };
    }
  > | null;
} & { " $fragmentName"?: "GalleryFragment" };

export type GalleryConnectionFragment = {
  __typename?: "GalleryConnection";
  totalCount: number;
  pageInfo: { __typename?: "PageInfo" } & {
    " $fragmentRefs"?: { PageInfoFragment: PageInfoFragment };
  };
  edges: Array<{
    __typename?: "GalleryEdge";
    cursor: string;
    node: { __typename?: "Gallery" } & {
      " $fragmentRefs"?: { GalleryFragment: GalleryFragment };
    };
  }>;
} & { " $fragmentName"?: "GalleryConnectionFragment" };

export type BlogQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type BlogQuery = {
  __typename?: "Query";
  blog?: {
    __typename?: "Blog";
    id: string;
    posts: { __typename?: "BlogPostConnection" } & {
      " $fragmentRefs"?: {
        BlogPostConnectionFragment: BlogPostConnectionFragment;
      };
    };
  } | null;
};

export type GalleryQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GalleryQuery = {
  __typename?: "Query";
  gallery?: {
    __typename?: "Gallery";
    id: string;
    name: string;
    description: string;
    releaseDay: any;
    contents?: Array<
      { __typename?: "GalleryContent" } & {
        " $fragmentRefs"?: { GalleryContentFragment: GalleryContentFragment };
      }
    > | null;
  } | null;
};

export type GalleryGroupQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GalleryGroupQuery = {
  __typename?: "Query";
  galleryGroup?: {
    __typename?: "GalleryGroup";
    id: string;
    galleries: { __typename?: "GalleryConnection" } & {
      " $fragmentRefs"?: {
        GalleryConnectionFragment: GalleryConnectionFragment;
      };
    };
  } | null;
};

export const PageInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PageInfo" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
          { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
          { kind: "Field", name: { kind: "Name", value: "startCursor" } },
          { kind: "Field", name: { kind: "Name", value: "endCursor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageInfoFragment, unknown>;
export const BlogCategoryFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogCategory" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogCategoryFragment, unknown>;
export const SharedFileFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedFile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SharedFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "alternativeContent" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SharedFileFragment, unknown>;
export const BlogPostFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogPost" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogPost" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "subject" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "BlogCategory" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "thumbnailFile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SharedFile" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogCategory" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedFile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SharedFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "alternativeContent" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogPostFragment, unknown>;
export const BlogPostConnectionFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogPostConnection" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogPostConnection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PageInfo" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "edges" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "node" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlogPost" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "cursor" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "totalCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogCategory" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedFile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SharedFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "alternativeContent" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PageInfo" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
          { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
          { kind: "Field", name: { kind: "Name", value: "startCursor" } },
          { kind: "Field", name: { kind: "Name", value: "endCursor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogPost" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogPost" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "subject" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "BlogCategory" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "thumbnailFile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SharedFile" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogPostConnectionFragment, unknown>;
export const GalleryImagePresetUrlFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryImagePresetUrl" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryImagePresetUrl" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
          { kind: "Field", name: { kind: "Name", value: "small" } },
          { kind: "Field", name: { kind: "Name", value: "medium" } },
          { kind: "Field", name: { kind: "Name", value: "large" } },
          { kind: "Field", name: { kind: "Name", value: "xLarge" } },
          { kind: "Field", name: { kind: "Name", value: "original" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GalleryImagePresetUrlFragment, unknown>;
export const GalleryContentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryContent" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contentFile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SharedFile" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "imagePresetUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "GalleryImagePresetUrl" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedFile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SharedFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "alternativeContent" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryImagePresetUrl" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryImagePresetUrl" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
          { kind: "Field", name: { kind: "Name", value: "small" } },
          { kind: "Field", name: { kind: "Name", value: "medium" } },
          { kind: "Field", name: { kind: "Name", value: "large" } },
          { kind: "Field", name: { kind: "Name", value: "xLarge" } },
          { kind: "Field", name: { kind: "Name", value: "original" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GalleryContentFragment, unknown>;
export const GalleryFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Gallery" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Gallery" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "releaseDay" } },
          { kind: "Field", name: { kind: "Name", value: "isViewable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contents" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "GalleryContent" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedFile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SharedFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "alternativeContent" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryImagePresetUrl" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryImagePresetUrl" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
          { kind: "Field", name: { kind: "Name", value: "small" } },
          { kind: "Field", name: { kind: "Name", value: "medium" } },
          { kind: "Field", name: { kind: "Name", value: "large" } },
          { kind: "Field", name: { kind: "Name", value: "xLarge" } },
          { kind: "Field", name: { kind: "Name", value: "original" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryContent" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contentFile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SharedFile" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "imagePresetUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "GalleryImagePresetUrl" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GalleryFragment, unknown>;
export const GalleryConnectionFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryConnection" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryConnection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PageInfo" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "edges" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "node" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Gallery" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "cursor" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "totalCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedFile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SharedFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "alternativeContent" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryImagePresetUrl" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryImagePresetUrl" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
          { kind: "Field", name: { kind: "Name", value: "small" } },
          { kind: "Field", name: { kind: "Name", value: "medium" } },
          { kind: "Field", name: { kind: "Name", value: "large" } },
          { kind: "Field", name: { kind: "Name", value: "xLarge" } },
          { kind: "Field", name: { kind: "Name", value: "original" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryContent" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contentFile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SharedFile" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "imagePresetUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "GalleryImagePresetUrl" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PageInfo" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
          { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
          { kind: "Field", name: { kind: "Name", value: "startCursor" } },
          { kind: "Field", name: { kind: "Name", value: "endCursor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Gallery" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Gallery" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "releaseDay" } },
          { kind: "Field", name: { kind: "Name", value: "isViewable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contents" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "GalleryContent" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GalleryConnectionFragment, unknown>;
export const BlogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Blog" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "before" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blog" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "slug" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "posts" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "after" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "last" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "before" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "direction" },
                            value: { kind: "EnumValue", value: "DESC" },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "field" },
                            value: { kind: "EnumValue", value: "START_AT" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlogPostConnection" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PageInfo" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
          { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
          { kind: "Field", name: { kind: "Name", value: "startCursor" } },
          { kind: "Field", name: { kind: "Name", value: "endCursor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogCategory" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogCategory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedFile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SharedFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "alternativeContent" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogPost" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogPost" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "subject" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "BlogCategory" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "thumbnailFile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SharedFile" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogPostConnection" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogPostConnection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PageInfo" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "edges" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "node" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlogPost" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "cursor" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "totalCount" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogQuery, BlogQueryVariables>;
export const GalleryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Gallery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "gallery" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "GalleryContent" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "releaseDay" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedFile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SharedFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "alternativeContent" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryImagePresetUrl" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryImagePresetUrl" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
          { kind: "Field", name: { kind: "Name", value: "small" } },
          { kind: "Field", name: { kind: "Name", value: "medium" } },
          { kind: "Field", name: { kind: "Name", value: "large" } },
          { kind: "Field", name: { kind: "Name", value: "xLarge" } },
          { kind: "Field", name: { kind: "Name", value: "original" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryContent" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contentFile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SharedFile" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "imagePresetUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "GalleryImagePresetUrl" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GalleryQuery, GalleryQueryVariables>;
export const GalleryGroupDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GalleryGroup" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "before" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "galleryGroup" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "slug" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "galleries" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "after" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "last" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "before" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "direction" },
                            value: { kind: "EnumValue", value: "DESC" },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "field" },
                            value: { kind: "EnumValue", value: "START_AT" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "GalleryConnection" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PageInfo" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
          { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
          { kind: "Field", name: { kind: "Name", value: "startCursor" } },
          { kind: "Field", name: { kind: "Name", value: "endCursor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedFile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SharedFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "alternativeContent" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryImagePresetUrl" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryImagePresetUrl" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
          { kind: "Field", name: { kind: "Name", value: "small" } },
          { kind: "Field", name: { kind: "Name", value: "medium" } },
          { kind: "Field", name: { kind: "Name", value: "large" } },
          { kind: "Field", name: { kind: "Name", value: "xLarge" } },
          { kind: "Field", name: { kind: "Name", value: "original" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryContent" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contentFile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SharedFile" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "imagePresetUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "GalleryImagePresetUrl" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Gallery" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Gallery" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "releaseDay" } },
          { kind: "Field", name: { kind: "Name", value: "isViewable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contents" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "GalleryContent" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GalleryConnection" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GalleryConnection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PageInfo" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "edges" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "node" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Gallery" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "cursor" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "totalCount" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GalleryGroupQuery, GalleryGroupQueryVariables>;

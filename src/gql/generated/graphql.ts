/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * 年月日
   * ex) 2006-01-02
   */
  Date: any;
  /**
   * [RFC3339] 日時
   * ex) 2006-01-02T15:04:05Z07:00
   */
  Datetime: any;
  Upload: any;
};

/** コイン購入入力オブジェクト */
export type AcquireCoinInput = {
  /** カードID */
  cardId: Scalars['ID'];
  /** コイン商品ID */
  productId: Scalars['ID'];
};

/** ブログ記事コメント入力コメント */
export type AddBlogPostCommentInput = {
  /** コメント内容 */
  content: Scalars['String'];
  /** ブログ記事ID */
  postId: Scalars['ID'];
};

export type AddCreditCardInput = {
  expiration: Scalars['String'];
  token: Scalars['String'];
};

/** ギャラリーコメント入力コメント */
export type AddGalleryCommentInput = {
  /** コメント内容 */
  content: Scalars['String'];
  /** ギャラリーID */
  id: Scalars['ID'];
};

export type AddMessageInput = {
  /** チャットメッセージ本文 */
  content: Scalars['String'];
  /** 生配信ID */
  liveBroadcastId: Scalars['ID'];
};

export type AddMovieCommentInput = {
  /** コメント内容 */
  content: Scalars['String'];
  /** 動画ID */
  movieId: Scalars['ID'];
};

/** アルバムタイプ */
export enum AlbumType {
  /** アルバム */
  Album = 'ALBUM',
  /** シングル */
  Single = 'SINGLE'
}

/** バナーサイズ */
export enum BannerSize {
  Big = 'BIG',
  Normal = 'NORMAL',
  Small = 'SMALL'
}

/** ブログオブジェクト */
export type Blog = Node & {
  __typename?: 'Blog';
  /** ブログカテゴリリスト取得 */
  categories: Array<BlogCategory>;
  /** ID */
  id: Scalars['ID'];
  /** ステータス */
  isAvailable: Scalars['Boolean'];
  /** ブログ名 */
  name: Scalars['String'];
  /** ブログ記事リスト取得 */
  posts: BlogPostConnection;
  /** スラッグ */
  slug: Scalars['String'];
};


/** ブログオブジェクト */
export type BlogPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categoryID?: InputMaybe<Scalars['ID']>;
  endDate?: InputMaybe<Scalars['Date']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BlogPostOrderInput>;
  startDate?: InputMaybe<Scalars['Date']>;
};

/** ブログカテゴリオブジェクト */
export type BlogCategory = {
  __typename?: 'BlogCategory';
  /** ブログカテゴリ記事数取得 */
  count: Scalars['Int'];
  /** ID */
  id: Scalars['ID'];
  /** デフォルト */
  isDefault: Scalars['Boolean'];
  /** カテゴリ名 */
  name: Scalars['String'];
  /** スラッグ */
  slug: Scalars['String'];
};

/** ブログ記事オブジェクト */
export type BlogPost = Node & {
  __typename?: 'BlogPost';
  /** カテゴリ */
  category?: Maybe<BlogCategory>;
  /** ブログ記事コメントリスト取得 */
  comments: BlogPostCommentConnection;
  /** 記事コンテンツ */
  content: Scalars['String'];
  /** ID */
  id: Scalars['ID'];
  /** ステータス */
  isAvailable: Scalars['Boolean'];
  /** コメント可否フラグ */
  isCommentable: Scalars['Boolean'];
  /** 閲覧可能フラグ */
  isViewable: Scalars['Boolean'];
  /** 公開日時 */
  startAt: Scalars['Datetime'];
  /** 記事タイトル */
  subject: Scalars['String'];
  /** サムネイル */
  thumbnailFile?: Maybe<SharedFile>;
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};


/** ブログ記事オブジェクト */
export type BlogPostCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BlogPostCommentOrderInput>;
};

/** ブログ記事コメントオブジェクト */
export type BlogPostComment = Node & {
  __typename?: 'BlogPostComment';
  /** コメント主 */
  commenter?: Maybe<Member>;
  /** コメント内容 */
  content: Scalars['String'];
  /** 作成日時 */
  createdAt: Scalars['Datetime'];
  /** ID */
  id: Scalars['ID'];
};

/** ブログ記事コメントコネクションオブジェクト */
export type BlogPostCommentConnection = {
  __typename?: 'BlogPostCommentConnection';
  /** エッジ */
  edges: Array<BlogPostCommentEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 合計コメント数 */
  totalCount: Scalars['Int'];
};

/** ブログ記事コメントエッジオブジェクト */
export type BlogPostCommentEdge = Edge & {
  __typename?: 'BlogPostCommentEdge';
  /** カーソル */
  cursor: Scalars['String'];
  /** ノード */
  node: BlogPostComment;
};

/** ブログ記事コメントソート項目 */
export enum BlogPostCommentOrderField {
  /** 作成日時 */
  CreatedAt = 'CREATED_AT'
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
  __typename?: 'BlogPostConnection';
  /** エッジ */
  edges: Array<BlogPostEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars['Int'];
};

/** ブログ記事エッジオブジェクト */
export type BlogPostEdge = Edge & {
  __typename?: 'BlogPostEdge';
  /** カーソル */
  cursor: Scalars['String'];
  /** ノード */
  node: BlogPost;
};

/** ブログ記事ソート項目 */
export enum BlogPostOrderField {
  /** 作成日時 */
  CreatedAt = 'CREATED_AT',
  /** 公開日時 */
  StartAt = 'START_AT'
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
  planId: Scalars['ID'];
  /** レポート */
  report?: InputMaybe<CancelSubscriptionReportInput>;
};

/** サブスク解約レポート - Input */
export type CancelSubscriptionReportInput = {
  /** 解約理由詳細 解約理由がその他の場合に保存される */
  description?: InputMaybe<Scalars['String']>;
  /** 解約理由ID */
  reasonIds: Array<Scalars['ID']>;
};

/** 当選したデジタルコンテンツくじ */
export type CapturedDigitalContentLottery = {
  __typename?: 'CapturedDigitalContentLottery';
  /** 獲得したデジタルコンテンツ数 */
  capturedDigitalContentCount: Scalars['Int'];
  /** くじ */
  lottery: Lottery;
};

export type CardPayment = PaymentMethod & {
  __typename?: 'CardPayment';
  creditCard: CreditCard;
  /** @deprecated creditCardの使用を推奨 */
  maskedNo: Scalars['String'];
  paymentAt: Scalars['Datetime'];
};

export type CarrierAuth = {
  __typename?: 'CarrierAuth';
  accessId: Scalars['String'];
  startUrl: Scalars['String'];
  token: Scalars['String'];
};

export enum CarrierCompany {
  Au = 'AU',
  Docomo = 'DOCOMO',
  Softbank = 'SOFTBANK'
}

export type CarrierPayment = PaymentMethod & {
  __typename?: 'CarrierPayment';
  carrierCompany: CarrierCompany;
  paymentAt: Scalars['Datetime'];
};

export type ChangeSubscriptionPaymentMethodToCardInput = {
  cardId: Scalars['ID'];
  planId: Scalars['ID'];
};

export type ChangeSubscriptionPaymentMethodToCarrierInput = {
  carrierCompany: CarrierCompany;
  /** 失敗リダイレクトパス */
  failurePath?: InputMaybe<Scalars['String']>;
  /** 失敗URL（deprecated: failureRedirectPathを使用） */
  failureReturnURL?: InputMaybe<Scalars['String']>;
  planId: Scalars['ID'];
  /** 成功リダイレクトパス */
  successPath?: InputMaybe<Scalars['String']>;
  /** 成功URL（deprecated: successRedirectPathを使用） */
  successReturnURL?: InputMaybe<Scalars['String']>;
};

/** コイン獲得履歴 */
export type CoinAcquisitionHistory = Node & {
  __typename?: 'CoinAcquisitionHistory';
  /** コインボーナス獲得枚数 */
  bonusAmount: Scalars['Int'];
  /** コイン獲得枚数 */
  coinAmount: Scalars['Int'];
  /** 獲得日時 */
  createdAt: Scalars['Datetime'];
  /** 有効期限 */
  expireAt: Scalars['Datetime'];
  /** ID */
  id: Scalars['ID'];
  /** 支払金額 */
  price: Scalars['Int'];
};

/** コイン獲得履歴エッジオブジェクト */
export type CoinAcquisitionHistoryEdge = Edge & {
  __typename?: 'CoinAcquisitionHistoryEdge';
  /** カーソル */
  cursor: Scalars['String'];
  /** ノード */
  node: CoinAcquisitionHistory;
};

/** コイン消費履歴 */
export type CoinConsumptionHistory = Node & {
  __typename?: 'CoinConsumptionHistory';
  /** コイン消費枚数 */
  amount: Scalars['Int'];
  /** 消費日時 */
  createdAt: Scalars['Datetime'];
  /** ID */
  id: Scalars['ID'];
  /** 支払い対象 */
  product: CoinConsumptionProduct;
  /** コイン消費サイト */
  site: Site;
};

/** コイン消費履歴エッジオブジェクト */
export type CoinConsumptionHistoryEdge = Edge & {
  __typename?: 'CoinConsumptionHistoryEdge';
  /** カーソル */
  cursor: Scalars['String'];
  /** ノード */
  node: CoinConsumptionHistory;
};

/** コイン消費対象 */
export enum CoinConsumptionProduct {
  /** スタンプ */
  Stamp = 'STAMP'
}

/** コイン履歴コネクションオブジェクト */
export type CoinHistoryConnection = {
  __typename?: 'CoinHistoryConnection';
  /** エッジ */
  edges: Array<CoinHistoryEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
};

export type CoinHistoryEdge = CoinAcquisitionHistoryEdge | CoinConsumptionHistoryEdge;

/** コイン履歴ソート項目 */
export enum CoinHistoryOrderField {
  /** 履歴作成日時 */
  CreatedAt = 'CREATED_AT'
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
  ExpireAt = 'EXPIRE_AT'
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
  __typename?: 'CoinProduct';
  /** ボーナス枚数 */
  bonusAmount: Scalars['Int'];
  /** コイン枚数 */
  coinAmount: Scalars['Int'];
  /** ID */
  id: Scalars['ID'];
  /** 価格 */
  price: Scalars['Int'];
};

/** コンテンツ閲覧可能範囲設定 */
export type ContentsViewableScope = {
  __typename?: 'ContentsViewableScope';
  /** 利用可能プラン */
  plans?: Maybe<Array<SubscriptionPlan>>;
  /** 閲覧可能範囲 */
  scopeType: ViewableScopeType;
};

/** Cookie設定値 */
export type CookieValue = {
  __typename?: 'CookieValue';
  /** name */
  name: Scalars['String'];
  /** value */
  value: Scalars['String'];
};

export type CreateMemberInput = {
  displayName: Scalars['String'];
  isSentMail: Scalars['Boolean'];
  profileImage?: InputMaybe<Scalars['Upload']>;
};

export type CreateUserByEmailInput = {
  email: Scalars['String'];
  famId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  verifyURL: Scalars['String'];
};

export type CreateUserBySnsInput = {
  sns: SignUpSns;
};

export type CreditCard = Node & {
  __typename?: 'CreditCard';
  expiration: Scalars['String'];
  id: Scalars['ID'];
  maskedNo: Scalars['String'];
  paymentSchedule?: Maybe<PaymentSchedule>;
};

/** 会員退会 - Input */
export type DeleteMemberInput = {
  /** 退会理由レポート */
  report?: InputMaybe<CancelSubscriptionReportInput>;
};

/** 後で消す */
export enum DeprecatedMovieCategory {
  All = 'ALL'
}

/** サイトデザインオブジェクト */
export type Design = {
  __typename?: 'Design';
  /** 背景カラー */
  backgroundColor: Scalars['String'];
  /** 背景画像の表示方法 */
  backgroundImageDisplayType: ImageDisplayType;
  /** 背景セカンダリカラー */
  backgroundSecondaryColor: Scalars['String'];
  /** サイトフォント欧文 */
  fontEuro?: Maybe<DesignFont>;
  /** サイトフォント和文 */
  fontJp?: Maybe<DesignFont>;
  /** PoweredBy非表示 */
  hidePoweredBy: Scalars['Boolean'];
  /**
   * デザインレイアウトセクション
   * @deprecated siteスキーマに移動
   */
  layoutSections: Array<LayoutSection>;
  /** リンクカラー */
  linkColor: Scalars['String'];
  /** ロゴフォント */
  logoFont?: Maybe<DesignFont>;
  /** ロゴフォントカラー */
  logoFontColor: Scalars['String'];
  /** PCサイズ以上ロゴファイル */
  logoPcFile?: Maybe<SharedFile>;
  /** タブレットサイズ以下ロゴファイルID */
  logoTabletSpFile?: Maybe<SharedFile>;
  /** ロゴテキスト */
  logoText: Scalars['String'];
  /** メインビジュアル */
  mainVisual?: Maybe<MainVisual>;
  /** サイトID */
  siteId: Scalars['ID'];
  /** テンプレート */
  template: DesignTemplate;
  /** テンプレートID */
  templateId: Scalars['Int'];
  /** 文字カラー1 */
  textColor: Scalars['String'];
  /** 文字カラー2 */
  textSecondaryColor: Scalars['String'];
  /** テーマカラー */
  themeColor: Scalars['String'];
  /** テーマセカンダリーカラー */
  themeSecondaryColor: Scalars['String'];
  /** トップページ背景カラー */
  topBackgroundColor: Scalars['String'];
  /** トップページ背景画像 */
  topBackgroundImageFile?: Maybe<SharedFile>;
};

/** 自動切替バナーグループオブジェクト */
export type DesignAutoCarouselBannerGroup = Node & {
  __typename?: 'DesignAutoCarouselBannerGroup';
  /** バナー複数取得 */
  banners: Array<Maybe<DesignBanner>>;
  /** ID */
  id: Scalars['ID'];
  /** バナーグループ名 */
  name: Scalars['String'];
};

/** デザインバナーオブジェクト */
export type DesignBanner = Node & {
  __typename?: 'DesignBanner';
  /** バナーグループID */
  bannerGroupId: Scalars['ID'];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** ファイルID */
  fileId: Scalars['ID'];
  /** ID */
  id: Scalars['ID'];
  /** 公開フラグ */
  isAvailable: Scalars['Boolean'];
  /** ページリンクフラグ */
  isPageLink: Scalars['Boolean'];
  /** 別タブを開くフラグ */
  isTargetBlank: Scalars['Boolean'];
  /** リンクURL */
  linkURL: Scalars['String'];
  /** 標準 */
  seq: Scalars['Int'];
  /** 公開日時 */
  startAt: Scalars['Datetime'];
};

/** デザインバナーグループオブジェクト */
export type DesignBannerGroup = Node & {
  __typename?: 'DesignBannerGroup';
  /** バナータイプ(0:スライドショー,1:バナー) */
  bannerType: Scalars['Int'];
  /** バナー複数取得 */
  banners: Array<Maybe<DesignBanner>>;
  /** バナーサイズ(縦) バナーのみ */
  heightRatio?: Maybe<Scalars['Float']>;
  /** ID */
  id: Scalars['ID'];
  /** バナーグループ名 */
  name: Scalars['String'];
  /** バナーサイズ(幅) バナーのみ */
  widthRatio?: Maybe<Scalars['Float']>;
};

export type DesignBannerGroupV2 = DesignAutoCarouselBannerGroup | DesignManualCarouselBannerGroup;

/** デザインフォントオブジェクト */
export type DesignFont = {
  __typename?: 'DesignFont';
  /** フォント */
  font: Scalars['String'];
  /** フォントID */
  id: Scalars['ID'];
  /** デフォルト */
  isDefault: Scalars['Boolean'];
  /** フォント名 */
  name: Scalars['String'];
  /** フォントタイプ(0:欧文, 1:和文) */
  type: Scalars['Int'];
};

/** デザインリンク */
export type DesignLink = {
  __typename?: 'DesignLink';
  /** ページリンクフラグ */
  isPageLink: Scalars['Boolean'];
  /** URL/スラッグ */
  url: Scalars['String'];
};

/** 手動切替バナーグループオブジェクト */
export type DesignManualCarouselBannerGroup = Node & {
  __typename?: 'DesignManualCarouselBannerGroup';
  /** バナー複数取得 */
  banners: Array<Maybe<DesignBanner>>;
  /** バナーサイズ(縦) バナーのみ */
  heightRatio?: Maybe<Scalars['Float']>;
  /** ID */
  id: Scalars['ID'];
  /** バナーグループ名 */
  name: Scalars['String'];
  /** バナーサイズ(幅) バナーのみ */
  widthRatio?: Maybe<Scalars['Float']>;
};

/** デザインメニュー */
export type DesignMenu = {
  __typename?: 'DesignMenu';
  /** ブログID */
  blogId?: Maybe<Scalars['ID']>;
  /** 表示名 */
  displayName: Scalars['String'];
  /** 表示タイプ (1:常に表示, 2:未ログイン時に表示, 3:ログイン時に表示) */
  displayType: Scalars['Int'];
  /** 写真管理ID */
  galleryGroupId?: Maybe<Scalars['ID']>;
  /** メニューID */
  id: Scalars['ID'];
  /** ページリンクフラグ */
  isPageLink: Scalars['Boolean'];
  /** メニュー名 */
  menuName: Scalars['String'];
  /** メニュータイプ */
  menuType: MenuType;
  /** URL/スラッグ */
  url: Scalars['String'];
};

/** デザインテンプレート */
export type DesignTemplate = {
  __typename?: 'DesignTemplate';
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** テンプレートID */
  id: Scalars['ID'];
  /** テンプレート名 */
  name: Scalars['String'];
};

/** くじ引き-Input */
export type DrawLotteryInput = {
  /** くじID */
  lotteryId: Scalars['ID'];
  /**
   * 支払いカード情報
   *
   * 決済方法が増えた場合を考慮してNullableとする
   */
  paymentCard?: InputMaybe<PaymentCardInput>;
  /** 抽選券ID */
  ticketID: Scalars['ID'];
};

/** くじ引き-Payload */
export type DrawLotteryPayload = {
  __typename?: 'DrawLotteryPayload';
  /** 抽選券購入ID */
  ticketPurchaseId: Scalars['ID'];
};

export type Edge = {
  cursor: Scalars['String'];
  node?: Maybe<Node>;
};

export type ExchangeLotteryPrizeQuantityInput = {
  /** 賞品ID */
  prizeId: Scalars['ID'];
  /** 数量 */
  quantity: Scalars['Int'];
};

/** 賞品引換え-Input */
export type ExchangeLotteryPrizesInput = {
  /** くじID */
  lotteryId: Scalars['ID'];
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
  __typename?: 'ExchangeLotteryPrizesPayload';
  /** 引換ID */
  exchangeId: Scalars['ID'];
};

/** 引換可能くじ */
export type ExchangeableLottery = {
  __typename?: 'ExchangeableLottery';
  /** くじ */
  lottery: Lottery;
  /** 賞品数量 */
  prizeQuantity: Scalars['Int'];
};

/** 機能 */
export type Feature = {
  __typename?: 'Feature';
  /** 説明文 */
  description: Scalars['String'];
  /** ID */
  id: Scalars['ID'];
  /** 有効ステータス */
  isAvailable: Scalars['Boolean'];
  /** 機能名 */
  name: Scalars['String'];
  /** スラッグ */
  slug: Scalars['String'];
};

export enum FeatureSlug {
  Blog = 'BLOG',
  Gallery = 'GALLERY',
  Movie = 'MOVIE',
  Music = 'MUSIC',
  News = 'NEWS'
}

export type Gallery = Node & {
  __typename?: 'Gallery';
  /** ギャラリーコメントリスト取得 */
  comments: GalleryCommentConnection;
  /** コンテンツ */
  contents?: Maybe<Array<GalleryContent>>;
  /** @deprecated contentsの使用を推奨 */
  contentsURLs: Array<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  /** コメント可否フラグ */
  isCommentable: Scalars['Boolean'];
  /** 閲覧可能フラグ */
  isViewable: Scalars['Boolean'];
  name: Scalars['String'];
  releaseDay: Scalars['Date'];
  /** @deprecated サムネイルURLは個別に設定せず、先頭のcontentsをサムネイルとして使用 */
  thumbnailURL: Scalars['String'];
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};


export type GalleryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GalleryCommentOrderInput>;
};

/** ギャラリーコメントオブジェクト */
export type GalleryComment = Node & {
  __typename?: 'GalleryComment';
  /** コメント投稿者 */
  commenter?: Maybe<Member>;
  /** コメント内容 */
  content: Scalars['String'];
  /** 作成日時 */
  createdAt: Scalars['Datetime'];
  /** ID */
  id: Scalars['ID'];
};

/** ギャラリーコメントコネクションオブジェクト */
export type GalleryCommentConnection = {
  __typename?: 'GalleryCommentConnection';
  /** エッジ */
  edges: Array<GalleryCommentEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 合計コメント数 */
  totalCount: Scalars['Int'];
};

/** ギャラリーコメントエッジオブジェクト */
export type GalleryCommentEdge = Edge & {
  __typename?: 'GalleryCommentEdge';
  /** カーソル */
  cursor: Scalars['String'];
  /** ノード */
  node: GalleryComment;
};

/** ギャラリーコメントソート項目 */
export enum GalleryCommentOrderField {
  /** 作成日時 */
  CreatedAt = 'CREATED_AT'
}

/** ギャラリーコメントソート条件入力オブジェクト */
export type GalleryCommentOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: GalleryCommentOrderField;
};

export type GalleryConnection = {
  __typename?: 'GalleryConnection';
  /** エッジ */
  edges: Array<GalleryEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars['Int'];
};

export type GalleryContent = {
  __typename?: 'GalleryContent';
  /** コンテンツファイル */
  contentFile: SharedFile;
  id: Scalars['ID'];
  /** 閲覧可能フラグ */
  isViewable: Scalars['Boolean'];
  seq: Scalars['Int'];
};

export type GalleryEdge = Edge & {
  __typename?: 'GalleryEdge';
  cursor: Scalars['String'];
  node: Gallery;
};

/** 写真管理オブジェクト */
export type GalleryGroup = Node & {
  __typename?: 'GalleryGroup';
  /** ギャラリーリスト取得 */
  galleries: GalleryConnection;
  /** 写真管理ID */
  id: Scalars['ID'];
  /** 公開ステータス */
  isAvailable: Scalars['Boolean'];
  /** 写真管理名 */
  name: Scalars['String'];
  /** スラッグ名 */
  slug: Scalars['String'];
};


/** 写真管理オブジェクト */
export type GalleryGroupGalleriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GalleryOrderInput>;
};

export enum GalleryOrderField {
  CreatedAt = 'CREATED_AT',
  StartAt = 'START_AT'
}

export type GalleryOrderInput = {
  direction: OrderDirection;
  field: GalleryOrderField;
};

export enum Gender {
  Man = 'MAN',
  Unspecified = 'UNSPECIFIED',
  Woman = 'WOMAN'
}

/** 画像の表示方法 */
export enum ImageDisplayType {
  /** 固定 */
  Fix = 'FIX',
  /** リピート */
  Repeat = 'REPEAT'
}

export type InquireInput = {
  /** 問い合わせ内容 */
  content: Scalars['String'];
  /** 添付ファイル */
  file?: InputMaybe<Scalars['Upload']>;
  /** メールアドレス */
  inquirerEmail: Scalars['String'];
  /** 名前 */
  inquirerName: Scalars['String'];
  /** 問い合わせ種別ID */
  typeId: Scalars['ID'];
};

export type InquireOfficialInput = {
  /** 会社名 */
  companyName?: InputMaybe<Scalars['String']>;
  /** 問い合わせ内容 */
  content: Scalars['String'];
  /** 添付ファイル */
  file?: InputMaybe<Scalars['Upload']>;
  /** メールアドレス */
  inquirerEmail: Scalars['String'];
  /** 名前 */
  inquirerName: Scalars['String'];
  /** ご利用予定の方のお名前 */
  userName?: InputMaybe<Scalars['String']>;
};

/** 問い合わせオブジェクト */
export type Inquiry = Node & {
  __typename?: 'Inquiry';
  /** 問い合わせ内容 */
  content: Scalars['String'];
  /** ID */
  id: Scalars['ID'];
  /** 問い合わせ日時 */
  inquiredAt: Scalars['Datetime'];
  /** メールアドレス */
  inquirerEmail: Scalars['String'];
  /** 名前 */
  inquirerName: Scalars['String'];
};

/** 問い合わせ種別 */
export type InquiryType = Node & {
  __typename?: 'InquiryType';
  /** ヘルプ欄 */
  helps?: Maybe<Array<Scalars['String']>>;
  /** ID */
  id: Scalars['ID'];
  /** 問い合わせ種別名 */
  name: Scalars['String'];
  /** FAMサポート宛フラグ */
  toFAMSupport: Scalars['Boolean'];
};

/** レイアウトボタンスタイル */
export enum LayoutButtonStyle {
  Line = 'LINE',
  Paste = 'PASTE'
}

/** レイアウト水平方向ポジション */
export enum LayoutHorizontalPosition {
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT'
}

/** レイアウトセクションオブジェクト */
export type LayoutSection = Node & {
  __typename?: 'LayoutSection';
  /** 詳細 */
  detail: LayoutSectionDetail;
  /** ID */
  id: Scalars['ID'];
  /** 公開フラグ */
  isAvailable: Scalars['Boolean'];
  /** セクションタイプ名 */
  name: Scalars['String'];
  /** 表示順 */
  seq: Scalars['Int'];
};

/** レイアウトバナーグループ詳細 */
export type LayoutSectionBannerGroupDetail = {
  __typename?: 'LayoutSectionBannerGroupDetail';
  /**
   * バナーグループオブジェクト
   * @deprecated `bannerGroupV2`の使用を推奨
   */
  bannerGroup: DesignBannerGroup;
  /** バナーグループオブジェクト */
  bannerGroupV2: DesignBannerGroupV2;
  /** セクションID */
  sectionId: Scalars['ID'];
};

/** ブログセクション詳細 */
export type LayoutSectionBlogDetail = {
  __typename?: 'LayoutSectionBlogDetail';
  /** ブログ */
  blog: Blog;
  /** 表示件数 */
  displayLimit: Scalars['Int'];
  /** 表示ブログ記事リスト */
  displayPosts?: Maybe<Array<BlogPost>>;
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars['String'];
  /** セクションID */
  sectionId: Scalars['ID'];
};

/** レイアウトセクションボタン */
export type LayoutSectionButton = {
  __typename?: 'LayoutSectionButton';
  /** ボタンカラーコード (NULL:テーマカラー) */
  buttonColor?: Maybe<Scalars['String']>;
  /** ボタンスタイル */
  buttonStyle: LayoutButtonStyle;
  /** ボタンテキスト */
  buttonText: Scalars['String'];
  /** ボタンURL */
  buttonURL: Scalars['String'];
  /** ページリンクフラグ */
  isPageLink: Scalars['Boolean'];
};

/** カスタムHTML詳細 */
export type LayoutSectionCustomHtmlDetail = {
  __typename?: 'LayoutSectionCustomHTMLDetail';
  /** HTML */
  html: Scalars['String'];
  /** セクションID */
  sectionId: Scalars['ID'];
};

export type LayoutSectionDetail = LayoutSectionBannerGroupDetail | LayoutSectionBlogDetail | LayoutSectionCustomHtmlDetail | LayoutSectionImageDetail | LayoutSectionImageMovieAndTextDetail | LayoutSectionImageMovieUpperTextDetail | LayoutSectionMemberRegistrationButtonDetail | LayoutSectionMusicDetail | LayoutSectionNewsDetail | LayoutSectionPostedGalleryDetail | LayoutSectionPostedMovieDetail | LayoutSectionTextButtonDetail | LayoutSectionTwitterTimelineDetail;

/** レイアウト画像詳細 */
export type LayoutSectionImageDetail = {
  __typename?: 'LayoutSectionImageDetail';
  /** PC用ファイル */
  pcFile?: Maybe<SharedFile>;
  /** セクションID */
  sectionId: Scalars['ID'];
  /** タブレットSP用ファイル */
  tabletSpFile?: Maybe<SharedFile>;
};

/** 画像・動画とテキストセクション詳細 */
export type LayoutSectionImageMovieAndTextDetail = {
  __typename?: 'LayoutSectionImageMovieAndTextDetail';
  /** ボタン */
  button: LayoutSectionButton;
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** ファイルの表示位置 */
  filePosition: LayoutHorizontalPosition;
  /** セクションID */
  sectionId: Scalars['ID'];
  /** テキスト */
  text: LayoutSectionText;
};

/** 画像・動画上にテキストセクション詳細 */
export type LayoutSectionImageMovieUpperTextDetail = {
  __typename?: 'LayoutSectionImageMovieUpperTextDetail';
  /** ボタン */
  button: LayoutSectionButton;
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** オーバーレイの色コード */
  fileOverlayColor: Scalars['String'];
  /** オーバーレイの不透明度 */
  fileOverlayOpacity: Scalars['Int'];
  /** セクションID */
  sectionId: Scalars['ID'];
  /** テキスト */
  text: LayoutSectionText;
};

/** 会員登録ボタン */
export type LayoutSectionMemberRegistrationButtonDetail = {
  __typename?: 'LayoutSectionMemberRegistrationButtonDetail';
  /** コンテンツテキスト */
  contentText: Scalars['String'];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars['String'];
  /** セクションID */
  sectionId: Scalars['ID'];
};

export enum LayoutSectionMusicContentType {
  Album = 'ALBUM',
  Playlist = 'PLAYLIST',
  Single = 'SINGLE'
}

/** 音楽セクション詳細 */
export type LayoutSectionMusicDetail = {
  __typename?: 'LayoutSectionMusicDetail';
  /** アルバム一覧 */
  albums?: Maybe<Array<MusicAlbum>>;
  /** コンテンツタイプ */
  contentType: LayoutSectionMusicContentType;
  /** 表示件数 */
  displayLimit: Scalars['Int'];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars['String'];
  /** プレイリスト一覧 */
  playlists?: Maybe<Array<MusicPlaylist>>;
  /** セクションID */
  sectionId: Scalars['ID'];
};

/** お知らせセクション詳細 */
export type LayoutSectionNewsDetail = {
  __typename?: 'LayoutSectionNewsDetail';
  /** カテゴリ */
  category?: Maybe<NewsCategory>;
  /** 表示件数 */
  displayLimit: Scalars['Int'];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars['String'];
  /** お知らせリスト取得 */
  news?: Maybe<Array<News>>;
  /** セクションID */
  sectionId: Scalars['ID'];
};

/** 投稿ギャラリーセクション詳細 */
export type LayoutSectionPostedGalleryDetail = {
  __typename?: 'LayoutSectionPostedGalleryDetail';
  /** 表示件数 */
  displayLimit: Scalars['Int'];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 写真管理リスト取得 */
  galleryGroup: GalleryGroup;
  /** 見出しテキスト */
  headerText: Scalars['String'];
  /** セクションID */
  sectionId: Scalars['ID'];
};

/** 投稿動画セクション詳細 */
export type LayoutSectionPostedMovieDetail = {
  __typename?: 'LayoutSectionPostedMovieDetail';
  /** 動画カテゴリ */
  category?: Maybe<MovieCategory>;
  /** 表示件数 */
  displayLimit: Scalars['Int'];
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** 見出しテキスト */
  headerText: Scalars['String'];
  /** 動画リスト取得 */
  movies: Array<Movie>;
  /** セクションID */
  sectionId: Scalars['ID'];
};

/** レイアウトセクションテキスト */
export type LayoutSectionText = {
  __typename?: 'LayoutSectionText';
  /** ファイル */
  file?: Maybe<SharedFile>;
  /** テキスト内容 */
  textContent: Scalars['String'];
  /** テキスト見出し */
  textHeader: Scalars['String'];
  /** テキストの水平方向の揃え位置 */
  textPosition: LayoutHorizontalPosition;
};

/** テキスト・ボタンセクション詳細 */
export type LayoutSectionTextButtonDetail = {
  __typename?: 'LayoutSectionTextButtonDetail';
  /** ボタン */
  button: LayoutSectionButton;
  /** セクションID */
  sectionId: Scalars['ID'];
  /** テキスト */
  text: LayoutSectionText;
};

/** レイアウトTwitterタイムライン */
export type LayoutSectionTwitterTimelineDetail = {
  __typename?: 'LayoutSectionTwitterTimelineDetail';
  /** カラーテーマ */
  colorTheme: TwitterTimelineColorTheme;
  /** height */
  height: Scalars['Int'];
  /** セクションID */
  sectionId: Scalars['ID'];
  /** width */
  width: Scalars['Int'];
};

/** 生配信オブジェクト */
export type LiveBroadcast = Node & {
  __typename?: 'LiveBroadcast';
  /** アーカイブチャット */
  archiveChats?: Maybe<Array<LiveBroadcastChat>>;
  /** 投げ銭可能フラグ */
  canTip: Scalars['Boolean'];
  /** Agora: channel_name */
  channelName: Scalars['String'];
  /** コラボ申請ステータス */
  collaborationRequestStatus?: Maybe<LiveBroadcastCollaborationRequestStatus>;
  /** 概要欄 */
  description?: Maybe<Scalars['String']>;
  /** 終了日時 */
  endedAt?: Maybe<Scalars['Datetime']>;
  /** ID */
  id: Scalars['ID'];
  /** 閲覧可能フラグ */
  isViewable: Scalars['Boolean'];
  /** タイトル */
  name: Scalars['String'];
  /** プレゼントオブジェクト */
  presents?: Maybe<Array<LiveBroadcastPresent>>;
  /** 料金ステータス */
  priceStatus: LiveBroadcastPriceStatus;
  /** ランキング */
  ranking?: Maybe<Array<LiveBroadcastRank>>;
  /** 開始予定日時 */
  scheduleAt: Scalars['Datetime'];
  /** 開始日時 */
  startedAt?: Maybe<Scalars['Datetime']>;
  /** サムネイル */
  thumbnailFile?: Maybe<SharedFile>;
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};


/** 生配信オブジェクト */
export type LiveBroadcastArchiveChatsArgs = {
  duration: Scalars['Int'];
  limit: Scalars['Int'];
};

export type LiveBroadcastChat = LiveBroadcastMessage | LiveBroadcastPresentedStamp;

/** 消費コイン条件プレゼントオブジェクト */
export type LiveBroadcastCoinPresent = LiveBroadcastPresentInfo & {
  __typename?: 'LiveBroadcastCoinPresent';
  /** 消費コイン下限 */
  coinLower: Scalars['Int'];
  /** 消費コイン上限 */
  coinUpper?: Maybe<Scalars['Int']>;
  /** ID */
  id: Scalars['ID'];
  /** 配送フラグ */
  isDelivery: Scalars['Boolean'];
  /** プレゼント名 */
  name: Scalars['String'];
  /** ランダム抽選数 */
  randomCount?: Maybe<Scalars['Int']>;
};

/** 生配信コラボ申請ステータス */
export enum LiveBroadcastCollaborationRequestStatus {
  /** 承認済み */
  Approved = 'APPROVED',
  /** 申請済み */
  Submitted = 'SUBMITTED',
  /** 未申請 */
  Unsubmitted = 'UNSUBMITTED'
}

/** 生配信コネクションオブジェクト */
export type LiveBroadcastConnection = {
  __typename?: 'LiveBroadcastConnection';
  /** エッジ */
  edges: Array<LiveBroadcastEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars['Int'];
};

/** 生配信エッジオブジェクト */
export type LiveBroadcastEdge = Edge & {
  __typename?: 'LiveBroadcastEdge';
  /** カーソル */
  cursor: Scalars['String'];
  /** ノード */
  node: LiveBroadcast;
};

/** 生配信チャットメッセージオブジェクト */
export type LiveBroadcastMessage = {
  __typename?: 'LiveBroadcastMessage';
  /** チャット本文 */
  content: Scalars['String'];
  /** 表示名 */
  displayName: Scalars['String'];
  /** 再生時間(ミリ秒) */
  duration: Scalars['Int'];
};

/** 生配信ソート項目 */
export enum LiveBroadcastOrderField {
  /** 開始予定日時 */
  ScheduleAt = 'SCHEDULE_AT'
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
  __typename?: 'LiveBroadcastPremiumPresent';
  /** ID */
  id: Scalars['ID'];
  /** 配送フラグ */
  isDelivery: Scalars['Boolean'];
  /** プレゼント名 */
  name: Scalars['String'];
  /** ランダム抽選数 */
  randomCount?: Maybe<Scalars['Int']>;
};

/** 生配信プレゼント */
export type LiveBroadcastPresent = LiveBroadcastCoinPresent | LiveBroadcastPremiumPresent | LiveBroadcastRankingPresent;

/** 生配信プレゼントインターフェース */
export type LiveBroadcastPresentInfo = {
  /** ID */
  id?: Maybe<Scalars['ID']>;
  /** 配送フラグ */
  isDelivery: Scalars['Boolean'];
  /** プレゼント名 */
  name: Scalars['String'];
};

/** 生配信スタンププレゼント履歴オブジェクト */
export type LiveBroadcastPresentedStamp = {
  __typename?: 'LiveBroadcastPresentedStamp';
  /** 表示名 */
  displayName: Scalars['String'];
  /** 再生時間(ミリ秒) */
  duration: Scalars['Int'];
  /** プロフィール画像URL */
  profileURL: Scalars['String'];
  /** スタンプ画像URL */
  stampImageURL: Scalars['String'];
  /** スタンプ名 */
  stampName: Scalars['String'];
};

/** 生配信料金ステータス */
export enum LiveBroadcastPriceStatus {
  /** 無料 */
  Free = 'FREE',
  /** 途中まで無料 */
  PartiallyFree = 'PARTIALLY_FREE',
  /** 有料 */
  Premium = 'PREMIUM'
}

/** ランキング */
export type LiveBroadcastRank = {
  __typename?: 'LiveBroadcastRank';
  /** 消費コイン */
  amount: Scalars['Int'];
  member: Member;
  /** 順位 */
  rank: Scalars['Int'];
};

/** ランキング条件プレゼントオブジェクト */
export type LiveBroadcastRankingPresent = LiveBroadcastPresentInfo & {
  __typename?: 'LiveBroadcastRankingPresent';
  /** ID */
  id: Scalars['ID'];
  /** 配送フラグ */
  isDelivery: Scalars['Boolean'];
  /** プレゼント名 */
  name: Scalars['String'];
  /** 下位ランキング */
  rankingLower: Scalars['Int'];
  /** 上位ランキング */
  rankingUpper: Scalars['Int'];
};

/** 生配信用トークンオブジェクト */
export type LiveBroadcastToken = {
  __typename?: 'LiveBroadcastToken';
  /** トークン */
  token: Scalars['String'];
  /** Agora ユーザーID */
  uid: Scalars['String'];
};

/** ロゴ表示位置 */
export enum LogoPosition {
  /** 真ん中寄せ */
  Center = 'CENTER',
  /** 非表示 */
  Hidden = 'HIDDEN',
  /** 左寄せ */
  Left = 'LEFT',
  /** 右寄せ */
  Right = 'RIGHT'
}

/** くじ-Node */
export type Lottery = Node & {
  __typename?: 'Lottery';
  /** お知らせ */
  announcement?: Maybe<LotteryAnnouncement>;
  /** 利用可能範囲 */
  availability: LotteryContentAvailability;
  /** 本文 */
  body: Scalars['String'];
  /** 下部本文 */
  bottomBody: Scalars['String'];
  /** デジタルコンテンツダウンロード期限 */
  digitalContentDownloadDeadline?: Maybe<Scalars['Datetime']>;
  /** 公開終了日時 */
  endAt?: Maybe<Scalars['Datetime']>;
  /** 発送目安 */
  estimatedShipping?: Maybe<Scalars['String']>;
  /** 引換締切日時 */
  exchangeDeadline?: Maybe<Scalars['Datetime']>;
  /** 引換開始日時 */
  exchangeStartAt?: Maybe<Scalars['Datetime']>;
  /** くじID */
  id: Scalars['ID'];
  /** 画像 */
  image?: Maybe<LotteryImage>;
  /**
   * デジタルコンテンツダウンロード可能期間フラグ
   *
   * デジタルコンテンツを獲得していなくても期間中であればTrueになる
   */
  isAvailableForDigitalContentDownload: Scalars['Boolean'];
  /** くじ抽選期間フラグ */
  isAvailableForDraw: Scalars['Boolean'];
  /** 引換受付可能フラグ */
  isExchangeable: Scalars['Boolean'];
  /** 名称 */
  name: Scalars['String'];
  /** 抽選残数 */
  remainingAmount: Scalars['Int'];
  /**
   * シーンLottie
   *
   * くじ単体取得以外では空で返します
   */
  sceneLottie?: Maybe<LotterySceneLottie>;
  /** 配送料 */
  shippingFee?: Maybe<Scalars['Int']>;
  /** 公開開始日時 */
  startAt?: Maybe<Scalars['Datetime']>;
  /** 獲得済みデジタルコンテンツ数 */
  viewerCapturedDigitalContentCount?: Maybe<Scalars['Int']>;
  /** 引換可能賞品数量 */
  viewerExchangeablePrizeQuantity?: Maybe<Scalars['Int']>;
};

/** くじお知らせ-Node */
export type LotteryAnnouncement = Node & {
  __typename?: 'LotteryAnnouncement';
  /** 本文 */
  body: Scalars['String'];
  /** くじお知らせID */
  id: Scalars['ID'];
  /** タイトル */
  title?: Maybe<Scalars['String']>;
};

/** くじ-Connection */
export type LotteryConnection = {
  __typename?: 'LotteryConnection';
  edges?: Maybe<Array<LotteryEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** くじコンテンツ利用可能範囲 */
export type LotteryContentAvailability = {
  __typename?: 'LotteryContentAvailability';
  /** サブスクプランIDリスト */
  subscriptionPlanIds?: Maybe<Array<Scalars['ID']>>;
  /** ユーザーグループ */
  userGroup: LotteryContentAvailabilityUserGroup;
  /** 閲覧者の適用可能フラグ */
  viewerSuitable: Scalars['Boolean'];
};

/** くじコンテンツ利用可能ユーザーグループ */
export enum LotteryContentAvailabilityUserGroup {
  /** 全員 */
  Everyone = 'EVERYONE',
  /** 無料会員, 有料会員 */
  Members = 'MEMBERS',
  /** 有料会員 */
  PaidMembers = 'PAID_MEMBERS'
}

/** くじ抽選結果-Node */
export type LotteryDrawingResult = Node & {
  __typename?: 'LotteryDrawingResult';
  /** 抽選日時 */
  drewAt: Scalars['Datetime'];
  /** 抽選結果ID */
  id: Scalars['ID'];
  /** くじID */
  lotteryId: Scalars['ID'];
  /** 賞品 */
  prize: LotteryPrize;
  /** 順序(N回目) */
  seq: Scalars['Int'];
};

/** くじ抽選結果-Connection */
export type LotteryDrawingResultConnection = {
  __typename?: 'LotteryDrawingResultConnection';
  edges?: Maybe<Array<LotteryDrawingResultEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** くじ抽選結果-Edge */
export type LotteryDrawingResultEdge = Edge & {
  __typename?: 'LotteryDrawingResultEdge';
  cursor: Scalars['String'];
  node?: Maybe<LotteryDrawingResult>;
};

/** くじ-Edge */
export type LotteryEdge = Edge & {
  __typename?: 'LotteryEdge';
  cursor: Scalars['String'];
  node?: Maybe<Lottery>;
};

/** くじ賞品引換-Node */
export type LotteryExchange = Node & {
  __typename?: 'LotteryExchange';
  /** 引換ID */
  id: Scalars['ID'];
  /** くじ */
  lottery: Lottery;
  /** Shop注文 */
  shopOrder: LotteryShopOrder;
};

/** くじ賞品引換-Connection */
export type LotteryExchangeConnection = {
  __typename?: 'LotteryExchangeConnection';
  edges?: Maybe<Array<LotteryExchangeEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** くじ賞品引換-Edge */
export type LotteryExchangeEdge = Edge & {
  __typename?: 'LotteryExchangeEdge';
  cursor: Scalars['String'];
  node?: Maybe<LotteryExchange>;
};

/** くじ画像 */
export type LotteryImage = {
  __typename?: 'LotteryImage';
  /** URL */
  url: LotteryImageUrl;
};

/**
 * くじ画像URL
 *
 * サイズバリエーション(small, medium, largeなど)を増やせるようにオブジェクト構造にしている。
 */
export type LotteryImageUrl = {
  __typename?: 'LotteryImageURL';
  /** デフォルト */
  default: Scalars['String'];
};

/** くじLottie */
export type LotteryLottie = {
  __typename?: 'LotteryLottie';
  /** URL */
  url: Scalars['String'];
};

/** くじ賞品-Node */
export type LotteryPrize = Node & {
  __typename?: 'LotteryPrize';
  /** 賞品ID */
  id: Scalars['ID'];
  /** デジタルフラグ */
  isDigital: Scalars['Boolean'];
  /** レアリティID */
  rarityId: Scalars['ID'];
  /** Shopバリエーション */
  shopVariant: LotteryShopVariant;
  /** Shopバリエーション画像 */
  shopVariantImage?: Maybe<ShopProductImage>;
  /** 獲得済み数量 */
  viewerCapturedQuantity?: Maybe<Scalars['Int']>;
  /** 引換可能数量 */
  viewerExchangeableQuantity?: Maybe<Scalars['Int']>;
};

/** くじ賞品-Connection */
export type LotteryPrizeConnection = {
  __typename?: 'LotteryPrizeConnection';
  edges?: Maybe<Array<LotteryPrizeEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** くじデジタルコンテンツ取得-Input */
export type LotteryPrizeDigitalContentInput = {
  /** 賞品ID */
  prizeId: Scalars['ID'];
};

/** くじデジタルコンテンツ取得-Payload */
export type LotteryPrizeDigitalContentPayload = {
  __typename?: 'LotteryPrizeDigitalContentPayload';
  /** MIMEタイプ */
  mimeType: Scalars['String'];
  /** 賞品ID */
  prizeId: Scalars['ID'];
  /** 署名済みクエリ */
  signedQuery: Scalars['String'];
  /** URL */
  url: Scalars['String'];
};

/** くじ賞品-Edge */
export type LotteryPrizeEdge = Edge & {
  __typename?: 'LotteryPrizeEdge';
  cursor: Scalars['String'];
  node?: Maybe<LotteryPrize>;
};

/** くじレアリティ-Node */
export type LotteryRarity = Node & {
  __typename?: 'LotteryRarity';
  /** レアリティID */
  id: Scalars['ID'];
  /** ラベル */
  label: Scalars['String'];
  /** 賞品数量 */
  prizeQuantity: Scalars['Int'];
  /** Shop製品 */
  shopProduct: LotteryShopProduct;
};

/** くじレアリティ-Connection */
export type LotteryRarityConnection = {
  __typename?: 'LotteryRarityConnection';
  edges?: Maybe<Array<LotteryRarityEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** くじレアリティ-Edge */
export type LotteryRarityEdge = Edge & {
  __typename?: 'LotteryRarityEdge';
  cursor: Scalars['String'];
  node?: Maybe<LotteryRarity>;
};

/** くじシーンLottie */
export type LotterySceneLottie = {
  __typename?: 'LotterySceneLottie';
  /** 排出演出 */
  dispensing?: Maybe<LotteryLottie>;
  /** 抽選演出 */
  drawing?: Maybe<LotteryLottie>;
  /** 待機演出 */
  standby?: Maybe<LotteryLottie>;
};

/** くじShop注文 */
export type LotteryShopOrder = {
  __typename?: 'LotteryShopOrder';
  /** 注文ID */
  id: Scalars['ID'];
  /** アイテム数量 */
  itemQuantity: Scalars['Int'];
  /** オープンロジ出庫 */
  openLogiShipment?: Maybe<ShopOrderOpenLogiShipment>;
  /** 注文日時 */
  orderedAt: Scalars['Datetime'];
};

/** くじShop注文-Input */
export type LotteryShopOrderInput = {
  /** 配送ステータス */
  shippingStatus?: InputMaybe<ShopOrderShippingStatus>;
};

/** くじShop製品 */
export type LotteryShopProduct = {
  __typename?: 'LotteryShopProduct';
  /** 説明文 */
  description?: Maybe<Scalars['String']>;
  /** Shop製品ID */
  id: Scalars['ID'];
  /** 名称 */
  name: Scalars['String'];
};

/** くじShopバリエーション */
export type LotteryShopVariant = {
  __typename?: 'LotteryShopVariant';
  /** ShopバリエーションID */
  id: Scalars['ID'];
  /** 名称 */
  name: Scalars['String'];
};

/** 抽選券-Node */
export type LotteryTicket = Node & {
  __typename?: 'LotteryTicket';
  /** 公開終了日時 */
  endAt?: Maybe<Scalars['Datetime']>;
  /** 抽選回数 */
  frequency: Scalars['Int'];
  /** 抽選券ID */
  id: Scalars['ID'];
  /** 名称 */
  name: Scalars['String'];
  /** 金額 */
  price: Scalars['Int'];
  /** 公開開始日時 */
  startAt?: Maybe<Scalars['Datetime']>;
};

/** 抽選券-Connection */
export type LotteryTicketConnection = {
  __typename?: 'LotteryTicketConnection';
  edges?: Maybe<Array<LotteryTicketEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** 抽選券-Edge */
export type LotteryTicketEdge = Edge & {
  __typename?: 'LotteryTicketEdge';
  cursor: Scalars['String'];
  node?: Maybe<LotteryTicket>;
};

/** メインビジュアル */
export type MainVisual = {
  __typename?: 'MainVisual';
  /** ファイルタイプ */
  fileType: MainVisualFileType;
  /** ファイルリスト */
  files: Array<MainVisualFile>;
};

/** メインビジュアルファイル */
export type MainVisualFile = {
  __typename?: 'MainVisualFile';
  /** ID */
  id: Scalars['ID'];
  /** PC用ファイル */
  pcFile?: Maybe<SharedFile>;
  /** タブレットSP用ファイル */
  tabletSpFile?: Maybe<SharedFile>;
};

/** メインビジュアルタイプ */
export enum MainVisualFileType {
  /** 画像 */
  Image = 'IMAGE',
  /** 動画 */
  Movie = 'MOVIE'
}

export type Member = {
  __typename?: 'Member';
  displayName: Scalars['String'];
  /** 管理者フラグ */
  hasAdminRole: Scalars['Boolean'];
  hasPremiumRole: Scalars['Boolean'];
  id: Scalars['ID'];
  isSentMail: Scalars['Boolean'];
  /** 生配信消費コイン数 */
  liveBroadcastCoinConsumptionAmount: Scalars['Int'];
  membershipNumber?: Maybe<Scalars['String']>;
  /** @deprecated site.membershipCard.prefix と member.membershipNumber の結合で会員番号を表示 */
  number?: Maybe<Scalars['String']>;
  profileURL?: Maybe<Scalars['String']>;
  roleStatuses?: Maybe<Array<RoleStatus>>;
  site?: Maybe<Site>;
  subscriptions?: Maybe<Array<Maybe<UserSubscriptionByCardOrCarrier>>>;
};


export type MemberLiveBroadcastCoinConsumptionAmountArgs = {
  liveBroadcastID: Scalars['ID'];
};

/** メニュータイプ */
export enum MenuType {
  /** ブログ */
  Blog = 'BLOG',
  /** 写真 */
  Gallery = 'GALLERY',
  /** リンク */
  Link = 'LINK',
  /** ログイン */
  Login = 'LOGIN',
  /** 動画 */
  Movie = 'MOVIE',
  /** 音楽 */
  Music = 'MUSIC',
  /** マイページ */
  Mypage = 'MYPAGE',
  /** ニュース */
  News = 'NEWS',
  /** プロフィール */
  Profile = 'PROFILE',
  /** 会員情報 */
  UserInfo = 'USER_INFO',
  /** 会員登録 */
  UserRegister = 'USER_REGISTER'
}

export type Movie = Node & {
  __typename?: 'Movie';
  archiveURL: Scalars['String'];
  /** 動画カテゴリ */
  category?: Maybe<MovieCategory>;
  /** 動画コメントリスト */
  comments: MovieCommentConnection;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** コメント可否フラグ */
  isCommentable: Scalars['Boolean'];
  /** 閲覧可能フラグ */
  isViewable: Scalars['Boolean'];
  /** 生配信詳細 */
  liveBroadcast?: Maybe<LiveBroadcast>;
  name: Scalars['String'];
  releaseDay: Scalars['Date'];
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
  signedQuery: Scalars['String'];
  /** サムネイル */
  thumbnailFile?: Maybe<SharedFile>;
  /** @deprecated thumbnailFileの使用を推奨 */
  thumbnailURL: Scalars['String'];
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};


export type MovieCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MovieCommentOrderInput>;
};

export type MovieCategory = Node & {
  __typename?: 'MovieCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type MovieComment = Node & {
  __typename?: 'MovieComment';
  commenter?: Maybe<Member>;
  /** コメント内容 */
  content: Scalars['String'];
  /** 作成日時 */
  createdAt: Scalars['Datetime'];
  /** ID */
  id: Scalars['ID'];
};

/** 動画コメントコネクションオブジェクト */
export type MovieCommentConnection = {
  __typename?: 'MovieCommentConnection';
  /** エッジ */
  edges: Array<MovieCommentEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 合計コメント数 */
  totalCount: Scalars['Int'];
};

/** 動画コメントエッジオブジェクト */
export type MovieCommentEdge = Edge & {
  __typename?: 'MovieCommentEdge';
  /** カーソル */
  cursor: Scalars['String'];
  /** ノード */
  node: MovieComment;
};

/** 動画コメントソート項目 */
export enum MovieCommentOrderField {
  /** 作成日時 */
  CreatedAt = 'CREATED_AT'
}

/** 動画コメントソート条件入力オブジェクト */
export type MovieCommentOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: MovieCommentOrderField;
};

export type MovieConnection = {
  __typename?: 'MovieConnection';
  /** エッジ */
  edges: Array<MovieEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars['Int'];
};

export type MovieEdge = Edge & {
  __typename?: 'MovieEdge';
  cursor: Scalars['String'];
  node: Movie;
};

export enum MovieOrderField {
  CreatedAt = 'CREATED_AT',
  StartAt = 'START_AT'
}

export type MovieOrderInput = {
  direction: OrderDirection;
  field: MovieOrderField;
};

/** 音楽アルバム-Node */
export type MusicAlbum = Node & {
  __typename?: 'MusicAlbum';
  /** アーティスト名 */
  artistName?: Maybe<Scalars['String']>;
  /** アートワーク */
  artwork?: Maybe<MusicArtwork>;
  /** 利用可能範囲 */
  availability: MusicContentAvailability;
  /** コピーライト */
  copyright?: Maybe<Scalars['String']>;
  /** アルバムID */
  id: Scalars['ID'];
  /** シングルフラグ */
  isSingle: Scalars['Boolean'];
  /** アルバム名 */
  name: Scalars['String'];
  /** リリース日 */
  releaseDate: Scalars['Date'];
  /** 公開開始日時 */
  startAt?: Maybe<Scalars['Datetime']>;
  /** トラック数 */
  trackCount: Scalars['Int'];
  /**
   * トラックリスト
   *
   * アルバム単体取得以外では空で返します
   */
  tracks?: Maybe<MusicTrackConnection>;
};

/** 音楽アルバム-Connection */
export type MusicAlbumConnection = {
  __typename?: 'MusicAlbumConnection';
  edges?: Maybe<Array<MusicAlbumEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** 音楽アルバム-Edge */
export type MusicAlbumEdge = Edge & {
  __typename?: 'MusicAlbumEdge';
  cursor: Scalars['String'];
  node?: Maybe<MusicAlbum>;
};

/** 音楽アートワーク */
export type MusicArtwork = {
  __typename?: 'MusicArtwork';
  /** URL */
  url: MusicArtworkUrl;
};

/**
 * 音楽アートワークURL
 *
 * サイズバリエーション(small, medium, largeなど)を増やせるようにオブジェクト構造にしている。
 */
export type MusicArtworkUrl = {
  __typename?: 'MusicArtworkURL';
  /** デフォルト */
  default: Scalars['String'];
};

/** 音楽コンテンツ利用可能範囲 */
export type MusicContentAvailability = {
  __typename?: 'MusicContentAvailability';
  /** サブスクプランIDリスト */
  subscriptionPlanIds?: Maybe<Array<Scalars['ID']>>;
  /** ユーザーグループ */
  userGroup: MusicContentAvailabilityUserGroup;
  /** 閲覧者の適用可能フラグ */
  viewerSuitable: Scalars['Boolean'];
};

/** 音楽コンテンツ利用可能ユーザーグループ */
export enum MusicContentAvailabilityUserGroup {
  /** 全員 */
  Everyone = 'EVERYONE',
  /** 無料会員, 有料会員 */
  Members = 'MEMBERS',
  /** 有料会員 */
  PaidMembers = 'PAID_MEMBERS'
}

/** 音楽再生イベント-Input */
export type MusicPlayEventInput = {
  /** プレイリストID */
  playlistId?: InputMaybe<Scalars['ID']>;
  /** トラックID */
  trackId: Scalars['ID'];
};

/** 音楽再生イベント-Payload */
export type MusicPlayEventPayload = {
  __typename?: 'MusicPlayEventPayload';
  result: Scalars['Boolean'];
};

/** 音楽プレイバック-Input */
export type MusicPlaybackInput = {
  /** トラックID */
  trackId: Scalars['ID'];
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
  __typename?: 'MusicPlaybackPayload';
  /** 署名済みクエリ */
  signedQuery: Scalars['String'];
  /** トラックID */
  trackId: Scalars['ID'];
  /** URL */
  url: Scalars['String'];
};

/** 音楽プレイリスト-Node */
export type MusicPlaylist = Node & {
  __typename?: 'MusicPlaylist';
  /** アートワーク */
  artwork?: Maybe<MusicArtwork>;
  /** 利用可能範囲 */
  availability: MusicContentAvailability;
  /** 説明 */
  description?: Maybe<Scalars['String']>;
  /** プレイリストID */
  id: Scalars['ID'];
  /** プレイリスト名 */
  name: Scalars['String'];
  /** リリース日 */
  releaseDate: Scalars['Date'];
  /** 公開開始日時 */
  startAt?: Maybe<Scalars['Datetime']>;
  /** トラック数 */
  trackCount: Scalars['Int'];
  /**
   * トラックリスト
   *
   * プレイリスト単体取得以外では空で返します
   */
  tracks?: Maybe<MusicTrackConnection>;
};

/** 音楽プレイリスト-Connection */
export type MusicPlaylistConnection = {
  __typename?: 'MusicPlaylistConnection';
  edges?: Maybe<Array<MusicPlaylistEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** 音楽プレイリスト-Edge */
export type MusicPlaylistEdge = Edge & {
  __typename?: 'MusicPlaylistEdge';
  cursor: Scalars['String'];
  node?: Maybe<MusicPlaylist>;
};

/** 音楽トラック-Node */
export type MusicTrack = Node & {
  __typename?: 'MusicTrack';
  /** アルバムID */
  albumId: Scalars['ID'];
  /** アーティスト名 */
  artistName?: Maybe<Scalars['String']>;
  /** アートワーク */
  artwork?: Maybe<MusicArtwork>;
  /** 利用可能範囲 */
  availability: MusicContentAvailability;
  /** コピーライト */
  copyright?: Maybe<Scalars['String']>;
  /** 再生時間(ms) */
  durationMS?: Maybe<Scalars['Int']>;
  /** トラックID */
  id: Scalars['ID'];
  /** 歌詞 */
  lyrics?: Maybe<Scalars['String']>;
  /** トラック名 */
  name: Scalars['String'];
  /** 公開開始日時 */
  startAt?: Maybe<Scalars['Datetime']>;
  /** トラック番号 */
  trackNumber: Scalars['Int'];
};

/** 音楽トラック-Connection */
export type MusicTrackConnection = {
  __typename?: 'MusicTrackConnection';
  edges?: Maybe<Array<MusicTrackEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** 音楽トラック-Edge */
export type MusicTrackEdge = Edge & {
  __typename?: 'MusicTrackEdge';
  cursor: Scalars['String'];
  node?: Maybe<MusicTrack>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** コイン購入 */
  acquireCoin: CoinAcquisitionHistory;
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
  cancelSubscription?: Maybe<UserSubscriptionByCardOrCarrier>;
  changeSubscriptionPaymentMethodToCard?: Maybe<UserSubscriptionByCard>;
  changeSubscriptionPaymentMethodToCarrier?: Maybe<CarrierAuth>;
  createMember?: Maybe<Member>;
  /** RTMトークン作成 */
  createRTMToken?: Maybe<LiveBroadcastToken>;
  /** 視聴者用のトークン作成 */
  createSubscriberRTCToken?: Maybe<LiveBroadcastToken>;
  createUserByEmail?: Maybe<User>;
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
  inquire: Scalars['Boolean'];
  /** オフィシャル問い合わせ作成 */
  inquireOfficial: Scalars['Boolean'];
  /** くじデジタルコンテンツ取得 */
  lotteryPrizeDigitalContent?: Maybe<LotteryPrizeDigitalContentPayload>;
  /** 音楽再生イベント送信 */
  musicPlayEvent?: Maybe<MusicPlayEventPayload>;
  /** 音楽プレイバックを取得 */
  musicPlayback?: Maybe<MusicPlaybackPayload>;
  /** スタンプ購入 */
  purchaseStamp: Stamp;
  registerSubscriptionByCard?: Maybe<UserSubscriptionByCard>;
  registerSubscriptionByCarrier?: Maybe<CarrierAuth>;
  removeCreditCard?: Maybe<CreditCard>;
  resendVerifyMail?: Maybe<User>;
  /** 生配信コラボ申請送信 */
  submitLiveBroadcastCollaborationRequest?: Maybe<LiveBroadcastCollaborationRequestStatus>;
  updateDisplayName?: Maybe<Member>;
  /** @deprecated updateUserを使用 */
  updateEmail?: Maybe<User>;
  /** @deprecated updateUserを使用 */
  updateFamId?: Maybe<User>;
  updateIsSentMail?: Maybe<Member>;
  /** パスワード更新 */
  updatePassword?: Maybe<User>;
  updateProfileImage?: Maybe<Member>;
  /** ユーザー更新 */
  updateUser?: Maybe<User>;
  updateUserAndCreateMember?: Maybe<User>;
  updateUserDetail?: Maybe<UserDetail>;
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
  broadcastID: Scalars['ID'];
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
  uid: Scalars['String'];
};


export type MutationCreateSubscriberRtcTokenArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUserByEmailArgs = {
  input: CreateUserByEmailInput;
};


export type MutationCreateUserBySnsArgs = {
  input: CreateUserBySnsInput;
};


export type MutationDeleteBlogPostCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGalleryCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberArgs = {
  input?: InputMaybe<DeleteMemberInput>;
};


export type MutationDeleteMovieCommentArgs = {
  id: Scalars['ID'];
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
  broadcastID: Scalars['ID'];
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
  password: Scalars['String'];
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
  id: Scalars['ID'];
};


export type MutationViewLiveBroadcastArgs = {
  broadcastID: Scalars['ID'];
};


export type MutationViewMovieArgs = {
  id: Scalars['ID'];
};

export type News = Node & {
  __typename?: 'News';
  /** 認証フォーム情報 */
  authForm?: Maybe<NewsAuthForm>;
  body?: Maybe<Scalars['String']>;
  /** カテゴリ */
  category?: Maybe<NewsCategory>;
  id: Scalars['ID'];
  /** 無料フラグ */
  isFree: Scalars['Boolean'];
  /** 閲覧可能フラグ */
  isViewable: Scalars['Boolean'];
  releaseDay: Scalars['Date'];
  subject: Scalars['String'];
  /** 閲覧可能範囲設定 */
  viewableScope: ContentsViewableScope;
};

/** お知らせ認証フォーム情報 */
export type NewsAuthForm = {
  __typename?: 'NewsAuthForm';
  /** スマホ用遷移先URL */
  spURL?: Maybe<Scalars['String']>;
  /** 隠しタグ */
  tags?: Maybe<Array<NewsAuthFormTag>>;
  /** 遷移先URL */
  url: Scalars['String'];
};

/** お知らせ認証フォームタグ */
export type NewsAuthFormTag = {
  __typename?: 'NewsAuthFormTag';
  /** タグ名 */
  name: Scalars['String'];
  /** タグ値 */
  value: Scalars['String'];
};

/** お知らせカテゴリ */
export type NewsCategory = {
  __typename?: 'NewsCategory';
  /** ID */
  id: Scalars['ID'];
  /** カテゴリ名 */
  name: Scalars['String'];
  /** スラッグ */
  slug: Scalars['String'];
};

export type NewsConnection = {
  __typename?: 'NewsConnection';
  /** エッジ */
  edges: Array<NewsEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
  /** 総件数 */
  totalCount: Scalars['Int'];
};

export type NewsEdge = Edge & {
  __typename?: 'NewsEdge';
  cursor: Scalars['String'];
  node: News;
};

export enum NewsOrderField {
  CreatedAt = 'CREATED_AT',
  StartAt = 'START_AT'
}

export type NewsOrderInput = {
  direction: OrderDirection;
  field: NewsOrderField;
};

export type NextPaymentMethod = CardPayment | CarrierPayment;

export type Node = {
  id: Scalars['ID'];
};

/** 会員番号表示位置 */
export enum NumberPosition {
  /** 真ん中寄せ */
  Center = 'CENTER',
  /** 左寄せ */
  Left = 'LEFT',
  /** 右寄せ */
  Right = 'RIGHT'
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** 有料コインステータスオブジェクト */
export type PaidCoinStatus = Node & {
  __typename?: 'PaidCoinStatus';
  /** コイン残枚数 */
  balance: Scalars['Int'];
  /** 有効期限 */
  expireAt: Scalars['Datetime'];
  /** ID */
  id: Scalars['ID'];
};

/** 支払いカード情報 */
export type PaymentCard = {
  __typename?: 'PaymentCard';
  /** カードID */
  cardId: Scalars['ID'];
};

/** 支払いカード情報-Input */
export type PaymentCardInput = {
  /** カードID */
  cardId: Scalars['ID'];
};

export enum PaymentGroup {
  /** カード */
  Card = 'CARD',
  /** キャリア */
  Carrier = 'CARRIER'
}

/** 支払履歴コネクションオブジェクト */
export type PaymentHistoryConnection = {
  __typename?: 'PaymentHistoryConnection';
  /** エッジ */
  edges: Array<PaymentHistoryEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
};

/** 支払履歴 */
export type PaymentHistoryEdge = CoinAcquisitionHistoryEdge | SubscriptionPaymentHistoryEdge;

/** 支払履歴ソート条件フィールド */
export enum PaymentHistoryOrderField {
  /** 支払履歴作成日時 */
  CreatedAt = 'CREATED_AT'
}

/** 支払履歴ソート条件入力オブジェクト */
export type PaymentHistoryOrderInput = {
  /** ソート順 */
  direction: OrderDirection;
  /** ソート項目 */
  field: PaymentHistoryOrderField;
};

export type PaymentMethod = {
  paymentAt: Scalars['Datetime'];
};

export type PaymentSchedule = {
  __typename?: 'PaymentSchedule';
  endDay?: Maybe<Scalars['Date']>;
  firstStartDay: Scalars['Date'];
  lastStartDay: Scalars['Date'];
};

/** スタンプ購入入力オブジェクト */
export type PurchaseStampInput = {
  /** 生配信ID */
  liveBroadcastId: Scalars['ID'];
  /** スタンプID */
  stampId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /** ブログ詳細スラッグ取得 */
  blog?: Maybe<Blog>;
  /** 記事詳細取得 */
  blogPost?: Maybe<BlogPost>;
  /** 獲得したデジタルコンテンツくじ一覧取得 */
  capturedDigitalContentLotteries: LotteryConnection;
  coinProducts?: Maybe<Array<CoinProduct>>;
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
  slug: Scalars['String'];
};


export type QueryBlogPostArgs = {
  id: Scalars['ID'];
};


export type QueryCapturedDigitalContentLotteriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryExchangeableLotteriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGalleryArgs = {
  id: Scalars['ID'];
};


export type QueryGalleryGroupArgs = {
  slug: Scalars['String'];
};


export type QueryLiveBroadcastArgs = {
  id: Scalars['ID'];
};


export type QueryLotteriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryLotteryArgs = {
  id: Scalars['ID'];
};


export type QueryLotteryDrawingResultsArgs = {
  ticketPurchaseId: Scalars['ID'];
};


export type QueryLotteryExchangeArgs = {
  id: Scalars['ID'];
};


export type QueryLotteryExchangesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  shopOrder: LotteryShopOrderInput;
};


export type QueryLotteryPrizeArgs = {
  id: Scalars['ID'];
};


export type QueryLotteryPrizesArgs = {
  lotteryId: Scalars['ID'];
  rarityId?: InputMaybe<Scalars['ID']>;
};


export type QueryLotteryRaritiesArgs = {
  lotteryId: Scalars['ID'];
};


export type QueryLotteryRarityArgs = {
  id: Scalars['ID'];
};


export type QueryLotteryTicketArgs = {
  id: Scalars['ID'];
};


export type QueryLotteryTicketsArgs = {
  lotteryId: Scalars['ID'];
};


export type QueryMovieArgs = {
  id: Scalars['ID'];
};


export type QueryMusicAlbumArgs = {
  id: Scalars['ID'];
};


export type QueryMusicAlbumsArgs = {
  after?: InputMaybe<Scalars['String']>;
  albumType?: InputMaybe<AlbumType>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryMusicPlaylistArgs = {
  id: Scalars['ID'];
};


export type QueryMusicPlaylistsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryMusicTrackArgs = {
  id: Scalars['ID'];
};


export type QueryNewsArgs = {
  id: Scalars['ID'];
};


export type QueryShopOrderArgs = {
  id: Scalars['ID'];
};


export type QueryStampArgs = {
  id: Scalars['ID'];
};

export type RegisterSubscriptionByCardInput = {
  cardId: Scalars['ID'];
  planId: Scalars['ID'];
};

export type RegisterSubscriptionByCarrierInput = {
  carrierCompany: CarrierCompany;
  /** 失敗リダイレクトパス */
  failurePath?: InputMaybe<Scalars['String']>;
  /** 失敗URL（deprecated: failureRedirectPathを使用） */
  failureReturnURL?: InputMaybe<Scalars['String']>;
  planId: Scalars['ID'];
  /** 成功リダイレクトパス */
  successPath?: InputMaybe<Scalars['String']>;
  /** 成功URL（deprecated: successRedirectPathを使用） */
  successReturnURL?: InputMaybe<Scalars['String']>;
};

export type RemoveCreditCardInput = {
  id: Scalars['ID'];
};

export type ResendVerifyMail = {
  verifyURL: Scalars['String'];
};

export enum RoleName {
  Free = 'FREE',
  Premium = 'PREMIUM'
}

export type RoleStatus = {
  __typename?: 'RoleStatus';
  expireAt?: Maybe<Scalars['Datetime']>;
  name: RoleName;
};

export type SharedFile = Node & {
  __typename?: 'SharedFile';
  /** 代替テキスト */
  alternativeContent: Scalars['String'];
  /** ID */
  id: Scalars['ID'];
  /** ファイル名 */
  name: Scalars['String'];
  /** アップロード日時 */
  uploadedAt: Scalars['Datetime'];
  /** URL */
  url: Scalars['String'];
};

/**
 * Shop画像URL
 *
 * サイズバリエーション(small, medium, largeなど)を増やせるようにオブジェクト構造にしている。
 */
export type ShopImageUrl = {
  __typename?: 'ShopImageURL';
  /** デフォルト */
  default: Scalars['String'];
};

/** Shop注文 */
export type ShopOrder = {
  __typename?: 'ShopOrder';
  /** 注文ID */
  id: Scalars['ID'];
  /** アイテムリスト */
  items: Array<ShopOrderItem>;
  /** オープンロジ出庫 */
  openLogiShipment?: Maybe<ShopOrderOpenLogiShipment>;
  /** 注文日時 */
  orderedAt: Scalars['Datetime'];
  /** 支払い情報 */
  payment?: Maybe<ShopOrderPayment>;
  /** 配送情報 */
  shipping?: Maybe<ShopOrderShipping>;
  /** 小計金額 */
  subtotalPrice: Scalars['Int'];
  /** 合計金額 */
  totalPrice: Scalars['Int'];
  /** 合計配送料 */
  totalShippingFee: Scalars['Int'];
};

/** Shop注文アイテム */
export type ShopOrderItem = {
  __typename?: 'ShopOrderItem';
  /** 注文アイテムID */
  id: Scalars['ID'];
  /** 製品 */
  product: ShopOrderProduct;
  /** 数量 */
  quantity: Scalars['Int'];
  /** 製品規格 */
  variant: ShopOrderVariant;
};

/** Shop注文オープンロジ出庫 */
export type ShopOrderOpenLogiShipment = {
  __typename?: 'ShopOrderOpenLogiShipment';
  /** 発送予定日 */
  assignedShippingDate?: Maybe<Scalars['Date']>;
  /** 配送会社 */
  deliveryCarrier?: Maybe<ShopOrderOpenLogiShipmentDeliveryCarrier>;
  /** 発送日時 */
  shippedAt?: Maybe<Scalars['Datetime']>;
  /** 伝票番号（追跡番号）略式 */
  trackingCode?: Maybe<Scalars['String']>;
  /** 配送状況取得URL */
  url?: Maybe<Scalars['String']>;
};

export enum ShopOrderOpenLogiShipmentDeliveryCarrier {
  /** 佐川急便 */
  Sagawa = 'SAGAWA',
  /** ヤマト運輸 */
  Yamato = 'YAMATO'
}

/** Shop注文支払い */
export type ShopOrderPayment = {
  __typename?: 'ShopOrderPayment';
  /** 支払い日時 */
  paidAt: Scalars['Datetime'];
  /** 支払いカード */
  paymentCard?: Maybe<PaymentCard>;
};

/** Shop注文製品 */
export type ShopOrderProduct = {
  __typename?: 'ShopOrderProduct';
  /** 製品ID */
  id: Scalars['ID'];
  /** 名称 */
  name: Scalars['String'];
};

/** Shop注文配送 */
export type ShopOrderShipping = {
  __typename?: 'ShopOrderShipping';
  /** 番地 */
  address1: Scalars['String'];
  /** 建物名・部屋番号 */
  address2?: Maybe<Scalars['String']>;
  /** 市区町村 */
  city: Scalars['String'];
  /** 国 */
  country: Scalars['String'];
  /** 名前 */
  firstName: Scalars['String'];
  /** 苗字 */
  lastName: Scalars['String'];
  /** 電話番号 */
  phoneNumber: Scalars['String'];
  /** 郵便番号 */
  postcode: Scalars['String'];
  /** 都道府県 */
  prefecture: Scalars['String'];
};

/** Shop注文配送ステータス */
export enum ShopOrderShippingStatus {
  /** 発送済み */
  Shipped = 'SHIPPED',
  /** 未発送 */
  Unshipped = 'UNSHIPPED'
}

/** Shop注文製品規格 */
export type ShopOrderVariant = {
  __typename?: 'ShopOrderVariant';
  /** 製品規格ID */
  id: Scalars['ID'];
  /** 画像 */
  image?: Maybe<ShopProductImage>;
  /** 名称 */
  name: Scalars['String'];
};

/** Shop製品画像 */
export type ShopProductImage = {
  __typename?: 'ShopProductImage';
  /** URL */
  url: ShopImageUrl;
};

export type ShopShippingAddressInput = {
  /** 番地 */
  address1: Scalars['String'];
  /** 建物名・部屋番号 */
  address2?: InputMaybe<Scalars['String']>;
  /** 市区町村 */
  city: Scalars['String'];
  /** 国 */
  country: Scalars['String'];
  /** 名前 */
  firstName: Scalars['String'];
  /** 苗字 */
  lastName: Scalars['String'];
  /** 電話番号 */
  phoneNumber: Scalars['String'];
  /** 郵便番号 */
  postcode: Scalars['String'];
  /** 都道府県 */
  prefecture: Scalars['String'];
};

export enum SignUpMethod {
  Email = 'EMAIL',
  Google = 'GOOGLE',
  Twitter = 'TWITTER'
}

export enum SignUpSns {
  Google = 'GOOGLE',
  Twitter = 'TWITTER'
}

/** アーカイブ動画ファイル 署名付きCookie */
export type SignedCookie = {
  __typename?: 'SignedCookie';
  /** 有効日時 */
  expireAt: Scalars['Datetime'];
  /** Cookie設定値 */
  values: Array<CookieValue>;
};

export type Site = Node & {
  __typename?: 'Site';
  /** コピーライト */
  copyright: Scalars['String'];
  /** サイト概要 */
  description: Scalars['String'];
  /** デザイン */
  design: Design;
  /** サイトドメイン */
  domain: Scalars['String'];
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
  googleAnalyticsId: Scalars['String'];
  /** アイコン画像 */
  iconImageFile?: Maybe<SharedFile>;
  /** ID */
  id: Scalars['ID'];
  /** Instagram ID */
  instagramId: Scalars['String'];
  /** 公開フラグ */
  isAvailable: Scalars['Boolean'];
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
  name: Scalars['String'];
  /** Get news by a site */
  news: NewsConnection;
  /** お知らせカテゴリ */
  newsCategories?: Maybe<Array<NewsCategory>>;
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
  tiktokId: Scalars['String'];
  /** Twitter ID */
  twitterId: Scalars['String'];
  /** YouTube URL */
  youtubeURL: Scalars['String'];
};


export type SiteGalleriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GalleryOrderInput>;
};


export type SiteLiveBroadcastsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiveBroadcastOrderInput>;
};


export type SiteMoviesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MovieOrderInput>;
};


export type SiteNewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewsOrderInput>;
};


export type SiteStampsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** 会員証 */
export type SiteMembershipCard = {
  __typename?: 'SiteMembershipCard';
  /** 背景画像ファイル */
  backgroundImageFile?: Maybe<SharedFile>;
  /** ロゴ画像ファイル */
  logoImageFile?: Maybe<SharedFile>;
  /** ロゴ表示位置 */
  logoPosition: LogoPosition;
  /** 会員番号文字色コード */
  numberColor: Scalars['String'];
  /** 会員番号表示位置 */
  numberPosition: NumberPosition;
  /** 会員番号プレフィックス（上2文字） */
  prefix: Scalars['String'];
};

/** 会員証番号 */
export type SiteMembershipNumber = {
  __typename?: 'SiteMembershipNumber';
  /** 会員番号プレフィックス（上2文字） */
  prefix: Scalars['String'];
  /** 開始番号 */
  start: Scalars['Int'];
};

/** サイトプロフィール */
export type SiteProfile = {
  __typename?: 'SiteProfile';
  /** サイトプロフィール別名 */
  alias: Scalars['String'];
  /** サイトプロフィール概要 */
  description: Scalars['String'];
  /** サイトプロフィールID */
  id: Scalars['ID'];
  /** プロフィール画像 */
  imageFile?: Maybe<SharedFile>;
  /** サイトプロフィール名 */
  name: Scalars['String'];
};

/** スタンプオブジェクト */
export type Stamp = Node & {
  __typename?: 'Stamp';
  /** 必要コイン枚数 */
  amount: Scalars['Int'];
  /** ID */
  id: Scalars['ID'];
  /** アイコン画像 */
  imageFile: SharedFile;
  /** スタンプ名 */
  name: Scalars['String'];
  /** 表示順 */
  seq: Scalars['Int'];
};

/** スタンプコネクションオブジェクト */
export type StampConnection = {
  __typename?: 'StampConnection';
  /** エッジ */
  edges: Array<StampEdge>;
  /** ページ情報 */
  pageInfo: PageInfo;
};

/** スタンプエッジオブジェクト */
export type StampEdge = Edge & {
  __typename?: 'StampEdge';
  /** カーソル */
  cursor: Scalars['String'];
  /** ノード */
  node: Stamp;
};

/** スタンプソート項目 */
export enum StampOrderField {
  /** 表示順 */
  Seq = 'SEQ'
}

/** サブスク解約理由 */
export type SubscriptionCancelReason = {
  __typename?: 'SubscriptionCancelReason';
  /** 解約理由ID */
  id: Scalars['ID'];
  /** 解約理由 */
  name: Scalars['String'];
};

/** サブスク支払履歴オブジェクト */
export type SubscriptionPaymentHistory = Node & {
  __typename?: 'SubscriptionPaymentHistory';
  /** 支払総額 */
  amount: Scalars['Int'];
  /** 支払履歴作成日時 */
  createdAt: Scalars['Datetime'];
  /** ID */
  id: Scalars['ID'];
  /** サブスク対象サイト */
  site: Site;
};

/** サブスク支払履歴エッジオブジェクト */
export type SubscriptionPaymentHistoryEdge = Edge & {
  __typename?: 'SubscriptionPaymentHistoryEdge';
  /** カーソル */
  cursor: Scalars['String'];
  /** ノード */
  node: SubscriptionPaymentHistory;
};

/** サブスク支払いタイミング */
export enum SubscriptionPaymentTiming {
  /** 毎月 */
  Monthly = 'MONTHLY',
  /** 毎年 */
  Yearly = 'YEARLY'
}

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  /** 月額料金 */
  amount: Scalars['Int'];
  /**
   * 利用可能機能
   * @deprecated 機能管理v2移行のためfeaturesに移行
   */
  availableFunction?: Maybe<SubscriptionPlanAvailableFunction>;
  /** 利用可能支払いグループ */
  availablePaymentGroups: Array<PaymentGroup>;
  /** プラン詳細 */
  description: Scalars['String'];
  /** プラン機能一覧v2 */
  features: Array<Feature>;
  id: Scalars['ID'];
  /** 契約可能フラグ */
  isAvailableForContract: Scalars['Boolean'];
  /** 会員証デザイン */
  membershipCardDesign?: Maybe<SubscriptionPlanMembershipCardDesign>;
  name: Scalars['String'];
  /** 支払いタイミング */
  paymentTiming: SubscriptionPaymentTiming;
};

/** サブスクリプションプラン利用可能機能 */
export type SubscriptionPlanAvailableFunction = {
  __typename?: 'SubscriptionPlanAvailableFunction';
  /** ブログリスト */
  blogs?: Maybe<Array<Blog>>;
  /** 写真管理リスト */
  galleryGroups?: Maybe<Array<GalleryGroup>>;
  /** 動画表示名 */
  movieDisplayName: Scalars['String'];
};

/** 会員証デザイン(背景色ver) */
export type SubscriptionPlanMembershipCardBackgroundColorDesign = {
  __typename?: 'SubscriptionPlanMembershipCardBackgroundColorDesign';
  /** 背景色コード */
  backgroundColor: Scalars['String'];
  /** ロゴ画像ファイル */
  logoImageFile?: Maybe<SharedFile>;
  /** ロゴ表示位置 */
  logoPosition: LogoPosition;
  /** 会員番号文字色コード */
  numberColor: Scalars['String'];
  /** 会員番号表示位置 */
  numberPosition: NumberPosition;
};

/** 会員証デザイン(背景画像ver) */
export type SubscriptionPlanMembershipCardBackgroundImageDesign = {
  __typename?: 'SubscriptionPlanMembershipCardBackgroundImageDesign';
  /** 背景画像ファイル */
  backgroundImageFile?: Maybe<SharedFile>;
  /** ロゴ画像ファイル */
  logoImageFile?: Maybe<SharedFile>;
  /** ロゴ表示位置 */
  logoPosition: LogoPosition;
  /** 会員番号文字色コード */
  numberColor: Scalars['String'];
  /** 会員番号表示位置 */
  numberPosition: NumberPosition;
};

/** 会員証デザイン */
export type SubscriptionPlanMembershipCardDesign = SubscriptionPlanMembershipCardBackgroundColorDesign | SubscriptionPlanMembershipCardBackgroundImageDesign;

/** Twitterタイムラインカラーテーマ */
export enum TwitterTimelineColorTheme {
  /** ダーク */
  Dark = 'DARK',
  /** ライト */
  Light = 'LIGHT'
}

export type UpdateDisplayNameInput = {
  displayName: Scalars['String'];
};

export type UpdateEmailInput = {
  email: Scalars['String'];
  verifyURL: Scalars['String'];
};

export type UpdateFamIdInput = {
  famId: Scalars['String'];
};

export type UpdateIsSentMailInput = {
  isSentMail: Scalars['Boolean'];
};

export type UpdateProfileImageInput = {
  file?: InputMaybe<Scalars['Upload']>;
};

export type UpdateUserDetailInput = {
  birthday: Scalars['Date'];
  block: Scalars['String'];
  building?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  municipality: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  postCode: Scalars['String'];
  prefecture: Scalars['String'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  famId?: InputMaybe<Scalars['String']>;
  verifyURL?: InputMaybe<Scalars['String']>;
};

export type User = Node & {
  __typename?: 'User';
  /** コイン履歴 */
  coinHistories: CoinHistoryConnection;
  creditCards?: Maybe<Array<Maybe<CreditCard>>>;
  customToken?: Maybe<Scalars['String']>;
  detail?: Maybe<UserDetail>;
  email?: Maybe<Scalars['String']>;
  famId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isVerifiedEmail: Scalars['Boolean'];
  members?: Maybe<Array<Maybe<Member>>>;
  /** 有料コインステータスリスト取得 */
  paidCoinStatuses?: Maybe<Array<PaidCoinStatus>>;
  /** 支払履歴リスト */
  paymentHistories: PaymentHistoryConnection;
  signUpMethod: SignUpMethod;
  subscriptions?: Maybe<Array<Maybe<UserSubscriptionByCardOrCarrier>>>;
  /** 合計コイン残高 */
  totalCoinBalance: Scalars['Int'];
};


export type UserCoinHistoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CoinHistoryOrderInput>;
};


export type UserMembersArgs = {
  siteIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type UserPaidCoinStatusesArgs = {
  expireAtTo: Scalars['Datetime'];
};


export type UserPaymentHistoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaymentHistoryOrderInput>;
};


export type UserSubscriptionsArgs = {
  planIDs?: InputMaybe<Array<Scalars['ID']>>;
};

export type UserDetail = {
  __typename?: 'UserDetail';
  birthday: Scalars['Date'];
  block: Scalars['String'];
  building?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  municipality: Scalars['String'];
  /** 電話番号 */
  phoneNumber?: Maybe<Scalars['String']>;
  postCode: Scalars['String'];
  prefecture: Scalars['String'];
};

export type UserSubscription = {
  cancelAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['ID'];
  nextPaymentDay: Scalars['Date'];
  nextPaymentMethod?: Maybe<NextPaymentMethod>;
  plan: SubscriptionPlan;
  startAt: Scalars['Datetime'];
  /** ステータス */
  status: Scalars['String'];
  suspendedAt?: Maybe<Scalars['Datetime']>;
};

export type UserSubscriptionByCard = UserSubscription & {
  __typename?: 'UserSubscriptionByCard';
  cancelAt?: Maybe<Scalars['Datetime']>;
  creditCard?: Maybe<CreditCard>;
  id: Scalars['ID'];
  nextPaymentDay: Scalars['Date'];
  nextPaymentMethod?: Maybe<NextPaymentMethod>;
  plan: SubscriptionPlan;
  startAt: Scalars['Datetime'];
  /** ステータス */
  status: Scalars['String'];
  suspendedAt?: Maybe<Scalars['Datetime']>;
};

export type UserSubscriptionByCardOrCarrier = UserSubscriptionByCard | UserSubscriptionByCarrier;

export type UserSubscriptionByCarrier = UserSubscription & {
  __typename?: 'UserSubscriptionByCarrier';
  cancelAt?: Maybe<Scalars['Datetime']>;
  carrierCompany: CarrierCompany;
  id: Scalars['ID'];
  nextPaymentDay: Scalars['Date'];
  nextPaymentMethod?: Maybe<NextPaymentMethod>;
  plan: SubscriptionPlan;
  startAt: Scalars['Datetime'];
  /** ステータス */
  status: Scalars['String'];
  suspendedAt?: Maybe<Scalars['Datetime']>;
};

export type VefifyEmailInput = {
  token: Scalars['String'];
};

/** コンテンツ閲覧可能範囲 */
export enum ViewableScopeType {
  /** 全会員公開 */
  AllMember = 'ALL_MEMBER',
  /** 有料会員のみ */
  PremiumMember = 'PREMIUM_MEMBER',
  /** 全体公開 */
  Public = 'PUBLIC'
}

export type BlogCategoryFragment = { __typename?: 'BlogCategory', id: string, name: string } & { ' $fragmentName'?: 'BlogCategoryFragment' };

export type BlogPostFragment = { __typename?: 'BlogPost', id: string, subject: string, category?: (
    { __typename?: 'BlogCategory' }
    & { ' $fragmentRefs'?: { 'BlogCategoryFragment': BlogCategoryFragment } }
  ) | null, thumbnailFile?: (
    { __typename?: 'SharedFile' }
    & { ' $fragmentRefs'?: { 'SharedFileFragment': SharedFileFragment } }
  ) | null } & { ' $fragmentName'?: 'BlogPostFragment' };

export type BlogPostConnectionFragment = { __typename?: 'BlogPostConnection', totalCount: number, pageInfo: (
    { __typename?: 'PageInfo' }
    & { ' $fragmentRefs'?: { 'PageInfoFragment': PageInfoFragment } }
  ), edges: Array<{ __typename?: 'BlogPostEdge', cursor: string, node: (
      { __typename?: 'BlogPost' }
      & { ' $fragmentRefs'?: { 'BlogPostFragment': BlogPostFragment } }
    ) }> } & { ' $fragmentName'?: 'BlogPostConnectionFragment' };

export type PageInfoFragment = { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } & { ' $fragmentName'?: 'PageInfoFragment' };

export type SharedFileFragment = { __typename?: 'SharedFile', id: string, url: string, alternativeContent: string } & { ' $fragmentName'?: 'SharedFileFragment' };

export type GalleryContentFragment = { __typename?: 'GalleryContent', id: string, contentFile: (
    { __typename?: 'SharedFile' }
    & { ' $fragmentRefs'?: { 'SharedFileFragment': SharedFileFragment } }
  ) } & { ' $fragmentName'?: 'GalleryContentFragment' };

export type GalleryFragment = { __typename?: 'Gallery', id: string, name: string, releaseDay: any, isViewable: boolean, contents?: Array<(
    { __typename?: 'GalleryContent' }
    & { ' $fragmentRefs'?: { 'GalleryContentFragment': GalleryContentFragment } }
  )> | null } & { ' $fragmentName'?: 'GalleryFragment' };

export type GalleryConnectionFragment = { __typename?: 'GalleryConnection', totalCount: number, pageInfo: (
    { __typename?: 'PageInfo' }
    & { ' $fragmentRefs'?: { 'PageInfoFragment': PageInfoFragment } }
  ), edges: Array<{ __typename?: 'GalleryEdge', cursor: string, node: (
      { __typename?: 'Gallery' }
      & { ' $fragmentRefs'?: { 'GalleryFragment': GalleryFragment } }
    ) }> } & { ' $fragmentName'?: 'GalleryConnectionFragment' };

export type BlogQueryVariables = Exact<{
  slug: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type BlogQuery = { __typename?: 'Query', blog?: { __typename?: 'Blog', id: string, posts: (
      { __typename?: 'BlogPostConnection' }
      & { ' $fragmentRefs'?: { 'BlogPostConnectionFragment': BlogPostConnectionFragment } }
    ) } | null };

export type GalleryGroupQueryVariables = Exact<{
  slug: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type GalleryGroupQuery = { __typename?: 'Query', galleryGroup?: { __typename?: 'GalleryGroup', id: string, galleries: (
      { __typename?: 'GalleryConnection' }
      & { ' $fragmentRefs'?: { 'GalleryConnectionFragment': GalleryConnectionFragment } }
    ) } | null };

export const PageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PageInfoFragment, unknown>;
export const BlogCategoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogCategory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<BlogCategoryFragment, unknown>;
export const SharedFileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SharedFile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SharedFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeContent"}}]}}]} as unknown as DocumentNode<SharedFileFragment, unknown>;
export const BlogPostFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogCategory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SharedFile"}}]}}]}},...BlogCategoryFragmentDoc.definitions,...SharedFileFragmentDoc.definitions]} as unknown as DocumentNode<BlogPostFragment, unknown>;
export const BlogPostConnectionFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPostConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPost"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},...PageInfoFragmentDoc.definitions,...BlogPostFragmentDoc.definitions]} as unknown as DocumentNode<BlogPostConnectionFragment, unknown>;
export const GalleryContentFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GalleryContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GalleryContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contentFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SharedFile"}}]}}]}},...SharedFileFragmentDoc.definitions]} as unknown as DocumentNode<GalleryContentFragment, unknown>;
export const GalleryFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Gallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDay"}},{"kind":"Field","name":{"kind":"Name","value":"isViewable"}},{"kind":"Field","name":{"kind":"Name","value":"contents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GalleryContent"}}]}}]}},...GalleryContentFragmentDoc.definitions]} as unknown as DocumentNode<GalleryFragment, unknown>;
export const GalleryConnectionFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GalleryConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GalleryConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Gallery"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},...PageInfoFragmentDoc.definitions,...GalleryFragmentDoc.definitions]} as unknown as DocumentNode<GalleryConnectionFragment, unknown>;
export const BlogDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"DESC"}},{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"START_AT"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPostConnection"}}]}}]}}]}},...BlogPostConnectionFragmentDoc.definitions]} as unknown as DocumentNode<BlogQuery, BlogQueryVariables>;
export const GalleryGroupDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GalleryGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"galleryGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"galleries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"DESC"}},{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"START_AT"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GalleryConnection"}}]}}]}}]}},...GalleryConnectionFragmentDoc.definitions]} as unknown as DocumentNode<GalleryGroupQuery, GalleryGroupQueryVariables>;
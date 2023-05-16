import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
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
  DateTime: any;
  JSON: any;
};

export type IGenAsset = {
  __typename?: 'Asset';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  author?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dominantColor?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Scalars['String']>;
  originType?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type IGenAsset_Connection = {
  __typename?: 'Asset_Connection';
  edges?: Maybe<Array<Maybe<IGenAsset_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenAsset_ConnectionEdge = {
  __typename?: 'Asset_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenAsset>;
};

export type IGenAsset_Sort = {
  author?: InputMaybe<IGenOrder>;
  blurHash?: InputMaybe<IGenOrder>;
  copyright?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  dominantColor?: InputMaybe<IGenOrder>;
  height?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  originType?: InputMaybe<IGenOrder>;
  originalName?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  width?: InputMaybe<IGenOrder>;
};

export type IGenAsset_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  blurHash?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  height?: InputMaybe<IGenCaisyField_Number_WhereInt>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  width?: InputMaybe<IGenCaisyField_Number_WhereInt>;
};

export type IGenAuthor = {
  __typename?: 'Author';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  avatar?: Maybe<IGenAsset>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};


export type IGenAuthorAvatarArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenAuthor_Connection = {
  __typename?: 'Author_Connection';
  edges?: Maybe<Array<Maybe<IGenAuthor_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenAuthor_ConnectionEdge = {
  __typename?: 'Author_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenAuthor>;
};

export type IGenAuthor_Sort = {
  avatar?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  role?: InputMaybe<IGenOrder>;
};

export type IGenAuthor_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAuthor_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAuthor_Where>>>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
  role?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenBlogArticle = {
  __typename?: 'BlogArticle';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  author?: Maybe<IGenAuthor>;
  category?: Maybe<IGenCategory>;
  id?: Maybe<Scalars['ID']>;
  seo?: Maybe<IGenSeoInformation>;
  slug?: Maybe<Scalars['String']>;
  teaserDesciption?: Maybe<Scalars['String']>;
  teaserHeadline?: Maybe<Scalars['String']>;
  teaserImage?: Maybe<IGenAsset>;
  text?: Maybe<IGenBlogArticle_Text>;
};


export type IGenBlogArticleAuthorArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenBlogArticleCategoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenBlogArticleSeoArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenBlogArticleTeaserImageArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenBlogArticleTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenBlogArticleGrid = {
  __typename?: 'BlogArticleGrid';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  articles?: Maybe<Array<Maybe<IGenBlogArticleGrid_Articles>>>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subheadline?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenBlogArticleGridArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenBlogArticleGrid_Connection = {
  __typename?: 'BlogArticleGrid_Connection';
  edges?: Maybe<Array<Maybe<IGenBlogArticleGrid_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenBlogArticleGrid_ConnectionEdge = {
  __typename?: 'BlogArticleGrid_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenBlogArticleGrid>;
};

export type IGenBlogArticleGrid_Sort = {
  articles?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  subheadline?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenBlogArticleGrid_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenBlogArticleGrid_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenBlogArticleGrid_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenBlogArticleGrid_Articles = IGenBlogArticle;

export type IGenBlogArticle_Connection = {
  __typename?: 'BlogArticle_Connection';
  edges?: Maybe<Array<Maybe<IGenBlogArticle_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenBlogArticle_ConnectionEdge = {
  __typename?: 'BlogArticle_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenBlogArticle>;
};

export type IGenBlogArticle_Sort = {
  author?: InputMaybe<IGenOrder>;
  category?: InputMaybe<IGenOrder>;
  seo?: InputMaybe<IGenOrder>;
  slug?: InputMaybe<IGenOrder>;
  teaserDesciption?: InputMaybe<IGenOrder>;
  teaserHeadline?: InputMaybe<IGenOrder>;
  teaserImage?: InputMaybe<IGenOrder>;
};

export type IGenBlogArticle_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  teaserDesciption?: InputMaybe<IGenCaisyField_String_Where>;
  teaserHeadline?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenBlogArticle_Text = {
  __typename?: 'BlogArticle_text';
  connections?: Maybe<Array<Maybe<IGenBlogArticle_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']>;
};


export type IGenBlogArticle_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenBlogArticle_Text_Connections = IGenAsset;

export type IGenCaisyDocument_Meta = {
  __typename?: 'CaisyDocument_Meta';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IGenCaisyField_Color_Where = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisyField_Number_WhereInt = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

export type IGenCaisyField_Richtext_Where = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisyField_String_Where = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Field_Document_NotFound = {
  __typename?: 'Caisy_Field_Document_NotFound';
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
};

export type IGenCategory = {
  __typename?: 'Category';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type IGenCategory_Connection = {
  __typename?: 'Category_Connection';
  edges?: Maybe<Array<Maybe<IGenCategory_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCategory_ConnectionEdge = {
  __typename?: 'Category_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCategory>;
};

export type IGenCategory_Sort = {
  name?: InputMaybe<IGenOrder>;
};

export type IGenCategory_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCategory_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCategory_Where>>>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenContactForm = {
  __typename?: 'ContactForm';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};

export type IGenContactForm_Connection = {
  __typename?: 'ContactForm_Connection';
  edges?: Maybe<Array<Maybe<IGenContactForm_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenContactForm_ConnectionEdge = {
  __typename?: 'ContactForm_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenContactForm>;
};

export type IGenContactForm_Sort = {
  headline?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenContactForm_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenContactForm_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenContactForm_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFooter = {
  __typename?: 'Footer';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  content?: Maybe<IGenFooter_Content>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenFooterContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenFooter_Content = {
  __typename?: 'Footer_content';
  connections?: Maybe<Array<Maybe<IGenFooter_Content_Connections>>>;
  json?: Maybe<Scalars['JSON']>;
};


export type IGenFooter_ContentConnectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenFooter_Content_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenFulltext = {
  __typename?: 'Fulltext';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<IGenFulltext_Text>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenFulltextTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenFulltext_Connection = {
  __typename?: 'Fulltext_Connection';
  edges?: Maybe<Array<Maybe<IGenFulltext_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenFulltext_ConnectionEdge = {
  __typename?: 'Fulltext_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenFulltext>;
};

export type IGenFulltext_Sort = {
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenFulltext_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFulltext_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFulltext_Where>>>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFulltext_Text = {
  __typename?: 'Fulltext_text';
  connections?: Maybe<Array<Maybe<IGenFulltext_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']>;
};


export type IGenFulltext_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenFulltext_Text_Connections = IGenAsset;

export type IGenFullwidthBlogTeaser = {
  __typename?: 'FullwidthBlogTeaser';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  featuredArticle?: Maybe<IGenBlogArticle>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenFullwidthBlogTeaserFeaturedArticleArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenFullwidthBlogTeaser_Connection = {
  __typename?: 'FullwidthBlogTeaser_Connection';
  edges?: Maybe<Array<Maybe<IGenFullwidthBlogTeaser_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenFullwidthBlogTeaser_ConnectionEdge = {
  __typename?: 'FullwidthBlogTeaser_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenFullwidthBlogTeaser>;
};

export type IGenFullwidthBlogTeaser_Sort = {
  featuredArticle?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenFullwidthBlogTeaser_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFullwidthBlogTeaser_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFullwidthBlogTeaser_Where>>>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenHeadline = {
  __typename?: 'Headline';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subheadline?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};

export type IGenHeadline_Connection = {
  __typename?: 'Headline_Connection';
  edges?: Maybe<Array<Maybe<IGenHeadline_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenHeadline_ConnectionEdge = {
  __typename?: 'Headline_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenHeadline>;
};

export type IGenHeadline_Sort = {
  headline?: InputMaybe<IGenOrder>;
  subheadline?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenHeadline_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenHeadline_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenHeadline_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenNavigation = {
  __typename?: 'Navigation';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  entries?: Maybe<Array<Maybe<IGenNavigation_Entries>>>;
  homePage?: Maybe<IGenPage>;
  id?: Maybe<Scalars['ID']>;
  notFoundPage?: Maybe<IGenPage>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenNavigationEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenNavigationHomePageArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenNavigationNotFoundPageArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenNavigationEntry = {
  __typename?: 'NavigationEntry';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  connection?: Maybe<IGenPage>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type IGenNavigationEntryConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenNavigationEntry_Connection = {
  __typename?: 'NavigationEntry_Connection';
  edges?: Maybe<Array<Maybe<IGenNavigationEntry_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenNavigationEntry_ConnectionEdge = {
  __typename?: 'NavigationEntry_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenNavigationEntry>;
};

export type IGenNavigationEntry_Sort = {
  connection?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenNavigationEntry_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenNavigationEntry_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenNavigationEntry_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenNavigation_Entries = IGenNavigationEntry;

export type IGenNewsletterSignup = {
  __typename?: 'NewsletterSignup';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subheadline?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};

export type IGenNewsletterSignup_Connection = {
  __typename?: 'NewsletterSignup_Connection';
  edges?: Maybe<Array<Maybe<IGenNewsletterSignup_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenNewsletterSignup_ConnectionEdge = {
  __typename?: 'NewsletterSignup_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenNewsletterSignup>;
};

export type IGenNewsletterSignup_Sort = {
  headline?: InputMaybe<IGenOrder>;
  subheadline?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenNewsletterSignup_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenNewsletterSignup_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenNewsletterSignup_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export enum IGenOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type IGenPage = {
  __typename?: 'Page';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  components?: Maybe<Array<Maybe<IGenPage_Components>>>;
  id?: Maybe<Scalars['ID']>;
  seo?: Maybe<IGenSeoInformation>;
  slug?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenPageComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenPageSeoArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenPageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type IGenPage_Connection = {
  __typename?: 'Page_Connection';
  edges?: Maybe<Array<Maybe<IGenPage_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenPage_ConnectionEdge = {
  __typename?: 'Page_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenPage>;
};

export type IGenPage_Sort = {
  components?: InputMaybe<IGenOrder>;
  seo?: InputMaybe<IGenOrder>;
  slug?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenPage_Components = IGenBlogArticleGrid | IGenContactForm | IGenFulltext | IGenFullwidthBlogTeaser | IGenHeadline | IGenNewsletterSignup;

export type IGenQuery = {
  __typename?: 'Query';
  Asset?: Maybe<IGenAsset>;
  Author?: Maybe<IGenAuthor>;
  BlogArticle?: Maybe<IGenBlogArticle>;
  BlogArticleGrid?: Maybe<IGenBlogArticleGrid>;
  Category?: Maybe<IGenCategory>;
  ContactForm?: Maybe<IGenContactForm>;
  Footer?: Maybe<IGenFooter>;
  Fulltext?: Maybe<IGenFulltext>;
  FullwidthBlogTeaser?: Maybe<IGenFullwidthBlogTeaser>;
  Headline?: Maybe<IGenHeadline>;
  Navigation?: Maybe<IGenNavigation>;
  NavigationEntry?: Maybe<IGenNavigationEntry>;
  NewsletterSignup?: Maybe<IGenNewsletterSignup>;
  Page?: Maybe<IGenPage>;
  SeoInformation?: Maybe<IGenSeoInformation>;
  allAsset?: Maybe<IGenAsset_Connection>;
  allAuthor?: Maybe<IGenAuthor_Connection>;
  allBlogArticle?: Maybe<IGenBlogArticle_Connection>;
  allBlogArticleGrid?: Maybe<IGenBlogArticleGrid_Connection>;
  allCategory?: Maybe<IGenCategory_Connection>;
  allContactForm?: Maybe<IGenContactForm_Connection>;
  allFulltext?: Maybe<IGenFulltext_Connection>;
  allFullwidthBlogTeaser?: Maybe<IGenFullwidthBlogTeaser_Connection>;
  allHeadline?: Maybe<IGenHeadline_Connection>;
  allNavigationEntry?: Maybe<IGenNavigationEntry_Connection>;
  allNewsletterSignup?: Maybe<IGenNewsletterSignup_Connection>;
  allPage?: Maybe<IGenPage_Connection>;
  allSeoInformation?: Maybe<IGenSeoInformation_Connection>;
};


export type IGenQueryAssetArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryAuthorArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryBlogArticleArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryBlogArticleGridArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryContactFormArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryFulltextArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryFullwidthBlogTeaserArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryHeadlineArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryNavigationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryNavigationEntryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryNewsletterSignupArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryPageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQuerySeoInformationArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryAllAssetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenAsset_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
};


export type IGenQueryAllAuthorArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenAuthor_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAuthor_Where>>>;
};


export type IGenQueryAllBlogArticleArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
};


export type IGenQueryAllBlogArticleGridArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenBlogArticleGrid_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenBlogArticleGrid_Where>>>;
};


export type IGenQueryAllCategoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCategory_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCategory_Where>>>;
};


export type IGenQueryAllContactFormArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenContactForm_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenContactForm_Where>>>;
};


export type IGenQueryAllFulltextArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFulltext_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFulltext_Where>>>;
};


export type IGenQueryAllFullwidthBlogTeaserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFullwidthBlogTeaser_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFullwidthBlogTeaser_Where>>>;
};


export type IGenQueryAllHeadlineArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenHeadline_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenHeadline_Where>>>;
};


export type IGenQueryAllNavigationEntryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenNavigationEntry_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenNavigationEntry_Where>>>;
};


export type IGenQueryAllNewsletterSignupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenNewsletterSignup_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenNewsletterSignup_Where>>>;
};


export type IGenQueryAllPageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenPage_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
};


export type IGenQueryAllSeoInformationArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Where>>>;
};

export type IGenSeoInformation = {
  __typename?: 'SeoInformation';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Scalars['String']>;
  ogImage?: Maybe<IGenAsset>;
  title?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenSeoInformationOgImageArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenSeoInformation_Connection = {
  __typename?: 'SeoInformation_Connection';
  edges?: Maybe<Array<Maybe<IGenSeoInformation_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenSeoInformation_ConnectionEdge = {
  __typename?: 'SeoInformation_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenSeoInformation>;
};

export type IGenSeoInformation_Sort = {
  description?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  ogImage?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenSeoInformation_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenAssetFragment = { __typename?: 'Asset', title?: string | null, src?: string | null, originType?: string | null, keywords?: string | null, id?: string | null, dominantColor?: string | null, description?: string | null, copyright?: string | null, author?: string | null };

export type IGenAuthorFragment = { __typename?: 'Author', name?: string | null, role?: string | null, id?: string | null, avatar?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null };

export type IGenBlogArticleFragment = { __typename?: 'BlogArticle', teaserHeadline?: string | null, teaserDesciption?: string | null, slug?: string | null, id?: string | null, text?: { __typename?: 'BlogArticle_text', json?: any | null, connections?: Array<(
      { __typename: 'Asset' }
      & IGenAssetFragment
    ) | null> | null } | null, teaserImage?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null, seo?: { __typename?: 'SeoInformation', id?: string | null, description?: string | null, keywords?: string | null, title?: string | null, ogImage?: (
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null } | null };

export type IGenBlogArticleGridFragment = { __typename?: 'BlogArticleGrid', id?: string | null, headline?: string | null, subheadline?: string | null, articles?: Array<{ __typename?: 'BlogArticle', id?: string | null, slug?: string | null, teaserDesciption?: string | null, teaserHeadline?: string | null, teaserImage?: (
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null, text?: { __typename?: 'BlogArticle_text', json?: any | null, connections?: Array<(
        { __typename: 'Asset' }
        & IGenAssetFragment
      ) | null> | null } | null } | null> | null };

export type IGenCategoryFragment = { __typename?: 'Category', name?: string | null, id?: string | null };

export type IGenContactFormFragment = { __typename?: 'ContactForm', id?: string | null, headline?: string | null };

export type IGenFulltextFragment = { __typename?: 'Fulltext', id?: string | null, text?: { __typename?: 'Fulltext_text', json?: any | null, connections?: Array<(
      { __typename: 'Asset' }
      & IGenAssetFragment
    ) | null> | null } | null };

export type IGenFullwidthBlogTeaserFragment = { __typename?: 'FullwidthBlogTeaser', id?: string | null, featuredArticle?: { __typename?: 'BlogArticle', id?: string | null, slug?: string | null, teaserHeadline?: string | null, teaserDesciption?: string | null, teaserImage?: (
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null, text?: { __typename?: 'BlogArticle_text', json?: any | null, connections?: Array<(
        { __typename: 'Asset' }
        & IGenAssetFragment
      ) | null> | null } | null, author?: (
      { __typename?: 'Author' }
      & IGenAuthorFragment
    ) | null, category?: (
      { __typename?: 'Category' }
      & IGenCategoryFragment
    ) | null } | null };

export type IGenHeadlineFragment = { __typename?: 'Headline', subheadline?: string | null, id?: string | null, headline?: string | null };

export type IGenNavigationEntryFragment = { __typename?: 'NavigationEntry', id?: string | null, title?: string | null, connection?: { __typename?: 'Page', id?: string | null, slug?: string | null } | null };

export type IGenNewsletterSignupFragment = { __typename?: 'NewsletterSignup', headline?: string | null, subheadline?: string | null, id?: string | null };

export type IGenPageFragment = { __typename?: 'Page', id?: string | null, slug?: string | null, components?: Array<(
    { __typename: 'BlogArticleGrid' }
    & IGenBlogArticleGridFragment
  ) | (
    { __typename: 'ContactForm' }
    & IGenContactFormFragment
  ) | (
    { __typename: 'Fulltext' }
    & IGenFulltextFragment
  ) | (
    { __typename: 'FullwidthBlogTeaser' }
    & IGenFullwidthBlogTeaserFragment
  ) | (
    { __typename: 'Headline' }
    & IGenHeadlineFragment
  ) | (
    { __typename: 'NewsletterSignup' }
    & IGenNewsletterSignupFragment
  ) | null> | null, seo?: { __typename?: 'SeoInformation', title?: string | null, keywords?: string | null, id?: string | null, description?: string | null, ogImage?: { __typename?: 'Asset', id?: string | null } | null } | null };

export type IGenFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenFooterQuery = { __typename?: 'Query', Footer?: { __typename?: 'Footer', id?: string | null, content?: { __typename?: 'Footer_content', json?: any | null } | null } | null };

export type IGenNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenNavigationQuery = { __typename?: 'Query', Navigation?: { __typename?: 'Navigation', id?: string | null, homePage?: { __typename?: 'Page', id?: string | null, slug?: string | null } | null, notFoundPage?: { __typename?: 'Page', id?: string | null, slug?: string | null } | null, entries?: Array<(
      { __typename?: 'NavigationEntry' }
      & IGenNavigationEntryFragment
    ) | null> | null } | null };

export type IGenAllBlogArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IGenAllBlogArticleBySlugQuery = { __typename?: 'Query', allBlogArticle?: { __typename?: 'BlogArticle_Connection', edges?: Array<{ __typename?: 'BlogArticle_ConnectionEdge', node?: (
        { __typename?: 'BlogArticle' }
        & IGenBlogArticleFragment
      ) | null } | null> | null } | null };

export type IGenAllBlogArticleMetaQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
}>;


export type IGenAllBlogArticleMetaQuery = { __typename?: 'Query', allBlogArticle?: { __typename?: 'BlogArticle_Connection', totalCount?: number | null, pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } | null, edges?: Array<{ __typename?: 'BlogArticle_ConnectionEdge', node?: { __typename?: 'BlogArticle', id?: string | null, slug?: string | null, _meta?: { __typename?: 'CaisyDocument_Meta', publishedAt?: any | null } | null } | null } | null> | null } | null };

export type IGenAllPageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IGenAllPageBySlugQuery = { __typename?: 'Query', allPage?: { __typename?: 'Page_Connection', edges?: Array<{ __typename?: 'Page_ConnectionEdge', node?: (
        { __typename?: 'Page' }
        & IGenPageFragment
      ) | null } | null> | null } | null };

export type IGenAllPageMetaQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
}>;


export type IGenAllPageMetaQuery = { __typename?: 'Query', allPage?: { __typename?: 'Page_Connection', totalCount?: number | null, pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } | null, edges?: Array<{ __typename?: 'Page_ConnectionEdge', node?: { __typename?: 'Page', id?: string | null, slug?: string | null, _meta?: { __typename?: 'CaisyDocument_Meta', publishedAt?: any | null } | null } | null } | null> | null } | null };

export const AssetFragmentDoc = gql`
    fragment Asset on Asset {
  title
  src
  originType
  keywords
  id
  dominantColor
  description
  copyright
  author
}
    `;
export const BlogArticleFragmentDoc = gql`
    fragment BlogArticle on BlogArticle {
  text {
    connections {
      __typename
      ...Asset
    }
    json
  }
  teaserImage {
    ...Asset
  }
  teaserHeadline
  teaserDesciption
  slug
  seo {
    id
    description
    keywords
    ogImage {
      ...Asset
    }
    title
  }
  id
}
    `;
export const NavigationEntryFragmentDoc = gql`
    fragment NavigationEntry on NavigationEntry {
  id
  title
  connection {
    id
    slug
  }
}
    `;
export const ContactFormFragmentDoc = gql`
    fragment ContactForm on ContactForm {
  id
  headline
}
    `;
export const BlogArticleGridFragmentDoc = gql`
    fragment BlogArticleGrid on BlogArticleGrid {
  id
  headline
  subheadline
  articles {
    ... on BlogArticle {
      id
      slug
      teaserDesciption
      teaserHeadline
      teaserImage {
        ...Asset
      }
      text {
        connections {
          __typename
          ...Asset
        }
        json
      }
    }
  }
}
    `;
export const NewsletterSignupFragmentDoc = gql`
    fragment NewsletterSignup on NewsletterSignup {
  headline
  subheadline
  id
}
    `;
export const AuthorFragmentDoc = gql`
    fragment Author on Author {
  name
  role
  avatar {
    ...Asset
  }
  id
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  name
  id
}
    `;
export const FullwidthBlogTeaserFragmentDoc = gql`
    fragment FullwidthBlogTeaser on FullwidthBlogTeaser {
  id
  featuredArticle {
    id
    slug
    teaserImage {
      ...Asset
    }
    text {
      connections {
        __typename
        ... on Asset {
          ...Asset
        }
      }
      json
    }
    author {
      ...Author
    }
    category {
      ...Category
    }
    teaserHeadline
    teaserDesciption
  }
  id
}
    `;
export const HeadlineFragmentDoc = gql`
    fragment Headline on Headline {
  subheadline
  id
  headline
}
    `;
export const FulltextFragmentDoc = gql`
    fragment Fulltext on Fulltext {
  text {
    json
    connections {
      __typename
      ...Asset
    }
  }
  id
}
    `;
export const PageFragmentDoc = gql`
    fragment Page on Page {
  components {
    __typename
    ...ContactForm
    ...BlogArticleGrid
    ...NewsletterSignup
    ...FullwidthBlogTeaser
    ...Headline
    ...Fulltext
  }
  id
  seo {
    title
    ogImage {
      id
    }
    keywords
    id
    description
  }
  slug
}
    `;
export const FooterDocument = gql`
    query Footer {
  Footer {
    id
    content {
      json
    }
  }
}
    `;
export const NavigationDocument = gql`
    query Navigation {
  Navigation {
    id
    homePage {
      id
      slug
    }
    notFoundPage {
      id
      slug
    }
    entries {
      ...NavigationEntry
    }
  }
}
    ${NavigationEntryFragmentDoc}`;
export const AllBlogArticleBySlugDocument = gql`
    query allBlogArticleBySlug($slug: String!) {
  allBlogArticle(where: {slug: {eq: $slug}}) {
    edges {
      node {
        ...BlogArticle
      }
    }
  }
}
    ${BlogArticleFragmentDoc}
${AssetFragmentDoc}`;
export const AllBlogArticleMetaDocument = gql`
    query allBlogArticleMeta($after: String) {
  allBlogArticle(after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        _meta {
          publishedAt
        }
        id
        slug
      }
    }
  }
}
    `;
export const AllPageBySlugDocument = gql`
    query allPageBySlug($slug: String!) {
  allPage(where: {slug: {eq: $slug}}) {
    edges {
      node {
        ...Page
      }
    }
  }
}
    ${PageFragmentDoc}
${ContactFormFragmentDoc}
${BlogArticleGridFragmentDoc}
${AssetFragmentDoc}
${NewsletterSignupFragmentDoc}
${FullwidthBlogTeaserFragmentDoc}
${AuthorFragmentDoc}
${CategoryFragmentDoc}
${HeadlineFragmentDoc}
${FulltextFragmentDoc}`;
export const AllPageMetaDocument = gql`
    query allPageMeta($after: String) {
  allPage(after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        _meta {
          publishedAt
        }
        id
        slug
      }
    }
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    Footer(variables?: IGenFooterQueryVariables, options?: C): Promise<IGenFooterQuery> {
      return requester<IGenFooterQuery, IGenFooterQueryVariables>(FooterDocument, variables, options) as Promise<IGenFooterQuery>;
    },
    Navigation(variables?: IGenNavigationQueryVariables, options?: C): Promise<IGenNavigationQuery> {
      return requester<IGenNavigationQuery, IGenNavigationQueryVariables>(NavigationDocument, variables, options) as Promise<IGenNavigationQuery>;
    },
    allBlogArticleBySlug(variables: IGenAllBlogArticleBySlugQueryVariables, options?: C): Promise<IGenAllBlogArticleBySlugQuery> {
      return requester<IGenAllBlogArticleBySlugQuery, IGenAllBlogArticleBySlugQueryVariables>(AllBlogArticleBySlugDocument, variables, options) as Promise<IGenAllBlogArticleBySlugQuery>;
    },
    allBlogArticleMeta(variables?: IGenAllBlogArticleMetaQueryVariables, options?: C): Promise<IGenAllBlogArticleMetaQuery> {
      return requester<IGenAllBlogArticleMetaQuery, IGenAllBlogArticleMetaQueryVariables>(AllBlogArticleMetaDocument, variables, options) as Promise<IGenAllBlogArticleMetaQuery>;
    },
    allPageBySlug(variables: IGenAllPageBySlugQueryVariables, options?: C): Promise<IGenAllPageBySlugQuery> {
      return requester<IGenAllPageBySlugQuery, IGenAllPageBySlugQueryVariables>(AllPageBySlugDocument, variables, options) as Promise<IGenAllPageBySlugQuery>;
    },
    allPageMeta(variables?: IGenAllPageMetaQueryVariables, options?: C): Promise<IGenAllPageMetaQuery> {
      return requester<IGenAllPageMetaQuery, IGenAllPageMetaQueryVariables>(AllPageMetaDocument, variables, options) as Promise<IGenAllPageMetaQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
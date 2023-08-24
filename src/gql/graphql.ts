/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateDoughnutCategoriesMutationResponse = {
  __typename?: 'CreateDoughnutCategoriesMutationResponse';
  doughnutCategories: Array<DoughnutCategory>;
  info: CreateInfo;
};

export type CreateImpactAreasMutationResponse = {
  __typename?: 'CreateImpactAreasMutationResponse';
  impactAreas: Array<ImpactArea>;
  info: CreateInfo;
};

export type CreateImpactCategoriesMutationResponse = {
  __typename?: 'CreateImpactCategoriesMutationResponse';
  impactCategories: Array<ImpactCategory>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateLocationsMutationResponse = {
  __typename?: 'CreateLocationsMutationResponse';
  info: CreateInfo;
  locations: Array<Location>;
};

export type CreateProjectsMutationResponse = {
  __typename?: 'CreateProjectsMutationResponse';
  info: CreateInfo;
  projects: Array<Project>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type DoughnutCategoriesConnection = {
  __typename?: 'DoughnutCategoriesConnection';
  edges: Array<DoughnutCategoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DoughnutCategory = {
  __typename?: 'DoughnutCategory';
  impactAreaCategories: Array<ImpactCategory>;
  impactAreaCategoriesAggregate?: Maybe<DoughnutCategoryImpactCategoryImpactAreaCategoriesAggregationSelection>;
  impactAreaCategoriesConnection: DoughnutCategoryImpactAreaCategoriesConnection;
  name: Scalars['String']['output'];
  uniqueName: DoughnutCategoryName;
};


export type DoughnutCategoryImpactAreaCategoriesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ImpactCategoryOptions>;
  where?: InputMaybe<ImpactCategoryWhere>;
};


export type DoughnutCategoryImpactAreaCategoriesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ImpactCategoryWhere>;
};


export type DoughnutCategoryImpactAreaCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectionSort>>;
  where?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
};

export type DoughnutCategoryAggregateSelection = {
  __typename?: 'DoughnutCategoryAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
};

export type DoughnutCategoryConnectInput = {
  impactAreaCategories?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectFieldInput>>;
};

export type DoughnutCategoryConnectOrCreateInput = {
  impactAreaCategories?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInput>>;
};

export type DoughnutCategoryConnectOrCreateWhere = {
  node: DoughnutCategoryUniqueWhere;
};

export type DoughnutCategoryConnectWhere = {
  node: DoughnutCategoryWhere;
};

export type DoughnutCategoryCreateInput = {
  impactAreaCategories?: InputMaybe<DoughnutCategoryImpactAreaCategoriesFieldInput>;
  name: Scalars['String']['input'];
  uniqueName: DoughnutCategoryName;
};

export type DoughnutCategoryDeleteInput = {
  impactAreaCategories?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesDeleteFieldInput>>;
};

export type DoughnutCategoryDisconnectInput = {
  impactAreaCategories?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesDisconnectFieldInput>>;
};

export type DoughnutCategoryEdge = {
  __typename?: 'DoughnutCategoryEdge';
  cursor: Scalars['String']['output'];
  node: DoughnutCategory;
};

export type DoughnutCategoryImpactAreaCategoriesAggregateInput = {
  AND?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesAggregateInput>>;
  NOT?: InputMaybe<DoughnutCategoryImpactAreaCategoriesAggregateInput>;
  OR?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput>;
};

export type DoughnutCategoryImpactAreaCategoriesConnectFieldInput = {
  connect?: InputMaybe<Array<ImpactCategoryConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ImpactCategoryConnectWhere>;
};

export type DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInput = {
  onCreate: DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInputOnCreate;
  where: ImpactCategoryConnectOrCreateWhere;
};

export type DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInputOnCreate = {
  node: ImpactCategoryOnCreateInput;
};

export type DoughnutCategoryImpactAreaCategoriesConnection = {
  __typename?: 'DoughnutCategoryImpactAreaCategoriesConnection';
  edges: Array<DoughnutCategoryImpactAreaCategoriesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DoughnutCategoryImpactAreaCategoriesConnectionSort = {
  node?: InputMaybe<ImpactCategorySort>;
};

export type DoughnutCategoryImpactAreaCategoriesConnectionWhere = {
  AND?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectionWhere>>;
  NOT?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  OR?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectionWhere>>;
  node?: InputMaybe<ImpactCategoryWhere>;
};

export type DoughnutCategoryImpactAreaCategoriesCreateFieldInput = {
  node: ImpactCategoryCreateInput;
};

export type DoughnutCategoryImpactAreaCategoriesDeleteFieldInput = {
  delete?: InputMaybe<ImpactCategoryDeleteInput>;
  where?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
};

export type DoughnutCategoryImpactAreaCategoriesDisconnectFieldInput = {
  disconnect?: InputMaybe<ImpactCategoryDisconnectInput>;
  where?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
};

export type DoughnutCategoryImpactAreaCategoriesFieldInput = {
  connect?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesCreateFieldInput>>;
};

export type DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DoughnutCategoryImpactAreaCategoriesRelationship = {
  __typename?: 'DoughnutCategoryImpactAreaCategoriesRelationship';
  cursor: Scalars['String']['output'];
  node: ImpactCategory;
};

export type DoughnutCategoryImpactAreaCategoriesUpdateConnectionInput = {
  node?: InputMaybe<ImpactCategoryUpdateInput>;
};

export type DoughnutCategoryImpactAreaCategoriesUpdateFieldInput = {
  connect?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesCreateFieldInput>>;
  delete?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesDisconnectFieldInput>>;
  update?: InputMaybe<DoughnutCategoryImpactAreaCategoriesUpdateConnectionInput>;
  where?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
};

export type DoughnutCategoryImpactCategoryImpactAreaCategoriesAggregationSelection = {
  __typename?: 'DoughnutCategoryImpactCategoryImpactAreaCategoriesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DoughnutCategoryImpactCategoryImpactAreaCategoriesNodeAggregateSelection>;
};

export type DoughnutCategoryImpactCategoryImpactAreaCategoriesNodeAggregateSelection = {
  __typename?: 'DoughnutCategoryImpactCategoryImpactAreaCategoriesNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export enum DoughnutCategoryName {
  Ecological = 'ECOLOGICAL',
  Social = 'SOCIAL'
}

export type DoughnutCategoryOnCreateInput = {
  name: Scalars['String']['input'];
  uniqueName: DoughnutCategoryName;
};

export type DoughnutCategoryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DoughnutCategorySort objects to sort DoughnutCategories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DoughnutCategorySort>>;
};

export type DoughnutCategoryRelationInput = {
  impactAreaCategories?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesCreateFieldInput>>;
};

/** Fields to sort DoughnutCategories by. The order in which sorts are applied is not guaranteed when specifying many fields in one DoughnutCategorySort object. */
export type DoughnutCategorySort = {
  name?: InputMaybe<SortDirection>;
  uniqueName?: InputMaybe<SortDirection>;
};

export type DoughnutCategoryUniqueWhere = {
  uniqueName?: InputMaybe<DoughnutCategoryName>;
};

export type DoughnutCategoryUpdateInput = {
  impactAreaCategories?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<DoughnutCategoryName>;
};

export type DoughnutCategoryWhere = {
  AND?: InputMaybe<Array<DoughnutCategoryWhere>>;
  NOT?: InputMaybe<DoughnutCategoryWhere>;
  OR?: InputMaybe<Array<DoughnutCategoryWhere>>;
  impactAreaCategoriesAggregate?: InputMaybe<DoughnutCategoryImpactAreaCategoriesAggregateInput>;
  /** Return DoughnutCategories where all of the related DoughnutCategoryImpactAreaCategoriesConnections match this filter */
  impactAreaCategoriesConnection_ALL?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  /** Return DoughnutCategories where none of the related DoughnutCategoryImpactAreaCategoriesConnections match this filter */
  impactAreaCategoriesConnection_NONE?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  /** Return DoughnutCategories where one of the related DoughnutCategoryImpactAreaCategoriesConnections match this filter */
  impactAreaCategoriesConnection_SINGLE?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  /** Return DoughnutCategories where some of the related DoughnutCategoryImpactAreaCategoriesConnections match this filter */
  impactAreaCategoriesConnection_SOME?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  /** Return DoughnutCategories where all of the related ImpactCategories match this filter */
  impactAreaCategories_ALL?: InputMaybe<ImpactCategoryWhere>;
  /** Return DoughnutCategories where none of the related ImpactCategories match this filter */
  impactAreaCategories_NONE?: InputMaybe<ImpactCategoryWhere>;
  /** Return DoughnutCategories where one of the related ImpactCategories match this filter */
  impactAreaCategories_SINGLE?: InputMaybe<ImpactCategoryWhere>;
  /** Return DoughnutCategories where some of the related ImpactCategories match this filter */
  impactAreaCategories_SOME?: InputMaybe<ImpactCategoryWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<DoughnutCategoryName>;
  uniqueName_IN?: InputMaybe<Array<DoughnutCategoryName>>;
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  sum: Scalars['Float']['output'];
};

export type ImpactArea = {
  __typename?: 'ImpactArea';
  context?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  impactCategory?: Maybe<ImpactCategory>;
  impactCategoryAggregate?: Maybe<ImpactAreaImpactCategoryImpactCategoryAggregationSelection>;
  impactCategoryConnection: ImpactAreaImpactCategoryConnection;
  name?: Maybe<Scalars['String']['output']>;
  projects: Array<Project>;
  projectsAggregate?: Maybe<ImpactAreaProjectProjectsAggregationSelection>;
  projectsConnection: ImpactAreaProjectsConnection;
  questions?: Maybe<Scalars['String']['output']>;
  uniqueName: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};


export type ImpactAreaImpactCategoryArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ImpactCategoryOptions>;
  where?: InputMaybe<ImpactCategoryWhere>;
};


export type ImpactAreaImpactCategoryAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ImpactCategoryWhere>;
};


export type ImpactAreaImpactCategoryConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ImpactAreaImpactCategoryConnectionSort>>;
  where?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
};


export type ImpactAreaProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type ImpactAreaProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type ImpactAreaProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ImpactAreaProjectsConnectionSort>>;
  where?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
};

export type ImpactAreaAggregateSelection = {
  __typename?: 'ImpactAreaAggregateSelection';
  context: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  questions: StringAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
};

export type ImpactAreaConnectInput = {
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryConnectFieldInput>;
  projects?: InputMaybe<Array<ImpactAreaProjectsConnectFieldInput>>;
};

export type ImpactAreaConnectOrCreateInput = {
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryConnectOrCreateFieldInput>;
  projects?: InputMaybe<Array<ImpactAreaProjectsConnectOrCreateFieldInput>>;
};

export type ImpactAreaConnectOrCreateWhere = {
  node: ImpactAreaUniqueWhere;
};

export type ImpactAreaConnectWhere = {
  node: ImpactAreaWhere;
};

export type ImpactAreaCreateInput = {
  context?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<ImpactAreaProjectsFieldInput>;
  questions?: InputMaybe<Scalars['String']['input']>;
  uniqueName: Scalars['String']['input'];
  verified: Scalars['Boolean']['input'];
};

export type ImpactAreaDeleteInput = {
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryDeleteFieldInput>;
  projects?: InputMaybe<Array<ImpactAreaProjectsDeleteFieldInput>>;
};

export type ImpactAreaDisconnectInput = {
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryDisconnectFieldInput>;
  projects?: InputMaybe<Array<ImpactAreaProjectsDisconnectFieldInput>>;
};

export type ImpactAreaEdge = {
  __typename?: 'ImpactAreaEdge';
  cursor: Scalars['String']['output'];
  node: ImpactArea;
};

export type ImpactAreaImpactCategoryAggregateInput = {
  AND?: InputMaybe<Array<ImpactAreaImpactCategoryAggregateInput>>;
  NOT?: InputMaybe<ImpactAreaImpactCategoryAggregateInput>;
  OR?: InputMaybe<Array<ImpactAreaImpactCategoryAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ImpactAreaImpactCategoryNodeAggregationWhereInput>;
};

export type ImpactAreaImpactCategoryConnectFieldInput = {
  connect?: InputMaybe<ImpactCategoryConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ImpactCategoryConnectWhere>;
};

export type ImpactAreaImpactCategoryConnectOrCreateFieldInput = {
  onCreate: ImpactAreaImpactCategoryConnectOrCreateFieldInputOnCreate;
  where: ImpactCategoryConnectOrCreateWhere;
};

export type ImpactAreaImpactCategoryConnectOrCreateFieldInputOnCreate = {
  node: ImpactCategoryOnCreateInput;
};

export type ImpactAreaImpactCategoryConnection = {
  __typename?: 'ImpactAreaImpactCategoryConnection';
  edges: Array<ImpactAreaImpactCategoryRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ImpactAreaImpactCategoryConnectionSort = {
  node?: InputMaybe<ImpactCategorySort>;
};

export type ImpactAreaImpactCategoryConnectionWhere = {
  AND?: InputMaybe<Array<ImpactAreaImpactCategoryConnectionWhere>>;
  NOT?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
  OR?: InputMaybe<Array<ImpactAreaImpactCategoryConnectionWhere>>;
  node?: InputMaybe<ImpactCategoryWhere>;
};

export type ImpactAreaImpactCategoryCreateFieldInput = {
  node: ImpactCategoryCreateInput;
};

export type ImpactAreaImpactCategoryDeleteFieldInput = {
  delete?: InputMaybe<ImpactCategoryDeleteInput>;
  where?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
};

export type ImpactAreaImpactCategoryDisconnectFieldInput = {
  disconnect?: InputMaybe<ImpactCategoryDisconnectInput>;
  where?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
};

export type ImpactAreaImpactCategoryFieldInput = {
  connect?: InputMaybe<ImpactAreaImpactCategoryConnectFieldInput>;
  connectOrCreate?: InputMaybe<ImpactAreaImpactCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactAreaImpactCategoryCreateFieldInput>;
};

export type ImpactAreaImpactCategoryImpactCategoryAggregationSelection = {
  __typename?: 'ImpactAreaImpactCategoryImpactCategoryAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ImpactAreaImpactCategoryImpactCategoryNodeAggregateSelection>;
};

export type ImpactAreaImpactCategoryImpactCategoryNodeAggregateSelection = {
  __typename?: 'ImpactAreaImpactCategoryImpactCategoryNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export type ImpactAreaImpactCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactAreaImpactCategoryNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactAreaImpactCategoryNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ImpactAreaImpactCategoryNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ImpactAreaImpactCategoryRelationship = {
  __typename?: 'ImpactAreaImpactCategoryRelationship';
  cursor: Scalars['String']['output'];
  node: ImpactCategory;
};

export type ImpactAreaImpactCategoryUpdateConnectionInput = {
  node?: InputMaybe<ImpactCategoryUpdateInput>;
};

export type ImpactAreaImpactCategoryUpdateFieldInput = {
  connect?: InputMaybe<ImpactAreaImpactCategoryConnectFieldInput>;
  connectOrCreate?: InputMaybe<ImpactAreaImpactCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactAreaImpactCategoryCreateFieldInput>;
  delete?: InputMaybe<ImpactAreaImpactCategoryDeleteFieldInput>;
  disconnect?: InputMaybe<ImpactAreaImpactCategoryDisconnectFieldInput>;
  update?: InputMaybe<ImpactAreaImpactCategoryUpdateConnectionInput>;
  where?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
};

export type ImpactAreaOnCreateInput = {
  context?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Scalars['String']['input']>;
  uniqueName: Scalars['String']['input'];
  verified: Scalars['Boolean']['input'];
};

export type ImpactAreaOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ImpactAreaSort objects to sort ImpactAreas by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ImpactAreaSort>>;
};

export type ImpactAreaProjectProjectsAggregationSelection = {
  __typename?: 'ImpactAreaProjectProjectsAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ImpactAreaProjectProjectsEdgeAggregateSelection>;
  node?: Maybe<ImpactAreaProjectProjectsNodeAggregateSelection>;
};

export type ImpactAreaProjectProjectsEdgeAggregateSelection = {
  __typename?: 'ImpactAreaProjectProjectsEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  score: FloatAggregateSelectionNonNullable;
};

export type ImpactAreaProjectProjectsNodeAggregateSelection = {
  __typename?: 'ImpactAreaProjectProjectsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  problem: StringAggregateSelectionNonNullable;
  solution: StringAggregateSelectionNonNullable;
  uniqueName: StringAggregateSelectionNonNullable;
};

export type ImpactAreaProjectsAggregateInput = {
  AND?: InputMaybe<Array<ImpactAreaProjectsAggregateInput>>;
  NOT?: InputMaybe<ImpactAreaProjectsAggregateInput>;
  OR?: InputMaybe<Array<ImpactAreaProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ImpactAreaProjectsEdgeAggregationWhereInput>;
  node?: InputMaybe<ImpactAreaProjectsNodeAggregationWhereInput>;
};

export type ImpactAreaProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  edge: ImpactsCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type ImpactAreaProjectsConnectOrCreateFieldInput = {
  onCreate: ImpactAreaProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type ImpactAreaProjectsConnectOrCreateFieldInputOnCreate = {
  edge: ImpactsCreateInput;
  node: ProjectOnCreateInput;
};

export type ImpactAreaProjectsConnection = {
  __typename?: 'ImpactAreaProjectsConnection';
  edges: Array<ImpactAreaProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ImpactAreaProjectsConnectionSort = {
  edge?: InputMaybe<ImpactsSort>;
  node?: InputMaybe<ProjectSort>;
};

export type ImpactAreaProjectsConnectionWhere = {
  AND?: InputMaybe<Array<ImpactAreaProjectsConnectionWhere>>;
  NOT?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  OR?: InputMaybe<Array<ImpactAreaProjectsConnectionWhere>>;
  edge?: InputMaybe<ImpactsWhere>;
  node?: InputMaybe<ProjectWhere>;
};

export type ImpactAreaProjectsCreateFieldInput = {
  edge: ImpactsCreateInput;
  node: ProjectCreateInput;
};

export type ImpactAreaProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
};

export type ImpactAreaProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
};

export type ImpactAreaProjectsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactAreaProjectsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactAreaProjectsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ImpactAreaProjectsEdgeAggregationWhereInput>>;
  aspect_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  aspect_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  aspect_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  aspect_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  aspect_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  aspect_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  aspect_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  aspect_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  aspect_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  aspect_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  reason_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  reason_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  reason_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  reason_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  reason_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  reason_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  reason_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  reason_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  reason_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  reason_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  score_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  score_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  score_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  score_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type ImpactAreaProjectsFieldInput = {
  connect?: InputMaybe<Array<ImpactAreaProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ImpactAreaProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ImpactAreaProjectsCreateFieldInput>>;
};

export type ImpactAreaProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactAreaProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactAreaProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ImpactAreaProjectsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  problem_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  problem_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  problem_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  problem_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  problem_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  problem_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  problem_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  problem_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  problem_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  problem_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  problem_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  problem_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  problem_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  problem_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  problem_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  solution_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  solution_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  solution_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  solution_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  solution_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  solution_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  solution_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  solution_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  solution_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  solution_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  solution_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  solution_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  solution_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  solution_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  solution_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ImpactAreaProjectsRelationship = Impacts & {
  __typename?: 'ImpactAreaProjectsRelationship';
  aspect: Scalars['String']['output'];
  cursor: Scalars['String']['output'];
  node: Project;
  reason: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export type ImpactAreaProjectsUpdateConnectionInput = {
  edge?: InputMaybe<ImpactsUpdateInput>;
  node?: InputMaybe<ProjectUpdateInput>;
};

export type ImpactAreaProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<ImpactAreaProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ImpactAreaProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ImpactAreaProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<ImpactAreaProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ImpactAreaProjectsDisconnectFieldInput>>;
  update?: InputMaybe<ImpactAreaProjectsUpdateConnectionInput>;
  where?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
};

export type ImpactAreaRelationInput = {
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryCreateFieldInput>;
  projects?: InputMaybe<Array<ImpactAreaProjectsCreateFieldInput>>;
};

/** Fields to sort ImpactAreas by. The order in which sorts are applied is not guaranteed when specifying many fields in one ImpactAreaSort object. */
export type ImpactAreaSort = {
  context?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  questions?: InputMaybe<SortDirection>;
  uniqueName?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type ImpactAreaUniqueWhere = {
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type ImpactAreaUpdateInput = {
  context?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<ImpactAreaProjectsUpdateFieldInput>>;
  questions?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImpactAreaWhere = {
  AND?: InputMaybe<Array<ImpactAreaWhere>>;
  NOT?: InputMaybe<ImpactAreaWhere>;
  OR?: InputMaybe<Array<ImpactAreaWhere>>;
  context?: InputMaybe<Scalars['String']['input']>;
  context_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  context_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  context_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  context_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  impactCategory?: InputMaybe<ImpactCategoryWhere>;
  impactCategoryAggregate?: InputMaybe<ImpactAreaImpactCategoryAggregateInput>;
  impactCategoryConnection?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
  impactCategoryConnection_NOT?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
  impactCategory_NOT?: InputMaybe<ImpactCategoryWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  projectsAggregate?: InputMaybe<ImpactAreaProjectsAggregateInput>;
  /** Return ImpactAreas where all of the related ImpactAreaProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  /** Return ImpactAreas where none of the related ImpactAreaProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  /** Return ImpactAreas where one of the related ImpactAreaProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  /** Return ImpactAreas where some of the related ImpactAreaProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  /** Return ImpactAreas where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return ImpactAreas where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return ImpactAreas where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return ImpactAreas where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  questions?: InputMaybe<Scalars['String']['input']>;
  questions_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  questions_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  questions_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  questions_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
  uniqueName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  uniqueName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  uniqueName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  uniqueName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImpactAreasConnection = {
  __typename?: 'ImpactAreasConnection';
  edges: Array<ImpactAreaEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ImpactCategoriesConnection = {
  __typename?: 'ImpactCategoriesConnection';
  edges: Array<ImpactCategoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ImpactCategory = {
  __typename?: 'ImpactCategory';
  doughnutCategory?: Maybe<DoughnutCategory>;
  doughnutCategoryAggregate?: Maybe<ImpactCategoryDoughnutCategoryDoughnutCategoryAggregationSelection>;
  doughnutCategoryConnection: ImpactCategoryDoughnutCategoryConnection;
  impactAreas: Array<ImpactArea>;
  impactAreasAggregate?: Maybe<ImpactCategoryImpactAreaImpactAreasAggregationSelection>;
  impactAreasConnection: ImpactCategoryImpactAreasConnection;
  name: Scalars['String']['output'];
  uniqueName: ImpactCategoryName;
};


export type ImpactCategoryDoughnutCategoryArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DoughnutCategoryOptions>;
  where?: InputMaybe<DoughnutCategoryWhere>;
};


export type ImpactCategoryDoughnutCategoryAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DoughnutCategoryWhere>;
};


export type ImpactCategoryDoughnutCategoryConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ImpactCategoryDoughnutCategoryConnectionSort>>;
  where?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
};


export type ImpactCategoryImpactAreasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ImpactAreaOptions>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type ImpactCategoryImpactAreasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type ImpactCategoryImpactAreasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ImpactCategoryImpactAreasConnectionSort>>;
  where?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
};

export type ImpactCategoryAggregateSelection = {
  __typename?: 'ImpactCategoryAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
};

export type ImpactCategoryConnectInput = {
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryConnectFieldInput>;
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasConnectFieldInput>>;
};

export type ImpactCategoryConnectOrCreateInput = {
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryConnectOrCreateFieldInput>;
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasConnectOrCreateFieldInput>>;
};

export type ImpactCategoryConnectOrCreateWhere = {
  node: ImpactCategoryUniqueWhere;
};

export type ImpactCategoryConnectWhere = {
  node: ImpactCategoryWhere;
};

export type ImpactCategoryCreateInput = {
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryFieldInput>;
  impactAreas?: InputMaybe<ImpactCategoryImpactAreasFieldInput>;
  name: Scalars['String']['input'];
  uniqueName: ImpactCategoryName;
};

export type ImpactCategoryDeleteInput = {
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryDeleteFieldInput>;
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasDeleteFieldInput>>;
};

export type ImpactCategoryDisconnectInput = {
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryDisconnectFieldInput>;
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasDisconnectFieldInput>>;
};

export type ImpactCategoryDoughnutCategoryAggregateInput = {
  AND?: InputMaybe<Array<ImpactCategoryDoughnutCategoryAggregateInput>>;
  NOT?: InputMaybe<ImpactCategoryDoughnutCategoryAggregateInput>;
  OR?: InputMaybe<Array<ImpactCategoryDoughnutCategoryAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ImpactCategoryDoughnutCategoryNodeAggregationWhereInput>;
};

export type ImpactCategoryDoughnutCategoryConnectFieldInput = {
  connect?: InputMaybe<DoughnutCategoryConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DoughnutCategoryConnectWhere>;
};

export type ImpactCategoryDoughnutCategoryConnectOrCreateFieldInput = {
  onCreate: ImpactCategoryDoughnutCategoryConnectOrCreateFieldInputOnCreate;
  where: DoughnutCategoryConnectOrCreateWhere;
};

export type ImpactCategoryDoughnutCategoryConnectOrCreateFieldInputOnCreate = {
  node: DoughnutCategoryOnCreateInput;
};

export type ImpactCategoryDoughnutCategoryConnection = {
  __typename?: 'ImpactCategoryDoughnutCategoryConnection';
  edges: Array<ImpactCategoryDoughnutCategoryRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ImpactCategoryDoughnutCategoryConnectionSort = {
  node?: InputMaybe<DoughnutCategorySort>;
};

export type ImpactCategoryDoughnutCategoryConnectionWhere = {
  AND?: InputMaybe<Array<ImpactCategoryDoughnutCategoryConnectionWhere>>;
  NOT?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
  OR?: InputMaybe<Array<ImpactCategoryDoughnutCategoryConnectionWhere>>;
  node?: InputMaybe<DoughnutCategoryWhere>;
};

export type ImpactCategoryDoughnutCategoryCreateFieldInput = {
  node: DoughnutCategoryCreateInput;
};

export type ImpactCategoryDoughnutCategoryDeleteFieldInput = {
  delete?: InputMaybe<DoughnutCategoryDeleteInput>;
  where?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
};

export type ImpactCategoryDoughnutCategoryDisconnectFieldInput = {
  disconnect?: InputMaybe<DoughnutCategoryDisconnectInput>;
  where?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
};

export type ImpactCategoryDoughnutCategoryDoughnutCategoryAggregationSelection = {
  __typename?: 'ImpactCategoryDoughnutCategoryDoughnutCategoryAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ImpactCategoryDoughnutCategoryDoughnutCategoryNodeAggregateSelection>;
};

export type ImpactCategoryDoughnutCategoryDoughnutCategoryNodeAggregateSelection = {
  __typename?: 'ImpactCategoryDoughnutCategoryDoughnutCategoryNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export type ImpactCategoryDoughnutCategoryFieldInput = {
  connect?: InputMaybe<ImpactCategoryDoughnutCategoryConnectFieldInput>;
  connectOrCreate?: InputMaybe<ImpactCategoryDoughnutCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactCategoryDoughnutCategoryCreateFieldInput>;
};

export type ImpactCategoryDoughnutCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactCategoryDoughnutCategoryNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactCategoryDoughnutCategoryNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ImpactCategoryDoughnutCategoryNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ImpactCategoryDoughnutCategoryRelationship = {
  __typename?: 'ImpactCategoryDoughnutCategoryRelationship';
  cursor: Scalars['String']['output'];
  node: DoughnutCategory;
};

export type ImpactCategoryDoughnutCategoryUpdateConnectionInput = {
  node?: InputMaybe<DoughnutCategoryUpdateInput>;
};

export type ImpactCategoryDoughnutCategoryUpdateFieldInput = {
  connect?: InputMaybe<ImpactCategoryDoughnutCategoryConnectFieldInput>;
  connectOrCreate?: InputMaybe<ImpactCategoryDoughnutCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactCategoryDoughnutCategoryCreateFieldInput>;
  delete?: InputMaybe<ImpactCategoryDoughnutCategoryDeleteFieldInput>;
  disconnect?: InputMaybe<ImpactCategoryDoughnutCategoryDisconnectFieldInput>;
  update?: InputMaybe<ImpactCategoryDoughnutCategoryUpdateConnectionInput>;
  where?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
};

export type ImpactCategoryEdge = {
  __typename?: 'ImpactCategoryEdge';
  cursor: Scalars['String']['output'];
  node: ImpactCategory;
};

export type ImpactCategoryImpactAreaImpactAreasAggregationSelection = {
  __typename?: 'ImpactCategoryImpactAreaImpactAreasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ImpactCategoryImpactAreaImpactAreasNodeAggregateSelection>;
};

export type ImpactCategoryImpactAreaImpactAreasNodeAggregateSelection = {
  __typename?: 'ImpactCategoryImpactAreaImpactAreasNodeAggregateSelection';
  context: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  questions: StringAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
};

export type ImpactCategoryImpactAreasAggregateInput = {
  AND?: InputMaybe<Array<ImpactCategoryImpactAreasAggregateInput>>;
  NOT?: InputMaybe<ImpactCategoryImpactAreasAggregateInput>;
  OR?: InputMaybe<Array<ImpactCategoryImpactAreasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ImpactCategoryImpactAreasNodeAggregationWhereInput>;
};

export type ImpactCategoryImpactAreasConnectFieldInput = {
  connect?: InputMaybe<Array<ImpactAreaConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ImpactAreaConnectWhere>;
};

export type ImpactCategoryImpactAreasConnectOrCreateFieldInput = {
  onCreate: ImpactCategoryImpactAreasConnectOrCreateFieldInputOnCreate;
  where: ImpactAreaConnectOrCreateWhere;
};

export type ImpactCategoryImpactAreasConnectOrCreateFieldInputOnCreate = {
  node: ImpactAreaOnCreateInput;
};

export type ImpactCategoryImpactAreasConnection = {
  __typename?: 'ImpactCategoryImpactAreasConnection';
  edges: Array<ImpactCategoryImpactAreasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ImpactCategoryImpactAreasConnectionSort = {
  node?: InputMaybe<ImpactAreaSort>;
};

export type ImpactCategoryImpactAreasConnectionWhere = {
  AND?: InputMaybe<Array<ImpactCategoryImpactAreasConnectionWhere>>;
  NOT?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  OR?: InputMaybe<Array<ImpactCategoryImpactAreasConnectionWhere>>;
  node?: InputMaybe<ImpactAreaWhere>;
};

export type ImpactCategoryImpactAreasCreateFieldInput = {
  node: ImpactAreaCreateInput;
};

export type ImpactCategoryImpactAreasDeleteFieldInput = {
  delete?: InputMaybe<ImpactAreaDeleteInput>;
  where?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
};

export type ImpactCategoryImpactAreasDisconnectFieldInput = {
  disconnect?: InputMaybe<ImpactAreaDisconnectInput>;
  where?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
};

export type ImpactCategoryImpactAreasFieldInput = {
  connect?: InputMaybe<Array<ImpactCategoryImpactAreasConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ImpactCategoryImpactAreasConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ImpactCategoryImpactAreasCreateFieldInput>>;
};

export type ImpactCategoryImpactAreasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactCategoryImpactAreasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactCategoryImpactAreasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ImpactCategoryImpactAreasNodeAggregationWhereInput>>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  questions_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  questions_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ImpactCategoryImpactAreasRelationship = {
  __typename?: 'ImpactCategoryImpactAreasRelationship';
  cursor: Scalars['String']['output'];
  node: ImpactArea;
};

export type ImpactCategoryImpactAreasUpdateConnectionInput = {
  node?: InputMaybe<ImpactAreaUpdateInput>;
};

export type ImpactCategoryImpactAreasUpdateFieldInput = {
  connect?: InputMaybe<Array<ImpactCategoryImpactAreasConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ImpactCategoryImpactAreasConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ImpactCategoryImpactAreasCreateFieldInput>>;
  delete?: InputMaybe<Array<ImpactCategoryImpactAreasDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ImpactCategoryImpactAreasDisconnectFieldInput>>;
  update?: InputMaybe<ImpactCategoryImpactAreasUpdateConnectionInput>;
  where?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
};

export enum ImpactCategoryName {
  Atmosphere = 'ATMOSPHERE',
  BasicServices = 'BASIC_SERVICES',
  ChemicalWasteAndSupplyChains = 'CHEMICAL_WASTE_AND_SUPPLY_CHAINS',
  EnvironmentalPreservation = 'ENVIRONMENTAL_PRESERVATION',
  SocialOpportunities = 'SOCIAL_OPPORTUNITIES',
  SocialRights = 'SOCIAL_RIGHTS'
}

export type ImpactCategoryOnCreateInput = {
  name: Scalars['String']['input'];
  uniqueName: ImpactCategoryName;
};

export type ImpactCategoryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ImpactCategorySort objects to sort ImpactCategories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ImpactCategorySort>>;
};

export type ImpactCategoryRelationInput = {
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryCreateFieldInput>;
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasCreateFieldInput>>;
};

/** Fields to sort ImpactCategories by. The order in which sorts are applied is not guaranteed when specifying many fields in one ImpactCategorySort object. */
export type ImpactCategorySort = {
  name?: InputMaybe<SortDirection>;
  uniqueName?: InputMaybe<SortDirection>;
};

export type ImpactCategoryUniqueWhere = {
  uniqueName?: InputMaybe<ImpactCategoryName>;
};

export type ImpactCategoryUpdateInput = {
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryUpdateFieldInput>;
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<ImpactCategoryName>;
};

export type ImpactCategoryWhere = {
  AND?: InputMaybe<Array<ImpactCategoryWhere>>;
  NOT?: InputMaybe<ImpactCategoryWhere>;
  OR?: InputMaybe<Array<ImpactCategoryWhere>>;
  doughnutCategory?: InputMaybe<DoughnutCategoryWhere>;
  doughnutCategoryAggregate?: InputMaybe<ImpactCategoryDoughnutCategoryAggregateInput>;
  doughnutCategoryConnection?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
  doughnutCategoryConnection_NOT?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
  doughnutCategory_NOT?: InputMaybe<DoughnutCategoryWhere>;
  impactAreasAggregate?: InputMaybe<ImpactCategoryImpactAreasAggregateInput>;
  /** Return ImpactCategories where all of the related ImpactCategoryImpactAreasConnections match this filter */
  impactAreasConnection_ALL?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  /** Return ImpactCategories where none of the related ImpactCategoryImpactAreasConnections match this filter */
  impactAreasConnection_NONE?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  /** Return ImpactCategories where one of the related ImpactCategoryImpactAreasConnections match this filter */
  impactAreasConnection_SINGLE?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  /** Return ImpactCategories where some of the related ImpactCategoryImpactAreasConnections match this filter */
  impactAreasConnection_SOME?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  /** Return ImpactCategories where all of the related ImpactAreas match this filter */
  impactAreas_ALL?: InputMaybe<ImpactAreaWhere>;
  /** Return ImpactCategories where none of the related ImpactAreas match this filter */
  impactAreas_NONE?: InputMaybe<ImpactAreaWhere>;
  /** Return ImpactCategories where one of the related ImpactAreas match this filter */
  impactAreas_SINGLE?: InputMaybe<ImpactAreaWhere>;
  /** Return ImpactCategories where some of the related ImpactAreas match this filter */
  impactAreas_SOME?: InputMaybe<ImpactAreaWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<ImpactCategoryName>;
  uniqueName_IN?: InputMaybe<Array<ImpactCategoryName>>;
};

export type Impacts = {
  aspect: Scalars['String']['output'];
  reason: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export type ImpactsCreateInput = {
  aspect: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  score: Scalars['Float']['input'];
};

export type ImpactsSort = {
  aspect?: InputMaybe<SortDirection>;
  reason?: InputMaybe<SortDirection>;
  score?: InputMaybe<SortDirection>;
};

export type ImpactsUpdateInput = {
  aspect?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  score_ADD?: InputMaybe<Scalars['Float']['input']>;
  score_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  score_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  score_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
};

export type ImpactsWhere = {
  AND?: InputMaybe<Array<ImpactsWhere>>;
  NOT?: InputMaybe<ImpactsWhere>;
  OR?: InputMaybe<Array<ImpactsWhere>>;
  aspect?: InputMaybe<Scalars['String']['input']>;
  aspect_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  aspect_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  aspect_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  aspect_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  reason_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  reason_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  score_GT?: InputMaybe<Scalars['Float']['input']>;
  score_GTE?: InputMaybe<Scalars['Float']['input']>;
  score_IN?: InputMaybe<Array<Scalars['Float']['input']>>;
  score_LT?: InputMaybe<Scalars['Float']['input']>;
  score_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type Location = {
  __typename?: 'Location';
  city: Scalars['String']['output'];
  nation: NationCode;
  projects: Array<ImpactArea>;
  projectsAggregate?: Maybe<LocationImpactAreaProjectsAggregationSelection>;
  projectsConnection: LocationProjectsConnection;
  state?: Maybe<Scalars['String']['output']>;
  uniqueName: Scalars['String']['output'];
};


export type LocationProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ImpactAreaOptions>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type LocationProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type LocationProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LocationProjectsConnectionSort>>;
  where?: InputMaybe<LocationProjectsConnectionWhere>;
};

export type LocationAggregateSelection = {
  __typename?: 'LocationAggregateSelection';
  city: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  state: StringAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
};

export type LocationConnectInput = {
  projects?: InputMaybe<Array<LocationProjectsConnectFieldInput>>;
};

export type LocationConnectOrCreateInput = {
  projects?: InputMaybe<Array<LocationProjectsConnectOrCreateFieldInput>>;
};

export type LocationConnectOrCreateWhere = {
  node: LocationUniqueWhere;
};

export type LocationConnectWhere = {
  node: LocationWhere;
};

export type LocationCreateInput = {
  city: Scalars['String']['input'];
  nation: NationCode;
  projects?: InputMaybe<LocationProjectsFieldInput>;
  state?: InputMaybe<Scalars['String']['input']>;
  uniqueName: Scalars['String']['input'];
};

export type LocationDeleteInput = {
  projects?: InputMaybe<Array<LocationProjectsDeleteFieldInput>>;
};

export type LocationDisconnectInput = {
  projects?: InputMaybe<Array<LocationProjectsDisconnectFieldInput>>;
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String']['output'];
  node: Location;
};

export type LocationImpactAreaProjectsAggregationSelection = {
  __typename?: 'LocationImpactAreaProjectsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<LocationImpactAreaProjectsNodeAggregateSelection>;
};

export type LocationImpactAreaProjectsNodeAggregateSelection = {
  __typename?: 'LocationImpactAreaProjectsNodeAggregateSelection';
  context: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  questions: StringAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
};

export type LocationOnCreateInput = {
  city: Scalars['String']['input'];
  nation: NationCode;
  state?: InputMaybe<Scalars['String']['input']>;
  uniqueName: Scalars['String']['input'];
};

export type LocationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more LocationSort objects to sort Locations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LocationSort>>;
};

export type LocationProjectsAggregateInput = {
  AND?: InputMaybe<Array<LocationProjectsAggregateInput>>;
  NOT?: InputMaybe<LocationProjectsAggregateInput>;
  OR?: InputMaybe<Array<LocationProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<LocationProjectsNodeAggregationWhereInput>;
};

export type LocationProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ImpactAreaConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ImpactAreaConnectWhere>;
};

export type LocationProjectsConnectOrCreateFieldInput = {
  onCreate: LocationProjectsConnectOrCreateFieldInputOnCreate;
  where: ImpactAreaConnectOrCreateWhere;
};

export type LocationProjectsConnectOrCreateFieldInputOnCreate = {
  node: ImpactAreaOnCreateInput;
};

export type LocationProjectsConnection = {
  __typename?: 'LocationProjectsConnection';
  edges: Array<LocationProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LocationProjectsConnectionSort = {
  node?: InputMaybe<ImpactAreaSort>;
};

export type LocationProjectsConnectionWhere = {
  AND?: InputMaybe<Array<LocationProjectsConnectionWhere>>;
  NOT?: InputMaybe<LocationProjectsConnectionWhere>;
  OR?: InputMaybe<Array<LocationProjectsConnectionWhere>>;
  node?: InputMaybe<ImpactAreaWhere>;
};

export type LocationProjectsCreateFieldInput = {
  node: ImpactAreaCreateInput;
};

export type LocationProjectsDeleteFieldInput = {
  delete?: InputMaybe<ImpactAreaDeleteInput>;
  where?: InputMaybe<LocationProjectsConnectionWhere>;
};

export type LocationProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ImpactAreaDisconnectInput>;
  where?: InputMaybe<LocationProjectsConnectionWhere>;
};

export type LocationProjectsFieldInput = {
  connect?: InputMaybe<Array<LocationProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LocationProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LocationProjectsCreateFieldInput>>;
};

export type LocationProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LocationProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LocationProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LocationProjectsNodeAggregationWhereInput>>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  questions_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  questions_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type LocationProjectsRelationship = {
  __typename?: 'LocationProjectsRelationship';
  cursor: Scalars['String']['output'];
  node: ImpactArea;
};

export type LocationProjectsUpdateConnectionInput = {
  node?: InputMaybe<ImpactAreaUpdateInput>;
};

export type LocationProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<LocationProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LocationProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LocationProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<LocationProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LocationProjectsDisconnectFieldInput>>;
  update?: InputMaybe<LocationProjectsUpdateConnectionInput>;
  where?: InputMaybe<LocationProjectsConnectionWhere>;
};

export type LocationRelationInput = {
  projects?: InputMaybe<Array<LocationProjectsCreateFieldInput>>;
};

/** Fields to sort Locations by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationSort object. */
export type LocationSort = {
  city?: InputMaybe<SortDirection>;
  nation?: InputMaybe<SortDirection>;
  state?: InputMaybe<SortDirection>;
  uniqueName?: InputMaybe<SortDirection>;
};

export type LocationUniqueWhere = {
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type LocationUpdateInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  nation?: InputMaybe<NationCode>;
  projects?: InputMaybe<Array<LocationProjectsUpdateFieldInput>>;
  state?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type LocationWhere = {
  AND?: InputMaybe<Array<LocationWhere>>;
  NOT?: InputMaybe<LocationWhere>;
  OR?: InputMaybe<Array<LocationWhere>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  city_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  city_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  city_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nation?: InputMaybe<NationCode>;
  nation_IN?: InputMaybe<Array<NationCode>>;
  projectsAggregate?: InputMaybe<LocationProjectsAggregateInput>;
  /** Return Locations where all of the related LocationProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<LocationProjectsConnectionWhere>;
  /** Return Locations where none of the related LocationProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<LocationProjectsConnectionWhere>;
  /** Return Locations where one of the related LocationProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<LocationProjectsConnectionWhere>;
  /** Return Locations where some of the related LocationProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<LocationProjectsConnectionWhere>;
  /** Return Locations where all of the related ImpactAreas match this filter */
  projects_ALL?: InputMaybe<ImpactAreaWhere>;
  /** Return Locations where none of the related ImpactAreas match this filter */
  projects_NONE?: InputMaybe<ImpactAreaWhere>;
  /** Return Locations where one of the related ImpactAreas match this filter */
  projects_SINGLE?: InputMaybe<ImpactAreaWhere>;
  /** Return Locations where some of the related ImpactAreas match this filter */
  projects_SOME?: InputMaybe<ImpactAreaWhere>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  state_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  state_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
  uniqueName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  uniqueName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  uniqueName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  uniqueName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  edges: Array<LocationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDoughnutCategories: CreateDoughnutCategoriesMutationResponse;
  createImpactAreas: CreateImpactAreasMutationResponse;
  createImpactCategories: CreateImpactCategoriesMutationResponse;
  createLocations: CreateLocationsMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  deleteDoughnutCategories: DeleteInfo;
  deleteImpactAreas: DeleteInfo;
  deleteImpactCategories: DeleteInfo;
  deleteLocations: DeleteInfo;
  deleteProjects: DeleteInfo;
  updateDoughnutCategories: UpdateDoughnutCategoriesMutationResponse;
  updateImpactAreas: UpdateImpactAreasMutationResponse;
  updateImpactCategories: UpdateImpactCategoriesMutationResponse;
  updateLocations: UpdateLocationsMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
};


export type MutationCreateDoughnutCategoriesArgs = {
  input: Array<DoughnutCategoryCreateInput>;
};


export type MutationCreateImpactAreasArgs = {
  input: Array<ImpactAreaCreateInput>;
};


export type MutationCreateImpactCategoriesArgs = {
  input: Array<ImpactCategoryCreateInput>;
};


export type MutationCreateLocationsArgs = {
  input: Array<LocationCreateInput>;
};


export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};


export type MutationDeleteDoughnutCategoriesArgs = {
  delete?: InputMaybe<DoughnutCategoryDeleteInput>;
  where?: InputMaybe<DoughnutCategoryWhere>;
};


export type MutationDeleteImpactAreasArgs = {
  delete?: InputMaybe<ImpactAreaDeleteInput>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type MutationDeleteImpactCategoriesArgs = {
  delete?: InputMaybe<ImpactCategoryDeleteInput>;
  where?: InputMaybe<ImpactCategoryWhere>;
};


export type MutationDeleteLocationsArgs = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<LocationWhere>;
};


export type MutationDeleteProjectsArgs = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationUpdateDoughnutCategoriesArgs = {
  connect?: InputMaybe<DoughnutCategoryConnectInput>;
  connectOrCreate?: InputMaybe<DoughnutCategoryConnectOrCreateInput>;
  create?: InputMaybe<DoughnutCategoryRelationInput>;
  delete?: InputMaybe<DoughnutCategoryDeleteInput>;
  disconnect?: InputMaybe<DoughnutCategoryDisconnectInput>;
  update?: InputMaybe<DoughnutCategoryUpdateInput>;
  where?: InputMaybe<DoughnutCategoryWhere>;
};


export type MutationUpdateImpactAreasArgs = {
  connect?: InputMaybe<ImpactAreaConnectInput>;
  connectOrCreate?: InputMaybe<ImpactAreaConnectOrCreateInput>;
  create?: InputMaybe<ImpactAreaRelationInput>;
  delete?: InputMaybe<ImpactAreaDeleteInput>;
  disconnect?: InputMaybe<ImpactAreaDisconnectInput>;
  update?: InputMaybe<ImpactAreaUpdateInput>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type MutationUpdateImpactCategoriesArgs = {
  connect?: InputMaybe<ImpactCategoryConnectInput>;
  connectOrCreate?: InputMaybe<ImpactCategoryConnectOrCreateInput>;
  create?: InputMaybe<ImpactCategoryRelationInput>;
  delete?: InputMaybe<ImpactCategoryDeleteInput>;
  disconnect?: InputMaybe<ImpactCategoryDisconnectInput>;
  update?: InputMaybe<ImpactCategoryUpdateInput>;
  where?: InputMaybe<ImpactCategoryWhere>;
};


export type MutationUpdateLocationsArgs = {
  connect?: InputMaybe<LocationConnectInput>;
  connectOrCreate?: InputMaybe<LocationConnectOrCreateInput>;
  create?: InputMaybe<LocationRelationInput>;
  delete?: InputMaybe<LocationDeleteInput>;
  disconnect?: InputMaybe<LocationDisconnectInput>;
  update?: InputMaybe<LocationUpdateInput>;
  where?: InputMaybe<LocationWhere>;
};


export type MutationUpdateProjectsArgs = {
  connect?: InputMaybe<ProjectConnectInput>;
  connectOrCreate?: InputMaybe<ProjectConnectOrCreateInput>;
  create?: InputMaybe<ProjectRelationInput>;
  delete?: InputMaybe<ProjectDeleteInput>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  update?: InputMaybe<ProjectUpdateInput>;
  where?: InputMaybe<ProjectWhere>;
};

export enum NationCode {
  Abw = 'ABW',
  Afg = 'AFG',
  Ago = 'AGO',
  Aia = 'AIA',
  Ala = 'ALA',
  Alb = 'ALB',
  And = 'AND',
  Ant = 'ANT',
  Are = 'ARE',
  Arg = 'ARG',
  Arm = 'ARM',
  Asm = 'ASM',
  Ata = 'ATA',
  Atf = 'ATF',
  Atg = 'ATG',
  Aus = 'AUS',
  Aut = 'AUT',
  Aze = 'AZE',
  Bdi = 'BDI',
  Bel = 'BEL',
  Ben = 'BEN',
  Bfa = 'BFA',
  Bgd = 'BGD',
  Bgr = 'BGR',
  Bhr = 'BHR',
  Bhs = 'BHS',
  Bih = 'BIH',
  Blm = 'BLM',
  Blr = 'BLR',
  Blz = 'BLZ',
  Bmu = 'BMU',
  Bol = 'BOL',
  Bra = 'BRA',
  Brb = 'BRB',
  Brn = 'BRN',
  Btn = 'BTN',
  Bvt = 'BVT',
  Bwa = 'BWA',
  Caf = 'CAF',
  Can = 'CAN',
  Cck = 'CCK',
  Che = 'CHE',
  Chl = 'CHL',
  Chn = 'CHN',
  Civ = 'CIV',
  Cmr = 'CMR',
  Cod = 'COD',
  Cog = 'COG',
  Cok = 'COK',
  Col = 'COL',
  Com = 'COM',
  Cpv = 'CPV',
  Cri = 'CRI',
  Cub = 'CUB',
  Cxr = 'CXR',
  Cym = 'CYM',
  Cyp = 'CYP',
  Cze = 'CZE',
  Deu = 'DEU',
  Dji = 'DJI',
  Dma = 'DMA',
  Dnk = 'DNK',
  Dom = 'DOM',
  Dza = 'DZA',
  Ecu = 'ECU',
  Egy = 'EGY',
  Eri = 'ERI',
  Esh = 'ESH',
  Esp = 'ESP',
  Est = 'EST',
  Eth = 'ETH',
  Fin = 'FIN',
  Fji = 'FJI',
  Flk = 'FLK',
  Fra = 'FRA',
  Fro = 'FRO',
  Fsm = 'FSM',
  Gab = 'GAB',
  Gbr = 'GBR',
  Geo = 'GEO',
  Ggy = 'GGY',
  Gha = 'GHA',
  Gib = 'GIB',
  Gin = 'GIN',
  Glp = 'GLP',
  Gmb = 'GMB',
  Gnb = 'GNB',
  Gnq = 'GNQ',
  Grc = 'GRC',
  Grd = 'GRD',
  Grl = 'GRL',
  Gtm = 'GTM',
  Guf = 'GUF',
  Gum = 'GUM',
  Guy = 'GUY',
  Hkg = 'HKG',
  Hmd = 'HMD',
  Hnd = 'HND',
  Hrv = 'HRV',
  Hti = 'HTI',
  Hun = 'HUN',
  Idn = 'IDN',
  Imn = 'IMN',
  Ind = 'IND',
  Iot = 'IOT',
  Irl = 'IRL',
  Irn = 'IRN',
  Irq = 'IRQ',
  Isl = 'ISL',
  Isr = 'ISR',
  Ita = 'ITA',
  Jey = 'JEY',
  Jm = 'JM',
  Jor = 'JOR',
  Jpn = 'JPN',
  Kaz = 'KAZ',
  Ken = 'KEN',
  Kgz = 'KGZ',
  Khm = 'KHM',
  Kir = 'KIR',
  Kna = 'KNA',
  Kor = 'KOR',
  Kwt = 'KWT',
  Lao = 'LAO',
  Lbn = 'LBN',
  Lbr = 'LBR',
  Lby = 'LBY',
  Lca = 'LCA',
  Lie = 'LIE',
  Lka = 'LKA',
  Lso = 'LSO',
  Ltu = 'LTU',
  Lux = 'LUX',
  Lva = 'LVA',
  Mac = 'MAC',
  Maf = 'MAF',
  Mar = 'MAR',
  Mco = 'MCO',
  Mda = 'MDA',
  Mdg = 'MDG',
  Mdv = 'MDV',
  Mex = 'MEX',
  Mhl = 'MHL',
  Mkd = 'MKD',
  Mli = 'MLI',
  Mlt = 'MLT',
  Mmr = 'MMR',
  Mne = 'MNE',
  Mng = 'MNG',
  Mnp = 'MNP',
  Moz = 'MOZ',
  Mrt = 'MRT',
  Msr = 'MSR',
  Mtq = 'MTQ',
  Mus = 'MUS',
  Mwi = 'MWI',
  Mys = 'MYS',
  Myt = 'MYT',
  Nam = 'NAM',
  Ncl = 'NCL',
  Ner = 'NER',
  Nfk = 'NFK',
  Nga = 'NGA',
  Nic = 'NIC',
  Niu = 'NIU',
  Nld = 'NLD',
  Nor = 'NOR',
  Npl = 'NPL',
  Nru = 'NRU',
  Nzl = 'NZL',
  Omn = 'OMN',
  Pak = 'PAK',
  Pan = 'PAN',
  Pcn = 'PCN',
  Per = 'PER',
  Phl = 'PHL',
  Plw = 'PLW',
  Png = 'PNG',
  Pol = 'POL',
  Pri = 'PRI',
  Prk = 'PRK',
  Prt = 'PRT',
  Pry = 'PRY',
  Pse = 'PSE',
  Pyf = 'PYF',
  Qat = 'QAT',
  Reu = 'REU',
  Rou = 'ROU',
  Rus = 'RUS',
  Rwa = 'RWA',
  Sau = 'SAU',
  Sdn = 'SDN',
  Sen = 'SEN',
  Sgp = 'SGP',
  Sgs = 'SGS',
  Shn = 'SHN',
  Sjm = 'SJM',
  Slb = 'SLB',
  Sle = 'SLE',
  Slv = 'SLV',
  Smr = 'SMR',
  Som = 'SOM',
  Spm = 'SPM',
  Srb = 'SRB',
  Ssd = 'SSD',
  Stp = 'STP',
  Sur = 'SUR',
  Svk = 'SVK',
  Svn = 'SVN',
  Swe = 'SWE',
  Swz = 'SWZ',
  Syc = 'SYC',
  Syr = 'SYR',
  Tca = 'TCA',
  Tcd = 'TCD',
  Tgo = 'TGO',
  Tha = 'THA',
  Tjk = 'TJK',
  Tkl = 'TKL',
  Tkm = 'TKM',
  Tls = 'TLS',
  Ton = 'TON',
  Tto = 'TTO',
  Tun = 'TUN',
  Tur = 'TUR',
  Tuv = 'TUV',
  Twn = 'TWN',
  Tza = 'TZA',
  Uga = 'UGA',
  Ukr = 'UKR',
  Umi = 'UMI',
  Ury = 'URY',
  Usa = 'USA',
  Uzb = 'UZB',
  Vat = 'VAT',
  Vct = 'VCT',
  Ven = 'VEN',
  Vgb = 'VGB',
  Vir = 'VIR',
  Vnm = 'VNM',
  Vut = 'VUT',
  Wlf = 'WLF',
  Wsm = 'WSM',
  Yem = 'YEM',
  Zaf = 'ZAF',
  Zmb = 'ZMB',
  Zwe = 'ZWE'
}

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Project = {
  __typename?: 'Project';
  impactAreas: Array<ImpactArea>;
  impactAreasAggregate?: Maybe<ProjectImpactAreaImpactAreasAggregationSelection>;
  impactAreasConnection: ProjectImpactAreasConnection;
  locations: Array<Location>;
  locationsAggregate?: Maybe<ProjectLocationLocationsAggregationSelection>;
  locationsConnection: ProjectLocationsConnection;
  name: Scalars['String']['output'];
  problem: Scalars['String']['output'];
  solution: Scalars['String']['output'];
  uniqueName: Scalars['String']['output'];
};


export type ProjectImpactAreasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ImpactAreaOptions>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type ProjectImpactAreasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type ProjectImpactAreasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectImpactAreasConnectionSort>>;
  where?: InputMaybe<ProjectImpactAreasConnectionWhere>;
};


export type ProjectLocationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};


export type ProjectLocationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LocationWhere>;
};


export type ProjectLocationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectLocationsConnectionSort>>;
  where?: InputMaybe<ProjectLocationsConnectionWhere>;
};

export type ProjectAggregateSelection = {
  __typename?: 'ProjectAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  problem: StringAggregateSelectionNonNullable;
  solution: StringAggregateSelectionNonNullable;
  uniqueName: StringAggregateSelectionNonNullable;
};

export type ProjectConnectInput = {
  impactAreas?: InputMaybe<Array<ProjectImpactAreasConnectFieldInput>>;
  locations?: InputMaybe<Array<ProjectLocationsConnectFieldInput>>;
};

export type ProjectConnectOrCreateInput = {
  impactAreas?: InputMaybe<Array<ProjectImpactAreasConnectOrCreateFieldInput>>;
  locations?: InputMaybe<Array<ProjectLocationsConnectOrCreateFieldInput>>;
};

export type ProjectConnectOrCreateWhere = {
  node: ProjectUniqueWhere;
};

export type ProjectConnectWhere = {
  node: ProjectWhere;
};

export type ProjectCreateInput = {
  impactAreas?: InputMaybe<ProjectImpactAreasFieldInput>;
  locations?: InputMaybe<ProjectLocationsFieldInput>;
  name: Scalars['String']['input'];
  problem: Scalars['String']['input'];
  solution: Scalars['String']['input'];
  uniqueName: Scalars['String']['input'];
};

export type ProjectDeleteInput = {
  impactAreas?: InputMaybe<Array<ProjectImpactAreasDeleteFieldInput>>;
  locations?: InputMaybe<Array<ProjectLocationsDeleteFieldInput>>;
};

export type ProjectDisconnectInput = {
  impactAreas?: InputMaybe<Array<ProjectImpactAreasDisconnectFieldInput>>;
  locations?: InputMaybe<Array<ProjectLocationsDisconnectFieldInput>>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type ProjectImpactAreaImpactAreasAggregationSelection = {
  __typename?: 'ProjectImpactAreaImpactAreasAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ProjectImpactAreaImpactAreasEdgeAggregateSelection>;
  node?: Maybe<ProjectImpactAreaImpactAreasNodeAggregateSelection>;
};

export type ProjectImpactAreaImpactAreasEdgeAggregateSelection = {
  __typename?: 'ProjectImpactAreaImpactAreasEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  score: FloatAggregateSelectionNonNullable;
};

export type ProjectImpactAreaImpactAreasNodeAggregateSelection = {
  __typename?: 'ProjectImpactAreaImpactAreasNodeAggregateSelection';
  context: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  questions: StringAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
};

export type ProjectImpactAreasAggregateInput = {
  AND?: InputMaybe<Array<ProjectImpactAreasAggregateInput>>;
  NOT?: InputMaybe<ProjectImpactAreasAggregateInput>;
  OR?: InputMaybe<Array<ProjectImpactAreasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ProjectImpactAreasEdgeAggregationWhereInput>;
  node?: InputMaybe<ProjectImpactAreasNodeAggregationWhereInput>;
};

export type ProjectImpactAreasConnectFieldInput = {
  connect?: InputMaybe<Array<ImpactAreaConnectInput>>;
  edge: ImpactsCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ImpactAreaConnectWhere>;
};

export type ProjectImpactAreasConnectOrCreateFieldInput = {
  onCreate: ProjectImpactAreasConnectOrCreateFieldInputOnCreate;
  where: ImpactAreaConnectOrCreateWhere;
};

export type ProjectImpactAreasConnectOrCreateFieldInputOnCreate = {
  edge: ImpactsCreateInput;
  node: ImpactAreaOnCreateInput;
};

export type ProjectImpactAreasConnection = {
  __typename?: 'ProjectImpactAreasConnection';
  edges: Array<ProjectImpactAreasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectImpactAreasConnectionSort = {
  edge?: InputMaybe<ImpactsSort>;
  node?: InputMaybe<ImpactAreaSort>;
};

export type ProjectImpactAreasConnectionWhere = {
  AND?: InputMaybe<Array<ProjectImpactAreasConnectionWhere>>;
  NOT?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  OR?: InputMaybe<Array<ProjectImpactAreasConnectionWhere>>;
  edge?: InputMaybe<ImpactsWhere>;
  node?: InputMaybe<ImpactAreaWhere>;
};

export type ProjectImpactAreasCreateFieldInput = {
  edge: ImpactsCreateInput;
  node: ImpactAreaCreateInput;
};

export type ProjectImpactAreasDeleteFieldInput = {
  delete?: InputMaybe<ImpactAreaDeleteInput>;
  where?: InputMaybe<ProjectImpactAreasConnectionWhere>;
};

export type ProjectImpactAreasDisconnectFieldInput = {
  disconnect?: InputMaybe<ImpactAreaDisconnectInput>;
  where?: InputMaybe<ProjectImpactAreasConnectionWhere>;
};

export type ProjectImpactAreasEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectImpactAreasEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectImpactAreasEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectImpactAreasEdgeAggregationWhereInput>>;
  aspect_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  aspect_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  aspect_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  aspect_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  aspect_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  aspect_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  aspect_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  aspect_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  aspect_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  aspect_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  aspect_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  reason_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  reason_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  reason_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  reason_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  reason_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  reason_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  reason_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  reason_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  reason_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  reason_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  reason_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  score_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  score_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  score_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  score_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  score_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  score_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  score_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type ProjectImpactAreasFieldInput = {
  connect?: InputMaybe<Array<ProjectImpactAreasConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectImpactAreasConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectImpactAreasCreateFieldInput>>;
};

export type ProjectImpactAreasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectImpactAreasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectImpactAreasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectImpactAreasNodeAggregationWhereInput>>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  questions_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  questions_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  questions_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  questions_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  questions_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectImpactAreasRelationship = Impacts & {
  __typename?: 'ProjectImpactAreasRelationship';
  aspect: Scalars['String']['output'];
  cursor: Scalars['String']['output'];
  node: ImpactArea;
  reason: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export type ProjectImpactAreasUpdateConnectionInput = {
  edge?: InputMaybe<ImpactsUpdateInput>;
  node?: InputMaybe<ImpactAreaUpdateInput>;
};

export type ProjectImpactAreasUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectImpactAreasConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectImpactAreasConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectImpactAreasCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectImpactAreasDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectImpactAreasDisconnectFieldInput>>;
  update?: InputMaybe<ProjectImpactAreasUpdateConnectionInput>;
  where?: InputMaybe<ProjectImpactAreasConnectionWhere>;
};

export type ProjectLocationLocationsAggregationSelection = {
  __typename?: 'ProjectLocationLocationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectLocationLocationsNodeAggregateSelection>;
};

export type ProjectLocationLocationsNodeAggregateSelection = {
  __typename?: 'ProjectLocationLocationsNodeAggregateSelection';
  city: StringAggregateSelectionNonNullable;
  state: StringAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
};

export type ProjectLocationsAggregateInput = {
  AND?: InputMaybe<Array<ProjectLocationsAggregateInput>>;
  NOT?: InputMaybe<ProjectLocationsAggregateInput>;
  OR?: InputMaybe<Array<ProjectLocationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectLocationsNodeAggregationWhereInput>;
};

export type ProjectLocationsConnectFieldInput = {
  connect?: InputMaybe<Array<LocationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<LocationConnectWhere>;
};

export type ProjectLocationsConnectOrCreateFieldInput = {
  onCreate: ProjectLocationsConnectOrCreateFieldInputOnCreate;
  where: LocationConnectOrCreateWhere;
};

export type ProjectLocationsConnectOrCreateFieldInputOnCreate = {
  node: LocationOnCreateInput;
};

export type ProjectLocationsConnection = {
  __typename?: 'ProjectLocationsConnection';
  edges: Array<ProjectLocationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectLocationsConnectionSort = {
  node?: InputMaybe<LocationSort>;
};

export type ProjectLocationsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectLocationsConnectionWhere>>;
  NOT?: InputMaybe<ProjectLocationsConnectionWhere>;
  OR?: InputMaybe<Array<ProjectLocationsConnectionWhere>>;
  node?: InputMaybe<LocationWhere>;
};

export type ProjectLocationsCreateFieldInput = {
  node: LocationCreateInput;
};

export type ProjectLocationsDeleteFieldInput = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<ProjectLocationsConnectionWhere>;
};

export type ProjectLocationsDisconnectFieldInput = {
  disconnect?: InputMaybe<LocationDisconnectInput>;
  where?: InputMaybe<ProjectLocationsConnectionWhere>;
};

export type ProjectLocationsFieldInput = {
  connect?: InputMaybe<Array<ProjectLocationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectLocationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectLocationsCreateFieldInput>>;
};

export type ProjectLocationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectLocationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectLocationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectLocationsNodeAggregationWhereInput>>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectLocationsRelationship = {
  __typename?: 'ProjectLocationsRelationship';
  cursor: Scalars['String']['output'];
  node: Location;
};

export type ProjectLocationsUpdateConnectionInput = {
  node?: InputMaybe<LocationUpdateInput>;
};

export type ProjectLocationsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectLocationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectLocationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectLocationsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectLocationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectLocationsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectLocationsUpdateConnectionInput>;
  where?: InputMaybe<ProjectLocationsConnectionWhere>;
};

export type ProjectOnCreateInput = {
  name: Scalars['String']['input'];
  problem: Scalars['String']['input'];
  solution: Scalars['String']['input'];
  uniqueName: Scalars['String']['input'];
};

export type ProjectOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ProjectSort objects to sort Projects by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectSort>>;
};

export type ProjectRelationInput = {
  impactAreas?: InputMaybe<Array<ProjectImpactAreasCreateFieldInput>>;
  locations?: InputMaybe<Array<ProjectLocationsCreateFieldInput>>;
};

/** Fields to sort Projects by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectSort object. */
export type ProjectSort = {
  name?: InputMaybe<SortDirection>;
  problem?: InputMaybe<SortDirection>;
  solution?: InputMaybe<SortDirection>;
  uniqueName?: InputMaybe<SortDirection>;
};

export type ProjectUniqueWhere = {
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectUpdateInput = {
  impactAreas?: InputMaybe<Array<ProjectImpactAreasUpdateFieldInput>>;
  locations?: InputMaybe<Array<ProjectLocationsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  problem?: InputMaybe<Scalars['String']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectWhere = {
  AND?: InputMaybe<Array<ProjectWhere>>;
  NOT?: InputMaybe<ProjectWhere>;
  OR?: InputMaybe<Array<ProjectWhere>>;
  impactAreasAggregate?: InputMaybe<ProjectImpactAreasAggregateInput>;
  /** Return Projects where all of the related ProjectImpactAreasConnections match this filter */
  impactAreasConnection_ALL?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  /** Return Projects where none of the related ProjectImpactAreasConnections match this filter */
  impactAreasConnection_NONE?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  /** Return Projects where one of the related ProjectImpactAreasConnections match this filter */
  impactAreasConnection_SINGLE?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  /** Return Projects where some of the related ProjectImpactAreasConnections match this filter */
  impactAreasConnection_SOME?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  /** Return Projects where all of the related ImpactAreas match this filter */
  impactAreas_ALL?: InputMaybe<ImpactAreaWhere>;
  /** Return Projects where none of the related ImpactAreas match this filter */
  impactAreas_NONE?: InputMaybe<ImpactAreaWhere>;
  /** Return Projects where one of the related ImpactAreas match this filter */
  impactAreas_SINGLE?: InputMaybe<ImpactAreaWhere>;
  /** Return Projects where some of the related ImpactAreas match this filter */
  impactAreas_SOME?: InputMaybe<ImpactAreaWhere>;
  locationsAggregate?: InputMaybe<ProjectLocationsAggregateInput>;
  /** Return Projects where all of the related ProjectLocationsConnections match this filter */
  locationsConnection_ALL?: InputMaybe<ProjectLocationsConnectionWhere>;
  /** Return Projects where none of the related ProjectLocationsConnections match this filter */
  locationsConnection_NONE?: InputMaybe<ProjectLocationsConnectionWhere>;
  /** Return Projects where one of the related ProjectLocationsConnections match this filter */
  locationsConnection_SINGLE?: InputMaybe<ProjectLocationsConnectionWhere>;
  /** Return Projects where some of the related ProjectLocationsConnections match this filter */
  locationsConnection_SOME?: InputMaybe<ProjectLocationsConnectionWhere>;
  /** Return Projects where all of the related Locations match this filter */
  locations_ALL?: InputMaybe<LocationWhere>;
  /** Return Projects where none of the related Locations match this filter */
  locations_NONE?: InputMaybe<LocationWhere>;
  /** Return Projects where one of the related Locations match this filter */
  locations_SINGLE?: InputMaybe<LocationWhere>;
  /** Return Projects where some of the related Locations match this filter */
  locations_SOME?: InputMaybe<LocationWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  problem?: InputMaybe<Scalars['String']['input']>;
  problem_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  problem_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  problem_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  problem_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
  solution_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  solution_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  solution_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  solution_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
  uniqueName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  uniqueName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  uniqueName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  uniqueName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  doughnutCategories: Array<DoughnutCategory>;
  doughnutCategoriesAggregate: DoughnutCategoryAggregateSelection;
  doughnutCategoriesConnection: DoughnutCategoriesConnection;
  impactAreas: Array<ImpactArea>;
  impactAreasAggregate: ImpactAreaAggregateSelection;
  impactAreasConnection: ImpactAreasConnection;
  impactCategories: Array<ImpactCategory>;
  impactCategoriesAggregate: ImpactCategoryAggregateSelection;
  impactCategoriesConnection: ImpactCategoriesConnection;
  locations: Array<Location>;
  locationsAggregate: LocationAggregateSelection;
  locationsConnection: LocationsConnection;
  projects: Array<Project>;
  projectsAggregate: ProjectAggregateSelection;
  projectsConnection: ProjectsConnection;
};


export type QueryDoughnutCategoriesArgs = {
  options?: InputMaybe<DoughnutCategoryOptions>;
  where?: InputMaybe<DoughnutCategoryWhere>;
};


export type QueryDoughnutCategoriesAggregateArgs = {
  where?: InputMaybe<DoughnutCategoryWhere>;
};


export type QueryDoughnutCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DoughnutCategorySort>>>;
  where?: InputMaybe<DoughnutCategoryWhere>;
};


export type QueryImpactAreasArgs = {
  options?: InputMaybe<ImpactAreaOptions>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type QueryImpactAreasAggregateArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
};


export type QueryImpactAreasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ImpactAreaSort>>>;
  where?: InputMaybe<ImpactAreaWhere>;
};


export type QueryImpactCategoriesArgs = {
  options?: InputMaybe<ImpactCategoryOptions>;
  where?: InputMaybe<ImpactCategoryWhere>;
};


export type QueryImpactCategoriesAggregateArgs = {
  where?: InputMaybe<ImpactCategoryWhere>;
};


export type QueryImpactCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ImpactCategorySort>>>;
  where?: InputMaybe<ImpactCategoryWhere>;
};


export type QueryLocationsArgs = {
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};


export type QueryLocationsAggregateArgs = {
  where?: InputMaybe<LocationWhere>;
};


export type QueryLocationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<LocationSort>>>;
  where?: InputMaybe<LocationWhere>;
};


export type QueryProjectsArgs = {
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ProjectSort>>>;
  where?: InputMaybe<ProjectWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateDoughnutCategoriesMutationResponse = {
  __typename?: 'UpdateDoughnutCategoriesMutationResponse';
  doughnutCategories: Array<DoughnutCategory>;
  info: UpdateInfo;
};

export type UpdateImpactAreasMutationResponse = {
  __typename?: 'UpdateImpactAreasMutationResponse';
  impactAreas: Array<ImpactArea>;
  info: UpdateInfo;
};

export type UpdateImpactCategoriesMutationResponse = {
  __typename?: 'UpdateImpactCategoriesMutationResponse';
  impactCategories: Array<ImpactCategory>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateLocationsMutationResponse = {
  __typename?: 'UpdateLocationsMutationResponse';
  info: UpdateInfo;
  locations: Array<Location>;
};

export type UpdateProjectsMutationResponse = {
  __typename?: 'UpdateProjectsMutationResponse';
  info: UpdateInfo;
  projects: Array<Project>;
};

export type CreateImpactCategoriesMutationVariables = Exact<{
  input: Array<ImpactCategoryCreateInput> | ImpactCategoryCreateInput;
}>;


export type CreateImpactCategoriesMutation = { __typename?: 'Mutation', createImpactCategories: { __typename?: 'CreateImpactCategoriesMutationResponse', impactCategories: Array<{ __typename?: 'ImpactCategory', uniqueName: ImpactCategoryName, name: string, doughnutCategory?: { __typename?: 'DoughnutCategory', uniqueName: DoughnutCategoryName, name: string } | null }> } };

export type CreateProjectMutationVariables = Exact<{
  input: Array<ProjectCreateInput> | ProjectCreateInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProjects: { __typename?: 'CreateProjectsMutationResponse', projects: Array<{ __typename?: 'Project', name: string, uniqueName: string, solution: string, problem: string, locations: Array<{ __typename?: 'Location', uniqueName: string }> }> } };

export type UpdateProjectImpactAreasMutationVariables = Exact<{
  where?: InputMaybe<ProjectWhere>;
  connectOrCreate?: InputMaybe<ProjectConnectOrCreateInput>;
}>;


export type UpdateProjectImpactAreasMutation = { __typename?: 'Mutation', updateProjects: { __typename?: 'UpdateProjectsMutationResponse', projects: Array<{ __typename?: 'Project', uniqueName: string, impactAreas: Array<{ __typename?: 'ImpactArea', uniqueName: string }> }> } };

export type GetImpactAreasQueryVariables = Exact<{
  where?: InputMaybe<ImpactAreaWhere>;
}>;


export type GetImpactAreasQuery = { __typename?: 'Query', impactAreas: Array<{ __typename?: 'ImpactArea', name?: string | null, description?: string | null }> };

export type GetProjectsQueryVariables = Exact<{
  where?: InputMaybe<ProjectWhere>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', uniqueName: string }> };

export type GetProjectsImpactAreasQueryVariables = Exact<{
  where?: InputMaybe<ProjectWhere>;
}>;


export type GetProjectsImpactAreasQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', uniqueName: string, impactAreasConnection: { __typename?: 'ProjectImpactAreasConnection', edges: Array<{ __typename?: 'ProjectImpactAreasRelationship', aspect: string, reason: string, score: number, node: { __typename?: 'ImpactArea', uniqueName: string, description?: string | null } }> } }> };


export const CreateImpactCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateImpactCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ImpactCategoryCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImpactCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"impactCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"doughnutCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateImpactCategoriesMutation, CreateImpactCategoriesMutationVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"solution"}},{"kind":"Field","name":{"kind":"Name","value":"problem"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const UpdateProjectImpactAreasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjectImpactAreas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectConnectOrCreateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"connectOrCreate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"impactAreas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectImpactAreasMutation, UpdateProjectImpactAreasMutationVariables>;
export const GetImpactAreasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetImpactAreas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ImpactAreaWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"impactAreas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetImpactAreasQuery, GetImpactAreasQueryVariables>;
export const GetProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}}]}}]}}]} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetProjectsImpactAreasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectsImpactAreas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"impactAreasConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aspect"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsImpactAreasQuery, GetProjectsImpactAreasQueryVariables>;
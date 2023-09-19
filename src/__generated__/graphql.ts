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
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any; }
};

export type Consideration = {
  __typename?: 'Consideration';
  considerations: Array<Consideration>;
  considerationsAggregate?: Maybe<ConsiderationConsiderationConsiderationsAggregationSelection>;
  considerationsConnection: ConsiderationConsiderationsConnection;
  createdAt: Scalars['DateTime']['output'];
  details: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  projects: Array<Project>;
  projectsAggregate?: Maybe<ConsiderationProjectProjectsAggregationSelection>;
  projectsConnection: ConsiderationProjectsConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};


export type ConsiderationConsiderationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ConsiderationOptions>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type ConsiderationConsiderationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type ConsiderationConsiderationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ConsiderationConsiderationsConnectionSort>>;
  where?: InputMaybe<ConsiderationConsiderationsConnectionWhere>;
};


export type ConsiderationProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type ConsiderationProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type ConsiderationProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ConsiderationProjectsConnectionSort>>;
  where?: InputMaybe<ConsiderationProjectsConnectionWhere>;
};

export type ConsiderationAggregateSelection = {
  __typename?: 'ConsiderationAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  details: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ConsiderationConnectInput = {
  considerations?: InputMaybe<Array<ConsiderationConsiderationsConnectFieldInput>>;
  projects?: InputMaybe<Array<ConsiderationProjectsConnectFieldInput>>;
};

export type ConsiderationConnectOrCreateInput = {
  considerations?: InputMaybe<Array<ConsiderationConsiderationsConnectOrCreateFieldInput>>;
  projects?: InputMaybe<Array<ConsiderationProjectsConnectOrCreateFieldInput>>;
};

export type ConsiderationConnectOrCreateWhere = {
  node: ConsiderationUniqueWhere;
};

export type ConsiderationConnectWhere = {
  node: ConsiderationWhere;
};

export type ConsiderationConsiderationConsiderationsAggregationSelection = {
  __typename?: 'ConsiderationConsiderationConsiderationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ConsiderationConsiderationConsiderationsNodeAggregateSelection>;
};

export type ConsiderationConsiderationConsiderationsNodeAggregateSelection = {
  __typename?: 'ConsiderationConsiderationConsiderationsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  details: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ConsiderationConsiderationsAggregateInput = {
  AND?: InputMaybe<Array<ConsiderationConsiderationsAggregateInput>>;
  NOT?: InputMaybe<ConsiderationConsiderationsAggregateInput>;
  OR?: InputMaybe<Array<ConsiderationConsiderationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ConsiderationConsiderationsNodeAggregationWhereInput>;
};

export type ConsiderationConsiderationsConnectFieldInput = {
  connect?: InputMaybe<Array<ConsiderationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ConsiderationConnectWhere>;
};

export type ConsiderationConsiderationsConnectOrCreateFieldInput = {
  onCreate: ConsiderationConsiderationsConnectOrCreateFieldInputOnCreate;
  where: ConsiderationConnectOrCreateWhere;
};

export type ConsiderationConsiderationsConnectOrCreateFieldInputOnCreate = {
  node: ConsiderationOnCreateInput;
};

export type ConsiderationConsiderationsConnection = {
  __typename?: 'ConsiderationConsiderationsConnection';
  edges: Array<ConsiderationConsiderationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ConsiderationConsiderationsConnectionSort = {
  node?: InputMaybe<ConsiderationSort>;
};

export type ConsiderationConsiderationsConnectionWhere = {
  AND?: InputMaybe<Array<ConsiderationConsiderationsConnectionWhere>>;
  NOT?: InputMaybe<ConsiderationConsiderationsConnectionWhere>;
  OR?: InputMaybe<Array<ConsiderationConsiderationsConnectionWhere>>;
  node?: InputMaybe<ConsiderationWhere>;
};

export type ConsiderationConsiderationsCreateFieldInput = {
  node: ConsiderationCreateInput;
};

export type ConsiderationConsiderationsDeleteFieldInput = {
  delete?: InputMaybe<ConsiderationDeleteInput>;
  where?: InputMaybe<ConsiderationConsiderationsConnectionWhere>;
};

export type ConsiderationConsiderationsDisconnectFieldInput = {
  disconnect?: InputMaybe<ConsiderationDisconnectInput>;
  where?: InputMaybe<ConsiderationConsiderationsConnectionWhere>;
};

export type ConsiderationConsiderationsFieldInput = {
  connect?: InputMaybe<Array<ConsiderationConsiderationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ConsiderationConsiderationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ConsiderationConsiderationsCreateFieldInput>>;
};

export type ConsiderationConsiderationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ConsiderationConsiderationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ConsiderationConsiderationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ConsiderationConsiderationsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ConsiderationConsiderationsRelationship = {
  __typename?: 'ConsiderationConsiderationsRelationship';
  cursor: Scalars['String']['output'];
  node: Consideration;
};

export type ConsiderationConsiderationsUpdateConnectionInput = {
  node?: InputMaybe<ConsiderationUpdateInput>;
};

export type ConsiderationConsiderationsUpdateFieldInput = {
  connect?: InputMaybe<Array<ConsiderationConsiderationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ConsiderationConsiderationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ConsiderationConsiderationsCreateFieldInput>>;
  delete?: InputMaybe<Array<ConsiderationConsiderationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ConsiderationConsiderationsDisconnectFieldInput>>;
  update?: InputMaybe<ConsiderationConsiderationsUpdateConnectionInput>;
  where?: InputMaybe<ConsiderationConsiderationsConnectionWhere>;
};

export type ConsiderationCreateInput = {
  considerations?: InputMaybe<ConsiderationConsiderationsFieldInput>;
  details: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<ConsiderationProjectsFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type ConsiderationDeleteInput = {
  considerations?: InputMaybe<Array<ConsiderationConsiderationsDeleteFieldInput>>;
  projects?: InputMaybe<Array<ConsiderationProjectsDeleteFieldInput>>;
};

export type ConsiderationDisconnectInput = {
  considerations?: InputMaybe<Array<ConsiderationConsiderationsDisconnectFieldInput>>;
  projects?: InputMaybe<Array<ConsiderationProjectsDisconnectFieldInput>>;
};

export type ConsiderationEdge = {
  __typename?: 'ConsiderationEdge';
  cursor: Scalars['String']['output'];
  node: Consideration;
};

export type ConsiderationOnCreateInput = {
  details: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type ConsiderationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ConsiderationSort objects to sort Considerations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ConsiderationSort>>;
};

export type ConsiderationProjectProjectsAggregationSelection = {
  __typename?: 'ConsiderationProjectProjectsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ConsiderationProjectProjectsNodeAggregateSelection>;
};

export type ConsiderationProjectProjectsNodeAggregateSelection = {
  __typename?: 'ConsiderationProjectProjectsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  website: StringAggregateSelectionNullable;
};

export type ConsiderationProjectsAggregateInput = {
  AND?: InputMaybe<Array<ConsiderationProjectsAggregateInput>>;
  NOT?: InputMaybe<ConsiderationProjectsAggregateInput>;
  OR?: InputMaybe<Array<ConsiderationProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ConsiderationProjectsNodeAggregationWhereInput>;
};

export type ConsiderationProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type ConsiderationProjectsConnectOrCreateFieldInput = {
  onCreate: ConsiderationProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type ConsiderationProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type ConsiderationProjectsConnection = {
  __typename?: 'ConsiderationProjectsConnection';
  edges: Array<ConsiderationProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ConsiderationProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type ConsiderationProjectsConnectionWhere = {
  AND?: InputMaybe<Array<ConsiderationProjectsConnectionWhere>>;
  NOT?: InputMaybe<ConsiderationProjectsConnectionWhere>;
  OR?: InputMaybe<Array<ConsiderationProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type ConsiderationProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type ConsiderationProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ConsiderationProjectsConnectionWhere>;
};

export type ConsiderationProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<ConsiderationProjectsConnectionWhere>;
};

export type ConsiderationProjectsFieldInput = {
  connect?: InputMaybe<Array<ConsiderationProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ConsiderationProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ConsiderationProjectsCreateFieldInput>>;
};

export type ConsiderationProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ConsiderationProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ConsiderationProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ConsiderationProjectsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  website_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  website_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsiderationProjectsRelationship = {
  __typename?: 'ConsiderationProjectsRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type ConsiderationProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type ConsiderationProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<ConsiderationProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ConsiderationProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ConsiderationProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<ConsiderationProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ConsiderationProjectsDisconnectFieldInput>>;
  update?: InputMaybe<ConsiderationProjectsUpdateConnectionInput>;
  where?: InputMaybe<ConsiderationProjectsConnectionWhere>;
};

export type ConsiderationRelationInput = {
  considerations?: InputMaybe<Array<ConsiderationConsiderationsCreateFieldInput>>;
  projects?: InputMaybe<Array<ConsiderationProjectsCreateFieldInput>>;
};

/** Fields to sort Considerations by. The order in which sorts are applied is not guaranteed when specifying many fields in one ConsiderationSort object. */
export type ConsiderationSort = {
  createdAt?: InputMaybe<SortDirection>;
  details?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type ConsiderationUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ConsiderationUpdateInput = {
  considerations?: InputMaybe<Array<ConsiderationConsiderationsUpdateFieldInput>>;
  details?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<ConsiderationProjectsUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConsiderationWhere = {
  AND?: InputMaybe<Array<ConsiderationWhere>>;
  NOT?: InputMaybe<ConsiderationWhere>;
  OR?: InputMaybe<Array<ConsiderationWhere>>;
  considerationsAggregate?: InputMaybe<ConsiderationConsiderationsAggregateInput>;
  /** Return Considerations where all of the related ConsiderationConsiderationsConnections match this filter */
  considerationsConnection_ALL?: InputMaybe<ConsiderationConsiderationsConnectionWhere>;
  /** Return Considerations where none of the related ConsiderationConsiderationsConnections match this filter */
  considerationsConnection_NONE?: InputMaybe<ConsiderationConsiderationsConnectionWhere>;
  /** Return Considerations where one of the related ConsiderationConsiderationsConnections match this filter */
  considerationsConnection_SINGLE?: InputMaybe<ConsiderationConsiderationsConnectionWhere>;
  /** Return Considerations where some of the related ConsiderationConsiderationsConnections match this filter */
  considerationsConnection_SOME?: InputMaybe<ConsiderationConsiderationsConnectionWhere>;
  /** Return Considerations where all of the related Considerations match this filter */
  considerations_ALL?: InputMaybe<ConsiderationWhere>;
  /** Return Considerations where none of the related Considerations match this filter */
  considerations_NONE?: InputMaybe<ConsiderationWhere>;
  /** Return Considerations where one of the related Considerations match this filter */
  considerations_SINGLE?: InputMaybe<ConsiderationWhere>;
  /** Return Considerations where some of the related Considerations match this filter */
  considerations_SOME?: InputMaybe<ConsiderationWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  details_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  details_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  details_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  details_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  projectsAggregate?: InputMaybe<ConsiderationProjectsAggregateInput>;
  /** Return Considerations where all of the related ConsiderationProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<ConsiderationProjectsConnectionWhere>;
  /** Return Considerations where none of the related ConsiderationProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<ConsiderationProjectsConnectionWhere>;
  /** Return Considerations where one of the related ConsiderationProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<ConsiderationProjectsConnectionWhere>;
  /** Return Considerations where some of the related ConsiderationProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<ConsiderationProjectsConnectionWhere>;
  /** Return Considerations where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Considerations where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Considerations where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Considerations where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConsiderationsConnection = {
  __typename?: 'ConsiderationsConnection';
  edges: Array<ConsiderationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateConsiderationsMutationResponse = {
  __typename?: 'CreateConsiderationsMutationResponse';
  considerations: Array<Consideration>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateProjectStatusesMutationResponse = {
  __typename?: 'CreateProjectStatusesMutationResponse';
  info: CreateInfo;
  projectStatuses: Array<ProjectStatus>;
};

export type CreateProjectsMutationResponse = {
  __typename?: 'CreateProjectsMutationResponse';
  info: CreateInfo;
  projects: Array<Project>;
};

export type CreateRipplesMutationResponse = {
  __typename?: 'CreateRipplesMutationResponse';
  info: CreateInfo;
  ripples: Array<Ripple>;
};

export type CreateScopesMutationResponse = {
  __typename?: 'CreateScopesMutationResponse';
  info: CreateInfo;
  scopes: Array<Scope>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime']['output'];
  min: Scalars['DateTime']['output'];
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']['output']>;
  min?: Maybe<Scalars['DateTime']['output']>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  sum: Scalars['Float']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type Interactable = Consideration | Project | ProjectStatus | Ripple | Scope | User;

export type InteractableWhere = {
  Consideration?: InputMaybe<ConsiderationWhere>;
  Project?: InputMaybe<ProjectWhere>;
  ProjectStatus?: InputMaybe<ProjectStatusWhere>;
  Ripple?: InputMaybe<RippleWhere>;
  Scope?: InputMaybe<ScopeWhere>;
  User?: InputMaybe<UserWhere>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createConsiderations: CreateConsiderationsMutationResponse;
  createProjectStatuses: CreateProjectStatusesMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  createRipples: CreateRipplesMutationResponse;
  createScopes: CreateScopesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteConsiderations: DeleteInfo;
  deleteProjectStatuses: DeleteInfo;
  deleteProjects: DeleteInfo;
  deleteRipples: DeleteInfo;
  deleteScopes: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateConsiderations: UpdateConsiderationsMutationResponse;
  updateProjectStatuses: UpdateProjectStatusesMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
  updateRipples: UpdateRipplesMutationResponse;
  updateScopes: UpdateScopesMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateConsiderationsArgs = {
  input: Array<ConsiderationCreateInput>;
};


export type MutationCreateProjectStatusesArgs = {
  input: Array<ProjectStatusCreateInput>;
};


export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};


export type MutationCreateRipplesArgs = {
  input: Array<RippleCreateInput>;
};


export type MutationCreateScopesArgs = {
  input: Array<ScopeCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteConsiderationsArgs = {
  delete?: InputMaybe<ConsiderationDeleteInput>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type MutationDeleteProjectStatusesArgs = {
  delete?: InputMaybe<ProjectStatusDeleteInput>;
  where?: InputMaybe<ProjectStatusWhere>;
};


export type MutationDeleteProjectsArgs = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationDeleteRipplesArgs = {
  delete?: InputMaybe<RippleDeleteInput>;
  where?: InputMaybe<RippleWhere>;
};


export type MutationDeleteScopesArgs = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<ScopeWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateConsiderationsArgs = {
  connect?: InputMaybe<ConsiderationConnectInput>;
  connectOrCreate?: InputMaybe<ConsiderationConnectOrCreateInput>;
  create?: InputMaybe<ConsiderationRelationInput>;
  delete?: InputMaybe<ConsiderationDeleteInput>;
  disconnect?: InputMaybe<ConsiderationDisconnectInput>;
  update?: InputMaybe<ConsiderationUpdateInput>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type MutationUpdateProjectStatusesArgs = {
  connect?: InputMaybe<ProjectStatusConnectInput>;
  connectOrCreate?: InputMaybe<ProjectStatusConnectOrCreateInput>;
  create?: InputMaybe<ProjectStatusRelationInput>;
  delete?: InputMaybe<ProjectStatusDeleteInput>;
  disconnect?: InputMaybe<ProjectStatusDisconnectInput>;
  update?: InputMaybe<ProjectStatusUpdateInput>;
  where?: InputMaybe<ProjectStatusWhere>;
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


export type MutationUpdateRipplesArgs = {
  connect?: InputMaybe<RippleConnectInput>;
  connectOrCreate?: InputMaybe<RippleConnectOrCreateInput>;
  create?: InputMaybe<RippleRelationInput>;
  delete?: InputMaybe<RippleDeleteInput>;
  disconnect?: InputMaybe<RippleDisconnectInput>;
  update?: InputMaybe<RippleUpdateInput>;
  where?: InputMaybe<RippleWhere>;
};


export type MutationUpdateScopesArgs = {
  connect?: InputMaybe<ScopeConnectInput>;
  connectOrCreate?: InputMaybe<ScopeConnectOrCreateInput>;
  create?: InputMaybe<ScopeRelationInput>;
  delete?: InputMaybe<ScopeDeleteInput>;
  disconnect?: InputMaybe<ScopeDisconnectInput>;
  update?: InputMaybe<ScopeUpdateInput>;
  where?: InputMaybe<ScopeWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

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
  considerations: Array<Consideration>;
  considerationsAggregate?: Maybe<ProjectConsiderationConsiderationsAggregationSelection>;
  considerationsConnection: ProjectConsiderationsConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  ripples: Array<Ripple>;
  ripplesAggregate?: Maybe<ProjectRippleRipplesAggregationSelection>;
  ripplesConnection: ProjectRipplesConnection;
  scopes: Array<Scope>;
  scopesAggregate?: Maybe<ProjectScopeScopesAggregationSelection>;
  scopesConnection: ProjectScopesConnection;
  statuses: Array<ProjectStatus>;
  statusesAggregate?: Maybe<ProjectProjectStatusStatusesAggregationSelection>;
  statusesConnection: ProjectStatusesConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<User>;
  usersAggregate?: Maybe<ProjectUserUsersAggregationSelection>;
  usersConnection: ProjectUsersConnection;
  verified: Scalars['Boolean']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type ProjectConsiderationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ConsiderationOptions>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type ProjectConsiderationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type ProjectConsiderationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectConsiderationsConnectionSort>>;
  where?: InputMaybe<ProjectConsiderationsConnectionWhere>;
};


export type ProjectRipplesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RippleOptions>;
  where?: InputMaybe<RippleWhere>;
};


export type ProjectRipplesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RippleWhere>;
};


export type ProjectRipplesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectRipplesConnectionSort>>;
  where?: InputMaybe<ProjectRipplesConnectionWhere>;
};


export type ProjectScopesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ScopeOptions>;
  where?: InputMaybe<ScopeWhere>;
};


export type ProjectScopesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ScopeWhere>;
};


export type ProjectScopesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectScopesConnectionSort>>;
  where?: InputMaybe<ProjectScopesConnectionWhere>;
};


export type ProjectStatusesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectStatusOptions>;
  where?: InputMaybe<ProjectStatusWhere>;
};


export type ProjectStatusesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectStatusWhere>;
};


export type ProjectStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectStatusesConnectionSort>>;
  where?: InputMaybe<ProjectStatusesConnectionWhere>;
};


export type ProjectUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type ProjectUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type ProjectUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectUsersConnectionSort>>;
  where?: InputMaybe<ProjectUsersConnectionWhere>;
};

export type ProjectAggregateSelection = {
  __typename?: 'ProjectAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  website: StringAggregateSelectionNullable;
};

export type ProjectConnectInput = {
  considerations?: InputMaybe<Array<ProjectConsiderationsConnectFieldInput>>;
  ripples?: InputMaybe<Array<ProjectRipplesConnectFieldInput>>;
  scopes?: InputMaybe<Array<ProjectScopesConnectFieldInput>>;
  statuses?: InputMaybe<Array<ProjectStatusesConnectFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersConnectFieldInput>>;
};

export type ProjectConnectOrCreateInput = {
  considerations?: InputMaybe<Array<ProjectConsiderationsConnectOrCreateFieldInput>>;
  ripples?: InputMaybe<Array<ProjectRipplesConnectOrCreateFieldInput>>;
  scopes?: InputMaybe<Array<ProjectScopesConnectOrCreateFieldInput>>;
  statuses?: InputMaybe<Array<ProjectStatusesConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersConnectOrCreateFieldInput>>;
};

export type ProjectConnectOrCreateWhere = {
  node: ProjectUniqueWhere;
};

export type ProjectConnectWhere = {
  node: ProjectWhere;
};

export type ProjectConsiderationConsiderationsAggregationSelection = {
  __typename?: 'ProjectConsiderationConsiderationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectConsiderationConsiderationsNodeAggregateSelection>;
};

export type ProjectConsiderationConsiderationsNodeAggregateSelection = {
  __typename?: 'ProjectConsiderationConsiderationsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  details: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ProjectConsiderationsAggregateInput = {
  AND?: InputMaybe<Array<ProjectConsiderationsAggregateInput>>;
  NOT?: InputMaybe<ProjectConsiderationsAggregateInput>;
  OR?: InputMaybe<Array<ProjectConsiderationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectConsiderationsNodeAggregationWhereInput>;
};

export type ProjectConsiderationsConnectFieldInput = {
  connect?: InputMaybe<Array<ConsiderationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ConsiderationConnectWhere>;
};

export type ProjectConsiderationsConnectOrCreateFieldInput = {
  onCreate: ProjectConsiderationsConnectOrCreateFieldInputOnCreate;
  where: ConsiderationConnectOrCreateWhere;
};

export type ProjectConsiderationsConnectOrCreateFieldInputOnCreate = {
  node: ConsiderationOnCreateInput;
};

export type ProjectConsiderationsConnection = {
  __typename?: 'ProjectConsiderationsConnection';
  edges: Array<ProjectConsiderationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectConsiderationsConnectionSort = {
  node?: InputMaybe<ConsiderationSort>;
};

export type ProjectConsiderationsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectConsiderationsConnectionWhere>>;
  NOT?: InputMaybe<ProjectConsiderationsConnectionWhere>;
  OR?: InputMaybe<Array<ProjectConsiderationsConnectionWhere>>;
  node?: InputMaybe<ConsiderationWhere>;
};

export type ProjectConsiderationsCreateFieldInput = {
  node: ConsiderationCreateInput;
};

export type ProjectConsiderationsDeleteFieldInput = {
  delete?: InputMaybe<ConsiderationDeleteInput>;
  where?: InputMaybe<ProjectConsiderationsConnectionWhere>;
};

export type ProjectConsiderationsDisconnectFieldInput = {
  disconnect?: InputMaybe<ConsiderationDisconnectInput>;
  where?: InputMaybe<ProjectConsiderationsConnectionWhere>;
};

export type ProjectConsiderationsFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsCreateFieldInput>>;
};

export type ProjectConsiderationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectConsiderationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectConsiderationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectConsiderationsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectConsiderationsRelationship = {
  __typename?: 'ProjectConsiderationsRelationship';
  cursor: Scalars['String']['output'];
  node: Consideration;
};

export type ProjectConsiderationsUpdateConnectionInput = {
  node?: InputMaybe<ConsiderationUpdateInput>;
};

export type ProjectConsiderationsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectConsiderationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectConsiderationsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectConsiderationsUpdateConnectionInput>;
  where?: InputMaybe<ProjectConsiderationsConnectionWhere>;
};

export type ProjectCreateInput = {
  considerations?: InputMaybe<ProjectConsiderationsFieldInput>;
  name: Scalars['String']['input'];
  ripples?: InputMaybe<ProjectRipplesFieldInput>;
  scopes?: InputMaybe<ProjectScopesFieldInput>;
  statuses?: InputMaybe<ProjectStatusesFieldInput>;
  users?: InputMaybe<ProjectUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCreates = {
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  reason: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type ProjectCreatesCreateInput = {
  aspect: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type ProjectCreatesSort = {
  aspect?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  reason?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type ProjectCreatesUpdateInput = {
  aspect?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectCreatesWhere = {
  AND?: InputMaybe<Array<ProjectCreatesWhere>>;
  NOT?: InputMaybe<ProjectCreatesWhere>;
  OR?: InputMaybe<Array<ProjectCreatesWhere>>;
  aspect?: InputMaybe<Scalars['String']['input']>;
  aspect_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  aspect_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  aspect_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  aspect_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  reason_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  reason_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectDeleteInput = {
  considerations?: InputMaybe<Array<ProjectConsiderationsDeleteFieldInput>>;
  ripples?: InputMaybe<Array<ProjectRipplesDeleteFieldInput>>;
  scopes?: InputMaybe<Array<ProjectScopesDeleteFieldInput>>;
  statuses?: InputMaybe<Array<ProjectStatusesDeleteFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersDeleteFieldInput>>;
};

export type ProjectDisconnectInput = {
  considerations?: InputMaybe<Array<ProjectConsiderationsDisconnectFieldInput>>;
  ripples?: InputMaybe<Array<ProjectRipplesDisconnectFieldInput>>;
  scopes?: InputMaybe<Array<ProjectScopesDisconnectFieldInput>>;
  statuses?: InputMaybe<Array<ProjectStatusesDisconnectFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersDisconnectFieldInput>>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type ProjectHasStatus = {
  createdAt: Scalars['DateTime']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type ProjectHasStatusCreateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectHasStatusSort = {
  createdAt?: InputMaybe<SortDirection>;
  dump?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
};

export type ProjectHasStatusUpdateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectHasStatusWhere = {
  AND?: InputMaybe<Array<ProjectHasStatusWhere>>;
  NOT?: InputMaybe<ProjectHasStatusWhere>;
  OR?: InputMaybe<Array<ProjectHasStatusWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dump?: InputMaybe<Scalars['String']['input']>;
  dump_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  dump_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  dump_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dump_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  message_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  message_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectOnCreateInput = {
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ProjectSort objects to sort Projects by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectSort>>;
};

export type ProjectProjectStatusStatusesAggregationSelection = {
  __typename?: 'ProjectProjectStatusStatusesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ProjectProjectStatusStatusesEdgeAggregateSelection>;
  node?: Maybe<ProjectProjectStatusStatusesNodeAggregateSelection>;
};

export type ProjectProjectStatusStatusesEdgeAggregateSelection = {
  __typename?: 'ProjectProjectStatusStatusesEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type ProjectProjectStatusStatusesNodeAggregateSelection = {
  __typename?: 'ProjectProjectStatusStatusesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ProjectRelationInput = {
  considerations?: InputMaybe<Array<ProjectConsiderationsCreateFieldInput>>;
  ripples?: InputMaybe<Array<ProjectRipplesCreateFieldInput>>;
  scopes?: InputMaybe<Array<ProjectScopesCreateFieldInput>>;
  statuses?: InputMaybe<Array<ProjectStatusesCreateFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersCreateFieldInput>>;
};

export type ProjectRippleRipplesAggregationSelection = {
  __typename?: 'ProjectRippleRipplesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ProjectRippleRipplesEdgeAggregateSelection>;
  node?: Maybe<ProjectRippleRipplesNodeAggregateSelection>;
};

export type ProjectRippleRipplesEdgeAggregateSelection = {
  __typename?: 'ProjectRippleRipplesEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ProjectRippleRipplesNodeAggregateSelection = {
  __typename?: 'ProjectRippleRipplesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ProjectRipplesAggregateInput = {
  AND?: InputMaybe<Array<ProjectRipplesAggregateInput>>;
  NOT?: InputMaybe<ProjectRipplesAggregateInput>;
  OR?: InputMaybe<Array<ProjectRipplesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ProjectRipplesEdgeAggregationWhereInput>;
  node?: InputMaybe<ProjectRipplesNodeAggregationWhereInput>;
};

export type ProjectRipplesConnectFieldInput = {
  connect?: InputMaybe<Array<RippleConnectInput>>;
  edge: ProjectCreatesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RippleConnectWhere>;
};

export type ProjectRipplesConnectOrCreateFieldInput = {
  onCreate: ProjectRipplesConnectOrCreateFieldInputOnCreate;
  where: RippleConnectOrCreateWhere;
};

export type ProjectRipplesConnectOrCreateFieldInputOnCreate = {
  edge: ProjectCreatesCreateInput;
  node: RippleOnCreateInput;
};

export type ProjectRipplesConnection = {
  __typename?: 'ProjectRipplesConnection';
  edges: Array<ProjectRipplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectRipplesConnectionSort = {
  edge?: InputMaybe<ProjectCreatesSort>;
  node?: InputMaybe<RippleSort>;
};

export type ProjectRipplesConnectionWhere = {
  AND?: InputMaybe<Array<ProjectRipplesConnectionWhere>>;
  NOT?: InputMaybe<ProjectRipplesConnectionWhere>;
  OR?: InputMaybe<Array<ProjectRipplesConnectionWhere>>;
  edge?: InputMaybe<ProjectCreatesWhere>;
  node?: InputMaybe<RippleWhere>;
};

export type ProjectRipplesCreateFieldInput = {
  edge: ProjectCreatesCreateInput;
  node: RippleCreateInput;
};

export type ProjectRipplesDeleteFieldInput = {
  delete?: InputMaybe<RippleDeleteInput>;
  where?: InputMaybe<ProjectRipplesConnectionWhere>;
};

export type ProjectRipplesDisconnectFieldInput = {
  disconnect?: InputMaybe<RippleDisconnectInput>;
  where?: InputMaybe<ProjectRipplesConnectionWhere>;
};

export type ProjectRipplesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectRipplesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectRipplesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectRipplesEdgeAggregationWhereInput>>;
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
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectRipplesFieldInput = {
  connect?: InputMaybe<Array<ProjectRipplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectRipplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectRipplesCreateFieldInput>>;
};

export type ProjectRipplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectRipplesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectRipplesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectRipplesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectRipplesRelationship = ProjectCreates & {
  __typename?: 'ProjectRipplesRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Ripple;
  reason: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type ProjectRipplesUpdateConnectionInput = {
  edge?: InputMaybe<ProjectCreatesUpdateInput>;
  node?: InputMaybe<RippleUpdateInput>;
};

export type ProjectRipplesUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectRipplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectRipplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectRipplesCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectRipplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectRipplesDisconnectFieldInput>>;
  update?: InputMaybe<ProjectRipplesUpdateConnectionInput>;
  where?: InputMaybe<ProjectRipplesConnectionWhere>;
};

export type ProjectScopeScopesAggregationSelection = {
  __typename?: 'ProjectScopeScopesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ProjectScopeScopesEdgeAggregateSelection>;
  node?: Maybe<ProjectScopeScopesNodeAggregateSelection>;
};

export type ProjectScopeScopesEdgeAggregateSelection = {
  __typename?: 'ProjectScopeScopesEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ProjectScopeScopesNodeAggregateSelection = {
  __typename?: 'ProjectScopeScopesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ProjectScopesAggregateInput = {
  AND?: InputMaybe<Array<ProjectScopesAggregateInput>>;
  NOT?: InputMaybe<ProjectScopesAggregateInput>;
  OR?: InputMaybe<Array<ProjectScopesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ProjectScopesEdgeAggregationWhereInput>;
  node?: InputMaybe<ProjectScopesNodeAggregationWhereInput>;
};

export type ProjectScopesConnectFieldInput = {
  connect?: InputMaybe<Array<ScopeConnectInput>>;
  edge: ProjectTouchesScopeCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ScopeConnectWhere>;
};

export type ProjectScopesConnectOrCreateFieldInput = {
  onCreate: ProjectScopesConnectOrCreateFieldInputOnCreate;
  where: ScopeConnectOrCreateWhere;
};

export type ProjectScopesConnectOrCreateFieldInputOnCreate = {
  edge: ProjectTouchesScopeCreateInput;
  node: ScopeOnCreateInput;
};

export type ProjectScopesConnection = {
  __typename?: 'ProjectScopesConnection';
  edges: Array<ProjectScopesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectScopesConnectionSort = {
  edge?: InputMaybe<ProjectTouchesScopeSort>;
  node?: InputMaybe<ScopeSort>;
};

export type ProjectScopesConnectionWhere = {
  AND?: InputMaybe<Array<ProjectScopesConnectionWhere>>;
  NOT?: InputMaybe<ProjectScopesConnectionWhere>;
  OR?: InputMaybe<Array<ProjectScopesConnectionWhere>>;
  edge?: InputMaybe<ProjectTouchesScopeWhere>;
  node?: InputMaybe<ScopeWhere>;
};

export type ProjectScopesCreateFieldInput = {
  edge: ProjectTouchesScopeCreateInput;
  node: ScopeCreateInput;
};

export type ProjectScopesDeleteFieldInput = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<ProjectScopesConnectionWhere>;
};

export type ProjectScopesDisconnectFieldInput = {
  disconnect?: InputMaybe<ScopeDisconnectInput>;
  where?: InputMaybe<ProjectScopesConnectionWhere>;
};

export type ProjectScopesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectScopesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectScopesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectScopesEdgeAggregationWhereInput>>;
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
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectScopesFieldInput = {
  connect?: InputMaybe<Array<ProjectScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectScopesCreateFieldInput>>;
};

export type ProjectScopesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectScopesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectScopesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectScopesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectScopesRelationship = ProjectTouchesScope & {
  __typename?: 'ProjectScopesRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Scope;
  reason: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type ProjectScopesUpdateConnectionInput = {
  edge?: InputMaybe<ProjectTouchesScopeUpdateInput>;
  node?: InputMaybe<ScopeUpdateInput>;
};

export type ProjectScopesUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectScopesCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectScopesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectScopesDisconnectFieldInput>>;
  update?: InputMaybe<ProjectScopesUpdateConnectionInput>;
  where?: InputMaybe<ProjectScopesConnectionWhere>;
};

/** Fields to sort Projects by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectSort object. */
export type ProjectSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  website?: InputMaybe<SortDirection>;
};

export type ProjectStatus = {
  __typename?: 'ProjectStatus';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: ProjectStatusName;
  projects: Array<Project>;
  projectsAggregate?: Maybe<ProjectStatusProjectProjectsAggregationSelection>;
  projectsConnection: ProjectStatusProjectsConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};


export type ProjectStatusProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type ProjectStatusProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type ProjectStatusProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectStatusProjectsConnectionSort>>;
  where?: InputMaybe<ProjectStatusProjectsConnectionWhere>;
};

export type ProjectStatusAggregateSelection = {
  __typename?: 'ProjectStatusAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ProjectStatusConnectInput = {
  projects?: InputMaybe<Array<ProjectStatusProjectsConnectFieldInput>>;
};

export type ProjectStatusConnectOrCreateInput = {
  projects?: InputMaybe<Array<ProjectStatusProjectsConnectOrCreateFieldInput>>;
};

export type ProjectStatusConnectOrCreateWhere = {
  node: ProjectStatusUniqueWhere;
};

export type ProjectStatusConnectWhere = {
  node: ProjectStatusWhere;
};

export type ProjectStatusCreateInput = {
  name: ProjectStatusName;
  projects?: InputMaybe<ProjectStatusProjectsFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type ProjectStatusDeleteInput = {
  projects?: InputMaybe<Array<ProjectStatusProjectsDeleteFieldInput>>;
};

export type ProjectStatusDisconnectInput = {
  projects?: InputMaybe<Array<ProjectStatusProjectsDisconnectFieldInput>>;
};

export type ProjectStatusEdge = {
  __typename?: 'ProjectStatusEdge';
  cursor: Scalars['String']['output'];
  node: ProjectStatus;
};

export enum ProjectStatusName {
  RippleChainDone = 'RIPPLE_CHAIN_DONE',
  RippleChainError = 'RIPPLE_CHAIN_ERROR',
  RippleChainLocationsConnected = 'RIPPLE_CHAIN_LOCATIONS_CONNECTED',
  RippleChainLocationsInferring = 'RIPPLE_CHAIN_LOCATIONS_INFERRING',
  RippleChainRipplesConnected = 'RIPPLE_CHAIN_RIPPLES_CONNECTED',
  RippleChainRipplesInferring = 'RIPPLE_CHAIN_RIPPLES_INFERRING',
  RippleChainScopesConnected = 'RIPPLE_CHAIN_SCOPES_CONNECTED',
  RippleChainScopesInferring = 'RIPPLE_CHAIN_SCOPES_INFERRING',
  VerificationBegan = 'VERIFICATION_BEGAN',
  VerificationDone = 'VERIFICATION_DONE',
  VerificationError = 'VERIFICATION_ERROR'
}

export type ProjectStatusOnCreateInput = {
  name: ProjectStatusName;
  verified?: Scalars['Boolean']['input'];
};

export type ProjectStatusOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ProjectStatusSort objects to sort ProjectStatuses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectStatusSort>>;
};

export type ProjectStatusProjectProjectsAggregationSelection = {
  __typename?: 'ProjectStatusProjectProjectsAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ProjectStatusProjectProjectsEdgeAggregateSelection>;
  node?: Maybe<ProjectStatusProjectProjectsNodeAggregateSelection>;
};

export type ProjectStatusProjectProjectsEdgeAggregateSelection = {
  __typename?: 'ProjectStatusProjectProjectsEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type ProjectStatusProjectProjectsNodeAggregateSelection = {
  __typename?: 'ProjectStatusProjectProjectsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  website: StringAggregateSelectionNullable;
};

export type ProjectStatusProjectsAggregateInput = {
  AND?: InputMaybe<Array<ProjectStatusProjectsAggregateInput>>;
  NOT?: InputMaybe<ProjectStatusProjectsAggregateInput>;
  OR?: InputMaybe<Array<ProjectStatusProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ProjectStatusProjectsEdgeAggregationWhereInput>;
  node?: InputMaybe<ProjectStatusProjectsNodeAggregationWhereInput>;
};

export type ProjectStatusProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  edge?: InputMaybe<ProjectHasStatusCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type ProjectStatusProjectsConnectOrCreateFieldInput = {
  onCreate: ProjectStatusProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type ProjectStatusProjectsConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<ProjectHasStatusCreateInput>;
  node: ProjectOnCreateInput;
};

export type ProjectStatusProjectsConnection = {
  __typename?: 'ProjectStatusProjectsConnection';
  edges: Array<ProjectStatusProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectStatusProjectsConnectionSort = {
  edge?: InputMaybe<ProjectHasStatusSort>;
  node?: InputMaybe<ProjectSort>;
};

export type ProjectStatusProjectsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectStatusProjectsConnectionWhere>>;
  NOT?: InputMaybe<ProjectStatusProjectsConnectionWhere>;
  OR?: InputMaybe<Array<ProjectStatusProjectsConnectionWhere>>;
  edge?: InputMaybe<ProjectHasStatusWhere>;
  node?: InputMaybe<ProjectWhere>;
};

export type ProjectStatusProjectsCreateFieldInput = {
  edge?: InputMaybe<ProjectHasStatusCreateInput>;
  node: ProjectCreateInput;
};

export type ProjectStatusProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectStatusProjectsConnectionWhere>;
};

export type ProjectStatusProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<ProjectStatusProjectsConnectionWhere>;
};

export type ProjectStatusProjectsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectStatusProjectsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectStatusProjectsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectStatusProjectsEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dump_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dump_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectStatusProjectsFieldInput = {
  connect?: InputMaybe<Array<ProjectStatusProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectStatusProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectStatusProjectsCreateFieldInput>>;
};

export type ProjectStatusProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectStatusProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectStatusProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectStatusProjectsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  website_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  website_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectStatusProjectsRelationship = ProjectHasStatus & {
  __typename?: 'ProjectStatusProjectsRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: Project;
};

export type ProjectStatusProjectsUpdateConnectionInput = {
  edge?: InputMaybe<ProjectHasStatusUpdateInput>;
  node?: InputMaybe<ProjectUpdateInput>;
};

export type ProjectStatusProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectStatusProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectStatusProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectStatusProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectStatusProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectStatusProjectsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectStatusProjectsUpdateConnectionInput>;
  where?: InputMaybe<ProjectStatusProjectsConnectionWhere>;
};

export type ProjectStatusRelationInput = {
  projects?: InputMaybe<Array<ProjectStatusProjectsCreateFieldInput>>;
};

/** Fields to sort ProjectStatuses by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectStatusSort object. */
export type ProjectStatusSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type ProjectStatusUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<ProjectStatusName>;
};

export type ProjectStatusUpdateInput = {
  name?: InputMaybe<ProjectStatusName>;
  projects?: InputMaybe<Array<ProjectStatusProjectsUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectStatusWhere = {
  AND?: InputMaybe<Array<ProjectStatusWhere>>;
  NOT?: InputMaybe<ProjectStatusWhere>;
  OR?: InputMaybe<Array<ProjectStatusWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<ProjectStatusName>;
  name_IN?: InputMaybe<Array<ProjectStatusName>>;
  projectsAggregate?: InputMaybe<ProjectStatusProjectsAggregateInput>;
  /** Return ProjectStatuses where all of the related ProjectStatusProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<ProjectStatusProjectsConnectionWhere>;
  /** Return ProjectStatuses where none of the related ProjectStatusProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<ProjectStatusProjectsConnectionWhere>;
  /** Return ProjectStatuses where one of the related ProjectStatusProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<ProjectStatusProjectsConnectionWhere>;
  /** Return ProjectStatuses where some of the related ProjectStatusProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<ProjectStatusProjectsConnectionWhere>;
  /** Return ProjectStatuses where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return ProjectStatuses where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return ProjectStatuses where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return ProjectStatuses where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectStatusesAggregateInput = {
  AND?: InputMaybe<Array<ProjectStatusesAggregateInput>>;
  NOT?: InputMaybe<ProjectStatusesAggregateInput>;
  OR?: InputMaybe<Array<ProjectStatusesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ProjectStatusesEdgeAggregationWhereInput>;
  node?: InputMaybe<ProjectStatusesNodeAggregationWhereInput>;
};

export type ProjectStatusesConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectStatusConnectInput>>;
  edge?: InputMaybe<ProjectHasStatusCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectStatusConnectWhere>;
};

export type ProjectStatusesConnectOrCreateFieldInput = {
  onCreate: ProjectStatusesConnectOrCreateFieldInputOnCreate;
  where: ProjectStatusConnectOrCreateWhere;
};

export type ProjectStatusesConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<ProjectHasStatusCreateInput>;
  node: ProjectStatusOnCreateInput;
};

export type ProjectStatusesConnection = {
  __typename?: 'ProjectStatusesConnection';
  edges: Array<ProjectStatusEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectStatusesConnectionSort = {
  edge?: InputMaybe<ProjectHasStatusSort>;
  node?: InputMaybe<ProjectStatusSort>;
};

export type ProjectStatusesConnectionWhere = {
  AND?: InputMaybe<Array<ProjectStatusesConnectionWhere>>;
  NOT?: InputMaybe<ProjectStatusesConnectionWhere>;
  OR?: InputMaybe<Array<ProjectStatusesConnectionWhere>>;
  edge?: InputMaybe<ProjectHasStatusWhere>;
  node?: InputMaybe<ProjectStatusWhere>;
};

export type ProjectStatusesCreateFieldInput = {
  edge?: InputMaybe<ProjectHasStatusCreateInput>;
  node: ProjectStatusCreateInput;
};

export type ProjectStatusesDeleteFieldInput = {
  delete?: InputMaybe<ProjectStatusDeleteInput>;
  where?: InputMaybe<ProjectStatusesConnectionWhere>;
};

export type ProjectStatusesDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectStatusDisconnectInput>;
  where?: InputMaybe<ProjectStatusesConnectionWhere>;
};

export type ProjectStatusesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectStatusesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectStatusesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectStatusesEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dump_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dump_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectStatusesFieldInput = {
  connect?: InputMaybe<Array<ProjectStatusesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectStatusesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectStatusesCreateFieldInput>>;
};

export type ProjectStatusesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectStatusesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectStatusesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectStatusesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectStatusesUpdateConnectionInput = {
  edge?: InputMaybe<ProjectHasStatusUpdateInput>;
  node?: InputMaybe<ProjectStatusUpdateInput>;
};

export type ProjectStatusesUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectStatusesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectStatusesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectStatusesCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectStatusesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectStatusesDisconnectFieldInput>>;
  update?: InputMaybe<ProjectStatusesUpdateConnectionInput>;
  where?: InputMaybe<ProjectStatusesConnectionWhere>;
};

export type ProjectTouchesScope = {
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  reason: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type ProjectTouchesScopeCreateInput = {
  aspect: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type ProjectTouchesScopeSort = {
  aspect?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  reason?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type ProjectTouchesScopeUpdateInput = {
  aspect?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectTouchesScopeWhere = {
  AND?: InputMaybe<Array<ProjectTouchesScopeWhere>>;
  NOT?: InputMaybe<ProjectTouchesScopeWhere>;
  OR?: InputMaybe<Array<ProjectTouchesScopeWhere>>;
  aspect?: InputMaybe<Scalars['String']['input']>;
  aspect_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  aspect_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  aspect_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  aspect_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  reason_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  reason_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectUpdateInput = {
  considerations?: InputMaybe<Array<ProjectConsiderationsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ripples?: InputMaybe<Array<ProjectRipplesUpdateFieldInput>>;
  scopes?: InputMaybe<Array<ProjectScopesUpdateFieldInput>>;
  statuses?: InputMaybe<Array<ProjectStatusesUpdateFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectUserUsersAggregationSelection = {
  __typename?: 'ProjectUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ProjectUserUsersEdgeAggregateSelection>;
  node?: Maybe<ProjectUserUsersNodeAggregateSelection>;
};

export type ProjectUserUsersEdgeAggregateSelection = {
  __typename?: 'ProjectUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type ProjectUserUsersNodeAggregateSelection = {
  __typename?: 'ProjectUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ProjectUsersAggregateInput = {
  AND?: InputMaybe<Array<ProjectUsersAggregateInput>>;
  NOT?: InputMaybe<ProjectUsersAggregateInput>;
  OR?: InputMaybe<Array<ProjectUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ProjectUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<ProjectUsersNodeAggregationWhereInput>;
};

export type ProjectUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWith_ProjectCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type ProjectUsersConnectOrCreateFieldInput = {
  onCreate: ProjectUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type ProjectUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWith_ProjectCreateInput;
  node: UserOnCreateInput;
};

export type ProjectUsersConnection = {
  __typename?: 'ProjectUsersConnection';
  edges: Array<ProjectUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWith_ProjectSort>;
  node?: InputMaybe<UserSort>;
};

export type ProjectUsersConnectionWhere = {
  AND?: InputMaybe<Array<ProjectUsersConnectionWhere>>;
  NOT?: InputMaybe<ProjectUsersConnectionWhere>;
  OR?: InputMaybe<Array<ProjectUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWith_ProjectWhere>;
  node?: InputMaybe<UserWhere>;
};

export type ProjectUsersCreateFieldInput = {
  edge: UserInteractsWith_ProjectCreateInput;
  node: UserCreateInput;
};

export type ProjectUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<ProjectUsersConnectionWhere>;
};

export type ProjectUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<ProjectUsersConnectionWhere>;
};

export type ProjectUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectUsersEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dump_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dump_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectUsersFieldInput = {
  connect?: InputMaybe<Array<ProjectUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectUsersCreateFieldInput>>;
};

export type ProjectUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectUsersNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectUsersRelationship = UserInteractsWith_Project & {
  __typename?: 'ProjectUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type ProjectUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWith_ProjectUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type ProjectUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectUsersDisconnectFieldInput>>;
  update?: InputMaybe<ProjectUsersUpdateConnectionInput>;
  where?: InputMaybe<ProjectUsersConnectionWhere>;
};

export type ProjectWhere = {
  AND?: InputMaybe<Array<ProjectWhere>>;
  NOT?: InputMaybe<ProjectWhere>;
  OR?: InputMaybe<Array<ProjectWhere>>;
  considerationsAggregate?: InputMaybe<ProjectConsiderationsAggregateInput>;
  /** Return Projects where all of the related ProjectConsiderationsConnections match this filter */
  considerationsConnection_ALL?: InputMaybe<ProjectConsiderationsConnectionWhere>;
  /** Return Projects where none of the related ProjectConsiderationsConnections match this filter */
  considerationsConnection_NONE?: InputMaybe<ProjectConsiderationsConnectionWhere>;
  /** Return Projects where one of the related ProjectConsiderationsConnections match this filter */
  considerationsConnection_SINGLE?: InputMaybe<ProjectConsiderationsConnectionWhere>;
  /** Return Projects where some of the related ProjectConsiderationsConnections match this filter */
  considerationsConnection_SOME?: InputMaybe<ProjectConsiderationsConnectionWhere>;
  /** Return Projects where all of the related Considerations match this filter */
  considerations_ALL?: InputMaybe<ConsiderationWhere>;
  /** Return Projects where none of the related Considerations match this filter */
  considerations_NONE?: InputMaybe<ConsiderationWhere>;
  /** Return Projects where one of the related Considerations match this filter */
  considerations_SINGLE?: InputMaybe<ConsiderationWhere>;
  /** Return Projects where some of the related Considerations match this filter */
  considerations_SOME?: InputMaybe<ConsiderationWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  ripplesAggregate?: InputMaybe<ProjectRipplesAggregateInput>;
  /** Return Projects where all of the related ProjectRipplesConnections match this filter */
  ripplesConnection_ALL?: InputMaybe<ProjectRipplesConnectionWhere>;
  /** Return Projects where none of the related ProjectRipplesConnections match this filter */
  ripplesConnection_NONE?: InputMaybe<ProjectRipplesConnectionWhere>;
  /** Return Projects where one of the related ProjectRipplesConnections match this filter */
  ripplesConnection_SINGLE?: InputMaybe<ProjectRipplesConnectionWhere>;
  /** Return Projects where some of the related ProjectRipplesConnections match this filter */
  ripplesConnection_SOME?: InputMaybe<ProjectRipplesConnectionWhere>;
  /** Return Projects where all of the related Ripples match this filter */
  ripples_ALL?: InputMaybe<RippleWhere>;
  /** Return Projects where none of the related Ripples match this filter */
  ripples_NONE?: InputMaybe<RippleWhere>;
  /** Return Projects where one of the related Ripples match this filter */
  ripples_SINGLE?: InputMaybe<RippleWhere>;
  /** Return Projects where some of the related Ripples match this filter */
  ripples_SOME?: InputMaybe<RippleWhere>;
  scopesAggregate?: InputMaybe<ProjectScopesAggregateInput>;
  /** Return Projects where all of the related ProjectScopesConnections match this filter */
  scopesConnection_ALL?: InputMaybe<ProjectScopesConnectionWhere>;
  /** Return Projects where none of the related ProjectScopesConnections match this filter */
  scopesConnection_NONE?: InputMaybe<ProjectScopesConnectionWhere>;
  /** Return Projects where one of the related ProjectScopesConnections match this filter */
  scopesConnection_SINGLE?: InputMaybe<ProjectScopesConnectionWhere>;
  /** Return Projects where some of the related ProjectScopesConnections match this filter */
  scopesConnection_SOME?: InputMaybe<ProjectScopesConnectionWhere>;
  /** Return Projects where all of the related Scopes match this filter */
  scopes_ALL?: InputMaybe<ScopeWhere>;
  /** Return Projects where none of the related Scopes match this filter */
  scopes_NONE?: InputMaybe<ScopeWhere>;
  /** Return Projects where one of the related Scopes match this filter */
  scopes_SINGLE?: InputMaybe<ScopeWhere>;
  /** Return Projects where some of the related Scopes match this filter */
  scopes_SOME?: InputMaybe<ScopeWhere>;
  statusesAggregate?: InputMaybe<ProjectStatusesAggregateInput>;
  /** Return Projects where all of the related ProjectStatusesConnections match this filter */
  statusesConnection_ALL?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** Return Projects where none of the related ProjectStatusesConnections match this filter */
  statusesConnection_NONE?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** Return Projects where one of the related ProjectStatusesConnections match this filter */
  statusesConnection_SINGLE?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** Return Projects where some of the related ProjectStatusesConnections match this filter */
  statusesConnection_SOME?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** Return Projects where all of the related ProjectStatuses match this filter */
  statuses_ALL?: InputMaybe<ProjectStatusWhere>;
  /** Return Projects where none of the related ProjectStatuses match this filter */
  statuses_NONE?: InputMaybe<ProjectStatusWhere>;
  /** Return Projects where one of the related ProjectStatuses match this filter */
  statuses_SINGLE?: InputMaybe<ProjectStatusWhere>;
  /** Return Projects where some of the related ProjectStatuses match this filter */
  statuses_SOME?: InputMaybe<ProjectStatusWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  usersAggregate?: InputMaybe<ProjectUsersAggregateInput>;
  /** Return Projects where all of the related ProjectUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<ProjectUsersConnectionWhere>;
  /** Return Projects where none of the related ProjectUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<ProjectUsersConnectionWhere>;
  /** Return Projects where one of the related ProjectUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<ProjectUsersConnectionWhere>;
  /** Return Projects where some of the related ProjectUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<ProjectUsersConnectionWhere>;
  /** Return Projects where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Projects where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Projects where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Projects where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  website_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  website_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  website_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  considerations: Array<Consideration>;
  considerationsAggregate: ConsiderationAggregateSelection;
  considerationsConnection: ConsiderationsConnection;
  projectStatuses: Array<ProjectStatus>;
  projectStatusesAggregate: ProjectStatusAggregateSelection;
  projectStatusesConnection: ProjectStatusesConnection;
  projects: Array<Project>;
  projectsAggregate: ProjectAggregateSelection;
  projectsConnection: ProjectsConnection;
  ripples: Array<Ripple>;
  ripplesAggregate: RippleAggregateSelection;
  ripplesConnection: RipplesConnection;
  scopes: Array<Scope>;
  scopesAggregate: ScopeAggregateSelection;
  scopesConnection: ScopesConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};


export type QueryConsiderationsArgs = {
  options?: InputMaybe<ConsiderationOptions>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type QueryConsiderationsAggregateArgs = {
  where?: InputMaybe<ConsiderationWhere>;
};


export type QueryConsiderationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ConsiderationSort>>>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type QueryProjectStatusesArgs = {
  options?: InputMaybe<ProjectStatusOptions>;
  where?: InputMaybe<ProjectStatusWhere>;
};


export type QueryProjectStatusesAggregateArgs = {
  where?: InputMaybe<ProjectStatusWhere>;
};


export type QueryProjectStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ProjectStatusSort>>>;
  where?: InputMaybe<ProjectStatusWhere>;
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


export type QueryRipplesArgs = {
  options?: InputMaybe<RippleOptions>;
  where?: InputMaybe<RippleWhere>;
};


export type QueryRipplesAggregateArgs = {
  where?: InputMaybe<RippleWhere>;
};


export type QueryRipplesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RippleSort>>>;
  where?: InputMaybe<RippleWhere>;
};


export type QueryScopesArgs = {
  options?: InputMaybe<ScopeOptions>;
  where?: InputMaybe<ScopeWhere>;
};


export type QueryScopesAggregateArgs = {
  where?: InputMaybe<ScopeWhere>;
};


export type QueryScopesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ScopeSort>>>;
  where?: InputMaybe<ScopeWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

export type QueryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Ripple = {
  __typename?: 'Ripple';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  project: Project;
  projectAggregate?: Maybe<RippleProjectProjectAggregationSelection>;
  projectConnection: RippleProjectConnection;
  scopes: Array<Scope>;
  scopesAggregate?: Maybe<RippleScopeScopesAggregationSelection>;
  scopesConnection: RippleScopesConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<User>;
  usersAggregate?: Maybe<RippleUserUsersAggregationSelection>;
  usersConnection: RippleUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type RippleProjectArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type RippleProjectAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type RippleProjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RippleProjectConnectionSort>>;
  where?: InputMaybe<RippleProjectConnectionWhere>;
};


export type RippleScopesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ScopeOptions>;
  where?: InputMaybe<ScopeWhere>;
};


export type RippleScopesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ScopeWhere>;
};


export type RippleScopesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RippleScopesConnectionSort>>;
  where?: InputMaybe<RippleScopesConnectionWhere>;
};


export type RippleUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type RippleUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type RippleUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RippleUsersConnectionSort>>;
  where?: InputMaybe<RippleUsersConnectionWhere>;
};

export type RippleAggregateSelection = {
  __typename?: 'RippleAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RippleConnectInput = {
  project?: InputMaybe<RippleProjectConnectFieldInput>;
  scopes?: InputMaybe<Array<RippleScopesConnectFieldInput>>;
  users?: InputMaybe<Array<RippleUsersConnectFieldInput>>;
};

export type RippleConnectOrCreateInput = {
  project?: InputMaybe<RippleProjectConnectOrCreateFieldInput>;
  scopes?: InputMaybe<Array<RippleScopesConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<RippleUsersConnectOrCreateFieldInput>>;
};

export type RippleConnectOrCreateWhere = {
  node: RippleUniqueWhere;
};

export type RippleConnectWhere = {
  node: RippleWhere;
};

export type RippleCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<RippleProjectFieldInput>;
  scopes?: InputMaybe<RippleScopesFieldInput>;
  users?: InputMaybe<RippleUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type RippleDeleteInput = {
  project?: InputMaybe<RippleProjectDeleteFieldInput>;
  scopes?: InputMaybe<Array<RippleScopesDeleteFieldInput>>;
  users?: InputMaybe<Array<RippleUsersDeleteFieldInput>>;
};

export type RippleDisconnectInput = {
  project?: InputMaybe<RippleProjectDisconnectFieldInput>;
  scopes?: InputMaybe<Array<RippleScopesDisconnectFieldInput>>;
  users?: InputMaybe<Array<RippleUsersDisconnectFieldInput>>;
};

export type RippleEdge = {
  __typename?: 'RippleEdge';
  cursor: Scalars['String']['output'];
  node: Ripple;
};

export type RippleIn = {
  createdAt: Scalars['DateTime']['output'];
  magnitude: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type RippleInCreateInput = {
  magnitude: Scalars['Float']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type RippleInSort = {
  createdAt?: InputMaybe<SortDirection>;
  magnitude?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type RippleInUpdateInput = {
  magnitude?: InputMaybe<Scalars['Float']['input']>;
  magnitude_ADD?: InputMaybe<Scalars['Float']['input']>;
  magnitude_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RippleInWhere = {
  AND?: InputMaybe<Array<RippleInWhere>>;
  NOT?: InputMaybe<RippleInWhere>;
  OR?: InputMaybe<Array<RippleInWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  magnitude?: InputMaybe<Scalars['Float']['input']>;
  magnitude_GT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_GTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_IN?: InputMaybe<Array<Scalars['Float']['input']>>;
  magnitude_LT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_LTE?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RippleOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type RippleOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more RippleSort objects to sort Ripples by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RippleSort>>;
};

export type RippleProjectAggregateInput = {
  AND?: InputMaybe<Array<RippleProjectAggregateInput>>;
  NOT?: InputMaybe<RippleProjectAggregateInput>;
  OR?: InputMaybe<Array<RippleProjectAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<RippleProjectEdgeAggregationWhereInput>;
  node?: InputMaybe<RippleProjectNodeAggregationWhereInput>;
};

export type RippleProjectConnectFieldInput = {
  connect?: InputMaybe<ProjectConnectInput>;
  edge: ProjectCreatesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type RippleProjectConnectOrCreateFieldInput = {
  onCreate: RippleProjectConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type RippleProjectConnectOrCreateFieldInputOnCreate = {
  edge: ProjectCreatesCreateInput;
  node: ProjectOnCreateInput;
};

export type RippleProjectConnection = {
  __typename?: 'RippleProjectConnection';
  edges: Array<RippleProjectRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RippleProjectConnectionSort = {
  edge?: InputMaybe<ProjectCreatesSort>;
  node?: InputMaybe<ProjectSort>;
};

export type RippleProjectConnectionWhere = {
  AND?: InputMaybe<Array<RippleProjectConnectionWhere>>;
  NOT?: InputMaybe<RippleProjectConnectionWhere>;
  OR?: InputMaybe<Array<RippleProjectConnectionWhere>>;
  edge?: InputMaybe<ProjectCreatesWhere>;
  node?: InputMaybe<ProjectWhere>;
};

export type RippleProjectCreateFieldInput = {
  edge: ProjectCreatesCreateInput;
  node: ProjectCreateInput;
};

export type RippleProjectDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<RippleProjectConnectionWhere>;
};

export type RippleProjectDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<RippleProjectConnectionWhere>;
};

export type RippleProjectEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RippleProjectEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RippleProjectEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<RippleProjectEdgeAggregationWhereInput>>;
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
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RippleProjectFieldInput = {
  connect?: InputMaybe<RippleProjectConnectFieldInput>;
  connectOrCreate?: InputMaybe<RippleProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<RippleProjectCreateFieldInput>;
};

export type RippleProjectNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RippleProjectNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RippleProjectNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RippleProjectNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  website_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  website_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type RippleProjectProjectAggregationSelection = {
  __typename?: 'RippleProjectProjectAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<RippleProjectProjectEdgeAggregateSelection>;
  node?: Maybe<RippleProjectProjectNodeAggregateSelection>;
};

export type RippleProjectProjectEdgeAggregateSelection = {
  __typename?: 'RippleProjectProjectEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RippleProjectProjectNodeAggregateSelection = {
  __typename?: 'RippleProjectProjectNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  website: StringAggregateSelectionNullable;
};

export type RippleProjectRelationship = ProjectCreates & {
  __typename?: 'RippleProjectRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Project;
  reason: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type RippleProjectUpdateConnectionInput = {
  edge?: InputMaybe<ProjectCreatesUpdateInput>;
  node?: InputMaybe<ProjectUpdateInput>;
};

export type RippleProjectUpdateFieldInput = {
  connect?: InputMaybe<RippleProjectConnectFieldInput>;
  connectOrCreate?: InputMaybe<RippleProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<RippleProjectCreateFieldInput>;
  delete?: InputMaybe<RippleProjectDeleteFieldInput>;
  disconnect?: InputMaybe<RippleProjectDisconnectFieldInput>;
  update?: InputMaybe<RippleProjectUpdateConnectionInput>;
  where?: InputMaybe<RippleProjectConnectionWhere>;
};

export type RippleRelationInput = {
  project?: InputMaybe<RippleProjectCreateFieldInput>;
  scopes?: InputMaybe<Array<RippleScopesCreateFieldInput>>;
  users?: InputMaybe<Array<RippleUsersCreateFieldInput>>;
};

export type RippleScopeScopesAggregationSelection = {
  __typename?: 'RippleScopeScopesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<RippleScopeScopesEdgeAggregateSelection>;
  node?: Maybe<RippleScopeScopesNodeAggregateSelection>;
};

export type RippleScopeScopesEdgeAggregateSelection = {
  __typename?: 'RippleScopeScopesEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  magnitude: FloatAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RippleScopeScopesNodeAggregateSelection = {
  __typename?: 'RippleScopeScopesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RippleScopesAggregateInput = {
  AND?: InputMaybe<Array<RippleScopesAggregateInput>>;
  NOT?: InputMaybe<RippleScopesAggregateInput>;
  OR?: InputMaybe<Array<RippleScopesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<RippleScopesEdgeAggregationWhereInput>;
  node?: InputMaybe<RippleScopesNodeAggregationWhereInput>;
};

export type RippleScopesConnectFieldInput = {
  connect?: InputMaybe<Array<ScopeConnectInput>>;
  edge: RippleInCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ScopeConnectWhere>;
};

export type RippleScopesConnectOrCreateFieldInput = {
  onCreate: RippleScopesConnectOrCreateFieldInputOnCreate;
  where: ScopeConnectOrCreateWhere;
};

export type RippleScopesConnectOrCreateFieldInputOnCreate = {
  edge: RippleInCreateInput;
  node: ScopeOnCreateInput;
};

export type RippleScopesConnection = {
  __typename?: 'RippleScopesConnection';
  edges: Array<RippleScopesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RippleScopesConnectionSort = {
  edge?: InputMaybe<RippleInSort>;
  node?: InputMaybe<ScopeSort>;
};

export type RippleScopesConnectionWhere = {
  AND?: InputMaybe<Array<RippleScopesConnectionWhere>>;
  NOT?: InputMaybe<RippleScopesConnectionWhere>;
  OR?: InputMaybe<Array<RippleScopesConnectionWhere>>;
  edge?: InputMaybe<RippleInWhere>;
  node?: InputMaybe<ScopeWhere>;
};

export type RippleScopesCreateFieldInput = {
  edge: RippleInCreateInput;
  node: ScopeCreateInput;
};

export type RippleScopesDeleteFieldInput = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<RippleScopesConnectionWhere>;
};

export type RippleScopesDisconnectFieldInput = {
  disconnect?: InputMaybe<ScopeDisconnectInput>;
  where?: InputMaybe<RippleScopesConnectionWhere>;
};

export type RippleScopesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RippleScopesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RippleScopesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<RippleScopesEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  magnitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  magnitude_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RippleScopesFieldInput = {
  connect?: InputMaybe<Array<RippleScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RippleScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RippleScopesCreateFieldInput>>;
};

export type RippleScopesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RippleScopesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RippleScopesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RippleScopesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RippleScopesRelationship = RippleIn & {
  __typename?: 'RippleScopesRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  magnitude: Scalars['Float']['output'];
  node: Scope;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type RippleScopesUpdateConnectionInput = {
  edge?: InputMaybe<RippleInUpdateInput>;
  node?: InputMaybe<ScopeUpdateInput>;
};

export type RippleScopesUpdateFieldInput = {
  connect?: InputMaybe<Array<RippleScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RippleScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RippleScopesCreateFieldInput>>;
  delete?: InputMaybe<Array<RippleScopesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RippleScopesDisconnectFieldInput>>;
  update?: InputMaybe<RippleScopesUpdateConnectionInput>;
  where?: InputMaybe<RippleScopesConnectionWhere>;
};

/** Fields to sort Ripples by. The order in which sorts are applied is not guaranteed when specifying many fields in one RippleSort object. */
export type RippleSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type RippleUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RippleUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<RippleProjectUpdateFieldInput>;
  scopes?: InputMaybe<Array<RippleScopesUpdateFieldInput>>;
  users?: InputMaybe<Array<RippleUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RippleUserUsersAggregationSelection = {
  __typename?: 'RippleUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<RippleUserUsersEdgeAggregateSelection>;
  node?: Maybe<RippleUserUsersNodeAggregateSelection>;
};

export type RippleUserUsersEdgeAggregateSelection = {
  __typename?: 'RippleUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type RippleUserUsersNodeAggregateSelection = {
  __typename?: 'RippleUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RippleUsersAggregateInput = {
  AND?: InputMaybe<Array<RippleUsersAggregateInput>>;
  NOT?: InputMaybe<RippleUsersAggregateInput>;
  OR?: InputMaybe<Array<RippleUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<RippleUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<RippleUsersNodeAggregationWhereInput>;
};

export type RippleUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWith_RippleCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type RippleUsersConnectOrCreateFieldInput = {
  onCreate: RippleUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type RippleUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWith_RippleCreateInput;
  node: UserOnCreateInput;
};

export type RippleUsersConnection = {
  __typename?: 'RippleUsersConnection';
  edges: Array<RippleUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RippleUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWith_RippleSort>;
  node?: InputMaybe<UserSort>;
};

export type RippleUsersConnectionWhere = {
  AND?: InputMaybe<Array<RippleUsersConnectionWhere>>;
  NOT?: InputMaybe<RippleUsersConnectionWhere>;
  OR?: InputMaybe<Array<RippleUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWith_RippleWhere>;
  node?: InputMaybe<UserWhere>;
};

export type RippleUsersCreateFieldInput = {
  edge: UserInteractsWith_RippleCreateInput;
  node: UserCreateInput;
};

export type RippleUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<RippleUsersConnectionWhere>;
};

export type RippleUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<RippleUsersConnectionWhere>;
};

export type RippleUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RippleUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RippleUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<RippleUsersEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dump_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dump_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dump_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dump_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dump_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type RippleUsersFieldInput = {
  connect?: InputMaybe<Array<RippleUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RippleUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RippleUsersCreateFieldInput>>;
};

export type RippleUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RippleUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RippleUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RippleUsersNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RippleUsersRelationship = UserInteractsWith_Ripple & {
  __typename?: 'RippleUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type RippleUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWith_RippleUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type RippleUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<RippleUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RippleUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RippleUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<RippleUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RippleUsersDisconnectFieldInput>>;
  update?: InputMaybe<RippleUsersUpdateConnectionInput>;
  where?: InputMaybe<RippleUsersConnectionWhere>;
};

export type RippleWhere = {
  AND?: InputMaybe<Array<RippleWhere>>;
  NOT?: InputMaybe<RippleWhere>;
  OR?: InputMaybe<Array<RippleWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectWhere>;
  projectAggregate?: InputMaybe<RippleProjectAggregateInput>;
  projectConnection?: InputMaybe<RippleProjectConnectionWhere>;
  projectConnection_NOT?: InputMaybe<RippleProjectConnectionWhere>;
  project_NOT?: InputMaybe<ProjectWhere>;
  scopesAggregate?: InputMaybe<RippleScopesAggregateInput>;
  /** Return Ripples where all of the related RippleScopesConnections match this filter */
  scopesConnection_ALL?: InputMaybe<RippleScopesConnectionWhere>;
  /** Return Ripples where none of the related RippleScopesConnections match this filter */
  scopesConnection_NONE?: InputMaybe<RippleScopesConnectionWhere>;
  /** Return Ripples where one of the related RippleScopesConnections match this filter */
  scopesConnection_SINGLE?: InputMaybe<RippleScopesConnectionWhere>;
  /** Return Ripples where some of the related RippleScopesConnections match this filter */
  scopesConnection_SOME?: InputMaybe<RippleScopesConnectionWhere>;
  /** Return Ripples where all of the related Scopes match this filter */
  scopes_ALL?: InputMaybe<ScopeWhere>;
  /** Return Ripples where none of the related Scopes match this filter */
  scopes_NONE?: InputMaybe<ScopeWhere>;
  /** Return Ripples where one of the related Scopes match this filter */
  scopes_SINGLE?: InputMaybe<ScopeWhere>;
  /** Return Ripples where some of the related Scopes match this filter */
  scopes_SOME?: InputMaybe<ScopeWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  usersAggregate?: InputMaybe<RippleUsersAggregateInput>;
  /** Return Ripples where all of the related RippleUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<RippleUsersConnectionWhere>;
  /** Return Ripples where none of the related RippleUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<RippleUsersConnectionWhere>;
  /** Return Ripples where one of the related RippleUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<RippleUsersConnectionWhere>;
  /** Return Ripples where some of the related RippleUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<RippleUsersConnectionWhere>;
  /** Return Ripples where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Ripples where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Ripples where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Ripples where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RipplesConnection = {
  __typename?: 'RipplesConnection';
  edges: Array<RippleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Scope = {
  __typename?: 'Scope';
  considerations: Array<Consideration>;
  considerationsAggregate?: Maybe<ScopeConsiderationConsiderationsAggregationSelection>;
  considerationsConnection: ScopeConsiderationsConnection;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<ScopeProjectProjectsAggregationSelection>;
  projectsConnection: ScopeProjectsConnection;
  ripples: Array<Ripple>;
  ripplesAggregate?: Maybe<ScopeRippleRipplesAggregationSelection>;
  ripplesConnection: ScopeRipplesConnection;
  scopes: Array<Scope>;
  scopesAggregate?: Maybe<ScopeScopeScopesAggregationSelection>;
  scopesConnection: ScopeScopesConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};


export type ScopeConsiderationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ConsiderationOptions>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type ScopeConsiderationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ConsiderationWhere>;
};


export type ScopeConsiderationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ScopeConsiderationsConnectionSort>>;
  where?: InputMaybe<ScopeConsiderationsConnectionWhere>;
};


export type ScopeProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type ScopeProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type ScopeProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ScopeProjectsConnectionSort>>;
  where?: InputMaybe<ScopeProjectsConnectionWhere>;
};


export type ScopeRipplesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RippleOptions>;
  where?: InputMaybe<RippleWhere>;
};


export type ScopeRipplesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RippleWhere>;
};


export type ScopeRipplesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ScopeRipplesConnectionSort>>;
  where?: InputMaybe<ScopeRipplesConnectionWhere>;
};


export type ScopeScopesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ScopeOptions>;
  where?: InputMaybe<ScopeWhere>;
};


export type ScopeScopesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ScopeWhere>;
};


export type ScopeScopesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ScopeScopesConnectionSort>>;
  where?: InputMaybe<ScopeScopesConnectionWhere>;
};

export type ScopeAggregateSelection = {
  __typename?: 'ScopeAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ScopeConnectInput = {
  considerations?: InputMaybe<Array<ScopeConsiderationsConnectFieldInput>>;
  projects?: InputMaybe<Array<ScopeProjectsConnectFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesConnectFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesConnectFieldInput>>;
};

export type ScopeConnectOrCreateInput = {
  considerations?: InputMaybe<Array<ScopeConsiderationsConnectOrCreateFieldInput>>;
  projects?: InputMaybe<Array<ScopeProjectsConnectOrCreateFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesConnectOrCreateFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesConnectOrCreateFieldInput>>;
};

export type ScopeConnectOrCreateWhere = {
  node: ScopeUniqueWhere;
};

export type ScopeConnectWhere = {
  node: ScopeWhere;
};

export type ScopeConsiderationConsiderationsAggregationSelection = {
  __typename?: 'ScopeConsiderationConsiderationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ScopeConsiderationConsiderationsNodeAggregateSelection>;
};

export type ScopeConsiderationConsiderationsNodeAggregateSelection = {
  __typename?: 'ScopeConsiderationConsiderationsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  details: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ScopeConsiderationsAggregateInput = {
  AND?: InputMaybe<Array<ScopeConsiderationsAggregateInput>>;
  NOT?: InputMaybe<ScopeConsiderationsAggregateInput>;
  OR?: InputMaybe<Array<ScopeConsiderationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ScopeConsiderationsNodeAggregationWhereInput>;
};

export type ScopeConsiderationsConnectFieldInput = {
  connect?: InputMaybe<Array<ConsiderationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ConsiderationConnectWhere>;
};

export type ScopeConsiderationsConnectOrCreateFieldInput = {
  onCreate: ScopeConsiderationsConnectOrCreateFieldInputOnCreate;
  where: ConsiderationConnectOrCreateWhere;
};

export type ScopeConsiderationsConnectOrCreateFieldInputOnCreate = {
  node: ConsiderationOnCreateInput;
};

export type ScopeConsiderationsConnection = {
  __typename?: 'ScopeConsiderationsConnection';
  edges: Array<ScopeConsiderationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScopeConsiderationsConnectionSort = {
  node?: InputMaybe<ConsiderationSort>;
};

export type ScopeConsiderationsConnectionWhere = {
  AND?: InputMaybe<Array<ScopeConsiderationsConnectionWhere>>;
  NOT?: InputMaybe<ScopeConsiderationsConnectionWhere>;
  OR?: InputMaybe<Array<ScopeConsiderationsConnectionWhere>>;
  node?: InputMaybe<ConsiderationWhere>;
};

export type ScopeConsiderationsCreateFieldInput = {
  node: ConsiderationCreateInput;
};

export type ScopeConsiderationsDeleteFieldInput = {
  delete?: InputMaybe<ConsiderationDeleteInput>;
  where?: InputMaybe<ScopeConsiderationsConnectionWhere>;
};

export type ScopeConsiderationsDisconnectFieldInput = {
  disconnect?: InputMaybe<ConsiderationDisconnectInput>;
  where?: InputMaybe<ScopeConsiderationsConnectionWhere>;
};

export type ScopeConsiderationsFieldInput = {
  connect?: InputMaybe<Array<ScopeConsiderationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeConsiderationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeConsiderationsCreateFieldInput>>;
};

export type ScopeConsiderationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeConsiderationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeConsiderationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeConsiderationsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScopeConsiderationsRelationship = {
  __typename?: 'ScopeConsiderationsRelationship';
  cursor: Scalars['String']['output'];
  node: Consideration;
};

export type ScopeConsiderationsUpdateConnectionInput = {
  node?: InputMaybe<ConsiderationUpdateInput>;
};

export type ScopeConsiderationsUpdateFieldInput = {
  connect?: InputMaybe<Array<ScopeConsiderationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeConsiderationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeConsiderationsCreateFieldInput>>;
  delete?: InputMaybe<Array<ScopeConsiderationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ScopeConsiderationsDisconnectFieldInput>>;
  update?: InputMaybe<ScopeConsiderationsUpdateConnectionInput>;
  where?: InputMaybe<ScopeConsiderationsConnectionWhere>;
};

export type ScopeCreateInput = {
  considerations?: InputMaybe<ScopeConsiderationsFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<ScopeProjectsFieldInput>;
  ripples?: InputMaybe<ScopeRipplesFieldInput>;
  scopes?: InputMaybe<ScopeScopesFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type ScopeDeleteInput = {
  considerations?: InputMaybe<Array<ScopeConsiderationsDeleteFieldInput>>;
  projects?: InputMaybe<Array<ScopeProjectsDeleteFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesDeleteFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesDeleteFieldInput>>;
};

export type ScopeDisconnectInput = {
  considerations?: InputMaybe<Array<ScopeConsiderationsDisconnectFieldInput>>;
  projects?: InputMaybe<Array<ScopeProjectsDisconnectFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesDisconnectFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesDisconnectFieldInput>>;
};

export type ScopeEdge = {
  __typename?: 'ScopeEdge';
  cursor: Scalars['String']['output'];
  node: Scope;
};

export type ScopeOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type ScopeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ScopeSort objects to sort Scopes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ScopeSort>>;
};

export type ScopeProjectProjectsAggregationSelection = {
  __typename?: 'ScopeProjectProjectsAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ScopeProjectProjectsEdgeAggregateSelection>;
  node?: Maybe<ScopeProjectProjectsNodeAggregateSelection>;
};

export type ScopeProjectProjectsEdgeAggregateSelection = {
  __typename?: 'ScopeProjectProjectsEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ScopeProjectProjectsNodeAggregateSelection = {
  __typename?: 'ScopeProjectProjectsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  website: StringAggregateSelectionNullable;
};

export type ScopeProjectsAggregateInput = {
  AND?: InputMaybe<Array<ScopeProjectsAggregateInput>>;
  NOT?: InputMaybe<ScopeProjectsAggregateInput>;
  OR?: InputMaybe<Array<ScopeProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ScopeProjectsEdgeAggregationWhereInput>;
  node?: InputMaybe<ScopeProjectsNodeAggregationWhereInput>;
};

export type ScopeProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  edge: ProjectTouchesScopeCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type ScopeProjectsConnectOrCreateFieldInput = {
  onCreate: ScopeProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type ScopeProjectsConnectOrCreateFieldInputOnCreate = {
  edge: ProjectTouchesScopeCreateInput;
  node: ProjectOnCreateInput;
};

export type ScopeProjectsConnection = {
  __typename?: 'ScopeProjectsConnection';
  edges: Array<ScopeProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScopeProjectsConnectionSort = {
  edge?: InputMaybe<ProjectTouchesScopeSort>;
  node?: InputMaybe<ProjectSort>;
};

export type ScopeProjectsConnectionWhere = {
  AND?: InputMaybe<Array<ScopeProjectsConnectionWhere>>;
  NOT?: InputMaybe<ScopeProjectsConnectionWhere>;
  OR?: InputMaybe<Array<ScopeProjectsConnectionWhere>>;
  edge?: InputMaybe<ProjectTouchesScopeWhere>;
  node?: InputMaybe<ProjectWhere>;
};

export type ScopeProjectsCreateFieldInput = {
  edge: ProjectTouchesScopeCreateInput;
  node: ProjectCreateInput;
};

export type ScopeProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ScopeProjectsConnectionWhere>;
};

export type ScopeProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<ScopeProjectsConnectionWhere>;
};

export type ScopeProjectsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeProjectsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeProjectsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeProjectsEdgeAggregationWhereInput>>;
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
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScopeProjectsFieldInput = {
  connect?: InputMaybe<Array<ScopeProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeProjectsCreateFieldInput>>;
};

export type ScopeProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeProjectsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  website_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  website_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  website_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  website_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  website_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ScopeProjectsRelationship = ProjectTouchesScope & {
  __typename?: 'ScopeProjectsRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Project;
  reason: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type ScopeProjectsUpdateConnectionInput = {
  edge?: InputMaybe<ProjectTouchesScopeUpdateInput>;
  node?: InputMaybe<ProjectUpdateInput>;
};

export type ScopeProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<ScopeProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<ScopeProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ScopeProjectsDisconnectFieldInput>>;
  update?: InputMaybe<ScopeProjectsUpdateConnectionInput>;
  where?: InputMaybe<ScopeProjectsConnectionWhere>;
};

export type ScopeRelationInput = {
  considerations?: InputMaybe<Array<ScopeConsiderationsCreateFieldInput>>;
  projects?: InputMaybe<Array<ScopeProjectsCreateFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesCreateFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesCreateFieldInput>>;
};

export type ScopeRippleRipplesAggregationSelection = {
  __typename?: 'ScopeRippleRipplesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ScopeRippleRipplesEdgeAggregateSelection>;
  node?: Maybe<ScopeRippleRipplesNodeAggregateSelection>;
};

export type ScopeRippleRipplesEdgeAggregateSelection = {
  __typename?: 'ScopeRippleRipplesEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  magnitude: FloatAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ScopeRippleRipplesNodeAggregateSelection = {
  __typename?: 'ScopeRippleRipplesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ScopeRipplesAggregateInput = {
  AND?: InputMaybe<Array<ScopeRipplesAggregateInput>>;
  NOT?: InputMaybe<ScopeRipplesAggregateInput>;
  OR?: InputMaybe<Array<ScopeRipplesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ScopeRipplesEdgeAggregationWhereInput>;
  node?: InputMaybe<ScopeRipplesNodeAggregationWhereInput>;
};

export type ScopeRipplesConnectFieldInput = {
  connect?: InputMaybe<Array<RippleConnectInput>>;
  edge: RippleInCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RippleConnectWhere>;
};

export type ScopeRipplesConnectOrCreateFieldInput = {
  onCreate: ScopeRipplesConnectOrCreateFieldInputOnCreate;
  where: RippleConnectOrCreateWhere;
};

export type ScopeRipplesConnectOrCreateFieldInputOnCreate = {
  edge: RippleInCreateInput;
  node: RippleOnCreateInput;
};

export type ScopeRipplesConnection = {
  __typename?: 'ScopeRipplesConnection';
  edges: Array<ScopeRipplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScopeRipplesConnectionSort = {
  edge?: InputMaybe<RippleInSort>;
  node?: InputMaybe<RippleSort>;
};

export type ScopeRipplesConnectionWhere = {
  AND?: InputMaybe<Array<ScopeRipplesConnectionWhere>>;
  NOT?: InputMaybe<ScopeRipplesConnectionWhere>;
  OR?: InputMaybe<Array<ScopeRipplesConnectionWhere>>;
  edge?: InputMaybe<RippleInWhere>;
  node?: InputMaybe<RippleWhere>;
};

export type ScopeRipplesCreateFieldInput = {
  edge: RippleInCreateInput;
  node: RippleCreateInput;
};

export type ScopeRipplesDeleteFieldInput = {
  delete?: InputMaybe<RippleDeleteInput>;
  where?: InputMaybe<ScopeRipplesConnectionWhere>;
};

export type ScopeRipplesDisconnectFieldInput = {
  disconnect?: InputMaybe<RippleDisconnectInput>;
  where?: InputMaybe<ScopeRipplesConnectionWhere>;
};

export type ScopeRipplesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeRipplesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeRipplesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeRipplesEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  magnitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  magnitude_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScopeRipplesFieldInput = {
  connect?: InputMaybe<Array<ScopeRipplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeRipplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeRipplesCreateFieldInput>>;
};

export type ScopeRipplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeRipplesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeRipplesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeRipplesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScopeRipplesRelationship = RippleIn & {
  __typename?: 'ScopeRipplesRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  magnitude: Scalars['Float']['output'];
  node: Ripple;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type ScopeRipplesUpdateConnectionInput = {
  edge?: InputMaybe<RippleInUpdateInput>;
  node?: InputMaybe<RippleUpdateInput>;
};

export type ScopeRipplesUpdateFieldInput = {
  connect?: InputMaybe<Array<ScopeRipplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeRipplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeRipplesCreateFieldInput>>;
  delete?: InputMaybe<Array<ScopeRipplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ScopeRipplesDisconnectFieldInput>>;
  update?: InputMaybe<ScopeRipplesUpdateConnectionInput>;
  where?: InputMaybe<ScopeRipplesConnectionWhere>;
};

export type ScopeScopeScopesAggregationSelection = {
  __typename?: 'ScopeScopeScopesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ScopeScopeScopesNodeAggregateSelection>;
};

export type ScopeScopeScopesNodeAggregateSelection = {
  __typename?: 'ScopeScopeScopesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ScopeScopesAggregateInput = {
  AND?: InputMaybe<Array<ScopeScopesAggregateInput>>;
  NOT?: InputMaybe<ScopeScopesAggregateInput>;
  OR?: InputMaybe<Array<ScopeScopesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ScopeScopesNodeAggregationWhereInput>;
};

export type ScopeScopesConnectFieldInput = {
  connect?: InputMaybe<Array<ScopeConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ScopeConnectWhere>;
};

export type ScopeScopesConnectOrCreateFieldInput = {
  onCreate: ScopeScopesConnectOrCreateFieldInputOnCreate;
  where: ScopeConnectOrCreateWhere;
};

export type ScopeScopesConnectOrCreateFieldInputOnCreate = {
  node: ScopeOnCreateInput;
};

export type ScopeScopesConnection = {
  __typename?: 'ScopeScopesConnection';
  edges: Array<ScopeScopesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScopeScopesConnectionSort = {
  node?: InputMaybe<ScopeSort>;
};

export type ScopeScopesConnectionWhere = {
  AND?: InputMaybe<Array<ScopeScopesConnectionWhere>>;
  NOT?: InputMaybe<ScopeScopesConnectionWhere>;
  OR?: InputMaybe<Array<ScopeScopesConnectionWhere>>;
  node?: InputMaybe<ScopeWhere>;
};

export type ScopeScopesCreateFieldInput = {
  node: ScopeCreateInput;
};

export type ScopeScopesDeleteFieldInput = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<ScopeScopesConnectionWhere>;
};

export type ScopeScopesDisconnectFieldInput = {
  disconnect?: InputMaybe<ScopeDisconnectInput>;
  where?: InputMaybe<ScopeScopesConnectionWhere>;
};

export type ScopeScopesFieldInput = {
  connect?: InputMaybe<Array<ScopeScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeScopesCreateFieldInput>>;
};

export type ScopeScopesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeScopesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeScopesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeScopesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScopeScopesRelationship = {
  __typename?: 'ScopeScopesRelationship';
  cursor: Scalars['String']['output'];
  node: Scope;
};

export type ScopeScopesUpdateConnectionInput = {
  node?: InputMaybe<ScopeUpdateInput>;
};

export type ScopeScopesUpdateFieldInput = {
  connect?: InputMaybe<Array<ScopeScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeScopesCreateFieldInput>>;
  delete?: InputMaybe<Array<ScopeScopesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ScopeScopesDisconnectFieldInput>>;
  update?: InputMaybe<ScopeScopesUpdateConnectionInput>;
  where?: InputMaybe<ScopeScopesConnectionWhere>;
};

/** Fields to sort Scopes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScopeSort object. */
export type ScopeSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type ScopeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ScopeUpdateInput = {
  considerations?: InputMaybe<Array<ScopeConsiderationsUpdateFieldInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<ScopeProjectsUpdateFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesUpdateFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScopeWhere = {
  AND?: InputMaybe<Array<ScopeWhere>>;
  NOT?: InputMaybe<ScopeWhere>;
  OR?: InputMaybe<Array<ScopeWhere>>;
  considerationsAggregate?: InputMaybe<ScopeConsiderationsAggregateInput>;
  /** Return Scopes where all of the related ScopeConsiderationsConnections match this filter */
  considerationsConnection_ALL?: InputMaybe<ScopeConsiderationsConnectionWhere>;
  /** Return Scopes where none of the related ScopeConsiderationsConnections match this filter */
  considerationsConnection_NONE?: InputMaybe<ScopeConsiderationsConnectionWhere>;
  /** Return Scopes where one of the related ScopeConsiderationsConnections match this filter */
  considerationsConnection_SINGLE?: InputMaybe<ScopeConsiderationsConnectionWhere>;
  /** Return Scopes where some of the related ScopeConsiderationsConnections match this filter */
  considerationsConnection_SOME?: InputMaybe<ScopeConsiderationsConnectionWhere>;
  /** Return Scopes where all of the related Considerations match this filter */
  considerations_ALL?: InputMaybe<ConsiderationWhere>;
  /** Return Scopes where none of the related Considerations match this filter */
  considerations_NONE?: InputMaybe<ConsiderationWhere>;
  /** Return Scopes where one of the related Considerations match this filter */
  considerations_SINGLE?: InputMaybe<ConsiderationWhere>;
  /** Return Scopes where some of the related Considerations match this filter */
  considerations_SOME?: InputMaybe<ConsiderationWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  projectsAggregate?: InputMaybe<ScopeProjectsAggregateInput>;
  /** Return Scopes where all of the related ScopeProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<ScopeProjectsConnectionWhere>;
  /** Return Scopes where none of the related ScopeProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<ScopeProjectsConnectionWhere>;
  /** Return Scopes where one of the related ScopeProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<ScopeProjectsConnectionWhere>;
  /** Return Scopes where some of the related ScopeProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<ScopeProjectsConnectionWhere>;
  /** Return Scopes where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Scopes where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Scopes where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Scopes where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  ripplesAggregate?: InputMaybe<ScopeRipplesAggregateInput>;
  /** Return Scopes where all of the related ScopeRipplesConnections match this filter */
  ripplesConnection_ALL?: InputMaybe<ScopeRipplesConnectionWhere>;
  /** Return Scopes where none of the related ScopeRipplesConnections match this filter */
  ripplesConnection_NONE?: InputMaybe<ScopeRipplesConnectionWhere>;
  /** Return Scopes where one of the related ScopeRipplesConnections match this filter */
  ripplesConnection_SINGLE?: InputMaybe<ScopeRipplesConnectionWhere>;
  /** Return Scopes where some of the related ScopeRipplesConnections match this filter */
  ripplesConnection_SOME?: InputMaybe<ScopeRipplesConnectionWhere>;
  /** Return Scopes where all of the related Ripples match this filter */
  ripples_ALL?: InputMaybe<RippleWhere>;
  /** Return Scopes where none of the related Ripples match this filter */
  ripples_NONE?: InputMaybe<RippleWhere>;
  /** Return Scopes where one of the related Ripples match this filter */
  ripples_SINGLE?: InputMaybe<RippleWhere>;
  /** Return Scopes where some of the related Ripples match this filter */
  ripples_SOME?: InputMaybe<RippleWhere>;
  scopesAggregate?: InputMaybe<ScopeScopesAggregateInput>;
  /** Return Scopes where all of the related ScopeScopesConnections match this filter */
  scopesConnection_ALL?: InputMaybe<ScopeScopesConnectionWhere>;
  /** Return Scopes where none of the related ScopeScopesConnections match this filter */
  scopesConnection_NONE?: InputMaybe<ScopeScopesConnectionWhere>;
  /** Return Scopes where one of the related ScopeScopesConnections match this filter */
  scopesConnection_SINGLE?: InputMaybe<ScopeScopesConnectionWhere>;
  /** Return Scopes where some of the related ScopeScopesConnections match this filter */
  scopesConnection_SOME?: InputMaybe<ScopeScopesConnectionWhere>;
  /** Return Scopes where all of the related Scopes match this filter */
  scopes_ALL?: InputMaybe<ScopeWhere>;
  /** Return Scopes where none of the related Scopes match this filter */
  scopes_NONE?: InputMaybe<ScopeWhere>;
  /** Return Scopes where one of the related Scopes match this filter */
  scopes_SINGLE?: InputMaybe<ScopeWhere>;
  /** Return Scopes where some of the related Scopes match this filter */
  scopes_SOME?: InputMaybe<ScopeWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScopesConnection = {
  __typename?: 'ScopesConnection';
  edges: Array<ScopeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
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

export type UpdateConsiderationsMutationResponse = {
  __typename?: 'UpdateConsiderationsMutationResponse';
  considerations: Array<Consideration>;
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

export type UpdateProjectStatusesMutationResponse = {
  __typename?: 'UpdateProjectStatusesMutationResponse';
  info: UpdateInfo;
  projectStatuses: Array<ProjectStatus>;
};

export type UpdateProjectsMutationResponse = {
  __typename?: 'UpdateProjectsMutationResponse';
  info: UpdateInfo;
  projects: Array<Project>;
};

export type UpdateRipplesMutationResponse = {
  __typename?: 'UpdateRipplesMutationResponse';
  info: UpdateInfo;
  ripples: Array<Ripple>;
};

export type UpdateScopesMutationResponse = {
  __typename?: 'UpdateScopesMutationResponse';
  info: UpdateInfo;
  scopes: Array<Scope>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  familyName?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interactions: Array<Interactable>;
  interactionsConnection: UserInteractionsConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
};


export type UserInteractionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<InteractableWhere>;
};


export type UserInteractionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserInteractionsConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserConnectInput = {
  interactions?: InputMaybe<UserInteractionsConnectInput>;
};

export type UserConnectOrCreateInput = {
  interactions?: InputMaybe<UserInteractionsConnectOrCreateInput>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  interactions?: InputMaybe<UserInteractionsCreateInput>;
  verified?: Scalars['Boolean']['input'];
};

export type UserDeleteInput = {
  interactions?: InputMaybe<UserInteractionsDeleteInput>;
};

export type UserDisconnectInput = {
  interactions?: InputMaybe<UserInteractionsDisconnectInput>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

/** Names for the interactions a user may have. */
export enum UserInteractionName {
  Create = 'CREATE',
  Delete = 'DELETE',
  Ownership = 'OWNERSHIP',
  Read = 'READ',
  Trust = 'TRUST',
  Update = 'UPDATE'
}

export type UserInteractionsConnectInput = {
  Consideration?: InputMaybe<Array<UserInteractionsConsiderationConnectFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectConnectFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusConnectFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleConnectFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeConnectFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserConnectFieldInput>>;
};

export type UserInteractionsConnectOrCreateInput = {
  Consideration?: InputMaybe<Array<UserInteractionsConsiderationConnectOrCreateFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectConnectOrCreateFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusConnectOrCreateFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleConnectOrCreateFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeConnectOrCreateFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserConnectOrCreateFieldInput>>;
};

export type UserInteractionsConnection = {
  __typename?: 'UserInteractionsConnection';
  edges: Array<UserInteractionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserInteractionsConnectionWhere = {
  Consideration?: InputMaybe<UserInteractionsConsiderationConnectionWhere>;
  Project?: InputMaybe<UserInteractionsProjectConnectionWhere>;
  ProjectStatus?: InputMaybe<UserInteractionsProjectStatusConnectionWhere>;
  Ripple?: InputMaybe<UserInteractionsRippleConnectionWhere>;
  Scope?: InputMaybe<UserInteractionsScopeConnectionWhere>;
  User?: InputMaybe<UserInteractionsUserConnectionWhere>;
};

export type UserInteractionsConsiderationConnectFieldInput = {
  connect?: InputMaybe<Array<ConsiderationConnectInput>>;
  where?: InputMaybe<ConsiderationConnectWhere>;
};

export type UserInteractionsConsiderationConnectOrCreateFieldInput = {
  onCreate: UserInteractionsConsiderationConnectOrCreateFieldInputOnCreate;
  where: ConsiderationConnectOrCreateWhere;
};

export type UserInteractionsConsiderationConnectOrCreateFieldInputOnCreate = {
  node: ConsiderationOnCreateInput;
};

export type UserInteractionsConsiderationConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsConsiderationConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsConsiderationConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsConsiderationConnectionWhere>>;
  node?: InputMaybe<ConsiderationWhere>;
};

export type UserInteractionsConsiderationCreateFieldInput = {
  node: ConsiderationCreateInput;
};

export type UserInteractionsConsiderationDeleteFieldInput = {
  delete?: InputMaybe<ConsiderationDeleteInput>;
  where?: InputMaybe<UserInteractionsConsiderationConnectionWhere>;
};

export type UserInteractionsConsiderationDisconnectFieldInput = {
  disconnect?: InputMaybe<ConsiderationDisconnectInput>;
  where?: InputMaybe<UserInteractionsConsiderationConnectionWhere>;
};

export type UserInteractionsConsiderationFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsConsiderationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsConsiderationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsConsiderationCreateFieldInput>>;
};

export type UserInteractionsConsiderationUpdateConnectionInput = {
  node?: InputMaybe<ConsiderationUpdateInput>;
};

export type UserInteractionsConsiderationUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsConsiderationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsConsiderationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsConsiderationCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsConsiderationDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsConsiderationDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsConsiderationUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsConsiderationConnectionWhere>;
};

export type UserInteractionsCreateFieldInput = {
  Consideration?: InputMaybe<Array<UserInteractionsConsiderationCreateFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectCreateFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusCreateFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleCreateFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeCreateFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserCreateFieldInput>>;
};

export type UserInteractionsCreateInput = {
  Consideration?: InputMaybe<UserInteractionsConsiderationFieldInput>;
  Project?: InputMaybe<UserInteractionsProjectFieldInput>;
  ProjectStatus?: InputMaybe<UserInteractionsProjectStatusFieldInput>;
  Ripple?: InputMaybe<UserInteractionsRippleFieldInput>;
  Scope?: InputMaybe<UserInteractionsScopeFieldInput>;
  User?: InputMaybe<UserInteractionsUserFieldInput>;
};

export type UserInteractionsDeleteInput = {
  Consideration?: InputMaybe<Array<UserInteractionsConsiderationDeleteFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectDeleteFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusDeleteFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleDeleteFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeDeleteFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserDeleteFieldInput>>;
};

export type UserInteractionsDisconnectInput = {
  Consideration?: InputMaybe<Array<UserInteractionsConsiderationDisconnectFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectDisconnectFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusDisconnectFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleDisconnectFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeDisconnectFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserDisconnectFieldInput>>;
};

export type UserInteractionsProjectConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  where?: InputMaybe<ProjectConnectWhere>;
};

export type UserInteractionsProjectConnectOrCreateFieldInput = {
  onCreate: UserInteractionsProjectConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type UserInteractionsProjectConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type UserInteractionsProjectConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsProjectConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsProjectConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsProjectConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type UserInteractionsProjectCreateFieldInput = {
  node: ProjectCreateInput;
};

export type UserInteractionsProjectDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<UserInteractionsProjectConnectionWhere>;
};

export type UserInteractionsProjectDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<UserInteractionsProjectConnectionWhere>;
};

export type UserInteractionsProjectFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsProjectConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsProjectConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsProjectCreateFieldInput>>;
};

export type UserInteractionsProjectStatusConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectStatusConnectInput>>;
  where?: InputMaybe<ProjectStatusConnectWhere>;
};

export type UserInteractionsProjectStatusConnectOrCreateFieldInput = {
  onCreate: UserInteractionsProjectStatusConnectOrCreateFieldInputOnCreate;
  where: ProjectStatusConnectOrCreateWhere;
};

export type UserInteractionsProjectStatusConnectOrCreateFieldInputOnCreate = {
  node: ProjectStatusOnCreateInput;
};

export type UserInteractionsProjectStatusConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsProjectStatusConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsProjectStatusConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsProjectStatusConnectionWhere>>;
  node?: InputMaybe<ProjectStatusWhere>;
};

export type UserInteractionsProjectStatusCreateFieldInput = {
  node: ProjectStatusCreateInput;
};

export type UserInteractionsProjectStatusDeleteFieldInput = {
  delete?: InputMaybe<ProjectStatusDeleteInput>;
  where?: InputMaybe<UserInteractionsProjectStatusConnectionWhere>;
};

export type UserInteractionsProjectStatusDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectStatusDisconnectInput>;
  where?: InputMaybe<UserInteractionsProjectStatusConnectionWhere>;
};

export type UserInteractionsProjectStatusFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsProjectStatusConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsProjectStatusConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsProjectStatusCreateFieldInput>>;
};

export type UserInteractionsProjectStatusUpdateConnectionInput = {
  node?: InputMaybe<ProjectStatusUpdateInput>;
};

export type UserInteractionsProjectStatusUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsProjectStatusConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsProjectStatusConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsProjectStatusCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsProjectStatusDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsProjectStatusDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsProjectStatusUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsProjectStatusConnectionWhere>;
};

export type UserInteractionsProjectUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type UserInteractionsProjectUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsProjectConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsProjectConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsProjectCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsProjectDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsProjectDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsProjectUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsProjectConnectionWhere>;
};

export type UserInteractionsRelationship = {
  __typename?: 'UserInteractionsRelationship';
  cursor: Scalars['String']['output'];
  node: Interactable;
};

export type UserInteractionsRippleConnectFieldInput = {
  connect?: InputMaybe<Array<RippleConnectInput>>;
  where?: InputMaybe<RippleConnectWhere>;
};

export type UserInteractionsRippleConnectOrCreateFieldInput = {
  onCreate: UserInteractionsRippleConnectOrCreateFieldInputOnCreate;
  where: RippleConnectOrCreateWhere;
};

export type UserInteractionsRippleConnectOrCreateFieldInputOnCreate = {
  node: RippleOnCreateInput;
};

export type UserInteractionsRippleConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsRippleConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsRippleConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsRippleConnectionWhere>>;
  node?: InputMaybe<RippleWhere>;
};

export type UserInteractionsRippleCreateFieldInput = {
  node: RippleCreateInput;
};

export type UserInteractionsRippleDeleteFieldInput = {
  delete?: InputMaybe<RippleDeleteInput>;
  where?: InputMaybe<UserInteractionsRippleConnectionWhere>;
};

export type UserInteractionsRippleDisconnectFieldInput = {
  disconnect?: InputMaybe<RippleDisconnectInput>;
  where?: InputMaybe<UserInteractionsRippleConnectionWhere>;
};

export type UserInteractionsRippleFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsRippleConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsRippleConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsRippleCreateFieldInput>>;
};

export type UserInteractionsRippleUpdateConnectionInput = {
  node?: InputMaybe<RippleUpdateInput>;
};

export type UserInteractionsRippleUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsRippleConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsRippleConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsRippleCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsRippleDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsRippleDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsRippleUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsRippleConnectionWhere>;
};

export type UserInteractionsScopeConnectFieldInput = {
  connect?: InputMaybe<Array<ScopeConnectInput>>;
  where?: InputMaybe<ScopeConnectWhere>;
};

export type UserInteractionsScopeConnectOrCreateFieldInput = {
  onCreate: UserInteractionsScopeConnectOrCreateFieldInputOnCreate;
  where: ScopeConnectOrCreateWhere;
};

export type UserInteractionsScopeConnectOrCreateFieldInputOnCreate = {
  node: ScopeOnCreateInput;
};

export type UserInteractionsScopeConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsScopeConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsScopeConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsScopeConnectionWhere>>;
  node?: InputMaybe<ScopeWhere>;
};

export type UserInteractionsScopeCreateFieldInput = {
  node: ScopeCreateInput;
};

export type UserInteractionsScopeDeleteFieldInput = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<UserInteractionsScopeConnectionWhere>;
};

export type UserInteractionsScopeDisconnectFieldInput = {
  disconnect?: InputMaybe<ScopeDisconnectInput>;
  where?: InputMaybe<UserInteractionsScopeConnectionWhere>;
};

export type UserInteractionsScopeFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsScopeConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsScopeConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsScopeCreateFieldInput>>;
};

export type UserInteractionsScopeUpdateConnectionInput = {
  node?: InputMaybe<ScopeUpdateInput>;
};

export type UserInteractionsScopeUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsScopeConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsScopeConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsScopeCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsScopeDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsScopeDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsScopeUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsScopeConnectionWhere>;
};

export type UserInteractionsUpdateInput = {
  Consideration?: InputMaybe<Array<UserInteractionsConsiderationUpdateFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectUpdateFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusUpdateFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleUpdateFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeUpdateFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserUpdateFieldInput>>;
};

export type UserInteractionsUserConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  where?: InputMaybe<UserConnectWhere>;
};

export type UserInteractionsUserConnectOrCreateFieldInput = {
  onCreate: UserInteractionsUserConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type UserInteractionsUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type UserInteractionsUserConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsUserConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsUserConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsUserConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type UserInteractionsUserCreateFieldInput = {
  node: UserCreateInput;
};

export type UserInteractionsUserDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserInteractionsUserConnectionWhere>;
};

export type UserInteractionsUserDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<UserInteractionsUserConnectionWhere>;
};

export type UserInteractionsUserFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsUserConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsUserConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsUserCreateFieldInput>>;
};

export type UserInteractionsUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type UserInteractionsUserUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsUserConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsUserConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsUserCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsUserDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsUserDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsUserUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsUserConnectionWhere>;
};

export type UserInteractsWith_Project = {
  createdAt: Scalars['DateTime']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  type: UserInteractionName;
};

export type UserInteractsWith_ProjectCreateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  type: UserInteractionName;
};

export type UserInteractsWith_ProjectSort = {
  createdAt?: InputMaybe<SortDirection>;
  dump?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type UserInteractsWith_ProjectUpdateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<UserInteractionName>;
};

export type UserInteractsWith_ProjectWhere = {
  AND?: InputMaybe<Array<UserInteractsWith_ProjectWhere>>;
  NOT?: InputMaybe<UserInteractsWith_ProjectWhere>;
  OR?: InputMaybe<Array<UserInteractsWith_ProjectWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dump?: InputMaybe<Scalars['String']['input']>;
  dump_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  dump_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  dump_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dump_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  message_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  message_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<UserInteractionName>;
  type_IN?: InputMaybe<Array<UserInteractionName>>;
};

export type UserInteractsWith_Ripple = {
  createdAt: Scalars['DateTime']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  type: UserInteractionName;
};

export type UserInteractsWith_RippleCreateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  type: UserInteractionName;
};

export type UserInteractsWith_RippleSort = {
  createdAt?: InputMaybe<SortDirection>;
  dump?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type UserInteractsWith_RippleUpdateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<UserInteractionName>;
};

export type UserInteractsWith_RippleWhere = {
  AND?: InputMaybe<Array<UserInteractsWith_RippleWhere>>;
  NOT?: InputMaybe<UserInteractsWith_RippleWhere>;
  OR?: InputMaybe<Array<UserInteractsWith_RippleWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dump?: InputMaybe<Scalars['String']['input']>;
  dump_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  dump_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  dump_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dump_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  message_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  message_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<UserInteractionName>;
  type_IN?: InputMaybe<Array<UserInteractionName>>;
};

export type UserOnCreateInput = {
  email: Scalars['String']['input'];
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRelationInput = {
  interactions?: InputMaybe<UserInteractionsCreateFieldInput>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  createdAt?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  familyName?: InputMaybe<SortDirection>;
  givenName?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  interactions?: InputMaybe<UserInteractionsUpdateInput>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  familyName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  familyName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  familyName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  familyName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  givenName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  givenName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  givenName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  givenName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  /** Return Users where all of the related UserInteractionsConnections match this filter */
  interactionsConnection_ALL?: InputMaybe<UserInteractionsConnectionWhere>;
  /** Return Users where none of the related UserInteractionsConnections match this filter */
  interactionsConnection_NONE?: InputMaybe<UserInteractionsConnectionWhere>;
  /** Return Users where one of the related UserInteractionsConnections match this filter */
  interactionsConnection_SINGLE?: InputMaybe<UserInteractionsConnectionWhere>;
  /** Return Users where some of the related UserInteractionsConnections match this filter */
  interactionsConnection_SOME?: InputMaybe<UserInteractionsConnectionWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateProjectsMutationVariables = Exact<{
  input: Array<ProjectCreateInput> | ProjectCreateInput;
}>;


export type CreateProjectsMutation = { __typename?: 'Mutation', createProjects: { __typename?: 'CreateProjectsMutationResponse', projects: Array<{ __typename?: 'Project', id: string, name: string, considerations: Array<{ __typename?: 'Consideration', id: string, name?: string | null, details: string }> }> } };

export type UpdateProjectsMutationVariables = Exact<{
  where?: InputMaybe<ProjectWhere>;
  connectOrCreate?: InputMaybe<ProjectConnectOrCreateInput>;
  create?: InputMaybe<ProjectRelationInput>;
}>;


export type UpdateProjectsMutation = { __typename?: 'Mutation', updateProjects: { __typename?: 'UpdateProjectsMutationResponse', projects: Array<{ __typename?: 'Project', id: string, name: string, considerations: Array<{ __typename?: 'Consideration', id: string, name?: string | null, details: string }>, statuses: Array<{ __typename?: 'ProjectStatus', name: ProjectStatusName }>, scopesConnection: { __typename?: 'ProjectScopesConnection', edges: Array<{ __typename?: 'ProjectScopesRelationship', aspect: string, reason: string, node: { __typename?: 'Scope', name: string, description?: string | null, considerations: Array<{ __typename?: 'Consideration', name?: string | null, details: string }> } }> } }> } };

export type ScopesQueryVariables = Exact<{
  where?: InputMaybe<ScopeWhere>;
}>;


export type ScopesQuery = { __typename?: 'Query', scopes: Array<{ __typename?: 'Scope', id: string, name: string, description?: string | null, verified: boolean }> };


export const CreateProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"considerations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectsMutation, CreateProjectsMutationVariables>;
export const UpdateProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectConnectOrCreateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"create"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectRelationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"create"},"value":{"kind":"Variable","name":{"kind":"Name","value":"create"}}},{"kind":"Argument","name":{"kind":"Name","value":"connectOrCreate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"considerations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scopesConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aspect"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"considerations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectsMutation, UpdateProjectsMutationVariables>;
export const ScopesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Scopes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ScopeWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scopes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]} as unknown as DocumentNode<ScopesQuery, ScopesQueryVariables>;
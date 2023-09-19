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

export type CreateExamplesMutationResponse = {
  __typename?: 'CreateExamplesMutationResponse';
  examples: Array<Example>;
  info: CreateInfo;
};

export type CreateGeographicsMutationResponse = {
  __typename?: 'CreateGeographicsMutationResponse';
  geographics: Array<Geographic>;
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

export type CreateQuestionsMutationResponse = {
  __typename?: 'CreateQuestionsMutationResponse';
  info: CreateInfo;
  questions: Array<Question>;
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

export type CreateStakeholdersMutationResponse = {
  __typename?: 'CreateStakeholdersMutationResponse';
  info: CreateInfo;
  stakeholders: Array<Stakeholder>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type CreateWebDumpsMutationResponse = {
  __typename?: 'CreateWebDumpsMutationResponse';
  info: CreateInfo;
  webDumps: Array<WebDump>;
};

export type CreateWorkersMutationResponse = {
  __typename?: 'CreateWorkersMutationResponse';
  info: CreateInfo;
  workers: Array<Workers>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime']['output'];
  min: Scalars['DateTime']['output'];
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Example = {
  __typename?: 'Example';
  brief: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  scopes: Array<Scope>;
  scopesAggregate?: Maybe<ExampleScopeScopesAggregationSelection>;
  scopesConnection: ExampleScopesConnection;
  users: Array<User>;
  usersAggregate?: Maybe<ExampleUserUsersAggregationSelection>;
  usersConnection: ExampleUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type ExampleScopesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ScopeOptions>;
  where?: InputMaybe<ScopeWhere>;
};


export type ExampleScopesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ScopeWhere>;
};


export type ExampleScopesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ExampleScopesConnectionSort>>;
  where?: InputMaybe<ExampleScopesConnectionWhere>;
};


export type ExampleUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type ExampleUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type ExampleUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ExampleUsersConnectionSort>>;
  where?: InputMaybe<ExampleUsersConnectionWhere>;
};

export type ExampleAggregateSelection = {
  __typename?: 'ExampleAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

export type ExampleConnectInput = {
  scopes?: InputMaybe<Array<ExampleScopesConnectFieldInput>>;
  users?: InputMaybe<Array<ExampleUsersConnectFieldInput>>;
};

export type ExampleConnectOrCreateInput = {
  scopes?: InputMaybe<Array<ExampleScopesConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<ExampleUsersConnectOrCreateFieldInput>>;
};

export type ExampleConnectOrCreateWhere = {
  node: ExampleUniqueWhere;
};

export type ExampleConnectWhere = {
  node: ExampleWhere;
};

export type ExampleCreateInput = {
  brief: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<ExampleScopesFieldInput>;
  users?: InputMaybe<ExampleUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type ExampleDeleteInput = {
  scopes?: InputMaybe<Array<ExampleScopesDeleteFieldInput>>;
  users?: InputMaybe<Array<ExampleUsersDeleteFieldInput>>;
};

export type ExampleDisconnectInput = {
  scopes?: InputMaybe<Array<ExampleScopesDisconnectFieldInput>>;
  users?: InputMaybe<Array<ExampleUsersDisconnectFieldInput>>;
};

export type ExampleEdge = {
  __typename?: 'ExampleEdge';
  cursor: Scalars['String']['output'];
  node: Example;
};

export type ExampleOnCreateInput = {
  brief: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type ExampleOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ExampleSort objects to sort Examples by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ExampleSort>>;
};

export type ExampleRelationInput = {
  scopes?: InputMaybe<Array<ExampleScopesCreateFieldInput>>;
  users?: InputMaybe<Array<ExampleUsersCreateFieldInput>>;
};

export type ExampleScopeScopesAggregationSelection = {
  __typename?: 'ExampleScopeScopesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ExampleScopeScopesNodeAggregateSelection>;
};

export type ExampleScopeScopesNodeAggregateSelection = {
  __typename?: 'ExampleScopeScopesNodeAggregateSelection';
  basis: StringAggregateSelectionNullable;
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ExampleScopesAggregateInput = {
  AND?: InputMaybe<Array<ExampleScopesAggregateInput>>;
  NOT?: InputMaybe<ExampleScopesAggregateInput>;
  OR?: InputMaybe<Array<ExampleScopesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ExampleScopesNodeAggregationWhereInput>;
};

export type ExampleScopesConnectFieldInput = {
  connect?: InputMaybe<Array<ScopeConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ScopeConnectWhere>;
};

export type ExampleScopesConnectOrCreateFieldInput = {
  onCreate: ExampleScopesConnectOrCreateFieldInputOnCreate;
  where: ScopeConnectOrCreateWhere;
};

export type ExampleScopesConnectOrCreateFieldInputOnCreate = {
  node: ScopeOnCreateInput;
};

export type ExampleScopesConnection = {
  __typename?: 'ExampleScopesConnection';
  edges: Array<ExampleScopesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ExampleScopesConnectionSort = {
  node?: InputMaybe<ScopeSort>;
};

export type ExampleScopesConnectionWhere = {
  AND?: InputMaybe<Array<ExampleScopesConnectionWhere>>;
  NOT?: InputMaybe<ExampleScopesConnectionWhere>;
  OR?: InputMaybe<Array<ExampleScopesConnectionWhere>>;
  node?: InputMaybe<ScopeWhere>;
};

export type ExampleScopesCreateFieldInput = {
  node: ScopeCreateInput;
};

export type ExampleScopesDeleteFieldInput = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<ExampleScopesConnectionWhere>;
};

export type ExampleScopesDisconnectFieldInput = {
  disconnect?: InputMaybe<ScopeDisconnectInput>;
  where?: InputMaybe<ExampleScopesConnectionWhere>;
};

export type ExampleScopesFieldInput = {
  connect?: InputMaybe<Array<ExampleScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ExampleScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ExampleScopesCreateFieldInput>>;
};

export type ExampleScopesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ExampleScopesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ExampleScopesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ExampleScopesNodeAggregationWhereInput>>;
  basis_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  basis_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
};

export type ExampleScopesRelationship = {
  __typename?: 'ExampleScopesRelationship';
  cursor: Scalars['String']['output'];
  node: Scope;
};

export type ExampleScopesUpdateConnectionInput = {
  node?: InputMaybe<ScopeUpdateInput>;
};

export type ExampleScopesUpdateFieldInput = {
  connect?: InputMaybe<Array<ExampleScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ExampleScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ExampleScopesCreateFieldInput>>;
  delete?: InputMaybe<Array<ExampleScopesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ExampleScopesDisconnectFieldInput>>;
  update?: InputMaybe<ExampleScopesUpdateConnectionInput>;
  where?: InputMaybe<ExampleScopesConnectionWhere>;
};

/** Fields to sort Examples by. The order in which sorts are applied is not guaranteed when specifying many fields in one ExampleSort object. */
export type ExampleSort = {
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type ExampleUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ExampleUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Array<ExampleScopesUpdateFieldInput>>;
  users?: InputMaybe<Array<ExampleUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExampleUserUsersAggregationSelection = {
  __typename?: 'ExampleUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ExampleUserUsersEdgeAggregateSelection>;
  node?: Maybe<ExampleUserUsersNodeAggregateSelection>;
};

export type ExampleUserUsersEdgeAggregateSelection = {
  __typename?: 'ExampleUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type ExampleUserUsersNodeAggregateSelection = {
  __typename?: 'ExampleUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type ExampleUsersAggregateInput = {
  AND?: InputMaybe<Array<ExampleUsersAggregateInput>>;
  NOT?: InputMaybe<ExampleUsersAggregateInput>;
  OR?: InputMaybe<Array<ExampleUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ExampleUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<ExampleUsersNodeAggregationWhereInput>;
};

export type ExampleUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type ExampleUsersConnectOrCreateFieldInput = {
  onCreate: ExampleUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type ExampleUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type ExampleUsersConnection = {
  __typename?: 'ExampleUsersConnection';
  edges: Array<ExampleUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ExampleUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type ExampleUsersConnectionWhere = {
  AND?: InputMaybe<Array<ExampleUsersConnectionWhere>>;
  NOT?: InputMaybe<ExampleUsersConnectionWhere>;
  OR?: InputMaybe<Array<ExampleUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type ExampleUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: UserCreateInput;
};

export type ExampleUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<ExampleUsersConnectionWhere>;
};

export type ExampleUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<ExampleUsersConnectionWhere>;
};

export type ExampleUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ExampleUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ExampleUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ExampleUsersEdgeAggregationWhereInput>>;
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

export type ExampleUsersFieldInput = {
  connect?: InputMaybe<Array<ExampleUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ExampleUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ExampleUsersCreateFieldInput>>;
};

export type ExampleUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ExampleUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ExampleUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ExampleUsersNodeAggregationWhereInput>>;
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
};

export type ExampleUsersRelationship = UserInteractsWith & {
  __typename?: 'ExampleUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type ExampleUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type ExampleUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<ExampleUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ExampleUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ExampleUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<ExampleUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ExampleUsersDisconnectFieldInput>>;
  update?: InputMaybe<ExampleUsersUpdateConnectionInput>;
  where?: InputMaybe<ExampleUsersConnectionWhere>;
};

export type ExampleWhere = {
  AND?: InputMaybe<Array<ExampleWhere>>;
  NOT?: InputMaybe<ExampleWhere>;
  OR?: InputMaybe<Array<ExampleWhere>>;
  brief?: InputMaybe<Scalars['String']['input']>;
  brief_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  brief_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  brief_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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
  scopesAggregate?: InputMaybe<ExampleScopesAggregateInput>;
  /** Return Examples where all of the related ExampleScopesConnections match this filter */
  scopesConnection_ALL?: InputMaybe<ExampleScopesConnectionWhere>;
  /** Return Examples where none of the related ExampleScopesConnections match this filter */
  scopesConnection_NONE?: InputMaybe<ExampleScopesConnectionWhere>;
  /** Return Examples where one of the related ExampleScopesConnections match this filter */
  scopesConnection_SINGLE?: InputMaybe<ExampleScopesConnectionWhere>;
  /** Return Examples where some of the related ExampleScopesConnections match this filter */
  scopesConnection_SOME?: InputMaybe<ExampleScopesConnectionWhere>;
  /** Return Examples where all of the related Scopes match this filter */
  scopes_ALL?: InputMaybe<ScopeWhere>;
  /** Return Examples where none of the related Scopes match this filter */
  scopes_NONE?: InputMaybe<ScopeWhere>;
  /** Return Examples where one of the related Scopes match this filter */
  scopes_SINGLE?: InputMaybe<ScopeWhere>;
  /** Return Examples where some of the related Scopes match this filter */
  scopes_SOME?: InputMaybe<ScopeWhere>;
  usersAggregate?: InputMaybe<ExampleUsersAggregateInput>;
  /** Return Examples where all of the related ExampleUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<ExampleUsersConnectionWhere>;
  /** Return Examples where none of the related ExampleUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<ExampleUsersConnectionWhere>;
  /** Return Examples where one of the related ExampleUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<ExampleUsersConnectionWhere>;
  /** Return Examples where some of the related ExampleUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<ExampleUsersConnectionWhere>;
  /** Return Examples where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Examples where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Examples where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Examples where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExamplesConnection = {
  __typename?: 'ExamplesConnection';
  edges: Array<ExampleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  sum: Scalars['Float']['output'];
};

export type Geographic = {
  __typename?: 'Geographic';
  brief?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<GeographicProjectProjectsAggregationSelection>;
  projectsConnection: GeographicProjectsConnection;
  users: Array<User>;
  usersAggregate?: Maybe<GeographicUserUsersAggregationSelection>;
  usersConnection: GeographicUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type GeographicProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type GeographicProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type GeographicProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GeographicProjectsConnectionSort>>;
  where?: InputMaybe<GeographicProjectsConnectionWhere>;
};


export type GeographicUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type GeographicUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type GeographicUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GeographicUsersConnectionSort>>;
  where?: InputMaybe<GeographicUsersConnectionWhere>;
};

export type GeographicAggregateSelection = {
  __typename?: 'GeographicAggregateSelection';
  brief: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type GeographicConnectInput = {
  projects?: InputMaybe<Array<GeographicProjectsConnectFieldInput>>;
  users?: InputMaybe<Array<GeographicUsersConnectFieldInput>>;
};

export type GeographicConnectOrCreateInput = {
  projects?: InputMaybe<Array<GeographicProjectsConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<GeographicUsersConnectOrCreateFieldInput>>;
};

export type GeographicConnectOrCreateWhere = {
  node: GeographicUniqueWhere;
};

export type GeographicConnectWhere = {
  node: GeographicWhere;
};

export type GeographicCreateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<GeographicProjectsFieldInput>;
  users?: InputMaybe<GeographicUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type GeographicDeleteInput = {
  projects?: InputMaybe<Array<GeographicProjectsDeleteFieldInput>>;
  users?: InputMaybe<Array<GeographicUsersDeleteFieldInput>>;
};

export type GeographicDisconnectInput = {
  projects?: InputMaybe<Array<GeographicProjectsDisconnectFieldInput>>;
  users?: InputMaybe<Array<GeographicUsersDisconnectFieldInput>>;
};

export type GeographicEdge = {
  __typename?: 'GeographicEdge';
  cursor: Scalars['String']['output'];
  node: Geographic;
};

export type GeographicOnCreateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type GeographicOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more GeographicSort objects to sort Geographics by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GeographicSort>>;
};

export type GeographicProjectProjectsAggregationSelection = {
  __typename?: 'GeographicProjectProjectsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<GeographicProjectProjectsNodeAggregateSelection>;
};

export type GeographicProjectProjectsNodeAggregateSelection = {
  __typename?: 'GeographicProjectProjectsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
};

export type GeographicProjectsAggregateInput = {
  AND?: InputMaybe<Array<GeographicProjectsAggregateInput>>;
  NOT?: InputMaybe<GeographicProjectsAggregateInput>;
  OR?: InputMaybe<Array<GeographicProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<GeographicProjectsNodeAggregationWhereInput>;
};

export type GeographicProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type GeographicProjectsConnectOrCreateFieldInput = {
  onCreate: GeographicProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type GeographicProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type GeographicProjectsConnection = {
  __typename?: 'GeographicProjectsConnection';
  edges: Array<GeographicProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GeographicProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type GeographicProjectsConnectionWhere = {
  AND?: InputMaybe<Array<GeographicProjectsConnectionWhere>>;
  NOT?: InputMaybe<GeographicProjectsConnectionWhere>;
  OR?: InputMaybe<Array<GeographicProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type GeographicProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type GeographicProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<GeographicProjectsConnectionWhere>;
};

export type GeographicProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<GeographicProjectsConnectionWhere>;
};

export type GeographicProjectsFieldInput = {
  connect?: InputMaybe<Array<GeographicProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<GeographicProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<GeographicProjectsCreateFieldInput>>;
};

export type GeographicProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<GeographicProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<GeographicProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<GeographicProjectsNodeAggregationWhereInput>>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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

export type GeographicProjectsRelationship = {
  __typename?: 'GeographicProjectsRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type GeographicProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type GeographicProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<GeographicProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<GeographicProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<GeographicProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<GeographicProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<GeographicProjectsDisconnectFieldInput>>;
  update?: InputMaybe<GeographicProjectsUpdateConnectionInput>;
  where?: InputMaybe<GeographicProjectsConnectionWhere>;
};

export type GeographicRelationInput = {
  projects?: InputMaybe<Array<GeographicProjectsCreateFieldInput>>;
  users?: InputMaybe<Array<GeographicUsersCreateFieldInput>>;
};

/** Fields to sort Geographics by. The order in which sorts are applied is not guaranteed when specifying many fields in one GeographicSort object. */
export type GeographicSort = {
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type GeographicUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GeographicUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<GeographicProjectsUpdateFieldInput>>;
  users?: InputMaybe<Array<GeographicUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GeographicUserUsersAggregationSelection = {
  __typename?: 'GeographicUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<GeographicUserUsersEdgeAggregateSelection>;
  node?: Maybe<GeographicUserUsersNodeAggregateSelection>;
};

export type GeographicUserUsersEdgeAggregateSelection = {
  __typename?: 'GeographicUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type GeographicUserUsersNodeAggregateSelection = {
  __typename?: 'GeographicUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type GeographicUsersAggregateInput = {
  AND?: InputMaybe<Array<GeographicUsersAggregateInput>>;
  NOT?: InputMaybe<GeographicUsersAggregateInput>;
  OR?: InputMaybe<Array<GeographicUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<GeographicUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<GeographicUsersNodeAggregationWhereInput>;
};

export type GeographicUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type GeographicUsersConnectOrCreateFieldInput = {
  onCreate: GeographicUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type GeographicUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type GeographicUsersConnection = {
  __typename?: 'GeographicUsersConnection';
  edges: Array<GeographicUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GeographicUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type GeographicUsersConnectionWhere = {
  AND?: InputMaybe<Array<GeographicUsersConnectionWhere>>;
  NOT?: InputMaybe<GeographicUsersConnectionWhere>;
  OR?: InputMaybe<Array<GeographicUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type GeographicUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: UserCreateInput;
};

export type GeographicUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<GeographicUsersConnectionWhere>;
};

export type GeographicUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<GeographicUsersConnectionWhere>;
};

export type GeographicUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<GeographicUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<GeographicUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<GeographicUsersEdgeAggregationWhereInput>>;
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

export type GeographicUsersFieldInput = {
  connect?: InputMaybe<Array<GeographicUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<GeographicUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<GeographicUsersCreateFieldInput>>;
};

export type GeographicUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<GeographicUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<GeographicUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<GeographicUsersNodeAggregationWhereInput>>;
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
};

export type GeographicUsersRelationship = UserInteractsWith & {
  __typename?: 'GeographicUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type GeographicUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type GeographicUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<GeographicUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<GeographicUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<GeographicUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<GeographicUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<GeographicUsersDisconnectFieldInput>>;
  update?: InputMaybe<GeographicUsersUpdateConnectionInput>;
  where?: InputMaybe<GeographicUsersConnectionWhere>;
};

export type GeographicWhere = {
  AND?: InputMaybe<Array<GeographicWhere>>;
  NOT?: InputMaybe<GeographicWhere>;
  OR?: InputMaybe<Array<GeographicWhere>>;
  brief?: InputMaybe<Scalars['String']['input']>;
  brief_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  brief_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brief_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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
  projectsAggregate?: InputMaybe<GeographicProjectsAggregateInput>;
  /** Return Geographics where all of the related GeographicProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<GeographicProjectsConnectionWhere>;
  /** Return Geographics where none of the related GeographicProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<GeographicProjectsConnectionWhere>;
  /** Return Geographics where one of the related GeographicProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<GeographicProjectsConnectionWhere>;
  /** Return Geographics where some of the related GeographicProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<GeographicProjectsConnectionWhere>;
  /** Return Geographics where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Geographics where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Geographics where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Geographics where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  usersAggregate?: InputMaybe<GeographicUsersAggregateInput>;
  /** Return Geographics where all of the related GeographicUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<GeographicUsersConnectionWhere>;
  /** Return Geographics where none of the related GeographicUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<GeographicUsersConnectionWhere>;
  /** Return Geographics where one of the related GeographicUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<GeographicUsersConnectionWhere>;
  /** Return Geographics where some of the related GeographicUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<GeographicUsersConnectionWhere>;
  /** Return Geographics where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Geographics where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Geographics where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Geographics where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GeographicsConnection = {
  __typename?: 'GeographicsConnection';
  edges: Array<GeographicEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type Interactable = Example | Geographic | Project | ProjectStatus | Question | Ripple | Scope | Stakeholder | User | WebDump | Workers;

export type InteractableWhere = {
  Example?: InputMaybe<ExampleWhere>;
  Geographic?: InputMaybe<GeographicWhere>;
  Project?: InputMaybe<ProjectWhere>;
  ProjectStatus?: InputMaybe<ProjectStatusWhere>;
  Question?: InputMaybe<QuestionWhere>;
  Ripple?: InputMaybe<RippleWhere>;
  Scope?: InputMaybe<ScopeWhere>;
  Stakeholder?: InputMaybe<StakeholderWhere>;
  User?: InputMaybe<UserWhere>;
  WebDump?: InputMaybe<WebDumpWhere>;
  Workers?: InputMaybe<WorkersWhere>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createExamples: CreateExamplesMutationResponse;
  createGeographics: CreateGeographicsMutationResponse;
  createProjectStatuses: CreateProjectStatusesMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  createQuestions: CreateQuestionsMutationResponse;
  createRipples: CreateRipplesMutationResponse;
  createScopes: CreateScopesMutationResponse;
  createStakeholders: CreateStakeholdersMutationResponse;
  createUsers: CreateUsersMutationResponse;
  createWebDumps: CreateWebDumpsMutationResponse;
  createWorkers: CreateWorkersMutationResponse;
  deleteExamples: DeleteInfo;
  deleteGeographics: DeleteInfo;
  deleteProjectStatuses: DeleteInfo;
  deleteProjects: DeleteInfo;
  deleteQuestions: DeleteInfo;
  deleteRipples: DeleteInfo;
  deleteScopes: DeleteInfo;
  deleteStakeholders: DeleteInfo;
  deleteUsers: DeleteInfo;
  deleteWebDumps: DeleteInfo;
  deleteWorkers: DeleteInfo;
  updateExamples: UpdateExamplesMutationResponse;
  updateGeographics: UpdateGeographicsMutationResponse;
  updateProjectStatuses: UpdateProjectStatusesMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
  updateQuestions: UpdateQuestionsMutationResponse;
  updateRipples: UpdateRipplesMutationResponse;
  updateScopes: UpdateScopesMutationResponse;
  updateStakeholders: UpdateStakeholdersMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
  updateWebDumps: UpdateWebDumpsMutationResponse;
  updateWorkers: UpdateWorkersMutationResponse;
};


export type MutationCreateExamplesArgs = {
  input: Array<ExampleCreateInput>;
};


export type MutationCreateGeographicsArgs = {
  input: Array<GeographicCreateInput>;
};


export type MutationCreateProjectStatusesArgs = {
  input: Array<ProjectStatusCreateInput>;
};


export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};


export type MutationCreateQuestionsArgs = {
  input: Array<QuestionCreateInput>;
};


export type MutationCreateRipplesArgs = {
  input: Array<RippleCreateInput>;
};


export type MutationCreateScopesArgs = {
  input: Array<ScopeCreateInput>;
};


export type MutationCreateStakeholdersArgs = {
  input: Array<StakeholderCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationCreateWebDumpsArgs = {
  input: Array<WebDumpCreateInput>;
};


export type MutationCreateWorkersArgs = {
  input: Array<WorkersCreateInput>;
};


export type MutationDeleteExamplesArgs = {
  delete?: InputMaybe<ExampleDeleteInput>;
  where?: InputMaybe<ExampleWhere>;
};


export type MutationDeleteGeographicsArgs = {
  delete?: InputMaybe<GeographicDeleteInput>;
  where?: InputMaybe<GeographicWhere>;
};


export type MutationDeleteProjectStatusesArgs = {
  delete?: InputMaybe<ProjectStatusDeleteInput>;
  where?: InputMaybe<ProjectStatusWhere>;
};


export type MutationDeleteProjectsArgs = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationDeleteQuestionsArgs = {
  delete?: InputMaybe<QuestionDeleteInput>;
  where?: InputMaybe<QuestionWhere>;
};


export type MutationDeleteRipplesArgs = {
  delete?: InputMaybe<RippleDeleteInput>;
  where?: InputMaybe<RippleWhere>;
};


export type MutationDeleteScopesArgs = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<ScopeWhere>;
};


export type MutationDeleteStakeholdersArgs = {
  delete?: InputMaybe<StakeholderDeleteInput>;
  where?: InputMaybe<StakeholderWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationDeleteWebDumpsArgs = {
  delete?: InputMaybe<WebDumpDeleteInput>;
  where?: InputMaybe<WebDumpWhere>;
};


export type MutationDeleteWorkersArgs = {
  delete?: InputMaybe<WorkersDeleteInput>;
  where?: InputMaybe<WorkersWhere>;
};


export type MutationUpdateExamplesArgs = {
  connect?: InputMaybe<ExampleConnectInput>;
  connectOrCreate?: InputMaybe<ExampleConnectOrCreateInput>;
  create?: InputMaybe<ExampleRelationInput>;
  delete?: InputMaybe<ExampleDeleteInput>;
  disconnect?: InputMaybe<ExampleDisconnectInput>;
  update?: InputMaybe<ExampleUpdateInput>;
  where?: InputMaybe<ExampleWhere>;
};


export type MutationUpdateGeographicsArgs = {
  connect?: InputMaybe<GeographicConnectInput>;
  connectOrCreate?: InputMaybe<GeographicConnectOrCreateInput>;
  create?: InputMaybe<GeographicRelationInput>;
  delete?: InputMaybe<GeographicDeleteInput>;
  disconnect?: InputMaybe<GeographicDisconnectInput>;
  update?: InputMaybe<GeographicUpdateInput>;
  where?: InputMaybe<GeographicWhere>;
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


export type MutationUpdateQuestionsArgs = {
  connect?: InputMaybe<QuestionConnectInput>;
  connectOrCreate?: InputMaybe<QuestionConnectOrCreateInput>;
  create?: InputMaybe<QuestionRelationInput>;
  delete?: InputMaybe<QuestionDeleteInput>;
  disconnect?: InputMaybe<QuestionDisconnectInput>;
  update?: InputMaybe<QuestionUpdateInput>;
  where?: InputMaybe<QuestionWhere>;
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


export type MutationUpdateStakeholdersArgs = {
  connect?: InputMaybe<StakeholderConnectInput>;
  connectOrCreate?: InputMaybe<StakeholderConnectOrCreateInput>;
  create?: InputMaybe<StakeholderRelationInput>;
  delete?: InputMaybe<StakeholderDeleteInput>;
  disconnect?: InputMaybe<StakeholderDisconnectInput>;
  update?: InputMaybe<StakeholderUpdateInput>;
  where?: InputMaybe<StakeholderWhere>;
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


export type MutationUpdateWebDumpsArgs = {
  connect?: InputMaybe<WebDumpConnectInput>;
  connectOrCreate?: InputMaybe<WebDumpConnectOrCreateInput>;
  create?: InputMaybe<WebDumpRelationInput>;
  delete?: InputMaybe<WebDumpDeleteInput>;
  disconnect?: InputMaybe<WebDumpDisconnectInput>;
  update?: InputMaybe<WebDumpUpdateInput>;
  where?: InputMaybe<WebDumpWhere>;
};


export type MutationUpdateWorkersArgs = {
  connect?: InputMaybe<WorkersConnectInput>;
  connectOrCreate?: InputMaybe<WorkersConnectOrCreateInput>;
  create?: InputMaybe<WorkersRelationInput>;
  delete?: InputMaybe<WorkersDeleteInput>;
  disconnect?: InputMaybe<WorkersDisconnectInput>;
  update?: InputMaybe<WorkersUpdateInput>;
  where?: InputMaybe<WorkersWhere>;
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
  brief: Scalars['String']['output'];
  considerations: Array<ProjectConsideration>;
  considerationsConnection: ProjectConsiderationsConnection;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
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
  users: Array<User>;
  usersAggregate?: Maybe<ProjectUserUsersAggregationSelection>;
  usersConnection: ProjectUsersConnection;
  verified: Scalars['Boolean']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type ProjectConsiderationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ProjectConsiderationWhere>;
};


export type ProjectConsiderationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
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
  brief: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
};

export type ProjectConnectInput = {
  considerations?: InputMaybe<ProjectConsiderationsConnectInput>;
  ripples?: InputMaybe<Array<ProjectRipplesConnectFieldInput>>;
  scopes?: InputMaybe<Array<ProjectScopesConnectFieldInput>>;
  statuses?: InputMaybe<Array<ProjectStatusesConnectFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersConnectFieldInput>>;
};

export type ProjectConnectOrCreateInput = {
  considerations?: InputMaybe<ProjectConsiderationsConnectOrCreateInput>;
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

export type ProjectConsideration = Geographic | Stakeholder | WebDump | Workers;

export type ProjectConsiderationWhere = {
  Geographic?: InputMaybe<GeographicWhere>;
  Stakeholder?: InputMaybe<StakeholderWhere>;
  WebDump?: InputMaybe<WebDumpWhere>;
  Workers?: InputMaybe<WorkersWhere>;
};

export type ProjectConsiderationsConnectInput = {
  Geographic?: InputMaybe<Array<ProjectConsiderationsGeographicConnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<ProjectConsiderationsStakeholderConnectFieldInput>>;
  WebDump?: InputMaybe<Array<ProjectConsiderationsWebDumpConnectFieldInput>>;
  Workers?: InputMaybe<Array<ProjectConsiderationsWorkersConnectFieldInput>>;
};

export type ProjectConsiderationsConnectOrCreateInput = {
  Geographic?: InputMaybe<Array<ProjectConsiderationsGeographicConnectOrCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<ProjectConsiderationsStakeholderConnectOrCreateFieldInput>>;
  WebDump?: InputMaybe<Array<ProjectConsiderationsWebDumpConnectOrCreateFieldInput>>;
  Workers?: InputMaybe<Array<ProjectConsiderationsWorkersConnectOrCreateFieldInput>>;
};

export type ProjectConsiderationsConnection = {
  __typename?: 'ProjectConsiderationsConnection';
  edges: Array<ProjectConsiderationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectConsiderationsConnectionWhere = {
  Geographic?: InputMaybe<ProjectConsiderationsGeographicConnectionWhere>;
  Stakeholder?: InputMaybe<ProjectConsiderationsStakeholderConnectionWhere>;
  WebDump?: InputMaybe<ProjectConsiderationsWebDumpConnectionWhere>;
  Workers?: InputMaybe<ProjectConsiderationsWorkersConnectionWhere>;
};

export type ProjectConsiderationsCreateFieldInput = {
  Geographic?: InputMaybe<Array<ProjectConsiderationsGeographicCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<ProjectConsiderationsStakeholderCreateFieldInput>>;
  WebDump?: InputMaybe<Array<ProjectConsiderationsWebDumpCreateFieldInput>>;
  Workers?: InputMaybe<Array<ProjectConsiderationsWorkersCreateFieldInput>>;
};

export type ProjectConsiderationsCreateInput = {
  Geographic?: InputMaybe<ProjectConsiderationsGeographicFieldInput>;
  Stakeholder?: InputMaybe<ProjectConsiderationsStakeholderFieldInput>;
  WebDump?: InputMaybe<ProjectConsiderationsWebDumpFieldInput>;
  Workers?: InputMaybe<ProjectConsiderationsWorkersFieldInput>;
};

export type ProjectConsiderationsDeleteInput = {
  Geographic?: InputMaybe<Array<ProjectConsiderationsGeographicDeleteFieldInput>>;
  Stakeholder?: InputMaybe<Array<ProjectConsiderationsStakeholderDeleteFieldInput>>;
  WebDump?: InputMaybe<Array<ProjectConsiderationsWebDumpDeleteFieldInput>>;
  Workers?: InputMaybe<Array<ProjectConsiderationsWorkersDeleteFieldInput>>;
};

export type ProjectConsiderationsDisconnectInput = {
  Geographic?: InputMaybe<Array<ProjectConsiderationsGeographicDisconnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<ProjectConsiderationsStakeholderDisconnectFieldInput>>;
  WebDump?: InputMaybe<Array<ProjectConsiderationsWebDumpDisconnectFieldInput>>;
  Workers?: InputMaybe<Array<ProjectConsiderationsWorkersDisconnectFieldInput>>;
};

export type ProjectConsiderationsGeographicConnectFieldInput = {
  connect?: InputMaybe<Array<GeographicConnectInput>>;
  where?: InputMaybe<GeographicConnectWhere>;
};

export type ProjectConsiderationsGeographicConnectOrCreateFieldInput = {
  onCreate: ProjectConsiderationsGeographicConnectOrCreateFieldInputOnCreate;
  where: GeographicConnectOrCreateWhere;
};

export type ProjectConsiderationsGeographicConnectOrCreateFieldInputOnCreate = {
  node: GeographicOnCreateInput;
};

export type ProjectConsiderationsGeographicConnectionWhere = {
  AND?: InputMaybe<Array<ProjectConsiderationsGeographicConnectionWhere>>;
  NOT?: InputMaybe<ProjectConsiderationsGeographicConnectionWhere>;
  OR?: InputMaybe<Array<ProjectConsiderationsGeographicConnectionWhere>>;
  node?: InputMaybe<GeographicWhere>;
};

export type ProjectConsiderationsGeographicCreateFieldInput = {
  node: GeographicCreateInput;
};

export type ProjectConsiderationsGeographicDeleteFieldInput = {
  delete?: InputMaybe<GeographicDeleteInput>;
  where?: InputMaybe<ProjectConsiderationsGeographicConnectionWhere>;
};

export type ProjectConsiderationsGeographicDisconnectFieldInput = {
  disconnect?: InputMaybe<GeographicDisconnectInput>;
  where?: InputMaybe<ProjectConsiderationsGeographicConnectionWhere>;
};

export type ProjectConsiderationsGeographicFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsGeographicConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsGeographicConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsGeographicCreateFieldInput>>;
};

export type ProjectConsiderationsGeographicUpdateConnectionInput = {
  node?: InputMaybe<GeographicUpdateInput>;
};

export type ProjectConsiderationsGeographicUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsGeographicConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsGeographicConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsGeographicCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectConsiderationsGeographicDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectConsiderationsGeographicDisconnectFieldInput>>;
  update?: InputMaybe<ProjectConsiderationsGeographicUpdateConnectionInput>;
  where?: InputMaybe<ProjectConsiderationsGeographicConnectionWhere>;
};

export type ProjectConsiderationsRelationship = {
  __typename?: 'ProjectConsiderationsRelationship';
  cursor: Scalars['String']['output'];
  node: ProjectConsideration;
};

export type ProjectConsiderationsStakeholderConnectFieldInput = {
  connect?: InputMaybe<Array<StakeholderConnectInput>>;
  where?: InputMaybe<StakeholderConnectWhere>;
};

export type ProjectConsiderationsStakeholderConnectOrCreateFieldInput = {
  onCreate: ProjectConsiderationsStakeholderConnectOrCreateFieldInputOnCreate;
  where: StakeholderConnectOrCreateWhere;
};

export type ProjectConsiderationsStakeholderConnectOrCreateFieldInputOnCreate = {
  node: StakeholderOnCreateInput;
};

export type ProjectConsiderationsStakeholderConnectionWhere = {
  AND?: InputMaybe<Array<ProjectConsiderationsStakeholderConnectionWhere>>;
  NOT?: InputMaybe<ProjectConsiderationsStakeholderConnectionWhere>;
  OR?: InputMaybe<Array<ProjectConsiderationsStakeholderConnectionWhere>>;
  node?: InputMaybe<StakeholderWhere>;
};

export type ProjectConsiderationsStakeholderCreateFieldInput = {
  node: StakeholderCreateInput;
};

export type ProjectConsiderationsStakeholderDeleteFieldInput = {
  delete?: InputMaybe<StakeholderDeleteInput>;
  where?: InputMaybe<ProjectConsiderationsStakeholderConnectionWhere>;
};

export type ProjectConsiderationsStakeholderDisconnectFieldInput = {
  disconnect?: InputMaybe<StakeholderDisconnectInput>;
  where?: InputMaybe<ProjectConsiderationsStakeholderConnectionWhere>;
};

export type ProjectConsiderationsStakeholderFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsStakeholderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsStakeholderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsStakeholderCreateFieldInput>>;
};

export type ProjectConsiderationsStakeholderUpdateConnectionInput = {
  node?: InputMaybe<StakeholderUpdateInput>;
};

export type ProjectConsiderationsStakeholderUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsStakeholderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsStakeholderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsStakeholderCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectConsiderationsStakeholderDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectConsiderationsStakeholderDisconnectFieldInput>>;
  update?: InputMaybe<ProjectConsiderationsStakeholderUpdateConnectionInput>;
  where?: InputMaybe<ProjectConsiderationsStakeholderConnectionWhere>;
};

export type ProjectConsiderationsUpdateInput = {
  Geographic?: InputMaybe<Array<ProjectConsiderationsGeographicUpdateFieldInput>>;
  Stakeholder?: InputMaybe<Array<ProjectConsiderationsStakeholderUpdateFieldInput>>;
  WebDump?: InputMaybe<Array<ProjectConsiderationsWebDumpUpdateFieldInput>>;
  Workers?: InputMaybe<Array<ProjectConsiderationsWorkersUpdateFieldInput>>;
};

export type ProjectConsiderationsWebDumpConnectFieldInput = {
  connect?: InputMaybe<Array<WebDumpConnectInput>>;
  where?: InputMaybe<WebDumpConnectWhere>;
};

export type ProjectConsiderationsWebDumpConnectOrCreateFieldInput = {
  onCreate: ProjectConsiderationsWebDumpConnectOrCreateFieldInputOnCreate;
  where: WebDumpConnectOrCreateWhere;
};

export type ProjectConsiderationsWebDumpConnectOrCreateFieldInputOnCreate = {
  node: WebDumpOnCreateInput;
};

export type ProjectConsiderationsWebDumpConnectionWhere = {
  AND?: InputMaybe<Array<ProjectConsiderationsWebDumpConnectionWhere>>;
  NOT?: InputMaybe<ProjectConsiderationsWebDumpConnectionWhere>;
  OR?: InputMaybe<Array<ProjectConsiderationsWebDumpConnectionWhere>>;
  node?: InputMaybe<WebDumpWhere>;
};

export type ProjectConsiderationsWebDumpCreateFieldInput = {
  node: WebDumpCreateInput;
};

export type ProjectConsiderationsWebDumpDeleteFieldInput = {
  delete?: InputMaybe<WebDumpDeleteInput>;
  where?: InputMaybe<ProjectConsiderationsWebDumpConnectionWhere>;
};

export type ProjectConsiderationsWebDumpDisconnectFieldInput = {
  disconnect?: InputMaybe<WebDumpDisconnectInput>;
  where?: InputMaybe<ProjectConsiderationsWebDumpConnectionWhere>;
};

export type ProjectConsiderationsWebDumpFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsWebDumpConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsWebDumpConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsWebDumpCreateFieldInput>>;
};

export type ProjectConsiderationsWebDumpUpdateConnectionInput = {
  node?: InputMaybe<WebDumpUpdateInput>;
};

export type ProjectConsiderationsWebDumpUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsWebDumpConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsWebDumpConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsWebDumpCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectConsiderationsWebDumpDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectConsiderationsWebDumpDisconnectFieldInput>>;
  update?: InputMaybe<ProjectConsiderationsWebDumpUpdateConnectionInput>;
  where?: InputMaybe<ProjectConsiderationsWebDumpConnectionWhere>;
};

export type ProjectConsiderationsWorkersConnectFieldInput = {
  connect?: InputMaybe<Array<WorkersConnectInput>>;
  where?: InputMaybe<WorkersConnectWhere>;
};

export type ProjectConsiderationsWorkersConnectOrCreateFieldInput = {
  onCreate: ProjectConsiderationsWorkersConnectOrCreateFieldInputOnCreate;
  where: WorkersConnectOrCreateWhere;
};

export type ProjectConsiderationsWorkersConnectOrCreateFieldInputOnCreate = {
  node: WorkersOnCreateInput;
};

export type ProjectConsiderationsWorkersConnectionWhere = {
  AND?: InputMaybe<Array<ProjectConsiderationsWorkersConnectionWhere>>;
  NOT?: InputMaybe<ProjectConsiderationsWorkersConnectionWhere>;
  OR?: InputMaybe<Array<ProjectConsiderationsWorkersConnectionWhere>>;
  node?: InputMaybe<WorkersWhere>;
};

export type ProjectConsiderationsWorkersCreateFieldInput = {
  node: WorkersCreateInput;
};

export type ProjectConsiderationsWorkersDeleteFieldInput = {
  delete?: InputMaybe<WorkersDeleteInput>;
  where?: InputMaybe<ProjectConsiderationsWorkersConnectionWhere>;
};

export type ProjectConsiderationsWorkersDisconnectFieldInput = {
  disconnect?: InputMaybe<WorkersDisconnectInput>;
  where?: InputMaybe<ProjectConsiderationsWorkersConnectionWhere>;
};

export type ProjectConsiderationsWorkersFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsWorkersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsWorkersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsWorkersCreateFieldInput>>;
};

export type ProjectConsiderationsWorkersUpdateConnectionInput = {
  node?: InputMaybe<WorkersUpdateInput>;
};

export type ProjectConsiderationsWorkersUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectConsiderationsWorkersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectConsiderationsWorkersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectConsiderationsWorkersCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectConsiderationsWorkersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectConsiderationsWorkersDisconnectFieldInput>>;
  update?: InputMaybe<ProjectConsiderationsWorkersUpdateConnectionInput>;
  where?: InputMaybe<ProjectConsiderationsWorkersConnectionWhere>;
};

export type ProjectCreateInput = {
  brief: Scalars['String']['input'];
  considerations?: InputMaybe<ProjectConsiderationsCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
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
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectDeleteInput = {
  considerations?: InputMaybe<ProjectConsiderationsDeleteInput>;
  ripples?: InputMaybe<Array<ProjectRipplesDeleteFieldInput>>;
  scopes?: InputMaybe<Array<ProjectScopesDeleteFieldInput>>;
  statuses?: InputMaybe<Array<ProjectStatusesDeleteFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersDeleteFieldInput>>;
};

export type ProjectDisconnectInput = {
  considerations?: InputMaybe<ProjectConsiderationsDisconnectInput>;
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
  brief: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
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
};

export type ProjectRelationInput = {
  considerations?: InputMaybe<ProjectConsiderationsCreateFieldInput>;
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
};

export type ProjectRippleRipplesNodeAggregateSelection = {
  __typename?: 'ProjectRippleRipplesNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
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
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
};

export type ProjectRipplesRelationship = ProjectCreates & {
  __typename?: 'ProjectRipplesRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Ripple;
  reason: Scalars['String']['output'];
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
};

export type ProjectScopeScopesNodeAggregateSelection = {
  __typename?: 'ProjectScopeScopesNodeAggregateSelection';
  basis: StringAggregateSelectionNullable;
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
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
  basis_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  basis_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
};

export type ProjectScopesRelationship = ProjectTouchesScope & {
  __typename?: 'ProjectScopesRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Scope;
  reason: Scalars['String']['output'];
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
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
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
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
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
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  considerations?: InputMaybe<ProjectConsiderationsUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
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
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type ProjectUsersConnectOrCreateFieldInput = {
  onCreate: ProjectUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type ProjectUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type ProjectUsersConnection = {
  __typename?: 'ProjectUsersConnection';
  edges: Array<ProjectUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type ProjectUsersConnectionWhere = {
  AND?: InputMaybe<Array<ProjectUsersConnectionWhere>>;
  NOT?: InputMaybe<ProjectUsersConnectionWhere>;
  OR?: InputMaybe<Array<ProjectUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type ProjectUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
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
};

export type ProjectUsersRelationship = UserInteractsWith & {
  __typename?: 'ProjectUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type ProjectUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
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
  brief?: InputMaybe<Scalars['String']['input']>;
  brief_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  brief_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  brief_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  /** Return Projects where all of the related ProjectConsiderationsConnections match this filter */
  considerationsConnection_ALL?: InputMaybe<ProjectConsiderationsConnectionWhere>;
  /** Return Projects where none of the related ProjectConsiderationsConnections match this filter */
  considerationsConnection_NONE?: InputMaybe<ProjectConsiderationsConnectionWhere>;
  /** Return Projects where one of the related ProjectConsiderationsConnections match this filter */
  considerationsConnection_SINGLE?: InputMaybe<ProjectConsiderationsConnectionWhere>;
  /** Return Projects where some of the related ProjectConsiderationsConnections match this filter */
  considerationsConnection_SOME?: InputMaybe<ProjectConsiderationsConnectionWhere>;
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
  examples: Array<Example>;
  examplesAggregate: ExampleAggregateSelection;
  examplesConnection: ExamplesConnection;
  geographics: Array<Geographic>;
  geographicsAggregate: GeographicAggregateSelection;
  geographicsConnection: GeographicsConnection;
  projectStatuses: Array<ProjectStatus>;
  projectStatusesAggregate: ProjectStatusAggregateSelection;
  projectStatusesConnection: ProjectStatusesConnection;
  projects: Array<Project>;
  projectsAggregate: ProjectAggregateSelection;
  projectsConnection: ProjectsConnection;
  questions: Array<Question>;
  questionsAggregate: QuestionAggregateSelection;
  questionsConnection: QuestionsConnection;
  ripples: Array<Ripple>;
  ripplesAggregate: RippleAggregateSelection;
  ripplesConnection: RipplesConnection;
  scopes: Array<Scope>;
  scopesAggregate: ScopeAggregateSelection;
  scopesConnection: ScopesConnection;
  stakeholders: Array<Stakeholder>;
  stakeholdersAggregate: StakeholderAggregateSelection;
  stakeholdersConnection: StakeholdersConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
  webDumps: Array<WebDump>;
  webDumpsAggregate: WebDumpAggregateSelection;
  webDumpsConnection: WebDumpsConnection;
  workers: Array<Workers>;
  workersAggregate: WorkersAggregateSelection;
  workersConnection: WorkersConnection;
};


export type QueryExamplesArgs = {
  options?: InputMaybe<ExampleOptions>;
  where?: InputMaybe<ExampleWhere>;
};


export type QueryExamplesAggregateArgs = {
  where?: InputMaybe<ExampleWhere>;
};


export type QueryExamplesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ExampleSort>>>;
  where?: InputMaybe<ExampleWhere>;
};


export type QueryGeographicsArgs = {
  options?: InputMaybe<GeographicOptions>;
  where?: InputMaybe<GeographicWhere>;
};


export type QueryGeographicsAggregateArgs = {
  where?: InputMaybe<GeographicWhere>;
};


export type QueryGeographicsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<GeographicSort>>>;
  where?: InputMaybe<GeographicWhere>;
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


export type QueryQuestionsArgs = {
  options?: InputMaybe<QuestionOptions>;
  where?: InputMaybe<QuestionWhere>;
};


export type QueryQuestionsAggregateArgs = {
  where?: InputMaybe<QuestionWhere>;
};


export type QueryQuestionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<QuestionSort>>>;
  where?: InputMaybe<QuestionWhere>;
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


export type QueryStakeholdersArgs = {
  options?: InputMaybe<StakeholderOptions>;
  where?: InputMaybe<StakeholderWhere>;
};


export type QueryStakeholdersAggregateArgs = {
  where?: InputMaybe<StakeholderWhere>;
};


export type QueryStakeholdersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StakeholderSort>>>;
  where?: InputMaybe<StakeholderWhere>;
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


export type QueryWebDumpsArgs = {
  options?: InputMaybe<WebDumpOptions>;
  where?: InputMaybe<WebDumpWhere>;
};


export type QueryWebDumpsAggregateArgs = {
  where?: InputMaybe<WebDumpWhere>;
};


export type QueryWebDumpsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WebDumpSort>>>;
  where?: InputMaybe<WebDumpWhere>;
};


export type QueryWorkersArgs = {
  options?: InputMaybe<WorkersOptions>;
  where?: InputMaybe<WorkersWhere>;
};


export type QueryWorkersAggregateArgs = {
  where?: InputMaybe<WorkersWhere>;
};


export type QueryWorkersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WorkersSort>>>;
  where?: InputMaybe<WorkersWhere>;
};

export type QueryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Question = {
  __typename?: 'Question';
  brief: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  scopes: Array<Scope>;
  scopesAggregate?: Maybe<QuestionScopeScopesAggregationSelection>;
  scopesConnection: QuestionScopesConnection;
  users: Array<User>;
  usersAggregate?: Maybe<QuestionUserUsersAggregationSelection>;
  usersConnection: QuestionUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type QuestionScopesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ScopeOptions>;
  where?: InputMaybe<ScopeWhere>;
};


export type QuestionScopesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ScopeWhere>;
};


export type QuestionScopesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<QuestionScopesConnectionSort>>;
  where?: InputMaybe<QuestionScopesConnectionWhere>;
};


export type QuestionUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QuestionUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type QuestionUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<QuestionUsersConnectionSort>>;
  where?: InputMaybe<QuestionUsersConnectionWhere>;
};

export type QuestionAggregateSelection = {
  __typename?: 'QuestionAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type QuestionConnectInput = {
  scopes?: InputMaybe<Array<QuestionScopesConnectFieldInput>>;
  users?: InputMaybe<Array<QuestionUsersConnectFieldInput>>;
};

export type QuestionConnectOrCreateInput = {
  scopes?: InputMaybe<Array<QuestionScopesConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<QuestionUsersConnectOrCreateFieldInput>>;
};

export type QuestionConnectOrCreateWhere = {
  node: QuestionUniqueWhere;
};

export type QuestionConnectWhere = {
  node: QuestionWhere;
};

export type QuestionCreateInput = {
  brief: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<QuestionScopesFieldInput>;
  users?: InputMaybe<QuestionUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type QuestionDeleteInput = {
  scopes?: InputMaybe<Array<QuestionScopesDeleteFieldInput>>;
  users?: InputMaybe<Array<QuestionUsersDeleteFieldInput>>;
};

export type QuestionDisconnectInput = {
  scopes?: InputMaybe<Array<QuestionScopesDisconnectFieldInput>>;
  users?: InputMaybe<Array<QuestionUsersDisconnectFieldInput>>;
};

export type QuestionEdge = {
  __typename?: 'QuestionEdge';
  cursor: Scalars['String']['output'];
  node: Question;
};

export type QuestionOnCreateInput = {
  brief: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type QuestionOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more QuestionSort objects to sort Questions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<QuestionSort>>;
};

export type QuestionRelationInput = {
  scopes?: InputMaybe<Array<QuestionScopesCreateFieldInput>>;
  users?: InputMaybe<Array<QuestionUsersCreateFieldInput>>;
};

export type QuestionScopeScopesAggregationSelection = {
  __typename?: 'QuestionScopeScopesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<QuestionScopeScopesNodeAggregateSelection>;
};

export type QuestionScopeScopesNodeAggregateSelection = {
  __typename?: 'QuestionScopeScopesNodeAggregateSelection';
  basis: StringAggregateSelectionNullable;
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type QuestionScopesAggregateInput = {
  AND?: InputMaybe<Array<QuestionScopesAggregateInput>>;
  NOT?: InputMaybe<QuestionScopesAggregateInput>;
  OR?: InputMaybe<Array<QuestionScopesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<QuestionScopesNodeAggregationWhereInput>;
};

export type QuestionScopesConnectFieldInput = {
  connect?: InputMaybe<Array<ScopeConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ScopeConnectWhere>;
};

export type QuestionScopesConnectOrCreateFieldInput = {
  onCreate: QuestionScopesConnectOrCreateFieldInputOnCreate;
  where: ScopeConnectOrCreateWhere;
};

export type QuestionScopesConnectOrCreateFieldInputOnCreate = {
  node: ScopeOnCreateInput;
};

export type QuestionScopesConnection = {
  __typename?: 'QuestionScopesConnection';
  edges: Array<QuestionScopesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QuestionScopesConnectionSort = {
  node?: InputMaybe<ScopeSort>;
};

export type QuestionScopesConnectionWhere = {
  AND?: InputMaybe<Array<QuestionScopesConnectionWhere>>;
  NOT?: InputMaybe<QuestionScopesConnectionWhere>;
  OR?: InputMaybe<Array<QuestionScopesConnectionWhere>>;
  node?: InputMaybe<ScopeWhere>;
};

export type QuestionScopesCreateFieldInput = {
  node: ScopeCreateInput;
};

export type QuestionScopesDeleteFieldInput = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<QuestionScopesConnectionWhere>;
};

export type QuestionScopesDisconnectFieldInput = {
  disconnect?: InputMaybe<ScopeDisconnectInput>;
  where?: InputMaybe<QuestionScopesConnectionWhere>;
};

export type QuestionScopesFieldInput = {
  connect?: InputMaybe<Array<QuestionScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<QuestionScopesCreateFieldInput>>;
};

export type QuestionScopesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<QuestionScopesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<QuestionScopesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<QuestionScopesNodeAggregationWhereInput>>;
  basis_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  basis_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
};

export type QuestionScopesRelationship = {
  __typename?: 'QuestionScopesRelationship';
  cursor: Scalars['String']['output'];
  node: Scope;
};

export type QuestionScopesUpdateConnectionInput = {
  node?: InputMaybe<ScopeUpdateInput>;
};

export type QuestionScopesUpdateFieldInput = {
  connect?: InputMaybe<Array<QuestionScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<QuestionScopesCreateFieldInput>>;
  delete?: InputMaybe<Array<QuestionScopesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<QuestionScopesDisconnectFieldInput>>;
  update?: InputMaybe<QuestionScopesUpdateConnectionInput>;
  where?: InputMaybe<QuestionScopesConnectionWhere>;
};

/** Fields to sort Questions by. The order in which sorts are applied is not guaranteed when specifying many fields in one QuestionSort object. */
export type QuestionSort = {
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type QuestionUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QuestionUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Array<QuestionScopesUpdateFieldInput>>;
  users?: InputMaybe<Array<QuestionUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionUserUsersAggregationSelection = {
  __typename?: 'QuestionUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<QuestionUserUsersEdgeAggregateSelection>;
  node?: Maybe<QuestionUserUsersNodeAggregateSelection>;
};

export type QuestionUserUsersEdgeAggregateSelection = {
  __typename?: 'QuestionUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type QuestionUserUsersNodeAggregateSelection = {
  __typename?: 'QuestionUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type QuestionUsersAggregateInput = {
  AND?: InputMaybe<Array<QuestionUsersAggregateInput>>;
  NOT?: InputMaybe<QuestionUsersAggregateInput>;
  OR?: InputMaybe<Array<QuestionUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<QuestionUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<QuestionUsersNodeAggregationWhereInput>;
};

export type QuestionUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type QuestionUsersConnectOrCreateFieldInput = {
  onCreate: QuestionUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type QuestionUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type QuestionUsersConnection = {
  __typename?: 'QuestionUsersConnection';
  edges: Array<QuestionUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QuestionUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type QuestionUsersConnectionWhere = {
  AND?: InputMaybe<Array<QuestionUsersConnectionWhere>>;
  NOT?: InputMaybe<QuestionUsersConnectionWhere>;
  OR?: InputMaybe<Array<QuestionUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type QuestionUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: UserCreateInput;
};

export type QuestionUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<QuestionUsersConnectionWhere>;
};

export type QuestionUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<QuestionUsersConnectionWhere>;
};

export type QuestionUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<QuestionUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<QuestionUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<QuestionUsersEdgeAggregationWhereInput>>;
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

export type QuestionUsersFieldInput = {
  connect?: InputMaybe<Array<QuestionUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<QuestionUsersCreateFieldInput>>;
};

export type QuestionUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<QuestionUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<QuestionUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<QuestionUsersNodeAggregationWhereInput>>;
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
};

export type QuestionUsersRelationship = UserInteractsWith & {
  __typename?: 'QuestionUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type QuestionUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type QuestionUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<QuestionUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<QuestionUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<QuestionUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<QuestionUsersDisconnectFieldInput>>;
  update?: InputMaybe<QuestionUsersUpdateConnectionInput>;
  where?: InputMaybe<QuestionUsersConnectionWhere>;
};

export type QuestionWhere = {
  AND?: InputMaybe<Array<QuestionWhere>>;
  NOT?: InputMaybe<QuestionWhere>;
  OR?: InputMaybe<Array<QuestionWhere>>;
  brief?: InputMaybe<Scalars['String']['input']>;
  brief_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  brief_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  brief_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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
  scopesAggregate?: InputMaybe<QuestionScopesAggregateInput>;
  /** Return Questions where all of the related QuestionScopesConnections match this filter */
  scopesConnection_ALL?: InputMaybe<QuestionScopesConnectionWhere>;
  /** Return Questions where none of the related QuestionScopesConnections match this filter */
  scopesConnection_NONE?: InputMaybe<QuestionScopesConnectionWhere>;
  /** Return Questions where one of the related QuestionScopesConnections match this filter */
  scopesConnection_SINGLE?: InputMaybe<QuestionScopesConnectionWhere>;
  /** Return Questions where some of the related QuestionScopesConnections match this filter */
  scopesConnection_SOME?: InputMaybe<QuestionScopesConnectionWhere>;
  /** Return Questions where all of the related Scopes match this filter */
  scopes_ALL?: InputMaybe<ScopeWhere>;
  /** Return Questions where none of the related Scopes match this filter */
  scopes_NONE?: InputMaybe<ScopeWhere>;
  /** Return Questions where one of the related Scopes match this filter */
  scopes_SINGLE?: InputMaybe<ScopeWhere>;
  /** Return Questions where some of the related Scopes match this filter */
  scopes_SOME?: InputMaybe<ScopeWhere>;
  usersAggregate?: InputMaybe<QuestionUsersAggregateInput>;
  /** Return Questions where all of the related QuestionUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<QuestionUsersConnectionWhere>;
  /** Return Questions where none of the related QuestionUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<QuestionUsersConnectionWhere>;
  /** Return Questions where one of the related QuestionUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<QuestionUsersConnectionWhere>;
  /** Return Questions where some of the related QuestionUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<QuestionUsersConnectionWhere>;
  /** Return Questions where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Questions where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Questions where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Questions where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionsConnection = {
  __typename?: 'QuestionsConnection';
  edges: Array<QuestionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Ripple = {
  __typename?: 'Ripple';
  brief: Scalars['String']['output'];
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
  brief: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
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
  brief: Scalars['String']['input'];
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
  sentiment: RipplesSentiment;
  verified: Scalars['Boolean']['output'];
};

export type RippleInCreateInput = {
  magnitude: Scalars['Float']['input'];
  sentiment: RipplesSentiment;
  verified?: Scalars['Boolean']['input'];
};

export type RippleInSort = {
  createdAt?: InputMaybe<SortDirection>;
  magnitude?: InputMaybe<SortDirection>;
  sentiment?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type RippleInUpdateInput = {
  magnitude?: InputMaybe<Scalars['Float']['input']>;
  magnitude_ADD?: InputMaybe<Scalars['Float']['input']>;
  magnitude_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  magnitude_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  magnitude_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  sentiment?: InputMaybe<RipplesSentiment>;
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
  sentiment?: InputMaybe<RipplesSentiment>;
  sentiment_IN?: InputMaybe<Array<RipplesSentiment>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RippleOnCreateInput = {
  brief: Scalars['String']['input'];
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
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
};

export type RippleProjectProjectNodeAggregateSelection = {
  __typename?: 'RippleProjectProjectNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
};

export type RippleProjectRelationship = ProjectCreates & {
  __typename?: 'RippleProjectRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Project;
  reason: Scalars['String']['output'];
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
};

export type RippleScopeScopesNodeAggregateSelection = {
  __typename?: 'RippleScopeScopesNodeAggregateSelection';
  basis: StringAggregateSelectionNullable;
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
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
  basis_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  basis_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
};

export type RippleScopesRelationship = RippleIn & {
  __typename?: 'RippleScopesRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  magnitude: Scalars['Float']['output'];
  node: Scope;
  sentiment: RipplesSentiment;
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
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type RippleUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RippleUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
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
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type RippleUsersConnectOrCreateFieldInput = {
  onCreate: RippleUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type RippleUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type RippleUsersConnection = {
  __typename?: 'RippleUsersConnection';
  edges: Array<RippleUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RippleUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type RippleUsersConnectionWhere = {
  AND?: InputMaybe<Array<RippleUsersConnectionWhere>>;
  NOT?: InputMaybe<RippleUsersConnectionWhere>;
  OR?: InputMaybe<Array<RippleUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type RippleUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
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
};

export type RippleUsersRelationship = UserInteractsWith & {
  __typename?: 'RippleUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type RippleUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
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
  brief?: InputMaybe<Scalars['String']['input']>;
  brief_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  brief_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  brief_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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

export enum RipplesSentiment {
  Negative = 'NEGATIVE',
  Positive = 'POSITIVE'
}

export type Scope = {
  __typename?: 'Scope';
  basis?: Maybe<Scalars['String']['output']>;
  brief: Scalars['String']['output'];
  considerations: Array<ScopeConsideration>;
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
  users: Array<User>;
  usersAggregate?: Maybe<ScopeUserUsersAggregationSelection>;
  usersConnection: ScopeUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type ScopeConsiderationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ScopeConsiderationWhere>;
};


export type ScopeConsiderationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
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


export type ScopeUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type ScopeUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type ScopeUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ScopeUsersConnectionSort>>;
  where?: InputMaybe<ScopeUsersConnectionWhere>;
};

export type ScopeAggregateSelection = {
  __typename?: 'ScopeAggregateSelection';
  basis: StringAggregateSelectionNullable;
  brief: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ScopeConnectInput = {
  considerations?: InputMaybe<ScopeConsiderationsConnectInput>;
  projects?: InputMaybe<Array<ScopeProjectsConnectFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesConnectFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesConnectFieldInput>>;
  users?: InputMaybe<Array<ScopeUsersConnectFieldInput>>;
};

export type ScopeConnectOrCreateInput = {
  considerations?: InputMaybe<ScopeConsiderationsConnectOrCreateInput>;
  projects?: InputMaybe<Array<ScopeProjectsConnectOrCreateFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesConnectOrCreateFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<ScopeUsersConnectOrCreateFieldInput>>;
};

export type ScopeConnectOrCreateWhere = {
  node: ScopeUniqueWhere;
};

export type ScopeConnectWhere = {
  node: ScopeWhere;
};

export type ScopeConsideration = Example | Question | Stakeholder;

export type ScopeConsiderationWhere = {
  Example?: InputMaybe<ExampleWhere>;
  Question?: InputMaybe<QuestionWhere>;
  Stakeholder?: InputMaybe<StakeholderWhere>;
};

export type ScopeConsiderationsConnectInput = {
  Example?: InputMaybe<Array<ScopeConsiderationsExampleConnectFieldInput>>;
  Question?: InputMaybe<Array<ScopeConsiderationsQuestionConnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<ScopeConsiderationsStakeholderConnectFieldInput>>;
};

export type ScopeConsiderationsConnectOrCreateInput = {
  Example?: InputMaybe<Array<ScopeConsiderationsExampleConnectOrCreateFieldInput>>;
  Question?: InputMaybe<Array<ScopeConsiderationsQuestionConnectOrCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<ScopeConsiderationsStakeholderConnectOrCreateFieldInput>>;
};

export type ScopeConsiderationsConnection = {
  __typename?: 'ScopeConsiderationsConnection';
  edges: Array<ScopeConsiderationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScopeConsiderationsConnectionWhere = {
  Example?: InputMaybe<ScopeConsiderationsExampleConnectionWhere>;
  Question?: InputMaybe<ScopeConsiderationsQuestionConnectionWhere>;
  Stakeholder?: InputMaybe<ScopeConsiderationsStakeholderConnectionWhere>;
};

export type ScopeConsiderationsCreateFieldInput = {
  Example?: InputMaybe<Array<ScopeConsiderationsExampleCreateFieldInput>>;
  Question?: InputMaybe<Array<ScopeConsiderationsQuestionCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<ScopeConsiderationsStakeholderCreateFieldInput>>;
};

export type ScopeConsiderationsCreateInput = {
  Example?: InputMaybe<ScopeConsiderationsExampleFieldInput>;
  Question?: InputMaybe<ScopeConsiderationsQuestionFieldInput>;
  Stakeholder?: InputMaybe<ScopeConsiderationsStakeholderFieldInput>;
};

export type ScopeConsiderationsDeleteInput = {
  Example?: InputMaybe<Array<ScopeConsiderationsExampleDeleteFieldInput>>;
  Question?: InputMaybe<Array<ScopeConsiderationsQuestionDeleteFieldInput>>;
  Stakeholder?: InputMaybe<Array<ScopeConsiderationsStakeholderDeleteFieldInput>>;
};

export type ScopeConsiderationsDisconnectInput = {
  Example?: InputMaybe<Array<ScopeConsiderationsExampleDisconnectFieldInput>>;
  Question?: InputMaybe<Array<ScopeConsiderationsQuestionDisconnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<ScopeConsiderationsStakeholderDisconnectFieldInput>>;
};

export type ScopeConsiderationsExampleConnectFieldInput = {
  connect?: InputMaybe<Array<ExampleConnectInput>>;
  where?: InputMaybe<ExampleConnectWhere>;
};

export type ScopeConsiderationsExampleConnectOrCreateFieldInput = {
  onCreate: ScopeConsiderationsExampleConnectOrCreateFieldInputOnCreate;
  where: ExampleConnectOrCreateWhere;
};

export type ScopeConsiderationsExampleConnectOrCreateFieldInputOnCreate = {
  node: ExampleOnCreateInput;
};

export type ScopeConsiderationsExampleConnectionWhere = {
  AND?: InputMaybe<Array<ScopeConsiderationsExampleConnectionWhere>>;
  NOT?: InputMaybe<ScopeConsiderationsExampleConnectionWhere>;
  OR?: InputMaybe<Array<ScopeConsiderationsExampleConnectionWhere>>;
  node?: InputMaybe<ExampleWhere>;
};

export type ScopeConsiderationsExampleCreateFieldInput = {
  node: ExampleCreateInput;
};

export type ScopeConsiderationsExampleDeleteFieldInput = {
  delete?: InputMaybe<ExampleDeleteInput>;
  where?: InputMaybe<ScopeConsiderationsExampleConnectionWhere>;
};

export type ScopeConsiderationsExampleDisconnectFieldInput = {
  disconnect?: InputMaybe<ExampleDisconnectInput>;
  where?: InputMaybe<ScopeConsiderationsExampleConnectionWhere>;
};

export type ScopeConsiderationsExampleFieldInput = {
  connect?: InputMaybe<Array<ScopeConsiderationsExampleConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeConsiderationsExampleConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeConsiderationsExampleCreateFieldInput>>;
};

export type ScopeConsiderationsExampleUpdateConnectionInput = {
  node?: InputMaybe<ExampleUpdateInput>;
};

export type ScopeConsiderationsExampleUpdateFieldInput = {
  connect?: InputMaybe<Array<ScopeConsiderationsExampleConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeConsiderationsExampleConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeConsiderationsExampleCreateFieldInput>>;
  delete?: InputMaybe<Array<ScopeConsiderationsExampleDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ScopeConsiderationsExampleDisconnectFieldInput>>;
  update?: InputMaybe<ScopeConsiderationsExampleUpdateConnectionInput>;
  where?: InputMaybe<ScopeConsiderationsExampleConnectionWhere>;
};

export type ScopeConsiderationsQuestionConnectFieldInput = {
  connect?: InputMaybe<Array<QuestionConnectInput>>;
  where?: InputMaybe<QuestionConnectWhere>;
};

export type ScopeConsiderationsQuestionConnectOrCreateFieldInput = {
  onCreate: ScopeConsiderationsQuestionConnectOrCreateFieldInputOnCreate;
  where: QuestionConnectOrCreateWhere;
};

export type ScopeConsiderationsQuestionConnectOrCreateFieldInputOnCreate = {
  node: QuestionOnCreateInput;
};

export type ScopeConsiderationsQuestionConnectionWhere = {
  AND?: InputMaybe<Array<ScopeConsiderationsQuestionConnectionWhere>>;
  NOT?: InputMaybe<ScopeConsiderationsQuestionConnectionWhere>;
  OR?: InputMaybe<Array<ScopeConsiderationsQuestionConnectionWhere>>;
  node?: InputMaybe<QuestionWhere>;
};

export type ScopeConsiderationsQuestionCreateFieldInput = {
  node: QuestionCreateInput;
};

export type ScopeConsiderationsQuestionDeleteFieldInput = {
  delete?: InputMaybe<QuestionDeleteInput>;
  where?: InputMaybe<ScopeConsiderationsQuestionConnectionWhere>;
};

export type ScopeConsiderationsQuestionDisconnectFieldInput = {
  disconnect?: InputMaybe<QuestionDisconnectInput>;
  where?: InputMaybe<ScopeConsiderationsQuestionConnectionWhere>;
};

export type ScopeConsiderationsQuestionFieldInput = {
  connect?: InputMaybe<Array<ScopeConsiderationsQuestionConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeConsiderationsQuestionConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeConsiderationsQuestionCreateFieldInput>>;
};

export type ScopeConsiderationsQuestionUpdateConnectionInput = {
  node?: InputMaybe<QuestionUpdateInput>;
};

export type ScopeConsiderationsQuestionUpdateFieldInput = {
  connect?: InputMaybe<Array<ScopeConsiderationsQuestionConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeConsiderationsQuestionConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeConsiderationsQuestionCreateFieldInput>>;
  delete?: InputMaybe<Array<ScopeConsiderationsQuestionDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ScopeConsiderationsQuestionDisconnectFieldInput>>;
  update?: InputMaybe<ScopeConsiderationsQuestionUpdateConnectionInput>;
  where?: InputMaybe<ScopeConsiderationsQuestionConnectionWhere>;
};

export type ScopeConsiderationsRelationship = {
  __typename?: 'ScopeConsiderationsRelationship';
  cursor: Scalars['String']['output'];
  node: ScopeConsideration;
};

export type ScopeConsiderationsStakeholderConnectFieldInput = {
  connect?: InputMaybe<Array<StakeholderConnectInput>>;
  where?: InputMaybe<StakeholderConnectWhere>;
};

export type ScopeConsiderationsStakeholderConnectOrCreateFieldInput = {
  onCreate: ScopeConsiderationsStakeholderConnectOrCreateFieldInputOnCreate;
  where: StakeholderConnectOrCreateWhere;
};

export type ScopeConsiderationsStakeholderConnectOrCreateFieldInputOnCreate = {
  node: StakeholderOnCreateInput;
};

export type ScopeConsiderationsStakeholderConnectionWhere = {
  AND?: InputMaybe<Array<ScopeConsiderationsStakeholderConnectionWhere>>;
  NOT?: InputMaybe<ScopeConsiderationsStakeholderConnectionWhere>;
  OR?: InputMaybe<Array<ScopeConsiderationsStakeholderConnectionWhere>>;
  node?: InputMaybe<StakeholderWhere>;
};

export type ScopeConsiderationsStakeholderCreateFieldInput = {
  node: StakeholderCreateInput;
};

export type ScopeConsiderationsStakeholderDeleteFieldInput = {
  delete?: InputMaybe<StakeholderDeleteInput>;
  where?: InputMaybe<ScopeConsiderationsStakeholderConnectionWhere>;
};

export type ScopeConsiderationsStakeholderDisconnectFieldInput = {
  disconnect?: InputMaybe<StakeholderDisconnectInput>;
  where?: InputMaybe<ScopeConsiderationsStakeholderConnectionWhere>;
};

export type ScopeConsiderationsStakeholderFieldInput = {
  connect?: InputMaybe<Array<ScopeConsiderationsStakeholderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeConsiderationsStakeholderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeConsiderationsStakeholderCreateFieldInput>>;
};

export type ScopeConsiderationsStakeholderUpdateConnectionInput = {
  node?: InputMaybe<StakeholderUpdateInput>;
};

export type ScopeConsiderationsStakeholderUpdateFieldInput = {
  connect?: InputMaybe<Array<ScopeConsiderationsStakeholderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeConsiderationsStakeholderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeConsiderationsStakeholderCreateFieldInput>>;
  delete?: InputMaybe<Array<ScopeConsiderationsStakeholderDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ScopeConsiderationsStakeholderDisconnectFieldInput>>;
  update?: InputMaybe<ScopeConsiderationsStakeholderUpdateConnectionInput>;
  where?: InputMaybe<ScopeConsiderationsStakeholderConnectionWhere>;
};

export type ScopeConsiderationsUpdateInput = {
  Example?: InputMaybe<Array<ScopeConsiderationsExampleUpdateFieldInput>>;
  Question?: InputMaybe<Array<ScopeConsiderationsQuestionUpdateFieldInput>>;
  Stakeholder?: InputMaybe<Array<ScopeConsiderationsStakeholderUpdateFieldInput>>;
};

export type ScopeCreateInput = {
  basis?: InputMaybe<Scalars['String']['input']>;
  brief: Scalars['String']['input'];
  considerations?: InputMaybe<ScopeConsiderationsCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<ScopeProjectsFieldInput>;
  ripples?: InputMaybe<ScopeRipplesFieldInput>;
  scopes?: InputMaybe<ScopeScopesFieldInput>;
  users?: InputMaybe<ScopeUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type ScopeDeleteInput = {
  considerations?: InputMaybe<ScopeConsiderationsDeleteInput>;
  projects?: InputMaybe<Array<ScopeProjectsDeleteFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesDeleteFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesDeleteFieldInput>>;
  users?: InputMaybe<Array<ScopeUsersDeleteFieldInput>>;
};

export type ScopeDisconnectInput = {
  considerations?: InputMaybe<ScopeConsiderationsDisconnectInput>;
  projects?: InputMaybe<Array<ScopeProjectsDisconnectFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesDisconnectFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesDisconnectFieldInput>>;
  users?: InputMaybe<Array<ScopeUsersDisconnectFieldInput>>;
};

export type ScopeEdge = {
  __typename?: 'ScopeEdge';
  cursor: Scalars['String']['output'];
  node: Scope;
};

export type ScopeOnCreateInput = {
  basis?: InputMaybe<Scalars['String']['input']>;
  brief: Scalars['String']['input'];
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
};

export type ScopeProjectProjectsNodeAggregateSelection = {
  __typename?: 'ScopeProjectProjectsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
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
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  considerations?: InputMaybe<ScopeConsiderationsCreateFieldInput>;
  projects?: InputMaybe<Array<ScopeProjectsCreateFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesCreateFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesCreateFieldInput>>;
  users?: InputMaybe<Array<ScopeUsersCreateFieldInput>>;
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
};

export type ScopeRippleRipplesNodeAggregateSelection = {
  __typename?: 'ScopeRippleRipplesNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
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
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
};

export type ScopeRipplesRelationship = RippleIn & {
  __typename?: 'ScopeRipplesRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  magnitude: Scalars['Float']['output'];
  node: Ripple;
  sentiment: RipplesSentiment;
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
  basis: StringAggregateSelectionNullable;
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
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
  basis_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  basis_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  basis?: InputMaybe<SortDirection>;
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type ScopeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ScopeUpdateInput = {
  basis?: InputMaybe<Scalars['String']['input']>;
  brief?: InputMaybe<Scalars['String']['input']>;
  considerations?: InputMaybe<ScopeConsiderationsUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<ScopeProjectsUpdateFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesUpdateFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesUpdateFieldInput>>;
  users?: InputMaybe<Array<ScopeUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScopeUserUsersAggregationSelection = {
  __typename?: 'ScopeUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ScopeUserUsersEdgeAggregateSelection>;
  node?: Maybe<ScopeUserUsersNodeAggregateSelection>;
};

export type ScopeUserUsersEdgeAggregateSelection = {
  __typename?: 'ScopeUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type ScopeUserUsersNodeAggregateSelection = {
  __typename?: 'ScopeUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type ScopeUsersAggregateInput = {
  AND?: InputMaybe<Array<ScopeUsersAggregateInput>>;
  NOT?: InputMaybe<ScopeUsersAggregateInput>;
  OR?: InputMaybe<Array<ScopeUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ScopeUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<ScopeUsersNodeAggregationWhereInput>;
};

export type ScopeUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type ScopeUsersConnectOrCreateFieldInput = {
  onCreate: ScopeUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type ScopeUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type ScopeUsersConnection = {
  __typename?: 'ScopeUsersConnection';
  edges: Array<ScopeUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScopeUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type ScopeUsersConnectionWhere = {
  AND?: InputMaybe<Array<ScopeUsersConnectionWhere>>;
  NOT?: InputMaybe<ScopeUsersConnectionWhere>;
  OR?: InputMaybe<Array<ScopeUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type ScopeUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: UserCreateInput;
};

export type ScopeUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<ScopeUsersConnectionWhere>;
};

export type ScopeUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<ScopeUsersConnectionWhere>;
};

export type ScopeUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeUsersEdgeAggregationWhereInput>>;
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

export type ScopeUsersFieldInput = {
  connect?: InputMaybe<Array<ScopeUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeUsersCreateFieldInput>>;
};

export type ScopeUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeUsersNodeAggregationWhereInput>>;
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
};

export type ScopeUsersRelationship = UserInteractsWith & {
  __typename?: 'ScopeUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type ScopeUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type ScopeUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<ScopeUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<ScopeUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ScopeUsersDisconnectFieldInput>>;
  update?: InputMaybe<ScopeUsersUpdateConnectionInput>;
  where?: InputMaybe<ScopeUsersConnectionWhere>;
};

export type ScopeWhere = {
  AND?: InputMaybe<Array<ScopeWhere>>;
  NOT?: InputMaybe<ScopeWhere>;
  OR?: InputMaybe<Array<ScopeWhere>>;
  basis?: InputMaybe<Scalars['String']['input']>;
  basis_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  basis_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  basis_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  basis_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief?: InputMaybe<Scalars['String']['input']>;
  brief_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  brief_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  brief_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  /** Return Scopes where all of the related ScopeConsiderationsConnections match this filter */
  considerationsConnection_ALL?: InputMaybe<ScopeConsiderationsConnectionWhere>;
  /** Return Scopes where none of the related ScopeConsiderationsConnections match this filter */
  considerationsConnection_NONE?: InputMaybe<ScopeConsiderationsConnectionWhere>;
  /** Return Scopes where one of the related ScopeConsiderationsConnections match this filter */
  considerationsConnection_SINGLE?: InputMaybe<ScopeConsiderationsConnectionWhere>;
  /** Return Scopes where some of the related ScopeConsiderationsConnections match this filter */
  considerationsConnection_SOME?: InputMaybe<ScopeConsiderationsConnectionWhere>;
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
  usersAggregate?: InputMaybe<ScopeUsersAggregateInput>;
  /** Return Scopes where all of the related ScopeUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<ScopeUsersConnectionWhere>;
  /** Return Scopes where none of the related ScopeUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<ScopeUsersConnectionWhere>;
  /** Return Scopes where one of the related ScopeUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<ScopeUsersConnectionWhere>;
  /** Return Scopes where some of the related ScopeUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<ScopeUsersConnectionWhere>;
  /** Return Scopes where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Scopes where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Scopes where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Scopes where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
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

export type Stakeholder = {
  __typename?: 'Stakeholder';
  brief: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<StakeholderProjectProjectsAggregationSelection>;
  projectsConnection: StakeholderProjectsConnection;
  scopes: Array<Scope>;
  scopesAggregate?: Maybe<StakeholderScopeScopesAggregationSelection>;
  scopesConnection: StakeholderScopesConnection;
  users: Array<User>;
  usersAggregate?: Maybe<StakeholderUserUsersAggregationSelection>;
  usersConnection: StakeholderUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type StakeholderProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type StakeholderProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type StakeholderProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StakeholderProjectsConnectionSort>>;
  where?: InputMaybe<StakeholderProjectsConnectionWhere>;
};


export type StakeholderScopesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ScopeOptions>;
  where?: InputMaybe<ScopeWhere>;
};


export type StakeholderScopesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ScopeWhere>;
};


export type StakeholderScopesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StakeholderScopesConnectionSort>>;
  where?: InputMaybe<StakeholderScopesConnectionWhere>;
};


export type StakeholderUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type StakeholderUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type StakeholderUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StakeholderUsersConnectionSort>>;
  where?: InputMaybe<StakeholderUsersConnectionWhere>;
};

export type StakeholderAggregateSelection = {
  __typename?: 'StakeholderAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type StakeholderConnectInput = {
  projects?: InputMaybe<Array<StakeholderProjectsConnectFieldInput>>;
  scopes?: InputMaybe<Array<StakeholderScopesConnectFieldInput>>;
  users?: InputMaybe<Array<StakeholderUsersConnectFieldInput>>;
};

export type StakeholderConnectOrCreateInput = {
  projects?: InputMaybe<Array<StakeholderProjectsConnectOrCreateFieldInput>>;
  scopes?: InputMaybe<Array<StakeholderScopesConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<StakeholderUsersConnectOrCreateFieldInput>>;
};

export type StakeholderConnectOrCreateWhere = {
  node: StakeholderUniqueWhere;
};

export type StakeholderConnectWhere = {
  node: StakeholderWhere;
};

export type StakeholderCreateInput = {
  brief: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<StakeholderProjectsFieldInput>;
  scopes?: InputMaybe<StakeholderScopesFieldInput>;
  users?: InputMaybe<StakeholderUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type StakeholderDeleteInput = {
  projects?: InputMaybe<Array<StakeholderProjectsDeleteFieldInput>>;
  scopes?: InputMaybe<Array<StakeholderScopesDeleteFieldInput>>;
  users?: InputMaybe<Array<StakeholderUsersDeleteFieldInput>>;
};

export type StakeholderDisconnectInput = {
  projects?: InputMaybe<Array<StakeholderProjectsDisconnectFieldInput>>;
  scopes?: InputMaybe<Array<StakeholderScopesDisconnectFieldInput>>;
  users?: InputMaybe<Array<StakeholderUsersDisconnectFieldInput>>;
};

export type StakeholderEdge = {
  __typename?: 'StakeholderEdge';
  cursor: Scalars['String']['output'];
  node: Stakeholder;
};

export type StakeholderOnCreateInput = {
  brief: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type StakeholderOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more StakeholderSort objects to sort Stakeholders by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StakeholderSort>>;
};

export type StakeholderProjectProjectsAggregationSelection = {
  __typename?: 'StakeholderProjectProjectsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StakeholderProjectProjectsNodeAggregateSelection>;
};

export type StakeholderProjectProjectsNodeAggregateSelection = {
  __typename?: 'StakeholderProjectProjectsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
};

export type StakeholderProjectsAggregateInput = {
  AND?: InputMaybe<Array<StakeholderProjectsAggregateInput>>;
  NOT?: InputMaybe<StakeholderProjectsAggregateInput>;
  OR?: InputMaybe<Array<StakeholderProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StakeholderProjectsNodeAggregationWhereInput>;
};

export type StakeholderProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type StakeholderProjectsConnectOrCreateFieldInput = {
  onCreate: StakeholderProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type StakeholderProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type StakeholderProjectsConnection = {
  __typename?: 'StakeholderProjectsConnection';
  edges: Array<StakeholderProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StakeholderProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type StakeholderProjectsConnectionWhere = {
  AND?: InputMaybe<Array<StakeholderProjectsConnectionWhere>>;
  NOT?: InputMaybe<StakeholderProjectsConnectionWhere>;
  OR?: InputMaybe<Array<StakeholderProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type StakeholderProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type StakeholderProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<StakeholderProjectsConnectionWhere>;
};

export type StakeholderProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<StakeholderProjectsConnectionWhere>;
};

export type StakeholderProjectsFieldInput = {
  connect?: InputMaybe<Array<StakeholderProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StakeholderProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StakeholderProjectsCreateFieldInput>>;
};

export type StakeholderProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StakeholderProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StakeholderProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StakeholderProjectsNodeAggregationWhereInput>>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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

export type StakeholderProjectsRelationship = {
  __typename?: 'StakeholderProjectsRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type StakeholderProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type StakeholderProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<StakeholderProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StakeholderProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StakeholderProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<StakeholderProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StakeholderProjectsDisconnectFieldInput>>;
  update?: InputMaybe<StakeholderProjectsUpdateConnectionInput>;
  where?: InputMaybe<StakeholderProjectsConnectionWhere>;
};

export type StakeholderRelationInput = {
  projects?: InputMaybe<Array<StakeholderProjectsCreateFieldInput>>;
  scopes?: InputMaybe<Array<StakeholderScopesCreateFieldInput>>;
  users?: InputMaybe<Array<StakeholderUsersCreateFieldInput>>;
};

export type StakeholderScopeScopesAggregationSelection = {
  __typename?: 'StakeholderScopeScopesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StakeholderScopeScopesNodeAggregateSelection>;
};

export type StakeholderScopeScopesNodeAggregateSelection = {
  __typename?: 'StakeholderScopeScopesNodeAggregateSelection';
  basis: StringAggregateSelectionNullable;
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type StakeholderScopesAggregateInput = {
  AND?: InputMaybe<Array<StakeholderScopesAggregateInput>>;
  NOT?: InputMaybe<StakeholderScopesAggregateInput>;
  OR?: InputMaybe<Array<StakeholderScopesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StakeholderScopesNodeAggregationWhereInput>;
};

export type StakeholderScopesConnectFieldInput = {
  connect?: InputMaybe<Array<ScopeConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ScopeConnectWhere>;
};

export type StakeholderScopesConnectOrCreateFieldInput = {
  onCreate: StakeholderScopesConnectOrCreateFieldInputOnCreate;
  where: ScopeConnectOrCreateWhere;
};

export type StakeholderScopesConnectOrCreateFieldInputOnCreate = {
  node: ScopeOnCreateInput;
};

export type StakeholderScopesConnection = {
  __typename?: 'StakeholderScopesConnection';
  edges: Array<StakeholderScopesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StakeholderScopesConnectionSort = {
  node?: InputMaybe<ScopeSort>;
};

export type StakeholderScopesConnectionWhere = {
  AND?: InputMaybe<Array<StakeholderScopesConnectionWhere>>;
  NOT?: InputMaybe<StakeholderScopesConnectionWhere>;
  OR?: InputMaybe<Array<StakeholderScopesConnectionWhere>>;
  node?: InputMaybe<ScopeWhere>;
};

export type StakeholderScopesCreateFieldInput = {
  node: ScopeCreateInput;
};

export type StakeholderScopesDeleteFieldInput = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<StakeholderScopesConnectionWhere>;
};

export type StakeholderScopesDisconnectFieldInput = {
  disconnect?: InputMaybe<ScopeDisconnectInput>;
  where?: InputMaybe<StakeholderScopesConnectionWhere>;
};

export type StakeholderScopesFieldInput = {
  connect?: InputMaybe<Array<StakeholderScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StakeholderScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StakeholderScopesCreateFieldInput>>;
};

export type StakeholderScopesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StakeholderScopesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StakeholderScopesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StakeholderScopesNodeAggregationWhereInput>>;
  basis_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  basis_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  basis_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  basis_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
};

export type StakeholderScopesRelationship = {
  __typename?: 'StakeholderScopesRelationship';
  cursor: Scalars['String']['output'];
  node: Scope;
};

export type StakeholderScopesUpdateConnectionInput = {
  node?: InputMaybe<ScopeUpdateInput>;
};

export type StakeholderScopesUpdateFieldInput = {
  connect?: InputMaybe<Array<StakeholderScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StakeholderScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StakeholderScopesCreateFieldInput>>;
  delete?: InputMaybe<Array<StakeholderScopesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StakeholderScopesDisconnectFieldInput>>;
  update?: InputMaybe<StakeholderScopesUpdateConnectionInput>;
  where?: InputMaybe<StakeholderScopesConnectionWhere>;
};

/** Fields to sort Stakeholders by. The order in which sorts are applied is not guaranteed when specifying many fields in one StakeholderSort object. */
export type StakeholderSort = {
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type StakeholderUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StakeholderUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<StakeholderProjectsUpdateFieldInput>>;
  scopes?: InputMaybe<Array<StakeholderScopesUpdateFieldInput>>;
  users?: InputMaybe<Array<StakeholderUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StakeholderUserUsersAggregationSelection = {
  __typename?: 'StakeholderUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<StakeholderUserUsersEdgeAggregateSelection>;
  node?: Maybe<StakeholderUserUsersNodeAggregateSelection>;
};

export type StakeholderUserUsersEdgeAggregateSelection = {
  __typename?: 'StakeholderUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type StakeholderUserUsersNodeAggregateSelection = {
  __typename?: 'StakeholderUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type StakeholderUsersAggregateInput = {
  AND?: InputMaybe<Array<StakeholderUsersAggregateInput>>;
  NOT?: InputMaybe<StakeholderUsersAggregateInput>;
  OR?: InputMaybe<Array<StakeholderUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<StakeholderUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<StakeholderUsersNodeAggregationWhereInput>;
};

export type StakeholderUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type StakeholderUsersConnectOrCreateFieldInput = {
  onCreate: StakeholderUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type StakeholderUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type StakeholderUsersConnection = {
  __typename?: 'StakeholderUsersConnection';
  edges: Array<StakeholderUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StakeholderUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type StakeholderUsersConnectionWhere = {
  AND?: InputMaybe<Array<StakeholderUsersConnectionWhere>>;
  NOT?: InputMaybe<StakeholderUsersConnectionWhere>;
  OR?: InputMaybe<Array<StakeholderUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type StakeholderUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: UserCreateInput;
};

export type StakeholderUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<StakeholderUsersConnectionWhere>;
};

export type StakeholderUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<StakeholderUsersConnectionWhere>;
};

export type StakeholderUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<StakeholderUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<StakeholderUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<StakeholderUsersEdgeAggregationWhereInput>>;
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

export type StakeholderUsersFieldInput = {
  connect?: InputMaybe<Array<StakeholderUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StakeholderUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StakeholderUsersCreateFieldInput>>;
};

export type StakeholderUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StakeholderUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StakeholderUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StakeholderUsersNodeAggregationWhereInput>>;
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
};

export type StakeholderUsersRelationship = UserInteractsWith & {
  __typename?: 'StakeholderUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type StakeholderUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type StakeholderUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<StakeholderUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StakeholderUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StakeholderUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<StakeholderUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StakeholderUsersDisconnectFieldInput>>;
  update?: InputMaybe<StakeholderUsersUpdateConnectionInput>;
  where?: InputMaybe<StakeholderUsersConnectionWhere>;
};

export type StakeholderWhere = {
  AND?: InputMaybe<Array<StakeholderWhere>>;
  NOT?: InputMaybe<StakeholderWhere>;
  OR?: InputMaybe<Array<StakeholderWhere>>;
  brief?: InputMaybe<Scalars['String']['input']>;
  brief_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  brief_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  brief_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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
  projectsAggregate?: InputMaybe<StakeholderProjectsAggregateInput>;
  /** Return Stakeholders where all of the related StakeholderProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<StakeholderProjectsConnectionWhere>;
  /** Return Stakeholders where none of the related StakeholderProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<StakeholderProjectsConnectionWhere>;
  /** Return Stakeholders where one of the related StakeholderProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<StakeholderProjectsConnectionWhere>;
  /** Return Stakeholders where some of the related StakeholderProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<StakeholderProjectsConnectionWhere>;
  /** Return Stakeholders where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Stakeholders where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Stakeholders where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Stakeholders where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  scopesAggregate?: InputMaybe<StakeholderScopesAggregateInput>;
  /** Return Stakeholders where all of the related StakeholderScopesConnections match this filter */
  scopesConnection_ALL?: InputMaybe<StakeholderScopesConnectionWhere>;
  /** Return Stakeholders where none of the related StakeholderScopesConnections match this filter */
  scopesConnection_NONE?: InputMaybe<StakeholderScopesConnectionWhere>;
  /** Return Stakeholders where one of the related StakeholderScopesConnections match this filter */
  scopesConnection_SINGLE?: InputMaybe<StakeholderScopesConnectionWhere>;
  /** Return Stakeholders where some of the related StakeholderScopesConnections match this filter */
  scopesConnection_SOME?: InputMaybe<StakeholderScopesConnectionWhere>;
  /** Return Stakeholders where all of the related Scopes match this filter */
  scopes_ALL?: InputMaybe<ScopeWhere>;
  /** Return Stakeholders where none of the related Scopes match this filter */
  scopes_NONE?: InputMaybe<ScopeWhere>;
  /** Return Stakeholders where one of the related Scopes match this filter */
  scopes_SINGLE?: InputMaybe<ScopeWhere>;
  /** Return Stakeholders where some of the related Scopes match this filter */
  scopes_SOME?: InputMaybe<ScopeWhere>;
  usersAggregate?: InputMaybe<StakeholderUsersAggregateInput>;
  /** Return Stakeholders where all of the related StakeholderUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<StakeholderUsersConnectionWhere>;
  /** Return Stakeholders where none of the related StakeholderUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<StakeholderUsersConnectionWhere>;
  /** Return Stakeholders where one of the related StakeholderUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<StakeholderUsersConnectionWhere>;
  /** Return Stakeholders where some of the related StakeholderUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<StakeholderUsersConnectionWhere>;
  /** Return Stakeholders where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Stakeholders where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Stakeholders where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Stakeholders where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StakeholdersConnection = {
  __typename?: 'StakeholdersConnection';
  edges: Array<StakeholderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

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

export type UpdateExamplesMutationResponse = {
  __typename?: 'UpdateExamplesMutationResponse';
  examples: Array<Example>;
  info: UpdateInfo;
};

export type UpdateGeographicsMutationResponse = {
  __typename?: 'UpdateGeographicsMutationResponse';
  geographics: Array<Geographic>;
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

export type UpdateQuestionsMutationResponse = {
  __typename?: 'UpdateQuestionsMutationResponse';
  info: UpdateInfo;
  questions: Array<Question>;
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

export type UpdateStakeholdersMutationResponse = {
  __typename?: 'UpdateStakeholdersMutationResponse';
  info: UpdateInfo;
  stakeholders: Array<Stakeholder>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type UpdateWebDumpsMutationResponse = {
  __typename?: 'UpdateWebDumpsMutationResponse';
  info: UpdateInfo;
  webDumps: Array<WebDump>;
};

export type UpdateWorkersMutationResponse = {
  __typename?: 'UpdateWorkersMutationResponse';
  info: UpdateInfo;
  workers: Array<Workers>;
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
  sort?: InputMaybe<Array<UserInteractionsConnectionSort>>;
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
  Example?: InputMaybe<Array<UserInteractionsExampleConnectFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicConnectFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectConnectFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusConnectFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionConnectFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleConnectFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeConnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderConnectFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserConnectFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpConnectFieldInput>>;
  Workers?: InputMaybe<Array<UserInteractionsWorkersConnectFieldInput>>;
};

export type UserInteractionsConnectOrCreateInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleConnectOrCreateFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicConnectOrCreateFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectConnectOrCreateFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusConnectOrCreateFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionConnectOrCreateFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleConnectOrCreateFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeConnectOrCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderConnectOrCreateFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserConnectOrCreateFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpConnectOrCreateFieldInput>>;
  Workers?: InputMaybe<Array<UserInteractionsWorkersConnectOrCreateFieldInput>>;
};

export type UserInteractionsConnection = {
  __typename?: 'UserInteractionsConnection';
  edges: Array<UserInteractionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserInteractionsConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
};

export type UserInteractionsConnectionWhere = {
  Example?: InputMaybe<UserInteractionsExampleConnectionWhere>;
  Geographic?: InputMaybe<UserInteractionsGeographicConnectionWhere>;
  Project?: InputMaybe<UserInteractionsProjectConnectionWhere>;
  ProjectStatus?: InputMaybe<UserInteractionsProjectStatusConnectionWhere>;
  Question?: InputMaybe<UserInteractionsQuestionConnectionWhere>;
  Ripple?: InputMaybe<UserInteractionsRippleConnectionWhere>;
  Scope?: InputMaybe<UserInteractionsScopeConnectionWhere>;
  Stakeholder?: InputMaybe<UserInteractionsStakeholderConnectionWhere>;
  User?: InputMaybe<UserInteractionsUserConnectionWhere>;
  WebDump?: InputMaybe<UserInteractionsWebDumpConnectionWhere>;
  Workers?: InputMaybe<UserInteractionsWorkersConnectionWhere>;
};

export type UserInteractionsCreateFieldInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleCreateFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicCreateFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectCreateFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusCreateFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionCreateFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleCreateFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderCreateFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserCreateFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpCreateFieldInput>>;
  Workers?: InputMaybe<Array<UserInteractionsWorkersCreateFieldInput>>;
};

export type UserInteractionsCreateInput = {
  Example?: InputMaybe<UserInteractionsExampleFieldInput>;
  Geographic?: InputMaybe<UserInteractionsGeographicFieldInput>;
  Project?: InputMaybe<UserInteractionsProjectFieldInput>;
  ProjectStatus?: InputMaybe<UserInteractionsProjectStatusFieldInput>;
  Question?: InputMaybe<UserInteractionsQuestionFieldInput>;
  Ripple?: InputMaybe<UserInteractionsRippleFieldInput>;
  Scope?: InputMaybe<UserInteractionsScopeFieldInput>;
  Stakeholder?: InputMaybe<UserInteractionsStakeholderFieldInput>;
  User?: InputMaybe<UserInteractionsUserFieldInput>;
  WebDump?: InputMaybe<UserInteractionsWebDumpFieldInput>;
  Workers?: InputMaybe<UserInteractionsWorkersFieldInput>;
};

export type UserInteractionsDeleteInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleDeleteFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicDeleteFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectDeleteFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusDeleteFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionDeleteFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleDeleteFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeDeleteFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderDeleteFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserDeleteFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpDeleteFieldInput>>;
  Workers?: InputMaybe<Array<UserInteractionsWorkersDeleteFieldInput>>;
};

export type UserInteractionsDisconnectInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleDisconnectFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicDisconnectFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectDisconnectFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusDisconnectFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionDisconnectFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleDisconnectFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeDisconnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderDisconnectFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserDisconnectFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpDisconnectFieldInput>>;
  Workers?: InputMaybe<Array<UserInteractionsWorkersDisconnectFieldInput>>;
};

export type UserInteractionsExampleConnectFieldInput = {
  connect?: InputMaybe<Array<ExampleConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<ExampleConnectWhere>;
};

export type UserInteractionsExampleConnectOrCreateFieldInput = {
  onCreate: UserInteractionsExampleConnectOrCreateFieldInputOnCreate;
  where: ExampleConnectOrCreateWhere;
};

export type UserInteractionsExampleConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: ExampleOnCreateInput;
};

export type UserInteractionsExampleConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsExampleConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsExampleConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsExampleConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<ExampleWhere>;
};

export type UserInteractionsExampleCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: ExampleCreateInput;
};

export type UserInteractionsExampleDeleteFieldInput = {
  delete?: InputMaybe<ExampleDeleteInput>;
  where?: InputMaybe<UserInteractionsExampleConnectionWhere>;
};

export type UserInteractionsExampleDisconnectFieldInput = {
  disconnect?: InputMaybe<ExampleDisconnectInput>;
  where?: InputMaybe<UserInteractionsExampleConnectionWhere>;
};

export type UserInteractionsExampleFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsExampleConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsExampleConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsExampleCreateFieldInput>>;
};

export type UserInteractionsExampleUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<ExampleUpdateInput>;
};

export type UserInteractionsExampleUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsExampleConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsExampleConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsExampleCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsExampleDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsExampleDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsExampleUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsExampleConnectionWhere>;
};

export type UserInteractionsGeographicConnectFieldInput = {
  connect?: InputMaybe<Array<GeographicConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<GeographicConnectWhere>;
};

export type UserInteractionsGeographicConnectOrCreateFieldInput = {
  onCreate: UserInteractionsGeographicConnectOrCreateFieldInputOnCreate;
  where: GeographicConnectOrCreateWhere;
};

export type UserInteractionsGeographicConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: GeographicOnCreateInput;
};

export type UserInteractionsGeographicConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsGeographicConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsGeographicConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsGeographicConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<GeographicWhere>;
};

export type UserInteractionsGeographicCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: GeographicCreateInput;
};

export type UserInteractionsGeographicDeleteFieldInput = {
  delete?: InputMaybe<GeographicDeleteInput>;
  where?: InputMaybe<UserInteractionsGeographicConnectionWhere>;
};

export type UserInteractionsGeographicDisconnectFieldInput = {
  disconnect?: InputMaybe<GeographicDisconnectInput>;
  where?: InputMaybe<UserInteractionsGeographicConnectionWhere>;
};

export type UserInteractionsGeographicFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsGeographicConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsGeographicConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsGeographicCreateFieldInput>>;
};

export type UserInteractionsGeographicUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<GeographicUpdateInput>;
};

export type UserInteractionsGeographicUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsGeographicConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsGeographicConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsGeographicCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsGeographicDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsGeographicDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsGeographicUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsGeographicConnectionWhere>;
};

export type UserInteractionsProjectConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<ProjectConnectWhere>;
};

export type UserInteractionsProjectConnectOrCreateFieldInput = {
  onCreate: UserInteractionsProjectConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type UserInteractionsProjectConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: ProjectOnCreateInput;
};

export type UserInteractionsProjectConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsProjectConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsProjectConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsProjectConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<ProjectWhere>;
};

export type UserInteractionsProjectCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
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
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<ProjectStatusConnectWhere>;
};

export type UserInteractionsProjectStatusConnectOrCreateFieldInput = {
  onCreate: UserInteractionsProjectStatusConnectOrCreateFieldInputOnCreate;
  where: ProjectStatusConnectOrCreateWhere;
};

export type UserInteractionsProjectStatusConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: ProjectStatusOnCreateInput;
};

export type UserInteractionsProjectStatusConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsProjectStatusConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsProjectStatusConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsProjectStatusConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<ProjectStatusWhere>;
};

export type UserInteractionsProjectStatusCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
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
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
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
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
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

export type UserInteractionsQuestionConnectFieldInput = {
  connect?: InputMaybe<Array<QuestionConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<QuestionConnectWhere>;
};

export type UserInteractionsQuestionConnectOrCreateFieldInput = {
  onCreate: UserInteractionsQuestionConnectOrCreateFieldInputOnCreate;
  where: QuestionConnectOrCreateWhere;
};

export type UserInteractionsQuestionConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: QuestionOnCreateInput;
};

export type UserInteractionsQuestionConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsQuestionConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsQuestionConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsQuestionConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<QuestionWhere>;
};

export type UserInteractionsQuestionCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: QuestionCreateInput;
};

export type UserInteractionsQuestionDeleteFieldInput = {
  delete?: InputMaybe<QuestionDeleteInput>;
  where?: InputMaybe<UserInteractionsQuestionConnectionWhere>;
};

export type UserInteractionsQuestionDisconnectFieldInput = {
  disconnect?: InputMaybe<QuestionDisconnectInput>;
  where?: InputMaybe<UserInteractionsQuestionConnectionWhere>;
};

export type UserInteractionsQuestionFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsQuestionConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsQuestionConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsQuestionCreateFieldInput>>;
};

export type UserInteractionsQuestionUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<QuestionUpdateInput>;
};

export type UserInteractionsQuestionUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsQuestionConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsQuestionConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsQuestionCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsQuestionDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsQuestionDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsQuestionUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsQuestionConnectionWhere>;
};

export type UserInteractionsRelationship = UserInteractsWith & {
  __typename?: 'UserInteractionsRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: Interactable;
  type: UserInteractionName;
};

export type UserInteractionsRippleConnectFieldInput = {
  connect?: InputMaybe<Array<RippleConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<RippleConnectWhere>;
};

export type UserInteractionsRippleConnectOrCreateFieldInput = {
  onCreate: UserInteractionsRippleConnectOrCreateFieldInputOnCreate;
  where: RippleConnectOrCreateWhere;
};

export type UserInteractionsRippleConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: RippleOnCreateInput;
};

export type UserInteractionsRippleConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsRippleConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsRippleConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsRippleConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<RippleWhere>;
};

export type UserInteractionsRippleCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
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
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
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
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<ScopeConnectWhere>;
};

export type UserInteractionsScopeConnectOrCreateFieldInput = {
  onCreate: UserInteractionsScopeConnectOrCreateFieldInputOnCreate;
  where: ScopeConnectOrCreateWhere;
};

export type UserInteractionsScopeConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: ScopeOnCreateInput;
};

export type UserInteractionsScopeConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsScopeConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsScopeConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsScopeConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<ScopeWhere>;
};

export type UserInteractionsScopeCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
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
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
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

export type UserInteractionsStakeholderConnectFieldInput = {
  connect?: InputMaybe<Array<StakeholderConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<StakeholderConnectWhere>;
};

export type UserInteractionsStakeholderConnectOrCreateFieldInput = {
  onCreate: UserInteractionsStakeholderConnectOrCreateFieldInputOnCreate;
  where: StakeholderConnectOrCreateWhere;
};

export type UserInteractionsStakeholderConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: StakeholderOnCreateInput;
};

export type UserInteractionsStakeholderConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsStakeholderConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsStakeholderConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsStakeholderConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<StakeholderWhere>;
};

export type UserInteractionsStakeholderCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: StakeholderCreateInput;
};

export type UserInteractionsStakeholderDeleteFieldInput = {
  delete?: InputMaybe<StakeholderDeleteInput>;
  where?: InputMaybe<UserInteractionsStakeholderConnectionWhere>;
};

export type UserInteractionsStakeholderDisconnectFieldInput = {
  disconnect?: InputMaybe<StakeholderDisconnectInput>;
  where?: InputMaybe<UserInteractionsStakeholderConnectionWhere>;
};

export type UserInteractionsStakeholderFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsStakeholderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsStakeholderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsStakeholderCreateFieldInput>>;
};

export type UserInteractionsStakeholderUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<StakeholderUpdateInput>;
};

export type UserInteractionsStakeholderUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsStakeholderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsStakeholderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsStakeholderCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsStakeholderDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsStakeholderDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsStakeholderUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsStakeholderConnectionWhere>;
};

export type UserInteractionsUpdateInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleUpdateFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicUpdateFieldInput>>;
  Project?: InputMaybe<Array<UserInteractionsProjectUpdateFieldInput>>;
  ProjectStatus?: InputMaybe<Array<UserInteractionsProjectStatusUpdateFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionUpdateFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleUpdateFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeUpdateFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderUpdateFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserUpdateFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpUpdateFieldInput>>;
  Workers?: InputMaybe<Array<UserInteractionsWorkersUpdateFieldInput>>;
};

export type UserInteractionsUserConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<UserConnectWhere>;
};

export type UserInteractionsUserConnectOrCreateFieldInput = {
  onCreate: UserInteractionsUserConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type UserInteractionsUserConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type UserInteractionsUserConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsUserConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsUserConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsUserConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type UserInteractionsUserCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
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
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
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

export type UserInteractionsWebDumpConnectFieldInput = {
  connect?: InputMaybe<Array<WebDumpConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<WebDumpConnectWhere>;
};

export type UserInteractionsWebDumpConnectOrCreateFieldInput = {
  onCreate: UserInteractionsWebDumpConnectOrCreateFieldInputOnCreate;
  where: WebDumpConnectOrCreateWhere;
};

export type UserInteractionsWebDumpConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: WebDumpOnCreateInput;
};

export type UserInteractionsWebDumpConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsWebDumpConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsWebDumpConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsWebDumpConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<WebDumpWhere>;
};

export type UserInteractionsWebDumpCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: WebDumpCreateInput;
};

export type UserInteractionsWebDumpDeleteFieldInput = {
  delete?: InputMaybe<WebDumpDeleteInput>;
  where?: InputMaybe<UserInteractionsWebDumpConnectionWhere>;
};

export type UserInteractionsWebDumpDisconnectFieldInput = {
  disconnect?: InputMaybe<WebDumpDisconnectInput>;
  where?: InputMaybe<UserInteractionsWebDumpConnectionWhere>;
};

export type UserInteractionsWebDumpFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsWebDumpConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsWebDumpConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsWebDumpCreateFieldInput>>;
};

export type UserInteractionsWebDumpUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<WebDumpUpdateInput>;
};

export type UserInteractionsWebDumpUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsWebDumpConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsWebDumpConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsWebDumpCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsWebDumpDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsWebDumpDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsWebDumpUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsWebDumpConnectionWhere>;
};

export type UserInteractionsWorkersConnectFieldInput = {
  connect?: InputMaybe<Array<WorkersConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<WorkersConnectWhere>;
};

export type UserInteractionsWorkersConnectOrCreateFieldInput = {
  onCreate: UserInteractionsWorkersConnectOrCreateFieldInputOnCreate;
  where: WorkersConnectOrCreateWhere;
};

export type UserInteractionsWorkersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: WorkersOnCreateInput;
};

export type UserInteractionsWorkersConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsWorkersConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsWorkersConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsWorkersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<WorkersWhere>;
};

export type UserInteractionsWorkersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: WorkersCreateInput;
};

export type UserInteractionsWorkersDeleteFieldInput = {
  delete?: InputMaybe<WorkersDeleteInput>;
  where?: InputMaybe<UserInteractionsWorkersConnectionWhere>;
};

export type UserInteractionsWorkersDisconnectFieldInput = {
  disconnect?: InputMaybe<WorkersDisconnectInput>;
  where?: InputMaybe<UserInteractionsWorkersConnectionWhere>;
};

export type UserInteractionsWorkersFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsWorkersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsWorkersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsWorkersCreateFieldInput>>;
};

export type UserInteractionsWorkersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<WorkersUpdateInput>;
};

export type UserInteractionsWorkersUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsWorkersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsWorkersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsWorkersCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsWorkersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsWorkersDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsWorkersUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsWorkersConnectionWhere>;
};

export type UserInteractsWith = {
  createdAt: Scalars['DateTime']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  type: UserInteractionName;
};

export type UserInteractsWithCreateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  type: UserInteractionName;
};

export type UserInteractsWithSort = {
  createdAt?: InputMaybe<SortDirection>;
  dump?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type UserInteractsWithUpdateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<UserInteractionName>;
};

export type UserInteractsWithWhere = {
  AND?: InputMaybe<Array<UserInteractsWithWhere>>;
  NOT?: InputMaybe<UserInteractsWithWhere>;
  OR?: InputMaybe<Array<UserInteractsWithWhere>>;
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
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WebDump = {
  __typename?: 'WebDump';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<WebDumpProjectProjectsAggregationSelection>;
  projectsConnection: WebDumpProjectsConnection;
  users: Array<User>;
  usersAggregate?: Maybe<WebDumpUserUsersAggregationSelection>;
  usersConnection: WebDumpUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type WebDumpProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type WebDumpProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type WebDumpProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WebDumpProjectsConnectionSort>>;
  where?: InputMaybe<WebDumpProjectsConnectionWhere>;
};


export type WebDumpUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type WebDumpUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type WebDumpUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WebDumpUsersConnectionSort>>;
  where?: InputMaybe<WebDumpUsersConnectionWhere>;
};

export type WebDumpAggregateSelection = {
  __typename?: 'WebDumpAggregateSelection';
  content: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
};

export type WebDumpConnectInput = {
  projects?: InputMaybe<Array<WebDumpProjectsConnectFieldInput>>;
  users?: InputMaybe<Array<WebDumpUsersConnectFieldInput>>;
};

export type WebDumpConnectOrCreateInput = {
  projects?: InputMaybe<Array<WebDumpProjectsConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<WebDumpUsersConnectOrCreateFieldInput>>;
};

export type WebDumpConnectOrCreateWhere = {
  node: WebDumpUniqueWhere;
};

export type WebDumpConnectWhere = {
  node: WebDumpWhere;
};

export type WebDumpCreateInput = {
  content: Scalars['String']['input'];
  projects?: InputMaybe<WebDumpProjectsFieldInput>;
  users?: InputMaybe<WebDumpUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type WebDumpDeleteInput = {
  projects?: InputMaybe<Array<WebDumpProjectsDeleteFieldInput>>;
  users?: InputMaybe<Array<WebDumpUsersDeleteFieldInput>>;
};

export type WebDumpDisconnectInput = {
  projects?: InputMaybe<Array<WebDumpProjectsDisconnectFieldInput>>;
  users?: InputMaybe<Array<WebDumpUsersDisconnectFieldInput>>;
};

export type WebDumpEdge = {
  __typename?: 'WebDumpEdge';
  cursor: Scalars['String']['output'];
  node: WebDump;
};

export type WebDumpOnCreateInput = {
  content: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type WebDumpOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more WebDumpSort objects to sort WebDumps by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<WebDumpSort>>;
};

export type WebDumpProjectProjectsAggregationSelection = {
  __typename?: 'WebDumpProjectProjectsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<WebDumpProjectProjectsNodeAggregateSelection>;
};

export type WebDumpProjectProjectsNodeAggregateSelection = {
  __typename?: 'WebDumpProjectProjectsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
};

export type WebDumpProjectsAggregateInput = {
  AND?: InputMaybe<Array<WebDumpProjectsAggregateInput>>;
  NOT?: InputMaybe<WebDumpProjectsAggregateInput>;
  OR?: InputMaybe<Array<WebDumpProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<WebDumpProjectsNodeAggregationWhereInput>;
};

export type WebDumpProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type WebDumpProjectsConnectOrCreateFieldInput = {
  onCreate: WebDumpProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type WebDumpProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type WebDumpProjectsConnection = {
  __typename?: 'WebDumpProjectsConnection';
  edges: Array<WebDumpProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WebDumpProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type WebDumpProjectsConnectionWhere = {
  AND?: InputMaybe<Array<WebDumpProjectsConnectionWhere>>;
  NOT?: InputMaybe<WebDumpProjectsConnectionWhere>;
  OR?: InputMaybe<Array<WebDumpProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type WebDumpProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type WebDumpProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<WebDumpProjectsConnectionWhere>;
};

export type WebDumpProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<WebDumpProjectsConnectionWhere>;
};

export type WebDumpProjectsFieldInput = {
  connect?: InputMaybe<Array<WebDumpProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WebDumpProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WebDumpProjectsCreateFieldInput>>;
};

export type WebDumpProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WebDumpProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WebDumpProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WebDumpProjectsNodeAggregationWhereInput>>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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

export type WebDumpProjectsRelationship = {
  __typename?: 'WebDumpProjectsRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type WebDumpProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type WebDumpProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<WebDumpProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WebDumpProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WebDumpProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<WebDumpProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<WebDumpProjectsDisconnectFieldInput>>;
  update?: InputMaybe<WebDumpProjectsUpdateConnectionInput>;
  where?: InputMaybe<WebDumpProjectsConnectionWhere>;
};

export type WebDumpRelationInput = {
  projects?: InputMaybe<Array<WebDumpProjectsCreateFieldInput>>;
  users?: InputMaybe<Array<WebDumpUsersCreateFieldInput>>;
};

/** Fields to sort WebDumps by. The order in which sorts are applied is not guaranteed when specifying many fields in one WebDumpSort object. */
export type WebDumpSort = {
  content?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type WebDumpUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type WebDumpUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<WebDumpProjectsUpdateFieldInput>>;
  users?: InputMaybe<Array<WebDumpUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WebDumpUserUsersAggregationSelection = {
  __typename?: 'WebDumpUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<WebDumpUserUsersEdgeAggregateSelection>;
  node?: Maybe<WebDumpUserUsersNodeAggregateSelection>;
};

export type WebDumpUserUsersEdgeAggregateSelection = {
  __typename?: 'WebDumpUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type WebDumpUserUsersNodeAggregateSelection = {
  __typename?: 'WebDumpUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type WebDumpUsersAggregateInput = {
  AND?: InputMaybe<Array<WebDumpUsersAggregateInput>>;
  NOT?: InputMaybe<WebDumpUsersAggregateInput>;
  OR?: InputMaybe<Array<WebDumpUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<WebDumpUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<WebDumpUsersNodeAggregationWhereInput>;
};

export type WebDumpUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type WebDumpUsersConnectOrCreateFieldInput = {
  onCreate: WebDumpUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type WebDumpUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type WebDumpUsersConnection = {
  __typename?: 'WebDumpUsersConnection';
  edges: Array<WebDumpUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WebDumpUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type WebDumpUsersConnectionWhere = {
  AND?: InputMaybe<Array<WebDumpUsersConnectionWhere>>;
  NOT?: InputMaybe<WebDumpUsersConnectionWhere>;
  OR?: InputMaybe<Array<WebDumpUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type WebDumpUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: UserCreateInput;
};

export type WebDumpUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<WebDumpUsersConnectionWhere>;
};

export type WebDumpUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<WebDumpUsersConnectionWhere>;
};

export type WebDumpUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<WebDumpUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<WebDumpUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<WebDumpUsersEdgeAggregationWhereInput>>;
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

export type WebDumpUsersFieldInput = {
  connect?: InputMaybe<Array<WebDumpUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WebDumpUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WebDumpUsersCreateFieldInput>>;
};

export type WebDumpUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WebDumpUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WebDumpUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WebDumpUsersNodeAggregationWhereInput>>;
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
};

export type WebDumpUsersRelationship = UserInteractsWith & {
  __typename?: 'WebDumpUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type WebDumpUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type WebDumpUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<WebDumpUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WebDumpUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WebDumpUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<WebDumpUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<WebDumpUsersDisconnectFieldInput>>;
  update?: InputMaybe<WebDumpUsersUpdateConnectionInput>;
  where?: InputMaybe<WebDumpUsersConnectionWhere>;
};

export type WebDumpWhere = {
  AND?: InputMaybe<Array<WebDumpWhere>>;
  NOT?: InputMaybe<WebDumpWhere>;
  OR?: InputMaybe<Array<WebDumpWhere>>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  content_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  content_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  content_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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
  projectsAggregate?: InputMaybe<WebDumpProjectsAggregateInput>;
  /** Return WebDumps where all of the related WebDumpProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<WebDumpProjectsConnectionWhere>;
  /** Return WebDumps where none of the related WebDumpProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<WebDumpProjectsConnectionWhere>;
  /** Return WebDumps where one of the related WebDumpProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<WebDumpProjectsConnectionWhere>;
  /** Return WebDumps where some of the related WebDumpProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<WebDumpProjectsConnectionWhere>;
  /** Return WebDumps where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return WebDumps where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return WebDumps where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return WebDumps where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  usersAggregate?: InputMaybe<WebDumpUsersAggregateInput>;
  /** Return WebDumps where all of the related WebDumpUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<WebDumpUsersConnectionWhere>;
  /** Return WebDumps where none of the related WebDumpUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<WebDumpUsersConnectionWhere>;
  /** Return WebDumps where one of the related WebDumpUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<WebDumpUsersConnectionWhere>;
  /** Return WebDumps where some of the related WebDumpUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<WebDumpUsersConnectionWhere>;
  /** Return WebDumps where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return WebDumps where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return WebDumps where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return WebDumps where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WebDumpsConnection = {
  __typename?: 'WebDumpsConnection';
  edges: Array<WebDumpEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Workers = {
  __typename?: 'Workers';
  brief?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<WorkersProjectProjectsAggregationSelection>;
  projectsConnection: WorkersProjectsConnection;
  users: Array<User>;
  usersAggregate?: Maybe<WorkersUserUsersAggregationSelection>;
  usersConnection: WorkersUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type WorkersProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type WorkersProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type WorkersProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkersProjectsConnectionSort>>;
  where?: InputMaybe<WorkersProjectsConnectionWhere>;
};


export type WorkersUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type WorkersUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type WorkersUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkersUsersConnectionSort>>;
  where?: InputMaybe<WorkersUsersConnectionWhere>;
};

export type WorkersAggregateSelection = {
  __typename?: 'WorkersAggregateSelection';
  brief: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type WorkersConnectInput = {
  projects?: InputMaybe<Array<WorkersProjectsConnectFieldInput>>;
  users?: InputMaybe<Array<WorkersUsersConnectFieldInput>>;
};

export type WorkersConnectOrCreateInput = {
  projects?: InputMaybe<Array<WorkersProjectsConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<WorkersUsersConnectOrCreateFieldInput>>;
};

export type WorkersConnectOrCreateWhere = {
  node: WorkersUniqueWhere;
};

export type WorkersConnectWhere = {
  node: WorkersWhere;
};

export type WorkersConnection = {
  __typename?: 'WorkersConnection';
  edges: Array<WorkersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkersCreateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<WorkersProjectsFieldInput>;
  users?: InputMaybe<WorkersUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type WorkersDeleteInput = {
  projects?: InputMaybe<Array<WorkersProjectsDeleteFieldInput>>;
  users?: InputMaybe<Array<WorkersUsersDeleteFieldInput>>;
};

export type WorkersDisconnectInput = {
  projects?: InputMaybe<Array<WorkersProjectsDisconnectFieldInput>>;
  users?: InputMaybe<Array<WorkersUsersDisconnectFieldInput>>;
};

export type WorkersEdge = {
  __typename?: 'WorkersEdge';
  cursor: Scalars['String']['output'];
  node: Workers;
};

export type WorkersOnCreateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type WorkersOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more WorkersSort objects to sort Workers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<WorkersSort>>;
};

export type WorkersProjectProjectsAggregationSelection = {
  __typename?: 'WorkersProjectProjectsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<WorkersProjectProjectsNodeAggregateSelection>;
};

export type WorkersProjectProjectsNodeAggregateSelection = {
  __typename?: 'WorkersProjectProjectsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
};

export type WorkersProjectsAggregateInput = {
  AND?: InputMaybe<Array<WorkersProjectsAggregateInput>>;
  NOT?: InputMaybe<WorkersProjectsAggregateInput>;
  OR?: InputMaybe<Array<WorkersProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<WorkersProjectsNodeAggregationWhereInput>;
};

export type WorkersProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type WorkersProjectsConnectOrCreateFieldInput = {
  onCreate: WorkersProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type WorkersProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type WorkersProjectsConnection = {
  __typename?: 'WorkersProjectsConnection';
  edges: Array<WorkersProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkersProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type WorkersProjectsConnectionWhere = {
  AND?: InputMaybe<Array<WorkersProjectsConnectionWhere>>;
  NOT?: InputMaybe<WorkersProjectsConnectionWhere>;
  OR?: InputMaybe<Array<WorkersProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type WorkersProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type WorkersProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<WorkersProjectsConnectionWhere>;
};

export type WorkersProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<WorkersProjectsConnectionWhere>;
};

export type WorkersProjectsFieldInput = {
  connect?: InputMaybe<Array<WorkersProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WorkersProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WorkersProjectsCreateFieldInput>>;
};

export type WorkersProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WorkersProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WorkersProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WorkersProjectsNodeAggregationWhereInput>>;
  brief_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  brief_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  brief_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  brief_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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

export type WorkersProjectsRelationship = {
  __typename?: 'WorkersProjectsRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type WorkersProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type WorkersProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<WorkersProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WorkersProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WorkersProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<WorkersProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<WorkersProjectsDisconnectFieldInput>>;
  update?: InputMaybe<WorkersProjectsUpdateConnectionInput>;
  where?: InputMaybe<WorkersProjectsConnectionWhere>;
};

export type WorkersRelationInput = {
  projects?: InputMaybe<Array<WorkersProjectsCreateFieldInput>>;
  users?: InputMaybe<Array<WorkersUsersCreateFieldInput>>;
};

/** Fields to sort Workers by. The order in which sorts are applied is not guaranteed when specifying many fields in one WorkersSort object. */
export type WorkersSort = {
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type WorkersUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type WorkersUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<WorkersProjectsUpdateFieldInput>>;
  users?: InputMaybe<Array<WorkersUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkersUserUsersAggregationSelection = {
  __typename?: 'WorkersUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<WorkersUserUsersEdgeAggregateSelection>;
  node?: Maybe<WorkersUserUsersNodeAggregateSelection>;
};

export type WorkersUserUsersEdgeAggregateSelection = {
  __typename?: 'WorkersUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type WorkersUserUsersNodeAggregateSelection = {
  __typename?: 'WorkersUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type WorkersUsersAggregateInput = {
  AND?: InputMaybe<Array<WorkersUsersAggregateInput>>;
  NOT?: InputMaybe<WorkersUsersAggregateInput>;
  OR?: InputMaybe<Array<WorkersUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<WorkersUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<WorkersUsersNodeAggregationWhereInput>;
};

export type WorkersUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type WorkersUsersConnectOrCreateFieldInput = {
  onCreate: WorkersUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type WorkersUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type WorkersUsersConnection = {
  __typename?: 'WorkersUsersConnection';
  edges: Array<WorkersUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkersUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type WorkersUsersConnectionWhere = {
  AND?: InputMaybe<Array<WorkersUsersConnectionWhere>>;
  NOT?: InputMaybe<WorkersUsersConnectionWhere>;
  OR?: InputMaybe<Array<WorkersUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type WorkersUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: UserCreateInput;
};

export type WorkersUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<WorkersUsersConnectionWhere>;
};

export type WorkersUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<WorkersUsersConnectionWhere>;
};

export type WorkersUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<WorkersUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<WorkersUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<WorkersUsersEdgeAggregationWhereInput>>;
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

export type WorkersUsersFieldInput = {
  connect?: InputMaybe<Array<WorkersUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WorkersUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WorkersUsersCreateFieldInput>>;
};

export type WorkersUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WorkersUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WorkersUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WorkersUsersNodeAggregationWhereInput>>;
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
};

export type WorkersUsersRelationship = UserInteractsWith & {
  __typename?: 'WorkersUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type WorkersUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type WorkersUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<WorkersUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WorkersUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WorkersUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<WorkersUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<WorkersUsersDisconnectFieldInput>>;
  update?: InputMaybe<WorkersUsersUpdateConnectionInput>;
  where?: InputMaybe<WorkersUsersConnectionWhere>;
};

export type WorkersWhere = {
  AND?: InputMaybe<Array<WorkersWhere>>;
  NOT?: InputMaybe<WorkersWhere>;
  OR?: InputMaybe<Array<WorkersWhere>>;
  brief?: InputMaybe<Scalars['String']['input']>;
  brief_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  brief_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brief_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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
  projectsAggregate?: InputMaybe<WorkersProjectsAggregateInput>;
  /** Return Workers where all of the related WorkersProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<WorkersProjectsConnectionWhere>;
  /** Return Workers where none of the related WorkersProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<WorkersProjectsConnectionWhere>;
  /** Return Workers where one of the related WorkersProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<WorkersProjectsConnectionWhere>;
  /** Return Workers where some of the related WorkersProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<WorkersProjectsConnectionWhere>;
  /** Return Workers where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Workers where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Workers where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Workers where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  usersAggregate?: InputMaybe<WorkersUsersAggregateInput>;
  /** Return Workers where all of the related WorkersUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<WorkersUsersConnectionWhere>;
  /** Return Workers where none of the related WorkersUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<WorkersUsersConnectionWhere>;
  /** Return Workers where one of the related WorkersUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<WorkersUsersConnectionWhere>;
  /** Return Workers where some of the related WorkersUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<WorkersUsersConnectionWhere>;
  /** Return Workers where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Workers where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Workers where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Workers where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateProjectsMutationVariables = Exact<{
  input: Array<ProjectCreateInput> | ProjectCreateInput;
}>;


export type CreateProjectsMutation = { __typename?: 'Mutation', createProjects: { __typename?: 'CreateProjectsMutationResponse', projects: Array<{ __typename?: 'Project', id: string, name: string, considerations: Array<{ __typename?: 'Geographic', brief?: string | null } | { __typename?: 'Stakeholder', name: string, stakeholderBreif: string } | { __typename?: 'WebDump', content: string } | { __typename?: 'Workers', brief?: string | null }> }> } };

export type UpdateProjectsMutationVariables = Exact<{
  where?: InputMaybe<ProjectWhere>;
  connectOrCreate?: InputMaybe<ProjectConnectOrCreateInput>;
  create?: InputMaybe<ProjectRelationInput>;
}>;


export type UpdateProjectsMutation = { __typename?: 'Mutation', updateProjects: { __typename?: 'UpdateProjectsMutationResponse', projects: Array<{ __typename?: 'Project', id: string, name: string, considerations: Array<{ __typename?: 'Geographic', brief?: string | null } | { __typename?: 'Stakeholder', name: string, stakeholderBreif: string } | { __typename?: 'WebDump', content: string } | { __typename?: 'Workers', brief?: string | null }>, statuses: Array<{ __typename?: 'ProjectStatus', name: ProjectStatusName }>, scopesConnection: { __typename?: 'ProjectScopesConnection', edges: Array<{ __typename?: 'ProjectScopesRelationship', aspect: string, reason: string, node: { __typename?: 'Scope', name: string, description?: string | null, considerations: Array<{ __typename?: 'Example', id: string, brief: string } | { __typename?: 'Question', id: string, brief: string } | { __typename?: 'Stakeholder', name: string, brief: string }> } }> } }> } };

export type CreateScopesMutationVariables = Exact<{
  input: Array<ScopeCreateInput> | ScopeCreateInput;
}>;


export type CreateScopesMutation = { __typename?: 'Mutation', createScopes: { __typename?: 'CreateScopesMutationResponse', scopes: Array<{ __typename?: 'Scope', id: string, name: string, description?: string | null, basis?: string | null }> } };

export type CountProjectsQueryVariables = Exact<{
  where?: InputMaybe<ProjectWhere>;
}>;


export type CountProjectsQuery = { __typename?: 'Query', projectsAggregate: { __typename?: 'ProjectAggregateSelection', count: number } };

export type ScopesQueryVariables = Exact<{
  where?: InputMaybe<ScopeWhere>;
}>;


export type ScopesQuery = { __typename?: 'Query', scopes: Array<{ __typename?: 'Scope', id: string, name: string, description?: string | null, verified: boolean }> };


export const CreateProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"considerations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stakeholder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"stakeholderBreif"},"name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebDump"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Geographic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workers"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectsMutation, CreateProjectsMutationVariables>;
export const UpdateProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectConnectOrCreateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"create"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectRelationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"create"},"value":{"kind":"Variable","name":{"kind":"Name","value":"create"}}},{"kind":"Argument","name":{"kind":"Name","value":"connectOrCreate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"considerations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stakeholder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"stakeholderBreif"},"name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebDump"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Geographic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workers"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scopesConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aspect"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"considerations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stakeholder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Example"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectsMutation, UpdateProjectsMutationVariables>;
export const CreateScopesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateScopes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ScopeCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createScopes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scopes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"basis"}}]}}]}}]}}]} as unknown as DocumentNode<CreateScopesMutation, CreateScopesMutationVariables>;
export const CountProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CountProjectsQuery, CountProjectsQueryVariables>;
export const ScopesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Scopes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ScopeWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scopes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]} as unknown as DocumentNode<ScopesQuery, ScopesQueryVariables>;
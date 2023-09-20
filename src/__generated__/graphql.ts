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

export type CreateOrganizationStatusesMutationResponse = {
  __typename?: 'CreateOrganizationStatusesMutationResponse';
  info: CreateInfo;
  organizationStatuses: Array<OrganizationStatus>;
};

export type CreateOrganizationsMutationResponse = {
  __typename?: 'CreateOrganizationsMutationResponse';
  info: CreateInfo;
  organizations: Array<Organization>;
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

export type CreateTeamsMutationResponse = {
  __typename?: 'CreateTeamsMutationResponse';
  info: CreateInfo;
  teams: Array<Team>;
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
  organizations: Array<Organization>;
  organizationsAggregate?: Maybe<GeographicOrganizationOrganizationsAggregationSelection>;
  organizationsConnection: GeographicOrganizationsConnection;
  users: Array<User>;
  usersAggregate?: Maybe<GeographicUserUsersAggregationSelection>;
  usersConnection: GeographicUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type GeographicOrganizationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type GeographicOrganizationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type GeographicOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GeographicOrganizationsConnectionSort>>;
  where?: InputMaybe<GeographicOrganizationsConnectionWhere>;
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
  organizations?: InputMaybe<Array<GeographicOrganizationsConnectFieldInput>>;
  users?: InputMaybe<Array<GeographicUsersConnectFieldInput>>;
};

export type GeographicConnectOrCreateInput = {
  organizations?: InputMaybe<Array<GeographicOrganizationsConnectOrCreateFieldInput>>;
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
  organizations?: InputMaybe<GeographicOrganizationsFieldInput>;
  users?: InputMaybe<GeographicUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type GeographicDeleteInput = {
  organizations?: InputMaybe<Array<GeographicOrganizationsDeleteFieldInput>>;
  users?: InputMaybe<Array<GeographicUsersDeleteFieldInput>>;
};

export type GeographicDisconnectInput = {
  organizations?: InputMaybe<Array<GeographicOrganizationsDisconnectFieldInput>>;
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

export type GeographicOrganizationOrganizationsAggregationSelection = {
  __typename?: 'GeographicOrganizationOrganizationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<GeographicOrganizationOrganizationsNodeAggregateSelection>;
};

export type GeographicOrganizationOrganizationsNodeAggregateSelection = {
  __typename?: 'GeographicOrganizationOrganizationsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNonNullable;
};

export type GeographicOrganizationsAggregateInput = {
  AND?: InputMaybe<Array<GeographicOrganizationsAggregateInput>>;
  NOT?: InputMaybe<GeographicOrganizationsAggregateInput>;
  OR?: InputMaybe<Array<GeographicOrganizationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<GeographicOrganizationsNodeAggregationWhereInput>;
};

export type GeographicOrganizationsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type GeographicOrganizationsConnectOrCreateFieldInput = {
  onCreate: GeographicOrganizationsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type GeographicOrganizationsConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type GeographicOrganizationsConnection = {
  __typename?: 'GeographicOrganizationsConnection';
  edges: Array<GeographicOrganizationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GeographicOrganizationsConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type GeographicOrganizationsConnectionWhere = {
  AND?: InputMaybe<Array<GeographicOrganizationsConnectionWhere>>;
  NOT?: InputMaybe<GeographicOrganizationsConnectionWhere>;
  OR?: InputMaybe<Array<GeographicOrganizationsConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type GeographicOrganizationsCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type GeographicOrganizationsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<GeographicOrganizationsConnectionWhere>;
};

export type GeographicOrganizationsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<GeographicOrganizationsConnectionWhere>;
};

export type GeographicOrganizationsFieldInput = {
  connect?: InputMaybe<Array<GeographicOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<GeographicOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<GeographicOrganizationsCreateFieldInput>>;
};

export type GeographicOrganizationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<GeographicOrganizationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<GeographicOrganizationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<GeographicOrganizationsNodeAggregationWhereInput>>;
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

export type GeographicOrganizationsRelationship = {
  __typename?: 'GeographicOrganizationsRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type GeographicOrganizationsUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type GeographicOrganizationsUpdateFieldInput = {
  connect?: InputMaybe<Array<GeographicOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<GeographicOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<GeographicOrganizationsCreateFieldInput>>;
  delete?: InputMaybe<Array<GeographicOrganizationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<GeographicOrganizationsDisconnectFieldInput>>;
  update?: InputMaybe<GeographicOrganizationsUpdateConnectionInput>;
  where?: InputMaybe<GeographicOrganizationsConnectionWhere>;
};

export type GeographicRelationInput = {
  organizations?: InputMaybe<Array<GeographicOrganizationsCreateFieldInput>>;
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
  organizations?: InputMaybe<Array<GeographicOrganizationsUpdateFieldInput>>;
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
  organizationsAggregate?: InputMaybe<GeographicOrganizationsAggregateInput>;
  /** Return Geographics where all of the related GeographicOrganizationsConnections match this filter */
  organizationsConnection_ALL?: InputMaybe<GeographicOrganizationsConnectionWhere>;
  /** Return Geographics where none of the related GeographicOrganizationsConnections match this filter */
  organizationsConnection_NONE?: InputMaybe<GeographicOrganizationsConnectionWhere>;
  /** Return Geographics where one of the related GeographicOrganizationsConnections match this filter */
  organizationsConnection_SINGLE?: InputMaybe<GeographicOrganizationsConnectionWhere>;
  /** Return Geographics where some of the related GeographicOrganizationsConnections match this filter */
  organizationsConnection_SOME?: InputMaybe<GeographicOrganizationsConnectionWhere>;
  /** Return Geographics where all of the related Organizations match this filter */
  organizations_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Geographics where none of the related Organizations match this filter */
  organizations_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Geographics where one of the related Organizations match this filter */
  organizations_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Geographics where some of the related Organizations match this filter */
  organizations_SOME?: InputMaybe<OrganizationWhere>;
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

export type Interactable = Example | Geographic | Organization | OrganizationStatus | Question | Ripple | Scope | Stakeholder | Team | User | WebDump;

export type InteractableWhere = {
  Example?: InputMaybe<ExampleWhere>;
  Geographic?: InputMaybe<GeographicWhere>;
  Organization?: InputMaybe<OrganizationWhere>;
  OrganizationStatus?: InputMaybe<OrganizationStatusWhere>;
  Question?: InputMaybe<QuestionWhere>;
  Ripple?: InputMaybe<RippleWhere>;
  Scope?: InputMaybe<ScopeWhere>;
  Stakeholder?: InputMaybe<StakeholderWhere>;
  Team?: InputMaybe<TeamWhere>;
  User?: InputMaybe<UserWhere>;
  WebDump?: InputMaybe<WebDumpWhere>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createExamples: CreateExamplesMutationResponse;
  createGeographics: CreateGeographicsMutationResponse;
  createOrganizationStatuses: CreateOrganizationStatusesMutationResponse;
  createOrganizations: CreateOrganizationsMutationResponse;
  createQuestions: CreateQuestionsMutationResponse;
  createRipples: CreateRipplesMutationResponse;
  createScopes: CreateScopesMutationResponse;
  createStakeholders: CreateStakeholdersMutationResponse;
  createTeams: CreateTeamsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  createWebDumps: CreateWebDumpsMutationResponse;
  deleteExamples: DeleteInfo;
  deleteGeographics: DeleteInfo;
  deleteOrganizationStatuses: DeleteInfo;
  deleteOrganizations: DeleteInfo;
  deleteQuestions: DeleteInfo;
  deleteRipples: DeleteInfo;
  deleteScopes: DeleteInfo;
  deleteStakeholders: DeleteInfo;
  deleteTeams: DeleteInfo;
  deleteUsers: DeleteInfo;
  deleteWebDumps: DeleteInfo;
  updateExamples: UpdateExamplesMutationResponse;
  updateGeographics: UpdateGeographicsMutationResponse;
  updateOrganizationStatuses: UpdateOrganizationStatusesMutationResponse;
  updateOrganizations: UpdateOrganizationsMutationResponse;
  updateQuestions: UpdateQuestionsMutationResponse;
  updateRipples: UpdateRipplesMutationResponse;
  updateScopes: UpdateScopesMutationResponse;
  updateStakeholders: UpdateStakeholdersMutationResponse;
  updateTeams: UpdateTeamsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
  updateWebDumps: UpdateWebDumpsMutationResponse;
};


export type MutationCreateExamplesArgs = {
  input: Array<ExampleCreateInput>;
};


export type MutationCreateGeographicsArgs = {
  input: Array<GeographicCreateInput>;
};


export type MutationCreateOrganizationStatusesArgs = {
  input: Array<OrganizationStatusCreateInput>;
};


export type MutationCreateOrganizationsArgs = {
  input: Array<OrganizationCreateInput>;
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


export type MutationCreateTeamsArgs = {
  input: Array<TeamCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationCreateWebDumpsArgs = {
  input: Array<WebDumpCreateInput>;
};


export type MutationDeleteExamplesArgs = {
  delete?: InputMaybe<ExampleDeleteInput>;
  where?: InputMaybe<ExampleWhere>;
};


export type MutationDeleteGeographicsArgs = {
  delete?: InputMaybe<GeographicDeleteInput>;
  where?: InputMaybe<GeographicWhere>;
};


export type MutationDeleteOrganizationStatusesArgs = {
  delete?: InputMaybe<OrganizationStatusDeleteInput>;
  where?: InputMaybe<OrganizationStatusWhere>;
};


export type MutationDeleteOrganizationsArgs = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<OrganizationWhere>;
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


export type MutationDeleteTeamsArgs = {
  delete?: InputMaybe<TeamDeleteInput>;
  where?: InputMaybe<TeamWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationDeleteWebDumpsArgs = {
  delete?: InputMaybe<WebDumpDeleteInput>;
  where?: InputMaybe<WebDumpWhere>;
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


export type MutationUpdateOrganizationStatusesArgs = {
  connect?: InputMaybe<OrganizationStatusConnectInput>;
  connectOrCreate?: InputMaybe<OrganizationStatusConnectOrCreateInput>;
  create?: InputMaybe<OrganizationStatusRelationInput>;
  delete?: InputMaybe<OrganizationStatusDeleteInput>;
  disconnect?: InputMaybe<OrganizationStatusDisconnectInput>;
  update?: InputMaybe<OrganizationStatusUpdateInput>;
  where?: InputMaybe<OrganizationStatusWhere>;
};


export type MutationUpdateOrganizationsArgs = {
  connect?: InputMaybe<OrganizationConnectInput>;
  connectOrCreate?: InputMaybe<OrganizationConnectOrCreateInput>;
  create?: InputMaybe<OrganizationRelationInput>;
  delete?: InputMaybe<OrganizationDeleteInput>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  update?: InputMaybe<OrganizationUpdateInput>;
  where?: InputMaybe<OrganizationWhere>;
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


export type MutationUpdateTeamsArgs = {
  connect?: InputMaybe<TeamConnectInput>;
  connectOrCreate?: InputMaybe<TeamConnectOrCreateInput>;
  create?: InputMaybe<TeamRelationInput>;
  delete?: InputMaybe<TeamDeleteInput>;
  disconnect?: InputMaybe<TeamDisconnectInput>;
  update?: InputMaybe<TeamUpdateInput>;
  where?: InputMaybe<TeamWhere>;
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

export type Organization = {
  __typename?: 'Organization';
  brief: Scalars['String']['output'];
  considerations: Array<OrganizationConsideration>;
  considerationsConnection: OrganizationConsiderationsConnection;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  ripples: Array<Ripple>;
  ripplesAggregate?: Maybe<OrganizationRippleRipplesAggregationSelection>;
  ripplesConnection: OrganizationRipplesConnection;
  scopes: Array<Scope>;
  scopesAggregate?: Maybe<OrganizationScopeScopesAggregationSelection>;
  scopesConnection: OrganizationScopesConnection;
  statuses: Array<OrganizationStatus>;
  statusesAggregate?: Maybe<OrganizationOrganizationStatusStatusesAggregationSelection>;
  statusesConnection: OrganizationStatusesConnection;
  users: Array<User>;
  usersAggregate?: Maybe<OrganizationUserUsersAggregationSelection>;
  usersConnection: OrganizationUsersConnection;
  verified: Scalars['Boolean']['output'];
  website: Scalars['String']['output'];
};


export type OrganizationConsiderationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<OrganizationConsiderationWhere>;
};


export type OrganizationConsiderationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrganizationConsiderationsConnectionWhere>;
};


export type OrganizationRipplesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RippleOptions>;
  where?: InputMaybe<RippleWhere>;
};


export type OrganizationRipplesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RippleWhere>;
};


export type OrganizationRipplesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationRipplesConnectionSort>>;
  where?: InputMaybe<OrganizationRipplesConnectionWhere>;
};


export type OrganizationScopesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ScopeOptions>;
  where?: InputMaybe<ScopeWhere>;
};


export type OrganizationScopesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ScopeWhere>;
};


export type OrganizationScopesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationScopesConnectionSort>>;
  where?: InputMaybe<OrganizationScopesConnectionWhere>;
};


export type OrganizationStatusesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationStatusOptions>;
  where?: InputMaybe<OrganizationStatusWhere>;
};


export type OrganizationStatusesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationStatusWhere>;
};


export type OrganizationStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationStatusesConnectionSort>>;
  where?: InputMaybe<OrganizationStatusesConnectionWhere>;
};


export type OrganizationUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type OrganizationUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type OrganizationUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationUsersConnectionSort>>;
  where?: InputMaybe<OrganizationUsersConnectionWhere>;
};

export type OrganizationAggregateSelection = {
  __typename?: 'OrganizationAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNonNullable;
};

export type OrganizationConnectInput = {
  considerations?: InputMaybe<OrganizationConsiderationsConnectInput>;
  ripples?: InputMaybe<Array<OrganizationRipplesConnectFieldInput>>;
  scopes?: InputMaybe<Array<OrganizationScopesConnectFieldInput>>;
  statuses?: InputMaybe<Array<OrganizationStatusesConnectFieldInput>>;
  users?: InputMaybe<Array<OrganizationUsersConnectFieldInput>>;
};

export type OrganizationConnectOrCreateInput = {
  considerations?: InputMaybe<OrganizationConsiderationsConnectOrCreateInput>;
  ripples?: InputMaybe<Array<OrganizationRipplesConnectOrCreateFieldInput>>;
  scopes?: InputMaybe<Array<OrganizationScopesConnectOrCreateFieldInput>>;
  statuses?: InputMaybe<Array<OrganizationStatusesConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<OrganizationUsersConnectOrCreateFieldInput>>;
};

export type OrganizationConnectOrCreateWhere = {
  node: OrganizationUniqueWhere;
};

export type OrganizationConnectWhere = {
  node: OrganizationWhere;
};

export type OrganizationConsideration = Geographic | Stakeholder | Team | WebDump;

export type OrganizationConsiderationWhere = {
  Geographic?: InputMaybe<GeographicWhere>;
  Stakeholder?: InputMaybe<StakeholderWhere>;
  Team?: InputMaybe<TeamWhere>;
  WebDump?: InputMaybe<WebDumpWhere>;
};

export type OrganizationConsiderationsConnectInput = {
  Geographic?: InputMaybe<Array<OrganizationConsiderationsGeographicConnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<OrganizationConsiderationsStakeholderConnectFieldInput>>;
  Team?: InputMaybe<Array<OrganizationConsiderationsTeamConnectFieldInput>>;
  WebDump?: InputMaybe<Array<OrganizationConsiderationsWebDumpConnectFieldInput>>;
};

export type OrganizationConsiderationsConnectOrCreateInput = {
  Geographic?: InputMaybe<Array<OrganizationConsiderationsGeographicConnectOrCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<OrganizationConsiderationsStakeholderConnectOrCreateFieldInput>>;
  Team?: InputMaybe<Array<OrganizationConsiderationsTeamConnectOrCreateFieldInput>>;
  WebDump?: InputMaybe<Array<OrganizationConsiderationsWebDumpConnectOrCreateFieldInput>>;
};

export type OrganizationConsiderationsConnection = {
  __typename?: 'OrganizationConsiderationsConnection';
  edges: Array<OrganizationConsiderationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationConsiderationsConnectionWhere = {
  Geographic?: InputMaybe<OrganizationConsiderationsGeographicConnectionWhere>;
  Stakeholder?: InputMaybe<OrganizationConsiderationsStakeholderConnectionWhere>;
  Team?: InputMaybe<OrganizationConsiderationsTeamConnectionWhere>;
  WebDump?: InputMaybe<OrganizationConsiderationsWebDumpConnectionWhere>;
};

export type OrganizationConsiderationsCreateFieldInput = {
  Geographic?: InputMaybe<Array<OrganizationConsiderationsGeographicCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<OrganizationConsiderationsStakeholderCreateFieldInput>>;
  Team?: InputMaybe<Array<OrganizationConsiderationsTeamCreateFieldInput>>;
  WebDump?: InputMaybe<Array<OrganizationConsiderationsWebDumpCreateFieldInput>>;
};

export type OrganizationConsiderationsCreateInput = {
  Geographic?: InputMaybe<OrganizationConsiderationsGeographicFieldInput>;
  Stakeholder?: InputMaybe<OrganizationConsiderationsStakeholderFieldInput>;
  Team?: InputMaybe<OrganizationConsiderationsTeamFieldInput>;
  WebDump?: InputMaybe<OrganizationConsiderationsWebDumpFieldInput>;
};

export type OrganizationConsiderationsDeleteInput = {
  Geographic?: InputMaybe<Array<OrganizationConsiderationsGeographicDeleteFieldInput>>;
  Stakeholder?: InputMaybe<Array<OrganizationConsiderationsStakeholderDeleteFieldInput>>;
  Team?: InputMaybe<Array<OrganizationConsiderationsTeamDeleteFieldInput>>;
  WebDump?: InputMaybe<Array<OrganizationConsiderationsWebDumpDeleteFieldInput>>;
};

export type OrganizationConsiderationsDisconnectInput = {
  Geographic?: InputMaybe<Array<OrganizationConsiderationsGeographicDisconnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<OrganizationConsiderationsStakeholderDisconnectFieldInput>>;
  Team?: InputMaybe<Array<OrganizationConsiderationsTeamDisconnectFieldInput>>;
  WebDump?: InputMaybe<Array<OrganizationConsiderationsWebDumpDisconnectFieldInput>>;
};

export type OrganizationConsiderationsGeographicConnectFieldInput = {
  connect?: InputMaybe<Array<GeographicConnectInput>>;
  where?: InputMaybe<GeographicConnectWhere>;
};

export type OrganizationConsiderationsGeographicConnectOrCreateFieldInput = {
  onCreate: OrganizationConsiderationsGeographicConnectOrCreateFieldInputOnCreate;
  where: GeographicConnectOrCreateWhere;
};

export type OrganizationConsiderationsGeographicConnectOrCreateFieldInputOnCreate = {
  node: GeographicOnCreateInput;
};

export type OrganizationConsiderationsGeographicConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationConsiderationsGeographicConnectionWhere>>;
  NOT?: InputMaybe<OrganizationConsiderationsGeographicConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationConsiderationsGeographicConnectionWhere>>;
  node?: InputMaybe<GeographicWhere>;
};

export type OrganizationConsiderationsGeographicCreateFieldInput = {
  node: GeographicCreateInput;
};

export type OrganizationConsiderationsGeographicDeleteFieldInput = {
  delete?: InputMaybe<GeographicDeleteInput>;
  where?: InputMaybe<OrganizationConsiderationsGeographicConnectionWhere>;
};

export type OrganizationConsiderationsGeographicDisconnectFieldInput = {
  disconnect?: InputMaybe<GeographicDisconnectInput>;
  where?: InputMaybe<OrganizationConsiderationsGeographicConnectionWhere>;
};

export type OrganizationConsiderationsGeographicFieldInput = {
  connect?: InputMaybe<Array<OrganizationConsiderationsGeographicConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationConsiderationsGeographicConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationConsiderationsGeographicCreateFieldInput>>;
};

export type OrganizationConsiderationsGeographicUpdateConnectionInput = {
  node?: InputMaybe<GeographicUpdateInput>;
};

export type OrganizationConsiderationsGeographicUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationConsiderationsGeographicConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationConsiderationsGeographicConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationConsiderationsGeographicCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationConsiderationsGeographicDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationConsiderationsGeographicDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationConsiderationsGeographicUpdateConnectionInput>;
  where?: InputMaybe<OrganizationConsiderationsGeographicConnectionWhere>;
};

export type OrganizationConsiderationsRelationship = {
  __typename?: 'OrganizationConsiderationsRelationship';
  cursor: Scalars['String']['output'];
  node: OrganizationConsideration;
};

export type OrganizationConsiderationsStakeholderConnectFieldInput = {
  connect?: InputMaybe<Array<StakeholderConnectInput>>;
  where?: InputMaybe<StakeholderConnectWhere>;
};

export type OrganizationConsiderationsStakeholderConnectOrCreateFieldInput = {
  onCreate: OrganizationConsiderationsStakeholderConnectOrCreateFieldInputOnCreate;
  where: StakeholderConnectOrCreateWhere;
};

export type OrganizationConsiderationsStakeholderConnectOrCreateFieldInputOnCreate = {
  node: StakeholderOnCreateInput;
};

export type OrganizationConsiderationsStakeholderConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationConsiderationsStakeholderConnectionWhere>>;
  NOT?: InputMaybe<OrganizationConsiderationsStakeholderConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationConsiderationsStakeholderConnectionWhere>>;
  node?: InputMaybe<StakeholderWhere>;
};

export type OrganizationConsiderationsStakeholderCreateFieldInput = {
  node: StakeholderCreateInput;
};

export type OrganizationConsiderationsStakeholderDeleteFieldInput = {
  delete?: InputMaybe<StakeholderDeleteInput>;
  where?: InputMaybe<OrganizationConsiderationsStakeholderConnectionWhere>;
};

export type OrganizationConsiderationsStakeholderDisconnectFieldInput = {
  disconnect?: InputMaybe<StakeholderDisconnectInput>;
  where?: InputMaybe<OrganizationConsiderationsStakeholderConnectionWhere>;
};

export type OrganizationConsiderationsStakeholderFieldInput = {
  connect?: InputMaybe<Array<OrganizationConsiderationsStakeholderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationConsiderationsStakeholderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationConsiderationsStakeholderCreateFieldInput>>;
};

export type OrganizationConsiderationsStakeholderUpdateConnectionInput = {
  node?: InputMaybe<StakeholderUpdateInput>;
};

export type OrganizationConsiderationsStakeholderUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationConsiderationsStakeholderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationConsiderationsStakeholderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationConsiderationsStakeholderCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationConsiderationsStakeholderDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationConsiderationsStakeholderDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationConsiderationsStakeholderUpdateConnectionInput>;
  where?: InputMaybe<OrganizationConsiderationsStakeholderConnectionWhere>;
};

export type OrganizationConsiderationsTeamConnectFieldInput = {
  connect?: InputMaybe<Array<TeamConnectInput>>;
  where?: InputMaybe<TeamConnectWhere>;
};

export type OrganizationConsiderationsTeamConnectOrCreateFieldInput = {
  onCreate: OrganizationConsiderationsTeamConnectOrCreateFieldInputOnCreate;
  where: TeamConnectOrCreateWhere;
};

export type OrganizationConsiderationsTeamConnectOrCreateFieldInputOnCreate = {
  node: TeamOnCreateInput;
};

export type OrganizationConsiderationsTeamConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationConsiderationsTeamConnectionWhere>>;
  NOT?: InputMaybe<OrganizationConsiderationsTeamConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationConsiderationsTeamConnectionWhere>>;
  node?: InputMaybe<TeamWhere>;
};

export type OrganizationConsiderationsTeamCreateFieldInput = {
  node: TeamCreateInput;
};

export type OrganizationConsiderationsTeamDeleteFieldInput = {
  delete?: InputMaybe<TeamDeleteInput>;
  where?: InputMaybe<OrganizationConsiderationsTeamConnectionWhere>;
};

export type OrganizationConsiderationsTeamDisconnectFieldInput = {
  disconnect?: InputMaybe<TeamDisconnectInput>;
  where?: InputMaybe<OrganizationConsiderationsTeamConnectionWhere>;
};

export type OrganizationConsiderationsTeamFieldInput = {
  connect?: InputMaybe<Array<OrganizationConsiderationsTeamConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationConsiderationsTeamConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationConsiderationsTeamCreateFieldInput>>;
};

export type OrganizationConsiderationsTeamUpdateConnectionInput = {
  node?: InputMaybe<TeamUpdateInput>;
};

export type OrganizationConsiderationsTeamUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationConsiderationsTeamConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationConsiderationsTeamConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationConsiderationsTeamCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationConsiderationsTeamDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationConsiderationsTeamDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationConsiderationsTeamUpdateConnectionInput>;
  where?: InputMaybe<OrganizationConsiderationsTeamConnectionWhere>;
};

export type OrganizationConsiderationsUpdateInput = {
  Geographic?: InputMaybe<Array<OrganizationConsiderationsGeographicUpdateFieldInput>>;
  Stakeholder?: InputMaybe<Array<OrganizationConsiderationsStakeholderUpdateFieldInput>>;
  Team?: InputMaybe<Array<OrganizationConsiderationsTeamUpdateFieldInput>>;
  WebDump?: InputMaybe<Array<OrganizationConsiderationsWebDumpUpdateFieldInput>>;
};

export type OrganizationConsiderationsWebDumpConnectFieldInput = {
  connect?: InputMaybe<Array<WebDumpConnectInput>>;
  where?: InputMaybe<WebDumpConnectWhere>;
};

export type OrganizationConsiderationsWebDumpConnectOrCreateFieldInput = {
  onCreate: OrganizationConsiderationsWebDumpConnectOrCreateFieldInputOnCreate;
  where: WebDumpConnectOrCreateWhere;
};

export type OrganizationConsiderationsWebDumpConnectOrCreateFieldInputOnCreate = {
  node: WebDumpOnCreateInput;
};

export type OrganizationConsiderationsWebDumpConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationConsiderationsWebDumpConnectionWhere>>;
  NOT?: InputMaybe<OrganizationConsiderationsWebDumpConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationConsiderationsWebDumpConnectionWhere>>;
  node?: InputMaybe<WebDumpWhere>;
};

export type OrganizationConsiderationsWebDumpCreateFieldInput = {
  node: WebDumpCreateInput;
};

export type OrganizationConsiderationsWebDumpDeleteFieldInput = {
  delete?: InputMaybe<WebDumpDeleteInput>;
  where?: InputMaybe<OrganizationConsiderationsWebDumpConnectionWhere>;
};

export type OrganizationConsiderationsWebDumpDisconnectFieldInput = {
  disconnect?: InputMaybe<WebDumpDisconnectInput>;
  where?: InputMaybe<OrganizationConsiderationsWebDumpConnectionWhere>;
};

export type OrganizationConsiderationsWebDumpFieldInput = {
  connect?: InputMaybe<Array<OrganizationConsiderationsWebDumpConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationConsiderationsWebDumpConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationConsiderationsWebDumpCreateFieldInput>>;
};

export type OrganizationConsiderationsWebDumpUpdateConnectionInput = {
  node?: InputMaybe<WebDumpUpdateInput>;
};

export type OrganizationConsiderationsWebDumpUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationConsiderationsWebDumpConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationConsiderationsWebDumpConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationConsiderationsWebDumpCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationConsiderationsWebDumpDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationConsiderationsWebDumpDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationConsiderationsWebDumpUpdateConnectionInput>;
  where?: InputMaybe<OrganizationConsiderationsWebDumpConnectionWhere>;
};

export type OrganizationCreateInput = {
  brief: Scalars['String']['input'];
  considerations?: InputMaybe<OrganizationConsiderationsCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ripples?: InputMaybe<OrganizationRipplesFieldInput>;
  scopes?: InputMaybe<OrganizationScopesFieldInput>;
  statuses?: InputMaybe<OrganizationStatusesFieldInput>;
  users?: InputMaybe<OrganizationUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
  website: Scalars['String']['input'];
};

export type OrganizationCreates = {
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  reason: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type OrganizationCreatesCreateInput = {
  aspect: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type OrganizationCreatesSort = {
  aspect?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  reason?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type OrganizationCreatesUpdateInput = {
  aspect?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrganizationCreatesWhere = {
  AND?: InputMaybe<Array<OrganizationCreatesWhere>>;
  NOT?: InputMaybe<OrganizationCreatesWhere>;
  OR?: InputMaybe<Array<OrganizationCreatesWhere>>;
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

export type OrganizationDeleteInput = {
  considerations?: InputMaybe<OrganizationConsiderationsDeleteInput>;
  ripples?: InputMaybe<Array<OrganizationRipplesDeleteFieldInput>>;
  scopes?: InputMaybe<Array<OrganizationScopesDeleteFieldInput>>;
  statuses?: InputMaybe<Array<OrganizationStatusesDeleteFieldInput>>;
  users?: InputMaybe<Array<OrganizationUsersDeleteFieldInput>>;
};

export type OrganizationDisconnectInput = {
  considerations?: InputMaybe<OrganizationConsiderationsDisconnectInput>;
  ripples?: InputMaybe<Array<OrganizationRipplesDisconnectFieldInput>>;
  scopes?: InputMaybe<Array<OrganizationScopesDisconnectFieldInput>>;
  statuses?: InputMaybe<Array<OrganizationStatusesDisconnectFieldInput>>;
  users?: InputMaybe<Array<OrganizationUsersDisconnectFieldInput>>;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type OrganizationHasStatus = {
  createdAt: Scalars['DateTime']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type OrganizationHasStatusCreateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationHasStatusSort = {
  createdAt?: InputMaybe<SortDirection>;
  dump?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
};

export type OrganizationHasStatusUpdateInput = {
  dump?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationHasStatusWhere = {
  AND?: InputMaybe<Array<OrganizationHasStatusWhere>>;
  NOT?: InputMaybe<OrganizationHasStatusWhere>;
  OR?: InputMaybe<Array<OrganizationHasStatusWhere>>;
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

export type OrganizationOnCreateInput = {
  brief: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
  website: Scalars['String']['input'];
};

export type OrganizationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more OrganizationSort objects to sort Organizations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OrganizationSort>>;
};

export type OrganizationOrganizationStatusStatusesAggregationSelection = {
  __typename?: 'OrganizationOrganizationStatusStatusesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<OrganizationOrganizationStatusStatusesEdgeAggregateSelection>;
  node?: Maybe<OrganizationOrganizationStatusStatusesNodeAggregateSelection>;
};

export type OrganizationOrganizationStatusStatusesEdgeAggregateSelection = {
  __typename?: 'OrganizationOrganizationStatusStatusesEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type OrganizationOrganizationStatusStatusesNodeAggregateSelection = {
  __typename?: 'OrganizationOrganizationStatusStatusesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
};

export type OrganizationRelationInput = {
  considerations?: InputMaybe<OrganizationConsiderationsCreateFieldInput>;
  ripples?: InputMaybe<Array<OrganizationRipplesCreateFieldInput>>;
  scopes?: InputMaybe<Array<OrganizationScopesCreateFieldInput>>;
  statuses?: InputMaybe<Array<OrganizationStatusesCreateFieldInput>>;
  users?: InputMaybe<Array<OrganizationUsersCreateFieldInput>>;
};

export type OrganizationRippleRipplesAggregationSelection = {
  __typename?: 'OrganizationRippleRipplesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<OrganizationRippleRipplesEdgeAggregateSelection>;
  node?: Maybe<OrganizationRippleRipplesNodeAggregateSelection>;
};

export type OrganizationRippleRipplesEdgeAggregateSelection = {
  __typename?: 'OrganizationRippleRipplesEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
};

export type OrganizationRippleRipplesNodeAggregateSelection = {
  __typename?: 'OrganizationRippleRipplesNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

export type OrganizationRipplesAggregateInput = {
  AND?: InputMaybe<Array<OrganizationRipplesAggregateInput>>;
  NOT?: InputMaybe<OrganizationRipplesAggregateInput>;
  OR?: InputMaybe<Array<OrganizationRipplesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<OrganizationRipplesEdgeAggregationWhereInput>;
  node?: InputMaybe<OrganizationRipplesNodeAggregationWhereInput>;
};

export type OrganizationRipplesConnectFieldInput = {
  connect?: InputMaybe<Array<RippleConnectInput>>;
  edge: OrganizationCreatesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RippleConnectWhere>;
};

export type OrganizationRipplesConnectOrCreateFieldInput = {
  onCreate: OrganizationRipplesConnectOrCreateFieldInputOnCreate;
  where: RippleConnectOrCreateWhere;
};

export type OrganizationRipplesConnectOrCreateFieldInputOnCreate = {
  edge: OrganizationCreatesCreateInput;
  node: RippleOnCreateInput;
};

export type OrganizationRipplesConnection = {
  __typename?: 'OrganizationRipplesConnection';
  edges: Array<OrganizationRipplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationRipplesConnectionSort = {
  edge?: InputMaybe<OrganizationCreatesSort>;
  node?: InputMaybe<RippleSort>;
};

export type OrganizationRipplesConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationRipplesConnectionWhere>>;
  NOT?: InputMaybe<OrganizationRipplesConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationRipplesConnectionWhere>>;
  edge?: InputMaybe<OrganizationCreatesWhere>;
  node?: InputMaybe<RippleWhere>;
};

export type OrganizationRipplesCreateFieldInput = {
  edge: OrganizationCreatesCreateInput;
  node: RippleCreateInput;
};

export type OrganizationRipplesDeleteFieldInput = {
  delete?: InputMaybe<RippleDeleteInput>;
  where?: InputMaybe<OrganizationRipplesConnectionWhere>;
};

export type OrganizationRipplesDisconnectFieldInput = {
  disconnect?: InputMaybe<RippleDisconnectInput>;
  where?: InputMaybe<OrganizationRipplesConnectionWhere>;
};

export type OrganizationRipplesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationRipplesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationRipplesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationRipplesEdgeAggregationWhereInput>>;
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

export type OrganizationRipplesFieldInput = {
  connect?: InputMaybe<Array<OrganizationRipplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationRipplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationRipplesCreateFieldInput>>;
};

export type OrganizationRipplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationRipplesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationRipplesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationRipplesNodeAggregationWhereInput>>;
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

export type OrganizationRipplesRelationship = OrganizationCreates & {
  __typename?: 'OrganizationRipplesRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Ripple;
  reason: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type OrganizationRipplesUpdateConnectionInput = {
  edge?: InputMaybe<OrganizationCreatesUpdateInput>;
  node?: InputMaybe<RippleUpdateInput>;
};

export type OrganizationRipplesUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationRipplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationRipplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationRipplesCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationRipplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationRipplesDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationRipplesUpdateConnectionInput>;
  where?: InputMaybe<OrganizationRipplesConnectionWhere>;
};

export type OrganizationScopeScopesAggregationSelection = {
  __typename?: 'OrganizationScopeScopesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<OrganizationScopeScopesEdgeAggregateSelection>;
  node?: Maybe<OrganizationScopeScopesNodeAggregateSelection>;
};

export type OrganizationScopeScopesEdgeAggregateSelection = {
  __typename?: 'OrganizationScopeScopesEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
};

export type OrganizationScopeScopesNodeAggregateSelection = {
  __typename?: 'OrganizationScopeScopesNodeAggregateSelection';
  basis: StringAggregateSelectionNullable;
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type OrganizationScopesAggregateInput = {
  AND?: InputMaybe<Array<OrganizationScopesAggregateInput>>;
  NOT?: InputMaybe<OrganizationScopesAggregateInput>;
  OR?: InputMaybe<Array<OrganizationScopesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<OrganizationScopesEdgeAggregationWhereInput>;
  node?: InputMaybe<OrganizationScopesNodeAggregationWhereInput>;
};

export type OrganizationScopesConnectFieldInput = {
  connect?: InputMaybe<Array<ScopeConnectInput>>;
  edge: OrganizationTouchesScopeCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ScopeConnectWhere>;
};

export type OrganizationScopesConnectOrCreateFieldInput = {
  onCreate: OrganizationScopesConnectOrCreateFieldInputOnCreate;
  where: ScopeConnectOrCreateWhere;
};

export type OrganizationScopesConnectOrCreateFieldInputOnCreate = {
  edge: OrganizationTouchesScopeCreateInput;
  node: ScopeOnCreateInput;
};

export type OrganizationScopesConnection = {
  __typename?: 'OrganizationScopesConnection';
  edges: Array<OrganizationScopesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationScopesConnectionSort = {
  edge?: InputMaybe<OrganizationTouchesScopeSort>;
  node?: InputMaybe<ScopeSort>;
};

export type OrganizationScopesConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationScopesConnectionWhere>>;
  NOT?: InputMaybe<OrganizationScopesConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationScopesConnectionWhere>>;
  edge?: InputMaybe<OrganizationTouchesScopeWhere>;
  node?: InputMaybe<ScopeWhere>;
};

export type OrganizationScopesCreateFieldInput = {
  edge: OrganizationTouchesScopeCreateInput;
  node: ScopeCreateInput;
};

export type OrganizationScopesDeleteFieldInput = {
  delete?: InputMaybe<ScopeDeleteInput>;
  where?: InputMaybe<OrganizationScopesConnectionWhere>;
};

export type OrganizationScopesDisconnectFieldInput = {
  disconnect?: InputMaybe<ScopeDisconnectInput>;
  where?: InputMaybe<OrganizationScopesConnectionWhere>;
};

export type OrganizationScopesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationScopesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationScopesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationScopesEdgeAggregationWhereInput>>;
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

export type OrganizationScopesFieldInput = {
  connect?: InputMaybe<Array<OrganizationScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationScopesCreateFieldInput>>;
};

export type OrganizationScopesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationScopesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationScopesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationScopesNodeAggregationWhereInput>>;
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

export type OrganizationScopesRelationship = OrganizationTouchesScope & {
  __typename?: 'OrganizationScopesRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Scope;
  reason: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type OrganizationScopesUpdateConnectionInput = {
  edge?: InputMaybe<OrganizationTouchesScopeUpdateInput>;
  node?: InputMaybe<ScopeUpdateInput>;
};

export type OrganizationScopesUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationScopesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationScopesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationScopesCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationScopesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationScopesDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationScopesUpdateConnectionInput>;
  where?: InputMaybe<OrganizationScopesConnectionWhere>;
};

/** Fields to sort Organizations by. The order in which sorts are applied is not guaranteed when specifying many fields in one OrganizationSort object. */
export type OrganizationSort = {
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  website?: InputMaybe<SortDirection>;
};

export type OrganizationStatus = {
  __typename?: 'OrganizationStatus';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: OrganizationStatusName;
  organizations: Array<Organization>;
  organizationsAggregate?: Maybe<OrganizationStatusOrganizationOrganizationsAggregationSelection>;
  organizationsConnection: OrganizationStatusOrganizationsConnection;
  verified: Scalars['Boolean']['output'];
};


export type OrganizationStatusOrganizationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type OrganizationStatusOrganizationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type OrganizationStatusOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationStatusOrganizationsConnectionSort>>;
  where?: InputMaybe<OrganizationStatusOrganizationsConnectionWhere>;
};

export type OrganizationStatusAggregateSelection = {
  __typename?: 'OrganizationStatusAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
};

export type OrganizationStatusConnectInput = {
  organizations?: InputMaybe<Array<OrganizationStatusOrganizationsConnectFieldInput>>;
};

export type OrganizationStatusConnectOrCreateInput = {
  organizations?: InputMaybe<Array<OrganizationStatusOrganizationsConnectOrCreateFieldInput>>;
};

export type OrganizationStatusConnectOrCreateWhere = {
  node: OrganizationStatusUniqueWhere;
};

export type OrganizationStatusConnectWhere = {
  node: OrganizationStatusWhere;
};

export type OrganizationStatusCreateInput = {
  name: OrganizationStatusName;
  organizations?: InputMaybe<OrganizationStatusOrganizationsFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type OrganizationStatusDeleteInput = {
  organizations?: InputMaybe<Array<OrganizationStatusOrganizationsDeleteFieldInput>>;
};

export type OrganizationStatusDisconnectInput = {
  organizations?: InputMaybe<Array<OrganizationStatusOrganizationsDisconnectFieldInput>>;
};

export type OrganizationStatusEdge = {
  __typename?: 'OrganizationStatusEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationStatus;
};

export enum OrganizationStatusName {
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

export type OrganizationStatusOnCreateInput = {
  name: OrganizationStatusName;
  verified?: Scalars['Boolean']['input'];
};

export type OrganizationStatusOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more OrganizationStatusSort objects to sort OrganizationStatuses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OrganizationStatusSort>>;
};

export type OrganizationStatusOrganizationOrganizationsAggregationSelection = {
  __typename?: 'OrganizationStatusOrganizationOrganizationsAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<OrganizationStatusOrganizationOrganizationsEdgeAggregateSelection>;
  node?: Maybe<OrganizationStatusOrganizationOrganizationsNodeAggregateSelection>;
};

export type OrganizationStatusOrganizationOrganizationsEdgeAggregateSelection = {
  __typename?: 'OrganizationStatusOrganizationOrganizationsEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type OrganizationStatusOrganizationOrganizationsNodeAggregateSelection = {
  __typename?: 'OrganizationStatusOrganizationOrganizationsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNonNullable;
};

export type OrganizationStatusOrganizationsAggregateInput = {
  AND?: InputMaybe<Array<OrganizationStatusOrganizationsAggregateInput>>;
  NOT?: InputMaybe<OrganizationStatusOrganizationsAggregateInput>;
  OR?: InputMaybe<Array<OrganizationStatusOrganizationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<OrganizationStatusOrganizationsEdgeAggregationWhereInput>;
  node?: InputMaybe<OrganizationStatusOrganizationsNodeAggregationWhereInput>;
};

export type OrganizationStatusOrganizationsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  edge?: InputMaybe<OrganizationHasStatusCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type OrganizationStatusOrganizationsConnectOrCreateFieldInput = {
  onCreate: OrganizationStatusOrganizationsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type OrganizationStatusOrganizationsConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<OrganizationHasStatusCreateInput>;
  node: OrganizationOnCreateInput;
};

export type OrganizationStatusOrganizationsConnection = {
  __typename?: 'OrganizationStatusOrganizationsConnection';
  edges: Array<OrganizationStatusOrganizationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationStatusOrganizationsConnectionSort = {
  edge?: InputMaybe<OrganizationHasStatusSort>;
  node?: InputMaybe<OrganizationSort>;
};

export type OrganizationStatusOrganizationsConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationStatusOrganizationsConnectionWhere>>;
  NOT?: InputMaybe<OrganizationStatusOrganizationsConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationStatusOrganizationsConnectionWhere>>;
  edge?: InputMaybe<OrganizationHasStatusWhere>;
  node?: InputMaybe<OrganizationWhere>;
};

export type OrganizationStatusOrganizationsCreateFieldInput = {
  edge?: InputMaybe<OrganizationHasStatusCreateInput>;
  node: OrganizationCreateInput;
};

export type OrganizationStatusOrganizationsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<OrganizationStatusOrganizationsConnectionWhere>;
};

export type OrganizationStatusOrganizationsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<OrganizationStatusOrganizationsConnectionWhere>;
};

export type OrganizationStatusOrganizationsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationStatusOrganizationsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationStatusOrganizationsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationStatusOrganizationsEdgeAggregationWhereInput>>;
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

export type OrganizationStatusOrganizationsFieldInput = {
  connect?: InputMaybe<Array<OrganizationStatusOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationStatusOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationStatusOrganizationsCreateFieldInput>>;
};

export type OrganizationStatusOrganizationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationStatusOrganizationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationStatusOrganizationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationStatusOrganizationsNodeAggregationWhereInput>>;
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

export type OrganizationStatusOrganizationsRelationship = OrganizationHasStatus & {
  __typename?: 'OrganizationStatusOrganizationsRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: Organization;
};

export type OrganizationStatusOrganizationsUpdateConnectionInput = {
  edge?: InputMaybe<OrganizationHasStatusUpdateInput>;
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type OrganizationStatusOrganizationsUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationStatusOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationStatusOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationStatusOrganizationsCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationStatusOrganizationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationStatusOrganizationsDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationStatusOrganizationsUpdateConnectionInput>;
  where?: InputMaybe<OrganizationStatusOrganizationsConnectionWhere>;
};

export type OrganizationStatusRelationInput = {
  organizations?: InputMaybe<Array<OrganizationStatusOrganizationsCreateFieldInput>>;
};

/** Fields to sort OrganizationStatuses by. The order in which sorts are applied is not guaranteed when specifying many fields in one OrganizationStatusSort object. */
export type OrganizationStatusSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type OrganizationStatusUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<OrganizationStatusName>;
};

export type OrganizationStatusUpdateInput = {
  name?: InputMaybe<OrganizationStatusName>;
  organizations?: InputMaybe<Array<OrganizationStatusOrganizationsUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrganizationStatusWhere = {
  AND?: InputMaybe<Array<OrganizationStatusWhere>>;
  NOT?: InputMaybe<OrganizationStatusWhere>;
  OR?: InputMaybe<Array<OrganizationStatusWhere>>;
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
  name?: InputMaybe<OrganizationStatusName>;
  name_IN?: InputMaybe<Array<OrganizationStatusName>>;
  organizationsAggregate?: InputMaybe<OrganizationStatusOrganizationsAggregateInput>;
  /** Return OrganizationStatuses where all of the related OrganizationStatusOrganizationsConnections match this filter */
  organizationsConnection_ALL?: InputMaybe<OrganizationStatusOrganizationsConnectionWhere>;
  /** Return OrganizationStatuses where none of the related OrganizationStatusOrganizationsConnections match this filter */
  organizationsConnection_NONE?: InputMaybe<OrganizationStatusOrganizationsConnectionWhere>;
  /** Return OrganizationStatuses where one of the related OrganizationStatusOrganizationsConnections match this filter */
  organizationsConnection_SINGLE?: InputMaybe<OrganizationStatusOrganizationsConnectionWhere>;
  /** Return OrganizationStatuses where some of the related OrganizationStatusOrganizationsConnections match this filter */
  organizationsConnection_SOME?: InputMaybe<OrganizationStatusOrganizationsConnectionWhere>;
  /** Return OrganizationStatuses where all of the related Organizations match this filter */
  organizations_ALL?: InputMaybe<OrganizationWhere>;
  /** Return OrganizationStatuses where none of the related Organizations match this filter */
  organizations_NONE?: InputMaybe<OrganizationWhere>;
  /** Return OrganizationStatuses where one of the related Organizations match this filter */
  organizations_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return OrganizationStatuses where some of the related Organizations match this filter */
  organizations_SOME?: InputMaybe<OrganizationWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrganizationStatusesAggregateInput = {
  AND?: InputMaybe<Array<OrganizationStatusesAggregateInput>>;
  NOT?: InputMaybe<OrganizationStatusesAggregateInput>;
  OR?: InputMaybe<Array<OrganizationStatusesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<OrganizationStatusesEdgeAggregationWhereInput>;
  node?: InputMaybe<OrganizationStatusesNodeAggregationWhereInput>;
};

export type OrganizationStatusesConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationStatusConnectInput>>;
  edge?: InputMaybe<OrganizationHasStatusCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationStatusConnectWhere>;
};

export type OrganizationStatusesConnectOrCreateFieldInput = {
  onCreate: OrganizationStatusesConnectOrCreateFieldInputOnCreate;
  where: OrganizationStatusConnectOrCreateWhere;
};

export type OrganizationStatusesConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<OrganizationHasStatusCreateInput>;
  node: OrganizationStatusOnCreateInput;
};

export type OrganizationStatusesConnection = {
  __typename?: 'OrganizationStatusesConnection';
  edges: Array<OrganizationStatusEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationStatusesConnectionSort = {
  edge?: InputMaybe<OrganizationHasStatusSort>;
  node?: InputMaybe<OrganizationStatusSort>;
};

export type OrganizationStatusesConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationStatusesConnectionWhere>>;
  NOT?: InputMaybe<OrganizationStatusesConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationStatusesConnectionWhere>>;
  edge?: InputMaybe<OrganizationHasStatusWhere>;
  node?: InputMaybe<OrganizationStatusWhere>;
};

export type OrganizationStatusesCreateFieldInput = {
  edge?: InputMaybe<OrganizationHasStatusCreateInput>;
  node: OrganizationStatusCreateInput;
};

export type OrganizationStatusesDeleteFieldInput = {
  delete?: InputMaybe<OrganizationStatusDeleteInput>;
  where?: InputMaybe<OrganizationStatusesConnectionWhere>;
};

export type OrganizationStatusesDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationStatusDisconnectInput>;
  where?: InputMaybe<OrganizationStatusesConnectionWhere>;
};

export type OrganizationStatusesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationStatusesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationStatusesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationStatusesEdgeAggregationWhereInput>>;
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

export type OrganizationStatusesFieldInput = {
  connect?: InputMaybe<Array<OrganizationStatusesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationStatusesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationStatusesCreateFieldInput>>;
};

export type OrganizationStatusesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationStatusesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationStatusesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationStatusesNodeAggregationWhereInput>>;
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

export type OrganizationStatusesUpdateConnectionInput = {
  edge?: InputMaybe<OrganizationHasStatusUpdateInput>;
  node?: InputMaybe<OrganizationStatusUpdateInput>;
};

export type OrganizationStatusesUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationStatusesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationStatusesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationStatusesCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationStatusesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationStatusesDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationStatusesUpdateConnectionInput>;
  where?: InputMaybe<OrganizationStatusesConnectionWhere>;
};

export type OrganizationTouchesScope = {
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  reason: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type OrganizationTouchesScopeCreateInput = {
  aspect: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type OrganizationTouchesScopeSort = {
  aspect?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  reason?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type OrganizationTouchesScopeUpdateInput = {
  aspect?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrganizationTouchesScopeWhere = {
  AND?: InputMaybe<Array<OrganizationTouchesScopeWhere>>;
  NOT?: InputMaybe<OrganizationTouchesScopeWhere>;
  OR?: InputMaybe<Array<OrganizationTouchesScopeWhere>>;
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

export type OrganizationUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  considerations?: InputMaybe<OrganizationConsiderationsUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ripples?: InputMaybe<Array<OrganizationRipplesUpdateFieldInput>>;
  scopes?: InputMaybe<Array<OrganizationScopesUpdateFieldInput>>;
  statuses?: InputMaybe<Array<OrganizationStatusesUpdateFieldInput>>;
  users?: InputMaybe<Array<OrganizationUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationUserUsersAggregationSelection = {
  __typename?: 'OrganizationUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<OrganizationUserUsersEdgeAggregateSelection>;
  node?: Maybe<OrganizationUserUsersNodeAggregateSelection>;
};

export type OrganizationUserUsersEdgeAggregateSelection = {
  __typename?: 'OrganizationUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type OrganizationUserUsersNodeAggregateSelection = {
  __typename?: 'OrganizationUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type OrganizationUsersAggregateInput = {
  AND?: InputMaybe<Array<OrganizationUsersAggregateInput>>;
  NOT?: InputMaybe<OrganizationUsersAggregateInput>;
  OR?: InputMaybe<Array<OrganizationUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<OrganizationUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<OrganizationUsersNodeAggregationWhereInput>;
};

export type OrganizationUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type OrganizationUsersConnectOrCreateFieldInput = {
  onCreate: OrganizationUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type OrganizationUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type OrganizationUsersConnection = {
  __typename?: 'OrganizationUsersConnection';
  edges: Array<OrganizationUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type OrganizationUsersConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationUsersConnectionWhere>>;
  NOT?: InputMaybe<OrganizationUsersConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type OrganizationUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: UserCreateInput;
};

export type OrganizationUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<OrganizationUsersConnectionWhere>;
};

export type OrganizationUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<OrganizationUsersConnectionWhere>;
};

export type OrganizationUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationUsersEdgeAggregationWhereInput>>;
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

export type OrganizationUsersFieldInput = {
  connect?: InputMaybe<Array<OrganizationUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationUsersCreateFieldInput>>;
};

export type OrganizationUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationUsersNodeAggregationWhereInput>>;
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

export type OrganizationUsersRelationship = UserInteractsWith & {
  __typename?: 'OrganizationUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type OrganizationUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type OrganizationUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationUsersDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationUsersUpdateConnectionInput>;
  where?: InputMaybe<OrganizationUsersConnectionWhere>;
};

export type OrganizationWhere = {
  AND?: InputMaybe<Array<OrganizationWhere>>;
  NOT?: InputMaybe<OrganizationWhere>;
  OR?: InputMaybe<Array<OrganizationWhere>>;
  brief?: InputMaybe<Scalars['String']['input']>;
  brief_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  brief_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  brief_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  brief_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  /** Return Organizations where all of the related OrganizationConsiderationsConnections match this filter */
  considerationsConnection_ALL?: InputMaybe<OrganizationConsiderationsConnectionWhere>;
  /** Return Organizations where none of the related OrganizationConsiderationsConnections match this filter */
  considerationsConnection_NONE?: InputMaybe<OrganizationConsiderationsConnectionWhere>;
  /** Return Organizations where one of the related OrganizationConsiderationsConnections match this filter */
  considerationsConnection_SINGLE?: InputMaybe<OrganizationConsiderationsConnectionWhere>;
  /** Return Organizations where some of the related OrganizationConsiderationsConnections match this filter */
  considerationsConnection_SOME?: InputMaybe<OrganizationConsiderationsConnectionWhere>;
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
  ripplesAggregate?: InputMaybe<OrganizationRipplesAggregateInput>;
  /** Return Organizations where all of the related OrganizationRipplesConnections match this filter */
  ripplesConnection_ALL?: InputMaybe<OrganizationRipplesConnectionWhere>;
  /** Return Organizations where none of the related OrganizationRipplesConnections match this filter */
  ripplesConnection_NONE?: InputMaybe<OrganizationRipplesConnectionWhere>;
  /** Return Organizations where one of the related OrganizationRipplesConnections match this filter */
  ripplesConnection_SINGLE?: InputMaybe<OrganizationRipplesConnectionWhere>;
  /** Return Organizations where some of the related OrganizationRipplesConnections match this filter */
  ripplesConnection_SOME?: InputMaybe<OrganizationRipplesConnectionWhere>;
  /** Return Organizations where all of the related Ripples match this filter */
  ripples_ALL?: InputMaybe<RippleWhere>;
  /** Return Organizations where none of the related Ripples match this filter */
  ripples_NONE?: InputMaybe<RippleWhere>;
  /** Return Organizations where one of the related Ripples match this filter */
  ripples_SINGLE?: InputMaybe<RippleWhere>;
  /** Return Organizations where some of the related Ripples match this filter */
  ripples_SOME?: InputMaybe<RippleWhere>;
  scopesAggregate?: InputMaybe<OrganizationScopesAggregateInput>;
  /** Return Organizations where all of the related OrganizationScopesConnections match this filter */
  scopesConnection_ALL?: InputMaybe<OrganizationScopesConnectionWhere>;
  /** Return Organizations where none of the related OrganizationScopesConnections match this filter */
  scopesConnection_NONE?: InputMaybe<OrganizationScopesConnectionWhere>;
  /** Return Organizations where one of the related OrganizationScopesConnections match this filter */
  scopesConnection_SINGLE?: InputMaybe<OrganizationScopesConnectionWhere>;
  /** Return Organizations where some of the related OrganizationScopesConnections match this filter */
  scopesConnection_SOME?: InputMaybe<OrganizationScopesConnectionWhere>;
  /** Return Organizations where all of the related Scopes match this filter */
  scopes_ALL?: InputMaybe<ScopeWhere>;
  /** Return Organizations where none of the related Scopes match this filter */
  scopes_NONE?: InputMaybe<ScopeWhere>;
  /** Return Organizations where one of the related Scopes match this filter */
  scopes_SINGLE?: InputMaybe<ScopeWhere>;
  /** Return Organizations where some of the related Scopes match this filter */
  scopes_SOME?: InputMaybe<ScopeWhere>;
  statusesAggregate?: InputMaybe<OrganizationStatusesAggregateInput>;
  /** Return Organizations where all of the related OrganizationStatusesConnections match this filter */
  statusesConnection_ALL?: InputMaybe<OrganizationStatusesConnectionWhere>;
  /** Return Organizations where none of the related OrganizationStatusesConnections match this filter */
  statusesConnection_NONE?: InputMaybe<OrganizationStatusesConnectionWhere>;
  /** Return Organizations where one of the related OrganizationStatusesConnections match this filter */
  statusesConnection_SINGLE?: InputMaybe<OrganizationStatusesConnectionWhere>;
  /** Return Organizations where some of the related OrganizationStatusesConnections match this filter */
  statusesConnection_SOME?: InputMaybe<OrganizationStatusesConnectionWhere>;
  /** Return Organizations where all of the related OrganizationStatuses match this filter */
  statuses_ALL?: InputMaybe<OrganizationStatusWhere>;
  /** Return Organizations where none of the related OrganizationStatuses match this filter */
  statuses_NONE?: InputMaybe<OrganizationStatusWhere>;
  /** Return Organizations where one of the related OrganizationStatuses match this filter */
  statuses_SINGLE?: InputMaybe<OrganizationStatusWhere>;
  /** Return Organizations where some of the related OrganizationStatuses match this filter */
  statuses_SOME?: InputMaybe<OrganizationStatusWhere>;
  usersAggregate?: InputMaybe<OrganizationUsersAggregateInput>;
  /** Return Organizations where all of the related OrganizationUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<OrganizationUsersConnectionWhere>;
  /** Return Organizations where none of the related OrganizationUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<OrganizationUsersConnectionWhere>;
  /** Return Organizations where one of the related OrganizationUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<OrganizationUsersConnectionWhere>;
  /** Return Organizations where some of the related OrganizationUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<OrganizationUsersConnectionWhere>;
  /** Return Organizations where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Organizations where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Organizations where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Organizations where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  website_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  website_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  website_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  examples: Array<Example>;
  examplesAggregate: ExampleAggregateSelection;
  examplesConnection: ExamplesConnection;
  geographics: Array<Geographic>;
  geographicsAggregate: GeographicAggregateSelection;
  geographicsConnection: GeographicsConnection;
  organizationStatuses: Array<OrganizationStatus>;
  organizationStatusesAggregate: OrganizationStatusAggregateSelection;
  organizationStatusesConnection: OrganizationStatusesConnection;
  organizations: Array<Organization>;
  organizationsAggregate: OrganizationAggregateSelection;
  organizationsConnection: OrganizationsConnection;
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
  teams: Array<Team>;
  teamsAggregate: TeamAggregateSelection;
  teamsConnection: TeamsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
  webDumps: Array<WebDump>;
  webDumpsAggregate: WebDumpAggregateSelection;
  webDumpsConnection: WebDumpsConnection;
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


export type QueryOrganizationStatusesArgs = {
  options?: InputMaybe<OrganizationStatusOptions>;
  where?: InputMaybe<OrganizationStatusWhere>;
};


export type QueryOrganizationStatusesAggregateArgs = {
  where?: InputMaybe<OrganizationStatusWhere>;
};


export type QueryOrganizationStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<OrganizationStatusSort>>>;
  where?: InputMaybe<OrganizationStatusWhere>;
};


export type QueryOrganizationsArgs = {
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryOrganizationsAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<OrganizationSort>>>;
  where?: InputMaybe<OrganizationWhere>;
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


export type QueryTeamsArgs = {
  options?: InputMaybe<TeamOptions>;
  where?: InputMaybe<TeamWhere>;
};


export type QueryTeamsAggregateArgs = {
  where?: InputMaybe<TeamWhere>;
};


export type QueryTeamsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TeamSort>>>;
  where?: InputMaybe<TeamWhere>;
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
  organization: Organization;
  organizationAggregate?: Maybe<RippleOrganizationOrganizationAggregationSelection>;
  organizationConnection: RippleOrganizationConnection;
  scopes: Array<Scope>;
  scopesAggregate?: Maybe<RippleScopeScopesAggregationSelection>;
  scopesConnection: RippleScopesConnection;
  users: Array<User>;
  usersAggregate?: Maybe<RippleUserUsersAggregationSelection>;
  usersConnection: RippleUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type RippleOrganizationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type RippleOrganizationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type RippleOrganizationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RippleOrganizationConnectionSort>>;
  where?: InputMaybe<RippleOrganizationConnectionWhere>;
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
  organization?: InputMaybe<RippleOrganizationConnectFieldInput>;
  scopes?: InputMaybe<Array<RippleScopesConnectFieldInput>>;
  users?: InputMaybe<Array<RippleUsersConnectFieldInput>>;
};

export type RippleConnectOrCreateInput = {
  organization?: InputMaybe<RippleOrganizationConnectOrCreateFieldInput>;
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
  organization?: InputMaybe<RippleOrganizationFieldInput>;
  scopes?: InputMaybe<RippleScopesFieldInput>;
  users?: InputMaybe<RippleUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type RippleDeleteInput = {
  organization?: InputMaybe<RippleOrganizationDeleteFieldInput>;
  scopes?: InputMaybe<Array<RippleScopesDeleteFieldInput>>;
  users?: InputMaybe<Array<RippleUsersDeleteFieldInput>>;
};

export type RippleDisconnectInput = {
  organization?: InputMaybe<RippleOrganizationDisconnectFieldInput>;
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

export type RippleOrganizationAggregateInput = {
  AND?: InputMaybe<Array<RippleOrganizationAggregateInput>>;
  NOT?: InputMaybe<RippleOrganizationAggregateInput>;
  OR?: InputMaybe<Array<RippleOrganizationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<RippleOrganizationEdgeAggregationWhereInput>;
  node?: InputMaybe<RippleOrganizationNodeAggregationWhereInput>;
};

export type RippleOrganizationConnectFieldInput = {
  connect?: InputMaybe<OrganizationConnectInput>;
  edge: OrganizationCreatesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type RippleOrganizationConnectOrCreateFieldInput = {
  onCreate: RippleOrganizationConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type RippleOrganizationConnectOrCreateFieldInputOnCreate = {
  edge: OrganizationCreatesCreateInput;
  node: OrganizationOnCreateInput;
};

export type RippleOrganizationConnection = {
  __typename?: 'RippleOrganizationConnection';
  edges: Array<RippleOrganizationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RippleOrganizationConnectionSort = {
  edge?: InputMaybe<OrganizationCreatesSort>;
  node?: InputMaybe<OrganizationSort>;
};

export type RippleOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<RippleOrganizationConnectionWhere>>;
  NOT?: InputMaybe<RippleOrganizationConnectionWhere>;
  OR?: InputMaybe<Array<RippleOrganizationConnectionWhere>>;
  edge?: InputMaybe<OrganizationCreatesWhere>;
  node?: InputMaybe<OrganizationWhere>;
};

export type RippleOrganizationCreateFieldInput = {
  edge: OrganizationCreatesCreateInput;
  node: OrganizationCreateInput;
};

export type RippleOrganizationDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<RippleOrganizationConnectionWhere>;
};

export type RippleOrganizationDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<RippleOrganizationConnectionWhere>;
};

export type RippleOrganizationEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RippleOrganizationEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RippleOrganizationEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<RippleOrganizationEdgeAggregationWhereInput>>;
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

export type RippleOrganizationFieldInput = {
  connect?: InputMaybe<RippleOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<RippleOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<RippleOrganizationCreateFieldInput>;
};

export type RippleOrganizationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RippleOrganizationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RippleOrganizationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RippleOrganizationNodeAggregationWhereInput>>;
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

export type RippleOrganizationOrganizationAggregationSelection = {
  __typename?: 'RippleOrganizationOrganizationAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<RippleOrganizationOrganizationEdgeAggregateSelection>;
  node?: Maybe<RippleOrganizationOrganizationNodeAggregateSelection>;
};

export type RippleOrganizationOrganizationEdgeAggregateSelection = {
  __typename?: 'RippleOrganizationOrganizationEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
};

export type RippleOrganizationOrganizationNodeAggregateSelection = {
  __typename?: 'RippleOrganizationOrganizationNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNonNullable;
};

export type RippleOrganizationRelationship = OrganizationCreates & {
  __typename?: 'RippleOrganizationRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Organization;
  reason: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type RippleOrganizationUpdateConnectionInput = {
  edge?: InputMaybe<OrganizationCreatesUpdateInput>;
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type RippleOrganizationUpdateFieldInput = {
  connect?: InputMaybe<RippleOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<RippleOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<RippleOrganizationCreateFieldInput>;
  delete?: InputMaybe<RippleOrganizationDeleteFieldInput>;
  disconnect?: InputMaybe<RippleOrganizationDisconnectFieldInput>;
  update?: InputMaybe<RippleOrganizationUpdateConnectionInput>;
  where?: InputMaybe<RippleOrganizationConnectionWhere>;
};

export type RippleRelationInput = {
  organization?: InputMaybe<RippleOrganizationCreateFieldInput>;
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
  organization?: InputMaybe<RippleOrganizationUpdateFieldInput>;
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
  organization?: InputMaybe<OrganizationWhere>;
  organizationAggregate?: InputMaybe<RippleOrganizationAggregateInput>;
  organizationConnection?: InputMaybe<RippleOrganizationConnectionWhere>;
  organizationConnection_NOT?: InputMaybe<RippleOrganizationConnectionWhere>;
  organization_NOT?: InputMaybe<OrganizationWhere>;
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
  organizations: Array<Organization>;
  organizationsAggregate?: Maybe<ScopeOrganizationOrganizationsAggregationSelection>;
  organizationsConnection: ScopeOrganizationsConnection;
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


export type ScopeOrganizationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type ScopeOrganizationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type ScopeOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ScopeOrganizationsConnectionSort>>;
  where?: InputMaybe<ScopeOrganizationsConnectionWhere>;
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
  organizations?: InputMaybe<Array<ScopeOrganizationsConnectFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesConnectFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesConnectFieldInput>>;
  users?: InputMaybe<Array<ScopeUsersConnectFieldInput>>;
};

export type ScopeConnectOrCreateInput = {
  considerations?: InputMaybe<ScopeConsiderationsConnectOrCreateInput>;
  organizations?: InputMaybe<Array<ScopeOrganizationsConnectOrCreateFieldInput>>;
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
  organizations?: InputMaybe<ScopeOrganizationsFieldInput>;
  ripples?: InputMaybe<ScopeRipplesFieldInput>;
  scopes?: InputMaybe<ScopeScopesFieldInput>;
  users?: InputMaybe<ScopeUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type ScopeDeleteInput = {
  considerations?: InputMaybe<ScopeConsiderationsDeleteInput>;
  organizations?: InputMaybe<Array<ScopeOrganizationsDeleteFieldInput>>;
  ripples?: InputMaybe<Array<ScopeRipplesDeleteFieldInput>>;
  scopes?: InputMaybe<Array<ScopeScopesDeleteFieldInput>>;
  users?: InputMaybe<Array<ScopeUsersDeleteFieldInput>>;
};

export type ScopeDisconnectInput = {
  considerations?: InputMaybe<ScopeConsiderationsDisconnectInput>;
  organizations?: InputMaybe<Array<ScopeOrganizationsDisconnectFieldInput>>;
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

export type ScopeOrganizationOrganizationsAggregationSelection = {
  __typename?: 'ScopeOrganizationOrganizationsAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ScopeOrganizationOrganizationsEdgeAggregateSelection>;
  node?: Maybe<ScopeOrganizationOrganizationsNodeAggregateSelection>;
};

export type ScopeOrganizationOrganizationsEdgeAggregateSelection = {
  __typename?: 'ScopeOrganizationOrganizationsEdgeAggregateSelection';
  aspect: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
};

export type ScopeOrganizationOrganizationsNodeAggregateSelection = {
  __typename?: 'ScopeOrganizationOrganizationsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNonNullable;
};

export type ScopeOrganizationsAggregateInput = {
  AND?: InputMaybe<Array<ScopeOrganizationsAggregateInput>>;
  NOT?: InputMaybe<ScopeOrganizationsAggregateInput>;
  OR?: InputMaybe<Array<ScopeOrganizationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ScopeOrganizationsEdgeAggregationWhereInput>;
  node?: InputMaybe<ScopeOrganizationsNodeAggregationWhereInput>;
};

export type ScopeOrganizationsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  edge: OrganizationTouchesScopeCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type ScopeOrganizationsConnectOrCreateFieldInput = {
  onCreate: ScopeOrganizationsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type ScopeOrganizationsConnectOrCreateFieldInputOnCreate = {
  edge: OrganizationTouchesScopeCreateInput;
  node: OrganizationOnCreateInput;
};

export type ScopeOrganizationsConnection = {
  __typename?: 'ScopeOrganizationsConnection';
  edges: Array<ScopeOrganizationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScopeOrganizationsConnectionSort = {
  edge?: InputMaybe<OrganizationTouchesScopeSort>;
  node?: InputMaybe<OrganizationSort>;
};

export type ScopeOrganizationsConnectionWhere = {
  AND?: InputMaybe<Array<ScopeOrganizationsConnectionWhere>>;
  NOT?: InputMaybe<ScopeOrganizationsConnectionWhere>;
  OR?: InputMaybe<Array<ScopeOrganizationsConnectionWhere>>;
  edge?: InputMaybe<OrganizationTouchesScopeWhere>;
  node?: InputMaybe<OrganizationWhere>;
};

export type ScopeOrganizationsCreateFieldInput = {
  edge: OrganizationTouchesScopeCreateInput;
  node: OrganizationCreateInput;
};

export type ScopeOrganizationsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<ScopeOrganizationsConnectionWhere>;
};

export type ScopeOrganizationsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<ScopeOrganizationsConnectionWhere>;
};

export type ScopeOrganizationsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeOrganizationsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeOrganizationsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeOrganizationsEdgeAggregationWhereInput>>;
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

export type ScopeOrganizationsFieldInput = {
  connect?: InputMaybe<Array<ScopeOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeOrganizationsCreateFieldInput>>;
};

export type ScopeOrganizationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ScopeOrganizationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ScopeOrganizationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ScopeOrganizationsNodeAggregationWhereInput>>;
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

export type ScopeOrganizationsRelationship = OrganizationTouchesScope & {
  __typename?: 'ScopeOrganizationsRelationship';
  aspect: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Organization;
  reason: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type ScopeOrganizationsUpdateConnectionInput = {
  edge?: InputMaybe<OrganizationTouchesScopeUpdateInput>;
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type ScopeOrganizationsUpdateFieldInput = {
  connect?: InputMaybe<Array<ScopeOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ScopeOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ScopeOrganizationsCreateFieldInput>>;
  delete?: InputMaybe<Array<ScopeOrganizationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ScopeOrganizationsDisconnectFieldInput>>;
  update?: InputMaybe<ScopeOrganizationsUpdateConnectionInput>;
  where?: InputMaybe<ScopeOrganizationsConnectionWhere>;
};

export type ScopeRelationInput = {
  considerations?: InputMaybe<ScopeConsiderationsCreateFieldInput>;
  organizations?: InputMaybe<Array<ScopeOrganizationsCreateFieldInput>>;
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
  organizations?: InputMaybe<Array<ScopeOrganizationsUpdateFieldInput>>;
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
  organizationsAggregate?: InputMaybe<ScopeOrganizationsAggregateInput>;
  /** Return Scopes where all of the related ScopeOrganizationsConnections match this filter */
  organizationsConnection_ALL?: InputMaybe<ScopeOrganizationsConnectionWhere>;
  /** Return Scopes where none of the related ScopeOrganizationsConnections match this filter */
  organizationsConnection_NONE?: InputMaybe<ScopeOrganizationsConnectionWhere>;
  /** Return Scopes where one of the related ScopeOrganizationsConnections match this filter */
  organizationsConnection_SINGLE?: InputMaybe<ScopeOrganizationsConnectionWhere>;
  /** Return Scopes where some of the related ScopeOrganizationsConnections match this filter */
  organizationsConnection_SOME?: InputMaybe<ScopeOrganizationsConnectionWhere>;
  /** Return Scopes where all of the related Organizations match this filter */
  organizations_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Scopes where none of the related Organizations match this filter */
  organizations_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Scopes where one of the related Organizations match this filter */
  organizations_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Scopes where some of the related Organizations match this filter */
  organizations_SOME?: InputMaybe<OrganizationWhere>;
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
  organizations: Array<Organization>;
  organizationsAggregate?: Maybe<StakeholderOrganizationOrganizationsAggregationSelection>;
  organizationsConnection: StakeholderOrganizationsConnection;
  scopes: Array<Scope>;
  scopesAggregate?: Maybe<StakeholderScopeScopesAggregationSelection>;
  scopesConnection: StakeholderScopesConnection;
  users: Array<User>;
  usersAggregate?: Maybe<StakeholderUserUsersAggregationSelection>;
  usersConnection: StakeholderUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type StakeholderOrganizationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type StakeholderOrganizationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type StakeholderOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StakeholderOrganizationsConnectionSort>>;
  where?: InputMaybe<StakeholderOrganizationsConnectionWhere>;
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
  organizations?: InputMaybe<Array<StakeholderOrganizationsConnectFieldInput>>;
  scopes?: InputMaybe<Array<StakeholderScopesConnectFieldInput>>;
  users?: InputMaybe<Array<StakeholderUsersConnectFieldInput>>;
};

export type StakeholderConnectOrCreateInput = {
  organizations?: InputMaybe<Array<StakeholderOrganizationsConnectOrCreateFieldInput>>;
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
  organizations?: InputMaybe<StakeholderOrganizationsFieldInput>;
  scopes?: InputMaybe<StakeholderScopesFieldInput>;
  users?: InputMaybe<StakeholderUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type StakeholderDeleteInput = {
  organizations?: InputMaybe<Array<StakeholderOrganizationsDeleteFieldInput>>;
  scopes?: InputMaybe<Array<StakeholderScopesDeleteFieldInput>>;
  users?: InputMaybe<Array<StakeholderUsersDeleteFieldInput>>;
};

export type StakeholderDisconnectInput = {
  organizations?: InputMaybe<Array<StakeholderOrganizationsDisconnectFieldInput>>;
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

export type StakeholderOrganizationOrganizationsAggregationSelection = {
  __typename?: 'StakeholderOrganizationOrganizationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StakeholderOrganizationOrganizationsNodeAggregateSelection>;
};

export type StakeholderOrganizationOrganizationsNodeAggregateSelection = {
  __typename?: 'StakeholderOrganizationOrganizationsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNonNullable;
};

export type StakeholderOrganizationsAggregateInput = {
  AND?: InputMaybe<Array<StakeholderOrganizationsAggregateInput>>;
  NOT?: InputMaybe<StakeholderOrganizationsAggregateInput>;
  OR?: InputMaybe<Array<StakeholderOrganizationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StakeholderOrganizationsNodeAggregationWhereInput>;
};

export type StakeholderOrganizationsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type StakeholderOrganizationsConnectOrCreateFieldInput = {
  onCreate: StakeholderOrganizationsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type StakeholderOrganizationsConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type StakeholderOrganizationsConnection = {
  __typename?: 'StakeholderOrganizationsConnection';
  edges: Array<StakeholderOrganizationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StakeholderOrganizationsConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type StakeholderOrganizationsConnectionWhere = {
  AND?: InputMaybe<Array<StakeholderOrganizationsConnectionWhere>>;
  NOT?: InputMaybe<StakeholderOrganizationsConnectionWhere>;
  OR?: InputMaybe<Array<StakeholderOrganizationsConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type StakeholderOrganizationsCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type StakeholderOrganizationsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<StakeholderOrganizationsConnectionWhere>;
};

export type StakeholderOrganizationsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<StakeholderOrganizationsConnectionWhere>;
};

export type StakeholderOrganizationsFieldInput = {
  connect?: InputMaybe<Array<StakeholderOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StakeholderOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StakeholderOrganizationsCreateFieldInput>>;
};

export type StakeholderOrganizationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StakeholderOrganizationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StakeholderOrganizationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StakeholderOrganizationsNodeAggregationWhereInput>>;
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

export type StakeholderOrganizationsRelationship = {
  __typename?: 'StakeholderOrganizationsRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type StakeholderOrganizationsUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type StakeholderOrganizationsUpdateFieldInput = {
  connect?: InputMaybe<Array<StakeholderOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StakeholderOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StakeholderOrganizationsCreateFieldInput>>;
  delete?: InputMaybe<Array<StakeholderOrganizationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StakeholderOrganizationsDisconnectFieldInput>>;
  update?: InputMaybe<StakeholderOrganizationsUpdateConnectionInput>;
  where?: InputMaybe<StakeholderOrganizationsConnectionWhere>;
};

export type StakeholderRelationInput = {
  organizations?: InputMaybe<Array<StakeholderOrganizationsCreateFieldInput>>;
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
  organizations?: InputMaybe<Array<StakeholderOrganizationsUpdateFieldInput>>;
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
  organizationsAggregate?: InputMaybe<StakeholderOrganizationsAggregateInput>;
  /** Return Stakeholders where all of the related StakeholderOrganizationsConnections match this filter */
  organizationsConnection_ALL?: InputMaybe<StakeholderOrganizationsConnectionWhere>;
  /** Return Stakeholders where none of the related StakeholderOrganizationsConnections match this filter */
  organizationsConnection_NONE?: InputMaybe<StakeholderOrganizationsConnectionWhere>;
  /** Return Stakeholders where one of the related StakeholderOrganizationsConnections match this filter */
  organizationsConnection_SINGLE?: InputMaybe<StakeholderOrganizationsConnectionWhere>;
  /** Return Stakeholders where some of the related StakeholderOrganizationsConnections match this filter */
  organizationsConnection_SOME?: InputMaybe<StakeholderOrganizationsConnectionWhere>;
  /** Return Stakeholders where all of the related Organizations match this filter */
  organizations_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Stakeholders where none of the related Organizations match this filter */
  organizations_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Stakeholders where one of the related Organizations match this filter */
  organizations_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Stakeholders where some of the related Organizations match this filter */
  organizations_SOME?: InputMaybe<OrganizationWhere>;
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

export type Team = {
  __typename?: 'Team';
  brief?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  organization: Array<Organization>;
  organizationAggregate?: Maybe<TeamOrganizationOrganizationAggregationSelection>;
  organizationConnection: TeamOrganizationConnection;
  users: Array<User>;
  usersAggregate?: Maybe<TeamUserUsersAggregationSelection>;
  usersConnection: TeamUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type TeamOrganizationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type TeamOrganizationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type TeamOrganizationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TeamOrganizationConnectionSort>>;
  where?: InputMaybe<TeamOrganizationConnectionWhere>;
};


export type TeamUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type TeamUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type TeamUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TeamUsersConnectionSort>>;
  where?: InputMaybe<TeamUsersConnectionWhere>;
};

export type TeamAggregateSelection = {
  __typename?: 'TeamAggregateSelection';
  brief: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type TeamConnectInput = {
  organization?: InputMaybe<Array<TeamOrganizationConnectFieldInput>>;
  users?: InputMaybe<Array<TeamUsersConnectFieldInput>>;
};

export type TeamConnectOrCreateInput = {
  organization?: InputMaybe<Array<TeamOrganizationConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<TeamUsersConnectOrCreateFieldInput>>;
};

export type TeamConnectOrCreateWhere = {
  node: TeamUniqueWhere;
};

export type TeamConnectWhere = {
  node: TeamWhere;
};

export type TeamCreateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<TeamOrganizationFieldInput>;
  users?: InputMaybe<TeamUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type TeamDeleteInput = {
  organization?: InputMaybe<Array<TeamOrganizationDeleteFieldInput>>;
  users?: InputMaybe<Array<TeamUsersDeleteFieldInput>>;
};

export type TeamDisconnectInput = {
  organization?: InputMaybe<Array<TeamOrganizationDisconnectFieldInput>>;
  users?: InputMaybe<Array<TeamUsersDisconnectFieldInput>>;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  cursor: Scalars['String']['output'];
  node: Team;
};

export type TeamOnCreateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type TeamOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TeamSort objects to sort Teams by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TeamSort>>;
};

export type TeamOrganizationAggregateInput = {
  AND?: InputMaybe<Array<TeamOrganizationAggregateInput>>;
  NOT?: InputMaybe<TeamOrganizationAggregateInput>;
  OR?: InputMaybe<Array<TeamOrganizationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TeamOrganizationNodeAggregationWhereInput>;
};

export type TeamOrganizationConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type TeamOrganizationConnectOrCreateFieldInput = {
  onCreate: TeamOrganizationConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type TeamOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type TeamOrganizationConnection = {
  __typename?: 'TeamOrganizationConnection';
  edges: Array<TeamOrganizationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TeamOrganizationConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type TeamOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<TeamOrganizationConnectionWhere>>;
  NOT?: InputMaybe<TeamOrganizationConnectionWhere>;
  OR?: InputMaybe<Array<TeamOrganizationConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type TeamOrganizationCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type TeamOrganizationDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<TeamOrganizationConnectionWhere>;
};

export type TeamOrganizationDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<TeamOrganizationConnectionWhere>;
};

export type TeamOrganizationFieldInput = {
  connect?: InputMaybe<Array<TeamOrganizationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TeamOrganizationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TeamOrganizationCreateFieldInput>>;
};

export type TeamOrganizationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TeamOrganizationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TeamOrganizationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TeamOrganizationNodeAggregationWhereInput>>;
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

export type TeamOrganizationOrganizationAggregationSelection = {
  __typename?: 'TeamOrganizationOrganizationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TeamOrganizationOrganizationNodeAggregateSelection>;
};

export type TeamOrganizationOrganizationNodeAggregateSelection = {
  __typename?: 'TeamOrganizationOrganizationNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNonNullable;
};

export type TeamOrganizationRelationship = {
  __typename?: 'TeamOrganizationRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type TeamOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type TeamOrganizationUpdateFieldInput = {
  connect?: InputMaybe<Array<TeamOrganizationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TeamOrganizationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TeamOrganizationCreateFieldInput>>;
  delete?: InputMaybe<Array<TeamOrganizationDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TeamOrganizationDisconnectFieldInput>>;
  update?: InputMaybe<TeamOrganizationUpdateConnectionInput>;
  where?: InputMaybe<TeamOrganizationConnectionWhere>;
};

export type TeamRelationInput = {
  organization?: InputMaybe<Array<TeamOrganizationCreateFieldInput>>;
  users?: InputMaybe<Array<TeamUsersCreateFieldInput>>;
};

/** Fields to sort Teams by. The order in which sorts are applied is not guaranteed when specifying many fields in one TeamSort object. */
export type TeamSort = {
  brief?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type TeamUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TeamUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Array<TeamOrganizationUpdateFieldInput>>;
  users?: InputMaybe<Array<TeamUsersUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamUserUsersAggregationSelection = {
  __typename?: 'TeamUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<TeamUserUsersEdgeAggregateSelection>;
  node?: Maybe<TeamUserUsersNodeAggregateSelection>;
};

export type TeamUserUsersEdgeAggregateSelection = {
  __typename?: 'TeamUserUsersEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dump: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
};

export type TeamUserUsersNodeAggregateSelection = {
  __typename?: 'TeamUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type TeamUsersAggregateInput = {
  AND?: InputMaybe<Array<TeamUsersAggregateInput>>;
  NOT?: InputMaybe<TeamUsersAggregateInput>;
  OR?: InputMaybe<Array<TeamUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<TeamUsersEdgeAggregationWhereInput>;
  node?: InputMaybe<TeamUsersNodeAggregationWhereInput>;
};

export type TeamUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: UserInteractsWithCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type TeamUsersConnectOrCreateFieldInput = {
  onCreate: TeamUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type TeamUsersConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: UserOnCreateInput;
};

export type TeamUsersConnection = {
  __typename?: 'TeamUsersConnection';
  edges: Array<TeamUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TeamUsersConnectionSort = {
  edge?: InputMaybe<UserInteractsWithSort>;
  node?: InputMaybe<UserSort>;
};

export type TeamUsersConnectionWhere = {
  AND?: InputMaybe<Array<TeamUsersConnectionWhere>>;
  NOT?: InputMaybe<TeamUsersConnectionWhere>;
  OR?: InputMaybe<Array<TeamUsersConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<UserWhere>;
};

export type TeamUsersCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: UserCreateInput;
};

export type TeamUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<TeamUsersConnectionWhere>;
};

export type TeamUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<TeamUsersConnectionWhere>;
};

export type TeamUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<TeamUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<TeamUsersEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<TeamUsersEdgeAggregationWhereInput>>;
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

export type TeamUsersFieldInput = {
  connect?: InputMaybe<Array<TeamUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TeamUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TeamUsersCreateFieldInput>>;
};

export type TeamUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TeamUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TeamUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TeamUsersNodeAggregationWhereInput>>;
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

export type TeamUsersRelationship = UserInteractsWith & {
  __typename?: 'TeamUsersRelationship';
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  dump?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  node: User;
  type: UserInteractionName;
};

export type TeamUsersUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type TeamUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<TeamUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TeamUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TeamUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<TeamUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TeamUsersDisconnectFieldInput>>;
  update?: InputMaybe<TeamUsersUpdateConnectionInput>;
  where?: InputMaybe<TeamUsersConnectionWhere>;
};

export type TeamWhere = {
  AND?: InputMaybe<Array<TeamWhere>>;
  NOT?: InputMaybe<TeamWhere>;
  OR?: InputMaybe<Array<TeamWhere>>;
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
  organizationAggregate?: InputMaybe<TeamOrganizationAggregateInput>;
  /** Return Teams where all of the related TeamOrganizationConnections match this filter */
  organizationConnection_ALL?: InputMaybe<TeamOrganizationConnectionWhere>;
  /** Return Teams where none of the related TeamOrganizationConnections match this filter */
  organizationConnection_NONE?: InputMaybe<TeamOrganizationConnectionWhere>;
  /** Return Teams where one of the related TeamOrganizationConnections match this filter */
  organizationConnection_SINGLE?: InputMaybe<TeamOrganizationConnectionWhere>;
  /** Return Teams where some of the related TeamOrganizationConnections match this filter */
  organizationConnection_SOME?: InputMaybe<TeamOrganizationConnectionWhere>;
  /** Return Teams where all of the related Organizations match this filter */
  organization_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Teams where none of the related Organizations match this filter */
  organization_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Teams where one of the related Organizations match this filter */
  organization_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Teams where some of the related Organizations match this filter */
  organization_SOME?: InputMaybe<OrganizationWhere>;
  usersAggregate?: InputMaybe<TeamUsersAggregateInput>;
  /** Return Teams where all of the related TeamUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<TeamUsersConnectionWhere>;
  /** Return Teams where none of the related TeamUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<TeamUsersConnectionWhere>;
  /** Return Teams where one of the related TeamUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<TeamUsersConnectionWhere>;
  /** Return Teams where some of the related TeamUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<TeamUsersConnectionWhere>;
  /** Return Teams where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Teams where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Teams where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Teams where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamsConnection = {
  __typename?: 'TeamsConnection';
  edges: Array<TeamEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
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

export type UpdateOrganizationStatusesMutationResponse = {
  __typename?: 'UpdateOrganizationStatusesMutationResponse';
  info: UpdateInfo;
  organizationStatuses: Array<OrganizationStatus>;
};

export type UpdateOrganizationsMutationResponse = {
  __typename?: 'UpdateOrganizationsMutationResponse';
  info: UpdateInfo;
  organizations: Array<Organization>;
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

export type UpdateTeamsMutationResponse = {
  __typename?: 'UpdateTeamsMutationResponse';
  info: UpdateInfo;
  teams: Array<Team>;
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
  Organization?: InputMaybe<Array<UserInteractionsOrganizationConnectFieldInput>>;
  OrganizationStatus?: InputMaybe<Array<UserInteractionsOrganizationStatusConnectFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionConnectFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleConnectFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeConnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderConnectFieldInput>>;
  Team?: InputMaybe<Array<UserInteractionsTeamConnectFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserConnectFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpConnectFieldInput>>;
};

export type UserInteractionsConnectOrCreateInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleConnectOrCreateFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicConnectOrCreateFieldInput>>;
  Organization?: InputMaybe<Array<UserInteractionsOrganizationConnectOrCreateFieldInput>>;
  OrganizationStatus?: InputMaybe<Array<UserInteractionsOrganizationStatusConnectOrCreateFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionConnectOrCreateFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleConnectOrCreateFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeConnectOrCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderConnectOrCreateFieldInput>>;
  Team?: InputMaybe<Array<UserInteractionsTeamConnectOrCreateFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserConnectOrCreateFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpConnectOrCreateFieldInput>>;
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
  Organization?: InputMaybe<UserInteractionsOrganizationConnectionWhere>;
  OrganizationStatus?: InputMaybe<UserInteractionsOrganizationStatusConnectionWhere>;
  Question?: InputMaybe<UserInteractionsQuestionConnectionWhere>;
  Ripple?: InputMaybe<UserInteractionsRippleConnectionWhere>;
  Scope?: InputMaybe<UserInteractionsScopeConnectionWhere>;
  Stakeholder?: InputMaybe<UserInteractionsStakeholderConnectionWhere>;
  Team?: InputMaybe<UserInteractionsTeamConnectionWhere>;
  User?: InputMaybe<UserInteractionsUserConnectionWhere>;
  WebDump?: InputMaybe<UserInteractionsWebDumpConnectionWhere>;
};

export type UserInteractionsCreateFieldInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleCreateFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicCreateFieldInput>>;
  Organization?: InputMaybe<Array<UserInteractionsOrganizationCreateFieldInput>>;
  OrganizationStatus?: InputMaybe<Array<UserInteractionsOrganizationStatusCreateFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionCreateFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleCreateFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeCreateFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderCreateFieldInput>>;
  Team?: InputMaybe<Array<UserInteractionsTeamCreateFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserCreateFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpCreateFieldInput>>;
};

export type UserInteractionsCreateInput = {
  Example?: InputMaybe<UserInteractionsExampleFieldInput>;
  Geographic?: InputMaybe<UserInteractionsGeographicFieldInput>;
  Organization?: InputMaybe<UserInteractionsOrganizationFieldInput>;
  OrganizationStatus?: InputMaybe<UserInteractionsOrganizationStatusFieldInput>;
  Question?: InputMaybe<UserInteractionsQuestionFieldInput>;
  Ripple?: InputMaybe<UserInteractionsRippleFieldInput>;
  Scope?: InputMaybe<UserInteractionsScopeFieldInput>;
  Stakeholder?: InputMaybe<UserInteractionsStakeholderFieldInput>;
  Team?: InputMaybe<UserInteractionsTeamFieldInput>;
  User?: InputMaybe<UserInteractionsUserFieldInput>;
  WebDump?: InputMaybe<UserInteractionsWebDumpFieldInput>;
};

export type UserInteractionsDeleteInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleDeleteFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicDeleteFieldInput>>;
  Organization?: InputMaybe<Array<UserInteractionsOrganizationDeleteFieldInput>>;
  OrganizationStatus?: InputMaybe<Array<UserInteractionsOrganizationStatusDeleteFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionDeleteFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleDeleteFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeDeleteFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderDeleteFieldInput>>;
  Team?: InputMaybe<Array<UserInteractionsTeamDeleteFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserDeleteFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpDeleteFieldInput>>;
};

export type UserInteractionsDisconnectInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleDisconnectFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicDisconnectFieldInput>>;
  Organization?: InputMaybe<Array<UserInteractionsOrganizationDisconnectFieldInput>>;
  OrganizationStatus?: InputMaybe<Array<UserInteractionsOrganizationStatusDisconnectFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionDisconnectFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleDisconnectFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeDisconnectFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderDisconnectFieldInput>>;
  Team?: InputMaybe<Array<UserInteractionsTeamDisconnectFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserDisconnectFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpDisconnectFieldInput>>;
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

export type UserInteractionsOrganizationConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type UserInteractionsOrganizationConnectOrCreateFieldInput = {
  onCreate: UserInteractionsOrganizationConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type UserInteractionsOrganizationConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: OrganizationOnCreateInput;
};

export type UserInteractionsOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsOrganizationConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsOrganizationConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsOrganizationConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<OrganizationWhere>;
};

export type UserInteractionsOrganizationCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: OrganizationCreateInput;
};

export type UserInteractionsOrganizationDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<UserInteractionsOrganizationConnectionWhere>;
};

export type UserInteractionsOrganizationDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<UserInteractionsOrganizationConnectionWhere>;
};

export type UserInteractionsOrganizationFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsOrganizationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsOrganizationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsOrganizationCreateFieldInput>>;
};

export type UserInteractionsOrganizationStatusConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationStatusConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<OrganizationStatusConnectWhere>;
};

export type UserInteractionsOrganizationStatusConnectOrCreateFieldInput = {
  onCreate: UserInteractionsOrganizationStatusConnectOrCreateFieldInputOnCreate;
  where: OrganizationStatusConnectOrCreateWhere;
};

export type UserInteractionsOrganizationStatusConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: OrganizationStatusOnCreateInput;
};

export type UserInteractionsOrganizationStatusConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsOrganizationStatusConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsOrganizationStatusConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsOrganizationStatusConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<OrganizationStatusWhere>;
};

export type UserInteractionsOrganizationStatusCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: OrganizationStatusCreateInput;
};

export type UserInteractionsOrganizationStatusDeleteFieldInput = {
  delete?: InputMaybe<OrganizationStatusDeleteInput>;
  where?: InputMaybe<UserInteractionsOrganizationStatusConnectionWhere>;
};

export type UserInteractionsOrganizationStatusDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationStatusDisconnectInput>;
  where?: InputMaybe<UserInteractionsOrganizationStatusConnectionWhere>;
};

export type UserInteractionsOrganizationStatusFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsOrganizationStatusConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsOrganizationStatusConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsOrganizationStatusCreateFieldInput>>;
};

export type UserInteractionsOrganizationStatusUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<OrganizationStatusUpdateInput>;
};

export type UserInteractionsOrganizationStatusUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsOrganizationStatusConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsOrganizationStatusConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsOrganizationStatusCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsOrganizationStatusDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsOrganizationStatusDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsOrganizationStatusUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsOrganizationStatusConnectionWhere>;
};

export type UserInteractionsOrganizationUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type UserInteractionsOrganizationUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsOrganizationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsOrganizationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsOrganizationCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsOrganizationDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsOrganizationDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsOrganizationUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsOrganizationConnectionWhere>;
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

export type UserInteractionsTeamConnectFieldInput = {
  connect?: InputMaybe<Array<TeamConnectInput>>;
  edge: UserInteractsWithCreateInput;
  where?: InputMaybe<TeamConnectWhere>;
};

export type UserInteractionsTeamConnectOrCreateFieldInput = {
  onCreate: UserInteractionsTeamConnectOrCreateFieldInputOnCreate;
  where: TeamConnectOrCreateWhere;
};

export type UserInteractionsTeamConnectOrCreateFieldInputOnCreate = {
  edge: UserInteractsWithCreateInput;
  node: TeamOnCreateInput;
};

export type UserInteractionsTeamConnectionWhere = {
  AND?: InputMaybe<Array<UserInteractionsTeamConnectionWhere>>;
  NOT?: InputMaybe<UserInteractionsTeamConnectionWhere>;
  OR?: InputMaybe<Array<UserInteractionsTeamConnectionWhere>>;
  edge?: InputMaybe<UserInteractsWithWhere>;
  node?: InputMaybe<TeamWhere>;
};

export type UserInteractionsTeamCreateFieldInput = {
  edge: UserInteractsWithCreateInput;
  node: TeamCreateInput;
};

export type UserInteractionsTeamDeleteFieldInput = {
  delete?: InputMaybe<TeamDeleteInput>;
  where?: InputMaybe<UserInteractionsTeamConnectionWhere>;
};

export type UserInteractionsTeamDisconnectFieldInput = {
  disconnect?: InputMaybe<TeamDisconnectInput>;
  where?: InputMaybe<UserInteractionsTeamConnectionWhere>;
};

export type UserInteractionsTeamFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsTeamConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsTeamConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsTeamCreateFieldInput>>;
};

export type UserInteractionsTeamUpdateConnectionInput = {
  edge?: InputMaybe<UserInteractsWithUpdateInput>;
  node?: InputMaybe<TeamUpdateInput>;
};

export type UserInteractionsTeamUpdateFieldInput = {
  connect?: InputMaybe<Array<UserInteractionsTeamConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserInteractionsTeamConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserInteractionsTeamCreateFieldInput>>;
  delete?: InputMaybe<Array<UserInteractionsTeamDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserInteractionsTeamDisconnectFieldInput>>;
  update?: InputMaybe<UserInteractionsTeamUpdateConnectionInput>;
  where?: InputMaybe<UserInteractionsTeamConnectionWhere>;
};

export type UserInteractionsUpdateInput = {
  Example?: InputMaybe<Array<UserInteractionsExampleUpdateFieldInput>>;
  Geographic?: InputMaybe<Array<UserInteractionsGeographicUpdateFieldInput>>;
  Organization?: InputMaybe<Array<UserInteractionsOrganizationUpdateFieldInput>>;
  OrganizationStatus?: InputMaybe<Array<UserInteractionsOrganizationStatusUpdateFieldInput>>;
  Question?: InputMaybe<Array<UserInteractionsQuestionUpdateFieldInput>>;
  Ripple?: InputMaybe<Array<UserInteractionsRippleUpdateFieldInput>>;
  Scope?: InputMaybe<Array<UserInteractionsScopeUpdateFieldInput>>;
  Stakeholder?: InputMaybe<Array<UserInteractionsStakeholderUpdateFieldInput>>;
  Team?: InputMaybe<Array<UserInteractionsTeamUpdateFieldInput>>;
  User?: InputMaybe<Array<UserInteractionsUserUpdateFieldInput>>;
  WebDump?: InputMaybe<Array<UserInteractionsWebDumpUpdateFieldInput>>;
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
  organizations: Array<Organization>;
  organizationsAggregate?: Maybe<WebDumpOrganizationOrganizationsAggregationSelection>;
  organizationsConnection: WebDumpOrganizationsConnection;
  users: Array<User>;
  usersAggregate?: Maybe<WebDumpUserUsersAggregationSelection>;
  usersConnection: WebDumpUsersConnection;
  verified: Scalars['Boolean']['output'];
};


export type WebDumpOrganizationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type WebDumpOrganizationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type WebDumpOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WebDumpOrganizationsConnectionSort>>;
  where?: InputMaybe<WebDumpOrganizationsConnectionWhere>;
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
  organizations?: InputMaybe<Array<WebDumpOrganizationsConnectFieldInput>>;
  users?: InputMaybe<Array<WebDumpUsersConnectFieldInput>>;
};

export type WebDumpConnectOrCreateInput = {
  organizations?: InputMaybe<Array<WebDumpOrganizationsConnectOrCreateFieldInput>>;
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
  organizations?: InputMaybe<WebDumpOrganizationsFieldInput>;
  users?: InputMaybe<WebDumpUsersFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type WebDumpDeleteInput = {
  organizations?: InputMaybe<Array<WebDumpOrganizationsDeleteFieldInput>>;
  users?: InputMaybe<Array<WebDumpUsersDeleteFieldInput>>;
};

export type WebDumpDisconnectInput = {
  organizations?: InputMaybe<Array<WebDumpOrganizationsDisconnectFieldInput>>;
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

export type WebDumpOrganizationOrganizationsAggregationSelection = {
  __typename?: 'WebDumpOrganizationOrganizationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<WebDumpOrganizationOrganizationsNodeAggregateSelection>;
};

export type WebDumpOrganizationOrganizationsNodeAggregateSelection = {
  __typename?: 'WebDumpOrganizationOrganizationsNodeAggregateSelection';
  brief: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNonNullable;
};

export type WebDumpOrganizationsAggregateInput = {
  AND?: InputMaybe<Array<WebDumpOrganizationsAggregateInput>>;
  NOT?: InputMaybe<WebDumpOrganizationsAggregateInput>;
  OR?: InputMaybe<Array<WebDumpOrganizationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<WebDumpOrganizationsNodeAggregationWhereInput>;
};

export type WebDumpOrganizationsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type WebDumpOrganizationsConnectOrCreateFieldInput = {
  onCreate: WebDumpOrganizationsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type WebDumpOrganizationsConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type WebDumpOrganizationsConnection = {
  __typename?: 'WebDumpOrganizationsConnection';
  edges: Array<WebDumpOrganizationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WebDumpOrganizationsConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type WebDumpOrganizationsConnectionWhere = {
  AND?: InputMaybe<Array<WebDumpOrganizationsConnectionWhere>>;
  NOT?: InputMaybe<WebDumpOrganizationsConnectionWhere>;
  OR?: InputMaybe<Array<WebDumpOrganizationsConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type WebDumpOrganizationsCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type WebDumpOrganizationsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<WebDumpOrganizationsConnectionWhere>;
};

export type WebDumpOrganizationsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<WebDumpOrganizationsConnectionWhere>;
};

export type WebDumpOrganizationsFieldInput = {
  connect?: InputMaybe<Array<WebDumpOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WebDumpOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WebDumpOrganizationsCreateFieldInput>>;
};

export type WebDumpOrganizationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WebDumpOrganizationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WebDumpOrganizationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WebDumpOrganizationsNodeAggregationWhereInput>>;
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

export type WebDumpOrganizationsRelationship = {
  __typename?: 'WebDumpOrganizationsRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type WebDumpOrganizationsUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type WebDumpOrganizationsUpdateFieldInput = {
  connect?: InputMaybe<Array<WebDumpOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<WebDumpOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<WebDumpOrganizationsCreateFieldInput>>;
  delete?: InputMaybe<Array<WebDumpOrganizationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<WebDumpOrganizationsDisconnectFieldInput>>;
  update?: InputMaybe<WebDumpOrganizationsUpdateConnectionInput>;
  where?: InputMaybe<WebDumpOrganizationsConnectionWhere>;
};

export type WebDumpRelationInput = {
  organizations?: InputMaybe<Array<WebDumpOrganizationsCreateFieldInput>>;
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
  organizations?: InputMaybe<Array<WebDumpOrganizationsUpdateFieldInput>>;
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
  organizationsAggregate?: InputMaybe<WebDumpOrganizationsAggregateInput>;
  /** Return WebDumps where all of the related WebDumpOrganizationsConnections match this filter */
  organizationsConnection_ALL?: InputMaybe<WebDumpOrganizationsConnectionWhere>;
  /** Return WebDumps where none of the related WebDumpOrganizationsConnections match this filter */
  organizationsConnection_NONE?: InputMaybe<WebDumpOrganizationsConnectionWhere>;
  /** Return WebDumps where one of the related WebDumpOrganizationsConnections match this filter */
  organizationsConnection_SINGLE?: InputMaybe<WebDumpOrganizationsConnectionWhere>;
  /** Return WebDumps where some of the related WebDumpOrganizationsConnections match this filter */
  organizationsConnection_SOME?: InputMaybe<WebDumpOrganizationsConnectionWhere>;
  /** Return WebDumps where all of the related Organizations match this filter */
  organizations_ALL?: InputMaybe<OrganizationWhere>;
  /** Return WebDumps where none of the related Organizations match this filter */
  organizations_NONE?: InputMaybe<OrganizationWhere>;
  /** Return WebDumps where one of the related Organizations match this filter */
  organizations_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return WebDumps where some of the related Organizations match this filter */
  organizations_SOME?: InputMaybe<OrganizationWhere>;
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

export type CreateOrganizationsMutationVariables = Exact<{
  input: Array<OrganizationCreateInput> | OrganizationCreateInput;
}>;


export type CreateOrganizationsMutation = { __typename?: 'Mutation', createOrganizations: { __typename?: 'CreateOrganizationsMutationResponse', organizations: Array<{ __typename?: 'Organization', id: string, name: string, considerations: Array<{ __typename?: 'Geographic', brief?: string | null } | { __typename?: 'Stakeholder', name: string, stakeholderBreif: string } | { __typename?: 'Team', brief?: string | null } | { __typename?: 'WebDump', content: string }> }> } };

export type UpdateOrganizationsMutationVariables = Exact<{
  where?: InputMaybe<OrganizationWhere>;
  connectOrCreate?: InputMaybe<OrganizationConnectOrCreateInput>;
  create?: InputMaybe<OrganizationRelationInput>;
}>;


export type UpdateOrganizationsMutation = { __typename?: 'Mutation', updateOrganizations: { __typename?: 'UpdateOrganizationsMutationResponse', organizations: Array<{ __typename?: 'Organization', id: string, name: string, considerations: Array<{ __typename?: 'Geographic', brief?: string | null } | { __typename?: 'Stakeholder', name: string, stakeholderBreif: string } | { __typename?: 'Team', brief?: string | null } | { __typename?: 'WebDump', content: string }>, statuses: Array<{ __typename?: 'OrganizationStatus', name: OrganizationStatusName }>, scopesConnection: { __typename?: 'OrganizationScopesConnection', edges: Array<{ __typename?: 'OrganizationScopesRelationship', aspect: string, reason: string, node: { __typename?: 'Scope', name: string, brief: string, basis?: string | null, description?: string | null, considerations: Array<{ __typename?: 'Example', brief: string, description?: string | null } | { __typename?: 'Question', brief: string, description?: string | null } | { __typename?: 'Stakeholder', name: string, brief: string, description?: string | null }> } }> } }> } };

export type CreateScopesMutationVariables = Exact<{
  input: Array<ScopeCreateInput> | ScopeCreateInput;
}>;


export type CreateScopesMutation = { __typename?: 'Mutation', createScopes: { __typename?: 'CreateScopesMutationResponse', scopes: Array<{ __typename?: 'Scope', id: string, name: string, description?: string | null, basis?: string | null }> } };

export type CountOrganizationsQueryVariables = Exact<{
  where?: InputMaybe<OrganizationWhere>;
}>;


export type CountOrganizationsQuery = { __typename?: 'Query', organizationsAggregate: { __typename?: 'OrganizationAggregateSelection', count: number } };

export type ScopesQueryVariables = Exact<{
  where?: InputMaybe<ScopeWhere>;
}>;


export type ScopesQuery = { __typename?: 'Query', scopes: Array<{ __typename?: 'Scope', name: string, brief: string, basis?: string | null }> };


export const CreateOrganizationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrganizations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrganizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"considerations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stakeholder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"stakeholderBreif"},"name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebDump"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Geographic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateOrganizationsMutation, CreateOrganizationsMutationVariables>;
export const UpdateOrganizationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrganizations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnectOrCreateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"create"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationRelationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrganizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"create"},"value":{"kind":"Variable","name":{"kind":"Name","value":"create"}}},{"kind":"Argument","name":{"kind":"Name","value":"connectOrCreate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"considerations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stakeholder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"stakeholderBreif"},"name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebDump"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Geographic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scopesConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aspect"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"basis"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"considerations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stakeholder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Example"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateOrganizationsMutation, UpdateOrganizationsMutationVariables>;
export const CreateScopesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateScopes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ScopeCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createScopes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scopes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"basis"}}]}}]}}]}}]} as unknown as DocumentNode<CreateScopesMutation, CreateScopesMutationVariables>;
export const CountOrganizationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountOrganizations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizationsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CountOrganizationsQuery, CountOrganizationsQueryVariables>;
export const ScopesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Scopes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ScopeWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scopes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"basis"}}]}}]}}]} as unknown as DocumentNode<ScopesQuery, ScopesQueryVariables>;
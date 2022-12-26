
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Recipe
 * 
 */
export type Recipe = {
  code: string
  id: number
  title: string
  time: string
  portions: string
  latitude: string
  longitude: string
  urlImage: string
}

/**
 * Model Ingredient
 * 
 */
export type Ingredient = {
  id: string
  text: string
  recipeId: number | null
}

/**
 * Model Preparation
 * 
 */
export type Preparation = {
  id: string
  text: string
  recipeId: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recipes
 * const recipes = await prisma.recipe.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Recipes
   * const recipes = await prisma.recipe.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<GlobalReject>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<GlobalReject>;

  /**
   * `prisma.preparation`: Exposes CRUD operations for the **Preparation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preparations
    * const preparations = await prisma.preparation.findMany()
    * ```
    */
  get preparation(): Prisma.PreparationDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Recipe: 'Recipe',
    Ingredient: 'Ingredient',
    Preparation: 'Preparation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RecipeCountOutputType
   */


  export type RecipeCountOutputType = {
    ingredients: number
    preparation: number
  }

  export type RecipeCountOutputTypeSelect = {
    ingredients?: boolean
    preparation?: boolean
  }

  export type RecipeCountOutputTypeGetPayload<S extends boolean | null | undefined | RecipeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RecipeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RecipeCountOutputTypeArgs)
    ? RecipeCountOutputType 
    : S extends { select: any } & (RecipeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RecipeCountOutputType ? RecipeCountOutputType[P] : never
  } 
      : RecipeCountOutputType




  // Custom InputTypes

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     * 
    **/
    select?: RecipeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Recipe
   */


  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    id: number | null
  }

  export type RecipeSumAggregateOutputType = {
    id: number | null
  }

  export type RecipeMinAggregateOutputType = {
    code: string | null
    id: number | null
    title: string | null
    time: string | null
    portions: string | null
    latitude: string | null
    longitude: string | null
    urlImage: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    code: string | null
    id: number | null
    title: string | null
    time: string | null
    portions: string | null
    latitude: string | null
    longitude: string | null
    urlImage: string | null
  }

  export type RecipeCountAggregateOutputType = {
    code: number
    id: number
    title: number
    time: number
    portions: number
    latitude: number
    longitude: number
    urlImage: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    id?: true
  }

  export type RecipeSumAggregateInputType = {
    id?: true
  }

  export type RecipeMinAggregateInputType = {
    code?: true
    id?: true
    title?: true
    time?: true
    portions?: true
    latitude?: true
    longitude?: true
    urlImage?: true
  }

  export type RecipeMaxAggregateInputType = {
    code?: true
    id?: true
    title?: true
    time?: true
    portions?: true
    latitude?: true
    longitude?: true
    urlImage?: true
  }

  export type RecipeCountAggregateInputType = {
    code?: true
    id?: true
    title?: true
    time?: true
    portions?: true
    latitude?: true
    longitude?: true
    urlImage?: true
    _all?: true
  }

  export type RecipeAggregateArgs = {
    /**
     * Filter which Recipe to aggregate.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs = {
    where?: RecipeWhereInput
    orderBy?: Enumerable<RecipeOrderByWithAggregationInput>
    by: Array<RecipeScalarFieldEnum>
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }


  export type RecipeGroupByOutputType = {
    code: string
    id: number
    title: string
    time: string
    portions: string
    latitude: string
    longitude: string
    urlImage: string
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect = {
    code?: boolean
    id?: boolean
    title?: boolean
    time?: boolean
    portions?: boolean
    latitude?: boolean
    longitude?: boolean
    urlImage?: boolean
    ingredients?: boolean | RecipeIngredientsArgs
    preparation?: boolean | RecipePreparationArgs
    _count?: boolean | RecipeCountOutputTypeArgs
  }


  export type RecipeInclude = {
    ingredients?: boolean | RecipeIngredientsArgs
    preparation?: boolean | RecipePreparationArgs
    _count?: boolean | RecipeCountOutputTypeArgs
  } 

  export type RecipeGetPayload<S extends boolean | null | undefined | RecipeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Recipe :
    S extends undefined ? never :
    S extends { include: any } & (RecipeArgs | RecipeFindManyArgs)
    ? Recipe  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ingredients' ? Array < IngredientGetPayload<S['include'][P]>>  :
        P extends 'preparation' ? Array < PreparationGetPayload<S['include'][P]>>  :
        P extends '_count' ? RecipeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RecipeArgs | RecipeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ingredients' ? Array < IngredientGetPayload<S['select'][P]>>  :
        P extends 'preparation' ? Array < PreparationGetPayload<S['select'][P]>>  :
        P extends '_count' ? RecipeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Recipe ? Recipe[P] : never
  } 
      : Recipe


  type RecipeCountArgs = Merge<
    Omit<RecipeFindManyArgs, 'select' | 'include'> & {
      select?: RecipeCountAggregateInputType | true
    }
  >

  export interface RecipeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Recipe'> extends True ? Prisma__RecipeClient<RecipeGetPayload<T>> : Prisma__RecipeClient<RecipeGetPayload<T> | null, null>

    /**
     * Find one Recipe that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RecipeFindUniqueOrThrowArgs>
    ): Prisma__RecipeClient<RecipeGetPayload<T>>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Recipe'> extends True ? Prisma__RecipeClient<RecipeGetPayload<T>> : Prisma__RecipeClient<RecipeGetPayload<T> | null, null>

    /**
     * Find the first Recipe that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecipeFindFirstOrThrowArgs>
    ): Prisma__RecipeClient<RecipeGetPayload<T>>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const recipeWithCodeOnly = await prisma.recipe.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends RecipeFindManyArgs>(
      args?: SelectSubset<T, RecipeFindManyArgs>
    ): PrismaPromise<Array<RecipeGetPayload<T>>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
    **/
    create<T extends RecipeCreateArgs>(
      args: SelectSubset<T, RecipeCreateArgs>
    ): Prisma__RecipeClient<RecipeGetPayload<T>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
    **/
    delete<T extends RecipeDeleteArgs>(
      args: SelectSubset<T, RecipeDeleteArgs>
    ): Prisma__RecipeClient<RecipeGetPayload<T>>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeUpdateArgs>(
      args: SelectSubset<T, RecipeUpdateArgs>
    ): Prisma__RecipeClient<RecipeGetPayload<T>>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeDeleteManyArgs>(
      args?: SelectSubset<T, RecipeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeUpdateManyArgs>(
      args: SelectSubset<T, RecipeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeUpsertArgs>(
      args: SelectSubset<T, RecipeUpsertArgs>
    ): Prisma__RecipeClient<RecipeGetPayload<T>>

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ingredients<T extends RecipeIngredientsArgs= {}>(args?: Subset<T, RecipeIngredientsArgs>): PrismaPromise<Array<IngredientGetPayload<T>>| Null>;

    preparation<T extends RecipePreparationArgs= {}>(args?: Subset<T, RecipePreparationArgs>): PrismaPromise<Array<PreparationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Recipe base type for findUnique actions
   */
  export type RecipeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUnique
   */
  export interface RecipeFindUniqueArgs extends RecipeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe base type for findFirst actions
   */
  export type RecipeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     * 
    **/
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }

  /**
   * Recipe findFirst
   */
  export interface RecipeFindFirstArgs extends RecipeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     * 
    **/
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter, which Recipes to fetch.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe create
   */
  export type RecipeCreateArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The data needed to create a Recipe.
     * 
    **/
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }


  /**
   * Recipe update
   */
  export type RecipeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The data needed to update a Recipe.
     * 
    **/
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs = {
    /**
     * The data used to update Recipes.
     * 
    **/
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     * 
    **/
    where?: RecipeWhereInput
  }


  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     * 
    **/
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     * 
    **/
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }


  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter which Recipe to delete.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs = {
    /**
     * Filter which Recipes to delete
     * 
    **/
    where?: RecipeWhereInput
  }


  /**
   * Recipe.ingredients
   */
  export type RecipeIngredientsArgs = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    where?: IngredientWhereInput
    orderBy?: Enumerable<IngredientOrderByWithRelationInput>
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<IngredientScalarFieldEnum>
  }


  /**
   * Recipe.preparation
   */
  export type RecipePreparationArgs = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    where?: PreparationWhereInput
    orderBy?: Enumerable<PreparationOrderByWithRelationInput>
    cursor?: PreparationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PreparationScalarFieldEnum>
  }


  /**
   * Recipe without action
   */
  export type RecipeArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
  }



  /**
   * Model Ingredient
   */


  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    recipeId: number | null
  }

  export type IngredientSumAggregateOutputType = {
    recipeId: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    text: string | null
    recipeId: number | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    text: string | null
    recipeId: number | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    text: number
    recipeId: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    recipeId?: true
  }

  export type IngredientSumAggregateInputType = {
    recipeId?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    text?: true
    recipeId?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    text?: true
    recipeId?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    text?: true
    recipeId?: true
    _all?: true
  }

  export type IngredientAggregateArgs = {
    /**
     * Filter which Ingredient to aggregate.
     * 
    **/
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     * 
    **/
    orderBy?: Enumerable<IngredientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs = {
    where?: IngredientWhereInput
    orderBy?: Enumerable<IngredientOrderByWithAggregationInput>
    by: Array<IngredientScalarFieldEnum>
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }


  export type IngredientGroupByOutputType = {
    id: string
    text: string
    recipeId: number | null
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect = {
    id?: boolean
    text?: boolean
    recipe?: boolean | RecipeArgs
    recipeId?: boolean
  }


  export type IngredientInclude = {
    recipe?: boolean | RecipeArgs
  } 

  export type IngredientGetPayload<S extends boolean | null | undefined | IngredientArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Ingredient :
    S extends undefined ? never :
    S extends { include: any } & (IngredientArgs | IngredientFindManyArgs)
    ? Ingredient  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'recipe' ? RecipeGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (IngredientArgs | IngredientFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'recipe' ? RecipeGetPayload<S['select'][P]> | null :  P extends keyof Ingredient ? Ingredient[P] : never
  } 
      : Ingredient


  type IngredientCountArgs = Merge<
    Omit<IngredientFindManyArgs, 'select' | 'include'> & {
      select?: IngredientCountAggregateInputType | true
    }
  >

  export interface IngredientDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IngredientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, IngredientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Ingredient'> extends True ? Prisma__IngredientClient<IngredientGetPayload<T>> : Prisma__IngredientClient<IngredientGetPayload<T> | null, null>

    /**
     * Find one Ingredient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, IngredientFindUniqueOrThrowArgs>
    ): Prisma__IngredientClient<IngredientGetPayload<T>>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IngredientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, IngredientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Ingredient'> extends True ? Prisma__IngredientClient<IngredientGetPayload<T>> : Prisma__IngredientClient<IngredientGetPayload<T> | null, null>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, IngredientFindFirstOrThrowArgs>
    ): Prisma__IngredientClient<IngredientGetPayload<T>>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IngredientFindManyArgs>(
      args?: SelectSubset<T, IngredientFindManyArgs>
    ): PrismaPromise<Array<IngredientGetPayload<T>>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
    **/
    create<T extends IngredientCreateArgs>(
      args: SelectSubset<T, IngredientCreateArgs>
    ): Prisma__IngredientClient<IngredientGetPayload<T>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
    **/
    delete<T extends IngredientDeleteArgs>(
      args: SelectSubset<T, IngredientDeleteArgs>
    ): Prisma__IngredientClient<IngredientGetPayload<T>>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IngredientUpdateArgs>(
      args: SelectSubset<T, IngredientUpdateArgs>
    ): Prisma__IngredientClient<IngredientGetPayload<T>>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IngredientDeleteManyArgs>(
      args?: SelectSubset<T, IngredientDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IngredientUpdateManyArgs>(
      args: SelectSubset<T, IngredientUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
    **/
    upsert<T extends IngredientUpsertArgs>(
      args: SelectSubset<T, IngredientUpsertArgs>
    ): Prisma__IngredientClient<IngredientGetPayload<T>>

    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__IngredientClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recipe<T extends RecipeArgs= {}>(args?: Subset<T, RecipeArgs>): Prisma__RecipeClient<RecipeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Ingredient base type for findUnique actions
   */
  export type IngredientFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    /**
     * Filter, which Ingredient to fetch.
     * 
    **/
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUnique
   */
  export interface IngredientFindUniqueArgs extends IngredientFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    /**
     * Filter, which Ingredient to fetch.
     * 
    **/
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient base type for findFirst actions
   */
  export type IngredientFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    /**
     * Filter, which Ingredient to fetch.
     * 
    **/
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     * 
    **/
    orderBy?: Enumerable<IngredientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     * 
    **/
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     * 
    **/
    distinct?: Enumerable<IngredientScalarFieldEnum>
  }

  /**
   * Ingredient findFirst
   */
  export interface IngredientFindFirstArgs extends IngredientFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    /**
     * Filter, which Ingredient to fetch.
     * 
    **/
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     * 
    **/
    orderBy?: Enumerable<IngredientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     * 
    **/
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     * 
    **/
    distinct?: Enumerable<IngredientScalarFieldEnum>
  }


  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    /**
     * Filter, which Ingredients to fetch.
     * 
    **/
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     * 
    **/
    orderBy?: Enumerable<IngredientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     * 
    **/
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     * 
    **/
    skip?: number
    distinct?: Enumerable<IngredientScalarFieldEnum>
  }


  /**
   * Ingredient create
   */
  export type IngredientCreateArgs = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    /**
     * The data needed to create a Ingredient.
     * 
    **/
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }


  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    /**
     * The data needed to update a Ingredient.
     * 
    **/
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     * 
    **/
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs = {
    /**
     * The data used to update Ingredients.
     * 
    **/
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     * 
    **/
    where?: IngredientWhereInput
  }


  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     * 
    **/
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     * 
    **/
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }


  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
    /**
     * Filter which Ingredient to delete.
     * 
    **/
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs = {
    /**
     * Filter which Ingredients to delete
     * 
    **/
    where?: IngredientWhereInput
  }


  /**
   * Ingredient without action
   */
  export type IngredientArgs = {
    /**
     * Select specific fields to fetch from the Ingredient
     * 
    **/
    select?: IngredientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IngredientInclude | null
  }



  /**
   * Model Preparation
   */


  export type AggregatePreparation = {
    _count: PreparationCountAggregateOutputType | null
    _avg: PreparationAvgAggregateOutputType | null
    _sum: PreparationSumAggregateOutputType | null
    _min: PreparationMinAggregateOutputType | null
    _max: PreparationMaxAggregateOutputType | null
  }

  export type PreparationAvgAggregateOutputType = {
    recipeId: number | null
  }

  export type PreparationSumAggregateOutputType = {
    recipeId: number | null
  }

  export type PreparationMinAggregateOutputType = {
    id: string | null
    text: string | null
    recipeId: number | null
  }

  export type PreparationMaxAggregateOutputType = {
    id: string | null
    text: string | null
    recipeId: number | null
  }

  export type PreparationCountAggregateOutputType = {
    id: number
    text: number
    recipeId: number
    _all: number
  }


  export type PreparationAvgAggregateInputType = {
    recipeId?: true
  }

  export type PreparationSumAggregateInputType = {
    recipeId?: true
  }

  export type PreparationMinAggregateInputType = {
    id?: true
    text?: true
    recipeId?: true
  }

  export type PreparationMaxAggregateInputType = {
    id?: true
    text?: true
    recipeId?: true
  }

  export type PreparationCountAggregateInputType = {
    id?: true
    text?: true
    recipeId?: true
    _all?: true
  }

  export type PreparationAggregateArgs = {
    /**
     * Filter which Preparation to aggregate.
     * 
    **/
    where?: PreparationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preparations to fetch.
     * 
    **/
    orderBy?: Enumerable<PreparationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PreparationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preparations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preparations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preparations
    **/
    _count?: true | PreparationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreparationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreparationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreparationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreparationMaxAggregateInputType
  }

  export type GetPreparationAggregateType<T extends PreparationAggregateArgs> = {
        [P in keyof T & keyof AggregatePreparation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreparation[P]>
      : GetScalarType<T[P], AggregatePreparation[P]>
  }




  export type PreparationGroupByArgs = {
    where?: PreparationWhereInput
    orderBy?: Enumerable<PreparationOrderByWithAggregationInput>
    by: Array<PreparationScalarFieldEnum>
    having?: PreparationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreparationCountAggregateInputType | true
    _avg?: PreparationAvgAggregateInputType
    _sum?: PreparationSumAggregateInputType
    _min?: PreparationMinAggregateInputType
    _max?: PreparationMaxAggregateInputType
  }


  export type PreparationGroupByOutputType = {
    id: string
    text: string
    recipeId: number | null
    _count: PreparationCountAggregateOutputType | null
    _avg: PreparationAvgAggregateOutputType | null
    _sum: PreparationSumAggregateOutputType | null
    _min: PreparationMinAggregateOutputType | null
    _max: PreparationMaxAggregateOutputType | null
  }

  type GetPreparationGroupByPayload<T extends PreparationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PreparationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreparationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreparationGroupByOutputType[P]>
            : GetScalarType<T[P], PreparationGroupByOutputType[P]>
        }
      >
    >


  export type PreparationSelect = {
    id?: boolean
    text?: boolean
    recipe?: boolean | RecipeArgs
    recipeId?: boolean
  }


  export type PreparationInclude = {
    recipe?: boolean | RecipeArgs
  } 

  export type PreparationGetPayload<S extends boolean | null | undefined | PreparationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Preparation :
    S extends undefined ? never :
    S extends { include: any } & (PreparationArgs | PreparationFindManyArgs)
    ? Preparation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'recipe' ? RecipeGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (PreparationArgs | PreparationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'recipe' ? RecipeGetPayload<S['select'][P]> | null :  P extends keyof Preparation ? Preparation[P] : never
  } 
      : Preparation


  type PreparationCountArgs = Merge<
    Omit<PreparationFindManyArgs, 'select' | 'include'> & {
      select?: PreparationCountAggregateInputType | true
    }
  >

  export interface PreparationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Preparation that matches the filter.
     * @param {PreparationFindUniqueArgs} args - Arguments to find a Preparation
     * @example
     * // Get one Preparation
     * const preparation = await prisma.preparation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PreparationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PreparationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Preparation'> extends True ? Prisma__PreparationClient<PreparationGetPayload<T>> : Prisma__PreparationClient<PreparationGetPayload<T> | null, null>

    /**
     * Find one Preparation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PreparationFindUniqueOrThrowArgs} args - Arguments to find a Preparation
     * @example
     * // Get one Preparation
     * const preparation = await prisma.preparation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PreparationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PreparationFindUniqueOrThrowArgs>
    ): Prisma__PreparationClient<PreparationGetPayload<T>>

    /**
     * Find the first Preparation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationFindFirstArgs} args - Arguments to find a Preparation
     * @example
     * // Get one Preparation
     * const preparation = await prisma.preparation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PreparationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PreparationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Preparation'> extends True ? Prisma__PreparationClient<PreparationGetPayload<T>> : Prisma__PreparationClient<PreparationGetPayload<T> | null, null>

    /**
     * Find the first Preparation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationFindFirstOrThrowArgs} args - Arguments to find a Preparation
     * @example
     * // Get one Preparation
     * const preparation = await prisma.preparation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PreparationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PreparationFindFirstOrThrowArgs>
    ): Prisma__PreparationClient<PreparationGetPayload<T>>

    /**
     * Find zero or more Preparations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preparations
     * const preparations = await prisma.preparation.findMany()
     * 
     * // Get first 10 Preparations
     * const preparations = await prisma.preparation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preparationWithIdOnly = await prisma.preparation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PreparationFindManyArgs>(
      args?: SelectSubset<T, PreparationFindManyArgs>
    ): PrismaPromise<Array<PreparationGetPayload<T>>>

    /**
     * Create a Preparation.
     * @param {PreparationCreateArgs} args - Arguments to create a Preparation.
     * @example
     * // Create one Preparation
     * const Preparation = await prisma.preparation.create({
     *   data: {
     *     // ... data to create a Preparation
     *   }
     * })
     * 
    **/
    create<T extends PreparationCreateArgs>(
      args: SelectSubset<T, PreparationCreateArgs>
    ): Prisma__PreparationClient<PreparationGetPayload<T>>

    /**
     * Delete a Preparation.
     * @param {PreparationDeleteArgs} args - Arguments to delete one Preparation.
     * @example
     * // Delete one Preparation
     * const Preparation = await prisma.preparation.delete({
     *   where: {
     *     // ... filter to delete one Preparation
     *   }
     * })
     * 
    **/
    delete<T extends PreparationDeleteArgs>(
      args: SelectSubset<T, PreparationDeleteArgs>
    ): Prisma__PreparationClient<PreparationGetPayload<T>>

    /**
     * Update one Preparation.
     * @param {PreparationUpdateArgs} args - Arguments to update one Preparation.
     * @example
     * // Update one Preparation
     * const preparation = await prisma.preparation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PreparationUpdateArgs>(
      args: SelectSubset<T, PreparationUpdateArgs>
    ): Prisma__PreparationClient<PreparationGetPayload<T>>

    /**
     * Delete zero or more Preparations.
     * @param {PreparationDeleteManyArgs} args - Arguments to filter Preparations to delete.
     * @example
     * // Delete a few Preparations
     * const { count } = await prisma.preparation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PreparationDeleteManyArgs>(
      args?: SelectSubset<T, PreparationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preparations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preparations
     * const preparation = await prisma.preparation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PreparationUpdateManyArgs>(
      args: SelectSubset<T, PreparationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Preparation.
     * @param {PreparationUpsertArgs} args - Arguments to update or create a Preparation.
     * @example
     * // Update or create a Preparation
     * const preparation = await prisma.preparation.upsert({
     *   create: {
     *     // ... data to create a Preparation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preparation we want to update
     *   }
     * })
    **/
    upsert<T extends PreparationUpsertArgs>(
      args: SelectSubset<T, PreparationUpsertArgs>
    ): Prisma__PreparationClient<PreparationGetPayload<T>>

    /**
     * Count the number of Preparations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationCountArgs} args - Arguments to filter Preparations to count.
     * @example
     * // Count the number of Preparations
     * const count = await prisma.preparation.count({
     *   where: {
     *     // ... the filter for the Preparations we want to count
     *   }
     * })
    **/
    count<T extends PreparationCountArgs>(
      args?: Subset<T, PreparationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreparationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preparation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreparationAggregateArgs>(args: Subset<T, PreparationAggregateArgs>): PrismaPromise<GetPreparationAggregateType<T>>

    /**
     * Group by Preparation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreparationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreparationGroupByArgs['orderBy'] }
        : { orderBy?: PreparationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreparationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreparationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Preparation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PreparationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recipe<T extends RecipeArgs= {}>(args?: Subset<T, RecipeArgs>): Prisma__RecipeClient<RecipeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Preparation base type for findUnique actions
   */
  export type PreparationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    /**
     * Filter, which Preparation to fetch.
     * 
    **/
    where: PreparationWhereUniqueInput
  }

  /**
   * Preparation findUnique
   */
  export interface PreparationFindUniqueArgs extends PreparationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Preparation findUniqueOrThrow
   */
  export type PreparationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    /**
     * Filter, which Preparation to fetch.
     * 
    **/
    where: PreparationWhereUniqueInput
  }


  /**
   * Preparation base type for findFirst actions
   */
  export type PreparationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    /**
     * Filter, which Preparation to fetch.
     * 
    **/
    where?: PreparationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preparations to fetch.
     * 
    **/
    orderBy?: Enumerable<PreparationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preparations.
     * 
    **/
    cursor?: PreparationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preparations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preparations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preparations.
     * 
    **/
    distinct?: Enumerable<PreparationScalarFieldEnum>
  }

  /**
   * Preparation findFirst
   */
  export interface PreparationFindFirstArgs extends PreparationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Preparation findFirstOrThrow
   */
  export type PreparationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    /**
     * Filter, which Preparation to fetch.
     * 
    **/
    where?: PreparationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preparations to fetch.
     * 
    **/
    orderBy?: Enumerable<PreparationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preparations.
     * 
    **/
    cursor?: PreparationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preparations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preparations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preparations.
     * 
    **/
    distinct?: Enumerable<PreparationScalarFieldEnum>
  }


  /**
   * Preparation findMany
   */
  export type PreparationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    /**
     * Filter, which Preparations to fetch.
     * 
    **/
    where?: PreparationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preparations to fetch.
     * 
    **/
    orderBy?: Enumerable<PreparationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preparations.
     * 
    **/
    cursor?: PreparationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preparations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preparations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PreparationScalarFieldEnum>
  }


  /**
   * Preparation create
   */
  export type PreparationCreateArgs = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    /**
     * The data needed to create a Preparation.
     * 
    **/
    data: XOR<PreparationCreateInput, PreparationUncheckedCreateInput>
  }


  /**
   * Preparation update
   */
  export type PreparationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    /**
     * The data needed to update a Preparation.
     * 
    **/
    data: XOR<PreparationUpdateInput, PreparationUncheckedUpdateInput>
    /**
     * Choose, which Preparation to update.
     * 
    **/
    where: PreparationWhereUniqueInput
  }


  /**
   * Preparation updateMany
   */
  export type PreparationUpdateManyArgs = {
    /**
     * The data used to update Preparations.
     * 
    **/
    data: XOR<PreparationUpdateManyMutationInput, PreparationUncheckedUpdateManyInput>
    /**
     * Filter which Preparations to update
     * 
    **/
    where?: PreparationWhereInput
  }


  /**
   * Preparation upsert
   */
  export type PreparationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    /**
     * The filter to search for the Preparation to update in case it exists.
     * 
    **/
    where: PreparationWhereUniqueInput
    /**
     * In case the Preparation found by the `where` argument doesn't exist, create a new Preparation with this data.
     * 
    **/
    create: XOR<PreparationCreateInput, PreparationUncheckedCreateInput>
    /**
     * In case the Preparation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PreparationUpdateInput, PreparationUncheckedUpdateInput>
  }


  /**
   * Preparation delete
   */
  export type PreparationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
    /**
     * Filter which Preparation to delete.
     * 
    **/
    where: PreparationWhereUniqueInput
  }


  /**
   * Preparation deleteMany
   */
  export type PreparationDeleteManyArgs = {
    /**
     * Filter which Preparations to delete
     * 
    **/
    where?: PreparationWhereInput
  }


  /**
   * Preparation without action
   */
  export type PreparationArgs = {
    /**
     * Select specific fields to fetch from the Preparation
     * 
    **/
    select?: PreparationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PreparationInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const IngredientScalarFieldEnum: {
    id: 'id',
    text: 'text',
    recipeId: 'recipeId'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const PreparationScalarFieldEnum: {
    id: 'id',
    text: 'text',
    recipeId: 'recipeId'
  };

  export type PreparationScalarFieldEnum = (typeof PreparationScalarFieldEnum)[keyof typeof PreparationScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    code: 'code',
    id: 'id',
    title: 'title',
    time: 'time',
    portions: 'portions',
    latitude: 'latitude',
    longitude: 'longitude',
    urlImage: 'urlImage'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type RecipeWhereInput = {
    AND?: Enumerable<RecipeWhereInput>
    OR?: Enumerable<RecipeWhereInput>
    NOT?: Enumerable<RecipeWhereInput>
    code?: StringFilter | string
    id?: IntFilter | number
    title?: StringFilter | string
    time?: StringFilter | string
    portions?: StringFilter | string
    latitude?: StringFilter | string
    longitude?: StringFilter | string
    urlImage?: StringFilter | string
    ingredients?: IngredientListRelationFilter
    preparation?: PreparationListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    code?: SortOrder
    id?: SortOrder
    title?: SortOrder
    time?: SortOrder
    portions?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    urlImage?: SortOrder
    ingredients?: IngredientOrderByRelationAggregateInput
    preparation?: PreparationOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = {
    id?: number
  }

  export type RecipeOrderByWithAggregationInput = {
    code?: SortOrder
    id?: SortOrder
    title?: SortOrder
    time?: SortOrder
    portions?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    urlImage?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    code?: StringWithAggregatesFilter | string
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    time?: StringWithAggregatesFilter | string
    portions?: StringWithAggregatesFilter | string
    latitude?: StringWithAggregatesFilter | string
    longitude?: StringWithAggregatesFilter | string
    urlImage?: StringWithAggregatesFilter | string
  }

  export type IngredientWhereInput = {
    AND?: Enumerable<IngredientWhereInput>
    OR?: Enumerable<IngredientWhereInput>
    NOT?: Enumerable<IngredientWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput> | null
    recipeId?: IntNullableFilter | number | null
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    recipeId?: SortOrder
  }

  export type IngredientWhereUniqueInput = {
    id?: string
  }

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    recipeId?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<IngredientScalarWhereWithAggregatesInput>
    OR?: Enumerable<IngredientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<IngredientScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    recipeId?: IntNullableWithAggregatesFilter | number | null
  }

  export type PreparationWhereInput = {
    AND?: Enumerable<PreparationWhereInput>
    OR?: Enumerable<PreparationWhereInput>
    NOT?: Enumerable<PreparationWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput> | null
    recipeId?: IntNullableFilter | number | null
  }

  export type PreparationOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    recipeId?: SortOrder
  }

  export type PreparationWhereUniqueInput = {
    id?: string
  }

  export type PreparationOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    recipeId?: SortOrder
    _count?: PreparationCountOrderByAggregateInput
    _avg?: PreparationAvgOrderByAggregateInput
    _max?: PreparationMaxOrderByAggregateInput
    _min?: PreparationMinOrderByAggregateInput
    _sum?: PreparationSumOrderByAggregateInput
  }

  export type PreparationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PreparationScalarWhereWithAggregatesInput>
    OR?: Enumerable<PreparationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PreparationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    recipeId?: IntNullableWithAggregatesFilter | number | null
  }

  export type RecipeCreateInput = {
    code: string
    id: number
    title: string
    time: string
    portions: string
    latitude: string
    longitude: string
    urlImage: string
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    preparation?: PreparationCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    code: string
    id: number
    title: string
    time: string
    portions: string
    latitude: string
    longitude: string
    urlImage: string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    preparation?: PreparationUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    portions?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    preparation?: PreparationUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    portions?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    preparation?: PreparationUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    portions?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    portions?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientCreateInput = {
    id?: string
    text: string
    recipe?: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    text: string
    recipeId?: number | null
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PreparationCreateInput = {
    id?: string
    text: string
    recipe?: RecipeCreateNestedOneWithoutPreparationInput
  }

  export type PreparationUncheckedCreateInput = {
    id?: string
    text: string
    recipeId?: number | null
  }

  export type PreparationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneWithoutPreparationNestedInput
  }

  export type PreparationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PreparationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PreparationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
  }

  export type PreparationListRelationFilter = {
    every?: PreparationWhereInput
    some?: PreparationWhereInput
    none?: PreparationWhereInput
  }

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PreparationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    code?: SortOrder
    id?: SortOrder
    title?: SortOrder
    time?: SortOrder
    portions?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    urlImage?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    code?: SortOrder
    id?: SortOrder
    title?: SortOrder
    time?: SortOrder
    portions?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    urlImage?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    code?: SortOrder
    id?: SortOrder
    title?: SortOrder
    time?: SortOrder
    portions?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    urlImage?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type RecipeRelationFilter = {
    is?: RecipeWhereInput | null
    isNot?: RecipeWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    recipeId?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    recipeId?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    recipeId?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    recipeId?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    recipeId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type PreparationCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    recipeId?: SortOrder
  }

  export type PreparationAvgOrderByAggregateInput = {
    recipeId?: SortOrder
  }

  export type PreparationMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    recipeId?: SortOrder
  }

  export type PreparationMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    recipeId?: SortOrder
  }

  export type PreparationSumOrderByAggregateInput = {
    recipeId?: SortOrder
  }

  export type IngredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<IngredientCreateWithoutRecipeInput>, Enumerable<IngredientUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<IngredientCreateOrConnectWithoutRecipeInput>
    connect?: Enumerable<IngredientWhereUniqueInput>
  }

  export type PreparationCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<PreparationCreateWithoutRecipeInput>, Enumerable<PreparationUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<PreparationCreateOrConnectWithoutRecipeInput>
    connect?: Enumerable<PreparationWhereUniqueInput>
  }

  export type IngredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<IngredientCreateWithoutRecipeInput>, Enumerable<IngredientUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<IngredientCreateOrConnectWithoutRecipeInput>
    connect?: Enumerable<IngredientWhereUniqueInput>
  }

  export type PreparationUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<PreparationCreateWithoutRecipeInput>, Enumerable<PreparationUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<PreparationCreateOrConnectWithoutRecipeInput>
    connect?: Enumerable<PreparationWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IngredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Enumerable<IngredientCreateWithoutRecipeInput>, Enumerable<IngredientUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<IngredientCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<IngredientUpsertWithWhereUniqueWithoutRecipeInput>
    set?: Enumerable<IngredientWhereUniqueInput>
    disconnect?: Enumerable<IngredientWhereUniqueInput>
    delete?: Enumerable<IngredientWhereUniqueInput>
    connect?: Enumerable<IngredientWhereUniqueInput>
    update?: Enumerable<IngredientUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<IngredientUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<IngredientScalarWhereInput>
  }

  export type PreparationUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Enumerable<PreparationCreateWithoutRecipeInput>, Enumerable<PreparationUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<PreparationCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<PreparationUpsertWithWhereUniqueWithoutRecipeInput>
    set?: Enumerable<PreparationWhereUniqueInput>
    disconnect?: Enumerable<PreparationWhereUniqueInput>
    delete?: Enumerable<PreparationWhereUniqueInput>
    connect?: Enumerable<PreparationWhereUniqueInput>
    update?: Enumerable<PreparationUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<PreparationUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<PreparationScalarWhereInput>
  }

  export type IngredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Enumerable<IngredientCreateWithoutRecipeInput>, Enumerable<IngredientUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<IngredientCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<IngredientUpsertWithWhereUniqueWithoutRecipeInput>
    set?: Enumerable<IngredientWhereUniqueInput>
    disconnect?: Enumerable<IngredientWhereUniqueInput>
    delete?: Enumerable<IngredientWhereUniqueInput>
    connect?: Enumerable<IngredientWhereUniqueInput>
    update?: Enumerable<IngredientUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<IngredientUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<IngredientScalarWhereInput>
  }

  export type PreparationUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Enumerable<PreparationCreateWithoutRecipeInput>, Enumerable<PreparationUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<PreparationCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<PreparationUpsertWithWhereUniqueWithoutRecipeInput>
    set?: Enumerable<PreparationWhereUniqueInput>
    disconnect?: Enumerable<PreparationWhereUniqueInput>
    delete?: Enumerable<PreparationWhereUniqueInput>
    connect?: Enumerable<PreparationWhereUniqueInput>
    update?: Enumerable<PreparationUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<PreparationUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<PreparationScalarWhereInput>
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    disconnect?: boolean
    delete?: boolean
    connect?: RecipeWhereUniqueInput
    update?: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeCreateNestedOneWithoutPreparationInput = {
    create?: XOR<RecipeCreateWithoutPreparationInput, RecipeUncheckedCreateWithoutPreparationInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutPreparationInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneWithoutPreparationNestedInput = {
    create?: XOR<RecipeCreateWithoutPreparationInput, RecipeUncheckedCreateWithoutPreparationInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutPreparationInput
    upsert?: RecipeUpsertWithoutPreparationInput
    disconnect?: boolean
    delete?: boolean
    connect?: RecipeWhereUniqueInput
    update?: XOR<RecipeUpdateWithoutPreparationInput, RecipeUncheckedUpdateWithoutPreparationInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type IngredientCreateWithoutRecipeInput = {
    id?: string
    text: string
  }

  export type IngredientUncheckedCreateWithoutRecipeInput = {
    id?: string
    text: string
  }

  export type IngredientCreateOrConnectWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type PreparationCreateWithoutRecipeInput = {
    id?: string
    text: string
  }

  export type PreparationUncheckedCreateWithoutRecipeInput = {
    id?: string
    text: string
  }

  export type PreparationCreateOrConnectWithoutRecipeInput = {
    where: PreparationWhereUniqueInput
    create: XOR<PreparationCreateWithoutRecipeInput, PreparationUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutRecipeInput, IngredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutRecipeInput, IngredientUncheckedUpdateWithoutRecipeInput>
  }

  export type IngredientUpdateManyWithWhereWithoutRecipeInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutIngredientsInput>
  }

  export type IngredientScalarWhereInput = {
    AND?: Enumerable<IngredientScalarWhereInput>
    OR?: Enumerable<IngredientScalarWhereInput>
    NOT?: Enumerable<IngredientScalarWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    recipeId?: IntNullableFilter | number | null
  }

  export type PreparationUpsertWithWhereUniqueWithoutRecipeInput = {
    where: PreparationWhereUniqueInput
    update: XOR<PreparationUpdateWithoutRecipeInput, PreparationUncheckedUpdateWithoutRecipeInput>
    create: XOR<PreparationCreateWithoutRecipeInput, PreparationUncheckedCreateWithoutRecipeInput>
  }

  export type PreparationUpdateWithWhereUniqueWithoutRecipeInput = {
    where: PreparationWhereUniqueInput
    data: XOR<PreparationUpdateWithoutRecipeInput, PreparationUncheckedUpdateWithoutRecipeInput>
  }

  export type PreparationUpdateManyWithWhereWithoutRecipeInput = {
    where: PreparationScalarWhereInput
    data: XOR<PreparationUpdateManyMutationInput, PreparationUncheckedUpdateManyWithoutPreparationInput>
  }

  export type PreparationScalarWhereInput = {
    AND?: Enumerable<PreparationScalarWhereInput>
    OR?: Enumerable<PreparationScalarWhereInput>
    NOT?: Enumerable<PreparationScalarWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    recipeId?: IntNullableFilter | number | null
  }

  export type RecipeCreateWithoutIngredientsInput = {
    code: string
    id: number
    title: string
    time: string
    portions: string
    latitude: string
    longitude: string
    urlImage: string
    preparation?: PreparationCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    code: string
    id: number
    title: string
    time: string
    portions: string
    latitude: string
    longitude: string
    urlImage: string
    preparation?: PreparationUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    portions?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    preparation?: PreparationUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    portions?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    preparation?: PreparationUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateWithoutPreparationInput = {
    code: string
    id: number
    title: string
    time: string
    portions: string
    latitude: string
    longitude: string
    urlImage: string
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutPreparationInput = {
    code: string
    id: number
    title: string
    time: string
    portions: string
    latitude: string
    longitude: string
    urlImage: string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutPreparationInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutPreparationInput, RecipeUncheckedCreateWithoutPreparationInput>
  }

  export type RecipeUpsertWithoutPreparationInput = {
    update: XOR<RecipeUpdateWithoutPreparationInput, RecipeUncheckedUpdateWithoutPreparationInput>
    create: XOR<RecipeCreateWithoutPreparationInput, RecipeUncheckedCreateWithoutPreparationInput>
  }

  export type RecipeUpdateWithoutPreparationInput = {
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    portions?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutPreparationInput = {
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    portions?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type IngredientUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PreparationUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PreparationUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PreparationUncheckedUpdateManyWithoutPreparationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
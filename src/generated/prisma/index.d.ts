
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  GUEST: 'GUEST'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Comments: 'Comments',
    Chat: 'Chat',
    Messages: 'Messages',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "comments" | "chat" | "messages" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    post?: PostOmit
    comments?: CommentsOmit
    chat?: ChatOmit
    messages?: MessagesOmit
    session?: SessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    followedBy: number
    following: number
    likedPost: number
    createdPosts: number
    commentsOnPost: number
    senderChat: number
    receiverChat: number
    senderMessage: number
    receiverMessage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followedBy?: boolean | UserCountOutputTypeCountFollowedByArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    likedPost?: boolean | UserCountOutputTypeCountLikedPostArgs
    createdPosts?: boolean | UserCountOutputTypeCountCreatedPostsArgs
    commentsOnPost?: boolean | UserCountOutputTypeCountCommentsOnPostArgs
    senderChat?: boolean | UserCountOutputTypeCountSenderChatArgs
    receiverChat?: boolean | UserCountOutputTypeCountReceiverChatArgs
    senderMessage?: boolean | UserCountOutputTypeCountSenderMessageArgs
    receiverMessage?: boolean | UserCountOutputTypeCountReceiverMessageArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsOnPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSenderChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiverChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSenderMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiverMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    likedPostByUsers: number
    post_commentsByUsers: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedPostByUsers?: boolean | PostCountOutputTypeCountLikedPostByUsersArgs
    post_commentsByUsers?: boolean | PostCountOutputTypeCountPost_commentsByUsersArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikedPostByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPost_commentsByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    childCommentReply: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childCommentReply?: boolean | CommentsCountOutputTypeCountChildCommentReplyArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountChildCommentReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    display_name: string | null
    bio: string | null
    website: string | null
    github: string | null
    password: string | null
    confirm_password: string | null
    profile_picture: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    display_name: string | null
    bio: string | null
    website: string | null
    github: string | null
    password: string | null
    confirm_password: string | null
    profile_picture: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    display_name: number
    bio: number
    website: number
    github: number
    password: number
    confirm_password: number
    profile_picture: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    display_name?: true
    bio?: true
    website?: true
    github?: true
    password?: true
    confirm_password?: true
    profile_picture?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    display_name?: true
    bio?: true
    website?: true
    github?: true
    password?: true
    confirm_password?: true
    profile_picture?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    display_name?: true
    bio?: true
    website?: true
    github?: true
    password?: true
    confirm_password?: true
    profile_picture?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    display_name?: boolean
    bio?: boolean
    website?: boolean
    github?: boolean
    password?: boolean
    confirm_password?: boolean
    profile_picture?: boolean
    role?: boolean
    followedBy?: boolean | User$followedByArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    likedPost?: boolean | User$likedPostArgs<ExtArgs>
    createdPosts?: boolean | User$createdPostsArgs<ExtArgs>
    commentsOnPost?: boolean | User$commentsOnPostArgs<ExtArgs>
    senderChat?: boolean | User$senderChatArgs<ExtArgs>
    receiverChat?: boolean | User$receiverChatArgs<ExtArgs>
    senderMessage?: boolean | User$senderMessageArgs<ExtArgs>
    receiverMessage?: boolean | User$receiverMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    display_name?: boolean
    bio?: boolean
    website?: boolean
    github?: boolean
    password?: boolean
    confirm_password?: boolean
    profile_picture?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    display_name?: boolean
    bio?: boolean
    website?: boolean
    github?: boolean
    password?: boolean
    confirm_password?: boolean
    profile_picture?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    display_name?: boolean
    bio?: boolean
    website?: boolean
    github?: boolean
    password?: boolean
    confirm_password?: boolean
    profile_picture?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "display_name" | "bio" | "website" | "github" | "password" | "confirm_password" | "profile_picture" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followedBy?: boolean | User$followedByArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    likedPost?: boolean | User$likedPostArgs<ExtArgs>
    createdPosts?: boolean | User$createdPostsArgs<ExtArgs>
    commentsOnPost?: boolean | User$commentsOnPostArgs<ExtArgs>
    senderChat?: boolean | User$senderChatArgs<ExtArgs>
    receiverChat?: boolean | User$receiverChatArgs<ExtArgs>
    senderMessage?: boolean | User$senderMessageArgs<ExtArgs>
    receiverMessage?: boolean | User$receiverMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      followedBy: Prisma.$UserPayload<ExtArgs>[]
      following: Prisma.$UserPayload<ExtArgs>[]
      likedPost: Prisma.$PostPayload<ExtArgs>[]
      createdPosts: Prisma.$PostPayload<ExtArgs>[]
      commentsOnPost: Prisma.$CommentsPayload<ExtArgs>[]
      senderChat: Prisma.$ChatPayload<ExtArgs>[]
      receiverChat: Prisma.$ChatPayload<ExtArgs>[]
      senderMessage: Prisma.$MessagesPayload<ExtArgs>[]
      receiverMessage: Prisma.$MessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      display_name: string
      bio: string
      website: string
      github: string
      password: string
      confirm_password: string
      profile_picture: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    followedBy<T extends User$followedByArgs<ExtArgs> = {}>(args?: Subset<T, User$followedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedPost<T extends User$likedPostArgs<ExtArgs> = {}>(args?: Subset<T, User$likedPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdPosts<T extends User$createdPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentsOnPost<T extends User$commentsOnPostArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsOnPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    senderChat<T extends User$senderChatArgs<ExtArgs> = {}>(args?: Subset<T, User$senderChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receiverChat<T extends User$receiverChatArgs<ExtArgs> = {}>(args?: Subset<T, User$receiverChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    senderMessage<T extends User$senderMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$senderMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receiverMessage<T extends User$receiverMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$receiverMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly display_name: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
    readonly github: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly confirm_password: FieldRef<"User", 'String'>
    readonly profile_picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.followedBy
   */
  export type User$followedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.likedPost
   */
  export type User$likedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.createdPosts
   */
  export type User$createdPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.commentsOnPost
   */
  export type User$commentsOnPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * User.senderChat
   */
  export type User$senderChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.receiverChat
   */
  export type User$receiverChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.senderMessage
   */
  export type User$senderMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * User.receiverMessage
   */
  export type User$receiverMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    post_likes: number | null
    post_comments: number | null
    post_authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    post_likes: number | null
    post_comments: number | null
    post_authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    post_content: string | null
    post_imageURL: string | null
    post_tag: string | null
    post_likes: number | null
    post_comments: number | null
    createdAt: Date | null
    post_authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    post_content: string | null
    post_imageURL: string | null
    post_tag: string | null
    post_likes: number | null
    post_comments: number | null
    createdAt: Date | null
    post_authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    post_content: number
    post_imageURL: number
    post_tag: number
    post_likes: number
    post_comments: number
    createdAt: number
    post_authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    post_likes?: true
    post_comments?: true
    post_authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    post_likes?: true
    post_comments?: true
    post_authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    post_content?: true
    post_imageURL?: true
    post_tag?: true
    post_likes?: true
    post_comments?: true
    createdAt?: true
    post_authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    post_content?: true
    post_imageURL?: true
    post_tag?: true
    post_likes?: true
    post_comments?: true
    createdAt?: true
    post_authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    post_content?: true
    post_imageURL?: true
    post_tag?: true
    post_likes?: true
    post_comments?: true
    createdAt?: true
    post_authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    post_content: string
    post_imageURL: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt: Date
    post_authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_content?: boolean
    post_imageURL?: boolean
    post_tag?: boolean
    post_likes?: boolean
    post_comments?: boolean
    createdAt?: boolean
    post_authorId?: boolean
    likedPostByUsers?: boolean | Post$likedPostByUsersArgs<ExtArgs>
    post_author?: boolean | UserDefaultArgs<ExtArgs>
    post_commentsByUsers?: boolean | Post$post_commentsByUsersArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_content?: boolean
    post_imageURL?: boolean
    post_tag?: boolean
    post_likes?: boolean
    post_comments?: boolean
    createdAt?: boolean
    post_authorId?: boolean
    post_author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_content?: boolean
    post_imageURL?: boolean
    post_tag?: boolean
    post_likes?: boolean
    post_comments?: boolean
    createdAt?: boolean
    post_authorId?: boolean
    post_author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    post_content?: boolean
    post_imageURL?: boolean
    post_tag?: boolean
    post_likes?: boolean
    post_comments?: boolean
    createdAt?: boolean
    post_authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "post_content" | "post_imageURL" | "post_tag" | "post_likes" | "post_comments" | "createdAt" | "post_authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedPostByUsers?: boolean | Post$likedPostByUsersArgs<ExtArgs>
    post_author?: boolean | UserDefaultArgs<ExtArgs>
    post_commentsByUsers?: boolean | Post$post_commentsByUsersArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      likedPostByUsers: Prisma.$UserPayload<ExtArgs>[]
      post_author: Prisma.$UserPayload<ExtArgs>
      post_commentsByUsers: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      post_content: string
      post_imageURL: string | null
      post_tag: string
      post_likes: number
      post_comments: number
      createdAt: Date
      post_authorId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likedPostByUsers<T extends Post$likedPostByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Post$likedPostByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post_commentsByUsers<T extends Post$post_commentsByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Post$post_commentsByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly post_content: FieldRef<"Post", 'String'>
    readonly post_imageURL: FieldRef<"Post", 'String'>
    readonly post_tag: FieldRef<"Post", 'String'>
    readonly post_likes: FieldRef<"Post", 'Int'>
    readonly post_comments: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly post_authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.likedPostByUsers
   */
  export type Post$likedPostByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Post.post_commentsByUsers
   */
  export type Post$post_commentsByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    comments_userId: number | null
    commented_postId: number | null
    parentCommentId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    comments_userId: number | null
    commented_postId: number | null
    parentCommentId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    comment_text: string | null
    comments_userId: number | null
    createdAt: Date | null
    commented_postId: number | null
    parentCommentId: number | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    comment_text: string | null
    comments_userId: number | null
    createdAt: Date | null
    commented_postId: number | null
    parentCommentId: number | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    comment_text: number
    comments_userId: number
    createdAt: number
    commented_postId: number
    parentCommentId: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    comments_userId?: true
    commented_postId?: true
    parentCommentId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    comments_userId?: true
    commented_postId?: true
    parentCommentId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    comment_text?: true
    comments_userId?: true
    createdAt?: true
    commented_postId?: true
    parentCommentId?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    comment_text?: true
    comments_userId?: true
    createdAt?: true
    commented_postId?: true
    parentCommentId?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    comment_text?: true
    comments_userId?: true
    createdAt?: true
    commented_postId?: true
    parentCommentId?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    comment_text: string
    comments_userId: number
    createdAt: Date
    commented_postId: number | null
    parentCommentId: number | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment_text?: boolean
    comments_userId?: boolean
    createdAt?: boolean
    commented_postId?: boolean
    parentCommentId?: boolean
    comments_user?: boolean | UserDefaultArgs<ExtArgs>
    commented_post?: boolean | Comments$commented_postArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
    childCommentReply?: boolean | Comments$childCommentReplyArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment_text?: boolean
    comments_userId?: boolean
    createdAt?: boolean
    commented_postId?: boolean
    parentCommentId?: boolean
    comments_user?: boolean | UserDefaultArgs<ExtArgs>
    commented_post?: boolean | Comments$commented_postArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment_text?: boolean
    comments_userId?: boolean
    createdAt?: boolean
    commented_postId?: boolean
    parentCommentId?: boolean
    comments_user?: boolean | UserDefaultArgs<ExtArgs>
    commented_post?: boolean | Comments$commented_postArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    comment_text?: boolean
    comments_userId?: boolean
    createdAt?: boolean
    commented_postId?: boolean
    parentCommentId?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment_text" | "comments_userId" | "createdAt" | "commented_postId" | "parentCommentId", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments_user?: boolean | UserDefaultArgs<ExtArgs>
    commented_post?: boolean | Comments$commented_postArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
    childCommentReply?: boolean | Comments$childCommentReplyArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments_user?: boolean | UserDefaultArgs<ExtArgs>
    commented_post?: boolean | Comments$commented_postArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments_user?: boolean | UserDefaultArgs<ExtArgs>
    commented_post?: boolean | Comments$commented_postArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      comments_user: Prisma.$UserPayload<ExtArgs>
      commented_post: Prisma.$PostPayload<ExtArgs> | null
      parentComment: Prisma.$CommentsPayload<ExtArgs> | null
      childCommentReply: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment_text: string
      comments_userId: number
      createdAt: Date
      commented_postId: number | null
      parentCommentId: number | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    commented_post<T extends Comments$commented_postArgs<ExtArgs> = {}>(args?: Subset<T, Comments$commented_postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parentComment<T extends Comments$parentCommentArgs<ExtArgs> = {}>(args?: Subset<T, Comments$parentCommentArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    childCommentReply<T extends Comments$childCommentReplyArgs<ExtArgs> = {}>(args?: Subset<T, Comments$childCommentReplyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly comment_text: FieldRef<"Comments", 'String'>
    readonly comments_userId: FieldRef<"Comments", 'Int'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly commented_postId: FieldRef<"Comments", 'Int'>
    readonly parentCommentId: FieldRef<"Comments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments.commented_post
   */
  export type Comments$commented_postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Comments.parentComment
   */
  export type Comments$parentCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
  }

  /**
   * Comments.childCommentReply
   */
  export type Comments$childCommentReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    senderChatId: number | null
    receiverChatId: number | null
  }

  export type ChatSumAggregateOutputType = {
    senderChatId: number | null
    receiverChatId: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    senderChatId: number | null
    receiverChatId: number | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    senderChatId: number | null
    receiverChatId: number | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    senderChatId: number
    receiverChatId: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    senderChatId?: true
    receiverChatId?: true
  }

  export type ChatSumAggregateInputType = {
    senderChatId?: true
    receiverChatId?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    senderChatId?: true
    receiverChatId?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    senderChatId?: true
    receiverChatId?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    senderChatId?: true
    receiverChatId?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    senderChatId: number
    receiverChatId: number
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderChatId?: boolean
    receiverChatId?: boolean
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderChatId?: boolean
    receiverChatId?: boolean
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderChatId?: boolean
    receiverChatId?: boolean
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    senderChatId?: boolean
    receiverChatId?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderChatId" | "receiverChatId", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      senderChat: Prisma.$UserPayload<ExtArgs>
      receiverChat: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderChatId: number
      receiverChatId: number
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderChat<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiverChat<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly senderChatId: FieldRef<"Chat", 'Int'>
    readonly receiverChatId: FieldRef<"Chat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    senderMessageId: number | null
    receiverMessageId: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    senderMessageId: number | null
    receiverMessageId: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    message_text: string | null
    message_imageURL: string | null
    createdAt: Date | null
    senderMessageId: number | null
    receiverMessageId: number | null
    chatId: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    message_text: string | null
    message_imageURL: string | null
    createdAt: Date | null
    senderMessageId: number | null
    receiverMessageId: number | null
    chatId: string | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    message_text: number
    message_imageURL: number
    createdAt: number
    senderMessageId: number
    receiverMessageId: number
    chatId: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    senderMessageId?: true
    receiverMessageId?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    senderMessageId?: true
    receiverMessageId?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    message_text?: true
    message_imageURL?: true
    createdAt?: true
    senderMessageId?: true
    receiverMessageId?: true
    chatId?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    message_text?: true
    message_imageURL?: true
    createdAt?: true
    senderMessageId?: true
    receiverMessageId?: true
    chatId?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    message_text?: true
    message_imageURL?: true
    createdAt?: true
    senderMessageId?: true
    receiverMessageId?: true
    chatId?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    message_text: string
    message_imageURL: string | null
    createdAt: Date
    senderMessageId: number
    receiverMessageId: number
    chatId: string
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_text?: boolean
    message_imageURL?: boolean
    createdAt?: boolean
    senderMessageId?: boolean
    receiverMessageId?: boolean
    chatId?: boolean
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_text?: boolean
    message_imageURL?: boolean
    createdAt?: boolean
    senderMessageId?: boolean
    receiverMessageId?: boolean
    chatId?: boolean
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_text?: boolean
    message_imageURL?: boolean
    createdAt?: boolean
    senderMessageId?: boolean
    receiverMessageId?: boolean
    chatId?: boolean
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    message_text?: boolean
    message_imageURL?: boolean
    createdAt?: boolean
    senderMessageId?: boolean
    receiverMessageId?: boolean
    chatId?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_text" | "message_imageURL" | "createdAt" | "senderMessageId" | "receiverMessageId" | "chatId", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      senderMessage: Prisma.$UserPayload<ExtArgs>
      receiverMessage: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message_text: string
      message_imageURL: string | null
      createdAt: Date
      senderMessageId: number
      receiverMessageId: number
      chatId: string
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
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
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderMessage<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiverMessage<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'Int'>
    readonly message_text: FieldRef<"Messages", 'String'>
    readonly message_imageURL: FieldRef<"Messages", 'String'>
    readonly createdAt: FieldRef<"Messages", 'DateTime'>
    readonly senderMessageId: FieldRef<"Messages", 'Int'>
    readonly receiverMessageId: FieldRef<"Messages", 'Int'>
    readonly chatId: FieldRef<"Messages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    display_name: 'display_name',
    bio: 'bio',
    website: 'website',
    github: 'github',
    password: 'password',
    confirm_password: 'confirm_password',
    profile_picture: 'profile_picture',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const PostScalarFieldEnum: {
    id: 'id',
    post_content: 'post_content',
    post_imageURL: 'post_imageURL',
    post_tag: 'post_tag',
    post_likes: 'post_likes',
    post_comments: 'post_comments',
    createdAt: 'createdAt',
    post_authorId: 'post_authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    comment_text: 'comment_text',
    comments_userId: 'comments_userId',
    createdAt: 'createdAt',
    commented_postId: 'commented_postId',
    parentCommentId: 'parentCommentId'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    senderChatId: 'senderChatId',
    receiverChatId: 'receiverChatId'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    message_text: 'message_text',
    message_imageURL: 'message_imageURL',
    createdAt: 'createdAt',
    senderMessageId: 'senderMessageId',
    receiverMessageId: 'receiverMessageId',
    chatId: 'chatId'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    display_name?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    website?: StringFilter<"User"> | string
    github?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    confirm_password?: StringFilter<"User"> | string
    profile_picture?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    followedBy?: UserListRelationFilter
    following?: UserListRelationFilter
    likedPost?: PostListRelationFilter
    createdPosts?: PostListRelationFilter
    commentsOnPost?: CommentsListRelationFilter
    senderChat?: ChatListRelationFilter
    receiverChat?: ChatListRelationFilter
    senderMessage?: MessagesListRelationFilter
    receiverMessage?: MessagesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    github?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    followedBy?: UserOrderByRelationAggregateInput
    following?: UserOrderByRelationAggregateInput
    likedPost?: PostOrderByRelationAggregateInput
    createdPosts?: PostOrderByRelationAggregateInput
    commentsOnPost?: CommentsOrderByRelationAggregateInput
    senderChat?: ChatOrderByRelationAggregateInput
    receiverChat?: ChatOrderByRelationAggregateInput
    senderMessage?: MessagesOrderByRelationAggregateInput
    receiverMessage?: MessagesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    display_name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    bio?: StringFilter<"User"> | string
    website?: StringFilter<"User"> | string
    github?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    confirm_password?: StringFilter<"User"> | string
    profile_picture?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    followedBy?: UserListRelationFilter
    following?: UserListRelationFilter
    likedPost?: PostListRelationFilter
    createdPosts?: PostListRelationFilter
    commentsOnPost?: CommentsListRelationFilter
    senderChat?: ChatListRelationFilter
    receiverChat?: ChatListRelationFilter
    senderMessage?: MessagesListRelationFilter
    receiverMessage?: MessagesListRelationFilter
  }, "id" | "username" | "display_name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    github?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    display_name?: StringWithAggregatesFilter<"User"> | string
    bio?: StringWithAggregatesFilter<"User"> | string
    website?: StringWithAggregatesFilter<"User"> | string
    github?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    confirm_password?: StringWithAggregatesFilter<"User"> | string
    profile_picture?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    post_content?: StringFilter<"Post"> | string
    post_imageURL?: StringNullableFilter<"Post"> | string | null
    post_tag?: StringFilter<"Post"> | string
    post_likes?: IntFilter<"Post"> | number
    post_comments?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    post_authorId?: IntFilter<"Post"> | number
    likedPostByUsers?: UserListRelationFilter
    post_author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post_commentsByUsers?: CommentsListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    post_content?: SortOrder
    post_imageURL?: SortOrderInput | SortOrder
    post_tag?: SortOrder
    post_likes?: SortOrder
    post_comments?: SortOrder
    createdAt?: SortOrder
    post_authorId?: SortOrder
    likedPostByUsers?: UserOrderByRelationAggregateInput
    post_author?: UserOrderByWithRelationInput
    post_commentsByUsers?: CommentsOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    post_content?: StringFilter<"Post"> | string
    post_imageURL?: StringNullableFilter<"Post"> | string | null
    post_tag?: StringFilter<"Post"> | string
    post_likes?: IntFilter<"Post"> | number
    post_comments?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    post_authorId?: IntFilter<"Post"> | number
    likedPostByUsers?: UserListRelationFilter
    post_author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post_commentsByUsers?: CommentsListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    post_content?: SortOrder
    post_imageURL?: SortOrderInput | SortOrder
    post_tag?: SortOrder
    post_likes?: SortOrder
    post_comments?: SortOrder
    createdAt?: SortOrder
    post_authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    post_content?: StringWithAggregatesFilter<"Post"> | string
    post_imageURL?: StringNullableWithAggregatesFilter<"Post"> | string | null
    post_tag?: StringWithAggregatesFilter<"Post"> | string
    post_likes?: IntWithAggregatesFilter<"Post"> | number
    post_comments?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    post_authorId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    comment_text?: StringFilter<"Comments"> | string
    comments_userId?: IntFilter<"Comments"> | number
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    commented_postId?: IntNullableFilter<"Comments"> | number | null
    parentCommentId?: IntNullableFilter<"Comments"> | number | null
    comments_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    commented_post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    parentComment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    childCommentReply?: CommentsListRelationFilter
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    comment_text?: SortOrder
    comments_userId?: SortOrder
    createdAt?: SortOrder
    commented_postId?: SortOrderInput | SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    comments_user?: UserOrderByWithRelationInput
    commented_post?: PostOrderByWithRelationInput
    parentComment?: CommentsOrderByWithRelationInput
    childCommentReply?: CommentsOrderByRelationAggregateInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    comment_text?: StringFilter<"Comments"> | string
    comments_userId?: IntFilter<"Comments"> | number
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    commented_postId?: IntNullableFilter<"Comments"> | number | null
    parentCommentId?: IntNullableFilter<"Comments"> | number | null
    comments_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    commented_post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    parentComment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    childCommentReply?: CommentsListRelationFilter
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    comment_text?: SortOrder
    comments_userId?: SortOrder
    createdAt?: SortOrder
    commented_postId?: SortOrderInput | SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    comment_text?: StringWithAggregatesFilter<"Comments"> | string
    comments_userId?: IntWithAggregatesFilter<"Comments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    commented_postId?: IntNullableWithAggregatesFilter<"Comments"> | number | null
    parentCommentId?: IntNullableWithAggregatesFilter<"Comments"> | number | null
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    senderChatId?: IntFilter<"Chat"> | number
    receiverChatId?: IntFilter<"Chat"> | number
    senderChat?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverChat?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessagesListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
    senderChat?: UserOrderByWithRelationInput
    receiverChat?: UserOrderByWithRelationInput
    messages?: MessagesOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    senderChatId?: IntFilter<"Chat"> | number
    receiverChatId?: IntFilter<"Chat"> | number
    senderChat?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverChat?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessagesListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    senderChatId?: IntWithAggregatesFilter<"Chat"> | number
    receiverChatId?: IntWithAggregatesFilter<"Chat"> | number
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: IntFilter<"Messages"> | number
    message_text?: StringFilter<"Messages"> | string
    message_imageURL?: StringNullableFilter<"Messages"> | string | null
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    senderMessageId?: IntFilter<"Messages"> | number
    receiverMessageId?: IntFilter<"Messages"> | number
    chatId?: StringFilter<"Messages"> | string
    senderMessage?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverMessage?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
    senderMessage?: UserOrderByWithRelationInput
    receiverMessage?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    message_text?: StringFilter<"Messages"> | string
    message_imageURL?: StringNullableFilter<"Messages"> | string | null
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    senderMessageId?: IntFilter<"Messages"> | number
    receiverMessageId?: IntFilter<"Messages"> | number
    chatId?: StringFilter<"Messages"> | string
    senderMessage?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverMessage?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _avg?: MessagesAvgOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
    _sum?: MessagesSumOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Messages"> | number
    message_text?: StringWithAggregatesFilter<"Messages"> | string
    message_imageURL?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    senderMessageId?: IntWithAggregatesFilter<"Messages"> | number
    receiverMessageId?: IntWithAggregatesFilter<"Messages"> | number
    chatId?: StringWithAggregatesFilter<"Messages"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserCreateNestedManyWithoutFollowingInput
    following?: UserCreateNestedManyWithoutFollowedByInput
    likedPost?: PostCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsCreateNestedManyWithoutComments_userInput
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput
    likedPost?: PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostUncheckedCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsUncheckedCreateNestedManyWithoutComments_userInput
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUpdateManyWithoutFollowingNestedInput
    following?: UserUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUncheckedUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUncheckedUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PostCreateInput = {
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
    likedPostByUsers?: UserCreateNestedManyWithoutLikedPostInput
    post_author: UserCreateNestedOneWithoutCreatedPostsInput
    post_commentsByUsers?: CommentsCreateNestedManyWithoutCommented_postInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
    post_authorId: number
    likedPostByUsers?: UserUncheckedCreateNestedManyWithoutLikedPostInput
    post_commentsByUsers?: CommentsUncheckedCreateNestedManyWithoutCommented_postInput
  }

  export type PostUpdateInput = {
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedPostByUsers?: UserUpdateManyWithoutLikedPostNestedInput
    post_author?: UserUpdateOneRequiredWithoutCreatedPostsNestedInput
    post_commentsByUsers?: CommentsUpdateManyWithoutCommented_postNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_authorId?: IntFieldUpdateOperationsInput | number
    likedPostByUsers?: UserUncheckedUpdateManyWithoutLikedPostNestedInput
    post_commentsByUsers?: CommentsUncheckedUpdateManyWithoutCommented_postNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
    post_authorId: number
  }

  export type PostUpdateManyMutationInput = {
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsCreateInput = {
    comment_text: string
    createdAt?: Date | string
    comments_user: UserCreateNestedOneWithoutCommentsOnPostInput
    commented_post?: PostCreateNestedOneWithoutPost_commentsByUsersInput
    parentComment?: CommentsCreateNestedOneWithoutChildCommentReplyInput
    childCommentReply?: CommentsCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    comment_text: string
    comments_userId: number
    createdAt?: Date | string
    commented_postId?: number | null
    parentCommentId?: number | null
    childCommentReply?: CommentsUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsUpdateInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments_user?: UserUpdateOneRequiredWithoutCommentsOnPostNestedInput
    commented_post?: PostUpdateOneWithoutPost_commentsByUsersNestedInput
    parentComment?: CommentsUpdateOneWithoutChildCommentReplyNestedInput
    childCommentReply?: CommentsUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    comments_userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commented_postId?: NullableIntFieldUpdateOperationsInput | number | null
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    childCommentReply?: CommentsUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsCreateManyInput = {
    id?: number
    comment_text: string
    comments_userId: number
    createdAt?: Date | string
    commented_postId?: number | null
    parentCommentId?: number | null
  }

  export type CommentsUpdateManyMutationInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    comments_userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commented_postId?: NullableIntFieldUpdateOperationsInput | number | null
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatCreateInput = {
    id?: string
    senderChat: UserCreateNestedOneWithoutSenderChatInput
    receiverChat: UserCreateNestedOneWithoutReceiverChatInput
    messages?: MessagesCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    senderChatId: number
    receiverChatId: number
    messages?: MessagesUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChat?: UserUpdateOneRequiredWithoutSenderChatNestedInput
    receiverChat?: UserUpdateOneRequiredWithoutReceiverChatNestedInput
    messages?: MessagesUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
    receiverChatId?: IntFieldUpdateOperationsInput | number
    messages?: MessagesUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    senderChatId: number
    receiverChatId: number
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
    receiverChatId?: IntFieldUpdateOperationsInput | number
  }

  export type MessagesCreateInput = {
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    senderMessage: UserCreateNestedOneWithoutSenderMessageInput
    receiverMessage: UserCreateNestedOneWithoutReceiverMessageInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: number
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    senderMessageId: number
    receiverMessageId: number
    chatId: string
  }

  export type MessagesUpdateInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessage?: UserUpdateOneRequiredWithoutSenderMessageNestedInput
    receiverMessage?: UserUpdateOneRequiredWithoutReceiverMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    receiverMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateManyInput = {
    id?: number
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    senderMessageId: number
    receiverMessageId: number
    chatId: string
  }

  export type MessagesUpdateManyMutationInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    receiverMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    github?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    github?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    github?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    post_content?: SortOrder
    post_imageURL?: SortOrder
    post_tag?: SortOrder
    post_likes?: SortOrder
    post_comments?: SortOrder
    createdAt?: SortOrder
    post_authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    post_likes?: SortOrder
    post_comments?: SortOrder
    post_authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    post_content?: SortOrder
    post_imageURL?: SortOrder
    post_tag?: SortOrder
    post_likes?: SortOrder
    post_comments?: SortOrder
    createdAt?: SortOrder
    post_authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    post_content?: SortOrder
    post_imageURL?: SortOrder
    post_tag?: SortOrder
    post_likes?: SortOrder
    post_comments?: SortOrder
    createdAt?: SortOrder
    post_authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    post_likes?: SortOrder
    post_comments?: SortOrder
    post_authorId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: CommentsWhereInput | null
    isNot?: CommentsWhereInput | null
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    comment_text?: SortOrder
    comments_userId?: SortOrder
    createdAt?: SortOrder
    commented_postId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    comments_userId?: SortOrder
    commented_postId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment_text?: SortOrder
    comments_userId?: SortOrder
    createdAt?: SortOrder
    commented_postId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    comment_text?: SortOrder
    comments_userId?: SortOrder
    createdAt?: SortOrder
    commented_postId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    comments_userId?: SortOrder
    commented_postId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageURL?: SortOrder
    createdAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
  }

  export type MessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageURL?: SortOrder
    createdAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageURL?: SortOrder
    createdAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
  }

  export type MessagesSumOrderByAggregateInput = {
    id?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFollowedByInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput> | UserCreateWithoutFollowedByInput[] | UserUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput | UserCreateOrConnectWithoutFollowedByInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutLikedPostByUsersInput = {
    create?: XOR<PostCreateWithoutLikedPostByUsersInput, PostUncheckedCreateWithoutLikedPostByUsersInput> | PostCreateWithoutLikedPostByUsersInput[] | PostUncheckedCreateWithoutLikedPostByUsersInput[]
    connectOrCreate?: PostCreateOrConnectWithoutLikedPostByUsersInput | PostCreateOrConnectWithoutLikedPostByUsersInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutPost_authorInput = {
    create?: XOR<PostCreateWithoutPost_authorInput, PostUncheckedCreateWithoutPost_authorInput> | PostCreateWithoutPost_authorInput[] | PostUncheckedCreateWithoutPost_authorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPost_authorInput | PostCreateOrConnectWithoutPost_authorInput[]
    createMany?: PostCreateManyPost_authorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutComments_userInput = {
    create?: XOR<CommentsCreateWithoutComments_userInput, CommentsUncheckedCreateWithoutComments_userInput> | CommentsCreateWithoutComments_userInput[] | CommentsUncheckedCreateWithoutComments_userInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutComments_userInput | CommentsCreateOrConnectWithoutComments_userInput[]
    createMany?: CommentsCreateManyComments_userInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutSenderChatInput = {
    create?: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput> | ChatCreateWithoutSenderChatInput[] | ChatUncheckedCreateWithoutSenderChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderChatInput | ChatCreateOrConnectWithoutSenderChatInput[]
    createMany?: ChatCreateManySenderChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutReceiverChatInput = {
    create?: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput> | ChatCreateWithoutReceiverChatInput[] | ChatUncheckedCreateWithoutReceiverChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverChatInput | ChatCreateOrConnectWithoutReceiverChatInput[]
    createMany?: ChatCreateManyReceiverChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutSenderMessageInput = {
    create?: XOR<MessagesCreateWithoutSenderMessageInput, MessagesUncheckedCreateWithoutSenderMessageInput> | MessagesCreateWithoutSenderMessageInput[] | MessagesUncheckedCreateWithoutSenderMessageInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderMessageInput | MessagesCreateOrConnectWithoutSenderMessageInput[]
    createMany?: MessagesCreateManySenderMessageInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutReceiverMessageInput = {
    create?: XOR<MessagesCreateWithoutReceiverMessageInput, MessagesUncheckedCreateWithoutReceiverMessageInput> | MessagesCreateWithoutReceiverMessageInput[] | MessagesUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverMessageInput | MessagesCreateOrConnectWithoutReceiverMessageInput[]
    createMany?: MessagesCreateManyReceiverMessageInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowedByInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput> | UserCreateWithoutFollowedByInput[] | UserUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput | UserCreateOrConnectWithoutFollowedByInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput = {
    create?: XOR<PostCreateWithoutLikedPostByUsersInput, PostUncheckedCreateWithoutLikedPostByUsersInput> | PostCreateWithoutLikedPostByUsersInput[] | PostUncheckedCreateWithoutLikedPostByUsersInput[]
    connectOrCreate?: PostCreateOrConnectWithoutLikedPostByUsersInput | PostCreateOrConnectWithoutLikedPostByUsersInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutPost_authorInput = {
    create?: XOR<PostCreateWithoutPost_authorInput, PostUncheckedCreateWithoutPost_authorInput> | PostCreateWithoutPost_authorInput[] | PostUncheckedCreateWithoutPost_authorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPost_authorInput | PostCreateOrConnectWithoutPost_authorInput[]
    createMany?: PostCreateManyPost_authorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutComments_userInput = {
    create?: XOR<CommentsCreateWithoutComments_userInput, CommentsUncheckedCreateWithoutComments_userInput> | CommentsCreateWithoutComments_userInput[] | CommentsUncheckedCreateWithoutComments_userInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutComments_userInput | CommentsCreateOrConnectWithoutComments_userInput[]
    createMany?: CommentsCreateManyComments_userInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutSenderChatInput = {
    create?: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput> | ChatCreateWithoutSenderChatInput[] | ChatUncheckedCreateWithoutSenderChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderChatInput | ChatCreateOrConnectWithoutSenderChatInput[]
    createMany?: ChatCreateManySenderChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutReceiverChatInput = {
    create?: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput> | ChatCreateWithoutReceiverChatInput[] | ChatUncheckedCreateWithoutReceiverChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverChatInput | ChatCreateOrConnectWithoutReceiverChatInput[]
    createMany?: ChatCreateManyReceiverChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutSenderMessageInput = {
    create?: XOR<MessagesCreateWithoutSenderMessageInput, MessagesUncheckedCreateWithoutSenderMessageInput> | MessagesCreateWithoutSenderMessageInput[] | MessagesUncheckedCreateWithoutSenderMessageInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderMessageInput | MessagesCreateOrConnectWithoutSenderMessageInput[]
    createMany?: MessagesCreateManySenderMessageInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput = {
    create?: XOR<MessagesCreateWithoutReceiverMessageInput, MessagesUncheckedCreateWithoutReceiverMessageInput> | MessagesCreateWithoutReceiverMessageInput[] | MessagesUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverMessageInput | MessagesCreateOrConnectWithoutReceiverMessageInput[]
    createMany?: MessagesCreateManyReceiverMessageInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput | UserUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput | UserUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowingInput | UserUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFollowedByNestedInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput> | UserCreateWithoutFollowedByInput[] | UserUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput | UserCreateOrConnectWithoutFollowedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedByInput | UserUpsertWithWhereUniqueWithoutFollowedByInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedByInput | UserUpdateWithWhereUniqueWithoutFollowedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedByInput | UserUpdateManyWithWhereWithoutFollowedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PostUpdateManyWithoutLikedPostByUsersNestedInput = {
    create?: XOR<PostCreateWithoutLikedPostByUsersInput, PostUncheckedCreateWithoutLikedPostByUsersInput> | PostCreateWithoutLikedPostByUsersInput[] | PostUncheckedCreateWithoutLikedPostByUsersInput[]
    connectOrCreate?: PostCreateOrConnectWithoutLikedPostByUsersInput | PostCreateOrConnectWithoutLikedPostByUsersInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutLikedPostByUsersInput | PostUpsertWithWhereUniqueWithoutLikedPostByUsersInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutLikedPostByUsersInput | PostUpdateWithWhereUniqueWithoutLikedPostByUsersInput[]
    updateMany?: PostUpdateManyWithWhereWithoutLikedPostByUsersInput | PostUpdateManyWithWhereWithoutLikedPostByUsersInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUpdateManyWithoutPost_authorNestedInput = {
    create?: XOR<PostCreateWithoutPost_authorInput, PostUncheckedCreateWithoutPost_authorInput> | PostCreateWithoutPost_authorInput[] | PostUncheckedCreateWithoutPost_authorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPost_authorInput | PostCreateOrConnectWithoutPost_authorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPost_authorInput | PostUpsertWithWhereUniqueWithoutPost_authorInput[]
    createMany?: PostCreateManyPost_authorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPost_authorInput | PostUpdateWithWhereUniqueWithoutPost_authorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPost_authorInput | PostUpdateManyWithWhereWithoutPost_authorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutComments_userNestedInput = {
    create?: XOR<CommentsCreateWithoutComments_userInput, CommentsUncheckedCreateWithoutComments_userInput> | CommentsCreateWithoutComments_userInput[] | CommentsUncheckedCreateWithoutComments_userInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutComments_userInput | CommentsCreateOrConnectWithoutComments_userInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutComments_userInput | CommentsUpsertWithWhereUniqueWithoutComments_userInput[]
    createMany?: CommentsCreateManyComments_userInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutComments_userInput | CommentsUpdateWithWhereUniqueWithoutComments_userInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutComments_userInput | CommentsUpdateManyWithWhereWithoutComments_userInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutSenderChatNestedInput = {
    create?: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput> | ChatCreateWithoutSenderChatInput[] | ChatUncheckedCreateWithoutSenderChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderChatInput | ChatCreateOrConnectWithoutSenderChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderChatInput | ChatUpsertWithWhereUniqueWithoutSenderChatInput[]
    createMany?: ChatCreateManySenderChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderChatInput | ChatUpdateWithWhereUniqueWithoutSenderChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderChatInput | ChatUpdateManyWithWhereWithoutSenderChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutReceiverChatNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput> | ChatCreateWithoutReceiverChatInput[] | ChatUncheckedCreateWithoutReceiverChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverChatInput | ChatCreateOrConnectWithoutReceiverChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverChatInput | ChatUpsertWithWhereUniqueWithoutReceiverChatInput[]
    createMany?: ChatCreateManyReceiverChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverChatInput | ChatUpdateWithWhereUniqueWithoutReceiverChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverChatInput | ChatUpdateManyWithWhereWithoutReceiverChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutSenderMessageNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderMessageInput, MessagesUncheckedCreateWithoutSenderMessageInput> | MessagesCreateWithoutSenderMessageInput[] | MessagesUncheckedCreateWithoutSenderMessageInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderMessageInput | MessagesCreateOrConnectWithoutSenderMessageInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderMessageInput | MessagesUpsertWithWhereUniqueWithoutSenderMessageInput[]
    createMany?: MessagesCreateManySenderMessageInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderMessageInput | MessagesUpdateWithWhereUniqueWithoutSenderMessageInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderMessageInput | MessagesUpdateManyWithWhereWithoutSenderMessageInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutReceiverMessageNestedInput = {
    create?: XOR<MessagesCreateWithoutReceiverMessageInput, MessagesUncheckedCreateWithoutReceiverMessageInput> | MessagesCreateWithoutReceiverMessageInput[] | MessagesUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverMessageInput | MessagesCreateOrConnectWithoutReceiverMessageInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReceiverMessageInput | MessagesUpsertWithWhereUniqueWithoutReceiverMessageInput[]
    createMany?: MessagesCreateManyReceiverMessageInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReceiverMessageInput | MessagesUpdateWithWhereUniqueWithoutReceiverMessageInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReceiverMessageInput | MessagesUpdateManyWithWhereWithoutReceiverMessageInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput | UserUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput | UserUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowingInput | UserUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowedByNestedInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput> | UserCreateWithoutFollowedByInput[] | UserUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput | UserCreateOrConnectWithoutFollowedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedByInput | UserUpsertWithWhereUniqueWithoutFollowedByInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedByInput | UserUpdateWithWhereUniqueWithoutFollowedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedByInput | UserUpdateManyWithWhereWithoutFollowedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput = {
    create?: XOR<PostCreateWithoutLikedPostByUsersInput, PostUncheckedCreateWithoutLikedPostByUsersInput> | PostCreateWithoutLikedPostByUsersInput[] | PostUncheckedCreateWithoutLikedPostByUsersInput[]
    connectOrCreate?: PostCreateOrConnectWithoutLikedPostByUsersInput | PostCreateOrConnectWithoutLikedPostByUsersInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutLikedPostByUsersInput | PostUpsertWithWhereUniqueWithoutLikedPostByUsersInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutLikedPostByUsersInput | PostUpdateWithWhereUniqueWithoutLikedPostByUsersInput[]
    updateMany?: PostUpdateManyWithWhereWithoutLikedPostByUsersInput | PostUpdateManyWithWhereWithoutLikedPostByUsersInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutPost_authorNestedInput = {
    create?: XOR<PostCreateWithoutPost_authorInput, PostUncheckedCreateWithoutPost_authorInput> | PostCreateWithoutPost_authorInput[] | PostUncheckedCreateWithoutPost_authorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPost_authorInput | PostCreateOrConnectWithoutPost_authorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPost_authorInput | PostUpsertWithWhereUniqueWithoutPost_authorInput[]
    createMany?: PostCreateManyPost_authorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPost_authorInput | PostUpdateWithWhereUniqueWithoutPost_authorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPost_authorInput | PostUpdateManyWithWhereWithoutPost_authorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutComments_userNestedInput = {
    create?: XOR<CommentsCreateWithoutComments_userInput, CommentsUncheckedCreateWithoutComments_userInput> | CommentsCreateWithoutComments_userInput[] | CommentsUncheckedCreateWithoutComments_userInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutComments_userInput | CommentsCreateOrConnectWithoutComments_userInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutComments_userInput | CommentsUpsertWithWhereUniqueWithoutComments_userInput[]
    createMany?: CommentsCreateManyComments_userInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutComments_userInput | CommentsUpdateWithWhereUniqueWithoutComments_userInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutComments_userInput | CommentsUpdateManyWithWhereWithoutComments_userInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutSenderChatNestedInput = {
    create?: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput> | ChatCreateWithoutSenderChatInput[] | ChatUncheckedCreateWithoutSenderChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderChatInput | ChatCreateOrConnectWithoutSenderChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderChatInput | ChatUpsertWithWhereUniqueWithoutSenderChatInput[]
    createMany?: ChatCreateManySenderChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderChatInput | ChatUpdateWithWhereUniqueWithoutSenderChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderChatInput | ChatUpdateManyWithWhereWithoutSenderChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutReceiverChatNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput> | ChatCreateWithoutReceiverChatInput[] | ChatUncheckedCreateWithoutReceiverChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverChatInput | ChatCreateOrConnectWithoutReceiverChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverChatInput | ChatUpsertWithWhereUniqueWithoutReceiverChatInput[]
    createMany?: ChatCreateManyReceiverChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverChatInput | ChatUpdateWithWhereUniqueWithoutReceiverChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverChatInput | ChatUpdateManyWithWhereWithoutReceiverChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderMessageInput, MessagesUncheckedCreateWithoutSenderMessageInput> | MessagesCreateWithoutSenderMessageInput[] | MessagesUncheckedCreateWithoutSenderMessageInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderMessageInput | MessagesCreateOrConnectWithoutSenderMessageInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderMessageInput | MessagesUpsertWithWhereUniqueWithoutSenderMessageInput[]
    createMany?: MessagesCreateManySenderMessageInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderMessageInput | MessagesUpdateWithWhereUniqueWithoutSenderMessageInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderMessageInput | MessagesUpdateManyWithWhereWithoutSenderMessageInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput = {
    create?: XOR<MessagesCreateWithoutReceiverMessageInput, MessagesUncheckedCreateWithoutReceiverMessageInput> | MessagesCreateWithoutReceiverMessageInput[] | MessagesUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverMessageInput | MessagesCreateOrConnectWithoutReceiverMessageInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReceiverMessageInput | MessagesUpsertWithWhereUniqueWithoutReceiverMessageInput[]
    createMany?: MessagesCreateManyReceiverMessageInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReceiverMessageInput | MessagesUpdateWithWhereUniqueWithoutReceiverMessageInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReceiverMessageInput | MessagesUpdateManyWithWhereWithoutReceiverMessageInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutLikedPostInput = {
    create?: XOR<UserCreateWithoutLikedPostInput, UserUncheckedCreateWithoutLikedPostInput> | UserCreateWithoutLikedPostInput[] | UserUncheckedCreateWithoutLikedPostInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostInput | UserCreateOrConnectWithoutLikedPostInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedPostsInput = {
    create?: XOR<UserCreateWithoutCreatedPostsInput, UserUncheckedCreateWithoutCreatedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutCommented_postInput = {
    create?: XOR<CommentsCreateWithoutCommented_postInput, CommentsUncheckedCreateWithoutCommented_postInput> | CommentsCreateWithoutCommented_postInput[] | CommentsUncheckedCreateWithoutCommented_postInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCommented_postInput | CommentsCreateOrConnectWithoutCommented_postInput[]
    createMany?: CommentsCreateManyCommented_postInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLikedPostInput = {
    create?: XOR<UserCreateWithoutLikedPostInput, UserUncheckedCreateWithoutLikedPostInput> | UserCreateWithoutLikedPostInput[] | UserUncheckedCreateWithoutLikedPostInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostInput | UserCreateOrConnectWithoutLikedPostInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutCommented_postInput = {
    create?: XOR<CommentsCreateWithoutCommented_postInput, CommentsUncheckedCreateWithoutCommented_postInput> | CommentsCreateWithoutCommented_postInput[] | CommentsUncheckedCreateWithoutCommented_postInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCommented_postInput | CommentsCreateOrConnectWithoutCommented_postInput[]
    createMany?: CommentsCreateManyCommented_postInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutLikedPostNestedInput = {
    create?: XOR<UserCreateWithoutLikedPostInput, UserUncheckedCreateWithoutLikedPostInput> | UserCreateWithoutLikedPostInput[] | UserUncheckedCreateWithoutLikedPostInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostInput | UserCreateOrConnectWithoutLikedPostInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedPostInput | UserUpsertWithWhereUniqueWithoutLikedPostInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedPostInput | UserUpdateWithWhereUniqueWithoutLikedPostInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedPostInput | UserUpdateManyWithWhereWithoutLikedPostInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedPostsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedPostsInput, UserUncheckedCreateWithoutCreatedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPostsInput
    upsert?: UserUpsertWithoutCreatedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedPostsInput, UserUpdateWithoutCreatedPostsInput>, UserUncheckedUpdateWithoutCreatedPostsInput>
  }

  export type CommentsUpdateManyWithoutCommented_postNestedInput = {
    create?: XOR<CommentsCreateWithoutCommented_postInput, CommentsUncheckedCreateWithoutCommented_postInput> | CommentsCreateWithoutCommented_postInput[] | CommentsUncheckedCreateWithoutCommented_postInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCommented_postInput | CommentsCreateOrConnectWithoutCommented_postInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutCommented_postInput | CommentsUpsertWithWhereUniqueWithoutCommented_postInput[]
    createMany?: CommentsCreateManyCommented_postInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutCommented_postInput | CommentsUpdateWithWhereUniqueWithoutCommented_postInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutCommented_postInput | CommentsUpdateManyWithWhereWithoutCommented_postInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLikedPostNestedInput = {
    create?: XOR<UserCreateWithoutLikedPostInput, UserUncheckedCreateWithoutLikedPostInput> | UserCreateWithoutLikedPostInput[] | UserUncheckedCreateWithoutLikedPostInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostInput | UserCreateOrConnectWithoutLikedPostInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedPostInput | UserUpsertWithWhereUniqueWithoutLikedPostInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedPostInput | UserUpdateWithWhereUniqueWithoutLikedPostInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedPostInput | UserUpdateManyWithWhereWithoutLikedPostInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutCommented_postNestedInput = {
    create?: XOR<CommentsCreateWithoutCommented_postInput, CommentsUncheckedCreateWithoutCommented_postInput> | CommentsCreateWithoutCommented_postInput[] | CommentsUncheckedCreateWithoutCommented_postInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCommented_postInput | CommentsCreateOrConnectWithoutCommented_postInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutCommented_postInput | CommentsUpsertWithWhereUniqueWithoutCommented_postInput[]
    createMany?: CommentsCreateManyCommented_postInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutCommented_postInput | CommentsUpdateWithWhereUniqueWithoutCommented_postInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutCommented_postInput | CommentsUpdateManyWithWhereWithoutCommented_postInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsOnPostInput = {
    create?: XOR<UserCreateWithoutCommentsOnPostInput, UserUncheckedCreateWithoutCommentsOnPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsOnPostInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutPost_commentsByUsersInput = {
    create?: XOR<PostCreateWithoutPost_commentsByUsersInput, PostUncheckedCreateWithoutPost_commentsByUsersInput>
    connectOrCreate?: PostCreateOrConnectWithoutPost_commentsByUsersInput
    connect?: PostWhereUniqueInput
  }

  export type CommentsCreateNestedOneWithoutChildCommentReplyInput = {
    create?: XOR<CommentsCreateWithoutChildCommentReplyInput, CommentsUncheckedCreateWithoutChildCommentReplyInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutChildCommentReplyInput
    connect?: CommentsWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput> | CommentsCreateWithoutParentCommentInput[] | CommentsUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentCommentInput | CommentsCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentsCreateManyParentCommentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput> | CommentsCreateWithoutParentCommentInput[] | CommentsUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentCommentInput | CommentsCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentsCreateManyParentCommentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCommentsOnPostNestedInput = {
    create?: XOR<UserCreateWithoutCommentsOnPostInput, UserUncheckedCreateWithoutCommentsOnPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsOnPostInput
    upsert?: UserUpsertWithoutCommentsOnPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsOnPostInput, UserUpdateWithoutCommentsOnPostInput>, UserUncheckedUpdateWithoutCommentsOnPostInput>
  }

  export type PostUpdateOneWithoutPost_commentsByUsersNestedInput = {
    create?: XOR<PostCreateWithoutPost_commentsByUsersInput, PostUncheckedCreateWithoutPost_commentsByUsersInput>
    connectOrCreate?: PostCreateOrConnectWithoutPost_commentsByUsersInput
    upsert?: PostUpsertWithoutPost_commentsByUsersInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPost_commentsByUsersInput, PostUpdateWithoutPost_commentsByUsersInput>, PostUncheckedUpdateWithoutPost_commentsByUsersInput>
  }

  export type CommentsUpdateOneWithoutChildCommentReplyNestedInput = {
    create?: XOR<CommentsCreateWithoutChildCommentReplyInput, CommentsUncheckedCreateWithoutChildCommentReplyInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutChildCommentReplyInput
    upsert?: CommentsUpsertWithoutChildCommentReplyInput
    disconnect?: CommentsWhereInput | boolean
    delete?: CommentsWhereInput | boolean
    connect?: CommentsWhereUniqueInput
    update?: XOR<XOR<CommentsUpdateToOneWithWhereWithoutChildCommentReplyInput, CommentsUpdateWithoutChildCommentReplyInput>, CommentsUncheckedUpdateWithoutChildCommentReplyInput>
  }

  export type CommentsUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput> | CommentsCreateWithoutParentCommentInput[] | CommentsUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentCommentInput | CommentsCreateOrConnectWithoutParentCommentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentCommentInput | CommentsUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: CommentsCreateManyParentCommentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentCommentInput | CommentsUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentCommentInput | CommentsUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentsUncheckedUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput> | CommentsCreateWithoutParentCommentInput[] | CommentsUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentCommentInput | CommentsCreateOrConnectWithoutParentCommentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentCommentInput | CommentsUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: CommentsCreateManyParentCommentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentCommentInput | CommentsUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentCommentInput | CommentsUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSenderChatInput = {
    create?: XOR<UserCreateWithoutSenderChatInput, UserUncheckedCreateWithoutSenderChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderChatInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceiverChatInput = {
    create?: XOR<UserCreateWithoutReceiverChatInput, UserUncheckedCreateWithoutReceiverChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverChatInput
    connect?: UserWhereUniqueInput
  }

  export type MessagesCreateNestedManyWithoutChatInput = {
    create?: XOR<MessagesCreateWithoutChatInput, MessagesUncheckedCreateWithoutChatInput> | MessagesCreateWithoutChatInput[] | MessagesUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutChatInput | MessagesCreateOrConnectWithoutChatInput[]
    createMany?: MessagesCreateManyChatInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessagesCreateWithoutChatInput, MessagesUncheckedCreateWithoutChatInput> | MessagesCreateWithoutChatInput[] | MessagesUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutChatInput | MessagesCreateOrConnectWithoutChatInput[]
    createMany?: MessagesCreateManyChatInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSenderChatNestedInput = {
    create?: XOR<UserCreateWithoutSenderChatInput, UserUncheckedCreateWithoutSenderChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderChatInput
    upsert?: UserUpsertWithoutSenderChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSenderChatInput, UserUpdateWithoutSenderChatInput>, UserUncheckedUpdateWithoutSenderChatInput>
  }

  export type UserUpdateOneRequiredWithoutReceiverChatNestedInput = {
    create?: XOR<UserCreateWithoutReceiverChatInput, UserUncheckedCreateWithoutReceiverChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverChatInput
    upsert?: UserUpsertWithoutReceiverChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiverChatInput, UserUpdateWithoutReceiverChatInput>, UserUncheckedUpdateWithoutReceiverChatInput>
  }

  export type MessagesUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessagesCreateWithoutChatInput, MessagesUncheckedCreateWithoutChatInput> | MessagesCreateWithoutChatInput[] | MessagesUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutChatInput | MessagesCreateOrConnectWithoutChatInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutChatInput | MessagesUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessagesCreateManyChatInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutChatInput | MessagesUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutChatInput | MessagesUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessagesCreateWithoutChatInput, MessagesUncheckedCreateWithoutChatInput> | MessagesCreateWithoutChatInput[] | MessagesUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutChatInput | MessagesCreateOrConnectWithoutChatInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutChatInput | MessagesUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessagesCreateManyChatInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutChatInput | MessagesUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutChatInput | MessagesUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSenderMessageInput = {
    create?: XOR<UserCreateWithoutSenderMessageInput, UserUncheckedCreateWithoutSenderMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderMessageInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceiverMessageInput = {
    create?: XOR<UserCreateWithoutReceiverMessageInput, UserUncheckedCreateWithoutReceiverMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverMessageInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSenderMessageNestedInput = {
    create?: XOR<UserCreateWithoutSenderMessageInput, UserUncheckedCreateWithoutSenderMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderMessageInput
    upsert?: UserUpsertWithoutSenderMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSenderMessageInput, UserUpdateWithoutSenderMessageInput>, UserUncheckedUpdateWithoutSenderMessageInput>
  }

  export type UserUpdateOneRequiredWithoutReceiverMessageNestedInput = {
    create?: XOR<UserCreateWithoutReceiverMessageInput, UserUncheckedCreateWithoutReceiverMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverMessageInput
    upsert?: UserUpsertWithoutReceiverMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiverMessageInput, UserUpdateWithoutReceiverMessageInput>, UserUncheckedUpdateWithoutReceiverMessageInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutFollowingInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserCreateNestedManyWithoutFollowingInput
    likedPost?: PostCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsCreateNestedManyWithoutComments_userInput
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput
    likedPost?: PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostUncheckedCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsUncheckedCreateNestedManyWithoutComments_userInput
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserCreateWithoutFollowedByInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    following?: UserCreateNestedManyWithoutFollowedByInput
    likedPost?: PostCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsCreateNestedManyWithoutComments_userInput
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUncheckedCreateWithoutFollowedByInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput
    likedPost?: PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostUncheckedCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsUncheckedCreateNestedManyWithoutComments_userInput
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserCreateOrConnectWithoutFollowedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput>
  }

  export type PostCreateWithoutLikedPostByUsersInput = {
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
    post_author: UserCreateNestedOneWithoutCreatedPostsInput
    post_commentsByUsers?: CommentsCreateNestedManyWithoutCommented_postInput
  }

  export type PostUncheckedCreateWithoutLikedPostByUsersInput = {
    id?: number
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
    post_authorId: number
    post_commentsByUsers?: CommentsUncheckedCreateNestedManyWithoutCommented_postInput
  }

  export type PostCreateOrConnectWithoutLikedPostByUsersInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikedPostByUsersInput, PostUncheckedCreateWithoutLikedPostByUsersInput>
  }

  export type PostCreateWithoutPost_authorInput = {
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
    likedPostByUsers?: UserCreateNestedManyWithoutLikedPostInput
    post_commentsByUsers?: CommentsCreateNestedManyWithoutCommented_postInput
  }

  export type PostUncheckedCreateWithoutPost_authorInput = {
    id?: number
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
    likedPostByUsers?: UserUncheckedCreateNestedManyWithoutLikedPostInput
    post_commentsByUsers?: CommentsUncheckedCreateNestedManyWithoutCommented_postInput
  }

  export type PostCreateOrConnectWithoutPost_authorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPost_authorInput, PostUncheckedCreateWithoutPost_authorInput>
  }

  export type PostCreateManyPost_authorInputEnvelope = {
    data: PostCreateManyPost_authorInput | PostCreateManyPost_authorInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutComments_userInput = {
    comment_text: string
    createdAt?: Date | string
    commented_post?: PostCreateNestedOneWithoutPost_commentsByUsersInput
    parentComment?: CommentsCreateNestedOneWithoutChildCommentReplyInput
    childCommentReply?: CommentsCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsUncheckedCreateWithoutComments_userInput = {
    id?: number
    comment_text: string
    createdAt?: Date | string
    commented_postId?: number | null
    parentCommentId?: number | null
    childCommentReply?: CommentsUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsCreateOrConnectWithoutComments_userInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutComments_userInput, CommentsUncheckedCreateWithoutComments_userInput>
  }

  export type CommentsCreateManyComments_userInputEnvelope = {
    data: CommentsCreateManyComments_userInput | CommentsCreateManyComments_userInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutSenderChatInput = {
    id?: string
    receiverChat: UserCreateNestedOneWithoutReceiverChatInput
    messages?: MessagesCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutSenderChatInput = {
    id?: string
    receiverChatId: number
    messages?: MessagesUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutSenderChatInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput>
  }

  export type ChatCreateManySenderChatInputEnvelope = {
    data: ChatCreateManySenderChatInput | ChatCreateManySenderChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutReceiverChatInput = {
    id?: string
    senderChat: UserCreateNestedOneWithoutSenderChatInput
    messages?: MessagesCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutReceiverChatInput = {
    id?: string
    senderChatId: number
    messages?: MessagesUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutReceiverChatInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput>
  }

  export type ChatCreateManyReceiverChatInputEnvelope = {
    data: ChatCreateManyReceiverChatInput | ChatCreateManyReceiverChatInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutSenderMessageInput = {
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    receiverMessage: UserCreateNestedOneWithoutReceiverMessageInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutSenderMessageInput = {
    id?: number
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    receiverMessageId: number
    chatId: string
  }

  export type MessagesCreateOrConnectWithoutSenderMessageInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutSenderMessageInput, MessagesUncheckedCreateWithoutSenderMessageInput>
  }

  export type MessagesCreateManySenderMessageInputEnvelope = {
    data: MessagesCreateManySenderMessageInput | MessagesCreateManySenderMessageInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutReceiverMessageInput = {
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    senderMessage: UserCreateNestedOneWithoutSenderMessageInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutReceiverMessageInput = {
    id?: number
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    senderMessageId: number
    chatId: string
  }

  export type MessagesCreateOrConnectWithoutReceiverMessageInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutReceiverMessageInput, MessagesUncheckedCreateWithoutReceiverMessageInput>
  }

  export type MessagesCreateManyReceiverMessageInputEnvelope = {
    data: MessagesCreateManyReceiverMessageInput | MessagesCreateManyReceiverMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowingInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    display_name?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    website?: StringFilter<"User"> | string
    github?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    confirm_password?: StringFilter<"User"> | string
    profile_picture?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserUpsertWithWhereUniqueWithoutFollowedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowedByInput, UserUncheckedUpdateWithoutFollowedByInput>
    create: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowedByInput, UserUncheckedUpdateWithoutFollowedByInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowedByInput>
  }

  export type PostUpsertWithWhereUniqueWithoutLikedPostByUsersInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutLikedPostByUsersInput, PostUncheckedUpdateWithoutLikedPostByUsersInput>
    create: XOR<PostCreateWithoutLikedPostByUsersInput, PostUncheckedCreateWithoutLikedPostByUsersInput>
  }

  export type PostUpdateWithWhereUniqueWithoutLikedPostByUsersInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutLikedPostByUsersInput, PostUncheckedUpdateWithoutLikedPostByUsersInput>
  }

  export type PostUpdateManyWithWhereWithoutLikedPostByUsersInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutLikedPostByUsersInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    post_content?: StringFilter<"Post"> | string
    post_imageURL?: StringNullableFilter<"Post"> | string | null
    post_tag?: StringFilter<"Post"> | string
    post_likes?: IntFilter<"Post"> | number
    post_comments?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    post_authorId?: IntFilter<"Post"> | number
  }

  export type PostUpsertWithWhereUniqueWithoutPost_authorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutPost_authorInput, PostUncheckedUpdateWithoutPost_authorInput>
    create: XOR<PostCreateWithoutPost_authorInput, PostUncheckedCreateWithoutPost_authorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutPost_authorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutPost_authorInput, PostUncheckedUpdateWithoutPost_authorInput>
  }

  export type PostUpdateManyWithWhereWithoutPost_authorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPost_authorInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutComments_userInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutComments_userInput, CommentsUncheckedUpdateWithoutComments_userInput>
    create: XOR<CommentsCreateWithoutComments_userInput, CommentsUncheckedCreateWithoutComments_userInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutComments_userInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutComments_userInput, CommentsUncheckedUpdateWithoutComments_userInput>
  }

  export type CommentsUpdateManyWithWhereWithoutComments_userInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutComments_userInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    comment_text?: StringFilter<"Comments"> | string
    comments_userId?: IntFilter<"Comments"> | number
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    commented_postId?: IntNullableFilter<"Comments"> | number | null
    parentCommentId?: IntNullableFilter<"Comments"> | number | null
  }

  export type ChatUpsertWithWhereUniqueWithoutSenderChatInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutSenderChatInput, ChatUncheckedUpdateWithoutSenderChatInput>
    create: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutSenderChatInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutSenderChatInput, ChatUncheckedUpdateWithoutSenderChatInput>
  }

  export type ChatUpdateManyWithWhereWithoutSenderChatInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutSenderChatInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    senderChatId?: IntFilter<"Chat"> | number
    receiverChatId?: IntFilter<"Chat"> | number
  }

  export type ChatUpsertWithWhereUniqueWithoutReceiverChatInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutReceiverChatInput, ChatUncheckedUpdateWithoutReceiverChatInput>
    create: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutReceiverChatInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutReceiverChatInput, ChatUncheckedUpdateWithoutReceiverChatInput>
  }

  export type ChatUpdateManyWithWhereWithoutReceiverChatInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutReceiverChatInput>
  }

  export type MessagesUpsertWithWhereUniqueWithoutSenderMessageInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutSenderMessageInput, MessagesUncheckedUpdateWithoutSenderMessageInput>
    create: XOR<MessagesCreateWithoutSenderMessageInput, MessagesUncheckedCreateWithoutSenderMessageInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutSenderMessageInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutSenderMessageInput, MessagesUncheckedUpdateWithoutSenderMessageInput>
  }

  export type MessagesUpdateManyWithWhereWithoutSenderMessageInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutSenderMessageInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: IntFilter<"Messages"> | number
    message_text?: StringFilter<"Messages"> | string
    message_imageURL?: StringNullableFilter<"Messages"> | string | null
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    senderMessageId?: IntFilter<"Messages"> | number
    receiverMessageId?: IntFilter<"Messages"> | number
    chatId?: StringFilter<"Messages"> | string
  }

  export type MessagesUpsertWithWhereUniqueWithoutReceiverMessageInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutReceiverMessageInput, MessagesUncheckedUpdateWithoutReceiverMessageInput>
    create: XOR<MessagesCreateWithoutReceiverMessageInput, MessagesUncheckedCreateWithoutReceiverMessageInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutReceiverMessageInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutReceiverMessageInput, MessagesUncheckedUpdateWithoutReceiverMessageInput>
  }

  export type MessagesUpdateManyWithWhereWithoutReceiverMessageInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutReceiverMessageInput>
  }

  export type UserCreateWithoutLikedPostInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserCreateNestedManyWithoutFollowingInput
    following?: UserCreateNestedManyWithoutFollowedByInput
    createdPosts?: PostCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsCreateNestedManyWithoutComments_userInput
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUncheckedCreateWithoutLikedPostInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput
    createdPosts?: PostUncheckedCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsUncheckedCreateNestedManyWithoutComments_userInput
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserCreateOrConnectWithoutLikedPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedPostInput, UserUncheckedCreateWithoutLikedPostInput>
  }

  export type UserCreateWithoutCreatedPostsInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserCreateNestedManyWithoutFollowingInput
    following?: UserCreateNestedManyWithoutFollowedByInput
    likedPost?: PostCreateNestedManyWithoutLikedPostByUsersInput
    commentsOnPost?: CommentsCreateNestedManyWithoutComments_userInput
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUncheckedCreateWithoutCreatedPostsInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput
    likedPost?: PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput
    commentsOnPost?: CommentsUncheckedCreateNestedManyWithoutComments_userInput
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserCreateOrConnectWithoutCreatedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedPostsInput, UserUncheckedCreateWithoutCreatedPostsInput>
  }

  export type CommentsCreateWithoutCommented_postInput = {
    comment_text: string
    createdAt?: Date | string
    comments_user: UserCreateNestedOneWithoutCommentsOnPostInput
    parentComment?: CommentsCreateNestedOneWithoutChildCommentReplyInput
    childCommentReply?: CommentsCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsUncheckedCreateWithoutCommented_postInput = {
    id?: number
    comment_text: string
    comments_userId: number
    createdAt?: Date | string
    parentCommentId?: number | null
    childCommentReply?: CommentsUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsCreateOrConnectWithoutCommented_postInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutCommented_postInput, CommentsUncheckedCreateWithoutCommented_postInput>
  }

  export type CommentsCreateManyCommented_postInputEnvelope = {
    data: CommentsCreateManyCommented_postInput | CommentsCreateManyCommented_postInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutLikedPostInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLikedPostInput, UserUncheckedUpdateWithoutLikedPostInput>
    create: XOR<UserCreateWithoutLikedPostInput, UserUncheckedCreateWithoutLikedPostInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLikedPostInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLikedPostInput, UserUncheckedUpdateWithoutLikedPostInput>
  }

  export type UserUpdateManyWithWhereWithoutLikedPostInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLikedPostInput>
  }

  export type UserUpsertWithoutCreatedPostsInput = {
    update: XOR<UserUpdateWithoutCreatedPostsInput, UserUncheckedUpdateWithoutCreatedPostsInput>
    create: XOR<UserCreateWithoutCreatedPostsInput, UserUncheckedCreateWithoutCreatedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedPostsInput, UserUncheckedUpdateWithoutCreatedPostsInput>
  }

  export type UserUpdateWithoutCreatedPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUpdateManyWithoutFollowingNestedInput
    following?: UserUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUpdateManyWithoutLikedPostByUsersNestedInput
    commentsOnPost?: CommentsUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput
    commentsOnPost?: CommentsUncheckedUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutCommented_postInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutCommented_postInput, CommentsUncheckedUpdateWithoutCommented_postInput>
    create: XOR<CommentsCreateWithoutCommented_postInput, CommentsUncheckedCreateWithoutCommented_postInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutCommented_postInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutCommented_postInput, CommentsUncheckedUpdateWithoutCommented_postInput>
  }

  export type CommentsUpdateManyWithWhereWithoutCommented_postInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutCommented_postInput>
  }

  export type UserCreateWithoutCommentsOnPostInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserCreateNestedManyWithoutFollowingInput
    following?: UserCreateNestedManyWithoutFollowedByInput
    likedPost?: PostCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostCreateNestedManyWithoutPost_authorInput
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUncheckedCreateWithoutCommentsOnPostInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput
    likedPost?: PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostUncheckedCreateNestedManyWithoutPost_authorInput
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserCreateOrConnectWithoutCommentsOnPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsOnPostInput, UserUncheckedCreateWithoutCommentsOnPostInput>
  }

  export type PostCreateWithoutPost_commentsByUsersInput = {
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
    likedPostByUsers?: UserCreateNestedManyWithoutLikedPostInput
    post_author: UserCreateNestedOneWithoutCreatedPostsInput
  }

  export type PostUncheckedCreateWithoutPost_commentsByUsersInput = {
    id?: number
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
    post_authorId: number
    likedPostByUsers?: UserUncheckedCreateNestedManyWithoutLikedPostInput
  }

  export type PostCreateOrConnectWithoutPost_commentsByUsersInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPost_commentsByUsersInput, PostUncheckedCreateWithoutPost_commentsByUsersInput>
  }

  export type CommentsCreateWithoutChildCommentReplyInput = {
    comment_text: string
    createdAt?: Date | string
    comments_user: UserCreateNestedOneWithoutCommentsOnPostInput
    commented_post?: PostCreateNestedOneWithoutPost_commentsByUsersInput
    parentComment?: CommentsCreateNestedOneWithoutChildCommentReplyInput
  }

  export type CommentsUncheckedCreateWithoutChildCommentReplyInput = {
    id?: number
    comment_text: string
    comments_userId: number
    createdAt?: Date | string
    commented_postId?: number | null
    parentCommentId?: number | null
  }

  export type CommentsCreateOrConnectWithoutChildCommentReplyInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutChildCommentReplyInput, CommentsUncheckedCreateWithoutChildCommentReplyInput>
  }

  export type CommentsCreateWithoutParentCommentInput = {
    comment_text: string
    createdAt?: Date | string
    comments_user: UserCreateNestedOneWithoutCommentsOnPostInput
    commented_post?: PostCreateNestedOneWithoutPost_commentsByUsersInput
    childCommentReply?: CommentsCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsUncheckedCreateWithoutParentCommentInput = {
    id?: number
    comment_text: string
    comments_userId: number
    createdAt?: Date | string
    commented_postId?: number | null
    childCommentReply?: CommentsUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsCreateOrConnectWithoutParentCommentInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput>
  }

  export type CommentsCreateManyParentCommentInputEnvelope = {
    data: CommentsCreateManyParentCommentInput | CommentsCreateManyParentCommentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsOnPostInput = {
    update: XOR<UserUpdateWithoutCommentsOnPostInput, UserUncheckedUpdateWithoutCommentsOnPostInput>
    create: XOR<UserCreateWithoutCommentsOnPostInput, UserUncheckedCreateWithoutCommentsOnPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsOnPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsOnPostInput, UserUncheckedUpdateWithoutCommentsOnPostInput>
  }

  export type UserUpdateWithoutCommentsOnPostInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUpdateManyWithoutFollowingNestedInput
    following?: UserUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUpdateManyWithoutPost_authorNestedInput
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsOnPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUncheckedUpdateManyWithoutPost_authorNestedInput
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type PostUpsertWithoutPost_commentsByUsersInput = {
    update: XOR<PostUpdateWithoutPost_commentsByUsersInput, PostUncheckedUpdateWithoutPost_commentsByUsersInput>
    create: XOR<PostCreateWithoutPost_commentsByUsersInput, PostUncheckedCreateWithoutPost_commentsByUsersInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPost_commentsByUsersInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPost_commentsByUsersInput, PostUncheckedUpdateWithoutPost_commentsByUsersInput>
  }

  export type PostUpdateWithoutPost_commentsByUsersInput = {
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedPostByUsers?: UserUpdateManyWithoutLikedPostNestedInput
    post_author?: UserUpdateOneRequiredWithoutCreatedPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutPost_commentsByUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_authorId?: IntFieldUpdateOperationsInput | number
    likedPostByUsers?: UserUncheckedUpdateManyWithoutLikedPostNestedInput
  }

  export type CommentsUpsertWithoutChildCommentReplyInput = {
    update: XOR<CommentsUpdateWithoutChildCommentReplyInput, CommentsUncheckedUpdateWithoutChildCommentReplyInput>
    create: XOR<CommentsCreateWithoutChildCommentReplyInput, CommentsUncheckedCreateWithoutChildCommentReplyInput>
    where?: CommentsWhereInput
  }

  export type CommentsUpdateToOneWithWhereWithoutChildCommentReplyInput = {
    where?: CommentsWhereInput
    data: XOR<CommentsUpdateWithoutChildCommentReplyInput, CommentsUncheckedUpdateWithoutChildCommentReplyInput>
  }

  export type CommentsUpdateWithoutChildCommentReplyInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments_user?: UserUpdateOneRequiredWithoutCommentsOnPostNestedInput
    commented_post?: PostUpdateOneWithoutPost_commentsByUsersNestedInput
    parentComment?: CommentsUpdateOneWithoutChildCommentReplyNestedInput
  }

  export type CommentsUncheckedUpdateWithoutChildCommentReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    comments_userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commented_postId?: NullableIntFieldUpdateOperationsInput | number | null
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentsUpsertWithWhereUniqueWithoutParentCommentInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutParentCommentInput, CommentsUncheckedUpdateWithoutParentCommentInput>
    create: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutParentCommentInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutParentCommentInput, CommentsUncheckedUpdateWithoutParentCommentInput>
  }

  export type CommentsUpdateManyWithWhereWithoutParentCommentInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutParentCommentInput>
  }

  export type UserCreateWithoutSenderChatInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserCreateNestedManyWithoutFollowingInput
    following?: UserCreateNestedManyWithoutFollowedByInput
    likedPost?: PostCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsCreateNestedManyWithoutComments_userInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUncheckedCreateWithoutSenderChatInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput
    likedPost?: PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostUncheckedCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsUncheckedCreateNestedManyWithoutComments_userInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserCreateOrConnectWithoutSenderChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSenderChatInput, UserUncheckedCreateWithoutSenderChatInput>
  }

  export type UserCreateWithoutReceiverChatInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserCreateNestedManyWithoutFollowingInput
    following?: UserCreateNestedManyWithoutFollowedByInput
    likedPost?: PostCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsCreateNestedManyWithoutComments_userInput
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    senderMessage?: MessagesCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUncheckedCreateWithoutReceiverChatInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput
    likedPost?: PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostUncheckedCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsUncheckedCreateNestedManyWithoutComments_userInput
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    senderMessage?: MessagesUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserCreateOrConnectWithoutReceiverChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiverChatInput, UserUncheckedCreateWithoutReceiverChatInput>
  }

  export type MessagesCreateWithoutChatInput = {
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    senderMessage: UserCreateNestedOneWithoutSenderMessageInput
    receiverMessage: UserCreateNestedOneWithoutReceiverMessageInput
  }

  export type MessagesUncheckedCreateWithoutChatInput = {
    id?: number
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    senderMessageId: number
    receiverMessageId: number
  }

  export type MessagesCreateOrConnectWithoutChatInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutChatInput, MessagesUncheckedCreateWithoutChatInput>
  }

  export type MessagesCreateManyChatInputEnvelope = {
    data: MessagesCreateManyChatInput | MessagesCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSenderChatInput = {
    update: XOR<UserUpdateWithoutSenderChatInput, UserUncheckedUpdateWithoutSenderChatInput>
    create: XOR<UserCreateWithoutSenderChatInput, UserUncheckedCreateWithoutSenderChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSenderChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSenderChatInput, UserUncheckedUpdateWithoutSenderChatInput>
  }

  export type UserUpdateWithoutSenderChatInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUpdateManyWithoutFollowingNestedInput
    following?: UserUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUpdateManyWithoutComments_userNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateWithoutSenderChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUncheckedUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUncheckedUpdateManyWithoutComments_userNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUpsertWithoutReceiverChatInput = {
    update: XOR<UserUpdateWithoutReceiverChatInput, UserUncheckedUpdateWithoutReceiverChatInput>
    create: XOR<UserCreateWithoutReceiverChatInput, UserUncheckedCreateWithoutReceiverChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiverChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiverChatInput, UserUncheckedUpdateWithoutReceiverChatInput>
  }

  export type UserUpdateWithoutReceiverChatInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUpdateManyWithoutFollowingNestedInput
    following?: UserUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    senderMessage?: MessagesUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiverChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUncheckedUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUncheckedUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    senderMessage?: MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type MessagesUpsertWithWhereUniqueWithoutChatInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutChatInput, MessagesUncheckedUpdateWithoutChatInput>
    create: XOR<MessagesCreateWithoutChatInput, MessagesUncheckedCreateWithoutChatInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutChatInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutChatInput, MessagesUncheckedUpdateWithoutChatInput>
  }

  export type MessagesUpdateManyWithWhereWithoutChatInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutChatInput>
  }

  export type UserCreateWithoutSenderMessageInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserCreateNestedManyWithoutFollowingInput
    following?: UserCreateNestedManyWithoutFollowedByInput
    likedPost?: PostCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsCreateNestedManyWithoutComments_userInput
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    receiverMessage?: MessagesCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserUncheckedCreateWithoutSenderMessageInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput
    likedPost?: PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostUncheckedCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsUncheckedCreateNestedManyWithoutComments_userInput
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    receiverMessage?: MessagesUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserCreateOrConnectWithoutSenderMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSenderMessageInput, UserUncheckedCreateWithoutSenderMessageInput>
  }

  export type UserCreateWithoutReceiverMessageInput = {
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserCreateNestedManyWithoutFollowingInput
    following?: UserCreateNestedManyWithoutFollowedByInput
    likedPost?: PostCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsCreateNestedManyWithoutComments_userInput
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesCreateNestedManyWithoutSenderMessageInput
  }

  export type UserUncheckedCreateWithoutReceiverMessageInput = {
    id?: number
    username: string
    display_name: string
    bio: string
    website: string
    github: string
    password: string
    confirm_password: string
    profile_picture: string
    role?: $Enums.Role
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput
    likedPost?: PostUncheckedCreateNestedManyWithoutLikedPostByUsersInput
    createdPosts?: PostUncheckedCreateNestedManyWithoutPost_authorInput
    commentsOnPost?: CommentsUncheckedCreateNestedManyWithoutComments_userInput
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessagesUncheckedCreateNestedManyWithoutSenderMessageInput
  }

  export type UserCreateOrConnectWithoutReceiverMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiverMessageInput, UserUncheckedCreateWithoutReceiverMessageInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    senderChat: UserCreateNestedOneWithoutSenderChatInput
    receiverChat: UserCreateNestedOneWithoutReceiverChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    senderChatId: number
    receiverChatId: number
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutSenderMessageInput = {
    update: XOR<UserUpdateWithoutSenderMessageInput, UserUncheckedUpdateWithoutSenderMessageInput>
    create: XOR<UserCreateWithoutSenderMessageInput, UserUncheckedCreateWithoutSenderMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSenderMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSenderMessageInput, UserUncheckedUpdateWithoutSenderMessageInput>
  }

  export type UserUpdateWithoutSenderMessageInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUpdateManyWithoutFollowingNestedInput
    following?: UserUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    receiverMessage?: MessagesUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateWithoutSenderMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUncheckedUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUncheckedUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    receiverMessage?: MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUpsertWithoutReceiverMessageInput = {
    update: XOR<UserUpdateWithoutReceiverMessageInput, UserUncheckedUpdateWithoutReceiverMessageInput>
    create: XOR<UserCreateWithoutReceiverMessageInput, UserUncheckedCreateWithoutReceiverMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiverMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiverMessageInput, UserUncheckedUpdateWithoutReceiverMessageInput>
  }

  export type UserUpdateWithoutReceiverMessageInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUpdateManyWithoutFollowingNestedInput
    following?: UserUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUpdateManyWithoutSenderMessageNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiverMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUncheckedUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUncheckedUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChat?: UserUpdateOneRequiredWithoutSenderChatNestedInput
    receiverChat?: UserUpdateOneRequiredWithoutReceiverChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
    receiverChatId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyPost_authorInput = {
    id?: number
    post_content: string
    post_imageURL?: string | null
    post_tag: string
    post_likes: number
    post_comments: number
    createdAt?: Date | string
  }

  export type CommentsCreateManyComments_userInput = {
    id?: number
    comment_text: string
    createdAt?: Date | string
    commented_postId?: number | null
    parentCommentId?: number | null
  }

  export type ChatCreateManySenderChatInput = {
    id?: string
    receiverChatId: number
  }

  export type ChatCreateManyReceiverChatInput = {
    id?: string
    senderChatId: number
  }

  export type MessagesCreateManySenderMessageInput = {
    id?: number
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    receiverMessageId: number
    chatId: string
  }

  export type MessagesCreateManyReceiverMessageInput = {
    id?: number
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    senderMessageId: number
    chatId: string
  }

  export type UserUpdateWithoutFollowingInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUpdateManyWithoutFollowingNestedInput
    likedPost?: PostUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    likedPost?: PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUncheckedUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUncheckedUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUpdateWithoutFollowedByInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    following?: UserUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
    likedPost?: PostUncheckedUpdateManyWithoutLikedPostByUsersNestedInput
    createdPosts?: PostUncheckedUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUncheckedUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PostUpdateWithoutLikedPostByUsersInput = {
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_author?: UserUpdateOneRequiredWithoutCreatedPostsNestedInput
    post_commentsByUsers?: CommentsUpdateManyWithoutCommented_postNestedInput
  }

  export type PostUncheckedUpdateWithoutLikedPostByUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_authorId?: IntFieldUpdateOperationsInput | number
    post_commentsByUsers?: CommentsUncheckedUpdateManyWithoutCommented_postNestedInput
  }

  export type PostUncheckedUpdateManyWithoutLikedPostByUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostUpdateWithoutPost_authorInput = {
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedPostByUsers?: UserUpdateManyWithoutLikedPostNestedInput
    post_commentsByUsers?: CommentsUpdateManyWithoutCommented_postNestedInput
  }

  export type PostUncheckedUpdateWithoutPost_authorInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedPostByUsers?: UserUncheckedUpdateManyWithoutLikedPostNestedInput
    post_commentsByUsers?: CommentsUncheckedUpdateManyWithoutCommented_postNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPost_authorInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_content?: StringFieldUpdateOperationsInput | string
    post_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    post_tag?: StringFieldUpdateOperationsInput | string
    post_likes?: IntFieldUpdateOperationsInput | number
    post_comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutComments_userInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commented_post?: PostUpdateOneWithoutPost_commentsByUsersNestedInput
    parentComment?: CommentsUpdateOneWithoutChildCommentReplyNestedInput
    childCommentReply?: CommentsUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutComments_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commented_postId?: NullableIntFieldUpdateOperationsInput | number | null
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    childCommentReply?: CommentsUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutComments_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commented_postId?: NullableIntFieldUpdateOperationsInput | number | null
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatUpdateWithoutSenderChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverChat?: UserUpdateOneRequiredWithoutReceiverChatNestedInput
    messages?: MessagesUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutSenderChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverChatId?: IntFieldUpdateOperationsInput | number
    messages?: MessagesUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutSenderChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverChatId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatUpdateWithoutReceiverChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChat?: UserUpdateOneRequiredWithoutSenderChatNestedInput
    messages?: MessagesUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutReceiverChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
    messages?: MessagesUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutReceiverChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
  }

  export type MessagesUpdateWithoutSenderMessageInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessage?: UserUpdateOneRequiredWithoutReceiverMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutSenderMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateManyWithoutSenderMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUpdateWithoutReceiverMessageInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessage?: UserUpdateOneRequiredWithoutSenderMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutReceiverMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateManyWithoutReceiverMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateManyCommented_postInput = {
    id?: number
    comment_text: string
    comments_userId: number
    createdAt?: Date | string
    parentCommentId?: number | null
  }

  export type UserUpdateWithoutLikedPostInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUpdateManyWithoutFollowingNestedInput
    following?: UserUpdateManyWithoutFollowedByNestedInput
    createdPosts?: PostUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
    createdPosts?: PostUncheckedUpdateManyWithoutPost_authorNestedInput
    commentsOnPost?: CommentsUncheckedUpdateManyWithoutComments_userNestedInput
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessagesUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessagesUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLikedPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CommentsUpdateWithoutCommented_postInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments_user?: UserUpdateOneRequiredWithoutCommentsOnPostNestedInput
    parentComment?: CommentsUpdateOneWithoutChildCommentReplyNestedInput
    childCommentReply?: CommentsUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutCommented_postInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    comments_userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    childCommentReply?: CommentsUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutCommented_postInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    comments_userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentsCreateManyParentCommentInput = {
    id?: number
    comment_text: string
    comments_userId: number
    createdAt?: Date | string
    commented_postId?: number | null
  }

  export type CommentsUpdateWithoutParentCommentInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments_user?: UserUpdateOneRequiredWithoutCommentsOnPostNestedInput
    commented_post?: PostUpdateOneWithoutPost_commentsByUsersNestedInput
    childCommentReply?: CommentsUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutParentCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    comments_userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commented_postId?: NullableIntFieldUpdateOperationsInput | number | null
    childCommentReply?: CommentsUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutParentCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    comments_userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commented_postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessagesCreateManyChatInput = {
    id?: number
    message_text: string
    message_imageURL?: string | null
    createdAt?: Date | string
    senderMessageId: number
    receiverMessageId: number
  }

  export type MessagesUpdateWithoutChatInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessage?: UserUpdateOneRequiredWithoutSenderMessageNestedInput
    receiverMessage?: UserUpdateOneRequiredWithoutReceiverMessageNestedInput
  }

  export type MessagesUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    receiverMessageId?: IntFieldUpdateOperationsInput | number
  }

  export type MessagesUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    receiverMessageId?: IntFieldUpdateOperationsInput | number
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
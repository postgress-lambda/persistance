import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Roles: 'Roles';
    readonly permission: 'permission';
    readonly Useraccount: 'Useraccount';
    readonly UserProfile: 'UserProfile';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const RolesScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly sorthand: 'sorthand';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly rolesId: 'rolesId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const UseraccountScalarFieldEnum: {
    readonly id: 'id';
    readonly username: 'username';
    readonly hashpassword: 'hashpassword';
    readonly email: 'email';
    readonly emailVerified: 'emailVerified';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UseraccountScalarFieldEnum = (typeof UseraccountScalarFieldEnum)[keyof typeof UseraccountScalarFieldEnum];
export declare const UserProfileScalarFieldEnum: {
    readonly id: 'id';
    readonly account_id: 'account_id';
    readonly firstName: 'firstName';
    readonly lastName: 'lastName';
    readonly phoneNumber: 'phoneNumber';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

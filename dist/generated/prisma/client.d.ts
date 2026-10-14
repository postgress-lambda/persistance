import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Category
 *
 */
export type Category = Prisma.CategoryModel;
/**
 * Model subCategory
 *
 */
export type subCategory = Prisma.subCategoryModel;
/**
 * Model Attributes
 *
 */
export type Attributes = Prisma.AttributesModel;
/**
 * Model Products
 *
 */
export type Products = Prisma.ProductsModel;
/**
 * Model ProductAttributes
 *
 */
export type ProductAttributes = Prisma.ProductAttributesModel;
/**
 * Model productCategory_SubCat
 *
 */
export type productCategory_SubCat = Prisma.productCategory_SubCatModel;
/**
 * Model Roles
 *
 */
export type Roles = Prisma.RolesModel;
/**
 * Model permission
 *
 */
export type permission = Prisma.permissionModel;
/**
 * Model Useraccount
 *
 */
export type Useraccount = Prisma.UseraccountModel;
/**
 * Model UserProfile
 *
 */
export type UserProfile = Prisma.UserProfileModel;

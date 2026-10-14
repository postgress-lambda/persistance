import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model productCategory_SubCat
 *
 */
export type productCategory_SubCatModel = runtime.Types.Result.DefaultSelection<Prisma.$productCategory_SubCatPayload>;
export type AggregateProductCategory_SubCat = {
    _count: ProductCategory_SubCatCountAggregateOutputType | null;
    _avg: ProductCategory_SubCatAvgAggregateOutputType | null;
    _sum: ProductCategory_SubCatSumAggregateOutputType | null;
    _min: ProductCategory_SubCatMinAggregateOutputType | null;
    _max: ProductCategory_SubCatMaxAggregateOutputType | null;
};
export type ProductCategory_SubCatAvgAggregateOutputType = {
    id: number | null;
    productId: number | null;
    categoryId: number | null;
    subCategoryId: number | null;
};
export type ProductCategory_SubCatSumAggregateOutputType = {
    id: number | null;
    productId: number | null;
    categoryId: number | null;
    subCategoryId: number | null;
};
export type ProductCategory_SubCatMinAggregateOutputType = {
    id: number | null;
    productId: number | null;
    categoryId: number | null;
    subCategoryId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCategory_SubCatMaxAggregateOutputType = {
    id: number | null;
    productId: number | null;
    categoryId: number | null;
    subCategoryId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCategory_SubCatCountAggregateOutputType = {
    id: number;
    productId: number;
    categoryId: number;
    subCategoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductCategory_SubCatAvgAggregateInputType = {
    id?: true;
    productId?: true;
    categoryId?: true;
    subCategoryId?: true;
};
export type ProductCategory_SubCatSumAggregateInputType = {
    id?: true;
    productId?: true;
    categoryId?: true;
    subCategoryId?: true;
};
export type ProductCategory_SubCatMinAggregateInputType = {
    id?: true;
    productId?: true;
    categoryId?: true;
    subCategoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCategory_SubCatMaxAggregateInputType = {
    id?: true;
    productId?: true;
    categoryId?: true;
    subCategoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCategory_SubCatCountAggregateInputType = {
    id?: true;
    productId?: true;
    categoryId?: true;
    subCategoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductCategory_SubCatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which productCategory_SubCat to aggregate.
     */
    where?: Prisma.productCategory_SubCatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of productCategory_SubCats to fetch.
     */
    orderBy?: Prisma.productCategory_SubCatOrderByWithRelationInput | Prisma.productCategory_SubCatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.productCategory_SubCatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` productCategory_SubCats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` productCategory_SubCats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned productCategory_SubCats
    **/
    _count?: true | ProductCategory_SubCatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductCategory_SubCatAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductCategory_SubCatSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategory_SubCatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategory_SubCatMaxAggregateInputType;
};
export type GetProductCategory_SubCatAggregateType<T extends ProductCategory_SubCatAggregateArgs> = {
    [P in keyof T & keyof AggregateProductCategory_SubCat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductCategory_SubCat[P]> : Prisma.GetScalarType<T[P], AggregateProductCategory_SubCat[P]>;
};
export type productCategory_SubCatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productCategory_SubCatWhereInput;
    orderBy?: Prisma.productCategory_SubCatOrderByWithAggregationInput | Prisma.productCategory_SubCatOrderByWithAggregationInput[];
    by: Prisma.ProductCategory_SubCatScalarFieldEnum[] | Prisma.ProductCategory_SubCatScalarFieldEnum;
    having?: Prisma.productCategory_SubCatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCategory_SubCatCountAggregateInputType | true;
    _avg?: ProductCategory_SubCatAvgAggregateInputType;
    _sum?: ProductCategory_SubCatSumAggregateInputType;
    _min?: ProductCategory_SubCatMinAggregateInputType;
    _max?: ProductCategory_SubCatMaxAggregateInputType;
};
export type ProductCategory_SubCatGroupByOutputType = {
    id: number;
    productId: number;
    categoryId: number;
    subCategoryId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCategory_SubCatCountAggregateOutputType | null;
    _avg: ProductCategory_SubCatAvgAggregateOutputType | null;
    _sum: ProductCategory_SubCatSumAggregateOutputType | null;
    _min: ProductCategory_SubCatMinAggregateOutputType | null;
    _max: ProductCategory_SubCatMaxAggregateOutputType | null;
};
export type GetProductCategory_SubCatGroupByPayload<T extends productCategory_SubCatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductCategory_SubCatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductCategory_SubCatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductCategory_SubCatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductCategory_SubCatGroupByOutputType[P]>;
}>>;
export type productCategory_SubCatWhereInput = {
    AND?: Prisma.productCategory_SubCatWhereInput | Prisma.productCategory_SubCatWhereInput[];
    OR?: Prisma.productCategory_SubCatWhereInput[];
    NOT?: Prisma.productCategory_SubCatWhereInput | Prisma.productCategory_SubCatWhereInput[];
    id?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    productId?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    categoryId?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    subCategoryId?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    createdAt?: Prisma.DateTimeFilter<"productCategory_SubCat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"productCategory_SubCat"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    subCategory?: Prisma.XOR<Prisma.SubCategoryScalarRelationFilter, Prisma.subCategoryWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
};
export type productCategory_SubCatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    subCategoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    subCategory?: Prisma.subCategoryOrderByWithRelationInput;
    product?: Prisma.ProductsOrderByWithRelationInput;
};
export type productCategory_SubCatWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    productId_categoryId_subCategoryId?: Prisma.productCategory_SubCatProductIdCategoryIdSubCategoryIdCompoundUniqueInput;
    AND?: Prisma.productCategory_SubCatWhereInput | Prisma.productCategory_SubCatWhereInput[];
    OR?: Prisma.productCategory_SubCatWhereInput[];
    NOT?: Prisma.productCategory_SubCatWhereInput | Prisma.productCategory_SubCatWhereInput[];
    productId?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    categoryId?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    subCategoryId?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    createdAt?: Prisma.DateTimeFilter<"productCategory_SubCat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"productCategory_SubCat"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    subCategory?: Prisma.XOR<Prisma.SubCategoryScalarRelationFilter, Prisma.subCategoryWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
}, "id" | "productId_categoryId_subCategoryId">;
export type productCategory_SubCatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    subCategoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.productCategory_SubCatCountOrderByAggregateInput;
    _avg?: Prisma.productCategory_SubCatAvgOrderByAggregateInput;
    _max?: Prisma.productCategory_SubCatMaxOrderByAggregateInput;
    _min?: Prisma.productCategory_SubCatMinOrderByAggregateInput;
    _sum?: Prisma.productCategory_SubCatSumOrderByAggregateInput;
};
export type productCategory_SubCatScalarWhereWithAggregatesInput = {
    AND?: Prisma.productCategory_SubCatScalarWhereWithAggregatesInput | Prisma.productCategory_SubCatScalarWhereWithAggregatesInput[];
    OR?: Prisma.productCategory_SubCatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.productCategory_SubCatScalarWhereWithAggregatesInput | Prisma.productCategory_SubCatScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"productCategory_SubCat"> | number;
    productId?: Prisma.IntWithAggregatesFilter<"productCategory_SubCat"> | number;
    categoryId?: Prisma.IntWithAggregatesFilter<"productCategory_SubCat"> | number;
    subCategoryId?: Prisma.IntWithAggregatesFilter<"productCategory_SubCat"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"productCategory_SubCat"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"productCategory_SubCat"> | Date | string;
};
export type productCategory_SubCatCreateInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutProductInput;
    subCategory: Prisma.subCategoryCreateNestedOneWithoutProductInput;
    product: Prisma.ProductsCreateNestedOneWithoutCategoriesInput;
};
export type productCategory_SubCatUncheckedCreateInput = {
    id?: number;
    productId: number;
    categoryId: number;
    subCategoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productCategory_SubCatUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutProductNestedInput;
    subCategory?: Prisma.subCategoryUpdateOneRequiredWithoutProductNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutCategoriesNestedInput;
};
export type productCategory_SubCatUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    subCategoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productCategory_SubCatCreateManyInput = {
    id?: number;
    productId: number;
    categoryId: number;
    subCategoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productCategory_SubCatUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productCategory_SubCatUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    subCategoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCategory_SubCatListRelationFilter = {
    every?: Prisma.productCategory_SubCatWhereInput;
    some?: Prisma.productCategory_SubCatWhereInput;
    none?: Prisma.productCategory_SubCatWhereInput;
};
export type productCategory_SubCatOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type productCategory_SubCatProductIdCategoryIdSubCategoryIdCompoundUniqueInput = {
    productId: number;
    categoryId: number;
    subCategoryId: number;
};
export type productCategory_SubCatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    subCategoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type productCategory_SubCatAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    subCategoryId?: Prisma.SortOrder;
};
export type productCategory_SubCatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    subCategoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type productCategory_SubCatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    subCategoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type productCategory_SubCatSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    subCategoryId?: Prisma.SortOrder;
};
export type productCategory_SubCatCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput> | Prisma.productCategory_SubCatCreateWithoutCategoryInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutCategoryInput | Prisma.productCategory_SubCatCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.productCategory_SubCatCreateManyCategoryInputEnvelope;
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
};
export type productCategory_SubCatUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput> | Prisma.productCategory_SubCatCreateWithoutCategoryInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutCategoryInput | Prisma.productCategory_SubCatCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.productCategory_SubCatCreateManyCategoryInputEnvelope;
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
};
export type productCategory_SubCatUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput> | Prisma.productCategory_SubCatCreateWithoutCategoryInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutCategoryInput | Prisma.productCategory_SubCatCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutCategoryInput | Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.productCategory_SubCatCreateManyCategoryInputEnvelope;
    set?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    disconnect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    delete?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    update?: Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutCategoryInput | Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.productCategory_SubCatUpdateManyWithWhereWithoutCategoryInput | Prisma.productCategory_SubCatUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.productCategory_SubCatScalarWhereInput | Prisma.productCategory_SubCatScalarWhereInput[];
};
export type productCategory_SubCatUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput> | Prisma.productCategory_SubCatCreateWithoutCategoryInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutCategoryInput | Prisma.productCategory_SubCatCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutCategoryInput | Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.productCategory_SubCatCreateManyCategoryInputEnvelope;
    set?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    disconnect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    delete?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    update?: Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutCategoryInput | Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.productCategory_SubCatUpdateManyWithWhereWithoutCategoryInput | Prisma.productCategory_SubCatUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.productCategory_SubCatScalarWhereInput | Prisma.productCategory_SubCatScalarWhereInput[];
};
export type productCategory_SubCatCreateNestedManyWithoutSubCategoryInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutSubCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput> | Prisma.productCategory_SubCatCreateWithoutSubCategoryInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutSubCategoryInput | Prisma.productCategory_SubCatCreateOrConnectWithoutSubCategoryInput[];
    createMany?: Prisma.productCategory_SubCatCreateManySubCategoryInputEnvelope;
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
};
export type productCategory_SubCatUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutSubCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput> | Prisma.productCategory_SubCatCreateWithoutSubCategoryInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutSubCategoryInput | Prisma.productCategory_SubCatCreateOrConnectWithoutSubCategoryInput[];
    createMany?: Prisma.productCategory_SubCatCreateManySubCategoryInputEnvelope;
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
};
export type productCategory_SubCatUpdateManyWithoutSubCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutSubCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput> | Prisma.productCategory_SubCatCreateWithoutSubCategoryInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutSubCategoryInput | Prisma.productCategory_SubCatCreateOrConnectWithoutSubCategoryInput[];
    upsert?: Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutSubCategoryInput | Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutSubCategoryInput[];
    createMany?: Prisma.productCategory_SubCatCreateManySubCategoryInputEnvelope;
    set?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    disconnect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    delete?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    update?: Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutSubCategoryInput | Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutSubCategoryInput[];
    updateMany?: Prisma.productCategory_SubCatUpdateManyWithWhereWithoutSubCategoryInput | Prisma.productCategory_SubCatUpdateManyWithWhereWithoutSubCategoryInput[];
    deleteMany?: Prisma.productCategory_SubCatScalarWhereInput | Prisma.productCategory_SubCatScalarWhereInput[];
};
export type productCategory_SubCatUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutSubCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput> | Prisma.productCategory_SubCatCreateWithoutSubCategoryInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutSubCategoryInput | Prisma.productCategory_SubCatCreateOrConnectWithoutSubCategoryInput[];
    upsert?: Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutSubCategoryInput | Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutSubCategoryInput[];
    createMany?: Prisma.productCategory_SubCatCreateManySubCategoryInputEnvelope;
    set?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    disconnect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    delete?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    update?: Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutSubCategoryInput | Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutSubCategoryInput[];
    updateMany?: Prisma.productCategory_SubCatUpdateManyWithWhereWithoutSubCategoryInput | Prisma.productCategory_SubCatUpdateManyWithWhereWithoutSubCategoryInput[];
    deleteMany?: Prisma.productCategory_SubCatScalarWhereInput | Prisma.productCategory_SubCatScalarWhereInput[];
};
export type productCategory_SubCatCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutProductInput, Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput> | Prisma.productCategory_SubCatCreateWithoutProductInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutProductInput | Prisma.productCategory_SubCatCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.productCategory_SubCatCreateManyProductInputEnvelope;
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
};
export type productCategory_SubCatUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutProductInput, Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput> | Prisma.productCategory_SubCatCreateWithoutProductInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutProductInput | Prisma.productCategory_SubCatCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.productCategory_SubCatCreateManyProductInputEnvelope;
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
};
export type productCategory_SubCatUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutProductInput, Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput> | Prisma.productCategory_SubCatCreateWithoutProductInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutProductInput | Prisma.productCategory_SubCatCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutProductInput | Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.productCategory_SubCatCreateManyProductInputEnvelope;
    set?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    disconnect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    delete?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    update?: Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutProductInput | Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.productCategory_SubCatUpdateManyWithWhereWithoutProductInput | Prisma.productCategory_SubCatUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.productCategory_SubCatScalarWhereInput | Prisma.productCategory_SubCatScalarWhereInput[];
};
export type productCategory_SubCatUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutProductInput, Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput> | Prisma.productCategory_SubCatCreateWithoutProductInput[] | Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.productCategory_SubCatCreateOrConnectWithoutProductInput | Prisma.productCategory_SubCatCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutProductInput | Prisma.productCategory_SubCatUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.productCategory_SubCatCreateManyProductInputEnvelope;
    set?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    disconnect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    delete?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    connect?: Prisma.productCategory_SubCatWhereUniqueInput | Prisma.productCategory_SubCatWhereUniqueInput[];
    update?: Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutProductInput | Prisma.productCategory_SubCatUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.productCategory_SubCatUpdateManyWithWhereWithoutProductInput | Prisma.productCategory_SubCatUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.productCategory_SubCatScalarWhereInput | Prisma.productCategory_SubCatScalarWhereInput[];
};
export type productCategory_SubCatCreateWithoutCategoryInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subCategory: Prisma.subCategoryCreateNestedOneWithoutProductInput;
    product: Prisma.ProductsCreateNestedOneWithoutCategoriesInput;
};
export type productCategory_SubCatUncheckedCreateWithoutCategoryInput = {
    id?: number;
    productId: number;
    subCategoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productCategory_SubCatCreateOrConnectWithoutCategoryInput = {
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    create: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput>;
};
export type productCategory_SubCatCreateManyCategoryInputEnvelope = {
    data: Prisma.productCategory_SubCatCreateManyCategoryInput | Prisma.productCategory_SubCatCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type productCategory_SubCatUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    update: Prisma.XOR<Prisma.productCategory_SubCatUpdateWithoutCategoryInput, Prisma.productCategory_SubCatUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutCategoryInput>;
};
export type productCategory_SubCatUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    data: Prisma.XOR<Prisma.productCategory_SubCatUpdateWithoutCategoryInput, Prisma.productCategory_SubCatUncheckedUpdateWithoutCategoryInput>;
};
export type productCategory_SubCatUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.productCategory_SubCatScalarWhereInput;
    data: Prisma.XOR<Prisma.productCategory_SubCatUpdateManyMutationInput, Prisma.productCategory_SubCatUncheckedUpdateManyWithoutCategoryInput>;
};
export type productCategory_SubCatScalarWhereInput = {
    AND?: Prisma.productCategory_SubCatScalarWhereInput | Prisma.productCategory_SubCatScalarWhereInput[];
    OR?: Prisma.productCategory_SubCatScalarWhereInput[];
    NOT?: Prisma.productCategory_SubCatScalarWhereInput | Prisma.productCategory_SubCatScalarWhereInput[];
    id?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    productId?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    categoryId?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    subCategoryId?: Prisma.IntFilter<"productCategory_SubCat"> | number;
    createdAt?: Prisma.DateTimeFilter<"productCategory_SubCat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"productCategory_SubCat"> | Date | string;
};
export type productCategory_SubCatCreateWithoutSubCategoryInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutProductInput;
    product: Prisma.ProductsCreateNestedOneWithoutCategoriesInput;
};
export type productCategory_SubCatUncheckedCreateWithoutSubCategoryInput = {
    id?: number;
    productId: number;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productCategory_SubCatCreateOrConnectWithoutSubCategoryInput = {
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    create: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutSubCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput>;
};
export type productCategory_SubCatCreateManySubCategoryInputEnvelope = {
    data: Prisma.productCategory_SubCatCreateManySubCategoryInput | Prisma.productCategory_SubCatCreateManySubCategoryInput[];
    skipDuplicates?: boolean;
};
export type productCategory_SubCatUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    update: Prisma.XOR<Prisma.productCategory_SubCatUpdateWithoutSubCategoryInput, Prisma.productCategory_SubCatUncheckedUpdateWithoutSubCategoryInput>;
    create: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutSubCategoryInput, Prisma.productCategory_SubCatUncheckedCreateWithoutSubCategoryInput>;
};
export type productCategory_SubCatUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    data: Prisma.XOR<Prisma.productCategory_SubCatUpdateWithoutSubCategoryInput, Prisma.productCategory_SubCatUncheckedUpdateWithoutSubCategoryInput>;
};
export type productCategory_SubCatUpdateManyWithWhereWithoutSubCategoryInput = {
    where: Prisma.productCategory_SubCatScalarWhereInput;
    data: Prisma.XOR<Prisma.productCategory_SubCatUpdateManyMutationInput, Prisma.productCategory_SubCatUncheckedUpdateManyWithoutSubCategoryInput>;
};
export type productCategory_SubCatCreateWithoutProductInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutProductInput;
    subCategory: Prisma.subCategoryCreateNestedOneWithoutProductInput;
};
export type productCategory_SubCatUncheckedCreateWithoutProductInput = {
    id?: number;
    categoryId: number;
    subCategoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productCategory_SubCatCreateOrConnectWithoutProductInput = {
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    create: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutProductInput, Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput>;
};
export type productCategory_SubCatCreateManyProductInputEnvelope = {
    data: Prisma.productCategory_SubCatCreateManyProductInput | Prisma.productCategory_SubCatCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type productCategory_SubCatUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    update: Prisma.XOR<Prisma.productCategory_SubCatUpdateWithoutProductInput, Prisma.productCategory_SubCatUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.productCategory_SubCatCreateWithoutProductInput, Prisma.productCategory_SubCatUncheckedCreateWithoutProductInput>;
};
export type productCategory_SubCatUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    data: Prisma.XOR<Prisma.productCategory_SubCatUpdateWithoutProductInput, Prisma.productCategory_SubCatUncheckedUpdateWithoutProductInput>;
};
export type productCategory_SubCatUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.productCategory_SubCatScalarWhereInput;
    data: Prisma.XOR<Prisma.productCategory_SubCatUpdateManyMutationInput, Prisma.productCategory_SubCatUncheckedUpdateManyWithoutProductInput>;
};
export type productCategory_SubCatCreateManyCategoryInput = {
    id?: number;
    productId: number;
    subCategoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productCategory_SubCatUpdateWithoutCategoryInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subCategory?: Prisma.subCategoryUpdateOneRequiredWithoutProductNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutCategoriesNestedInput;
};
export type productCategory_SubCatUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    subCategoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productCategory_SubCatUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    subCategoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productCategory_SubCatCreateManySubCategoryInput = {
    id?: number;
    productId: number;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productCategory_SubCatUpdateWithoutSubCategoryInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutProductNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutCategoriesNestedInput;
};
export type productCategory_SubCatUncheckedUpdateWithoutSubCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productCategory_SubCatUncheckedUpdateManyWithoutSubCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productCategory_SubCatCreateManyProductInput = {
    id?: number;
    categoryId: number;
    subCategoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productCategory_SubCatUpdateWithoutProductInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutProductNestedInput;
    subCategory?: Prisma.subCategoryUpdateOneRequiredWithoutProductNestedInput;
};
export type productCategory_SubCatUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    subCategoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productCategory_SubCatUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    subCategoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productCategory_SubCatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    categoryId?: boolean;
    subCategoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    subCategory?: boolean | Prisma.subCategoryDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productCategory_SubCat"]>;
export type productCategory_SubCatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    categoryId?: boolean;
    subCategoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    subCategory?: boolean | Prisma.subCategoryDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productCategory_SubCat"]>;
export type productCategory_SubCatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    categoryId?: boolean;
    subCategoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    subCategory?: boolean | Prisma.subCategoryDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productCategory_SubCat"]>;
export type productCategory_SubCatSelectScalar = {
    id?: boolean;
    productId?: boolean;
    categoryId?: boolean;
    subCategoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type productCategory_SubCatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "categoryId" | "subCategoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["productCategory_SubCat"]>;
export type productCategory_SubCatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    subCategory?: boolean | Prisma.subCategoryDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type productCategory_SubCatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    subCategory?: boolean | Prisma.subCategoryDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type productCategory_SubCatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    subCategory?: boolean | Prisma.subCategoryDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type $productCategory_SubCatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "productCategory_SubCat";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs>;
        subCategory: Prisma.$subCategoryPayload<ExtArgs>;
        product: Prisma.$ProductsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        productId: number;
        categoryId: number;
        subCategoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["productCategory_SubCat"]>;
    composites: {};
};
export type productCategory_SubCatGetPayload<S extends boolean | null | undefined | productCategory_SubCatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload, S>;
export type productCategory_SubCatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<productCategory_SubCatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCategory_SubCatCountAggregateInputType | true;
};
export interface productCategory_SubCatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['productCategory_SubCat'];
        meta: {
            name: 'productCategory_SubCat';
        };
    };
    /**
     * Find zero or one ProductCategory_SubCat that matches the filter.
     * @param {productCategory_SubCatFindUniqueArgs} args - Arguments to find a ProductCategory_SubCat
     * @example
     * // Get one ProductCategory_SubCat
     * const productCategory_SubCat = await prisma.productCategory_SubCat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productCategory_SubCatFindUniqueArgs>(args: Prisma.SelectSubset<T, productCategory_SubCatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__productCategory_SubCatClient<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProductCategory_SubCat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productCategory_SubCatFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory_SubCat
     * @example
     * // Get one ProductCategory_SubCat
     * const productCategory_SubCat = await prisma.productCategory_SubCat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productCategory_SubCatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, productCategory_SubCatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__productCategory_SubCatClient<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductCategory_SubCat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCategory_SubCatFindFirstArgs} args - Arguments to find a ProductCategory_SubCat
     * @example
     * // Get one ProductCategory_SubCat
     * const productCategory_SubCat = await prisma.productCategory_SubCat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productCategory_SubCatFindFirstArgs>(args?: Prisma.SelectSubset<T, productCategory_SubCatFindFirstArgs<ExtArgs>>): Prisma.Prisma__productCategory_SubCatClient<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductCategory_SubCat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCategory_SubCatFindFirstOrThrowArgs} args - Arguments to find a ProductCategory_SubCat
     * @example
     * // Get one ProductCategory_SubCat
     * const productCategory_SubCat = await prisma.productCategory_SubCat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productCategory_SubCatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, productCategory_SubCatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__productCategory_SubCatClient<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProductCategory_SubCats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCategory_SubCatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategory_SubCats
     * const productCategory_SubCats = await prisma.productCategory_SubCat.findMany()
     *
     * // Get first 10 ProductCategory_SubCats
     * const productCategory_SubCats = await prisma.productCategory_SubCat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productCategory_SubCatWithIdOnly = await prisma.productCategory_SubCat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends productCategory_SubCatFindManyArgs>(args?: Prisma.SelectSubset<T, productCategory_SubCatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProductCategory_SubCat.
     * @param {productCategory_SubCatCreateArgs} args - Arguments to create a ProductCategory_SubCat.
     * @example
     * // Create one ProductCategory_SubCat
     * const ProductCategory_SubCat = await prisma.productCategory_SubCat.create({
     *   data: {
     *     // ... data to create a ProductCategory_SubCat
     *   }
     * })
     *
     */
    create<T extends productCategory_SubCatCreateArgs>(args: Prisma.SelectSubset<T, productCategory_SubCatCreateArgs<ExtArgs>>): Prisma.Prisma__productCategory_SubCatClient<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProductCategory_SubCats.
     * @param {productCategory_SubCatCreateManyArgs} args - Arguments to create many ProductCategory_SubCats.
     * @example
     * // Create many ProductCategory_SubCats
     * const productCategory_SubCat = await prisma.productCategory_SubCat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends productCategory_SubCatCreateManyArgs>(args?: Prisma.SelectSubset<T, productCategory_SubCatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProductCategory_SubCats and returns the data saved in the database.
     * @param {productCategory_SubCatCreateManyAndReturnArgs} args - Arguments to create many ProductCategory_SubCats.
     * @example
     * // Create many ProductCategory_SubCats
     * const productCategory_SubCat = await prisma.productCategory_SubCat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProductCategory_SubCats and only return the `id`
     * const productCategory_SubCatWithIdOnly = await prisma.productCategory_SubCat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends productCategory_SubCatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, productCategory_SubCatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProductCategory_SubCat.
     * @param {productCategory_SubCatDeleteArgs} args - Arguments to delete one ProductCategory_SubCat.
     * @example
     * // Delete one ProductCategory_SubCat
     * const ProductCategory_SubCat = await prisma.productCategory_SubCat.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory_SubCat
     *   }
     * })
     *
     */
    delete<T extends productCategory_SubCatDeleteArgs>(args: Prisma.SelectSubset<T, productCategory_SubCatDeleteArgs<ExtArgs>>): Prisma.Prisma__productCategory_SubCatClient<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProductCategory_SubCat.
     * @param {productCategory_SubCatUpdateArgs} args - Arguments to update one ProductCategory_SubCat.
     * @example
     * // Update one ProductCategory_SubCat
     * const productCategory_SubCat = await prisma.productCategory_SubCat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends productCategory_SubCatUpdateArgs>(args: Prisma.SelectSubset<T, productCategory_SubCatUpdateArgs<ExtArgs>>): Prisma.Prisma__productCategory_SubCatClient<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProductCategory_SubCats.
     * @param {productCategory_SubCatDeleteManyArgs} args - Arguments to filter ProductCategory_SubCats to delete.
     * @example
     * // Delete a few ProductCategory_SubCats
     * const { count } = await prisma.productCategory_SubCat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends productCategory_SubCatDeleteManyArgs>(args?: Prisma.SelectSubset<T, productCategory_SubCatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductCategory_SubCats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCategory_SubCatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategory_SubCats
     * const productCategory_SubCat = await prisma.productCategory_SubCat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends productCategory_SubCatUpdateManyArgs>(args: Prisma.SelectSubset<T, productCategory_SubCatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductCategory_SubCats and returns the data updated in the database.
     * @param {productCategory_SubCatUpdateManyAndReturnArgs} args - Arguments to update many ProductCategory_SubCats.
     * @example
     * // Update many ProductCategory_SubCats
     * const productCategory_SubCat = await prisma.productCategory_SubCat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProductCategory_SubCats and only return the `id`
     * const productCategory_SubCatWithIdOnly = await prisma.productCategory_SubCat.updateManyAndReturn({
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
    updateManyAndReturn<T extends productCategory_SubCatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, productCategory_SubCatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProductCategory_SubCat.
     * @param {productCategory_SubCatUpsertArgs} args - Arguments to update or create a ProductCategory_SubCat.
     * @example
     * // Update or create a ProductCategory_SubCat
     * const productCategory_SubCat = await prisma.productCategory_SubCat.upsert({
     *   create: {
     *     // ... data to create a ProductCategory_SubCat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory_SubCat we want to update
     *   }
     * })
     */
    upsert<T extends productCategory_SubCatUpsertArgs>(args: Prisma.SelectSubset<T, productCategory_SubCatUpsertArgs<ExtArgs>>): Prisma.Prisma__productCategory_SubCatClient<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProductCategory_SubCats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCategory_SubCatCountArgs} args - Arguments to filter ProductCategory_SubCats to count.
     * @example
     * // Count the number of ProductCategory_SubCats
     * const count = await prisma.productCategory_SubCat.count({
     *   where: {
     *     // ... the filter for the ProductCategory_SubCats we want to count
     *   }
     * })
    **/
    count<T extends productCategory_SubCatCountArgs>(args?: Prisma.Subset<T, productCategory_SubCatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCategory_SubCatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProductCategory_SubCat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategory_SubCatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCategory_SubCatAggregateArgs>(args: Prisma.Subset<T, ProductCategory_SubCatAggregateArgs>): Prisma.PrismaPromise<GetProductCategory_SubCatAggregateType<T>>;
    /**
     * Group by ProductCategory_SubCat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCategory_SubCatGroupByArgs} args - Group by arguments.
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
    groupBy<T extends productCategory_SubCatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: productCategory_SubCatGroupByArgs['orderBy'];
    } : {
        orderBy?: productCategory_SubCatGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, productCategory_SubCatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategory_SubCatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the productCategory_SubCat model
     */
    readonly fields: productCategory_SubCatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for productCategory_SubCat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__productCategory_SubCatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subCategory<T extends Prisma.subCategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subCategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__subCategoryClient<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductsDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the productCategory_SubCat model
 */
export interface productCategory_SubCatFieldRefs {
    readonly id: Prisma.FieldRef<"productCategory_SubCat", 'Int'>;
    readonly productId: Prisma.FieldRef<"productCategory_SubCat", 'Int'>;
    readonly categoryId: Prisma.FieldRef<"productCategory_SubCat", 'Int'>;
    readonly subCategoryId: Prisma.FieldRef<"productCategory_SubCat", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"productCategory_SubCat", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"productCategory_SubCat", 'DateTime'>;
}
/**
 * productCategory_SubCat findUnique
 */
export type productCategory_SubCatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
    /**
     * Filter, which productCategory_SubCat to fetch.
     */
    where: Prisma.productCategory_SubCatWhereUniqueInput;
};
/**
 * productCategory_SubCat findUniqueOrThrow
 */
export type productCategory_SubCatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
    /**
     * Filter, which productCategory_SubCat to fetch.
     */
    where: Prisma.productCategory_SubCatWhereUniqueInput;
};
/**
 * productCategory_SubCat findFirst
 */
export type productCategory_SubCatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
    /**
     * Filter, which productCategory_SubCat to fetch.
     */
    where?: Prisma.productCategory_SubCatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of productCategory_SubCats to fetch.
     */
    orderBy?: Prisma.productCategory_SubCatOrderByWithRelationInput | Prisma.productCategory_SubCatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for productCategory_SubCats.
     */
    cursor?: Prisma.productCategory_SubCatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` productCategory_SubCats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` productCategory_SubCats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of productCategory_SubCats.
     */
    distinct?: Prisma.ProductCategory_SubCatScalarFieldEnum | Prisma.ProductCategory_SubCatScalarFieldEnum[];
};
/**
 * productCategory_SubCat findFirstOrThrow
 */
export type productCategory_SubCatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
    /**
     * Filter, which productCategory_SubCat to fetch.
     */
    where?: Prisma.productCategory_SubCatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of productCategory_SubCats to fetch.
     */
    orderBy?: Prisma.productCategory_SubCatOrderByWithRelationInput | Prisma.productCategory_SubCatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for productCategory_SubCats.
     */
    cursor?: Prisma.productCategory_SubCatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` productCategory_SubCats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` productCategory_SubCats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of productCategory_SubCats.
     */
    distinct?: Prisma.ProductCategory_SubCatScalarFieldEnum | Prisma.ProductCategory_SubCatScalarFieldEnum[];
};
/**
 * productCategory_SubCat findMany
 */
export type productCategory_SubCatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
    /**
     * Filter, which productCategory_SubCats to fetch.
     */
    where?: Prisma.productCategory_SubCatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of productCategory_SubCats to fetch.
     */
    orderBy?: Prisma.productCategory_SubCatOrderByWithRelationInput | Prisma.productCategory_SubCatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing productCategory_SubCats.
     */
    cursor?: Prisma.productCategory_SubCatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` productCategory_SubCats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` productCategory_SubCats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of productCategory_SubCats.
     */
    distinct?: Prisma.ProductCategory_SubCatScalarFieldEnum | Prisma.ProductCategory_SubCatScalarFieldEnum[];
};
/**
 * productCategory_SubCat create
 */
export type productCategory_SubCatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
    /**
     * The data needed to create a productCategory_SubCat.
     */
    data: Prisma.XOR<Prisma.productCategory_SubCatCreateInput, Prisma.productCategory_SubCatUncheckedCreateInput>;
};
/**
 * productCategory_SubCat createMany
 */
export type productCategory_SubCatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many productCategory_SubCats.
     */
    data: Prisma.productCategory_SubCatCreateManyInput | Prisma.productCategory_SubCatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * productCategory_SubCat createManyAndReturn
 */
export type productCategory_SubCatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * The data used to create many productCategory_SubCats.
     */
    data: Prisma.productCategory_SubCatCreateManyInput | Prisma.productCategory_SubCatCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * productCategory_SubCat update
 */
export type productCategory_SubCatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
    /**
     * The data needed to update a productCategory_SubCat.
     */
    data: Prisma.XOR<Prisma.productCategory_SubCatUpdateInput, Prisma.productCategory_SubCatUncheckedUpdateInput>;
    /**
     * Choose, which productCategory_SubCat to update.
     */
    where: Prisma.productCategory_SubCatWhereUniqueInput;
};
/**
 * productCategory_SubCat updateMany
 */
export type productCategory_SubCatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update productCategory_SubCats.
     */
    data: Prisma.XOR<Prisma.productCategory_SubCatUpdateManyMutationInput, Prisma.productCategory_SubCatUncheckedUpdateManyInput>;
    /**
     * Filter which productCategory_SubCats to update
     */
    where?: Prisma.productCategory_SubCatWhereInput;
    /**
     * Limit how many productCategory_SubCats to update.
     */
    limit?: number;
};
/**
 * productCategory_SubCat updateManyAndReturn
 */
export type productCategory_SubCatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * The data used to update productCategory_SubCats.
     */
    data: Prisma.XOR<Prisma.productCategory_SubCatUpdateManyMutationInput, Prisma.productCategory_SubCatUncheckedUpdateManyInput>;
    /**
     * Filter which productCategory_SubCats to update
     */
    where?: Prisma.productCategory_SubCatWhereInput;
    /**
     * Limit how many productCategory_SubCats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * productCategory_SubCat upsert
 */
export type productCategory_SubCatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
    /**
     * The filter to search for the productCategory_SubCat to update in case it exists.
     */
    where: Prisma.productCategory_SubCatWhereUniqueInput;
    /**
     * In case the productCategory_SubCat found by the `where` argument doesn't exist, create a new productCategory_SubCat with this data.
     */
    create: Prisma.XOR<Prisma.productCategory_SubCatCreateInput, Prisma.productCategory_SubCatUncheckedCreateInput>;
    /**
     * In case the productCategory_SubCat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.productCategory_SubCatUpdateInput, Prisma.productCategory_SubCatUncheckedUpdateInput>;
};
/**
 * productCategory_SubCat delete
 */
export type productCategory_SubCatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
    /**
     * Filter which productCategory_SubCat to delete.
     */
    where: Prisma.productCategory_SubCatWhereUniqueInput;
};
/**
 * productCategory_SubCat deleteMany
 */
export type productCategory_SubCatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which productCategory_SubCats to delete
     */
    where?: Prisma.productCategory_SubCatWhereInput;
    /**
     * Limit how many productCategory_SubCats to delete.
     */
    limit?: number;
};
/**
 * productCategory_SubCat without action
 */
export type productCategory_SubCatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCategory_SubCat
     */
    select?: Prisma.productCategory_SubCatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the productCategory_SubCat
     */
    omit?: Prisma.productCategory_SubCatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productCategory_SubCatInclude<ExtArgs> | null;
};

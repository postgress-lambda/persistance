import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model subCategory
 *
 */
export type subCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$subCategoryPayload>;
export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null;
    _avg: SubCategoryAvgAggregateOutputType | null;
    _sum: SubCategorySumAggregateOutputType | null;
    _min: SubCategoryMinAggregateOutputType | null;
    _max: SubCategoryMaxAggregateOutputType | null;
};
export type SubCategoryAvgAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
};
export type SubCategorySumAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
};
export type SubCategoryMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    categoryId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubCategoryMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    categoryId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubCategoryAvgAggregateInputType = {
    id?: true;
    categoryId?: true;
};
export type SubCategorySumAggregateInputType = {
    id?: true;
    categoryId?: true;
};
export type SubCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which subCategory to aggregate.
     */
    where?: Prisma.subCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subCategories to fetch.
     */
    orderBy?: Prisma.subCategoryOrderByWithRelationInput | Prisma.subCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.subCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned subCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SubCategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SubCategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType;
};
export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubCategory[P]> : Prisma.GetScalarType<T[P], AggregateSubCategory[P]>;
};
export type subCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subCategoryWhereInput;
    orderBy?: Prisma.subCategoryOrderByWithAggregationInput | Prisma.subCategoryOrderByWithAggregationInput[];
    by: Prisma.SubCategoryScalarFieldEnum[] | Prisma.SubCategoryScalarFieldEnum;
    having?: Prisma.subCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubCategoryCountAggregateInputType | true;
    _avg?: SubCategoryAvgAggregateInputType;
    _sum?: SubCategorySumAggregateInputType;
    _min?: SubCategoryMinAggregateInputType;
    _max?: SubCategoryMaxAggregateInputType;
};
export type SubCategoryGroupByOutputType = {
    id: number;
    name: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: SubCategoryCountAggregateOutputType | null;
    _avg: SubCategoryAvgAggregateOutputType | null;
    _sum: SubCategorySumAggregateOutputType | null;
    _min: SubCategoryMinAggregateOutputType | null;
    _max: SubCategoryMaxAggregateOutputType | null;
};
export type GetSubCategoryGroupByPayload<T extends subCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubCategoryGroupByOutputType[P]>;
}>>;
export type subCategoryWhereInput = {
    AND?: Prisma.subCategoryWhereInput | Prisma.subCategoryWhereInput[];
    OR?: Prisma.subCategoryWhereInput[];
    NOT?: Prisma.subCategoryWhereInput | Prisma.subCategoryWhereInput[];
    id?: Prisma.IntFilter<"subCategory"> | number;
    name?: Prisma.StringFilter<"subCategory"> | string;
    categoryId?: Prisma.IntFilter<"subCategory"> | number;
    createdAt?: Prisma.DateTimeFilter<"subCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"subCategory"> | Date | string;
    product?: Prisma.ProductCategory_SubCatListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
};
export type subCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    product?: Prisma.productCategory_SubCatOrderByRelationAggregateInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
};
export type subCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.subCategoryWhereInput | Prisma.subCategoryWhereInput[];
    OR?: Prisma.subCategoryWhereInput[];
    NOT?: Prisma.subCategoryWhereInput | Prisma.subCategoryWhereInput[];
    categoryId?: Prisma.IntFilter<"subCategory"> | number;
    createdAt?: Prisma.DateTimeFilter<"subCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"subCategory"> | Date | string;
    product?: Prisma.ProductCategory_SubCatListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
}, "id" | "name">;
export type subCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.subCategoryCountOrderByAggregateInput;
    _avg?: Prisma.subCategoryAvgOrderByAggregateInput;
    _max?: Prisma.subCategoryMaxOrderByAggregateInput;
    _min?: Prisma.subCategoryMinOrderByAggregateInput;
    _sum?: Prisma.subCategorySumOrderByAggregateInput;
};
export type subCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.subCategoryScalarWhereWithAggregatesInput | Prisma.subCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.subCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.subCategoryScalarWhereWithAggregatesInput | Prisma.subCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"subCategory"> | number;
    name?: Prisma.StringWithAggregatesFilter<"subCategory"> | string;
    categoryId?: Prisma.IntWithAggregatesFilter<"subCategory"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"subCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"subCategory"> | Date | string;
};
export type subCategoryCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product?: Prisma.productCategory_SubCatCreateNestedManyWithoutSubCategoryInput;
    category: Prisma.CategoryCreateNestedOneWithoutSubCategoriesInput;
};
export type subCategoryUncheckedCreateInput = {
    id?: number;
    name: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product?: Prisma.productCategory_SubCatUncheckedCreateNestedManyWithoutSubCategoryInput;
};
export type subCategoryUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.productCategory_SubCatUpdateManyWithoutSubCategoryNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput;
};
export type subCategoryUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.productCategory_SubCatUncheckedUpdateManyWithoutSubCategoryNestedInput;
};
export type subCategoryCreateManyInput = {
    id?: number;
    name: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type subCategoryUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subCategoryUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubCategoryListRelationFilter = {
    every?: Prisma.subCategoryWhereInput;
    some?: Prisma.subCategoryWhereInput;
    none?: Prisma.subCategoryWhereInput;
};
export type subCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type subCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type subCategoryAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type subCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type subCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type subCategorySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type SubCategoryScalarRelationFilter = {
    is?: Prisma.subCategoryWhereInput;
    isNot?: Prisma.subCategoryWhereInput;
};
export type subCategoryCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.subCategoryCreateWithoutCategoryInput, Prisma.subCategoryUncheckedCreateWithoutCategoryInput> | Prisma.subCategoryCreateWithoutCategoryInput[] | Prisma.subCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.subCategoryCreateOrConnectWithoutCategoryInput | Prisma.subCategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.subCategoryCreateManyCategoryInputEnvelope;
    connect?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
};
export type subCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.subCategoryCreateWithoutCategoryInput, Prisma.subCategoryUncheckedCreateWithoutCategoryInput> | Prisma.subCategoryCreateWithoutCategoryInput[] | Prisma.subCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.subCategoryCreateOrConnectWithoutCategoryInput | Prisma.subCategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.subCategoryCreateManyCategoryInputEnvelope;
    connect?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
};
export type subCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.subCategoryCreateWithoutCategoryInput, Prisma.subCategoryUncheckedCreateWithoutCategoryInput> | Prisma.subCategoryCreateWithoutCategoryInput[] | Prisma.subCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.subCategoryCreateOrConnectWithoutCategoryInput | Prisma.subCategoryCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.subCategoryUpsertWithWhereUniqueWithoutCategoryInput | Prisma.subCategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.subCategoryCreateManyCategoryInputEnvelope;
    set?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
    disconnect?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
    delete?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
    connect?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
    update?: Prisma.subCategoryUpdateWithWhereUniqueWithoutCategoryInput | Prisma.subCategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.subCategoryUpdateManyWithWhereWithoutCategoryInput | Prisma.subCategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.subCategoryScalarWhereInput | Prisma.subCategoryScalarWhereInput[];
};
export type subCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.subCategoryCreateWithoutCategoryInput, Prisma.subCategoryUncheckedCreateWithoutCategoryInput> | Prisma.subCategoryCreateWithoutCategoryInput[] | Prisma.subCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.subCategoryCreateOrConnectWithoutCategoryInput | Prisma.subCategoryCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.subCategoryUpsertWithWhereUniqueWithoutCategoryInput | Prisma.subCategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.subCategoryCreateManyCategoryInputEnvelope;
    set?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
    disconnect?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
    delete?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
    connect?: Prisma.subCategoryWhereUniqueInput | Prisma.subCategoryWhereUniqueInput[];
    update?: Prisma.subCategoryUpdateWithWhereUniqueWithoutCategoryInput | Prisma.subCategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.subCategoryUpdateManyWithWhereWithoutCategoryInput | Prisma.subCategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.subCategoryScalarWhereInput | Prisma.subCategoryScalarWhereInput[];
};
export type subCategoryCreateNestedOneWithoutProductInput = {
    create?: Prisma.XOR<Prisma.subCategoryCreateWithoutProductInput, Prisma.subCategoryUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.subCategoryCreateOrConnectWithoutProductInput;
    connect?: Prisma.subCategoryWhereUniqueInput;
};
export type subCategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.subCategoryCreateWithoutProductInput, Prisma.subCategoryUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.subCategoryCreateOrConnectWithoutProductInput;
    upsert?: Prisma.subCategoryUpsertWithoutProductInput;
    connect?: Prisma.subCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.subCategoryUpdateToOneWithWhereWithoutProductInput, Prisma.subCategoryUpdateWithoutProductInput>, Prisma.subCategoryUncheckedUpdateWithoutProductInput>;
};
export type subCategoryCreateWithoutCategoryInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product?: Prisma.productCategory_SubCatCreateNestedManyWithoutSubCategoryInput;
};
export type subCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product?: Prisma.productCategory_SubCatUncheckedCreateNestedManyWithoutSubCategoryInput;
};
export type subCategoryCreateOrConnectWithoutCategoryInput = {
    where: Prisma.subCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.subCategoryCreateWithoutCategoryInput, Prisma.subCategoryUncheckedCreateWithoutCategoryInput>;
};
export type subCategoryCreateManyCategoryInputEnvelope = {
    data: Prisma.subCategoryCreateManyCategoryInput | Prisma.subCategoryCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type subCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.subCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.subCategoryUpdateWithoutCategoryInput, Prisma.subCategoryUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.subCategoryCreateWithoutCategoryInput, Prisma.subCategoryUncheckedCreateWithoutCategoryInput>;
};
export type subCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.subCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.subCategoryUpdateWithoutCategoryInput, Prisma.subCategoryUncheckedUpdateWithoutCategoryInput>;
};
export type subCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.subCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.subCategoryUpdateManyMutationInput, Prisma.subCategoryUncheckedUpdateManyWithoutCategoryInput>;
};
export type subCategoryScalarWhereInput = {
    AND?: Prisma.subCategoryScalarWhereInput | Prisma.subCategoryScalarWhereInput[];
    OR?: Prisma.subCategoryScalarWhereInput[];
    NOT?: Prisma.subCategoryScalarWhereInput | Prisma.subCategoryScalarWhereInput[];
    id?: Prisma.IntFilter<"subCategory"> | number;
    name?: Prisma.StringFilter<"subCategory"> | string;
    categoryId?: Prisma.IntFilter<"subCategory"> | number;
    createdAt?: Prisma.DateTimeFilter<"subCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"subCategory"> | Date | string;
};
export type subCategoryCreateWithoutProductInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutSubCategoriesInput;
};
export type subCategoryUncheckedCreateWithoutProductInput = {
    id?: number;
    name: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type subCategoryCreateOrConnectWithoutProductInput = {
    where: Prisma.subCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.subCategoryCreateWithoutProductInput, Prisma.subCategoryUncheckedCreateWithoutProductInput>;
};
export type subCategoryUpsertWithoutProductInput = {
    update: Prisma.XOR<Prisma.subCategoryUpdateWithoutProductInput, Prisma.subCategoryUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.subCategoryCreateWithoutProductInput, Prisma.subCategoryUncheckedCreateWithoutProductInput>;
    where?: Prisma.subCategoryWhereInput;
};
export type subCategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: Prisma.subCategoryWhereInput;
    data: Prisma.XOR<Prisma.subCategoryUpdateWithoutProductInput, Prisma.subCategoryUncheckedUpdateWithoutProductInput>;
};
export type subCategoryUpdateWithoutProductInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput;
};
export type subCategoryUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subCategoryCreateManyCategoryInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type subCategoryUpdateWithoutCategoryInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.productCategory_SubCatUpdateManyWithoutSubCategoryNestedInput;
};
export type subCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.productCategory_SubCatUncheckedUpdateManyWithoutSubCategoryNestedInput;
};
export type subCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SubCategoryCountOutputType
 */
export type SubCategoryCountOutputType = {
    product: number;
};
export type SubCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | SubCategoryCountOutputTypeCountProductArgs;
};
/**
 * SubCategoryCountOutputType without action
 */
export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: Prisma.SubCategoryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SubCategoryCountOutputType without action
 */
export type SubCategoryCountOutputTypeCountProductArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productCategory_SubCatWhereInput;
};
export type subCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.subCategory$productArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.SubCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subCategory"]>;
export type subCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subCategory"]>;
export type subCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subCategory"]>;
export type subCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type subCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["subCategory"]>;
export type subCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.subCategory$productArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.SubCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type subCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type subCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type $subCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "subCategory";
    objects: {
        product: Prisma.$productCategory_SubCatPayload<ExtArgs>[];
        category: Prisma.$CategoryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["subCategory"]>;
    composites: {};
};
export type subCategoryGetPayload<S extends boolean | null | undefined | subCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$subCategoryPayload, S>;
export type subCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<subCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubCategoryCountAggregateInputType | true;
};
export interface subCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['subCategory'];
        meta: {
            name: 'subCategory';
        };
    };
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {subCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, subCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__subCategoryClient<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, subCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__subCategoryClient<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, subCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__subCategoryClient<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, subCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__subCategoryClient<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     *
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends subCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, subCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SubCategory.
     * @param {subCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     *
     */
    create<T extends subCategoryCreateArgs>(args: Prisma.SelectSubset<T, subCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__subCategoryClient<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SubCategories.
     * @param {subCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends subCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, subCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SubCategories and returns the data saved in the database.
     * @param {subCategoryCreateManyAndReturnArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends subCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, subCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SubCategory.
     * @param {subCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     *
     */
    delete<T extends subCategoryDeleteArgs>(args: Prisma.SelectSubset<T, subCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__subCategoryClient<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SubCategory.
     * @param {subCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends subCategoryUpdateArgs>(args: Prisma.SelectSubset<T, subCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__subCategoryClient<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SubCategories.
     * @param {subCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends subCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, subCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends subCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, subCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SubCategories and returns the data updated in the database.
     * @param {subCategoryUpdateManyAndReturnArgs} args - Arguments to update many SubCategories.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends subCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, subCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SubCategory.
     * @param {subCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
     */
    upsert<T extends subCategoryUpsertArgs>(args: Prisma.SelectSubset<T, subCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__subCategoryClient<runtime.Types.Result.GetResult<Prisma.$subCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends subCategoryCountArgs>(args?: Prisma.Subset<T, subCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubCategoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubCategoryAggregateArgs>(args: Prisma.Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>;
    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends subCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: subCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: subCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, subCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the subCategory model
     */
    readonly fields: subCategoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for subCategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__subCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.subCategory$productArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subCategory$productArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productCategory_SubCatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the subCategory model
 */
export interface subCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"subCategory", 'Int'>;
    readonly name: Prisma.FieldRef<"subCategory", 'String'>;
    readonly categoryId: Prisma.FieldRef<"subCategory", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"subCategory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"subCategory", 'DateTime'>;
}
/**
 * subCategory findUnique
 */
export type subCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which subCategory to fetch.
     */
    where: Prisma.subCategoryWhereUniqueInput;
};
/**
 * subCategory findUniqueOrThrow
 */
export type subCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which subCategory to fetch.
     */
    where: Prisma.subCategoryWhereUniqueInput;
};
/**
 * subCategory findFirst
 */
export type subCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which subCategory to fetch.
     */
    where?: Prisma.subCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subCategories to fetch.
     */
    orderBy?: Prisma.subCategoryOrderByWithRelationInput | Prisma.subCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subCategories.
     */
    cursor?: Prisma.subCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subCategories.
     */
    distinct?: Prisma.SubCategoryScalarFieldEnum | Prisma.SubCategoryScalarFieldEnum[];
};
/**
 * subCategory findFirstOrThrow
 */
export type subCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which subCategory to fetch.
     */
    where?: Prisma.subCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subCategories to fetch.
     */
    orderBy?: Prisma.subCategoryOrderByWithRelationInput | Prisma.subCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subCategories.
     */
    cursor?: Prisma.subCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subCategories.
     */
    distinct?: Prisma.SubCategoryScalarFieldEnum | Prisma.SubCategoryScalarFieldEnum[];
};
/**
 * subCategory findMany
 */
export type subCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which subCategories to fetch.
     */
    where?: Prisma.subCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subCategories to fetch.
     */
    orderBy?: Prisma.subCategoryOrderByWithRelationInput | Prisma.subCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing subCategories.
     */
    cursor?: Prisma.subCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subCategories.
     */
    distinct?: Prisma.SubCategoryScalarFieldEnum | Prisma.SubCategoryScalarFieldEnum[];
};
/**
 * subCategory create
 */
export type subCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a subCategory.
     */
    data: Prisma.XOR<Prisma.subCategoryCreateInput, Prisma.subCategoryUncheckedCreateInput>;
};
/**
 * subCategory createMany
 */
export type subCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many subCategories.
     */
    data: Prisma.subCategoryCreateManyInput | Prisma.subCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * subCategory createManyAndReturn
 */
export type subCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many subCategories.
     */
    data: Prisma.subCategoryCreateManyInput | Prisma.subCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * subCategory update
 */
export type subCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a subCategory.
     */
    data: Prisma.XOR<Prisma.subCategoryUpdateInput, Prisma.subCategoryUncheckedUpdateInput>;
    /**
     * Choose, which subCategory to update.
     */
    where: Prisma.subCategoryWhereUniqueInput;
};
/**
 * subCategory updateMany
 */
export type subCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update subCategories.
     */
    data: Prisma.XOR<Prisma.subCategoryUpdateManyMutationInput, Prisma.subCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which subCategories to update
     */
    where?: Prisma.subCategoryWhereInput;
    /**
     * Limit how many subCategories to update.
     */
    limit?: number;
};
/**
 * subCategory updateManyAndReturn
 */
export type subCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update subCategories.
     */
    data: Prisma.XOR<Prisma.subCategoryUpdateManyMutationInput, Prisma.subCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which subCategories to update
     */
    where?: Prisma.subCategoryWhereInput;
    /**
     * Limit how many subCategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * subCategory upsert
 */
export type subCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the subCategory to update in case it exists.
     */
    where: Prisma.subCategoryWhereUniqueInput;
    /**
     * In case the subCategory found by the `where` argument doesn't exist, create a new subCategory with this data.
     */
    create: Prisma.XOR<Prisma.subCategoryCreateInput, Prisma.subCategoryUncheckedCreateInput>;
    /**
     * In case the subCategory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.subCategoryUpdateInput, Prisma.subCategoryUncheckedUpdateInput>;
};
/**
 * subCategory delete
 */
export type subCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
    /**
     * Filter which subCategory to delete.
     */
    where: Prisma.subCategoryWhereUniqueInput;
};
/**
 * subCategory deleteMany
 */
export type subCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which subCategories to delete
     */
    where?: Prisma.subCategoryWhereInput;
    /**
     * Limit how many subCategories to delete.
     */
    limit?: number;
};
/**
 * subCategory.product
 */
export type subCategory$productArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.productCategory_SubCatWhereInput;
    orderBy?: Prisma.productCategory_SubCatOrderByWithRelationInput | Prisma.productCategory_SubCatOrderByWithRelationInput[];
    cursor?: Prisma.productCategory_SubCatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductCategory_SubCatScalarFieldEnum | Prisma.ProductCategory_SubCatScalarFieldEnum[];
};
/**
 * subCategory without action
 */
export type subCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategory
     */
    select?: Prisma.subCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subCategory
     */
    omit?: Prisma.subCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subCategoryInclude<ExtArgs> | null;
};

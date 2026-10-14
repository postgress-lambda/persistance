import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProductAttributes
 *
 */
export type ProductAttributesModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductAttributesPayload>;
export type AggregateProductAttributes = {
    _count: ProductAttributesCountAggregateOutputType | null;
    _avg: ProductAttributesAvgAggregateOutputType | null;
    _sum: ProductAttributesSumAggregateOutputType | null;
    _min: ProductAttributesMinAggregateOutputType | null;
    _max: ProductAttributesMaxAggregateOutputType | null;
};
export type ProductAttributesAvgAggregateOutputType = {
    id: number | null;
    product_id: number | null;
    attributes_id: number | null;
};
export type ProductAttributesSumAggregateOutputType = {
    id: number | null;
    product_id: number | null;
    attributes_id: number | null;
};
export type ProductAttributesMinAggregateOutputType = {
    id: number | null;
    value: string | null;
    product_id: number | null;
    attributes_id: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductAttributesMaxAggregateOutputType = {
    id: number | null;
    value: string | null;
    product_id: number | null;
    attributes_id: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductAttributesCountAggregateOutputType = {
    id: number;
    value: number;
    product_id: number;
    attributes_id: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductAttributesAvgAggregateInputType = {
    id?: true;
    product_id?: true;
    attributes_id?: true;
};
export type ProductAttributesSumAggregateInputType = {
    id?: true;
    product_id?: true;
    attributes_id?: true;
};
export type ProductAttributesMinAggregateInputType = {
    id?: true;
    value?: true;
    product_id?: true;
    attributes_id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductAttributesMaxAggregateInputType = {
    id?: true;
    value?: true;
    product_id?: true;
    attributes_id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductAttributesCountAggregateInputType = {
    id?: true;
    value?: true;
    product_id?: true;
    attributes_id?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductAttributesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAttributes to aggregate.
     */
    where?: Prisma.ProductAttributesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: Prisma.ProductAttributesOrderByWithRelationInput | Prisma.ProductAttributesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductAttributesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductAttributes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProductAttributes
    **/
    _count?: true | ProductAttributesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductAttributesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductAttributesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductAttributesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductAttributesMaxAggregateInputType;
};
export type GetProductAttributesAggregateType<T extends ProductAttributesAggregateArgs> = {
    [P in keyof T & keyof AggregateProductAttributes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductAttributes[P]> : Prisma.GetScalarType<T[P], AggregateProductAttributes[P]>;
};
export type ProductAttributesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductAttributesWhereInput;
    orderBy?: Prisma.ProductAttributesOrderByWithAggregationInput | Prisma.ProductAttributesOrderByWithAggregationInput[];
    by: Prisma.ProductAttributesScalarFieldEnum[] | Prisma.ProductAttributesScalarFieldEnum;
    having?: Prisma.ProductAttributesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductAttributesCountAggregateInputType | true;
    _avg?: ProductAttributesAvgAggregateInputType;
    _sum?: ProductAttributesSumAggregateInputType;
    _min?: ProductAttributesMinAggregateInputType;
    _max?: ProductAttributesMaxAggregateInputType;
};
export type ProductAttributesGroupByOutputType = {
    id: number;
    value: string;
    product_id: number;
    attributes_id: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductAttributesCountAggregateOutputType | null;
    _avg: ProductAttributesAvgAggregateOutputType | null;
    _sum: ProductAttributesSumAggregateOutputType | null;
    _min: ProductAttributesMinAggregateOutputType | null;
    _max: ProductAttributesMaxAggregateOutputType | null;
};
export type GetProductAttributesGroupByPayload<T extends ProductAttributesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductAttributesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductAttributesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductAttributesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductAttributesGroupByOutputType[P]>;
}>>;
export type ProductAttributesWhereInput = {
    AND?: Prisma.ProductAttributesWhereInput | Prisma.ProductAttributesWhereInput[];
    OR?: Prisma.ProductAttributesWhereInput[];
    NOT?: Prisma.ProductAttributesWhereInput | Prisma.ProductAttributesWhereInput[];
    id?: Prisma.IntFilter<"ProductAttributes"> | number;
    value?: Prisma.StringFilter<"ProductAttributes"> | string;
    product_id?: Prisma.IntFilter<"ProductAttributes"> | number;
    attributes_id?: Prisma.IntFilter<"ProductAttributes"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProductAttributes"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductAttributes"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
    attributes?: Prisma.XOR<Prisma.AttributesScalarRelationFilter, Prisma.AttributesWhereInput>;
};
export type ProductAttributesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    attributes_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    product?: Prisma.ProductsOrderByWithRelationInput;
    attributes?: Prisma.AttributesOrderByWithRelationInput;
};
export type ProductAttributesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProductAttributesWhereInput | Prisma.ProductAttributesWhereInput[];
    OR?: Prisma.ProductAttributesWhereInput[];
    NOT?: Prisma.ProductAttributesWhereInput | Prisma.ProductAttributesWhereInput[];
    value?: Prisma.StringFilter<"ProductAttributes"> | string;
    product_id?: Prisma.IntFilter<"ProductAttributes"> | number;
    attributes_id?: Prisma.IntFilter<"ProductAttributes"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProductAttributes"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductAttributes"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
    attributes?: Prisma.XOR<Prisma.AttributesScalarRelationFilter, Prisma.AttributesWhereInput>;
}, "id">;
export type ProductAttributesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    attributes_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductAttributesCountOrderByAggregateInput;
    _avg?: Prisma.ProductAttributesAvgOrderByAggregateInput;
    _max?: Prisma.ProductAttributesMaxOrderByAggregateInput;
    _min?: Prisma.ProductAttributesMinOrderByAggregateInput;
    _sum?: Prisma.ProductAttributesSumOrderByAggregateInput;
};
export type ProductAttributesScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductAttributesScalarWhereWithAggregatesInput | Prisma.ProductAttributesScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductAttributesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductAttributesScalarWhereWithAggregatesInput | Prisma.ProductAttributesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProductAttributes"> | number;
    value?: Prisma.StringWithAggregatesFilter<"ProductAttributes"> | string;
    product_id?: Prisma.IntWithAggregatesFilter<"ProductAttributes"> | number;
    attributes_id?: Prisma.IntWithAggregatesFilter<"ProductAttributes"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProductAttributes"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProductAttributes"> | Date | string;
};
export type ProductAttributesCreateInput = {
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductsCreateNestedOneWithoutAttributesInput;
    attributes: Prisma.AttributesCreateNestedOneWithoutProductsInput;
};
export type ProductAttributesUncheckedCreateInput = {
    id?: number;
    value: string;
    product_id: number;
    attributes_id: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductAttributesUpdateInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductsUpdateOneRequiredWithoutAttributesNestedInput;
    attributes?: Prisma.AttributesUpdateOneRequiredWithoutProductsNestedInput;
};
export type ProductAttributesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes_id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductAttributesCreateManyInput = {
    id?: number;
    value: string;
    product_id: number;
    attributes_id: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductAttributesUpdateManyMutationInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductAttributesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes_id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductAttributesListRelationFilter = {
    every?: Prisma.ProductAttributesWhereInput;
    some?: Prisma.ProductAttributesWhereInput;
    none?: Prisma.ProductAttributesWhereInput;
};
export type ProductAttributesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductAttributesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    attributes_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductAttributesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    attributes_id?: Prisma.SortOrder;
};
export type ProductAttributesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    attributes_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductAttributesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    attributes_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductAttributesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    attributes_id?: Prisma.SortOrder;
};
export type ProductAttributesCreateNestedManyWithoutAttributesInput = {
    create?: Prisma.XOR<Prisma.ProductAttributesCreateWithoutAttributesInput, Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput> | Prisma.ProductAttributesCreateWithoutAttributesInput[] | Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput[];
    connectOrCreate?: Prisma.ProductAttributesCreateOrConnectWithoutAttributesInput | Prisma.ProductAttributesCreateOrConnectWithoutAttributesInput[];
    createMany?: Prisma.ProductAttributesCreateManyAttributesInputEnvelope;
    connect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
};
export type ProductAttributesUncheckedCreateNestedManyWithoutAttributesInput = {
    create?: Prisma.XOR<Prisma.ProductAttributesCreateWithoutAttributesInput, Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput> | Prisma.ProductAttributesCreateWithoutAttributesInput[] | Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput[];
    connectOrCreate?: Prisma.ProductAttributesCreateOrConnectWithoutAttributesInput | Prisma.ProductAttributesCreateOrConnectWithoutAttributesInput[];
    createMany?: Prisma.ProductAttributesCreateManyAttributesInputEnvelope;
    connect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
};
export type ProductAttributesUpdateManyWithoutAttributesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductAttributesCreateWithoutAttributesInput, Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput> | Prisma.ProductAttributesCreateWithoutAttributesInput[] | Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput[];
    connectOrCreate?: Prisma.ProductAttributesCreateOrConnectWithoutAttributesInput | Prisma.ProductAttributesCreateOrConnectWithoutAttributesInput[];
    upsert?: Prisma.ProductAttributesUpsertWithWhereUniqueWithoutAttributesInput | Prisma.ProductAttributesUpsertWithWhereUniqueWithoutAttributesInput[];
    createMany?: Prisma.ProductAttributesCreateManyAttributesInputEnvelope;
    set?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    disconnect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    delete?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    connect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    update?: Prisma.ProductAttributesUpdateWithWhereUniqueWithoutAttributesInput | Prisma.ProductAttributesUpdateWithWhereUniqueWithoutAttributesInput[];
    updateMany?: Prisma.ProductAttributesUpdateManyWithWhereWithoutAttributesInput | Prisma.ProductAttributesUpdateManyWithWhereWithoutAttributesInput[];
    deleteMany?: Prisma.ProductAttributesScalarWhereInput | Prisma.ProductAttributesScalarWhereInput[];
};
export type ProductAttributesUncheckedUpdateManyWithoutAttributesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductAttributesCreateWithoutAttributesInput, Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput> | Prisma.ProductAttributesCreateWithoutAttributesInput[] | Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput[];
    connectOrCreate?: Prisma.ProductAttributesCreateOrConnectWithoutAttributesInput | Prisma.ProductAttributesCreateOrConnectWithoutAttributesInput[];
    upsert?: Prisma.ProductAttributesUpsertWithWhereUniqueWithoutAttributesInput | Prisma.ProductAttributesUpsertWithWhereUniqueWithoutAttributesInput[];
    createMany?: Prisma.ProductAttributesCreateManyAttributesInputEnvelope;
    set?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    disconnect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    delete?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    connect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    update?: Prisma.ProductAttributesUpdateWithWhereUniqueWithoutAttributesInput | Prisma.ProductAttributesUpdateWithWhereUniqueWithoutAttributesInput[];
    updateMany?: Prisma.ProductAttributesUpdateManyWithWhereWithoutAttributesInput | Prisma.ProductAttributesUpdateManyWithWhereWithoutAttributesInput[];
    deleteMany?: Prisma.ProductAttributesScalarWhereInput | Prisma.ProductAttributesScalarWhereInput[];
};
export type ProductAttributesCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductAttributesCreateWithoutProductInput, Prisma.ProductAttributesUncheckedCreateWithoutProductInput> | Prisma.ProductAttributesCreateWithoutProductInput[] | Prisma.ProductAttributesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductAttributesCreateOrConnectWithoutProductInput | Prisma.ProductAttributesCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductAttributesCreateManyProductInputEnvelope;
    connect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
};
export type ProductAttributesUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductAttributesCreateWithoutProductInput, Prisma.ProductAttributesUncheckedCreateWithoutProductInput> | Prisma.ProductAttributesCreateWithoutProductInput[] | Prisma.ProductAttributesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductAttributesCreateOrConnectWithoutProductInput | Prisma.ProductAttributesCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductAttributesCreateManyProductInputEnvelope;
    connect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
};
export type ProductAttributesUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductAttributesCreateWithoutProductInput, Prisma.ProductAttributesUncheckedCreateWithoutProductInput> | Prisma.ProductAttributesCreateWithoutProductInput[] | Prisma.ProductAttributesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductAttributesCreateOrConnectWithoutProductInput | Prisma.ProductAttributesCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductAttributesUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductAttributesUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductAttributesCreateManyProductInputEnvelope;
    set?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    disconnect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    delete?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    connect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    update?: Prisma.ProductAttributesUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductAttributesUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductAttributesUpdateManyWithWhereWithoutProductInput | Prisma.ProductAttributesUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductAttributesScalarWhereInput | Prisma.ProductAttributesScalarWhereInput[];
};
export type ProductAttributesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductAttributesCreateWithoutProductInput, Prisma.ProductAttributesUncheckedCreateWithoutProductInput> | Prisma.ProductAttributesCreateWithoutProductInput[] | Prisma.ProductAttributesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductAttributesCreateOrConnectWithoutProductInput | Prisma.ProductAttributesCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductAttributesUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductAttributesUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductAttributesCreateManyProductInputEnvelope;
    set?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    disconnect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    delete?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    connect?: Prisma.ProductAttributesWhereUniqueInput | Prisma.ProductAttributesWhereUniqueInput[];
    update?: Prisma.ProductAttributesUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductAttributesUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductAttributesUpdateManyWithWhereWithoutProductInput | Prisma.ProductAttributesUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductAttributesScalarWhereInput | Prisma.ProductAttributesScalarWhereInput[];
};
export type ProductAttributesCreateWithoutAttributesInput = {
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductsCreateNestedOneWithoutAttributesInput;
};
export type ProductAttributesUncheckedCreateWithoutAttributesInput = {
    id?: number;
    value: string;
    product_id: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductAttributesCreateOrConnectWithoutAttributesInput = {
    where: Prisma.ProductAttributesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductAttributesCreateWithoutAttributesInput, Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput>;
};
export type ProductAttributesCreateManyAttributesInputEnvelope = {
    data: Prisma.ProductAttributesCreateManyAttributesInput | Prisma.ProductAttributesCreateManyAttributesInput[];
    skipDuplicates?: boolean;
};
export type ProductAttributesUpsertWithWhereUniqueWithoutAttributesInput = {
    where: Prisma.ProductAttributesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductAttributesUpdateWithoutAttributesInput, Prisma.ProductAttributesUncheckedUpdateWithoutAttributesInput>;
    create: Prisma.XOR<Prisma.ProductAttributesCreateWithoutAttributesInput, Prisma.ProductAttributesUncheckedCreateWithoutAttributesInput>;
};
export type ProductAttributesUpdateWithWhereUniqueWithoutAttributesInput = {
    where: Prisma.ProductAttributesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductAttributesUpdateWithoutAttributesInput, Prisma.ProductAttributesUncheckedUpdateWithoutAttributesInput>;
};
export type ProductAttributesUpdateManyWithWhereWithoutAttributesInput = {
    where: Prisma.ProductAttributesScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductAttributesUpdateManyMutationInput, Prisma.ProductAttributesUncheckedUpdateManyWithoutAttributesInput>;
};
export type ProductAttributesScalarWhereInput = {
    AND?: Prisma.ProductAttributesScalarWhereInput | Prisma.ProductAttributesScalarWhereInput[];
    OR?: Prisma.ProductAttributesScalarWhereInput[];
    NOT?: Prisma.ProductAttributesScalarWhereInput | Prisma.ProductAttributesScalarWhereInput[];
    id?: Prisma.IntFilter<"ProductAttributes"> | number;
    value?: Prisma.StringFilter<"ProductAttributes"> | string;
    product_id?: Prisma.IntFilter<"ProductAttributes"> | number;
    attributes_id?: Prisma.IntFilter<"ProductAttributes"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProductAttributes"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductAttributes"> | Date | string;
};
export type ProductAttributesCreateWithoutProductInput = {
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attributes: Prisma.AttributesCreateNestedOneWithoutProductsInput;
};
export type ProductAttributesUncheckedCreateWithoutProductInput = {
    id?: number;
    value: string;
    attributes_id: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductAttributesCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductAttributesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductAttributesCreateWithoutProductInput, Prisma.ProductAttributesUncheckedCreateWithoutProductInput>;
};
export type ProductAttributesCreateManyProductInputEnvelope = {
    data: Prisma.ProductAttributesCreateManyProductInput | Prisma.ProductAttributesCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductAttributesUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductAttributesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductAttributesUpdateWithoutProductInput, Prisma.ProductAttributesUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductAttributesCreateWithoutProductInput, Prisma.ProductAttributesUncheckedCreateWithoutProductInput>;
};
export type ProductAttributesUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductAttributesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductAttributesUpdateWithoutProductInput, Prisma.ProductAttributesUncheckedUpdateWithoutProductInput>;
};
export type ProductAttributesUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductAttributesScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductAttributesUpdateManyMutationInput, Prisma.ProductAttributesUncheckedUpdateManyWithoutProductInput>;
};
export type ProductAttributesCreateManyAttributesInput = {
    id?: number;
    value: string;
    product_id: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductAttributesUpdateWithoutAttributesInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductsUpdateOneRequiredWithoutAttributesNestedInput;
};
export type ProductAttributesUncheckedUpdateWithoutAttributesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductAttributesUncheckedUpdateManyWithoutAttributesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductAttributesCreateManyProductInput = {
    id?: number;
    value: string;
    attributes_id: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductAttributesUpdateWithoutProductInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attributes?: Prisma.AttributesUpdateOneRequiredWithoutProductsNestedInput;
};
export type ProductAttributesUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    attributes_id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductAttributesUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    attributes_id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductAttributesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    product_id?: boolean;
    attributes_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    attributes?: boolean | Prisma.AttributesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productAttributes"]>;
export type ProductAttributesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    product_id?: boolean;
    attributes_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    attributes?: boolean | Prisma.AttributesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productAttributes"]>;
export type ProductAttributesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    product_id?: boolean;
    attributes_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    attributes?: boolean | Prisma.AttributesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productAttributes"]>;
export type ProductAttributesSelectScalar = {
    id?: boolean;
    value?: boolean;
    product_id?: boolean;
    attributes_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductAttributesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "value" | "product_id" | "attributes_id" | "createdAt" | "updatedAt", ExtArgs["result"]["productAttributes"]>;
export type ProductAttributesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    attributes?: boolean | Prisma.AttributesDefaultArgs<ExtArgs>;
};
export type ProductAttributesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    attributes?: boolean | Prisma.AttributesDefaultArgs<ExtArgs>;
};
export type ProductAttributesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    attributes?: boolean | Prisma.AttributesDefaultArgs<ExtArgs>;
};
export type $ProductAttributesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductAttributes";
    objects: {
        product: Prisma.$ProductsPayload<ExtArgs>;
        attributes: Prisma.$AttributesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        value: string;
        product_id: number;
        attributes_id: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["productAttributes"]>;
    composites: {};
};
export type ProductAttributesGetPayload<S extends boolean | null | undefined | ProductAttributesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload, S>;
export type ProductAttributesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductAttributesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductAttributesCountAggregateInputType | true;
};
export interface ProductAttributesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductAttributes'];
        meta: {
            name: 'ProductAttributes';
        };
    };
    /**
     * Find zero or one ProductAttributes that matches the filter.
     * @param {ProductAttributesFindUniqueArgs} args - Arguments to find a ProductAttributes
     * @example
     * // Get one ProductAttributes
     * const productAttributes = await prisma.productAttributes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductAttributesFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductAttributesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductAttributesClient<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProductAttributes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductAttributesFindUniqueOrThrowArgs} args - Arguments to find a ProductAttributes
     * @example
     * // Get one ProductAttributes
     * const productAttributes = await prisma.productAttributes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductAttributesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductAttributesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductAttributesClient<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributesFindFirstArgs} args - Arguments to find a ProductAttributes
     * @example
     * // Get one ProductAttributes
     * const productAttributes = await prisma.productAttributes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductAttributesFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductAttributesFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductAttributesClient<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductAttributes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributesFindFirstOrThrowArgs} args - Arguments to find a ProductAttributes
     * @example
     * // Get one ProductAttributes
     * const productAttributes = await prisma.productAttributes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductAttributesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductAttributesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductAttributesClient<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProductAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductAttributes
     * const productAttributes = await prisma.productAttributes.findMany()
     *
     * // Get first 10 ProductAttributes
     * const productAttributes = await prisma.productAttributes.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productAttributesWithIdOnly = await prisma.productAttributes.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductAttributesFindManyArgs>(args?: Prisma.SelectSubset<T, ProductAttributesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProductAttributes.
     * @param {ProductAttributesCreateArgs} args - Arguments to create a ProductAttributes.
     * @example
     * // Create one ProductAttributes
     * const ProductAttributes = await prisma.productAttributes.create({
     *   data: {
     *     // ... data to create a ProductAttributes
     *   }
     * })
     *
     */
    create<T extends ProductAttributesCreateArgs>(args: Prisma.SelectSubset<T, ProductAttributesCreateArgs<ExtArgs>>): Prisma.Prisma__ProductAttributesClient<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProductAttributes.
     * @param {ProductAttributesCreateManyArgs} args - Arguments to create many ProductAttributes.
     * @example
     * // Create many ProductAttributes
     * const productAttributes = await prisma.productAttributes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductAttributesCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductAttributesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProductAttributes and returns the data saved in the database.
     * @param {ProductAttributesCreateManyAndReturnArgs} args - Arguments to create many ProductAttributes.
     * @example
     * // Create many ProductAttributes
     * const productAttributes = await prisma.productAttributes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProductAttributes and only return the `id`
     * const productAttributesWithIdOnly = await prisma.productAttributes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductAttributesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductAttributesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProductAttributes.
     * @param {ProductAttributesDeleteArgs} args - Arguments to delete one ProductAttributes.
     * @example
     * // Delete one ProductAttributes
     * const ProductAttributes = await prisma.productAttributes.delete({
     *   where: {
     *     // ... filter to delete one ProductAttributes
     *   }
     * })
     *
     */
    delete<T extends ProductAttributesDeleteArgs>(args: Prisma.SelectSubset<T, ProductAttributesDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductAttributesClient<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProductAttributes.
     * @param {ProductAttributesUpdateArgs} args - Arguments to update one ProductAttributes.
     * @example
     * // Update one ProductAttributes
     * const productAttributes = await prisma.productAttributes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductAttributesUpdateArgs>(args: Prisma.SelectSubset<T, ProductAttributesUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductAttributesClient<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProductAttributes.
     * @param {ProductAttributesDeleteManyArgs} args - Arguments to filter ProductAttributes to delete.
     * @example
     * // Delete a few ProductAttributes
     * const { count } = await prisma.productAttributes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductAttributesDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductAttributesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductAttributes
     * const productAttributes = await prisma.productAttributes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductAttributesUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductAttributesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductAttributes and returns the data updated in the database.
     * @param {ProductAttributesUpdateManyAndReturnArgs} args - Arguments to update many ProductAttributes.
     * @example
     * // Update many ProductAttributes
     * const productAttributes = await prisma.productAttributes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProductAttributes and only return the `id`
     * const productAttributesWithIdOnly = await prisma.productAttributes.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductAttributesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductAttributesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProductAttributes.
     * @param {ProductAttributesUpsertArgs} args - Arguments to update or create a ProductAttributes.
     * @example
     * // Update or create a ProductAttributes
     * const productAttributes = await prisma.productAttributes.upsert({
     *   create: {
     *     // ... data to create a ProductAttributes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductAttributes we want to update
     *   }
     * })
     */
    upsert<T extends ProductAttributesUpsertArgs>(args: Prisma.SelectSubset<T, ProductAttributesUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductAttributesClient<runtime.Types.Result.GetResult<Prisma.$ProductAttributesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProductAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributesCountArgs} args - Arguments to filter ProductAttributes to count.
     * @example
     * // Count the number of ProductAttributes
     * const count = await prisma.productAttributes.count({
     *   where: {
     *     // ... the filter for the ProductAttributes we want to count
     *   }
     * })
    **/
    count<T extends ProductAttributesCountArgs>(args?: Prisma.Subset<T, ProductAttributesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductAttributesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProductAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAttributesAggregateArgs>(args: Prisma.Subset<T, ProductAttributesAggregateArgs>): Prisma.PrismaPromise<GetProductAttributesAggregateType<T>>;
    /**
     * Group by ProductAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProductAttributesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductAttributesGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductAttributesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductAttributesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductAttributesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProductAttributes model
     */
    readonly fields: ProductAttributesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProductAttributes.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductAttributesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductsDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attributes<T extends Prisma.AttributesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttributesDefaultArgs<ExtArgs>>): Prisma.Prisma__AttributesClient<runtime.Types.Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProductAttributes model
 */
export interface ProductAttributesFieldRefs {
    readonly id: Prisma.FieldRef<"ProductAttributes", 'Int'>;
    readonly value: Prisma.FieldRef<"ProductAttributes", 'String'>;
    readonly product_id: Prisma.FieldRef<"ProductAttributes", 'Int'>;
    readonly attributes_id: Prisma.FieldRef<"ProductAttributes", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ProductAttributes", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProductAttributes", 'DateTime'>;
}
/**
 * ProductAttributes findUnique
 */
export type ProductAttributesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
    /**
     * Filter, which ProductAttributes to fetch.
     */
    where: Prisma.ProductAttributesWhereUniqueInput;
};
/**
 * ProductAttributes findUniqueOrThrow
 */
export type ProductAttributesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
    /**
     * Filter, which ProductAttributes to fetch.
     */
    where: Prisma.ProductAttributesWhereUniqueInput;
};
/**
 * ProductAttributes findFirst
 */
export type ProductAttributesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
    /**
     * Filter, which ProductAttributes to fetch.
     */
    where?: Prisma.ProductAttributesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: Prisma.ProductAttributesOrderByWithRelationInput | Prisma.ProductAttributesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductAttributes.
     */
    cursor?: Prisma.ProductAttributesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductAttributes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductAttributes.
     */
    distinct?: Prisma.ProductAttributesScalarFieldEnum | Prisma.ProductAttributesScalarFieldEnum[];
};
/**
 * ProductAttributes findFirstOrThrow
 */
export type ProductAttributesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
    /**
     * Filter, which ProductAttributes to fetch.
     */
    where?: Prisma.ProductAttributesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: Prisma.ProductAttributesOrderByWithRelationInput | Prisma.ProductAttributesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductAttributes.
     */
    cursor?: Prisma.ProductAttributesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductAttributes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductAttributes.
     */
    distinct?: Prisma.ProductAttributesScalarFieldEnum | Prisma.ProductAttributesScalarFieldEnum[];
};
/**
 * ProductAttributes findMany
 */
export type ProductAttributesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
    /**
     * Filter, which ProductAttributes to fetch.
     */
    where?: Prisma.ProductAttributesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: Prisma.ProductAttributesOrderByWithRelationInput | Prisma.ProductAttributesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProductAttributes.
     */
    cursor?: Prisma.ProductAttributesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductAttributes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductAttributes.
     */
    distinct?: Prisma.ProductAttributesScalarFieldEnum | Prisma.ProductAttributesScalarFieldEnum[];
};
/**
 * ProductAttributes create
 */
export type ProductAttributesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProductAttributes.
     */
    data: Prisma.XOR<Prisma.ProductAttributesCreateInput, Prisma.ProductAttributesUncheckedCreateInput>;
};
/**
 * ProductAttributes createMany
 */
export type ProductAttributesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductAttributes.
     */
    data: Prisma.ProductAttributesCreateManyInput | Prisma.ProductAttributesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProductAttributes createManyAndReturn
 */
export type ProductAttributesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * The data used to create many ProductAttributes.
     */
    data: Prisma.ProductAttributesCreateManyInput | Prisma.ProductAttributesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductAttributes update
 */
export type ProductAttributesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProductAttributes.
     */
    data: Prisma.XOR<Prisma.ProductAttributesUpdateInput, Prisma.ProductAttributesUncheckedUpdateInput>;
    /**
     * Choose, which ProductAttributes to update.
     */
    where: Prisma.ProductAttributesWhereUniqueInput;
};
/**
 * ProductAttributes updateMany
 */
export type ProductAttributesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductAttributes.
     */
    data: Prisma.XOR<Prisma.ProductAttributesUpdateManyMutationInput, Prisma.ProductAttributesUncheckedUpdateManyInput>;
    /**
     * Filter which ProductAttributes to update
     */
    where?: Prisma.ProductAttributesWhereInput;
    /**
     * Limit how many ProductAttributes to update.
     */
    limit?: number;
};
/**
 * ProductAttributes updateManyAndReturn
 */
export type ProductAttributesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * The data used to update ProductAttributes.
     */
    data: Prisma.XOR<Prisma.ProductAttributesUpdateManyMutationInput, Prisma.ProductAttributesUncheckedUpdateManyInput>;
    /**
     * Filter which ProductAttributes to update
     */
    where?: Prisma.ProductAttributesWhereInput;
    /**
     * Limit how many ProductAttributes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductAttributes upsert
 */
export type ProductAttributesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProductAttributes to update in case it exists.
     */
    where: Prisma.ProductAttributesWhereUniqueInput;
    /**
     * In case the ProductAttributes found by the `where` argument doesn't exist, create a new ProductAttributes with this data.
     */
    create: Prisma.XOR<Prisma.ProductAttributesCreateInput, Prisma.ProductAttributesUncheckedCreateInput>;
    /**
     * In case the ProductAttributes was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductAttributesUpdateInput, Prisma.ProductAttributesUncheckedUpdateInput>;
};
/**
 * ProductAttributes delete
 */
export type ProductAttributesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
    /**
     * Filter which ProductAttributes to delete.
     */
    where: Prisma.ProductAttributesWhereUniqueInput;
};
/**
 * ProductAttributes deleteMany
 */
export type ProductAttributesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAttributes to delete
     */
    where?: Prisma.ProductAttributesWhereInput;
    /**
     * Limit how many ProductAttributes to delete.
     */
    limit?: number;
};
/**
 * ProductAttributes without action
 */
export type ProductAttributesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributes
     */
    select?: Prisma.ProductAttributesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductAttributes
     */
    omit?: Prisma.ProductAttributesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductAttributesInclude<ExtArgs> | null;
};

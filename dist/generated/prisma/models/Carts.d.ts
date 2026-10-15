import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Carts
 *
 */
export type CartsModel = runtime.Types.Result.DefaultSelection<Prisma.$CartsPayload>;
export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null;
    _avg: CartsAvgAggregateOutputType | null;
    _sum: CartsSumAggregateOutputType | null;
    _min: CartsMinAggregateOutputType | null;
    _max: CartsMaxAggregateOutputType | null;
};
export type CartsAvgAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    productId: number | null;
    quantity: number | null;
};
export type CartsSumAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    productId: number | null;
    quantity: number | null;
};
export type CartsMinAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    productId: number | null;
    quantity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CartsMaxAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    productId: number | null;
    quantity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CartsCountAggregateOutputType = {
    id: number;
    customerId: number;
    productId: number;
    quantity: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CartsAvgAggregateInputType = {
    id?: true;
    customerId?: true;
    productId?: true;
    quantity?: true;
};
export type CartsSumAggregateInputType = {
    id?: true;
    customerId?: true;
    productId?: true;
    quantity?: true;
};
export type CartsMinAggregateInputType = {
    id?: true;
    customerId?: true;
    productId?: true;
    quantity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CartsMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    productId?: true;
    quantity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CartsCountAggregateInputType = {
    id?: true;
    customerId?: true;
    productId?: true;
    quantity?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CartsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to aggregate.
     */
    where?: Prisma.CartsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: Prisma.CartsOrderByWithRelationInput | Prisma.CartsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CartsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Carts
    **/
    _count?: true | CartsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CartsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CartsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType;
};
export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
    [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCarts[P]> : Prisma.GetScalarType<T[P], AggregateCarts[P]>;
};
export type CartsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartsWhereInput;
    orderBy?: Prisma.CartsOrderByWithAggregationInput | Prisma.CartsOrderByWithAggregationInput[];
    by: Prisma.CartsScalarFieldEnum[] | Prisma.CartsScalarFieldEnum;
    having?: Prisma.CartsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartsCountAggregateInputType | true;
    _avg?: CartsAvgAggregateInputType;
    _sum?: CartsSumAggregateInputType;
    _min?: CartsMinAggregateInputType;
    _max?: CartsMaxAggregateInputType;
};
export type CartsGroupByOutputType = {
    id: number;
    customerId: number;
    productId: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    _count: CartsCountAggregateOutputType | null;
    _avg: CartsAvgAggregateOutputType | null;
    _sum: CartsSumAggregateOutputType | null;
    _min: CartsMinAggregateOutputType | null;
    _max: CartsMaxAggregateOutputType | null;
};
export type GetCartsGroupByPayload<T extends CartsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CartsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CartsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CartsGroupByOutputType[P]>;
}>>;
export type CartsWhereInput = {
    AND?: Prisma.CartsWhereInput | Prisma.CartsWhereInput[];
    OR?: Prisma.CartsWhereInput[];
    NOT?: Prisma.CartsWhereInput | Prisma.CartsWhereInput[];
    id?: Prisma.IntFilter<"Carts"> | number;
    customerId?: Prisma.IntFilter<"Carts"> | number;
    productId?: Prisma.IntFilter<"Carts"> | number;
    quantity?: Prisma.IntFilter<"Carts"> | number;
    createdAt?: Prisma.DateTimeFilter<"Carts"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Carts"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
};
export type CartsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    product?: Prisma.ProductsOrderByWithRelationInput;
};
export type CartsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    customerId_productId?: Prisma.CartsCustomerIdProductIdCompoundUniqueInput;
    AND?: Prisma.CartsWhereInput | Prisma.CartsWhereInput[];
    OR?: Prisma.CartsWhereInput[];
    NOT?: Prisma.CartsWhereInput | Prisma.CartsWhereInput[];
    customerId?: Prisma.IntFilter<"Carts"> | number;
    productId?: Prisma.IntFilter<"Carts"> | number;
    quantity?: Prisma.IntFilter<"Carts"> | number;
    createdAt?: Prisma.DateTimeFilter<"Carts"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Carts"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
}, "id" | "customerId_productId">;
export type CartsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CartsCountOrderByAggregateInput;
    _avg?: Prisma.CartsAvgOrderByAggregateInput;
    _max?: Prisma.CartsMaxOrderByAggregateInput;
    _min?: Prisma.CartsMinOrderByAggregateInput;
    _sum?: Prisma.CartsSumOrderByAggregateInput;
};
export type CartsScalarWhereWithAggregatesInput = {
    AND?: Prisma.CartsScalarWhereWithAggregatesInput | Prisma.CartsScalarWhereWithAggregatesInput[];
    OR?: Prisma.CartsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CartsScalarWhereWithAggregatesInput | Prisma.CartsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Carts"> | number;
    customerId?: Prisma.IntWithAggregatesFilter<"Carts"> | number;
    productId?: Prisma.IntWithAggregatesFilter<"Carts"> | number;
    quantity?: Prisma.IntWithAggregatesFilter<"Carts"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Carts"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Carts"> | Date | string;
};
export type CartsCreateInput = {
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutCartsInput;
    product: Prisma.ProductsCreateNestedOneWithoutCartsInput;
};
export type CartsUncheckedCreateInput = {
    id?: number;
    customerId: number;
    productId: number;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartsUpdateInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCartsNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutCartsNestedInput;
};
export type CartsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartsCreateManyInput = {
    id?: number;
    customerId: number;
    productId: number;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartsUpdateManyMutationInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartsCustomerIdProductIdCompoundUniqueInput = {
    customerId: number;
    productId: number;
};
export type CartsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CartsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type CartsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CartsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CartsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type CartsListRelationFilter = {
    every?: Prisma.CartsWhereInput;
    some?: Prisma.CartsWhereInput;
    none?: Prisma.CartsWhereInput;
};
export type CartsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CartsCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CartsCreateWithoutCustomerInput, Prisma.CartsUncheckedCreateWithoutCustomerInput> | Prisma.CartsCreateWithoutCustomerInput[] | Prisma.CartsUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CartsCreateOrConnectWithoutCustomerInput | Prisma.CartsCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CartsCreateManyCustomerInputEnvelope;
    connect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
};
export type CartsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CartsCreateWithoutCustomerInput, Prisma.CartsUncheckedCreateWithoutCustomerInput> | Prisma.CartsCreateWithoutCustomerInput[] | Prisma.CartsUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CartsCreateOrConnectWithoutCustomerInput | Prisma.CartsCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CartsCreateManyCustomerInputEnvelope;
    connect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
};
export type CartsUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CartsCreateWithoutCustomerInput, Prisma.CartsUncheckedCreateWithoutCustomerInput> | Prisma.CartsCreateWithoutCustomerInput[] | Prisma.CartsUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CartsCreateOrConnectWithoutCustomerInput | Prisma.CartsCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CartsUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CartsUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CartsCreateManyCustomerInputEnvelope;
    set?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    disconnect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    delete?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    connect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    update?: Prisma.CartsUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CartsUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CartsUpdateManyWithWhereWithoutCustomerInput | Prisma.CartsUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CartsScalarWhereInput | Prisma.CartsScalarWhereInput[];
};
export type CartsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CartsCreateWithoutCustomerInput, Prisma.CartsUncheckedCreateWithoutCustomerInput> | Prisma.CartsCreateWithoutCustomerInput[] | Prisma.CartsUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CartsCreateOrConnectWithoutCustomerInput | Prisma.CartsCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CartsUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CartsUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CartsCreateManyCustomerInputEnvelope;
    set?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    disconnect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    delete?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    connect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    update?: Prisma.CartsUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CartsUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CartsUpdateManyWithWhereWithoutCustomerInput | Prisma.CartsUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CartsScalarWhereInput | Prisma.CartsScalarWhereInput[];
};
export type CartsCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.CartsCreateWithoutProductInput, Prisma.CartsUncheckedCreateWithoutProductInput> | Prisma.CartsCreateWithoutProductInput[] | Prisma.CartsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CartsCreateOrConnectWithoutProductInput | Prisma.CartsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.CartsCreateManyProductInputEnvelope;
    connect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
};
export type CartsUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.CartsCreateWithoutProductInput, Prisma.CartsUncheckedCreateWithoutProductInput> | Prisma.CartsCreateWithoutProductInput[] | Prisma.CartsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CartsCreateOrConnectWithoutProductInput | Prisma.CartsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.CartsCreateManyProductInputEnvelope;
    connect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
};
export type CartsUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.CartsCreateWithoutProductInput, Prisma.CartsUncheckedCreateWithoutProductInput> | Prisma.CartsCreateWithoutProductInput[] | Prisma.CartsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CartsCreateOrConnectWithoutProductInput | Prisma.CartsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.CartsUpsertWithWhereUniqueWithoutProductInput | Prisma.CartsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.CartsCreateManyProductInputEnvelope;
    set?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    disconnect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    delete?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    connect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    update?: Prisma.CartsUpdateWithWhereUniqueWithoutProductInput | Prisma.CartsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.CartsUpdateManyWithWhereWithoutProductInput | Prisma.CartsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.CartsScalarWhereInput | Prisma.CartsScalarWhereInput[];
};
export type CartsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.CartsCreateWithoutProductInput, Prisma.CartsUncheckedCreateWithoutProductInput> | Prisma.CartsCreateWithoutProductInput[] | Prisma.CartsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CartsCreateOrConnectWithoutProductInput | Prisma.CartsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.CartsUpsertWithWhereUniqueWithoutProductInput | Prisma.CartsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.CartsCreateManyProductInputEnvelope;
    set?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    disconnect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    delete?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    connect?: Prisma.CartsWhereUniqueInput | Prisma.CartsWhereUniqueInput[];
    update?: Prisma.CartsUpdateWithWhereUniqueWithoutProductInput | Prisma.CartsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.CartsUpdateManyWithWhereWithoutProductInput | Prisma.CartsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.CartsScalarWhereInput | Prisma.CartsScalarWhereInput[];
};
export type CartsCreateWithoutCustomerInput = {
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductsCreateNestedOneWithoutCartsInput;
};
export type CartsUncheckedCreateWithoutCustomerInput = {
    id?: number;
    productId: number;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartsCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartsCreateWithoutCustomerInput, Prisma.CartsUncheckedCreateWithoutCustomerInput>;
};
export type CartsCreateManyCustomerInputEnvelope = {
    data: Prisma.CartsCreateManyCustomerInput | Prisma.CartsCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type CartsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CartsWhereUniqueInput;
    update: Prisma.XOR<Prisma.CartsUpdateWithoutCustomerInput, Prisma.CartsUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CartsCreateWithoutCustomerInput, Prisma.CartsUncheckedCreateWithoutCustomerInput>;
};
export type CartsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CartsWhereUniqueInput;
    data: Prisma.XOR<Prisma.CartsUpdateWithoutCustomerInput, Prisma.CartsUncheckedUpdateWithoutCustomerInput>;
};
export type CartsUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.CartsScalarWhereInput;
    data: Prisma.XOR<Prisma.CartsUpdateManyMutationInput, Prisma.CartsUncheckedUpdateManyWithoutCustomerInput>;
};
export type CartsScalarWhereInput = {
    AND?: Prisma.CartsScalarWhereInput | Prisma.CartsScalarWhereInput[];
    OR?: Prisma.CartsScalarWhereInput[];
    NOT?: Prisma.CartsScalarWhereInput | Prisma.CartsScalarWhereInput[];
    id?: Prisma.IntFilter<"Carts"> | number;
    customerId?: Prisma.IntFilter<"Carts"> | number;
    productId?: Prisma.IntFilter<"Carts"> | number;
    quantity?: Prisma.IntFilter<"Carts"> | number;
    createdAt?: Prisma.DateTimeFilter<"Carts"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Carts"> | Date | string;
};
export type CartsCreateWithoutProductInput = {
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutCartsInput;
};
export type CartsUncheckedCreateWithoutProductInput = {
    id?: number;
    customerId: number;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartsCreateOrConnectWithoutProductInput = {
    where: Prisma.CartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartsCreateWithoutProductInput, Prisma.CartsUncheckedCreateWithoutProductInput>;
};
export type CartsCreateManyProductInputEnvelope = {
    data: Prisma.CartsCreateManyProductInput | Prisma.CartsCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type CartsUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.CartsWhereUniqueInput;
    update: Prisma.XOR<Prisma.CartsUpdateWithoutProductInput, Prisma.CartsUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.CartsCreateWithoutProductInput, Prisma.CartsUncheckedCreateWithoutProductInput>;
};
export type CartsUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.CartsWhereUniqueInput;
    data: Prisma.XOR<Prisma.CartsUpdateWithoutProductInput, Prisma.CartsUncheckedUpdateWithoutProductInput>;
};
export type CartsUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.CartsScalarWhereInput;
    data: Prisma.XOR<Prisma.CartsUpdateManyMutationInput, Prisma.CartsUncheckedUpdateManyWithoutProductInput>;
};
export type CartsCreateManyCustomerInput = {
    id?: number;
    productId: number;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartsUpdateWithoutCustomerInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductsUpdateOneRequiredWithoutCartsNestedInput;
};
export type CartsUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartsUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartsCreateManyProductInput = {
    id?: number;
    customerId: number;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartsUpdateWithoutProductInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCartsNestedInput;
};
export type CartsUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartsUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carts"]>;
export type CartsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carts"]>;
export type CartsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carts"]>;
export type CartsSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CartsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "productId" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["carts"]>;
export type CartsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type CartsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type CartsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type $CartsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Carts";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        product: Prisma.$ProductsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        customerId: number;
        productId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["carts"]>;
    composites: {};
};
export type CartsGetPayload<S extends boolean | null | undefined | CartsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CartsPayload, S>;
export type CartsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartsCountAggregateInputType | true;
};
export interface CartsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Carts'];
        meta: {
            name: 'Carts';
        };
    };
    /**
     * Find zero or one Carts that matches the filter.
     * @param {CartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartsFindUniqueArgs>(args: Prisma.SelectSubset<T, CartsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CartsClient<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartsClient<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartsFindFirstArgs>(args?: Prisma.SelectSubset<T, CartsFindFirstArgs<ExtArgs>>): Prisma.Prisma__CartsClient<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CartsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartsClient<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     *
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CartsFindManyArgs>(args?: Prisma.SelectSubset<T, CartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Carts.
     * @param {CartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     *
     */
    create<T extends CartsCreateArgs>(args: Prisma.SelectSubset<T, CartsCreateArgs<ExtArgs>>): Prisma.Prisma__CartsClient<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Carts.
     * @param {CartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CartsCreateManyArgs>(args?: Prisma.SelectSubset<T, CartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CartsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Carts.
     * @param {CartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     *
     */
    delete<T extends CartsDeleteArgs>(args: Prisma.SelectSubset<T, CartsDeleteArgs<ExtArgs>>): Prisma.Prisma__CartsClient<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Carts.
     * @param {CartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CartsUpdateArgs>(args: Prisma.SelectSubset<T, CartsUpdateArgs<ExtArgs>>): Prisma.Prisma__CartsClient<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Carts.
     * @param {CartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CartsDeleteManyArgs>(args?: Prisma.SelectSubset<T, CartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CartsUpdateManyArgs>(args: Prisma.SelectSubset<T, CartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Carts.
     * @param {CartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends CartsUpsertArgs>(args: Prisma.SelectSubset<T, CartsUpsertArgs<ExtArgs>>): Prisma.Prisma__CartsClient<runtime.Types.Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartsCountArgs>(args?: Prisma.Subset<T, CartsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CartsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartsAggregateArgs>(args: Prisma.Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>;
    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CartsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CartsGroupByArgs['orderBy'];
    } : {
        orderBy?: CartsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Carts model
     */
    readonly fields: CartsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Carts.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CartsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Carts model
 */
export interface CartsFieldRefs {
    readonly id: Prisma.FieldRef<"Carts", 'Int'>;
    readonly customerId: Prisma.FieldRef<"Carts", 'Int'>;
    readonly productId: Prisma.FieldRef<"Carts", 'Int'>;
    readonly quantity: Prisma.FieldRef<"Carts", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Carts", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Carts", 'DateTime'>;
}
/**
 * Carts findUnique
 */
export type CartsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where: Prisma.CartsWhereUniqueInput;
};
/**
 * Carts findUniqueOrThrow
 */
export type CartsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where: Prisma.CartsWhereUniqueInput;
};
/**
 * Carts findFirst
 */
export type CartsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where?: Prisma.CartsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: Prisma.CartsOrderByWithRelationInput | Prisma.CartsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Carts.
     */
    cursor?: Prisma.CartsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Carts.
     */
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
/**
 * Carts findFirstOrThrow
 */
export type CartsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where?: Prisma.CartsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: Prisma.CartsOrderByWithRelationInput | Prisma.CartsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Carts.
     */
    cursor?: Prisma.CartsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Carts.
     */
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
/**
 * Carts findMany
 */
export type CartsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where?: Prisma.CartsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: Prisma.CartsOrderByWithRelationInput | Prisma.CartsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Carts.
     */
    cursor?: Prisma.CartsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Carts.
     */
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
/**
 * Carts create
 */
export type CartsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Carts.
     */
    data: Prisma.XOR<Prisma.CartsCreateInput, Prisma.CartsUncheckedCreateInput>;
};
/**
 * Carts createMany
 */
export type CartsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: Prisma.CartsCreateManyInput | Prisma.CartsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Carts createManyAndReturn
 */
export type CartsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * The data used to create many Carts.
     */
    data: Prisma.CartsCreateManyInput | Prisma.CartsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Carts update
 */
export type CartsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Carts.
     */
    data: Prisma.XOR<Prisma.CartsUpdateInput, Prisma.CartsUncheckedUpdateInput>;
    /**
     * Choose, which Carts to update.
     */
    where: Prisma.CartsWhereUniqueInput;
};
/**
 * Carts updateMany
 */
export type CartsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: Prisma.XOR<Prisma.CartsUpdateManyMutationInput, Prisma.CartsUncheckedUpdateManyInput>;
    /**
     * Filter which Carts to update
     */
    where?: Prisma.CartsWhereInput;
    /**
     * Limit how many Carts to update.
     */
    limit?: number;
};
/**
 * Carts updateManyAndReturn
 */
export type CartsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * The data used to update Carts.
     */
    data: Prisma.XOR<Prisma.CartsUpdateManyMutationInput, Prisma.CartsUncheckedUpdateManyInput>;
    /**
     * Filter which Carts to update
     */
    where?: Prisma.CartsWhereInput;
    /**
     * Limit how many Carts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Carts upsert
 */
export type CartsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Carts to update in case it exists.
     */
    where: Prisma.CartsWhereUniqueInput;
    /**
     * In case the Carts found by the `where` argument doesn't exist, create a new Carts with this data.
     */
    create: Prisma.XOR<Prisma.CartsCreateInput, Prisma.CartsUncheckedCreateInput>;
    /**
     * In case the Carts was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CartsUpdateInput, Prisma.CartsUncheckedUpdateInput>;
};
/**
 * Carts delete
 */
export type CartsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
    /**
     * Filter which Carts to delete.
     */
    where: Prisma.CartsWhereUniqueInput;
};
/**
 * Carts deleteMany
 */
export type CartsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: Prisma.CartsWhereInput;
    /**
     * Limit how many Carts to delete.
     */
    limit?: number;
};
/**
 * Carts without action
 */
export type CartsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: Prisma.CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: Prisma.CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartsInclude<ExtArgs> | null;
};

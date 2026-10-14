import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Useraccount
 *
 */
export type UseraccountModel = runtime.Types.Result.DefaultSelection<Prisma.$UseraccountPayload>;
export type AggregateUseraccount = {
    _count: UseraccountCountAggregateOutputType | null;
    _avg: UseraccountAvgAggregateOutputType | null;
    _sum: UseraccountSumAggregateOutputType | null;
    _min: UseraccountMinAggregateOutputType | null;
    _max: UseraccountMaxAggregateOutputType | null;
};
export type UseraccountAvgAggregateOutputType = {
    id: number | null;
};
export type UseraccountSumAggregateOutputType = {
    id: number | null;
};
export type UseraccountMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    hashpassword: string | null;
    email: string | null;
    emailVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UseraccountMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    hashpassword: string | null;
    email: string | null;
    emailVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UseraccountCountAggregateOutputType = {
    id: number;
    username: number;
    hashpassword: number;
    email: number;
    emailVerified: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UseraccountAvgAggregateInputType = {
    id?: true;
};
export type UseraccountSumAggregateInputType = {
    id?: true;
};
export type UseraccountMinAggregateInputType = {
    id?: true;
    username?: true;
    hashpassword?: true;
    email?: true;
    emailVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UseraccountMaxAggregateInputType = {
    id?: true;
    username?: true;
    hashpassword?: true;
    email?: true;
    emailVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UseraccountCountAggregateInputType = {
    id?: true;
    username?: true;
    hashpassword?: true;
    email?: true;
    emailVerified?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UseraccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Useraccount to aggregate.
     */
    where?: Prisma.UseraccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Useraccounts to fetch.
     */
    orderBy?: Prisma.UseraccountOrderByWithRelationInput | Prisma.UseraccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UseraccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Useraccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Useraccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Useraccounts
    **/
    _count?: true | UseraccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UseraccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UseraccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UseraccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UseraccountMaxAggregateInputType;
};
export type GetUseraccountAggregateType<T extends UseraccountAggregateArgs> = {
    [P in keyof T & keyof AggregateUseraccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUseraccount[P]> : Prisma.GetScalarType<T[P], AggregateUseraccount[P]>;
};
export type UseraccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UseraccountWhereInput;
    orderBy?: Prisma.UseraccountOrderByWithAggregationInput | Prisma.UseraccountOrderByWithAggregationInput[];
    by: Prisma.UseraccountScalarFieldEnum[] | Prisma.UseraccountScalarFieldEnum;
    having?: Prisma.UseraccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UseraccountCountAggregateInputType | true;
    _avg?: UseraccountAvgAggregateInputType;
    _sum?: UseraccountSumAggregateInputType;
    _min?: UseraccountMinAggregateInputType;
    _max?: UseraccountMaxAggregateInputType;
};
export type UseraccountGroupByOutputType = {
    id: number;
    username: string;
    hashpassword: string;
    email: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UseraccountCountAggregateOutputType | null;
    _avg: UseraccountAvgAggregateOutputType | null;
    _sum: UseraccountSumAggregateOutputType | null;
    _min: UseraccountMinAggregateOutputType | null;
    _max: UseraccountMaxAggregateOutputType | null;
};
export type GetUseraccountGroupByPayload<T extends UseraccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UseraccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UseraccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UseraccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UseraccountGroupByOutputType[P]>;
}>>;
export type UseraccountWhereInput = {
    AND?: Prisma.UseraccountWhereInput | Prisma.UseraccountWhereInput[];
    OR?: Prisma.UseraccountWhereInput[];
    NOT?: Prisma.UseraccountWhereInput | Prisma.UseraccountWhereInput[];
    id?: Prisma.IntFilter<"Useraccount"> | number;
    username?: Prisma.StringFilter<"Useraccount"> | string;
    hashpassword?: Prisma.StringFilter<"Useraccount"> | string;
    email?: Prisma.StringFilter<"Useraccount"> | string;
    emailVerified?: Prisma.BoolFilter<"Useraccount"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Useraccount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Useraccount"> | Date | string;
    profile?: Prisma.XOR<Prisma.UserProfileNullableScalarRelationFilter, Prisma.UserProfileWhereInput> | null;
    roles?: Prisma.RolesListRelationFilter;
};
export type UseraccountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    hashpassword?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profile?: Prisma.UserProfileOrderByWithRelationInput;
    roles?: Prisma.RolesOrderByRelationAggregateInput;
};
export type UseraccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    username?: string;
    hashpassword?: string;
    email?: string;
    AND?: Prisma.UseraccountWhereInput | Prisma.UseraccountWhereInput[];
    OR?: Prisma.UseraccountWhereInput[];
    NOT?: Prisma.UseraccountWhereInput | Prisma.UseraccountWhereInput[];
    emailVerified?: Prisma.BoolFilter<"Useraccount"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Useraccount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Useraccount"> | Date | string;
    profile?: Prisma.XOR<Prisma.UserProfileNullableScalarRelationFilter, Prisma.UserProfileWhereInput> | null;
    roles?: Prisma.RolesListRelationFilter;
}, "id" | "username" | "hashpassword" | "email">;
export type UseraccountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    hashpassword?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UseraccountCountOrderByAggregateInput;
    _avg?: Prisma.UseraccountAvgOrderByAggregateInput;
    _max?: Prisma.UseraccountMaxOrderByAggregateInput;
    _min?: Prisma.UseraccountMinOrderByAggregateInput;
    _sum?: Prisma.UseraccountSumOrderByAggregateInput;
};
export type UseraccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.UseraccountScalarWhereWithAggregatesInput | Prisma.UseraccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.UseraccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UseraccountScalarWhereWithAggregatesInput | Prisma.UseraccountScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Useraccount"> | number;
    username?: Prisma.StringWithAggregatesFilter<"Useraccount"> | string;
    hashpassword?: Prisma.StringWithAggregatesFilter<"Useraccount"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Useraccount"> | string;
    emailVerified?: Prisma.BoolWithAggregatesFilter<"Useraccount"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Useraccount"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Useraccount"> | Date | string;
};
export type UseraccountCreateInput = {
    username: string;
    hashpassword: string;
    email: string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileCreateNestedOneWithoutAccountsInput;
    roles?: Prisma.RolesCreateNestedManyWithoutUseracountsInput;
};
export type UseraccountUncheckedCreateInput = {
    id?: number;
    username: string;
    hashpassword: string;
    email: string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAccountsInput;
    roles?: Prisma.RolesUncheckedCreateNestedManyWithoutUseracountsInput;
};
export type UseraccountUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    hashpassword?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUpdateOneWithoutAccountsNestedInput;
    roles?: Prisma.RolesUpdateManyWithoutUseracountsNestedInput;
};
export type UseraccountUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    hashpassword?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUncheckedUpdateOneWithoutAccountsNestedInput;
    roles?: Prisma.RolesUncheckedUpdateManyWithoutUseracountsNestedInput;
};
export type UseraccountCreateManyInput = {
    id?: number;
    username: string;
    hashpassword: string;
    email: string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UseraccountUpdateManyMutationInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    hashpassword?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UseraccountUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    hashpassword?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UseraccountListRelationFilter = {
    every?: Prisma.UseraccountWhereInput;
    some?: Prisma.UseraccountWhereInput;
    none?: Prisma.UseraccountWhereInput;
};
export type UseraccountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UseraccountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    hashpassword?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UseraccountAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UseraccountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    hashpassword?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UseraccountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    hashpassword?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UseraccountSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UseraccountScalarRelationFilter = {
    is?: Prisma.UseraccountWhereInput;
    isNot?: Prisma.UseraccountWhereInput;
};
export type UseraccountCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UseraccountCreateWithoutRolesInput, Prisma.UseraccountUncheckedCreateWithoutRolesInput> | Prisma.UseraccountCreateWithoutRolesInput[] | Prisma.UseraccountUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UseraccountCreateOrConnectWithoutRolesInput | Prisma.UseraccountCreateOrConnectWithoutRolesInput[];
    connect?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
};
export type UseraccountUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UseraccountCreateWithoutRolesInput, Prisma.UseraccountUncheckedCreateWithoutRolesInput> | Prisma.UseraccountCreateWithoutRolesInput[] | Prisma.UseraccountUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UseraccountCreateOrConnectWithoutRolesInput | Prisma.UseraccountCreateOrConnectWithoutRolesInput[];
    connect?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
};
export type UseraccountUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UseraccountCreateWithoutRolesInput, Prisma.UseraccountUncheckedCreateWithoutRolesInput> | Prisma.UseraccountCreateWithoutRolesInput[] | Prisma.UseraccountUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UseraccountCreateOrConnectWithoutRolesInput | Prisma.UseraccountCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UseraccountUpsertWithWhereUniqueWithoutRolesInput | Prisma.UseraccountUpsertWithWhereUniqueWithoutRolesInput[];
    set?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
    disconnect?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
    delete?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
    connect?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
    update?: Prisma.UseraccountUpdateWithWhereUniqueWithoutRolesInput | Prisma.UseraccountUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UseraccountUpdateManyWithWhereWithoutRolesInput | Prisma.UseraccountUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UseraccountScalarWhereInput | Prisma.UseraccountScalarWhereInput[];
};
export type UseraccountUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UseraccountCreateWithoutRolesInput, Prisma.UseraccountUncheckedCreateWithoutRolesInput> | Prisma.UseraccountCreateWithoutRolesInput[] | Prisma.UseraccountUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UseraccountCreateOrConnectWithoutRolesInput | Prisma.UseraccountCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UseraccountUpsertWithWhereUniqueWithoutRolesInput | Prisma.UseraccountUpsertWithWhereUniqueWithoutRolesInput[];
    set?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
    disconnect?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
    delete?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
    connect?: Prisma.UseraccountWhereUniqueInput | Prisma.UseraccountWhereUniqueInput[];
    update?: Prisma.UseraccountUpdateWithWhereUniqueWithoutRolesInput | Prisma.UseraccountUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UseraccountUpdateManyWithWhereWithoutRolesInput | Prisma.UseraccountUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UseraccountScalarWhereInput | Prisma.UseraccountScalarWhereInput[];
};
export type UseraccountCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.UseraccountCreateWithoutProfileInput, Prisma.UseraccountUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UseraccountCreateOrConnectWithoutProfileInput;
    connect?: Prisma.UseraccountWhereUniqueInput;
};
export type UseraccountUpdateOneRequiredWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UseraccountCreateWithoutProfileInput, Prisma.UseraccountUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UseraccountCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.UseraccountUpsertWithoutProfileInput;
    connect?: Prisma.UseraccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UseraccountUpdateToOneWithWhereWithoutProfileInput, Prisma.UseraccountUpdateWithoutProfileInput>, Prisma.UseraccountUncheckedUpdateWithoutProfileInput>;
};
export type UseraccountCreateWithoutRolesInput = {
    username: string;
    hashpassword: string;
    email: string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileCreateNestedOneWithoutAccountsInput;
};
export type UseraccountUncheckedCreateWithoutRolesInput = {
    id?: number;
    username: string;
    hashpassword: string;
    email: string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAccountsInput;
};
export type UseraccountCreateOrConnectWithoutRolesInput = {
    where: Prisma.UseraccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.UseraccountCreateWithoutRolesInput, Prisma.UseraccountUncheckedCreateWithoutRolesInput>;
};
export type UseraccountUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UseraccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.UseraccountUpdateWithoutRolesInput, Prisma.UseraccountUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.UseraccountCreateWithoutRolesInput, Prisma.UseraccountUncheckedCreateWithoutRolesInput>;
};
export type UseraccountUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UseraccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.UseraccountUpdateWithoutRolesInput, Prisma.UseraccountUncheckedUpdateWithoutRolesInput>;
};
export type UseraccountUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.UseraccountScalarWhereInput;
    data: Prisma.XOR<Prisma.UseraccountUpdateManyMutationInput, Prisma.UseraccountUncheckedUpdateManyWithoutRolesInput>;
};
export type UseraccountScalarWhereInput = {
    AND?: Prisma.UseraccountScalarWhereInput | Prisma.UseraccountScalarWhereInput[];
    OR?: Prisma.UseraccountScalarWhereInput[];
    NOT?: Prisma.UseraccountScalarWhereInput | Prisma.UseraccountScalarWhereInput[];
    id?: Prisma.IntFilter<"Useraccount"> | number;
    username?: Prisma.StringFilter<"Useraccount"> | string;
    hashpassword?: Prisma.StringFilter<"Useraccount"> | string;
    email?: Prisma.StringFilter<"Useraccount"> | string;
    emailVerified?: Prisma.BoolFilter<"Useraccount"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Useraccount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Useraccount"> | Date | string;
};
export type UseraccountCreateWithoutProfileInput = {
    username: string;
    hashpassword: string;
    email: string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.RolesCreateNestedManyWithoutUseracountsInput;
};
export type UseraccountUncheckedCreateWithoutProfileInput = {
    id?: number;
    username: string;
    hashpassword: string;
    email: string;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.RolesUncheckedCreateNestedManyWithoutUseracountsInput;
};
export type UseraccountCreateOrConnectWithoutProfileInput = {
    where: Prisma.UseraccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.UseraccountCreateWithoutProfileInput, Prisma.UseraccountUncheckedCreateWithoutProfileInput>;
};
export type UseraccountUpsertWithoutProfileInput = {
    update: Prisma.XOR<Prisma.UseraccountUpdateWithoutProfileInput, Prisma.UseraccountUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.UseraccountCreateWithoutProfileInput, Prisma.UseraccountUncheckedCreateWithoutProfileInput>;
    where?: Prisma.UseraccountWhereInput;
};
export type UseraccountUpdateToOneWithWhereWithoutProfileInput = {
    where?: Prisma.UseraccountWhereInput;
    data: Prisma.XOR<Prisma.UseraccountUpdateWithoutProfileInput, Prisma.UseraccountUncheckedUpdateWithoutProfileInput>;
};
export type UseraccountUpdateWithoutProfileInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    hashpassword?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.RolesUpdateManyWithoutUseracountsNestedInput;
};
export type UseraccountUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    hashpassword?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.RolesUncheckedUpdateManyWithoutUseracountsNestedInput;
};
export type UseraccountUpdateWithoutRolesInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    hashpassword?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUpdateOneWithoutAccountsNestedInput;
};
export type UseraccountUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    hashpassword?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUncheckedUpdateOneWithoutAccountsNestedInput;
};
export type UseraccountUncheckedUpdateManyWithoutRolesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    hashpassword?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type UseraccountCountOutputType
 */
export type UseraccountCountOutputType = {
    roles: number;
};
export type UseraccountCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | UseraccountCountOutputTypeCountRolesArgs;
};
/**
 * UseraccountCountOutputType without action
 */
export type UseraccountCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseraccountCountOutputType
     */
    select?: Prisma.UseraccountCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UseraccountCountOutputType without action
 */
export type UseraccountCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolesWhereInput;
};
export type UseraccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    hashpassword?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.Useraccount$profileArgs<ExtArgs>;
    roles?: boolean | Prisma.Useraccount$rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.UseraccountCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["useraccount"]>;
export type UseraccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    hashpassword?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["useraccount"]>;
export type UseraccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    hashpassword?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["useraccount"]>;
export type UseraccountSelectScalar = {
    id?: boolean;
    username?: boolean;
    hashpassword?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UseraccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "hashpassword" | "email" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["useraccount"]>;
export type UseraccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.Useraccount$profileArgs<ExtArgs>;
    roles?: boolean | Prisma.Useraccount$rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.UseraccountCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UseraccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UseraccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UseraccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Useraccount";
    objects: {
        profile: Prisma.$UserProfilePayload<ExtArgs> | null;
        roles: Prisma.$RolesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        username: string;
        hashpassword: string;
        email: string;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["useraccount"]>;
    composites: {};
};
export type UseraccountGetPayload<S extends boolean | null | undefined | UseraccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UseraccountPayload, S>;
export type UseraccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UseraccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UseraccountCountAggregateInputType | true;
};
export interface UseraccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Useraccount'];
        meta: {
            name: 'Useraccount';
        };
    };
    /**
     * Find zero or one Useraccount that matches the filter.
     * @param {UseraccountFindUniqueArgs} args - Arguments to find a Useraccount
     * @example
     * // Get one Useraccount
     * const useraccount = await prisma.useraccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UseraccountFindUniqueArgs>(args: Prisma.SelectSubset<T, UseraccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UseraccountClient<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Useraccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UseraccountFindUniqueOrThrowArgs} args - Arguments to find a Useraccount
     * @example
     * // Get one Useraccount
     * const useraccount = await prisma.useraccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UseraccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UseraccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UseraccountClient<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Useraccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountFindFirstArgs} args - Arguments to find a Useraccount
     * @example
     * // Get one Useraccount
     * const useraccount = await prisma.useraccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UseraccountFindFirstArgs>(args?: Prisma.SelectSubset<T, UseraccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__UseraccountClient<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Useraccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountFindFirstOrThrowArgs} args - Arguments to find a Useraccount
     * @example
     * // Get one Useraccount
     * const useraccount = await prisma.useraccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UseraccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UseraccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UseraccountClient<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Useraccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Useraccounts
     * const useraccounts = await prisma.useraccount.findMany()
     *
     * // Get first 10 Useraccounts
     * const useraccounts = await prisma.useraccount.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const useraccountWithIdOnly = await prisma.useraccount.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UseraccountFindManyArgs>(args?: Prisma.SelectSubset<T, UseraccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Useraccount.
     * @param {UseraccountCreateArgs} args - Arguments to create a Useraccount.
     * @example
     * // Create one Useraccount
     * const Useraccount = await prisma.useraccount.create({
     *   data: {
     *     // ... data to create a Useraccount
     *   }
     * })
     *
     */
    create<T extends UseraccountCreateArgs>(args: Prisma.SelectSubset<T, UseraccountCreateArgs<ExtArgs>>): Prisma.Prisma__UseraccountClient<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Useraccounts.
     * @param {UseraccountCreateManyArgs} args - Arguments to create many Useraccounts.
     * @example
     * // Create many Useraccounts
     * const useraccount = await prisma.useraccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UseraccountCreateManyArgs>(args?: Prisma.SelectSubset<T, UseraccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Useraccounts and returns the data saved in the database.
     * @param {UseraccountCreateManyAndReturnArgs} args - Arguments to create many Useraccounts.
     * @example
     * // Create many Useraccounts
     * const useraccount = await prisma.useraccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Useraccounts and only return the `id`
     * const useraccountWithIdOnly = await prisma.useraccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UseraccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UseraccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Useraccount.
     * @param {UseraccountDeleteArgs} args - Arguments to delete one Useraccount.
     * @example
     * // Delete one Useraccount
     * const Useraccount = await prisma.useraccount.delete({
     *   where: {
     *     // ... filter to delete one Useraccount
     *   }
     * })
     *
     */
    delete<T extends UseraccountDeleteArgs>(args: Prisma.SelectSubset<T, UseraccountDeleteArgs<ExtArgs>>): Prisma.Prisma__UseraccountClient<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Useraccount.
     * @param {UseraccountUpdateArgs} args - Arguments to update one Useraccount.
     * @example
     * // Update one Useraccount
     * const useraccount = await prisma.useraccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UseraccountUpdateArgs>(args: Prisma.SelectSubset<T, UseraccountUpdateArgs<ExtArgs>>): Prisma.Prisma__UseraccountClient<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Useraccounts.
     * @param {UseraccountDeleteManyArgs} args - Arguments to filter Useraccounts to delete.
     * @example
     * // Delete a few Useraccounts
     * const { count } = await prisma.useraccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UseraccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, UseraccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Useraccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Useraccounts
     * const useraccount = await prisma.useraccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UseraccountUpdateManyArgs>(args: Prisma.SelectSubset<T, UseraccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Useraccounts and returns the data updated in the database.
     * @param {UseraccountUpdateManyAndReturnArgs} args - Arguments to update many Useraccounts.
     * @example
     * // Update many Useraccounts
     * const useraccount = await prisma.useraccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Useraccounts and only return the `id`
     * const useraccountWithIdOnly = await prisma.useraccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends UseraccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UseraccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Useraccount.
     * @param {UseraccountUpsertArgs} args - Arguments to update or create a Useraccount.
     * @example
     * // Update or create a Useraccount
     * const useraccount = await prisma.useraccount.upsert({
     *   create: {
     *     // ... data to create a Useraccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Useraccount we want to update
     *   }
     * })
     */
    upsert<T extends UseraccountUpsertArgs>(args: Prisma.SelectSubset<T, UseraccountUpsertArgs<ExtArgs>>): Prisma.Prisma__UseraccountClient<runtime.Types.Result.GetResult<Prisma.$UseraccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Useraccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountCountArgs} args - Arguments to filter Useraccounts to count.
     * @example
     * // Count the number of Useraccounts
     * const count = await prisma.useraccount.count({
     *   where: {
     *     // ... the filter for the Useraccounts we want to count
     *   }
     * })
    **/
    count<T extends UseraccountCountArgs>(args?: Prisma.Subset<T, UseraccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UseraccountCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Useraccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UseraccountAggregateArgs>(args: Prisma.Subset<T, UseraccountAggregateArgs>): Prisma.PrismaPromise<GetUseraccountAggregateType<T>>;
    /**
     * Group by Useraccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseraccountGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UseraccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UseraccountGroupByArgs['orderBy'];
    } : {
        orderBy?: UseraccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UseraccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUseraccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Useraccount model
     */
    readonly fields: UseraccountFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Useraccount.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UseraccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.Useraccount$profileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Useraccount$profileArgs<ExtArgs>>): Prisma.Prisma__UserProfileClient<runtime.Types.Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    roles<T extends Prisma.Useraccount$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Useraccount$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Useraccount model
 */
export interface UseraccountFieldRefs {
    readonly id: Prisma.FieldRef<"Useraccount", 'Int'>;
    readonly username: Prisma.FieldRef<"Useraccount", 'String'>;
    readonly hashpassword: Prisma.FieldRef<"Useraccount", 'String'>;
    readonly email: Prisma.FieldRef<"Useraccount", 'String'>;
    readonly emailVerified: Prisma.FieldRef<"Useraccount", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Useraccount", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Useraccount", 'DateTime'>;
}
/**
 * Useraccount findUnique
 */
export type UseraccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
    /**
     * Filter, which Useraccount to fetch.
     */
    where: Prisma.UseraccountWhereUniqueInput;
};
/**
 * Useraccount findUniqueOrThrow
 */
export type UseraccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
    /**
     * Filter, which Useraccount to fetch.
     */
    where: Prisma.UseraccountWhereUniqueInput;
};
/**
 * Useraccount findFirst
 */
export type UseraccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
    /**
     * Filter, which Useraccount to fetch.
     */
    where?: Prisma.UseraccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Useraccounts to fetch.
     */
    orderBy?: Prisma.UseraccountOrderByWithRelationInput | Prisma.UseraccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Useraccounts.
     */
    cursor?: Prisma.UseraccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Useraccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Useraccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Useraccounts.
     */
    distinct?: Prisma.UseraccountScalarFieldEnum | Prisma.UseraccountScalarFieldEnum[];
};
/**
 * Useraccount findFirstOrThrow
 */
export type UseraccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
    /**
     * Filter, which Useraccount to fetch.
     */
    where?: Prisma.UseraccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Useraccounts to fetch.
     */
    orderBy?: Prisma.UseraccountOrderByWithRelationInput | Prisma.UseraccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Useraccounts.
     */
    cursor?: Prisma.UseraccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Useraccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Useraccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Useraccounts.
     */
    distinct?: Prisma.UseraccountScalarFieldEnum | Prisma.UseraccountScalarFieldEnum[];
};
/**
 * Useraccount findMany
 */
export type UseraccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
    /**
     * Filter, which Useraccounts to fetch.
     */
    where?: Prisma.UseraccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Useraccounts to fetch.
     */
    orderBy?: Prisma.UseraccountOrderByWithRelationInput | Prisma.UseraccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Useraccounts.
     */
    cursor?: Prisma.UseraccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Useraccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Useraccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Useraccounts.
     */
    distinct?: Prisma.UseraccountScalarFieldEnum | Prisma.UseraccountScalarFieldEnum[];
};
/**
 * Useraccount create
 */
export type UseraccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Useraccount.
     */
    data: Prisma.XOR<Prisma.UseraccountCreateInput, Prisma.UseraccountUncheckedCreateInput>;
};
/**
 * Useraccount createMany
 */
export type UseraccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Useraccounts.
     */
    data: Prisma.UseraccountCreateManyInput | Prisma.UseraccountCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Useraccount createManyAndReturn
 */
export type UseraccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * The data used to create many Useraccounts.
     */
    data: Prisma.UseraccountCreateManyInput | Prisma.UseraccountCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Useraccount update
 */
export type UseraccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Useraccount.
     */
    data: Prisma.XOR<Prisma.UseraccountUpdateInput, Prisma.UseraccountUncheckedUpdateInput>;
    /**
     * Choose, which Useraccount to update.
     */
    where: Prisma.UseraccountWhereUniqueInput;
};
/**
 * Useraccount updateMany
 */
export type UseraccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Useraccounts.
     */
    data: Prisma.XOR<Prisma.UseraccountUpdateManyMutationInput, Prisma.UseraccountUncheckedUpdateManyInput>;
    /**
     * Filter which Useraccounts to update
     */
    where?: Prisma.UseraccountWhereInput;
    /**
     * Limit how many Useraccounts to update.
     */
    limit?: number;
};
/**
 * Useraccount updateManyAndReturn
 */
export type UseraccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * The data used to update Useraccounts.
     */
    data: Prisma.XOR<Prisma.UseraccountUpdateManyMutationInput, Prisma.UseraccountUncheckedUpdateManyInput>;
    /**
     * Filter which Useraccounts to update
     */
    where?: Prisma.UseraccountWhereInput;
    /**
     * Limit how many Useraccounts to update.
     */
    limit?: number;
};
/**
 * Useraccount upsert
 */
export type UseraccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Useraccount to update in case it exists.
     */
    where: Prisma.UseraccountWhereUniqueInput;
    /**
     * In case the Useraccount found by the `where` argument doesn't exist, create a new Useraccount with this data.
     */
    create: Prisma.XOR<Prisma.UseraccountCreateInput, Prisma.UseraccountUncheckedCreateInput>;
    /**
     * In case the Useraccount was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UseraccountUpdateInput, Prisma.UseraccountUncheckedUpdateInput>;
};
/**
 * Useraccount delete
 */
export type UseraccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
    /**
     * Filter which Useraccount to delete.
     */
    where: Prisma.UseraccountWhereUniqueInput;
};
/**
 * Useraccount deleteMany
 */
export type UseraccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Useraccounts to delete
     */
    where?: Prisma.UseraccountWhereInput;
    /**
     * Limit how many Useraccounts to delete.
     */
    limit?: number;
};
/**
 * Useraccount.profile
 */
export type Useraccount$profileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: Prisma.UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: Prisma.UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserProfileInclude<ExtArgs> | null;
    where?: Prisma.UserProfileWhereInput;
};
/**
 * Useraccount.roles
 */
export type Useraccount$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: Prisma.RolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Roles
     */
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RolesInclude<ExtArgs> | null;
    where?: Prisma.RolesWhereInput;
    orderBy?: Prisma.RolesOrderByWithRelationInput | Prisma.RolesOrderByWithRelationInput[];
    cursor?: Prisma.RolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
/**
 * Useraccount without action
 */
export type UseraccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Useraccount
     */
    select?: Prisma.UseraccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Useraccount
     */
    omit?: Prisma.UseraccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UseraccountInclude<ExtArgs> | null;
};

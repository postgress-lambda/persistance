import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model permission
 *
 */
export type permissionModel = runtime.Types.Result.DefaultSelection<Prisma.$permissionPayload>;
export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null;
    _avg: PermissionAvgAggregateOutputType | null;
    _sum: PermissionSumAggregateOutputType | null;
    _min: PermissionMinAggregateOutputType | null;
    _max: PermissionMaxAggregateOutputType | null;
};
export type PermissionAvgAggregateOutputType = {
    id: number | null;
    rolesId: number | null;
};
export type PermissionSumAggregateOutputType = {
    id: number | null;
    rolesId: number | null;
};
export type PermissionMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    rolesId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PermissionMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    rolesId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PermissionCountAggregateOutputType = {
    id: number;
    name: number;
    rolesId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PermissionAvgAggregateInputType = {
    id?: true;
    rolesId?: true;
};
export type PermissionSumAggregateInputType = {
    id?: true;
    rolesId?: true;
};
export type PermissionMinAggregateInputType = {
    id?: true;
    name?: true;
    rolesId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PermissionMaxAggregateInputType = {
    id?: true;
    name?: true;
    rolesId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PermissionCountAggregateInputType = {
    id?: true;
    name?: true;
    rolesId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PermissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which permission to aggregate.
     */
    where?: Prisma.permissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of permissions to fetch.
     */
    orderBy?: Prisma.permissionOrderByWithRelationInput | Prisma.permissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.permissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned permissions
    **/
    _count?: true | PermissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType;
};
export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
    [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePermission[P]> : Prisma.GetScalarType<T[P], AggregatePermission[P]>;
};
export type permissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.permissionWhereInput;
    orderBy?: Prisma.permissionOrderByWithAggregationInput | Prisma.permissionOrderByWithAggregationInput[];
    by: Prisma.PermissionScalarFieldEnum[] | Prisma.PermissionScalarFieldEnum;
    having?: Prisma.permissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PermissionCountAggregateInputType | true;
    _avg?: PermissionAvgAggregateInputType;
    _sum?: PermissionSumAggregateInputType;
    _min?: PermissionMinAggregateInputType;
    _max?: PermissionMaxAggregateInputType;
};
export type PermissionGroupByOutputType = {
    id: number;
    name: string;
    rolesId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: PermissionCountAggregateOutputType | null;
    _avg: PermissionAvgAggregateOutputType | null;
    _sum: PermissionSumAggregateOutputType | null;
    _min: PermissionMinAggregateOutputType | null;
    _max: PermissionMaxAggregateOutputType | null;
};
export type GetPermissionGroupByPayload<T extends permissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PermissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PermissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PermissionGroupByOutputType[P]>;
}>>;
export type permissionWhereInput = {
    AND?: Prisma.permissionWhereInput | Prisma.permissionWhereInput[];
    OR?: Prisma.permissionWhereInput[];
    NOT?: Prisma.permissionWhereInput | Prisma.permissionWhereInput[];
    id?: Prisma.IntFilter<"permission"> | number;
    name?: Prisma.StringFilter<"permission"> | string;
    rolesId?: Prisma.IntFilter<"permission"> | number;
    createdAt?: Prisma.DateTimeFilter<"permission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"permission"> | Date | string;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.RolesWhereInput>;
};
export type permissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rolesId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    roles?: Prisma.RolesOrderByWithRelationInput;
};
export type permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.permissionWhereInput | Prisma.permissionWhereInput[];
    OR?: Prisma.permissionWhereInput[];
    NOT?: Prisma.permissionWhereInput | Prisma.permissionWhereInput[];
    rolesId?: Prisma.IntFilter<"permission"> | number;
    createdAt?: Prisma.DateTimeFilter<"permission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"permission"> | Date | string;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.RolesWhereInput>;
}, "id" | "name">;
export type permissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rolesId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.permissionCountOrderByAggregateInput;
    _avg?: Prisma.permissionAvgOrderByAggregateInput;
    _max?: Prisma.permissionMaxOrderByAggregateInput;
    _min?: Prisma.permissionMinOrderByAggregateInput;
    _sum?: Prisma.permissionSumOrderByAggregateInput;
};
export type permissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.permissionScalarWhereWithAggregatesInput | Prisma.permissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.permissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.permissionScalarWhereWithAggregatesInput | Prisma.permissionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"permission"> | number;
    name?: Prisma.StringWithAggregatesFilter<"permission"> | string;
    rolesId?: Prisma.IntWithAggregatesFilter<"permission"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"permission"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"permission"> | Date | string;
};
export type permissionCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles: Prisma.RolesCreateNestedOneWithoutPermissionsInput;
};
export type permissionUncheckedCreateInput = {
    id?: number;
    name: string;
    rolesId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type permissionUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.RolesUpdateOneRequiredWithoutPermissionsNestedInput;
};
export type permissionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    rolesId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type permissionCreateManyInput = {
    id?: number;
    name: string;
    rolesId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type permissionUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type permissionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    rolesId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PermissionListRelationFilter = {
    every?: Prisma.permissionWhereInput;
    some?: Prisma.permissionWhereInput;
    none?: Prisma.permissionWhereInput;
};
export type permissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type permissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rolesId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type permissionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rolesId?: Prisma.SortOrder;
};
export type permissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rolesId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type permissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rolesId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type permissionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rolesId?: Prisma.SortOrder;
};
export type permissionCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.permissionCreateWithoutRolesInput, Prisma.permissionUncheckedCreateWithoutRolesInput> | Prisma.permissionCreateWithoutRolesInput[] | Prisma.permissionUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.permissionCreateOrConnectWithoutRolesInput | Prisma.permissionCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.permissionCreateManyRolesInputEnvelope;
    connect?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
};
export type permissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.permissionCreateWithoutRolesInput, Prisma.permissionUncheckedCreateWithoutRolesInput> | Prisma.permissionCreateWithoutRolesInput[] | Prisma.permissionUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.permissionCreateOrConnectWithoutRolesInput | Prisma.permissionCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.permissionCreateManyRolesInputEnvelope;
    connect?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
};
export type permissionUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.permissionCreateWithoutRolesInput, Prisma.permissionUncheckedCreateWithoutRolesInput> | Prisma.permissionCreateWithoutRolesInput[] | Prisma.permissionUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.permissionCreateOrConnectWithoutRolesInput | Prisma.permissionCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.permissionUpsertWithWhereUniqueWithoutRolesInput | Prisma.permissionUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.permissionCreateManyRolesInputEnvelope;
    set?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
    disconnect?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
    delete?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
    connect?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
    update?: Prisma.permissionUpdateWithWhereUniqueWithoutRolesInput | Prisma.permissionUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.permissionUpdateManyWithWhereWithoutRolesInput | Prisma.permissionUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.permissionScalarWhereInput | Prisma.permissionScalarWhereInput[];
};
export type permissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.permissionCreateWithoutRolesInput, Prisma.permissionUncheckedCreateWithoutRolesInput> | Prisma.permissionCreateWithoutRolesInput[] | Prisma.permissionUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.permissionCreateOrConnectWithoutRolesInput | Prisma.permissionCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.permissionUpsertWithWhereUniqueWithoutRolesInput | Prisma.permissionUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.permissionCreateManyRolesInputEnvelope;
    set?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
    disconnect?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
    delete?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
    connect?: Prisma.permissionWhereUniqueInput | Prisma.permissionWhereUniqueInput[];
    update?: Prisma.permissionUpdateWithWhereUniqueWithoutRolesInput | Prisma.permissionUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.permissionUpdateManyWithWhereWithoutRolesInput | Prisma.permissionUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.permissionScalarWhereInput | Prisma.permissionScalarWhereInput[];
};
export type permissionCreateWithoutRolesInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type permissionUncheckedCreateWithoutRolesInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type permissionCreateOrConnectWithoutRolesInput = {
    where: Prisma.permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.permissionCreateWithoutRolesInput, Prisma.permissionUncheckedCreateWithoutRolesInput>;
};
export type permissionCreateManyRolesInputEnvelope = {
    data: Prisma.permissionCreateManyRolesInput | Prisma.permissionCreateManyRolesInput[];
    skipDuplicates?: boolean;
};
export type permissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.permissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.permissionUpdateWithoutRolesInput, Prisma.permissionUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.permissionCreateWithoutRolesInput, Prisma.permissionUncheckedCreateWithoutRolesInput>;
};
export type permissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.permissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.permissionUpdateWithoutRolesInput, Prisma.permissionUncheckedUpdateWithoutRolesInput>;
};
export type permissionUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.permissionScalarWhereInput;
    data: Prisma.XOR<Prisma.permissionUpdateManyMutationInput, Prisma.permissionUncheckedUpdateManyWithoutRolesInput>;
};
export type permissionScalarWhereInput = {
    AND?: Prisma.permissionScalarWhereInput | Prisma.permissionScalarWhereInput[];
    OR?: Prisma.permissionScalarWhereInput[];
    NOT?: Prisma.permissionScalarWhereInput | Prisma.permissionScalarWhereInput[];
    id?: Prisma.IntFilter<"permission"> | number;
    name?: Prisma.StringFilter<"permission"> | string;
    rolesId?: Prisma.IntFilter<"permission"> | number;
    createdAt?: Prisma.DateTimeFilter<"permission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"permission"> | Date | string;
};
export type permissionCreateManyRolesInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type permissionUpdateWithoutRolesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type permissionUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type permissionUncheckedUpdateManyWithoutRolesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type permissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    rolesId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["permission"]>;
export type permissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    rolesId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["permission"]>;
export type permissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    rolesId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["permission"]>;
export type permissionSelectScalar = {
    id?: boolean;
    name?: boolean;
    rolesId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type permissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "rolesId" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>;
export type permissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
};
export type permissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
};
export type permissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
};
export type $permissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "permission";
    objects: {
        roles: Prisma.$RolesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        rolesId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["permission"]>;
    composites: {};
};
export type permissionGetPayload<S extends boolean | null | undefined | permissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$permissionPayload, S>;
export type permissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PermissionCountAggregateInputType | true;
};
export interface permissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['permission'];
        meta: {
            name: 'permission';
        };
    };
    /**
     * Find zero or one Permission that matches the filter.
     * @param {permissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permissionFindUniqueArgs>(args: Prisma.SelectSubset<T, permissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {permissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permissionFindFirstArgs>(args?: Prisma.SelectSubset<T, permissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     *
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     *
     */
    findMany<T extends permissionFindManyArgs>(args?: Prisma.SelectSubset<T, permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Permission.
     * @param {permissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     *
     */
    create<T extends permissionCreateArgs>(args: Prisma.SelectSubset<T, permissionCreateArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Permissions.
     * @param {permissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends permissionCreateManyArgs>(args?: Prisma.SelectSubset<T, permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {permissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends permissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, permissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Permission.
     * @param {permissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     *
     */
    delete<T extends permissionDeleteArgs>(args: Prisma.SelectSubset<T, permissionDeleteArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Permission.
     * @param {permissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends permissionUpdateArgs>(args: Prisma.SelectSubset<T, permissionUpdateArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Permissions.
     * @param {permissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends permissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends permissionUpdateManyArgs>(args: Prisma.SelectSubset<T, permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {permissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
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
    updateManyAndReturn<T extends permissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, permissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Permission.
     * @param {permissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends permissionUpsertArgs>(args: Prisma.SelectSubset<T, permissionUpsertArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionCountArgs>(args?: Prisma.Subset<T, permissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PermissionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Prisma.Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>;
    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends permissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: permissionGroupByArgs['orderBy'];
    } : {
        orderBy?: permissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the permission model
     */
    readonly fields: permissionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for permission.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__permissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends Prisma.RolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RolesDefaultArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the permission model
 */
export interface permissionFieldRefs {
    readonly id: Prisma.FieldRef<"permission", 'Int'>;
    readonly name: Prisma.FieldRef<"permission", 'String'>;
    readonly rolesId: Prisma.FieldRef<"permission", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"permission", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"permission", 'DateTime'>;
}
/**
 * permission findUnique
 */
export type permissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
    /**
     * Filter, which permission to fetch.
     */
    where: Prisma.permissionWhereUniqueInput;
};
/**
 * permission findUniqueOrThrow
 */
export type permissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
    /**
     * Filter, which permission to fetch.
     */
    where: Prisma.permissionWhereUniqueInput;
};
/**
 * permission findFirst
 */
export type permissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
    /**
     * Filter, which permission to fetch.
     */
    where?: Prisma.permissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of permissions to fetch.
     */
    orderBy?: Prisma.permissionOrderByWithRelationInput | Prisma.permissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for permissions.
     */
    cursor?: Prisma.permissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of permissions.
     */
    distinct?: Prisma.PermissionScalarFieldEnum | Prisma.PermissionScalarFieldEnum[];
};
/**
 * permission findFirstOrThrow
 */
export type permissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
    /**
     * Filter, which permission to fetch.
     */
    where?: Prisma.permissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of permissions to fetch.
     */
    orderBy?: Prisma.permissionOrderByWithRelationInput | Prisma.permissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for permissions.
     */
    cursor?: Prisma.permissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of permissions.
     */
    distinct?: Prisma.PermissionScalarFieldEnum | Prisma.PermissionScalarFieldEnum[];
};
/**
 * permission findMany
 */
export type permissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
    /**
     * Filter, which permissions to fetch.
     */
    where?: Prisma.permissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of permissions to fetch.
     */
    orderBy?: Prisma.permissionOrderByWithRelationInput | Prisma.permissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing permissions.
     */
    cursor?: Prisma.permissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of permissions.
     */
    distinct?: Prisma.PermissionScalarFieldEnum | Prisma.PermissionScalarFieldEnum[];
};
/**
 * permission create
 */
export type permissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a permission.
     */
    data: Prisma.XOR<Prisma.permissionCreateInput, Prisma.permissionUncheckedCreateInput>;
};
/**
 * permission createMany
 */
export type permissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many permissions.
     */
    data: Prisma.permissionCreateManyInput | Prisma.permissionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * permission createManyAndReturn
 */
export type permissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * The data used to create many permissions.
     */
    data: Prisma.permissionCreateManyInput | Prisma.permissionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * permission update
 */
export type permissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a permission.
     */
    data: Prisma.XOR<Prisma.permissionUpdateInput, Prisma.permissionUncheckedUpdateInput>;
    /**
     * Choose, which permission to update.
     */
    where: Prisma.permissionWhereUniqueInput;
};
/**
 * permission updateMany
 */
export type permissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update permissions.
     */
    data: Prisma.XOR<Prisma.permissionUpdateManyMutationInput, Prisma.permissionUncheckedUpdateManyInput>;
    /**
     * Filter which permissions to update
     */
    where?: Prisma.permissionWhereInput;
    /**
     * Limit how many permissions to update.
     */
    limit?: number;
};
/**
 * permission updateManyAndReturn
 */
export type permissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * The data used to update permissions.
     */
    data: Prisma.XOR<Prisma.permissionUpdateManyMutationInput, Prisma.permissionUncheckedUpdateManyInput>;
    /**
     * Filter which permissions to update
     */
    where?: Prisma.permissionWhereInput;
    /**
     * Limit how many permissions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * permission upsert
 */
export type permissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the permission to update in case it exists.
     */
    where: Prisma.permissionWhereUniqueInput;
    /**
     * In case the permission found by the `where` argument doesn't exist, create a new permission with this data.
     */
    create: Prisma.XOR<Prisma.permissionCreateInput, Prisma.permissionUncheckedCreateInput>;
    /**
     * In case the permission was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.permissionUpdateInput, Prisma.permissionUncheckedUpdateInput>;
};
/**
 * permission delete
 */
export type permissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
    /**
     * Filter which permission to delete.
     */
    where: Prisma.permissionWhereUniqueInput;
};
/**
 * permission deleteMany
 */
export type permissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to delete
     */
    where?: Prisma.permissionWhereInput;
    /**
     * Limit how many permissions to delete.
     */
    limit?: number;
};
/**
 * permission without action
 */
export type permissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: Prisma.permissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the permission
     */
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.permissionInclude<ExtArgs> | null;
};

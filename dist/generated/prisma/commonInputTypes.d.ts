import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumImageEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageEntityType | Prisma.EnumImageEntityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ImageEntityType[] | Prisma.ListEnumImageEntityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ImageEntityType[] | Prisma.ListEnumImageEntityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumImageEntityTypeFilter<$PrismaModel> | $Enums.ImageEntityType;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumImageEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageEntityType | Prisma.EnumImageEntityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ImageEntityType[] | Prisma.ListEnumImageEntityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ImageEntityType[] | Prisma.ListEnumImageEntityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumImageEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageEntityType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumImageEntityTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumImageEntityTypeFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | Prisma.EnumProductStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductStatus[] | Prisma.ListEnumProductStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductStatus[] | Prisma.ListEnumProductStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | Prisma.EnumProductStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductStatus[] | Prisma.ListEnumProductStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductStatus[] | Prisma.ListEnumProductStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProductStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProductStatusFilter<$PrismaModel>;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type EnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | Prisma.EnumDiscountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType;
};
export type EnumPromotionTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionTarget | Prisma.EnumPromotionTargetFieldRefInput<$PrismaModel>;
    in?: $Enums.PromotionTarget[] | Prisma.ListEnumPromotionTargetFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PromotionTarget[] | Prisma.ListEnumPromotionTargetFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPromotionTargetFilter<$PrismaModel> | $Enums.PromotionTarget;
};
export type EnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | Prisma.EnumDiscountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel>;
};
export type EnumPromotionTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionTarget | Prisma.EnumPromotionTargetFieldRefInput<$PrismaModel>;
    in?: $Enums.PromotionTarget[] | Prisma.ListEnumPromotionTargetFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PromotionTarget[] | Prisma.ListEnumPromotionTargetFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPromotionTargetWithAggregatesFilter<$PrismaModel> | $Enums.PromotionTarget;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPromotionTargetFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPromotionTargetFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumCartStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | Prisma.EnumCartStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CartStatus[] | Prisma.ListEnumCartStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CartStatus[] | Prisma.ListEnumCartStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCartStatusFilter<$PrismaModel> | $Enums.CartStatus;
};
export type EnumCartStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | Prisma.EnumCartStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CartStatus[] | Prisma.ListEnumCartStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CartStatus[] | Prisma.ListEnumCartStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCartStatusWithAggregatesFilter<$PrismaModel> | $Enums.CartStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCartStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCartStatusFilter<$PrismaModel>;
};
export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
};
export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
};
export type EnumPaymentMethodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodType | Prisma.EnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel> | $Enums.PaymentMethodType;
};
export type EnumPaymentMethodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodType | Prisma.EnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethodType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel>;
};
export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
};
export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
};
export type EnumDeliveryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryType | Prisma.EnumDeliveryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryType[] | Prisma.ListEnumDeliveryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryType[] | Prisma.ListEnumDeliveryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryTypeFilter<$PrismaModel> | $Enums.DeliveryType;
};
export type EnumDeliveryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryType | Prisma.EnumDeliveryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryType[] | Prisma.ListEnumDeliveryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryType[] | Prisma.ListEnumDeliveryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryTypeFilter<$PrismaModel>;
};
export type EnumPaymentReminderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentReminderType | Prisma.EnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentReminderType[] | Prisma.ListEnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentReminderType[] | Prisma.ListEnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentReminderTypeFilter<$PrismaModel> | $Enums.PaymentReminderType;
};
export type EnumPaymentReminderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentReminderType | Prisma.EnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentReminderType[] | Prisma.ListEnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentReminderType[] | Prisma.ListEnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentReminderTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentReminderType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentReminderTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentReminderTypeFilter<$PrismaModel>;
};
export type EnumClaimTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimType | Prisma.EnumClaimTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimType[] | Prisma.ListEnumClaimTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimType[] | Prisma.ListEnumClaimTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimTypeFilter<$PrismaModel> | $Enums.ClaimType;
};
export type EnumClaimReasonCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimReasonCategory | Prisma.EnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimReasonCategory[] | Prisma.ListEnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimReasonCategory[] | Prisma.ListEnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimReasonCategoryFilter<$PrismaModel> | $Enums.ClaimReasonCategory;
};
export type EnumClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | Prisma.EnumClaimStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimStatus[] | Prisma.ListEnumClaimStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimStatus[] | Prisma.ListEnumClaimStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimStatusFilter<$PrismaModel> | $Enums.ClaimStatus;
};
export type EnumReturnedProductConditionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReturnedProductCondition | Prisma.EnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ReturnedProductCondition[] | Prisma.ListEnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ReturnedProductCondition[] | Prisma.ListEnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReturnedProductConditionNullableFilter<$PrismaModel> | $Enums.ReturnedProductCondition | null;
};
export type EnumRefundMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundMethod | Prisma.EnumRefundMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRefundMethodNullableFilter<$PrismaModel> | $Enums.RefundMethod | null;
};
export type EnumClaimTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimType | Prisma.EnumClaimTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimType[] | Prisma.ListEnumClaimTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimType[] | Prisma.ListEnumClaimTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClaimType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClaimTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClaimTypeFilter<$PrismaModel>;
};
export type EnumClaimReasonCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimReasonCategory | Prisma.EnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimReasonCategory[] | Prisma.ListEnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimReasonCategory[] | Prisma.ListEnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimReasonCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ClaimReasonCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClaimReasonCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClaimReasonCategoryFilter<$PrismaModel>;
};
export type EnumClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | Prisma.EnumClaimStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimStatus[] | Prisma.ListEnumClaimStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimStatus[] | Prisma.ListEnumClaimStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClaimStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClaimStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClaimStatusFilter<$PrismaModel>;
};
export type EnumReturnedProductConditionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReturnedProductCondition | Prisma.EnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ReturnedProductCondition[] | Prisma.ListEnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ReturnedProductCondition[] | Prisma.ListEnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReturnedProductConditionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReturnedProductCondition | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReturnedProductConditionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReturnedProductConditionNullableFilter<$PrismaModel>;
};
export type EnumRefundMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundMethod | Prisma.EnumRefundMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRefundMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.RefundMethod | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRefundMethodNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRefundMethodNullableFilter<$PrismaModel>;
};
export type EnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | Prisma.EnumRefundStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RefundStatus[] | Prisma.ListEnumRefundStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RefundStatus[] | Prisma.ListEnumRefundStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus;
};
export type EnumRefundMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundMethod | Prisma.EnumRefundMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRefundMethodFilter<$PrismaModel> | $Enums.RefundMethod;
};
export type EnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | Prisma.EnumRefundStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RefundStatus[] | Prisma.ListEnumRefundStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RefundStatus[] | Prisma.ListEnumRefundStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRefundStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRefundStatusFilter<$PrismaModel>;
};
export type EnumRefundMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundMethod | Prisma.EnumRefundMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRefundMethodWithAggregatesFilter<$PrismaModel> | $Enums.RefundMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRefundMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRefundMethodFilter<$PrismaModel>;
};
export type EnumDeliveryUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryUnit | Prisma.EnumDeliveryUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryUnit[] | Prisma.ListEnumDeliveryUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryUnit[] | Prisma.ListEnumDeliveryUnitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryUnitFilter<$PrismaModel> | $Enums.DeliveryUnit;
};
export type EnumDeliveryUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryUnit | Prisma.EnumDeliveryUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryUnit[] | Prisma.ListEnumDeliveryUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryUnit[] | Prisma.ListEnumDeliveryUnitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryUnitWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryUnit;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryUnitFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryUnitFilter<$PrismaModel>;
};
export type EnumAdminPermissionModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminPermissionModule | Prisma.EnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    in?: $Enums.AdminPermissionModule[] | Prisma.ListEnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdminPermissionModule[] | Prisma.ListEnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdminPermissionModuleFilter<$PrismaModel> | $Enums.AdminPermissionModule;
};
export type EnumAdminPermissionModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminPermissionModule | Prisma.EnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    in?: $Enums.AdminPermissionModule[] | Prisma.ListEnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdminPermissionModule[] | Prisma.ListEnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdminPermissionModuleWithAggregatesFilter<$PrismaModel> | $Enums.AdminPermissionModule;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAdminPermissionModuleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAdminPermissionModuleFilter<$PrismaModel>;
};
export type EnumPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | Prisma.EnumPageStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PageStatus[] | Prisma.ListEnumPageStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PageStatus[] | Prisma.ListEnumPageStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPageStatusFilter<$PrismaModel> | $Enums.PageStatus;
};
export type EnumPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | Prisma.EnumPageStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PageStatus[] | Prisma.ListEnumPageStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PageStatus[] | Prisma.ListEnumPageStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PageStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPageStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPageStatusFilter<$PrismaModel>;
};
export type EnumComplaintTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintType | Prisma.EnumComplaintTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplaintType[] | Prisma.ListEnumComplaintTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplaintType[] | Prisma.ListEnumComplaintTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplaintTypeFilter<$PrismaModel> | $Enums.ComplaintType;
};
export type EnumComplaintStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintStatus | Prisma.EnumComplaintStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplaintStatus[] | Prisma.ListEnumComplaintStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplaintStatus[] | Prisma.ListEnumComplaintStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplaintStatusFilter<$PrismaModel> | $Enums.ComplaintStatus;
};
export type EnumComplaintTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintType | Prisma.EnumComplaintTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplaintType[] | Prisma.ListEnumComplaintTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplaintType[] | Prisma.ListEnumComplaintTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplaintTypeWithAggregatesFilter<$PrismaModel> | $Enums.ComplaintType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumComplaintTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumComplaintTypeFilter<$PrismaModel>;
};
export type EnumComplaintStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintStatus | Prisma.EnumComplaintStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplaintStatus[] | Prisma.ListEnumComplaintStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplaintStatus[] | Prisma.ListEnumComplaintStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplaintStatusWithAggregatesFilter<$PrismaModel> | $Enums.ComplaintStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumComplaintStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumComplaintStatusFilter<$PrismaModel>;
};
export type EnumLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | Prisma.EnumLinkTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LinkType[] | Prisma.ListEnumLinkTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LinkType[] | Prisma.ListEnumLinkTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLinkTypeFilter<$PrismaModel> | $Enums.LinkType;
};
export type EnumLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | Prisma.EnumLinkTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LinkType[] | Prisma.ListEnumLinkTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LinkType[] | Prisma.ListEnumLinkTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.LinkType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLinkTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLinkTypeFilter<$PrismaModel>;
};
export type EnumOrderStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumOrderStatusNullableFilter<$PrismaModel> | $Enums.OrderStatus | null;
};
export type EnumOrderStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumOrderStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusNullableFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumImageEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageEntityType | Prisma.EnumImageEntityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ImageEntityType[] | Prisma.ListEnumImageEntityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ImageEntityType[] | Prisma.ListEnumImageEntityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumImageEntityTypeFilter<$PrismaModel> | $Enums.ImageEntityType;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedEnumImageEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageEntityType | Prisma.EnumImageEntityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ImageEntityType[] | Prisma.ListEnumImageEntityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ImageEntityType[] | Prisma.ListEnumImageEntityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumImageEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageEntityType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumImageEntityTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumImageEntityTypeFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | Prisma.EnumProductStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductStatus[] | Prisma.ListEnumProductStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductStatus[] | Prisma.ListEnumProductStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | Prisma.EnumProductStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductStatus[] | Prisma.ListEnumProductStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductStatus[] | Prisma.ListEnumProductStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProductStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProductStatusFilter<$PrismaModel>;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedEnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | Prisma.EnumDiscountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType;
};
export type NestedEnumPromotionTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionTarget | Prisma.EnumPromotionTargetFieldRefInput<$PrismaModel>;
    in?: $Enums.PromotionTarget[] | Prisma.ListEnumPromotionTargetFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PromotionTarget[] | Prisma.ListEnumPromotionTargetFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPromotionTargetFilter<$PrismaModel> | $Enums.PromotionTarget;
};
export type NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | Prisma.EnumDiscountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel>;
};
export type NestedEnumPromotionTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionTarget | Prisma.EnumPromotionTargetFieldRefInput<$PrismaModel>;
    in?: $Enums.PromotionTarget[] | Prisma.ListEnumPromotionTargetFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PromotionTarget[] | Prisma.ListEnumPromotionTargetFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPromotionTargetWithAggregatesFilter<$PrismaModel> | $Enums.PromotionTarget;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPromotionTargetFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPromotionTargetFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumCartStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | Prisma.EnumCartStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CartStatus[] | Prisma.ListEnumCartStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CartStatus[] | Prisma.ListEnumCartStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCartStatusFilter<$PrismaModel> | $Enums.CartStatus;
};
export type NestedEnumCartStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | Prisma.EnumCartStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CartStatus[] | Prisma.ListEnumCartStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CartStatus[] | Prisma.ListEnumCartStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCartStatusWithAggregatesFilter<$PrismaModel> | $Enums.CartStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCartStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCartStatusFilter<$PrismaModel>;
};
export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
};
export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
};
export type NestedEnumPaymentMethodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodType | Prisma.EnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel> | $Enums.PaymentMethodType;
};
export type NestedEnumPaymentMethodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodType | Prisma.EnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethodType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel>;
};
export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
};
export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
};
export type NestedEnumDeliveryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryType | Prisma.EnumDeliveryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryType[] | Prisma.ListEnumDeliveryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryType[] | Prisma.ListEnumDeliveryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryTypeFilter<$PrismaModel> | $Enums.DeliveryType;
};
export type NestedEnumDeliveryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryType | Prisma.EnumDeliveryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryType[] | Prisma.ListEnumDeliveryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryType[] | Prisma.ListEnumDeliveryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryTypeFilter<$PrismaModel>;
};
export type NestedEnumPaymentReminderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentReminderType | Prisma.EnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentReminderType[] | Prisma.ListEnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentReminderType[] | Prisma.ListEnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentReminderTypeFilter<$PrismaModel> | $Enums.PaymentReminderType;
};
export type NestedEnumPaymentReminderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentReminderType | Prisma.EnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentReminderType[] | Prisma.ListEnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentReminderType[] | Prisma.ListEnumPaymentReminderTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentReminderTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentReminderType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentReminderTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentReminderTypeFilter<$PrismaModel>;
};
export type NestedEnumClaimTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimType | Prisma.EnumClaimTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimType[] | Prisma.ListEnumClaimTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimType[] | Prisma.ListEnumClaimTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimTypeFilter<$PrismaModel> | $Enums.ClaimType;
};
export type NestedEnumClaimReasonCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimReasonCategory | Prisma.EnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimReasonCategory[] | Prisma.ListEnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimReasonCategory[] | Prisma.ListEnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimReasonCategoryFilter<$PrismaModel> | $Enums.ClaimReasonCategory;
};
export type NestedEnumClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | Prisma.EnumClaimStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimStatus[] | Prisma.ListEnumClaimStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimStatus[] | Prisma.ListEnumClaimStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimStatusFilter<$PrismaModel> | $Enums.ClaimStatus;
};
export type NestedEnumReturnedProductConditionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReturnedProductCondition | Prisma.EnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ReturnedProductCondition[] | Prisma.ListEnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ReturnedProductCondition[] | Prisma.ListEnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReturnedProductConditionNullableFilter<$PrismaModel> | $Enums.ReturnedProductCondition | null;
};
export type NestedEnumRefundMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundMethod | Prisma.EnumRefundMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRefundMethodNullableFilter<$PrismaModel> | $Enums.RefundMethod | null;
};
export type NestedEnumClaimTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimType | Prisma.EnumClaimTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimType[] | Prisma.ListEnumClaimTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimType[] | Prisma.ListEnumClaimTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClaimType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClaimTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClaimTypeFilter<$PrismaModel>;
};
export type NestedEnumClaimReasonCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimReasonCategory | Prisma.EnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimReasonCategory[] | Prisma.ListEnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimReasonCategory[] | Prisma.ListEnumClaimReasonCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimReasonCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ClaimReasonCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClaimReasonCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClaimReasonCategoryFilter<$PrismaModel>;
};
export type NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | Prisma.EnumClaimStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClaimStatus[] | Prisma.ListEnumClaimStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClaimStatus[] | Prisma.ListEnumClaimStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClaimStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClaimStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClaimStatusFilter<$PrismaModel>;
};
export type NestedEnumReturnedProductConditionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReturnedProductCondition | Prisma.EnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ReturnedProductCondition[] | Prisma.ListEnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ReturnedProductCondition[] | Prisma.ListEnumReturnedProductConditionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReturnedProductConditionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReturnedProductCondition | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReturnedProductConditionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReturnedProductConditionNullableFilter<$PrismaModel>;
};
export type NestedEnumRefundMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundMethod | Prisma.EnumRefundMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRefundMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.RefundMethod | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRefundMethodNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRefundMethodNullableFilter<$PrismaModel>;
};
export type NestedEnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | Prisma.EnumRefundStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RefundStatus[] | Prisma.ListEnumRefundStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RefundStatus[] | Prisma.ListEnumRefundStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus;
};
export type NestedEnumRefundMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundMethod | Prisma.EnumRefundMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRefundMethodFilter<$PrismaModel> | $Enums.RefundMethod;
};
export type NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | Prisma.EnumRefundStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RefundStatus[] | Prisma.ListEnumRefundStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RefundStatus[] | Prisma.ListEnumRefundStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRefundStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRefundStatusFilter<$PrismaModel>;
};
export type NestedEnumRefundMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundMethod | Prisma.EnumRefundMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RefundMethod[] | Prisma.ListEnumRefundMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRefundMethodWithAggregatesFilter<$PrismaModel> | $Enums.RefundMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRefundMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRefundMethodFilter<$PrismaModel>;
};
export type NestedEnumDeliveryUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryUnit | Prisma.EnumDeliveryUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryUnit[] | Prisma.ListEnumDeliveryUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryUnit[] | Prisma.ListEnumDeliveryUnitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryUnitFilter<$PrismaModel> | $Enums.DeliveryUnit;
};
export type NestedEnumDeliveryUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryUnit | Prisma.EnumDeliveryUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryUnit[] | Prisma.ListEnumDeliveryUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryUnit[] | Prisma.ListEnumDeliveryUnitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryUnitWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryUnit;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryUnitFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryUnitFilter<$PrismaModel>;
};
export type NestedEnumAdminPermissionModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminPermissionModule | Prisma.EnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    in?: $Enums.AdminPermissionModule[] | Prisma.ListEnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdminPermissionModule[] | Prisma.ListEnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdminPermissionModuleFilter<$PrismaModel> | $Enums.AdminPermissionModule;
};
export type NestedEnumAdminPermissionModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminPermissionModule | Prisma.EnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    in?: $Enums.AdminPermissionModule[] | Prisma.ListEnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdminPermissionModule[] | Prisma.ListEnumAdminPermissionModuleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdminPermissionModuleWithAggregatesFilter<$PrismaModel> | $Enums.AdminPermissionModule;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAdminPermissionModuleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAdminPermissionModuleFilter<$PrismaModel>;
};
export type NestedEnumPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | Prisma.EnumPageStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PageStatus[] | Prisma.ListEnumPageStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PageStatus[] | Prisma.ListEnumPageStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPageStatusFilter<$PrismaModel> | $Enums.PageStatus;
};
export type NestedEnumPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | Prisma.EnumPageStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PageStatus[] | Prisma.ListEnumPageStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PageStatus[] | Prisma.ListEnumPageStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PageStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPageStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPageStatusFilter<$PrismaModel>;
};
export type NestedEnumComplaintTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintType | Prisma.EnumComplaintTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplaintType[] | Prisma.ListEnumComplaintTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplaintType[] | Prisma.ListEnumComplaintTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplaintTypeFilter<$PrismaModel> | $Enums.ComplaintType;
};
export type NestedEnumComplaintStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintStatus | Prisma.EnumComplaintStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplaintStatus[] | Prisma.ListEnumComplaintStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplaintStatus[] | Prisma.ListEnumComplaintStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplaintStatusFilter<$PrismaModel> | $Enums.ComplaintStatus;
};
export type NestedEnumComplaintTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintType | Prisma.EnumComplaintTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplaintType[] | Prisma.ListEnumComplaintTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplaintType[] | Prisma.ListEnumComplaintTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplaintTypeWithAggregatesFilter<$PrismaModel> | $Enums.ComplaintType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumComplaintTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumComplaintTypeFilter<$PrismaModel>;
};
export type NestedEnumComplaintStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintStatus | Prisma.EnumComplaintStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplaintStatus[] | Prisma.ListEnumComplaintStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplaintStatus[] | Prisma.ListEnumComplaintStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplaintStatusWithAggregatesFilter<$PrismaModel> | $Enums.ComplaintStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumComplaintStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumComplaintStatusFilter<$PrismaModel>;
};
export type NestedEnumLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | Prisma.EnumLinkTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LinkType[] | Prisma.ListEnumLinkTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LinkType[] | Prisma.ListEnumLinkTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLinkTypeFilter<$PrismaModel> | $Enums.LinkType;
};
export type NestedEnumLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | Prisma.EnumLinkTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LinkType[] | Prisma.ListEnumLinkTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LinkType[] | Prisma.ListEnumLinkTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.LinkType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLinkTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLinkTypeFilter<$PrismaModel>;
};
export type NestedEnumOrderStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumOrderStatusNullableFilter<$PrismaModel> | $Enums.OrderStatus | null;
};
export type NestedEnumOrderStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumOrderStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusNullableFilter<$PrismaModel>;
};

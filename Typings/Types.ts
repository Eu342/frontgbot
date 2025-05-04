declare type Optional<T> = T | undefined;
declare type Nullable<T> = T | null;
declare type Primitive = boolean | bigint | null | number | string | symbol | undefined;

declare type DeepPrimitiveKey<T extends object> =
    { [ K in keyof Required<T> & (string)]: Required<T>[K] extends object
        ? Required<T>[K] extends object[]
            ? K | `${K}.${number}` | `${K}.${number}.${DeepPrimitiveKey<Required<T>[K][number]>}`
            : Required<T>[K] extends Primitive[]
                ? K | `${K}.${number}`
                : K | `${K}.${DeepPrimitiveKey<Required<T[K]>>}`
        : K
    }[keyof Required<T> & string]
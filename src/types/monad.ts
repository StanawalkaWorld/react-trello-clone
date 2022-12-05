export type Maybe<T> = T | undefined | null;

export const maybe_do = <T, RT>(
    optional: Maybe<T>,
    callback: (val: T) => RT
) => {
    if (optional === null || optional === undefined) {
        return null;
    }

    return callback(optional as T);
};

export const maybe_or = <T, RT>(
    optional: Maybe<T>,
    callback: (val: T) => RT,
    or_val: RT
) => {
    if (optional === null || optional === undefined) {
        return or_val;
    }

    return callback(optional as T);
};

export const value_or = <T>(optional: Maybe<T>, or_val: T) => {
    if (optional === null || optional === undefined) {
        return or_val;
    }

    return optional as T;
};

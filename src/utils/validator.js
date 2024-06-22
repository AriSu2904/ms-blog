export const isEqual = (val1, val2) => {
    return val1 === val2;
}

export const isNull = (val) => {
    return val === null;
}

export const isUndefined = (val) => {
    return val === undefined;
}


export const isMissing = (val) => {
    return isNull(val) || isUndefined(val);
}

export const isAuthenticate = (request) => {
    return request.headers.authorization &&
        request.headers.authorization.startsWith('Bearer ');
}
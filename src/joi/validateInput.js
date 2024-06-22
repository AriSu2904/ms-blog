import {GraphQLError} from "graphql/error/index.js";
import ERROR from '../constant/index.js'

const {
    ERROR: {
        CODE
    }
} = ERROR

export const validateInput = (schema, request) => {
    const result = schema.validate(request, {
        abortEarly: false,
        allowUnknown: false
    });

    if(result.error) {
        throw new GraphQLError(result.error.message, {
            extensions: {
                code: CODE["400"]
            }
        });
    }else {
        return result.value;
    }
}
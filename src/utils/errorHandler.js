import {GraphQLError} from "graphql/error/index.js";
import ERROR from '../constant/index.js'

const {
    ERROR: {
        MESSAGE,
        CODE
    }
} = ERROR

export const BadRequestError = (message = MESSAGE.BAD_REQUEST) => {
    throw new GraphQLError(message, {
        extensions: {
            code: CODE["400"]
        }
    });
}

export const ForbiddenError = (message = MESSAGE.FORBIDDEN) => {
    throw new GraphQLError(message, {
        extensions: {
            code: CODE["403"]
        }
    });
}

export const NotFoundError = (message = MESSAGE.NOT_FOUND) => {
    throw new GraphQLError(message, {
        extensions: {
            code: CODE["404"]
        }
    })
}
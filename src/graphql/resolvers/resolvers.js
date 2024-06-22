import {isAuthenticate, isMissing} from "../../utils/validator.js";
import {BadRequestError, ForbiddenError} from "../../utils/errorHandler.js";
import {decodeToken} from "../../utils/jwtUtil.js";

export default {
    Query: {
        getPost: async (_, { id }, { req, postService }) => {
            return postService.getPost(id);
        },
        listPost: async (_, args, { req, postService }) => {
            return postService.getAllPost();
        }
    },
    Mutation: {
        createPost: async (_, { input }, { req, postService }) => {
            if(isAuthenticate(req)) {
                const { email } = await decodeToken(req.headers.authorization);

                return postService.publishPost(email, input);
            }

            throw ForbiddenError();
        },
        updatePost: async (_, { input }, { req, postService }) => {
            if(isMissing(input.id) && isMissing(input.title)) throw BadRequestError();

            if(isAuthenticate(req) && input.id) {
                const { email } = await decodeToken(req.headers.authorization);

                return postService.updatePost(email,input);
            }

            throw ForbiddenError();
        },
        deletePost: async (_, { id }, { req, postService }) => {
            if(isMissing(id)) throw BadRequestError();

            if(isAuthenticate(req) && id) {
                return postService.removePost(id);
            }

            throw ForbiddenError();
        }
    }
}
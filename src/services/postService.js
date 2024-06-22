import {validateInput} from "../joi/validateInput.js";
import {inputPostSchema} from "../joi/schema/InputPostSchema.js";
import {mapPost} from "./mapper/mapPost.js";
import {NotFoundError} from "../utils/errorHandler.js";
import {mapPostPaginated} from "./mapper/mapPostPaginated.js";

export class PostService {
    constructor({ postRepository, profileService }) {
        this.repository = postRepository;
        this.profileService = profileService;
    }

    async _getProfile(email){
        return this.profileService.getProfile(email);
    }

    async getPost(id) {
        const post = await this.repository.findOne(id);
        const profile = await this._getProfile(post.author);

        if(post && profile) return mapPost(profile, post);

        throw NotFoundError();
    }

    async getAllPost() {
        const posts = await this.repository.find();

        return mapPostPaginated(posts);
    }

    async publishPost(email, input) {
        const validResult = validateInput(inputPostSchema, input);

        const profile = await this._getProfile(email);
        const author = profile.email;

        const post = {
            author,
            title: validResult.title,
            content: validResult.content,
            tags: validResult.tags
        }

        const savedPost = await this.repository.save(post);

        return mapPost(profile, savedPost);
    }

    async updatePost(email, input){
        const validResult = validateInput(inputPostSchema, input);

        const profile = await this._getProfile(email);

        const post = {
            title: validResult.title,
            content: validResult.content,
            tags: validResult.tags
        }

        const updatedPost = await this.repository.update(input.id, post);

        if(updatedPost) return mapPost(profile, updatedPost);

        return NotFoundError();
    }

    async removePost(id) {
        const result = await this.repository.delete(id);
        if(result) {
            return true
        }

        throw NotFoundError();
    }
}
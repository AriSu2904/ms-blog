import {asClass, asValue, createContainer, InjectionMode} from "awilix";
import {Profile} from "../database/models/profile.js";
import {Post} from "../database/models/post.js";
import {ProfileRepository} from "../repositories/profileRepository.js";
import {PostRepository} from "../repositories/postRepository.js";
import {ProfileService} from "../services/profileService.js";
import { PostService } from "../services/postService.js";

export const container = createContainer({
    injectionMode: InjectionMode.PROXY,
    strict: true,
});

container.register({
    profileCollection: asValue(Profile),
    postCollection: asValue(Post),
    profileRepository: asClass(ProfileRepository),
    postRepository: asClass(PostRepository),
    profileService: asClass(ProfileService),
    postService: asClass(PostService)
})
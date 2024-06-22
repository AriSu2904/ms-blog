import {NotFoundError} from "../utils/errorHandler.js";

export class ProfileService {
    constructor({ profileRepository }) {
        this.repository = profileRepository;
    }

    async getProfile(email){
        const profile = await this.repository.findByEmail(email);

        if(profile) {
            return profile;
        }

        throw NotFoundError()
    }
}
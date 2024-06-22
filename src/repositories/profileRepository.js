export class ProfileRepository {
    constructor({ profileCollection }) {
        this.collection = profileCollection;
    }

    async findByEmail(email) {
        return this.collection.findOne({ email });
    }
}
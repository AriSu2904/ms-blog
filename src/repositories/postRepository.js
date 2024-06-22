export class PostRepository {
    constructor({ postCollection }) {
        this.collection = postCollection;
    }
    async findOne(id) {
        return this.collection.findOne({ _id: id });
    }

    async find() {
        return this.collection.find();
    }

    async save(input) {
       return this.collection.create(input);
    }

    async update(id, input) {
        return this.collection.findOneAndUpdate({ _id: id }, input, {
            new: true,
            upsert: false
        })
    }

    async delete(id) {
        return this.collection.findOneAndDelete({_id: id});
    }
}
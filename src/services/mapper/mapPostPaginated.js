import moment from "moment/moment.js";

export const mapPostPaginated = (posts) => {
    return posts.map((post) => {
        const createdAt = moment(post.createdAt).toISOString();
        const modifiedAt = moment(post.modifiedAt).toISOString();

        return {
            id: post._id,
            title: post.title,
            content: post.content,
            tags: post.tags,
            author: {
              email: post.author
            },
            createdAt,
            modifiedAt
        }
    })
}
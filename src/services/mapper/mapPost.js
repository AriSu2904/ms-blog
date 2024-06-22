import moment from "moment";

export const mapPost = (profile, post) => {
    const createdAt = moment(post.createdAt).toISOString();
    const modifiedAt = moment(post.modifiedAt).toISOString();

    return {
        id: post._id,
        title: post.title,
        content: post.content,
        tags: post.tags,
        author: {
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email
        },
        createdAt,
        modifiedAt
    }
}
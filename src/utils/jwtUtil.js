import jwt from "jsonwebtoken";

export const decodeToken = async (token) => {
    const clearToken = token.split("Bearer ")[1];

    return jwt.decode(clearToken);
}
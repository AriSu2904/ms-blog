import "dotenv/config.js";

const config = {
    DB_CONFIG: {
        URI: process.env.DB_URI
    },
    SERVER_CONFIG: {
        PORT: process.env.SERVER_PORT
    }
}

export default config;
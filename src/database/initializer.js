import config from "../../config/index.js";

export const dbInitializer = async (mongoose) => {
    try {
        await mongoose.connect(config.DB_CONFIG.URI);
        console.log("Successfully connected to db");
    }catch (err) {
        throw err;
    }
}
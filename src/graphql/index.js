import { fileURLToPath } from "url";
import { dirname } from "path";
import {combineSchema} from "../../node_modules/ck-gql-utils/src/schema-merger.js";

const file = fileURLToPath(import.meta.url)
const directoryName = dirname(file);

export const typeDefsList = combineSchema(directoryName);

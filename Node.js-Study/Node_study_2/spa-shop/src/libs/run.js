import * as math from "./math.js"
import authenticationMiddleware from "../middleware/authentication/authentication.middleware.js";
import baseexception from "../exception/base.exception.js"

math.add(1,2);
authenticationMiddleware();
baseexception();
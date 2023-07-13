"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.APP_PORT || 5000;
console.log(PORT);
app.get('/', (req, res) => {
    res.send("welcome to Node js application...");
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
//# sourceMappingURL=app.js.map
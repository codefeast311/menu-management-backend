"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class MenuNotFoundException extends common_1.NotFoundException {
    constructor(id) {
        super(`Menu with id ${id} not found`);
    }
}
exports.MenuNotFoundException = MenuNotFoundException;
//# sourceMappingURL=menu-not-found.exception.js.map
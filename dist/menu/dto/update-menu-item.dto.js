"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuItemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const menu_item_dto_1 = require("./menu-item.dto");
class UpdateMenuItemDto extends (0, mapped_types_1.PartialType)(menu_item_dto_1.CreateMenuItemDto) {
}
exports.UpdateMenuItemDto = UpdateMenuItemDto;
//# sourceMappingURL=update-menu-item.dto.js.map
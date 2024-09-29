"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MenusController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusController = void 0;
const common_1 = require("@nestjs/common");
const menu_service_1 = require("./menu.service");
const menu_item_dto_1 = require("./dto/menu-item.dto");
const create_menu_dto_1 = require("./dto/create-menu.dto");
const update_menu_item_dto_1 = require("./dto/update-menu-item.dto");
let MenusController = MenusController_1 = class MenusController {
    constructor(menusService) {
        this.menusService = menusService;
        this.logger = new common_1.Logger(MenusController_1.name);
    }
    async getAllMenus() {
        this.logger.log('Received request to fetch all menus');
        try {
            const menus = await this.menusService.getAllMenus();
            this.logger.log(`Successfully fetched ${menus.length} menus`);
            return menus;
        }
        catch (error) {
            this.logger.error(`Failed to fetch menus: ${error.message}`, error.stack);
            throw error;
        }
    }
    async getMenu(id) {
        return this.menusService.findOne(id);
    }
    async create(createMenuItemDto) {
        try {
            const result = await this.menusService.create(createMenuItemDto);
            return result;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: error.message,
                }, common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'There was a problem creating the menu item.',
                details: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createMenu(createMenuDto) {
        return this.menusService.createMenu(createMenuDto);
    }
    async update(id, updateMenuItemDto) {
        return this.menusService.update(id, updateMenuItemDto);
    }
    async remove(id) {
        try {
            await this.menusService.remove(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(`Menu item with ID "${id}" not found`);
            }
            throw error;
        }
    }
};
exports.MenusController = MenusController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "getAllMenus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "getMenu", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_item_dto_1.CreateMenuItemDto]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('menu'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "createMenu", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_menu_item_dto_1.UpdateMenuItemDto]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "remove", null);
exports.MenusController = MenusController = MenusController_1 = __decorate([
    (0, common_1.Controller)('menus'),
    __metadata("design:paramtypes", [menu_service_1.MenusService])
], MenusController);
//# sourceMappingURL=menu.controller.js.map
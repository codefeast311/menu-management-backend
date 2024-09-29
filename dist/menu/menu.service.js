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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MenusService = class MenusService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createMenu(createMenuDto) {
        return this.prisma.menu.create({
            data: createMenuDto,
        });
    }
    async create(createMenuItemDto) {
        const { name, parentId, menuId, depth, order } = createMenuItemDto;
        const menuExists = await this.prisma.menu.findUnique({
            where: { id: menuId },
        });
        if (!menuExists) {
            throw new common_1.NotFoundException(`Menu with ID "${menuId}" not found`);
        }
        const data = {
            name,
            menuId,
            depth,
            order,
        };
        if (parentId) {
            const parentExists = await this.prisma.menuItem.findUnique({
                where: { id: parentId },
            });
            if (!parentExists) {
                throw new common_1.NotFoundException(`Parent MenuItem with ID "${parentId}" not found`);
            }
            data.parentId = parentId;
        }
        return this.prisma.menuItem.create({ data });
    }
    async getAllMenus() {
        return this.prisma.menu.findMany({
            include: {
                items: {
                    include: {
                        children: {
                            include: {
                                children: {
                                    include: {
                                        children: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    async findOne(id) {
        const menu = await this.prisma.menu.findUnique({
            where: { id },
            include: {
                items: {
                    where: { parentId: null },
                    include: {
                        children: {
                            include: {
                                children: {
                                    include: {
                                        children: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        if (!menu) {
            throw new common_1.NotFoundException(`Menu with ID "${id}" not found`);
        }
        return menu;
    }
    async update(id, updateMenuItemDto) {
        const data = {};
        if (updateMenuItemDto.name !== undefined) {
            data.name = updateMenuItemDto.name;
        }
        if (updateMenuItemDto.depth !== undefined) {
            data.depth = updateMenuItemDto.depth;
        }
        if (updateMenuItemDto.order !== undefined) {
            data.order = updateMenuItemDto.order;
        }
        if (updateMenuItemDto.parentId !== undefined) {
            data.parentId = updateMenuItemDto.parentId;
        }
        return this.prisma.menuItem.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        try {
            return await this.prisma.menuItem.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Menu item with ID "${id}" not found`);
            }
            throw error;
        }
    }
};
exports.MenusService = MenusService;
exports.MenusService = MenusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MenusService);
//# sourceMappingURL=menu.service.js.map
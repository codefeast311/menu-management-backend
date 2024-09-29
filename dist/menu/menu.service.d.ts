import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMenuItemDto } from './dto/menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { CreateMenuDto } from './dto/create-menu.dto';
export declare class MenusService {
    private prisma;
    constructor(prisma: PrismaService);
    createMenu(createMenuDto: CreateMenuDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createMenuItemDto: CreateMenuItemDto): Promise<{
        name: string;
        menuId: string;
        parentId: string | null;
        depth: number;
        order: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllMenus(): Promise<({
        items: ({
            children: ({
                children: ({
                    children: {
                        name: string;
                        menuId: string;
                        parentId: string | null;
                        depth: number;
                        order: number;
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                    }[];
                } & {
                    name: string;
                    menuId: string;
                    parentId: string | null;
                    depth: number;
                    order: number;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                })[];
            } & {
                name: string;
                menuId: string;
                parentId: string | null;
                depth: number;
                order: number;
                id: string;
                createdAt: Date;
                updatedAt: Date;
            })[];
        } & {
            name: string;
            menuId: string;
            parentId: string | null;
            depth: number;
            order: number;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        })[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        items: ({
            children: ({
                children: ({
                    children: {
                        name: string;
                        menuId: string;
                        parentId: string | null;
                        depth: number;
                        order: number;
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                    }[];
                } & {
                    name: string;
                    menuId: string;
                    parentId: string | null;
                    depth: number;
                    order: number;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                })[];
            } & {
                name: string;
                menuId: string;
                parentId: string | null;
                depth: number;
                order: number;
                id: string;
                createdAt: Date;
                updatedAt: Date;
            })[];
        } & {
            name: string;
            menuId: string;
            parentId: string | null;
            depth: number;
            order: number;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        })[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateMenuItemDto: UpdateMenuItemDto): Promise<{
        name: string;
        menuId: string;
        parentId: string | null;
        depth: number;
        order: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        menuId: string;
        parentId: string | null;
        depth: number;
        order: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

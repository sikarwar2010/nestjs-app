import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';

export class ProductRepository {
    private products: Product[] = [];

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async findOne(id: string): Promise<Product> {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const product: Product = {
            id: createProductDto.id,
            name: createProductDto.name,
            description: createProductDto.description,
            price: createProductDto.price,
        };
        this.products.push(product);
        return product
    }

    async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        product.name = updateProductDto.name;
        product.description = updateProductDto.description;
        product.price = updateProductDto.price;
        return product;
    }

    async remove(id: string): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex === -1) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        this.products.splice(productIndex, 1);
    }

    async seedProducts(): Promise<void> {
        const products: Product[] = [
            {
                id: '1',
                name: 'Product 1',
                description: 'Description of product 1',
                price: 100,
            },
            {
                id: '2',
                name: 'Product 2',
                description: 'Description of product 2',
                price: 200,
            },
        ];
        this.products.push(...products);
    }
}

import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./product.entity";
import { ProductRepository } from "./product.repository";

export class ProductService {
    constructor(private readonly productRepository: ProductRepository) { }

    async findAll(): Promise<Product[]> {
        return this.productRepository.findAll();
    }

    async findOne(id: string): Promise<Product> {
        return this.productRepository.findOne(id);
    }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        return this.productRepository.create(createProductDto);
    }

    async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
        return this.productRepository.update(id, updateProductDto);
    }

    async remove(id: string): Promise<void> {
        return this.productRepository.remove(id);
    }
}

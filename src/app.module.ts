import { Module } from '@nestjs/common';
import { ProductModule } from './common/products/product.module';

@Module({
    imports: [ProductModule],
    controllers: [],
    providers: [],
})
export class AppModule { }

import { Get } from "@nestjs/common";
import { AppService } from "./app.service";

export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get("/hello")
    getHello2(): string {
        return this.appService.getHello();
    }
}

import { Get, JsonController } from "routing-controllers";

@JsonController('/')
export class TestController {

    @Get()
    async test() {
        return {
            msg: "Hello World !"
        }
    }

}
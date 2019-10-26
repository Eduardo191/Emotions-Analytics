import { delay } from "../Logic/Library";

export class Controller {

    private value: any;
    private endPoint: string;

    constructor(value: any, endPoint: string) {
        this.value = value;
        this.endPoint = endPoint;
    }

    public async postValue() {
        console.log("this.value ", this.value);
        this.value.Id = 5;
        await delay(300);
        return this.value;
    }
}
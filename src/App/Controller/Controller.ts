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
        await delay(1000);
        return true;
    }
}
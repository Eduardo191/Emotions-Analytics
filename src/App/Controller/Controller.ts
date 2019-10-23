import { delay } from "../Logic/Library";

export class Controller {

    private value: any;

    constructor(value: any) {
        this.value = value;
    }

    public async postValue() {
        console.log("this.value ", this.value);
        await delay(3000);
        return true;
    }
}
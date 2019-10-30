import { delay } from "../Logic/Library";
import Axios from "axios";

export class Controller {

    private value: any;
    private endPoint: string;

    constructor(value: any, endPoint: string) {
        this.value = value;
        this.endPoint = endPoint;
    }

    public async postValue() {

        console.log(this.value);
        await Axios.post(this.endPoint, this.value)
        .then((response) => {
            console.log(response);
        });
        
        return this.value;
    }
}
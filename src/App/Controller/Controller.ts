import Axios from "axios";

export class Controller {

    private value: any;
    private endPoint: string;

    constructor(value: any, endPoint: string) {
        this.value = value;
        this.endPoint = endPoint;
    }

    public async postValue() {

        console.log("this.value ", this.value);

        const retry = await Axios.post(this.endPoint, this.value)
        .then((response) => {
            console.log("response ", response);
            return response.data;
        })
        .catch((error) => {
            console.log("error ", error);
        });
        
        return retry;
    }
}
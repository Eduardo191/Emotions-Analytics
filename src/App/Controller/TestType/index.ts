import { Controller } from "../Controller";
import { TestTypeInterface } from "./interface";
import { formData } from "./formData";

export class TestType extends Controller {

    private static form = formData;    

    constructor(value: TestTypeInterface) {
        super(value);
    }

    public static async getForm() {    
        return TestType.form;
    }
}
import { Controller } from "../Controller";
import { TestInterface } from "./interface";
import { formData } from "./formData";

export class Test extends Controller {

    private static form = formData;

    constructor(value: TestInterface) {
        super(value);
    }

    public static getForm() {    
        return Test.form;
    }
}
import { Controller } from "../Controller";
import { TestTypeInterface } from "./interface";
import { formData } from "./formData";
import { delay } from "../../Logic/Library";

export class TestType extends Controller {

    private static form = formData;

    constructor(value: TestTypeInterface) {
        super(value, "testType");
    }


    public static async getOptions() {
        delay(1000);
        return [{ label: "TestType - 1", id: 1 }, { label: "TestType - 2", id: 2 }];
    }


    public static getForm() {
        return TestType.form;
    }
}
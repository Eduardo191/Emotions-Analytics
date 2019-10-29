import { Controller } from "../Controller";
import { TestInterface } from "./interface";
import { formData } from "./formData";
import { delay } from "../../Logic/Library";

export class Test extends Controller {

    private static form = formData;

    constructor(value: TestInterface) {
        super(value, "test");
    }

    public static getForm() {
        return Test.form;
    }

    public static async getTests() {
        delay(500);
        const tests: Array<TestInterface> = [
            {
                id: 1,
                test_type_id: 1,
                people_id: 2,
            },
            {
                id: 1,
                test_type_id: 1,
                people_id: 2,
            },
            {
                id: 1,
                test_type_id: 1,
                people_id: 2,
            },
        ];
        return tests;
    }
}
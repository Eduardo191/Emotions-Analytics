import { Controller } from "../Controller";
import { TestInterface } from "./interface";
import { formData } from "./formData";
import { delay } from "../../Logic/Library";

export class Test extends Controller {

    private static form = formData;

    constructor(value: TestInterface) {
        super(value, "/tests");
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

    public static async getTestById(id: number) {
        delay(500);
        const test: TestInterface = {
            id: 1,
            test_type_id: 1,
            people_id: 2,
        };
        return test;
    }

    public static async getTestByPeopleId(peopleId: number) {
        delay(500);
        const test: TestInterface = {
            id: 1,
            test_type_id: 1,
            people_id: 2,
        };
        return test;
    }

    public static async getTestByTestTypeId(testTypeId: number) {
        delay(500);
        const test: TestInterface = {
            id: 1,
            test_type_id: 1,
            people_id: 2,
        };
        return test;
    }
}
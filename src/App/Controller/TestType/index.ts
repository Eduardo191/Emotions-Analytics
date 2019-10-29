import { Controller } from "../Controller";
import { TestTypeInterface } from "./interface";
import { formData } from "./formData";
import { delay } from "../../Logic/Library";

export class TestType extends Controller {

    private static form = formData;

    constructor(value: TestTypeInterface) {
        super(value, "/test_type");
    }

    public static getForm() {
        return TestType.form;
    }

    public static async getOptions() {
        delay(1000);
        return [{ label: "TestType - 1", id: 1 }, { label: "TestType - 2", id: 2 }];
    }

    public static async getTestTypeById(id: number) {
        delay(1000);
        const testType: TestTypeInterface = {
            id: 1,
            title: "Sou um titulo",
            start_url: "https://www.youtube.com/watch?v=HVrmuR6xGc0",
            objective: "Sou um objetivo",
        }
        return testType;
    }
}
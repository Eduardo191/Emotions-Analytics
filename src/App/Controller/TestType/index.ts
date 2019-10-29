import { Controller } from "../Controller";
import { TestTypeInterface } from "./interface";
import { formData } from "./formData";
import { delay } from "../../Logic/Library";

export class TestType extends Controller {

    private static form = formData;

    constructor(value: TestTypeInterface) {
        super(value, "testType");
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
            title: "Sou um titulo 1",
            start_url: "https://www.youtube.com/watch?v=HVrmuR6xGc0",
            objective: "Sou um objetivo",
        }
        return testType;
    }

    public static async getTestTypes() {
        delay(1000);
        const testType: Array<TestTypeInterface> = [
            {
                id: 1,
                title: "Sou um titulo asdasdasdasdasda 1",
                start_url: "https://www.youtube.com/watch?v=HVrmuR6xGc0",
                objective: "Sou um objetivo asdasdasdasdasd",
            },
            {
                id: 2,
                title: "Sou um titulo 2",
                start_url: "https://www.youtube.com/watch?v=HVrmuR6xGc0",
                objective: "Sou um objetivo",
            },
            {
                id: 3,
                title: "Sou um titulo 3",
                start_url: "https://www.youtube.com/watch?v=HVrmuR6xGc0",
                objective: "Sou um objetivo",
            },
            {
                id: 4,
                title: "Sou um titulo 4",
                start_url: "https://www.youtube.com/watch?v=HVrmuR6xGc0",
                objective: "Sou um objetivo",
            },
            {
                id: 5,
                title: "Sou um titulo 5",
                start_url: "https://www.youtube.com/watch?v=HVrmuR6xGc0",
                objective: "Sou um objetivo",
            },
        ]
        return testType;
    }
}
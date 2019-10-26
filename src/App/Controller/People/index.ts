import { Controller } from "../Controller";
import { PeopleInterface } from "./interface";
import { formData } from "./formData";
import { delay } from "../../Logic/Library";

export class People extends Controller {

    private static form = formData;

    constructor(value: PeopleInterface) {
        super(value, "people");
    }


    public static async getOptions() {
        delay(1000);
        return [{ label: "People - 1", id: 1 }, { label: "People - 2", id: 2 }];
    }


    public static getForm() {
        return People.form;
    }
}
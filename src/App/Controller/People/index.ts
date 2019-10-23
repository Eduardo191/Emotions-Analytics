import { Controller } from "../Controller";
import { PeopleInterface } from "./interface";
import { formData } from "./formData";

export class People extends Controller {

    private static form = formData;

    constructor(value: PeopleInterface) {
        super(value);
    }

    public static getForm() {
        return People.form;
    }
}
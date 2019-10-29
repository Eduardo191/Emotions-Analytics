import { Controller } from "../Controller";
import { PeopleInterface } from "./interface";
import { formData } from "./formData";
import { delay } from "../../Logic/Library";

export class People extends Controller {

    private static form = formData;

    constructor(value: PeopleInterface) {
        super(value, "/people");
    }

    public static async getOptions() {
        delay(1000);
        return [{ label: "People - 1", id: 1 }, { label: "People - 2", id: 2 }];
    }

    public static getForm() {
        return People.form;
    }

    public static async getPeoples() {
        delay(500);
        const peoples: Array<PeopleInterface> = [
            {
                id: 1,
                name: "Nome 1",
                email: "Email@email.com",
                birthday: "03-06-1998",   
            },
            {
                id: 2,
                name: "Nome 2",
                email: "Email@email.com",
                birthday: "03-06-1998",   
            },
            {
                id: 3,
                name: "Nome 3",
                email: "Email@email.com",
                birthday: "03-06-1998",   
            },
            {
                id: 4,
                name: "Nome 4",
                email: "Email@email.com",
                birthday: "03-06-1998",   
            },
            {
                id: 5,
                name: "Nome 5",
                email: "Email@email.com",
                birthday: "03-06-1998",   
            },
            {
                id: 6,
                name: "Nome 6",
                email: "Email@email.com",
                birthday: "03-06-1998",   
            },
        ];
        return peoples;
    }
}
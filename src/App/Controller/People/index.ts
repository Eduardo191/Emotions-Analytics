import { Controller } from "../Controller";
import { PeopleInterface } from "./interface";
import { formData } from "./formData";
import { delay } from "../../Logic/Library";
import Axios from "axios";

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

    public static async editPeopleById(id: number, value: PeopleInterface) {
        delay(500);
        const people: PeopleInterface = await Axios.patch(`/people/${id}`, value).then((response) => {
            return response.data;
        });
        return people;
    }

    public static async getPeopleById(id: number) {
        delay(500);
        const people: PeopleInterface = await Axios.get(`/people/${id}`).then((response) => {
            return response.data;
        });
        return people;
    }

    public static async getPeoples() {
        delay(500);
        const peoples: Array<PeopleInterface> = await Axios.get('/people').then((response) => {
            return response.data;
        });
        return peoples;
    }
}
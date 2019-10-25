import { FieldInterface } from "../../View/Components/Form/Interfaces";
import { TestType, People } from "..";

export const formData: Array<FieldInterface> = [
    {
        typeId: 4, //Opções
        key: "TestTypeId",
        name: "Tipo do teste",
        required: true,
        getOptions: () => TestType.getOptions(),
    },
    {
        typeId: 4, //Opções
        key: "PeopleId",
        name: "Pessoa",
        required: true,
        getOptions: () => People.getOptions(),
    },
]
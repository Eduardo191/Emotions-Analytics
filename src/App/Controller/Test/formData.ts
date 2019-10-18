import { FieldInterface } from "../../View/Components/Form/Interfaces";

export const formData: Array<FieldInterface> = [
    {
        typeId: 4, //Opções
        key: "TestTypeId",
        name: "Tipo do teste",
        required: true,
        getOptions: () => ([{ label: "opção1", id: 1 }, { label: "opção2", id: 2 }]),
    },
    {
        typeId: 4, //Opções
        key: "PeopleId",
        name: "Pessoa",
        required: true,
        getOptions: () => ([{ label: "opção - 1", id: 1 }, { label: "opção - 2", id: 2 }]),
    },
]
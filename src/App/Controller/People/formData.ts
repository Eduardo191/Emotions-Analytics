import { FieldInterface } from "../../View/Components/Form/Interfaces";

export const formData: Array<FieldInterface> = [
    {
        typeId: 1, //Texto simples
        key: "person_name",
        name: "Nome",
        placeholder: "Nome do participante",
        required: true,
    },
    {
        typeId: 1, //Texto simples
        key: "person_email",
        name: "Email",
        placeholder: "Email do participante",
        required: true,
    },
    {
        typeId: 5, //Data
        key: "Person_birthday",
        name: "Aniversário",
        placeholder: "Data de aniversário do participante",
        required: true,
    },
    {
        typeId: 3, //Anexo
        key: "person_consent",
        name: "Consentimento",
        required: false,
    },
]
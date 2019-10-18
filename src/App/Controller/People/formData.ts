import { FieldInterface } from "../../View/Components/Form/Interfaces";

export const formData: Array<FieldInterface> = [
    {
        typeId: 1, //Texto simples
        key: "Name",
        name: "Nome",
        placeholder: "Nome do participante",
        required: true,
    },
    {
        typeId: 1, //Texto simples
        key: "Email",
        name: "Email",
        placeholder: "Email do participante",
        required: true,
    },
    {
        typeId: 5, //Data
        key: "Birthday",
        name: "Aniversário",
        placeholder: "Data de aniversário do participante",
        required: true,
    },
    {
        typeId: 3, //Anexo
        key: "Consent",
        name: "Consentimento",
        required: false,
    },
]
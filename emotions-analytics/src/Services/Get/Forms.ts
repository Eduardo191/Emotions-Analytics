import { FieldInterface } from "../../Components/Form/Interfaces";

export const FormTypeTest: Array<FieldInterface> = [
  {
    typeId: 1, //Texto simples
    key: "test_type_title",
    name: "Titulo",
    placeholder: "Titulo do teste",
    required: true,
  },
  {
    typeId: 1, //Texto simples
    key: "test_type_url",
    name: "URL",
    placeholder: "Link da pagina inicial do teste",
    required: true,
  },
  {
    typeId: 2, //Texto multilinha
    key: "test_type_objective",
    name: "Objetivo",
    placeholder: "Objetivo do teste",
    required: true,
  }
]


export const FormNewTest: Array<FieldInterface> = [
  {
    typeId: 4, //Opções
    key: "test_options",
    name: "Tipo do teste",
    required: true,
    getOptions: async () => await console.log("Get options here"),
  },
  {
    typeId: 4, //Opções
    key: "test_person",
    name: "Sujeito",
    required: true,
    getOptions: async () => await console.log("Get options here"),
  },
]


export const FormPerson: Array<FieldInterface> = [
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
    typeId: 3, //Anexo
    key: "person_consent",
    name: "Consentimento",
    required: false,
  }
]
import { FieldInterface } from "../../View/Components/Form/Interfaces";

export const formData: Array<FieldInterface> = [
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
  },
]
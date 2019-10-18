import { FieldInterface } from "../../View/Components/Form/Interfaces";

export const formData: Array<FieldInterface> = [
  {
    typeId: 1, //Texto simples
    key: "Title",
    name: "Titulo",
    placeholder: "Titulo do teste",
    required: true,
  },
  {
    typeId: 1, //Texto simples
    key: "StartUrl",
    name: "URL",
    placeholder: "Link da pagina inicial do teste",
    required: true,
  },
  {
    typeId: 2, //Texto multilinha
    key: "Objective",
    name: "Objetivo",
    placeholder: "Objetivo do teste",
    required: true,
  },
  {
    typeId: 6, //Booleano
    key: "HaveAbandonment",
    name: "O teste pode ser abandonado?",
    required: true,
    defaultValue: false,
  },
]
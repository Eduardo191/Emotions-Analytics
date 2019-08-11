import { FieldInterface } from "../../Components/Form/Interfaces";

export const FormTypeTest: Array<FieldInterface> = [
  {
    label: "Titulo",
    fieldTags: {
      name: "titulo",
      required: true,
      placeholder: "Titulo do teste",
      type: "text",
    }
  },
  {
    label: "URL",
    fieldTags: {
      name: "url",
      required: true,
      placeholder: "Link da pagina inicial do teste",
      type: "text",
    }
  },
  {
    label: "Objetivo",
    fieldTags: {
      name: "objetivo",
      required: true,
      placeholder: "Objetivo do participante",
      type: "text",
    },
    additionalTag: {
      rows: 5,
    }
  }
]


export const FormNewTest: Array<FieldInterface> = [
  {
    label: "Tipo do teste",
    fieldTags: {
      name: "tipo",
      required: true,
    },
    options: [
      //Pegar assincrono
    ]
  },
  {
    label: "Sujeito",
    fieldTags: {
      name: "pessoa",
      required: true,
    },
    options: [
      //Pegar assincrono
    ]
  },
]


export const FormPerson: Array<FieldInterface> = [
  {
    label: "Nome",
    fieldTags: {
      name: "nome",
      required: true,
      placeholder: "Nome do participante",
      type: "text",
    }
  },
  {
    label: "Email",
    fieldTags: {
      name: "email",
      required: true,
      placeholder: "Email do participante",
      type: "text",
    }
  },
  {
    label: "Consentimento",
    fieldTags: {
      name: "consentimento",
      required: false,
      type: "file",
    },
  }
]
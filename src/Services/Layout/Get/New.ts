import { FormTypeTest, FormPerson } from "./Forms";
import { PostPeople } from "../../API/Post/PostPeople";
import { PostTestType } from "../../API/Post/PostTestType";

export const DataSidebarNew = [
  {
    title: "Nova pessoa",
    iconName: "peoples",
    form: FormPerson,
    asyncPost: async (values: Array<{ key: string, value: any }>) => PostPeople(values),
  },
  {
    title: "Novo teste",
    iconName: "chemical",
    form: FormTypeTest,
    asyncPost: async (values: Array<{ key: string, value: any }>) => PostTestType(values),
  },
]
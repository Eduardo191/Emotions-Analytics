import { FormTypeTest, FormPerson } from "../Get/Forms";
import { PostPeople } from "../Post/PostPeople";
import { PostTestType } from "../Post/PostTestType";

export const DataSidebarNew = [
  {
    title: "Nova pessoa",
    iconName: "peoples",
    form: FormPerson,
    asyncPost: async (values: Array<{ fieldName: string, value: any }>) => PostPeople(values),
  },
  {
    title: "Novo teste",
    iconName: "chemical",
    form: FormTypeTest,
    asyncPost: async (values: Array<{ fieldName: string, value: any }>) => PostTestType(values),
  },
]
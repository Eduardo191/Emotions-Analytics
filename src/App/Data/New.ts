import { FormTypeTest, FormPerson } from "../Controller/Layout/Get/Forms";
import { People, Test, } from "../Controller/";
import { PeopleInterface } from "../Controller/People/interface";
import { TestInterface } from "../Controller/Test/interface";

export const DataSidebarNew = [
  {
    title: "Nova pessoa",
    iconName: "peoples",
    form: FormPerson,
    asyncPost: async (value: PeopleInterface) => {
      let people = new People(value);
      const retry = people.postValue();
      return retry;
    },
  },
  {
    title: "Novo teste",
    iconName: "chemical",
    form: FormTypeTest,
    asyncPost: async (value: TestInterface) => {
      let test = new Test(value);
      const retry = test.postValue();
      return retry;
    },
  },
]
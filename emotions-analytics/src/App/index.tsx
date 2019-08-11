import React from "react";
import Routes from "./Routes";
import SidebarMenu from "../Components/SidebarMenu";
import { FormTypeTest, FormNewTest, FormPerson } from "../Services/Get/Forms";
import { DataMenu } from "../Services/Get/Menu";

interface Props {
}

export default class App extends React.Component<Props> {

  // onSubmit(values: Object) {
  //   console.log("onSubmit values ", values);
  // }
  // <ModalForm form={FormPerson} onSubmit={(event: any) => this.onSubmit(event)} />

  render() {
    return (
      <div className="container">
        <SidebarMenu data={DataMenu} />
        <Routes />
      </div>
    )
  }
}
import React from "react";
import Routes from "./Routes";
import SidebarMenu from "../Components/SidebarMenu";
import SidebarNew from "../Components/SidebarNew";
import { DataMenu } from "../Services/Layout/Get/Menu";
import { DataSidebarNew } from "../Services/Layout/Get/New";
import StartTestFixed from "../Components/StartTestFixed";

interface Props {
}

export default class App extends React.Component<Props> {

  render() {
    return (
      <div className="container">
        <SidebarNew data={DataSidebarNew} />
        <SidebarMenu data={DataMenu} />
        <StartTestFixed />
        <Routes />
      </div>
    )
  }
}
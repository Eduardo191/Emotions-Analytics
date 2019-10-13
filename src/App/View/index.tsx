import React from "react";

import { withRouter, RouteComponentProps } from "react-router";
import Routes from "./Routes";

import { DataSidebarNew } from "../Data/SidebarNew";
import { DataSidebarMenu } from "../Data/SidebarMenu";

import SidebarMenu from "./Components/SidebarMenu";
import SidebarNew from "./Components/SidebarNew";
import StartTestFixed from "./Components/StartTestFixed";

type Props = RouteComponentProps<{}>;

class App extends React.Component<Props> {
  
  componentDidMount = () => {
  }

  render() {
    return (
      <div className="container">
        <SidebarNew data={DataSidebarNew} />
        <SidebarMenu data={DataSidebarMenu} />
        <StartTestFixed />
        <Routes />
      </div>
    )
  }
}

export default withRouter(App);
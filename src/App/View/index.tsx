import React from "react";

//Route
import { withRouter, RouteComponentProps } from "react-router";
import Routes from "./Routes";

//Data
import { DataSidebarNew } from "../Data/SidebarNew";
import { DataSidebarMenu } from "../Data/SidebarMenu";

//Components
import SidebarMenu from "./Components/SidebarMenu";
import SidebarNew from "./Components/SidebarNew";
import StartTestFixed from "./Components/StartTestFixed";
import Script from "./Components/Script/index";

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
        <Script link="https://download.affectiva.com/js/3.2.1/affdex.js" />
      </div>
    )
  }
}

export default withRouter(App);
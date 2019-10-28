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
import Iframe from "./Components/Iframe";

type Props = RouteComponentProps<{}>;

class App extends React.Component<Props> {

  render() {
    return (
      <div className="container">
        <SidebarNew data={DataSidebarNew} />
        <SidebarMenu data={DataSidebarMenu} />
        <StartTestFixed />
        <Routes />
        <Iframe
          startUrl="https://www.npmjs.com/package/toastr"
          onChangeTitle={(title: string) => console.log("title ", title)}
          onChangeUrl={(url: string) => console.log("url ", url)}
        />
      </div>
    )
  }
}

export default withRouter(App);
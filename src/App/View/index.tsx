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
import FinishTestButton from "./Components/FinishTestButton";

//Redux
import { connect } from "react-redux";
import { ReducerState } from "../Redux/Interfaces";
import { changeCurrentTitle, changeCurrentUrl } from "../Redux/Actions";

//Axios
import axios from "axios";
axios.defaults.baseURL = 'http://backend-prod2.us-east-1.elasticbeanstalk.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

interface ReduxState {
  testGoingOn: boolean;
  currentUrl: string;
  changeCurrentUrl: Function;
  changeCurrentTitle: Function;
}

type Props = RouteComponentProps<{}> & ReduxState;

class App extends React.Component<Props> {

  render() {

    const {
      testGoingOn,
      currentUrl,
      changeCurrentTitle,
      changeCurrentUrl,
    } = this.props;

    return (
      <div className="container">

        <div className={`${testGoingOn ? "invisible" : ""}`}>
          <SidebarNew data={DataSidebarNew} />
          <SidebarMenu data={DataSidebarMenu} />
          <StartTestFixed />
          <Routes />
        </div>

        <div className={`${testGoingOn ? "" : "invisible"}`}>
          <FinishTestButton />
          {testGoingOn ?
            <Iframe
              startUrl={currentUrl}
              onChangeTitle={(title: string) => changeCurrentTitle(title)}
              onChangeUrl={(url: string) => changeCurrentUrl(url)}
            />
          : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: ReducerState) => {

  const {
    testGoingOn,
    currentUrl,
  } = state.Reducers;

  return {
    testGoingOn,
    currentUrl,
  }
}

const mapDispatchToProps = {
  changeCurrentUrl,
  changeCurrentTitle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
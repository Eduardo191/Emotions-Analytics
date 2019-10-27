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
import FinishTestButton from "./Components/FinishTestButton";

//Redux
import { connect } from "react-redux";
import { ReducerState } from "../Redux/Interfaces";

interface ReduxState {
  testGoingOn: boolean;
}

type Props = RouteComponentProps<{}> & ReduxState;

class App extends React.Component<Props> {

  render() {

    const testGoingOn = this.props.testGoingOn;

    return (
      <div className="container">
        <SidebarNew invisible={testGoingOn} data={DataSidebarNew} />
        <SidebarMenu invisible={testGoingOn} data={DataSidebarMenu} />
        <StartTestFixed invisible={testGoingOn} />
        <FinishTestButton invisible={!testGoingOn} />
        <Routes />
      </div>
    )
  }
}

const mapStateToProps = (state: ReducerState) => {

  const {
    testGoingOn,
  } = state.Reducers;

  return {
    testGoingOn,
  }
}

export default connect(
  mapStateToProps,
)(withRouter(App));
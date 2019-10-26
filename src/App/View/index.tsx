import React from "react";

//Redux
import { connect } from "react-redux";
import { ReducerState } from "../Redux/Interfaces";

//Route
import { withRouter, RouteComponentProps } from "react-router";
import { changeAffectivaIsLoaded } from "../Redux/Actions";
import Routes from "./Routes";

//Data
import { DataSidebarNew } from "../Data/SidebarNew";
import { DataSidebarMenu } from "../Data/SidebarMenu";

//Components
import SidebarMenu from "./Components/SidebarMenu";
import SidebarNew from "./Components/SidebarNew";
import StartTestFixed from "./Components/StartTestFixed";

interface ReduxState {
  affectivaIsLoaded: boolean;
  changeAffectivaIsLoaded: Function;
}

type Props = RouteComponentProps<{}> & ReduxState;

class App extends React.Component<Props> {

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


/** EXEMPLO DE USO DO REDUX*/

const mapStateToProps = (state: ReducerState) => {

  const {
    affectivaIsLoaded,
  } = state.Reducers;

  return {
    affectivaIsLoaded,
  }
}

const mapDispatchToProps = {
  changeAffectivaIsLoaded
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
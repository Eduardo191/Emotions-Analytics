import React from "react";

import { withRouter, RouteComponentProps } from "react-router";
import Routes from "./Routes";

import { connect } from "react-redux";
import { ReducerState } from "../Reducers/Interfaces";

import { DataSidebarNew } from "../Services/Layout/Get/New";
import { DataMenu } from "../Services/Layout/Get/Menu";

import SidebarMenu from "../Components/SidebarMenu";
import SidebarNew from "../Components/SidebarNew";
import StartTestFixed from "../Components/StartTestFixed";


interface ReduxState {
  affectivaActived: boolean;
}

type Props = RouteComponentProps<{}> & ReduxState;

class App extends React.Component<Props> {
  
  componentDidMount = () => {
    if(this.props.affectivaActived) 
      this.props.history.push("/testando")
  }

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


const mapStateToProps = (state: ReducerState) => {
  
  const {
    actived
  } = state.affectiva

  return {
    affectivaActived: actived
  }
}

const mapDispatchToProps = { }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App))
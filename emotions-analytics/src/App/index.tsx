import React from "react";
import Routes from "./Routes";
import SidebarMenu from "../Components/SidebarMenu";

interface Props {
}

export default class App extends React.Component<Props> {

  getDataMenu() {
    return [
      {
        title: 'Home',
        iconName: 'chemical',
        routePath: '/',
      },
      {
        title: 'Testes',
        iconName: 'chemical',
        routePath: '/Testes',
      },
      {
        title: 'Pessoas',
        iconName: 'chemical',
        routePath: '/pessoas',
      }
    ]
  }


  render() {

    const dataMenu = this.getDataMenu();

    return (
      <div>
        <SidebarMenu data={dataMenu} />
        <Routes />
      </div>
    )
  }
}
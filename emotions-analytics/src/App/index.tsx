import React from "react";
import Routes from "./Routes";
import SidebarMenu from "./Components/SidebarMenu";

interface Props {
}

export default class App extends React.Component<Props> {

  getDataMenu() {
    return [
      {
        title: 'home',
        iconName: 'home',
        routePath: '/',
      },
      {
        title: 'testes',
        iconName: 'chemical',
        routePath: '/testes',
      },
      {
        title: 'pessoas',
        iconName: 'peoples',
        routePath: '/pessoas',
      }
    ]
  }


  render() {

    const dataMenu = this.getDataMenu();

    return (
      <div className="container">
        <SidebarMenu data={dataMenu} />
        <Routes />
      </div>
    )
  }
}
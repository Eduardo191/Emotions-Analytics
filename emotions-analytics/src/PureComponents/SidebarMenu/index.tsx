import React from "react";

interface OptionMenu {
  title: string;
  iconName: string;
  routeName: string;
}

interface Props {
  data: Array<OptionMenu>;
}

interface State {
}

export default class SidebarMenu extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount = () => {

  }


  render() {
    return (

    )
  }
}
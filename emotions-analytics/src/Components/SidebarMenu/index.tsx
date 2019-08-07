import React from "react";
import { Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import Icon from "../../PureComponents/Icon";

interface OptionMenu {
  title: string;
  iconName: string;
  routePath: string;
}

interface Props {
  data: Array<OptionMenu>;
}

interface State {
  compressed: boolean;
}

class SidebarMenu extends React.Component<RouteComponentProps<{}> & Props, State>{

  constructor(props: RouteComponentProps<{}> & Props) {
    super(props);
    this.state = {
      compressed: false,
    };
  }


  renderList() {

    const data = this.props.data;

    return (
      data.map((option) => {
        const { title, iconName, routePath } = option;
        return this.renderItem(title, iconName, routePath);
      })
    )
  }


  renderItem(title: string, iconName: string, routePath: string) {

    const currentPath = this.props.location.pathname;
    const isActived = (currentPath === routePath) ? "is_active" : "";

    return (
      <li key={title} className={isActived}>

        <Link to={routePath}>

          <div className="icon">
            <Icon name={iconName} size="100%" color="white" />
          </div>

          <span>{title}</span>

        </Link>

      </li>
    )
  }


  changeCompressed(bool: boolean) {
    this.setState({ compressed: bool })
  }


  render() {

    const compressed = this.state.compressed ? "compressed" : "";

    return (
      <aside className={`${compressed} sidebar_menu`}>
        <nav>
          <ul>

            {this.renderList()}

            <li
              className="menu"
              onClick={() => this.changeCompressed(!this.state.compressed)}
            >
              <Icon name="chemical" color="white"/>
            </li>

          </ul>
        </nav>
      </aside>
    )
  }
}

export default withRouter(SidebarMenu);
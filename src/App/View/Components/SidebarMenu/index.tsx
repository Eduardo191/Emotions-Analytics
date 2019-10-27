import React from "react";
import { Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import Icon from "../Icon";
import { delay } from "../../../Logic/Library/delay";

interface OptionMenu {
  title: string;
  iconName: string;
  routePath: string;
}

interface Props {
  data: Array<OptionMenu>;
  invisible?: boolean;
}

interface State {
  compressedClass: string;
  compressed: boolean;
  menuIcon: string;
}

class SidebarMenu extends React.Component<RouteComponentProps<{}> & Props, State>{

  constructor(props: RouteComponentProps<{}> & Props) {
    super(props);
    this.state = {
      compressedClass: "compressed",
      compressed: true,
      menuIcon: "sidebar",
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

          <h3>{title}</h3>

        </Link>

      </li>
    )
  }


  changeCompressed(compressed: boolean) {

    if (compressed) {
      this.compress();
    } else {
      this.uncompress();
    }
  }


  async compress() {

    this.setState({ compressedClass: "uncompressed outside" });
    await delay(300);

    this.setState({
      compressedClass: "compressed invisible",
      menuIcon: "sidebar",
    });

    await delay(100);

    this.setState({
      compressedClass: "compressed",
      compressed: true,
    })
  }

  async uncompress() {

    this.setState({ compressedClass: "compressed invisible" });
    await delay(300);

    this.setState({
      compressedClass: "uncompressed outside",
      menuIcon: "arrow",
    });

    await delay(100);

    this.setState({
      compressedClass: "uncompressed",
      compressed: false,
    })
  }


  render() {
    return (
      <aside className={`${this.state.compressedClass} sidebar_menu ${this.props.invisible ? "invisible" : ""}`}>
        <nav>
          <ul>
            {this.renderList()}
          </ul>
          <div
            className="menu"
            onClick={() => this.changeCompressed(!this.state.compressed)}
          >
            <div className="icon">
              <Icon name={this.state.menuIcon} color="white" size="100%" />
            </div>
          </div>
        </nav>
      </aside>
    )
  }
}

export default withRouter(SidebarMenu);
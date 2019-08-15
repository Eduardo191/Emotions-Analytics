import React from "react";
import { withRouter } from "react-router-dom";
import { FieldInterface } from "../../Components/Form/Interfaces";
import { RouteComponentProps } from "react-router-dom";
import { ModalForm } from "../Form";
import Icon from "../Icon";

interface Option {
  title: string;
  iconName: string;
  form: Array<FieldInterface>;
  asyncPost: Function;
}

interface Props {
  data: Array<Option>;
}

interface State {
  formMode: "open" | "close" | "loading";
  sidebarMode: boolean;
  currentIndex: number;
}

class SidebarNew extends React.Component<RouteComponentProps<{}> & Props, State>{

  constructor(props: RouteComponentProps<{}> & Props) {
    super(props);
    this.state = {
      formMode: "close",
      sidebarMode: false,
      currentIndex: 0,
    };
  }


  renderList() {

    const data = this.props.data;

    return (
      data.map((option, index) => {
        const { title, iconName } = option;
        return this.renderItem(title, iconName, index);
      })
    )
  }


  renderItem(title: string, iconName: string | false, index: number) {
    return (
      <li key={`${index}`} onClick={() => this.openModal(index)}>
        {iconName ?
          <div className="option_icon">
            <Icon name={iconName} color="#ffffff" size="%100" />
          </div>
          : null}
        <span>{title}</span>
      </li>
    )
  }


  openModal(index: number) {

    const currentIndex = index;

    this.setState({
      formMode: "open",
      currentIndex,
    })
  }


  async onSubmit(values: Object) {

    this.setState({ formMode: "loading" })

    const index = this.state.currentIndex;
    let postValues = this.props.data[index].asyncPost;
    const response = await postValues(values);

    if (response) {
      alert("Salvo com sucesso!");
    } else {
      alert("Algo deu errado, tente novamente mais tarde.")
    }

    this.setState({ formMode: "close" });
  }


  onCancel() {
    this.setState({ formMode: "close" });
  }


  toggleSidebar() {
    this.setState({ sidebarMode: !this.state.sidebarMode });
  }


  render() {
    const index = this.state.currentIndex;
    const currentForm = this.props.data[index].form;

    return (
      <aside className={`sidebar_new ${this.state.sidebarMode ? "" : "close"}`}>

        <div className="menu_icon" onClick={() => this.toggleSidebar()}>
          <Icon name="add" size="%100" color="#ffffff" />
        </div>

        <ul className="options">
          {this.renderList()}
        </ul>

        <ModalForm
          mode={this.state.formMode}
          onSubmit={(values: Object) => this.onSubmit(values)}
          onCancel={() => this.onCancel()}
          form={currentForm}
          submitLabel="Cadastrar"
        />
      </aside>
    )
  }
}

export default withRouter(SidebarNew);
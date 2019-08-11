import React from "react";
import { withRouter } from "react-router-dom";
import { FieldInterface } from "../../Components/Form/Interfaces";
import { RouteComponentProps } from "react-router-dom";
import { FormNewTest } from "../../Services/Get/Forms";
import { ModalForm } from "../Form";
import Icon from "../Icon";

interface Option {
  title: string;
  iconName: string;
  form: Array<FieldInterface>;
}

interface Props {
  data: Array<Option>;
}

interface State {
  formMode: "open" | "close" | "loading";
  currentForm: Array<FieldInterface>;
  formSubmitName: string;
  sidebarMode: boolean;
}

class SidebarNew extends React.Component<RouteComponentProps<{}> & Props, State>{

  constructor(props: RouteComponentProps<{}> & Props) {
    super(props);
    this.state = {
      formMode: "close",
      currentForm: [],
      formSubmitName: "",
      sidebarMode: false,
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


  renderItem(title: string, iconName: string | false, index: number | "startTest") {
    return (
      <li onClick={() => this.openModal(index)}>
        {iconName ?
          <div className="option_icon">
            <Icon name={iconName} color="#ffffff" size="%100" />
          </div>
          : null}
        <span>{title}</span>
      </li>
    )
  }


  openModal(index: number | "startTest") {

    const data = this.props.data;

    let currentForm: Array<FieldInterface>;
    let formSubmitName: string;

    if (index === "startTest") {
      currentForm = FormNewTest;
      formSubmitName = "Iniciar";
    } else {
      currentForm = data[index].form;
      formSubmitName = "Cadastrar";
    }

    this.setState({
      formMode: "open",
      currentForm,
      formSubmitName,
    })
  }


  onSubmit(values: Object) {
    console.log("values ", values);
  }


  onCancel() {
    this.setState({ formMode: "close" });
  }


  toggleSidebar() {
    this.setState({ sidebarMode: !this.state.sidebarMode });
  }


  render() {
    return (
      <aside className={`sidebar_new ${this.state.sidebarMode ? "" : "close"}`}>

        <div className="menu_icon" onClick={() => this.toggleSidebar()}>
          <Icon name="add" size="%100" color="#ffffff" />
        </div>

        <ul className="options">
          {this.renderList()}
        </ul>

        <ul className="start_test">
          {this.renderItem("INICIAR TESTE", false, "startTest")}
        </ul>

        <ModalForm
          mode={this.state.formMode}
          onSubmit={(values: Object) => this.onSubmit(values)}
          onCancel={() => this.onCancel()}
          form={this.state.currentForm}
          submitName={this.state.formSubmitName}
        />
      </aside>
    )
  }
}

export default withRouter(SidebarNew);
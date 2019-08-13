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
  asyncPost: Function;
}

interface Props {
  data: Array<Option>;
}

interface State {
  formMode: "open" | "close" | "loading";
  formsubmitLabel: string;
  sidebarMode: boolean;
  currentIndex: number | "startTest";
}

class SidebarNew extends React.Component<RouteComponentProps<{}> & Props, State>{

  constructor(props: RouteComponentProps<{}> & Props) {
    super(props);
    this.state = {
      formMode: "close",
      formsubmitLabel: "",
      sidebarMode: false,
      currentIndex: "startTest",
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


  openModal(index: number | "startTest") {

    const currentIndex = index;
    const formsubmitLabel = (index === "startTest") ? "Iniciar" : "Cadastrar";

    this.setState({
      formMode: "open",
      currentIndex,
      formsubmitLabel,
    })
  }


  async onSubmit(values: Object) {

    this.setState({ formMode: "loading" })

    const index = this.state.currentIndex;
    let postValues: Function;

    if (index === "startTest")
      //Função gatilho iniciar teste aqui
      postValues = () => (true);
    else
      postValues = this.props.data[index].asyncPost;

    const response: boolean = await postValues(values);

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
    const currentForm = (index === "startTest") ? FormNewTest : this.props.data[index].form;

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
          form={currentForm}
          submitLabel={this.state.formsubmitLabel}
        />
      </aside>
    )
  }
}

export default withRouter(SidebarNew);
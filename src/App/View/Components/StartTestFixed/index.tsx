import React from "react";
import { FormNewTest } from "../../../Controller/Layout/Get/Forms"
import Icon from "../Icon";
import { ModalForm } from "../Form/Components/FormTypes/ModalForm";

interface State {
  formMode: "open" | "close" | "loading";
}

interface Props { }

export default class StartTestFixed extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);
    this.state = {
      formMode: "close",
    };
  }


  async onSubmit(values: any) {

    this.setState({ formMode: "loading" })

    const testTypeId = values.test_test;
    const personId = values.test_person;
    
    this.setState({ formMode: "close" });
  }


  openModal() {
    this.setState({ formMode: "open" });
  }


  onCancel() {
    this.setState({ formMode: "close" });
  }


  render() {
    return (
      <div className="start_test">

        <div className="wrapper_button" onClick={() => this.openModal()}>
          
          <div className="icon">
            <Icon name="rocket" size="100%" color="#fff" />
          </div>
          
          <span>Iniciar Teste</span>  
        
        </div>

        <ModalForm
          mode={this.state.formMode}
          onSubmit={(values: Object) => this.onSubmit(values)}
          onCancel={() => this.onCancel()}
          form={FormNewTest}
          submitLabel="Iniciar"
        />
      </div>
    )
  }
}
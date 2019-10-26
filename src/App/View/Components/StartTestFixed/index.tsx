import React from "react";
import Icon from "../Icon";
import { ModalForm } from "../Form/Components/FormTypes/ModalForm";
import { Test } from "../../../Controller";
import { TestInterface } from "../../../Controller/Test/interface";
import toastr from "toastr";
import { Affectiva } from "../../../Logic/Library";

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


  async onSubmit(values: TestInterface) {

    this.setState({ formMode: "loading" })
    let test = new Test(values);
    const testValue = await test.postValue();

    if (testValue) {
   
      const loadingTeoastr = toastr.info(
        "Inicializando Affectiva", 
        undefined, 
        {
          positionClass: "toast-bottom-left",
          timeOut: undefined,
        }
      );
      
      Affectiva.onInitializeSuccess = () => {
        console.log("Inicializado");
      }

      Affectiva.onImageResultsSuccess = (faces:any, image:any, timestamp:any) => {
        console.log("faces ", faces);
        console.log("image ", image);
        console.log("timestamp ", timestamp);
      }

      Affectiva.start();
      
      // toastr.clear(loadingTeoastr);
   
    } else {
   
      toastr.error(
        "Algo deu errado, tente novamente mais tarde",
        undefined,
        {
          positionClass: "toast-bottom-left",
          timeOut: 1500,
        }
      );

      this.setState({ formMode: "close" });
    }
  }


  openModal() {
    this.setState({ formMode: "open" });
  }


  onCancel() {
    this.setState({ formMode: "close" });
  }


  render() {

    const form = Test.getForm();

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
          onSubmit={(values: TestInterface) => this.onSubmit(values)}
          onCancel={() => this.onCancel()}
          form={form}
          submitLabel="Iniciar"
        />
      </div>
    )
  }
}
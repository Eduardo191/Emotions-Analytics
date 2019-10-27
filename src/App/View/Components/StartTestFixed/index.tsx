import React from "react";

//Components
import Icon from "../Icon";
import { ModalForm } from "../Form/Components/FormTypes/ModalForm";

//Controllers
import { Test, Occurrence } from "../../../Controller";
import { TestInterface } from "../../../Controller/Test/interface";
import { OccurrenceInterface } from "../../../Controller/Occurrence/interface";

//Libraries
import { Affectiva, capitalizeObjectKeys } from "../../../Logic/Library";
import toastr from "toastr";

//Redux
import { connect } from "react-redux";
import { ReducerState } from "../../../Redux/Interfaces";
import { changeTestGoingOn } from "../../../Redux/Actions";

interface ReduxState {
  changeTestGoingOn: Function;
  testGoingOn: boolean;
}

interface OwnProps {
  invisible?: boolean;
}

type Props = ReduxState & OwnProps;

interface State {
  formMode: "open" | "close" | "loading";
}

class StartTestFixed extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);
    this.state = {
      formMode: "close",
    };
  }


  async onSubmit(values: TestInterface) {

    this.setState({ formMode: "loading" })
    let test = new Test(values);
    const testValue: TestInterface = await test.postValue();

    if (testValue.Id !== undefined) {
      this.startAffectiva(testValue.Id);
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


  startAffectiva(testId: number) {

    const loadingTeoastr = toastr.info(
      "Inicializando Teste...",
      undefined,
      {
        positionClass: "toast-bottom-left",
        timeOut: 1000000000,
      }
    );

    Affectiva.onInitializeFailure = () => {
      toastr.clear(loadingTeoastr);
      toastr.error(
        "A inicialização do algoritmo de coleta de emoções falhou, tente novamente mais tarde",
        undefined,
        {
          positionClass: "toast-bottom-left",
          timeOut: 1500,
        }
      );
      this.setState({ formMode: "close" });
    }

    Affectiva.onWebcamConnectFailure = () => {
      toastr.clear(loadingTeoastr);
      toastr.error(
        "Não foi possível conectar com a sua webcam, tente novamente mais tarde",
        undefined,
        {
          positionClass: "toast-bottom-left",
          timeOut: 1500,
        }
      );
      this.setState({ formMode: "close" });
    };

    Affectiva.onInitializeSuccess = () => {
      if (!this.props.testGoingOn) {
        this.props.changeTestGoingOn(true);
        toastr.clear(loadingTeoastr);
        this.setState({ formMode: "close" });
      }
    }

    Affectiva.onImageResultsSuccess = (faces: any, image: any, timestamp: any) => {

      if (faces && Array.isArray(faces) && faces.length !== 0) {

        let { expressions, emotions, appearance, emojis } = faces[0];
        const Expressions = capitalizeObjectKeys(expressions);
        const Emotions = capitalizeObjectKeys(emotions);
        const PeopleAppearence = capitalizeObjectKeys(appearance);
        const Emoji = emojis.dominantEmoji;
        const TestId = testId;
        const Time = timestamp;

        const occurrenceValue: OccurrenceInterface = {
          Time,
          TestId,
          Emoji,
          PeopleAppearence,
          Emotions,
          Expressions,
          Page: {
            Url: "url mocado",
            Title: "title mocado",
            Print: image,
          },
        }

        let occurrence = new Occurrence(occurrenceValue);
        occurrence.postValue();
      }
    }

    Affectiva.start();
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
      <div className={`start_test ${this.props.invisible ? "invisible" : ""}`}>
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

const mapStateToProps = (state: ReducerState) => {

  const {
    testGoingOn,
  } = state.Reducers;

  return {
    testGoingOn,
  }
}

const mapDispatchToProps = {
  changeTestGoingOn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartTestFixed);
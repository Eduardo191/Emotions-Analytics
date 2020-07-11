import React from "react";
import { Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import Icon from "../Icon";
import { delay } from "../../../Logic/Library/delay";

import { ModalForm } from "../Form/Components/FormTypes/ModalForm";

//Controllers
import { Test, Occurrence, TestType } from "../../../Controller";
import { TestInterface } from "../../../Controller/Test/interface";
import { OccurrenceInterface } from "../../../Controller/Occurrence/interface";

//Libraries
import { Affectiva } from "../../../Logic/Library";
import toastr from "toastr";

//Redux
import { changeTestGoingOn, changeCurrentUrl } from "../../../Redux/Actions";
import { TestTypeInterface } from "../../../Controller/TestType/interface";

interface OptionMenu {
  title: string;
  iconName: string;
  routePath: string;
}

interface Props {
  testGoingOn: boolean;
  currentUrl: string;
  data: Array<OptionMenu>;
}

interface State {
  compressedClass: string;
  compressed: boolean;
  menuIcon: string;
  formMode: "open" | "close" | "loading";
}

class SidebarMenu extends React.Component<RouteComponentProps<{}> & Props, State>{

  constructor(props: RouteComponentProps<{}> & Props) {
    super(props);
    this.state = {
      compressedClass: "uncompressed",
      compressed: false,
      menuIcon: "arrow",
      formMode: "close"
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

  notLink(title: string) {
    console.log(title)
    console.log(this.props)
    if (title === "iniciar teste") {
      this.openModal()
    }
  }


  renderItem(title: string, iconName: string, routePath: string) {

    const currentPath = this.props.location.pathname;
    const isActived = (currentPath === routePath) ? "is_active" : "";
    const path = (routePath === '') ? currentPath : routePath

    return (
      <li key={title} className={isActived}>

        <Link to={path}
              onClick={() => this.notLink(title)}>

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

  async onSubmit(values: TestInterface) {

    this.setState({ formMode: "loading" });
    let test = new Test(values);
    const testValue: TestInterface = await test.postValue();
    const testType: TestTypeInterface = await TestType.getTestTypeById(values.test_type_id);

    if (testValue.id !== undefined && testType.start_url !== undefined) {
      changeCurrentUrl(testType.start_url);
      this.startAffectiva(testValue.id);
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
        changeTestGoingOn(true);
        toastr.clear(loadingTeoastr);
        this.setState({ formMode: "close" });
      }
    }

    Affectiva.onImageResultsSuccess = (faces: any, image: any, timestamp: any) => {

      if (faces && Array.isArray(faces) && faces.length !== 0) {

        let { expressions, emotions, appearance } = faces[0];
        const TestId = testId;
        // const Emoji = emojis.dominantEmoji;
        // const Time = timestamp;

        const occurrenceValue: OccurrenceInterface = {
          occurrence: {
            test: {
              id: TestId,
            },
            people_appearance: {
              age: appearance.age,
              gender: appearance.gender,
              glasses: appearance.glasses,
            },
            emotion: {
              anger: emotions.anger,
              contempt: emotions.contempt,
              disgusted: emotions.disgusted,
              fear: emotions.fear,
              joy: emotions.joy,
              sadness: emotions.sadness,
              valence: emotions.valence,
              engagement: emotions.engagement,
            },
            expression: {
              attention: expressions.attention,
              brow_furrow: expressions.browFurrow,
              brow_raise: expressions.browRaise,
              cheek_raise: expressions.cheekRaise,
              chin_raise: expressions.chinRaise,
              dimpler: expressions.dimpler,
              eye_closure: expressions.eyeClosure,
              eye_widen: expressions.eyeWiden,
              inner_brow_raise: expressions.innerBrowRaise,
              jaw_drop: expressions.jawDrop,
              lid_tighten: expressions.lidTighten,
              lip_corner_depressor: expressions.lipCorner,
              lip_press: expressions.lipPress,
              lip_pucker: expressions.lipPucker,
              lip_stretch: expressions.lipStrech,
              lip_suck: expressions.lipSuck,
              mouth_open: expressions.mouthOpen,
              nose_wrinkle: expressions.noseWrinkle,
              smile: expressions.smile,
              smirk: expressions.smirk,
              upper_lip_raise: expressions.upperLipRaise,
            },
            // time: Time,
            // emoji: Emoji,
            // page: {
            //   url: this.props.currentUrl,
            //   title: this.props.currentTitle,
            // },
          }
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
    return (
      <div>
        <aside className={`${this.state.compressedClass} sidebar_menu`}>
        <div>
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
        </div>
      </aside>
      <ModalForm
            mode={this.state.formMode}
            onSubmit={(values: TestInterface) => this.onSubmit(values)}
            onCancel={() => this.onCancel()}
            form={Test.getForm()}
            submitLabel="Iniciar"
        />
      </div>
    )
  }
}

export default withRouter(SidebarMenu);
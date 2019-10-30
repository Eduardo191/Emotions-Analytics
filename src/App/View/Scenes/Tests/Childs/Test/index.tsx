import React from "react";
import ListItens from "../../../../Components/ListItens";
import { itemOfListItensComponent } from "../../../../Components/ListItens";
import { Test as TestController, TestType, People } from "../../../../../Controller";
import { withRouter, RouteComponentProps } from "react-router";
import { TestTypeInterface } from "../../../../../Controller/TestType/interface";

interface OwnProps { }

interface State {
  dataList: Array<itemOfListItensComponent>;
  currentTestType: TestTypeInterface | {};
}

type Props = RouteComponentProps<{}> & OwnProps;

class Test extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      dataList: [],
      currentTestType: {},
    }
  }


  componentDidMount = async () => {
    const params: any = this.props.match.params;
    const testTypeId = parseInt(params.testTypeId);
    this.setDataList(testTypeId);
    this.setCurrentTestType(testTypeId);
  }


  async setDataList(testTypeId: number) {

    const tests = await TestController.getTestsByTestTypeId(testTypeId);
    let dataList: Array<itemOfListItensComponent> = [];

    if (tests) {

      await Promise.all(
        tests.map(async (test) => {

          const testType = await TestType.getTestTypeById(test.test_type_id);
          const people = await People.getPeopleById(test.people_id);

          dataList.push({
            title: testType.title,
            subtitle: people.name,
            link: `teste/${test.id}`,
          })
        })
      );

      this.setState({ dataList });
    }
  }


  async setCurrentTestType(testTypeId: number) {
    const currentTestType = TestType.getTestTypeById(testTypeId);
    this.setState({ currentTestType });
  }


  render() {
    return (
      <ListItens data={this.state.dataList} />
    )
  }
}

export default withRouter(Test);
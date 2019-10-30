import React from "react";
import ListItens from "../../../../Components/ListItens";
import { itemOfListItensComponent } from "../../../../Components/ListItens";
import { Test as TestController, TestType, People } from "../../../../../Controller";
import { withRouter, RouteComponentProps } from "react-router";

interface OwnProps { }

interface State {
  dataList: Array<itemOfListItensComponent>
}

type Props = RouteComponentProps<{}> & OwnProps;

class Test extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      dataList: []
    }
  }


  componentDidMount = async () => {

    const params: any = this.props.match.params;
    const tests = await TestController.getTestsByTestTypeId(params.testTypeId);
    let dataList: Array<itemOfListItensComponent> = [];
    
    if (tests) {

      Promise.all(
        tests.map(async (test) => {

          const testType = await TestType.getTestTypeById(test.test_type_id);
          const people = await People.getPeopleById(test.people_id);

          dataList.push({
            title: testType.title,
            subtitle: people.name,
            link: `teste/${testType.id}`,
          })
        })
      )

      this.setState({ dataList });
    }
  }


  render() {
    return (
      <ListItens data={this.state.dataList} />
    )
  }
}

export default withRouter(Test);
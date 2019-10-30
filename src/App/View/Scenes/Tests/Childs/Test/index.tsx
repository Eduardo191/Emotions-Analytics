import React from "react";
import ListItens from "../../../../Components/ListItens";
import { itemOfListItensComponent } from "../../../../Components/ListItens";
import { Test as TestController, TestType, People } from "../../../../../Controller";

interface Props { }

interface State {
  dataList: Array<itemOfListItensComponent>
}

export default class Test extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      dataList: []
    }
  }


  componentDidMount = async () => {

    const tests = await TestController.getTestsByTestTypeId(1);
    let dataList: Array<itemOfListItensComponent> = [];

    console.log("tests ", tests);
    
    Promise.all(
      tests.map( async (test) => {
  
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


  render() {
    return (
      <ListItens data={this.state.dataList} />
    )
  }
}
import React from "react";
import ListItens from "../../Components/ListItens";
import { itemOfListItensComponent } from "../../Components/ListItens";
import { TestType } from "../../../Controller";
import { TestTypeInterface } from "../../../Controller/TestType/interface";

interface Props { }

interface State {
  dataList: Array<itemOfListItensComponent>
}

export default class Tests extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      dataList: []
    }
  }


  componentDidMount = async () => {

    const testTypes: Array<TestTypeInterface> = await TestType.getTestTypes();
    let dataList: Array<itemOfListItensComponent> = [];

    testTypes.map((value) => {
      dataList.push({
        title: value.title,
        subtitle: value.objective,
        link: `tests/${value.id}`,
      })
    });

    this.setState({ dataList });
  }


  render() {
    return (
      <ListItens data={this.state.dataList} />
    )
  }
}
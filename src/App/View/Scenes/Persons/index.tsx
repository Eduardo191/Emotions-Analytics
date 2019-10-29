import React from "react";
import ListItens from "../../Components/ListItens";
import { itemOfListItensComponent } from "../../Components/ListItens";
import { People } from "../../../Controller";

interface Props { }

interface State {
  dataList: Array<itemOfListItensComponent>;
}

export default class Persons extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      dataList: [],
    }
  }

  componentDidMount = async () => {

    const peoples = await People.getPeoples();
    let dataList: Array<itemOfListItensComponent> = [];

    peoples.map((value) => {
      dataList.push({
        title: value.name,
        subtitle: value.email,
        link: `pessoas/${value.id}`,
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
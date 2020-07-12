import React from "react";

//Router
import { withRouter, RouteComponentProps } from "react-router-dom";

export type itemOfHelpItensComponent = {
    title: string;
    description: string;
}

interface OwnProps {
    data: Array<itemOfHelpItensComponent>;
}

type Props = RouteComponentProps<{}> & OwnProps;

interface State {
}

class HelpList extends React.Component<Props, State>{

    getClass(title: string) {
        if (title === this.props.data[this.props.data.length-1].title) {
            return "help_title_final"
        } else {
            return "help_title"
        }
    }

    renderList() {
        return (
            this.props.data.map((value) => (
                <div className={this.getClass(value.title)}>
                    <h2>{value.title}</h2>
                    <div className="wrapper">
                        <h3 className="help_info">{value.description}</h3>
                    </div>
                </div>
            ))
        )
    }

    render() {
        return (
            <nav>
                <ul>
                    {this.renderList()}
                </ul>
            </nav>
        )
    }
}

export default withRouter(HelpList);
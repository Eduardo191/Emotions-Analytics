import React from 'react'
import HelpList from '../../Components/HelpList'
import { help } from '../../../Data/Help'
interface Props { }

interface State { }

export default class Help extends React.Component<Props, State> {

    constructor(props: Props) {
      super(props);
      this.state = {}
    }
  
    render() {    
      return (
        <section>
        <div>
          <h2 className="info">Manual</h2>  
          <HelpList data={help} />
        </div>
      </section>
      )
    }
  }
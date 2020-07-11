import React from 'react'

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
          <div className="info">
            <h2>Cadastrar novo usuário</h2>
            <div className="wrapper">
              <h3 className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</h3>
            </div>
          </div>
          <div className="info">
            <h2>Cadastrar novo teste</h2>
            <div className="wrapper">
              <h3 className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</h3>
            </div>
          </div>
          <div className="info">
            <h2>Iniciar novo teste</h2>
            <div className="wrapper">
              <h3 className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</h3>
            </div>
          </div>
          <div className="info">
            <h2>Consultar testes realizados</h2>
            <div className="wrapper">
              <h3 className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</h3>
            </div>
          </div>
          <div className="info">
            <h2>Consultar usuários cadastrados</h2>
            <div className="wrapper">
              <h3 className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</h3>
            </div>
          </div>
          <div className="info_final">
            <h2>Consultar testes cadastrados</h2>
            <div className="wrapper">
              <h3 className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</h3>
            </div>
          </div>
        </div>
      </section>
      )
    }
  }
import React, { Component } from 'react'
import Senators from './data/senators'

export default class extends Component {
  //
  // state = {
  //   name: '',
  //   party: [],
  //   senators: []
  // }

  filterSenatorsByName(name) {
    return Senators.filter((senator) => {
      

    })
  }
  
  renderSenators() {
    return Senators.map(senator => (
      <div>{senator.person.firstname} {senator.person.lastname}</div>
      // <div> {senator.person.lastname}
    ))
  }
  
  render() {
    return (
      <div>
        <h1>Senators</h1>
        <form>
          <div>
            {/*<input type="search" placeholder="Filter by Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />*/}
          </div>
          <div>
            <input type="text" />
          </div>
        </form>
        {this.renderSenators()}
      </div>
    )
  }
}

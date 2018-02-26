import React, { Component } from 'react'
import Senators from './data/senators'

export default class extends Component {

  state = {
    name: '',
    party: [],
    reps: []
  }





  filterSenatorsByName() {

      return Senators.filter( (human) => { return human.person.name.match(this.state.name) } )

  }


    renderSenators() {


        return this.filterSenatorsByName().map(senator => (
            <div>{senator.person.firstname} {senator.person.lastname} {senator.state} {senator.phone} {senator.party} {senator.website}</div>


        ))
    }


  render() {
    return (
      <div>
        <h1>Senators</h1>
        <form>
          <div>
            <input type="search" placeholder="Filter by Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
          </div>
          <div>
            <input type="text" />
          </div>
        </form>
        <div>
        {this.renderSenators()}
        </div>

      </div>
    )
  }
}

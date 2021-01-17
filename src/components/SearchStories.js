import React, { Component } from 'react'
import ButtonInline from './ButtonInline'
import { connect } from 'react-redux'
import { doFetchStories } from '../actions/story'

const applyQueryState = query =>  () => ({
  query
})

class SearchStories extends Component {
  state = {
    query: ''
  }

  onChange = (event) => this.setState(applyQueryState(this.target.value))

  onSubmit = (event) => {
    const { query } = this.state
    if(query) {
      this.props.onFetchStories(query)
      this.setState(applyQueryState(''))
    }
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          type="text"
          value={this.state.query}
          onChange={this.onChange}/>
          <button type="submit">
            Search
          </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchStories: query => dispatch(doFetchStories(query))
})

export default connect(null, mapDispatchToProps)(SearchStories)
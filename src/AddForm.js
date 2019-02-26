import React, { Component } from 'react'

class AddForm extends Component {

  state = {
    content: '',
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      content: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add to your To Do list</label>
          <input type="text" value={this.state.content} onChange={this.handleChange} />
        </form>
      </div>
    )
  }

}

export default AddForm;

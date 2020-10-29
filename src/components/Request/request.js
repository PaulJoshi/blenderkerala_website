import React from "react"
import "./request.css"

class Request extends React.Component {

  state = {
    name: "",
    email: "",
    description: "",
    budget: "",
    deadline: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`We have received your request ${this.state.name}!`)
  }

  render() {
    return <div className='home' style={{height: "100vh"}}>
      <section className="heading-area">
        <h2 request-heading>Request Work</h2>
        <p request-heading-text>You can submit a request to get your work done here</p>
        <hr/>
      </section>
      <section className="form-area">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="requests-form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="requests-form" value="request" />
          <label className="request-label">
            Name
            <input
            className="request-input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            />
          </label>
          <label className="request-label">
            Email ID
            <input
            className="request-input"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            />
          </label>
          <label className="request-label">
            Request Description - Briefly describe the work you want to get done
            <textarea
            className="request-input"
            name="description"
            id="description"
            rows="10"
            value={this.state.description}
            onChange={this.handleInputChange}
            />
          </label>
          <label className="request-label">
            Estimated Budget
            <input
            className="request-input"
            type="text"
            name="budget"
            value={this.state.budget}
            onChange={this.handleInputChange}
            />
          </label>
          <label className="request-label">
            Deadline (If any)
            <input
            className="request-input"
            type="date"
            name="deadline"
            value={this.state.deadline}
            onChange={this.handleInputChange}
            />
          </label>
          <button
          className="request-button"
          type="submit">Submit</button>
        </form>
      </section>
    </div>
  }
}

export default Request;
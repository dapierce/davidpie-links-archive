import { Component } from "react"

class Greeting extends Component {
  constructor(props) {
    super(props)
    let a = Math.floor(Math.random() * Math.floor(4) + 1)

    switch (a) {
      case 1:
        this.state = {
          greeting: "It's nice to see you!",
        }
        break
      case 2:
        this.state = {
          greeting: "Come and take a look!",
        }
        break
      case 3:
        this.state = {
          greeting: "Hi! How's it going?",
        }
        break
      case 4:
      default:
        this.state = {
          greeting: "Welcome to my portfolio!",
        }
        break
    }
  }

  render() {
    return this.state.greeting
  }
}

export default Greeting

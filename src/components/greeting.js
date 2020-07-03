import { Component } from "react"

class Greeting extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let a = Math.floor(Math.random() * Math.floor(4) + 1)
    console.log(a)

    switch (a) {
      case 1:
        this.setState({
          greeting: "It's nice to see you!",
        })
        break
      case 2:
        this.setState({
          greeting: "Come and take a look!",
        })
        break
      case 3:
        this.setState({
          greeting: "Hi! How's it going?",
        })
        break
      case 4:
      default:
        this.setState({
          greeting: "Welcome to my portfolio!",
        })
        break
    }
  }
  render() {
    return this.state.greeting
  }
}

export default Greeting

import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imageUrl: headsUrl, headsCount: 0, tailsCount: 0}

  tossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    let tossImg = ''
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount

    if (tossResult === 0) {
      tossImg = headsUrl
      updatedHeadsCount += 1
    } else {
      tossImg = tailsUrl
      updatedTailsCount += 1
    }

    this.setState({
      imageUrl: tossImg,
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {imageUrl, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="side-heading">Heads (or) Tails</p>
          <img className="coin-image" src={imageUrl} alt="toss result" />
          <button onClick={this.tossCoin} type="button" className="toss-btn">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

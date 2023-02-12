import {Component} from 'react'
import CapitalItem from '../CapitalaItem'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    id: countryAndCapitalsList[0].id,
    countryName: countryAndCapitalsList[0].country,
  }

  selectCapital = event => {
    const filteredList = countryAndCapitalsList.filter(
      each => each.id === event.target.value,
    )
    this.setState({
      countryName: filteredList[0].country,
      id: filteredList[0].id,
    })
  }

  render() {
    const {countryName, id} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capital-container">
            <select
              id="capital"
              className="form-control"
              value={id}
              onChange={this.selectCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <CapitalItem
                  capitalDetails={eachCapital}
                  key={eachCapital.id}
                />
              ))}
            </select>
            <label htmlFor="capital">is capital of which country?</label>
          </div>
          <p className="country-name">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

import React from 'react'
import './Header.css'
import '../../assets/css/main.css'
import '../../assets/css/color.css'
import { Link } from 'react-router-dom'

export class Header extends React.Component {
  render() {
    return (
      <div className="row bg-white py-4 ml-0 mr-0 sticky-top headercmp-wrapper">
        <div className="container">
          <div className="d-flex flex-row justify-content-between align-items-center px-3">
            <div className="headercmp-brand">
              <Link to="">
                hepsiburada
              </Link>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div>
                <span className="vote-link">Link</span>
                <span className="vote-name">
                  VOTE
                </span>
                <span className="vote-challenge">
                   Challenge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

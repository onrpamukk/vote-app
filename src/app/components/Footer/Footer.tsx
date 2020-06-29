import React from 'react'
import './Footer.css'
import '../../assets/css/main.css';
import '../../assets/css/color.css'

export class Footer extends React.Component {
  render() {
    return (
      <div className="row bg-white py-3 ml-0 mr-0 fixed-bottom b-shadow">
        <div className="container px-3">
          <div className="footercmp-info">
            <h6>
              Copyright All Reserved 2020
            </h6>
          </div>
        </div>
      </div>
    )
  }
}

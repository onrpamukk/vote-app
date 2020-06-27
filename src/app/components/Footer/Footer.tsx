import React from 'react'
import './Footer.css'
import '../../assets/css/main.css';
import '../../assets/css/color.css'
import { Translate, TRANSLATE_REFS } from '../../translation'

export class Footer extends React.Component {
  render() {
    return (
      <div className="row bg-white py-3 ml-0 mr-0 fixed-bottom">
        <div className="container px-3">
          <div className="footercmp-info">
            <h6>
              <Translate tKey={TRANSLATE_REFS.t_APP.t_FOOTER_INFO} />
            </h6>
          </div>
        </div>
      </div>
    )
  }
}

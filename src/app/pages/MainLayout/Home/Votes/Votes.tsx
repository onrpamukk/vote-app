import React from 'react';
import './Votes.css'
import { Link } from 'react-router-dom';

export class Votes extends React.Component {

    render() {

        return (
            <div className="d-flex flex-row justify-content-center mt-5">
                <div className="col-md-3 col-sm-3">
                    <Link to="/new-vote" className="d-flex flex-row createvotecmp-container">
                        <div className="createvotecmp-plus">
                            <img src={require("../../../../assets/icons/plus.svg")} alt="" />
                        </div>
                        <div className="createvotecmp-title ml-2 mr-5">
                            <h4>
                                Submit a link
                            </h4>
                        </div>
                    </Link>
                    <hr className="solid"></hr>
                </div>
            </div>
        )
    }
}

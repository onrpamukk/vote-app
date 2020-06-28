import React from 'react';
import './Votes.css'
import { Link } from 'react-router-dom';

import {
    vote as VoteList
} from '../../../../components/VoteList'
import { RootState } from '../../../../store/reducers';
import { RootActions } from '../../../../store/types/_root';
import { voteId } from '../../../../store/interfaces';
import { toggleVote } from '../../../../store/actions/actionVotes';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'


const mapStateToProps = ({ vote }: RootState) => ({ vote })
const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    toggleVote: (id: voteId) => dispatch(toggleVote(id))
})

class Votes extends React.Component<any, any> {



    render() {
        const {
            vote: { votes }
        } = this.props
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
                   <div>
                   {
                        votes.map((vote:any) => (
                            <VoteList
                                key={vote.id}
                                voteName={vote.voteName}
                                voteLink={vote.voteLink}
                                done={vote.done}
                            />
                        ))
                    }
                   </div>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Votes)

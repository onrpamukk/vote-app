import React from 'react';
import './Votes.css'
import { Link } from 'react-router-dom';

import {
    vote as VoteList
} from '../../../../components/VoteList'
import { RootState } from '../../../../store/reducers';
import { RootActions } from '../../../../store/types/_root';
import { voteId } from '../../../../store/interfaces';
import { toggleVote, deleteVote, incrementVote, decrementVote } from '../../../../store/actions/actionVotes';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { Footer } from '../../../../components/Footer';
import { Header } from '../../../../components/Header';
import { TMService } from '../../../../services/toaster-message.service';




const mapStateToProps = ({ vote }: RootState) => ({ vote })

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    toggleVote: (id: voteId) => dispatch(toggleVote(id)),
    incrementVote: (id: voteId) => dispatch(incrementVote(id)),
    decrementVote: (id: voteId) => dispatch(decrementVote(id)),
    deleteVote: (id: voteId) => dispatch(deleteVote(id))
})



interface ISTATE {
    visible: number
}



class Votes extends React.Component<any, ISTATE> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: 5
        };
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore = () => {
        this.setState((old) => {
            return {
                visible: old.visible + 5
            }
        })
    }

    render() {
        const { vote: { votes }, deleteVote, incrementVote, decrementVote } = this.props;
        console.log(votes);

        return (
            <div className="homecmp-wrapper">
                <Header />
                <div className="d-flex flex-row justify-content-center mt-5">
                    <div className="col-lg-3 col-md-3 col-sm-3">
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
                        <div className="votecmp-container">
                            {
                                votes.slice(0, this.state.visible).map((vote: any) => (
                                    <VoteList
                                        key={vote.id}
                                        votePoints={vote.votePoints}
                                        voteName={vote.voteName}
                                        voteLink={vote.voteLink}
                                        onDelete={() => deleteVote(vote.id) ? TMService.showSuccessMessage(vote.voteName, "removed") : ""}
                                        onIncrement={() => incrementVote(vote.id)}
                                        onDecrement={() => decrementVote(vote.id)}
                                    />
                                ))
                            }
                            {
                                votes.length === 0 && <div className="alert alert-danger">Please add new vote!</div>
                            }
                        </div>
                        <div className="d-flex flex-row justify-content-center mt-4">
                            <button className="btn btn-warning text-white" onClick={this.loadMore}>Load more</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Votes)

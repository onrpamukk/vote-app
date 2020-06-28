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
import { paging as Pagination } from '../../../../components/Pagination'
import { AMService } from '../../../../services/approval-modal.service';




const mapStateToProps = ({ vote }: RootState) => ({ vote })
const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    toggleVote: (id: voteId) => dispatch(toggleVote(id)),
    incrementVote: (id: voteId) => dispatch(incrementVote(id)),
    decrementVote: (id: voteId) => dispatch(decrementVote(id)),
    deleteVote: (id: voteId) => dispatch(deleteVote(id))
})



interface IPROPS {
    postsPerPage:number
    currentPage:number
    votes:any[]
}



class Votes extends React.Component<any, IPROPS> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: 1,
            postsPerPage:5,
            votes:[]
        };
    }
    

    render() {
        const { vote: { votes }, deleteVote, incrementVote, decrementVote,currentPage, postsPerPage, } = this.props;

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = votes.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pagenum => this.setState({ currentPage: pagenum })

        const nextPage = () => this.setState({ currentPage: currentPage + 1  })

        const prevPage = () => this.setState({ currentPage: currentPage - 1  })



        return (
            <div className="homecmp-wrapper">
                <Header />
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
                                votes.map((vote: any) => (
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
                            <Pagination postsPerPage={postsPerPage} totalPosts={votes.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}  />
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

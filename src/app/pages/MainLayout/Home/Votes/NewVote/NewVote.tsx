/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './NewVote.css'
import { Header } from '../../../../../components/Header'
import { Footer } from '../../../../../components/Footer'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../../../../store/reducers';
import { RootActions } from '../../../../../store/types/_root';
import { IRS_VOTES, voteId } from '../../../../../store/interfaces';
import { createVote } from '../../../../../store/actions/actionVotes';



const mapStateToProps = ({ vote }: RootState) => ({ vote })
const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    createVote: (vote: IRS_VOTES) => dispatch(createVote(vote))
})

type TState = {
    [name: string]: string
}

type TProps =
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>

class NewVote extends React.Component<TProps, TState> {
    constructor(props: any) {
        super(props);
        this.handleInputNameChange = this.handleInputNameChange.bind(this);
        this.handleInputLinkChange = this.handleInputLinkChange.bind(this);
        this.state = {
            voteName: '',
            voteLink: ''
        };
    }


    handleInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            voteName: e.target.value
        })
    }

    handleInputLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            voteLink: e.target.value
        })
    }

    handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (this.state.voteName !== '') {
            this.props.createVote({
                id: uuidv4(),
                voteName: this.state.voteName,
                voteLink: this.state.voteLink
            })
            this.setState({
                voteName: '',
                voteLink: ''
            })
        }
    }


    render() {
        const { voteName, voteLink } = this.state;
        return (
            <div>
                <Header />
                <div className="d-flex flex-row justify-content-center mt-5">
                    <div className="col-md-3">
                        <Link to="/" className="d-flex flex-row vote-back mb-4">
                            <div className="back-icon">

                            </div>
                            <span className="ml-2 text-dark">
                                Return to list
                            </span>
                        </Link>
                        <form onSubmit={this.handleSubmitForm} autoComplete="off">
                            <div className="form-group">
                                <h3>
                                    Add New Link
                                </h3>
                            </div>
                            <div className="form-group">
                                <label htmlFor="linkName">Link name</label>
                                <input type="text" className="form-control form-control-lg" placeholder="Link name" value={voteName} onChange={this.handleInputNameChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="linkUrl">Link URL</label>
                                <input type="text" className="form-control form-control-lg" placeholder="http://abc.xyz" value={voteLink} onChange={this.handleInputLinkChange} />
                            </div>
                            <div className="form-row align-items-center m-0 justify-content-end">
                                <button type="submit" className="btn btn-dark btn-lg" style={{ borderRadius: "10px", padding: ".5rem 2rem" }} onClick={this.handleSubmitForm}>
                                    <a>
                                        ADD
                                    </a>
                                </button>
                            </div>
                        </form>
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
)(NewVote)


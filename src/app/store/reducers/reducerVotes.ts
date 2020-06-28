import { VoteState, VoteActionTypes } from '../interfaces/irs_votes.interface';
import { CREATE_VOTE, TOGGLE_VOTE, DELETE_VOTE, INCREMENT_VOTE, DECREMENT_VOTE } from '../types/votes.types';


const initialState: VoteState = {
    votes: []
}

export default function (state = initialState, action: VoteActionTypes): VoteState {
    switch (action.type) {
        case CREATE_VOTE:
            return {
                ...state,
                votes: [
                    action.payload,
                    ...state.votes
                ]
            }

        case TOGGLE_VOTE:
            return {
                ...state,
                votes: state.votes.map(vote => (
                    vote.id === action.payload
                        ? { ...vote, done: !vote.done }
                        : vote
                ))
            }

        case DELETE_VOTE:
            return {
                ...state,
                votes: state.votes.filter(({ id }) => id !== action.payload)
            }

        case INCREMENT_VOTE:
            return {
                ...state,
                votes: state.votes.map(vote => (
                    vote.id === action.payload ? { ...vote, votePoints: vote.votePoints + 1 } : vote
                ))
            }

        case DECREMENT_VOTE:
            return {
                ...state,
                votes: state.votes.map(vote => (
                    vote.id === action.payload ? { ...vote, votePoints: vote.votePoints - 1 } : vote
                ))
            }

        default:
            return state

    }
}

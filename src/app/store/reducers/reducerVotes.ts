import {VoteState, VoteActionTypes } from '../interfaces/irs_votes.interface';
import { CREATE_VOTE, TOGGLE_VOTE } from '../types/votes.types';


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

        default:
            return state

    }
}

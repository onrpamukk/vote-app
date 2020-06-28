import {VoteState, VoteActionTypes } from '../interfaces/irs_votes.interface';
import { CREATE_VOTE } from '../types/votes.types';


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

        default:
            return state

    }
}

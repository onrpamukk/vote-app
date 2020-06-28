import { VoteActionTypes, IRS_VOTES, voteId } from '../interfaces';
import { CREATE_VOTE, TOGGLE_VOTE } from '../types/votes.types';


export function createVote (newVote: IRS_VOTES): VoteActionTypes {
    return {
      type: CREATE_VOTE,
      payload: newVote
    }
  }

  export function toggleVote (id: voteId): VoteActionTypes {
    return {
      type: TOGGLE_VOTE,
      payload: id
    }
  }
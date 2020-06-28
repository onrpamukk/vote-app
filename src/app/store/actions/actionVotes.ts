import { VoteActionTypes, IRS_VOTES, voteId } from '../interfaces';
import { CREATE_VOTE, TOGGLE_VOTE, DELETE_VOTE, INCREMENT_VOTE, DECREMENT_VOTE } from '../types/votes.types';


export function createVote(newVote: IRS_VOTES): VoteActionTypes {
  return {
    type: CREATE_VOTE,
    payload: newVote
  }
}

export function toggleVote(id: voteId): VoteActionTypes {
  return {
    type: TOGGLE_VOTE,
    payload: id
  }
}

export function incrementVote(id: voteId): VoteActionTypes {
  return {
    type: INCREMENT_VOTE,
    payload: id
  }
}

export function decrementVote(id: voteId): VoteActionTypes {
  return {
    type: DECREMENT_VOTE,
    payload: id
  }
}

export function deleteVote(id: voteId): VoteActionTypes {
  return {
    type: DELETE_VOTE,
    payload: id
  }
}
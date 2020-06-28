import { CREATE_VOTE, TOGGLE_VOTE, DELETE_VOTE, INCREMENT_VOTE, DECREMENT_VOTE } from "../types/votes.types";

export type voteId = string | number
export type votePoint = number

export interface IRS_VOTES {
  id: voteId;
  voteName: any;
  voteLink: any;
  votePoints: votePoint;
  done?: boolean
}

export interface VoteState {
  votes: IRS_VOTES[]
}

interface CreateVoteAction {
  type: typeof CREATE_VOTE
  payload: IRS_VOTES
}

interface ToggleVoteAction {
  type: typeof TOGGLE_VOTE
  payload: voteId
}
interface DeleteVoteAction {
  type: typeof DELETE_VOTE
  payload: voteId
}

interface IncrementVoteAction {
  type: typeof INCREMENT_VOTE
  payload: voteId
}

interface DecrementVoteAction {
  type: typeof DECREMENT_VOTE
  payload: voteId
}

export type VoteActionTypes =
  CreateVoteAction |
  ToggleVoteAction |
  DeleteVoteAction |
  IncrementVoteAction |
  DecrementVoteAction

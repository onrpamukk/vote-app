import { CREATE_VOTE, TOGGLE_VOTE } from "../types/votes.types";

export type voteId = string | number

export interface IRS_VOTES {
        id: voteId;
        voteName:string;
        voteLink:string;
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

export type VoteActionTypes =
CreateVoteAction |
ToggleVoteAction

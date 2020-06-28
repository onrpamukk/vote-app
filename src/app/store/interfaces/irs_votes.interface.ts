import { CREATE_VOTE } from "../types/votes.types";

export type voteId = string | number

export interface IRS_VOTES {
        id: voteId;
        voteName:string;
        voteLink:string;
}

export interface VoteState {
    votes: IRS_VOTES[]
}

interface CreateVoteAction {
    type: typeof CREATE_VOTE
    payload: IRS_VOTES
}

export type VoteActionTypes =
CreateVoteAction 

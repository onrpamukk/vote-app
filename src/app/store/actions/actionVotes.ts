import { VoteActionTypes, IRS_VOTES } from '../interfaces';
import { CREATE_VOTE } from '../types/votes.types';


export function createVote (newVote: IRS_VOTES): VoteActionTypes {
    return {
      type: CREATE_VOTE,
      payload: newVote
    }
  }

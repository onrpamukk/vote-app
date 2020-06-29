import React from 'react';
import './VoteList.css';

interface IPROPS {
    key: any
    done?: boolean
    voteName: string
    voteLink: string
    votePoints: number
    onDelete: () => any
    onIncrement: () => any
    onDecrement: () => any
}

const vote: React.FC<IPROPS> = props => {
    const { votePoints, voteName, voteLink, onDelete, onIncrement, onDecrement } = props

    return (
        <div className="votecmp-wrapper mb-2">
            <div className="votecmp-point-container">
                <span>
                    {votePoints}
                </span>
                <span>
                    POINTS
                </span>
            </div>
            <div className="votecmp-right-container ml-2 w-50">
                <div className="votecmp-name">
                    {voteName}
                </div>
                <div className="votecmp-link">
                    {voteLink}
                </div>
                <div className="votecmp-buttons">
                    <div className="votecmp-buttons-up" onClick={() => onIncrement()}>
                        <button type="button" className="btn-up">
                            Up Vote
                        </button>
                    </div>
                    <div className="votecmp-buttons-down" onClick={() => onDecrement()}>
                        <button type="button" className="btn-down">
                            Down Vote
                        </button>
                    </div>
                </div>
            </div>
            <div className="votecmp-delete" onClick={() => onDelete()}>
                <img src={require("../../assets/icons/remove.svg")} alt="" />
            </div>
        </div>
    )
}

export default vote

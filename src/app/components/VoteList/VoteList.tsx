import React from 'react'

interface IProps {
    key: any
    done?: boolean
    voteName: string
    voteLink: string
}

const vote: React.FC<IProps> = props => {
    const { voteName, voteLink, done } = props

    return (
        <div className="container bg-danger">
            <span>{voteName} - {voteLink}</span>
        </div>
    )
}

export default vote

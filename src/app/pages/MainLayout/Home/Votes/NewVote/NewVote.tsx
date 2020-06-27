import React from 'react'
import './NewVote.css'
import { Header } from '../../../../../components/Header'
import { Footer } from '../../../../../components/Footer'

export class NewVote extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="d-flex flex-row justify-content-center mt-5">
                    create vote
            </div>
                <Footer />
            </div>
        )
    }
}

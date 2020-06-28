import React from 'react';
import './HomePage.css';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Votes } from './Votes';



export class HomePage extends React.Component{

    render() {

        return (
            <div className="homecmp-wrapper">
                <Header />
                <Votes />
                <Footer />
            </div>
        )
    }
}

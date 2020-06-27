import React from 'react';
import { StoreConnect } from '../../../bases/StoreConnect';
import './HomePage.css';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Votes } from './Votes';



export class HomePage extends StoreConnect<any, any> {

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

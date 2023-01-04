import React from 'react'
import Banner from '../../components/Banner';
import Nav from '../../components/Nav/Nav';
import Row from '../../components/Row/Row';
import requests from '../../helpers/requests';

export const HomeScreen = () => {
    return (
        <div className='home-screen'>
            <Nav />
            <Banner></Banner>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLarge
            ></Row>
            <Row title="Top Rated" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}


import React from 'react';
import MyNavbar from '../components/MyNavbar'
import News from '../components/News';
import HeaderCarousel from '../components/HeaderCarousel'
import CardNews from '../components/CardNews';
import CardNewsSecond from '../components/CardNewsSecond';
import SendOnline from '../components/SendOnline';
import TabContent2 from '../components/TabContent';
import Websites from '../components/Websites';
import Footer from '../components/Footer';
import LeftNews from '../components/LeftNews';
import RightNews from '../components/RightNews';
import SimpleSlider from '../components/ReactSlick';

const Home = () => {
    return (
        <>
            <MyNavbar />
            <News />
            <HeaderCarousel/>
            <CardNews />
            <CardNewsSecond />
            <SendOnline />
            <TabContent2 />
            <Websites />
            
            <div className="news">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <LeftNews />
                        </div>
                        <div className="col-lg-4 mt-3 mt-lg-0">
                            <RightNews />
                        </div>
                    </div>
                </div>
            </div>

            <SimpleSlider />

            <Footer />
        </>
    )
}

export default Home

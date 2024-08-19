// import React from 'react'
import FreqQuestion from './FreqQuestion'
import Hero from './Hero'
import Navbar from '../common/Navigation/Navbar'
import Testimonials from './Testimonials'
import TodaysEvent from './TodaysEvent'
import UpcomingEvent from './UpcomingEvent'
import SecureSpot from './SecureSpot'
// import Footer from '../common/Footer/Footer'



function HomeMaster() {
    return (
        <>
            <Navbar />
            <Hero />
            <TodaysEvent />
            <UpcomingEvent />
            <SecureSpot />
            <Testimonials />
            <FreqQuestion />

        </>
    )
}

export default HomeMaster
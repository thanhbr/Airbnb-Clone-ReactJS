import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className="home_section">
                <Card 
                    src='https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=320'
                    title='Online Experiences'
                    description='Unique activities we can do together, led by a world of hosts.'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320'
                    title='Unique stays'
                    description='And more these spaces are more than just a place to sleep.    '
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320'
                    title='Entire homes'
                    description='Comfortable private places, with room for friends or family.'
                />
            </div>
            <div className="home_section">
                <Card 
                        src='https://a0.muscache.com/im/pictures/e307b6bb-4ffa-4855-a0fb-8f58e45c2c6e.jpg?aki_policy=x_large'
                        title='Sky View Apartment in Hanoi Center'
                        description='Our apartment (6) at Louis- 25 Truc Bach street where you can see amazing view and service (fresh air, interior, security, foreigner community, restaurants,.. And silent when you come to my apartments) Thanks! And welcome.'
                        price='$20 / night'
                />
                <Card 
                        src='https://a0.muscache.com/im/pictures/49938ebf-22e5-4fc8-a050-b2e6fd08d7b8.jpg?aki_policy=x_large'
                        title='Langmandi -Beca Room, Pretty House in Centre Hanoi'
                        description='Lovely , pure and clear. Sunny room full of sunshine, swimmers are swimming goldfish are iridescent. Rustic kitchen corner full of flavor inspiration, a melodious music relief. Relaxing bathroom by the window that brings quietness and freshness.'
                        price='$11 / night'
                />
                <Card 
                        src='https://a0.muscache.com/im/pictures/d13fb670-f7a2-468f-a26b-8168c6abcab5.jpg?aki_policy=x_large'
                        title='Penthouse in OldQuarter 360° ViewJacuzzi Netflix'
                        description='Radish house is a fresh, comfortable studio on 3rd floor of a colonist building next to Opera house, where you can enjoy a cup of coffee in the morning at the big sunny green window or good night tea and watching the real life of local.'
                        price='$60 / night'
                />
            </div>
        </div>
    )
}

export default Home

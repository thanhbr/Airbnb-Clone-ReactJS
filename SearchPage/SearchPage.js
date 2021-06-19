import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>300+ stays</p>
                <h1>Stays nearby</h1>
                <Button varitant="outlined">Cancellation Flexibility</Button>
                <Button varitant="outlined">Type of place</Button>
                <Button varitant="outlined">Price</Button>
                <Button varitant="outlined">Rooms and beds</Button>
                <Button varitant="outlined">More filters</Button>
                <SearchResult
                    img='https://a0.muscache.com/im/pictures/d13259ec-bf41-406b-9330-1a7b27e23168.jpg?aki_policy=x_large'
                    location='Quận 1, Hồ Chí Minh, Vietnam'
                    title='BenThanh 3 minutes walk - Private studio+Balcony2' 
                    description='2 guests · Studio · 1 bed · 1 bath' 
                    star={4.88} 
                    price='$16 / night' 
                    total='$48 total'
                />
                <SearchResult
                    img='https://a0.muscache.com/im/pictures/1e58e656-5c02-4a9b-90e4-2d2ffba94578.jpg?aki_policy=x_large'
                    location='Quận 4, Hồ Chí Minh, Vietnam'
                    title='⭐ FREE RoOFTOP P00L+GyM⭐ ❤️MoDeRn & WaRm STUDIO❤️' 
                    description='3 guests · Studio · 2 beds · 1 bath' 
                    star={4.79} 
                    price='$23 / night' 
                    total='$115 total'
                />
                <SearchResult
                    img='https://a0.muscache.com/im/pictures/1cc8f903-f540-48b0-b2c5-309f35dce9f0.jpg?aki_policy=x_large'
                    location='Quận 1, Hồ Chí Minh, Vietnam'
                    title='Hoi An Studio | Bathtub | 5★ Views by CIRCADIAN' 
                    description='2 guests · 1 bedroom · 1 bed · 1 bath' 
                    star={4.86} 
                    price='$26 / night' 
                    total='$104 total'
                />
                <SearchResult
                    img='https://a0.muscache.com/im/pictures/d3c0f26b-2e37-40eb-a1ea-100354173c93.jpg?aki_policy=x_large'
                    location='Quận 2, Hồ Chí Minh, Vietnam'
                    title='XIHOUSE-PREMIUM STUDIO APT-CITY CENTER-FREE POOL' 
                    description='3 guests · Studio · 1 bed · 1 bath' 
                    star={4.90} 
                    price='$35 / night' 
                    total='$105 total'
                />
                <SearchResult
                    img='https://a0.muscache.com/im/pictures/9c51b7dc-c252-4de5-b232-a8036e555f7f.jpg?aki_policy=x_large'
                    location='Quận 1, Hồ Chí Minh, Vietnam'
                    title='New & Top Location 1BR | HoLo Alex Saigon 7B-6B' 
                    description='2 guests · 1 bedroom · 1 bed · 1 bath' 
                    star={4.69} 
                    price='$23 / night' 
                    total='$69 total'
                />
            </div>  
        </div>
    )
}

export default SearchPage

import React from 'react'
import useFetch from '../../hooks/useFetch.js'
import './Featured.css'

const Featured = () => {

    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=Kathmandu,Bhaktapur,Lalitpur"
    );

    console.log(data)

    return (
        <div className='featured'>
            {loading ? ("Loading...") : (
                <>
                    <div className="featuredItem">
                        <img
                            src='https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://media.iceportal.com/126980/photos/66170394_XL/Dwarika%27s-Hotel-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto'
                            alt='Pashupatinath'
                            className='featuredImage'
                        />
                        <div className="featuredTitles">
                            <h1>Kathmandu</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/5b/27/b6/hotel-yechu.jpg?w=900&h=-1&s=1'
                            alt='Bhaktapur'
                            className='featuredImage'
                        />
                        <div className="featuredTitles">
                            <h1>Bhaktapur</h1>
                            <h2>{data[1]} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            src='https://content.r9cdn.net/rimg/himg/46/ba/2c/hotelsdotcom-478796-b1f97ca5_w-768178.jpg?width=335&height=268&crop=true'
                            alt='Patan'
                            className='featuredImage'
                        />
                        <div className="featuredTitles">
                            <h1>Lalitpur</h1>
                            <h2>{data[2]} Properties</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Featured
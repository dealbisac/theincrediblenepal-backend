import React, { useState } from 'react'
import './Hotel.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch.js'
import { useLocation } from 'react-router-dom'

const Hotel = () => {

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(
    `/hotels/find/${id}`
  );

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading..."
      ) : (
        <div className="hotelContainer">
          {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImage" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />

          </div>}
          <div className="hotelWrapper">
            <button className="hotelBookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent Location - {data.distance}km from Kathmandu
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi and complementary breakfast.
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, index) => (
                <div className="hotelImageWrapper">
                  <img
                    onClick={() => handleOpen(index)}
                    src={photo}
                    alt="hotel photos"
                    className="hotelImage" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.description}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a sunrise view!</h1>
                <span>
                  Located in the quiet area. You can see the sunrise from the window. The apartment is perfect for a sunrise view.
                </span>
                <h2>
                  <b>$545</b> (3 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>)}
    </div>
  )
}

export default Hotel
import React, {useState} from 'react';
import "./Home.css";
import rvImg1 from "../assets/u1.png"
import rvImg2 from "../assets/u2.png"
import rvImg3 from "../assets/u3.png"
import rvImg4 from "../assets/u4.png"
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import CustomMap from './CustomMap';
import { APIProvider } from "@vis.gl/react-google-maps";
import { useNavigate, Outlet } from 'react-router-dom'; 
import { CgClose } from "react-icons/cg";


const testimonials = [
  {name: "Nguyen, Jane", review: "I had the crepe filled with chestnut butter and it was like tasting heaven.", img: rvImg1},
  {name: "Esther Howard", review: "I had the crepe filled with chestnut butter and it was like tasting heaven.", img: rvImg2},
  {name: "Jerome Bell", review: "All crepe selections, plenty of variety for a meal or a dessert! ", img: rvImg3},
  {name: "Jenny Wilson", review: "This place took it to a whole new level. And I love it <3", img: rvImg4},
]

const Home = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate('/order');
    setOpenPopup(true);
  };
  const handleCloseModal = () => {
    navigate('/');
    setOpenPopup(false);
  }
  
  return (
    <div className=''>
      <section className="hero wide">
        <div className="row">
          <div className="col l-6 hero-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2FQuatre-Crepes%2FProperty%201%3Dh3.png?alt=media&token=0194ba1b-8e24-4035-8870-111234834154" alt="" />
          </div>
          <div className="col l-0-1 l-4 hero-menu">
            <h4>CREPES DAY</h4>
            <h1>Savory galettes <br />& sweets</h1>
            <p>Enjoy unique crepes based on French recipes at a classic restaurant on the banks of the Red River, right in the heart of the capital Hanoi.
            </p>
            <div className="row hero-circle-row">
              <div className="hero-circle">
                <img src="https://images.unsplash.com/photo-1667902687249-0dfe266a3b2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="hero-circle">
                <img src="https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="hero-circle">
                <img src="https://images.unsplash.com/photo-1582995570162-9dee25247fda?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="wide">
          <div className="row">
            <div className="col l-0-1 l-7">
              <h1>FRENCHIEE-NOUS</h1>
              <p>
              Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od. Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
              <br />
              Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od. Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="about-img">
          <img src="https://cdn.pixabay.com/photo/2025/01/10/08/05/restaurant-9323426_960_720.jpg" alt="" />
        </div>
      </section>
      <section className="order">
        <div className="wide">
        <div className="row">
          <h3 className='col l-12 order-testi'>DINERS SAY ABOUT US</h3>
          <div className='testi-layout row'>
            {testimonials.map(review => (
            <div className="testi-card col l-4" key={review.name}>
                <img src={review.img} className='testi-img'/>
                <div>
                  <div className="testi-star">
                  <div><p className='p1'>{review.name}</p></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                  </div>
                  <div><p className='p0'>{review.review}</p></div>
                </div>
            </div>
            ))}
          </div>
          </div>
        <div className="row order-row">
          <div className="order-img">
            <img src="https://cdn.pixabay.com/photo/2025/01/10/09/07/crepes-9323494_1280.png" alt="" />
          </div>
          <div className="col l-0-7 l-4 hero-menu">
            <h4>ORDER ONLINE</h4>
            <h1>“Paris-outdoors to your home”</h1>
            <p>
            Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od.
            </p>
            <div className="row">
              <button className='btn1 col l-6' onClick={handleOrderClick}>Order Now</button>
            </div>
          </div>
        </div>
        {openPopup ? (
          <div className="modal-container">
            <div className="order-layout">
              <div className="close-icon row">
                <CgClose  onClick={handleCloseModal} style={{cursor: "pointer"}}/>
              </div>
              <Outlet/>
            </div>
          </div>
        ) : ("")}
        </div>
      </section>
      <section className="events">
        <div className="wide">
          <div className="row order-row">
            <div className="col l-0-1 l-4 hero-menu">
              <h4>EVENTS</h4>
              <h1>“Dinning through the night!”</h1>
              <p>
              Lorem ipsum dolor sit amet, consecte tur adipis cing elit, sed do eiusmod tempor incididu nt  Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusm od.
              </p>
              <div className="row">
                 <button className='btn2 col l-6'>Book a Table</button>
              </div>
            </div>
            <div className="order-img">
              <img src="https://cdn.pixabay.com/photo/2016/11/23/13/45/celebration-1852926_960_720.jpg" alt="" id='ev-im1' />
              <img src="https://cdn.pixabay.com/photo/2025/01/10/10/51/crepe-9323695_1280.png" alt="" id='ev-im2'/>
            </div>

          </div>
        </div>
      </section>
      <section className="faq wide faq-wide">
        <div className="row">
          <div className="col  l-0-2 l-8">
            <h3>FAQ</h3>
            <p className='p0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <br />
            <div className="faq-layout">
              <div className="faq-qt row">
                <p className='ques'>Where do you deliver?</p>
                <p className='ans'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <HiOutlineChevronDown className='arr'/>
              </div>
              <div className="faq-qt row">
                <p className='ques'>How long does it take to receive my food order?</p>
                <p className='ans'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <HiOutlineChevronDown className='arr'/>
              </div>
              <div className="faq-qt row">
                <p className='ques'>How much does the delivery cost?</p>
                <p className='ans'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <HiOutlineChevronDown className='arr'/>
              </div>
              <div className="faq-qt row">
                <p className='ques'>How much does the reservation cost?</p>
                <p className='ans'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <HiOutlineChevronDown className='arr'/>
              </div>
              <div className="faq-qt row">
                <p className='ques'>Who can I contact with questions?</p>
                <p className='ans'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <HiOutlineChevronDown className='arr'/>
              </div>
            </div>
          </div>
        </div>    
        <div className="row">
          <div className="col l-0-2 l-8">
            <h3>VISIT US</h3>
            <p className='p0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <br />
            <div className="map">
              <APIProvider apiKey={'AIzaSyDTBdN8scOp2wngX5Eim0IbtpzYHgIUABY'} onLoad={() => console.log('Maps API has loaded.')}>
                <CustomMap />
              </APIProvider>
              <button id='map-btn'>Get Directions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
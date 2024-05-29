import React from 'react';
import { Donatebtn } from '../components/Donatebtn';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import SignUp from './SignUp';
import Login from './Login';
import video from "../components/videos/f.mp4";
import AboutImg from '../utils/img/about-img.jpg';
import ContactImage from '../utils/img/contact-img.jpg';

function Home() {
    return (
        <div className='home-page'>

            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow' style={{
               
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className='container'>
                    <div className="hero__background">
                        <video
                            autoPlay
                            loop
                            muted
                            className="w-100 h-50"
                        >
                            <source src={video} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </header>

            <div className='container my-5'>

                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>
                            At FoodShare Network, we are dedicated to combating food waste and hunger through our innovative food redistribution system. Founded on the belief that no edible food should go to waste while people in our communities are going hungry, we have been working tirelessly to create a more sustainable and equitable food system.
                        </p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <ImageGallery />

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

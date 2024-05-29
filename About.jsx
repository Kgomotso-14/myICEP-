import React from 'react';

import AboutChef1 from '../utils/img/about-chef1.webp';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(../utils/img/img_logo.jpeg)', height: '50vh' }}>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'></h1>
                </div>
            </header>

            <div className='container my-5'>
                <div className='container h-100 d-flex align-items-center font-color-black justify-content-center'>
                    <h1 className='text-dark'>About</h1>
                </div>
                <p>
                    At FoodShare Network, we are dedicated to combating food waste and hunger through our innovative food redistribution system. Founded on the belief that no edible food should go to waste while people in our communities are going hungry, we have been working tirelessly to create a more sustainable and equitable food system.
                </p>
                <p>Through our efforts, we not only reduce food waste and alleviate hunger but also foster a sense of community and solidarity. We believe that everyone deserves access to nutritious food, regardless of their circumstances, and we are proud to play a role in making this vision a reality.

                    Join us in our mission to create a world where no one goes hungry and where surplus food serves a greater purpose. Together, we can make a difference, one meal at a time.
                </p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>
                    FoodShare Network - Fighting Hunger, Reducing Waste, Building Community.
                </p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;

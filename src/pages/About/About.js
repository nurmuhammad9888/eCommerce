import React from 'react'
import aboutImg01 from "../../assets/images/aboutimg01.jpg"
import aboutOrganic from "../../assets/images/aboutimg02.jpg"
import aboutTeam01 from "../../assets/images/aboutcarusel01.jpg"
import aboutTeam02 from "../../assets/images/aboutcarusel02.jpg"
import aboutTeam03 from "../../assets/images/aboutcarusel03.jpg"
import aboutTeam04 from "../../assets/images/aboutcarusel04.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./about.css"
import { Navigation } from 'swiper/modules'

export const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-trusted">
                    <div className="about-trusted-content">
                        <h3 className="about-trusted-title">100% Trusted Organic Food Store</h3>
                        <p className="about-trusted-text">Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae. </p>
                    </div>
                    <img className='about-trusted-img' src={aboutImg01} width={716} height={492} alt="humans" />
                </div>
            </div>
            <div className="about-organic">
                <div className="about-organic-img">
                    <img src={aboutOrganic} alt="humans" />
                </div>
                <div className="about-organic-content">
                    <div className="about-organic-content-text-wrap">
                        <h3 className="about-organic-title">100% Trusted Organic Food Store</h3>
                        <p className="about-organic-text">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. </p>
                    </div>
                    <ul className="about-organic-list">
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">100% Organic food</h4>
                            <p className="about-organic-item-text">100% healthy & Fresh food.</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">Customer Feedback</h4>
                            <p className="about-organic-item-text">Our happy customer</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">Free Shipping</h4>
                            <p className="about-organic-item-text">Free shipping with discount</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">Great Support 24/7</h4>
                            <p className="about-organic-item-text">Instant access to Contact</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">100% Sucure Payment</h4>
                            <p className="about-organic-item-text">We ensure your money is save</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">100% Organic Food</h4>
                            <p className="about-organic-item-text">100% healthy & Fresh food.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="about-deliver">
                    <h3 className="about-deliver-title">We Delivered, You Enjoy Your Order. </h3>
                    <p className="about-deliver-text">Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</p>
                    <ul className="about-deliver-list">
                        <li className="about-deliver-item">
                            <span className='about-deliver-check'>Sed in metus pellentesque.</span>
                        </li>
                        <li className="about-deliver-item">
                            <span className='about-deliver-check'>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</span>
                        </li>
                        <li className="about-deliver-item">
                            <span className='about-deliver-check'>Maecenas ut nunc fringilla erat varius.</span>
                        </li>
                    </ul>
                    <button className='about-deliver-btn'>Shop Now</button>
                    <div className="about-deliver-img"></div>
                </div>
                <div className="about-team">
                    <div className="about-team-content">
                        <h2 className="about-team-title">Our Awesome Team</h2>
                        <p className="about-team-text">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>
                    </div>
                        <ul className="about-team-list">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={4}
                            modules={[Navigation]}
                            navigation
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>    
                                    <li className="about-team-item">
                                        <img src={aboutTeam01} alt="team human" />
                                        <span className='about-team-item-name'>Jenny Wilson</span>
                                        <p className="about-team-item-job">Ceo & Founder</p>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li className="about-team-item">
                                        <img src={aboutTeam02} alt="team human" />
                                        <span className='about-team-item-name'>Jane Cooper</span>
                                        <p className="about-team-item-job">Worker</p>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li className="about-team-item">
                                        <img src={aboutTeam03} alt="team human" />
                                        <span className='about-team-item-name'>Cody Fisher</span>
                                        <p className="about-team-item-job">Security Guard</p>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li className="about-team-item">
                                        <img src={aboutTeam04} alt="team human" />
                                        <span className='about-team-item-name'>Robert Fox</span>
                                        <p className="about-team-item-job">Senior Farmer Manager</p>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>    
                                    <li className="about-team-item">
                                        <img src={aboutTeam01} alt="team human" />
                                        <span className='about-team-item-name'>Jenny Wilson</span>
                                        <p className="about-team-item-job">Ceo & Founder</p>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li className="about-team-item">
                                        <img src={aboutTeam02} alt="team human" />
                                        <span className='about-team-item-name'>Jane Cooper</span>
                                        <p className="about-team-item-job">Worker</p>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li className="about-team-item">
                                        <img src={aboutTeam03} alt="team human" />
                                        <span className='about-team-item-name'>Cody Fisher</span>
                                        <p className="about-team-item-job">Security Guard</p>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li className="about-team-item">
                                        <img src={aboutTeam04} alt="team human" />
                                        <span className='about-team-item-name'>Robert Fox</span>
                                        <p className="about-team-item-job">Senior Farmer Manager</p>
                                    </li>
                                </SwiperSlide>
                            </Swiper>
                        </ul>
                </div>
            </div>
        </div>
    )
}

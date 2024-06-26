import React, { useEffect } from 'react'
import { gsap } from "gsap";
import './swipecard.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper/modules';
import 'swiper/css/bundle'
import { EffectFlip } from 'swiper/modules';
import { EffectCreative } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';

function Swipecard() {

    // useEffect(() => {
    //     let boxdiv = document.querySelectorAll('.box')
    //     let prev = document.querySelector('.prevbtn')
    //     let next = document.querySelector('.nextbtn')
    //     next.addEventListener('click',()=>{
    //         boxdiv.forEach((item,index) => {
    //         item.style.rotate='5deg'
    //     });
    //     })
    //     prev.addEventListener('click',()=>{
    //         boxdiv.forEach((item,index) => {
    //         item.style.rotate='-5deg'
    //     });
    //     })
    //   return () => {
      
    //   }
    // }, [])
    



  return (
    <>
    <div className='Bg-container'>
        <Swiper className='my-swiper'
         modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectFlip,EffectCreative,EffectCards]}
        navigation={{
            nextEl:'.nextbtn',
            prevEl:'.prevbtn',
        }}
        // autoplay={{
        //     delay:2000,
        // }}
        speed={750}
        parallax={true}
        shortSwipes={true}
        spaceBetween={50}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        slidesPerView={1}
        pagination={{ 
            dynamicBullets:true,
            dynamicMainBullets:1,
            clickable: true }}
        // effect='cards'
        // cardsEffect={{
        //     perSlideRotate:10,
        //     slideShadows:false
        // }}
        effect='creative'
        creativeEffect={{
            perspective:true,
            prev:{
                translate:['-100%','100%', 0],
                rotate:[45,0,-65]
            },
           next:{
                translate:['100%','100%', 0],
                rotate:[-65,0,45]
            },
        }}
        >
            <SwiperSlide className="slider"><div className="box">red</div></SwiperSlide>
            <SwiperSlide className="slider"><div className="box">violet</div></SwiperSlide>
            <SwiperSlide className="slider"><div className="box">orange</div></SwiperSlide>
            <SwiperSlide className="slider"><div className="box">aqua</div></SwiperSlide>
            <SwiperSlide className="slider"><div className="box">pink</div></SwiperSlide>
            <div className="prevbtn">p</div>
            <div className="nextbtn">n</div>
        </Swiper>
    </div>
    </>
  )
}

export default Swipecard
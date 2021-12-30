import React, { useEffect } from 'react';

const Homee = () => {
  useEffect(() => {
    new Swiper('.books-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);
  return (
    <>
      <section class="home" id="home">
        <div class="row">
          <div class="content">
            <h3>upto 75% off</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid
              ex minima at!
            </p>
            <a href="#" class="btn">
              shop now
            </a>
          </div>

          <div class="swiper books-slider">
            <div class="swiper-wrapper">
              <a href="#" class="swiper-slide">
                <img src="image/book-1.png" alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src="image/book-2.png" alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src="image/book-3.png" alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src="image/book-4.png" alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src="image/book-5.png" alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src="image/book-6.png" alt="" />
              </a>
            </div>
            <img src="image/stand.png" class="stand" alt="" />
          </div>
        </div>
      </section>
      <section class="icons-container">
        <div class="icons">
          <i class="fas fa-shipping-fast"></i>
          <div class="content">
            <h3>free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>

        <div class="icons">
          <i class="fas fa-lock"></i>
          <div class="content">
            <h3>secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>

        <div class="icons">
          <i class="fas fa-redo-alt"></i>
          <div class="content">
            <h3>easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>

        <div class="icons">
          <i class="fas fa-headset"></i>
          <div class="content">
            <h3>24/7 support</h3>
            <p>call us anytime</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homee;

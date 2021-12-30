import React, { useEffect } from 'react';

const Review = () => {
  useEffect(() => {
    new Swiper('.reviews-slider', {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
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
    <div>
      <section class="reviews" id="reviews">
        <h1 class="heading">
          {' '}
          <span>client's reviews</span>{' '}
        </h1>

        <div class="swiper reviews-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide box">
              <img src="image/pic-1.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div class="swiper-slide box">
              <img src="image/pic-2.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div class="swiper-slide box">
              <img src="image/pic-3.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div class="swiper-slide box">
              <img src="image/pic-4.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div class="swiper-slide box">
              <img src="image/pic-5.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div class="swiper-slide box">
              <img src="image/pic-6.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;

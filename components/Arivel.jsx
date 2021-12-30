import React, { useEffect } from 'react';

const Arivel = () => {
  useEffect(() => {
    new Swiper('.arrivals-slider', {
      spaceBetween: 10,
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
      <section class="arrivals" id="arrivals">
        <h1 class="heading">
          {' '}
          <span>new arrivals</span>{' '}
        </h1>

        <div class="swiper arrivals-slider">
          <div class="swiper-wrapper">
            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-1.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-2.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-3.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-4.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-5.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="swiper arrivals-slider">
          <div class="swiper-wrapper">
            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-6.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-7.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-8.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-9.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a href="#" class="swiper-slide box">
              <div class="image">
                <img src="image/book-10.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="deal">
        <div class="content">
          <h3>deal of the day</h3>
          <h1>upto 50% off</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            perspiciatis in atque dolore tempora quaerat at fuga dolorum natus
            velit.
          </p>
          <a href="#" class="btn">
            shop now
          </a>
        </div>

        <div class="image">
          <img src="image/deal-img.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Arivel;

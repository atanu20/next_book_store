import React, { useEffect } from 'react';

const Featured = () => {
  useEffect(() => {
    new Swiper('.featured-slider', {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }, []);
  return (
    <>
      <section class="featured" id="featured">
        <h1 class="heading">
          {' '}
          <span>featured books</span>{' '}
        </h1>

        <div class="swiper featured-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-1.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-2.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-3.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-4.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-5.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-6.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-7.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-8.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-9.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>

            <div class="swiper-slide box">
              <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src="image/book-10.png" alt="" />
              </div>
              <div class="content">
                <h3>featured books</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" class="btn">
                  add to cart
                </a>
              </div>
            </div>
          </div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </section>
      <section class="newsletter">
        <form action="">
          <h3>subscribe for latest updates</h3>
          <input
            type="email"
            name=""
            placeholder="enter your email"
            id=""
            class="box"
          />
          <input type="submit" value="subscribe" class="btn" />
        </form>
      </section>
    </>
  );
};

export default Featured;

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <header class="header">
        <div class="header-1">
          <a href="#" class="logo">
            {' '}
            <i class="fas fa-book"></i> bookly{' '}
          </a>

          <form action="" class="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label for="search-box" class="fas fa-search"></label>
          </form>

          <div class="icons">
            <div id="search-btn" class="fas fa-search"></div>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-shopping-cart"></a>
            <div id="login-btn" class="fas fa-user"></div>
          </div>
        </div>

        <div class="header-2">
          <nav class="navbar">
            <Link href="#home">
              <a>Home</a>
            </Link>
            <Link href="#featured">
              <a>featured</a>
            </Link>
            <Link href="#arrivals">
              <a>arrivals</a>
            </Link>

            <Link href="#reviews">
              <a>reviews</a>
            </Link>
          </nav>
        </div>
      </header>
      <nav class="bottom-navbar">
        <a href="#home" class="fas fa-home"></a>
        <a href="#featured" class="fas fa-list"></a>
        <a href="#arrivals" class="fas fa-tags"></a>
        <a href="#reviews" class="fas fa-comments"></a>
        <a href="#blogs" class="fas fa-blog"></a>
      </nav>

      <div class="login-form-container">
        <div id="close-login-btn" class="fas fa-times"></div>

        <form>
          <h3>sign in</h3>
          <span>username</span>
          <input
            type="email"
            name=""
            class="box"
            placeholder="enter your email"
            id=""
          />
          <span>password</span>
          <input
            type="password"
            name=""
            class="box"
            placeholder="enter your password"
            id=""
          />
          <div class="checkbox">
            <input type="checkbox" name="" id="remember-me" />
            <label for="remember-me"> remember me</label>
          </div>
          <input type="submit" value="sign in" class="btn" />
          <p>
            forget password ? <a href="#">click here</a>
          </p>
          <p>
            don't have an account ? <a href="#">create one</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Navbar;

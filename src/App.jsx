import "./App.css"
import { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import ComingSoon from "./ComingSoon.jsx"
import Shop from "./Shop"
import Cart from "./Cart"
import Contact from "./Contact"

import strawberryCow from "./assets/strawberry-cow.jpg"
import logo from "./assets/ladybug-lane-logo.svg"

import flowerAccent from "./assets/hero-flower.svg"
import ladybugAccent from "./assets/hero-ladybug-trail.svg"
import heartAccent from "./assets/hero-heart.svg"

import categoryFlower from "./assets/category-flower.svg"
import categoryYarn from "./assets/category-yarn.svg"
import categoryPurse from "./assets/category-purse.svg"
import categoryBook from "./assets/category-book.svg"
import categoryHome from "./assets/category-home.svg"

import teddyBear from "./assets/pink-and-white-teddy-bear.jpg"
import grannyBlanket from "./assets/granny-stitch-blanket-14.jpg"
import pinkFish from "./assets/pink-fish.jpg"
import earWarmers from "./assets/earwarmers-2.jpg"

import aboutImage from "./assets/about-image.svg"
import aboutDecor from "./assets/about-ladybug.svg"

import newsletterFlowers from "./assets/newsletter-flowers.svg"

import mobileLogo from "./assets/ladybug-lane-logo-cropped.svg"

import { FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa"

function HomePage() {

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("ladybugLaneFavorites")

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : []
  })



  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("ladybugLaneCart")

    return savedCart ? JSON.parse(savedCart) : []
  })



  const [cartMessage, setCartMessage] = useState("")




  const toggleFavorite = (productName) => {
    setFavorites((currentFavorites) => {
      const updatedFavorites = currentFavorites.includes(productName)
        ? currentFavorites.filter((item) => item !== productName)
        : [...currentFavorites, productName]

      localStorage.setItem(
        "ladybugLaneFavorites",
        JSON.stringify(updatedFavorites)
      )

      return updatedFavorites
    })
  }




  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      )

      let updatedCart

      if (existingProduct) {
        updatedCart = currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        updatedCart = [
          ...currentCart,
          {
            ...product,
            quantity: 1,
          },
        ]
      }

      localStorage.setItem(
        "ladybugLaneCart",
        JSON.stringify(updatedCart)
      )

      return updatedCart
    })

    setCartMessage("Added to cart ✓")

    setTimeout(() => {
      setCartMessage("")
    }, 2000)
  }



  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )



  useEffect(() => {
    if (window.location.hash === "#about") {
      setTimeout(() => {
        const aboutSection = document.getElementById("about")

        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 100)
    }
  }, [])



  
  return (
    <div className="site home-page">

      {/* Announcement Bar */}
      <div className="announcement-bar">

        <div className="announcement-message">
          <span className="announcement-ladybug">🐞</span>

          <p>HANDMADE GOODIES FOR A BRIGHTER DAY</p>

          <span className="announcement-ladybug">🐞</span>
        </div>

        {/* Social Icons */}
        <div className="announcement-socials">

          <a
            href="https://www.instagram.com/bugzzie14"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="/coming-soon"
            className="social-icon"
            aria-label="Pinterest"
          >
            <FaPinterestP />
          </a>

          <a
            href="/coming-soon"
            className="social-icon"
            aria-label="Tiktok"
          >
            <FaTiktok />
          </a>

        </div>

      </div>

      {/* Header */}
      <header className="header">

        <div className="header-container">

          {/* Logo */}
          <a href="#home" className="brand">
            <picture>
              <source media="(max-width: 650px)" srcSet={mobileLogo} />
              <img
                src={logo}
                alt="Ladybug Lane Crochet"
                className="brand-logo"
              />
            </picture>
          </a>

          {/* Navigation */}
          <nav className="nav">

            <a href="#home" className="active">
              Home
            </a>

            <a href="/shop">
              Shop
            </a>

            <a href="/coming-soon">
              Patterns
            </a>

            <a href="/contact">
              Custom Orders
            </a>

            <a href="#about">
              About
            </a>

            <a href="/contact">
              Contact
            </a>

          </nav>

          {/* Header Icons */}
          <div className="header-actions">

            {/* Search */}
            <button
              className="header-icon"
              type="button"
              aria-label="Search"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />

                <path d="m20 20-4-4" />
              </svg>
            </button>

            {/* Cart */}
            <Link to="/cart">
              <button
                className="header-icon cart-button"
                type="button"
                aria-label="Shopping cart"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6 8h12l1 12H5L6 8" />
                  <path d="M9 9V6a3 3 0 0 1 6 0v3" />
                </svg>

                {cartCount > 0 && (
                  <span className="cart-count">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

          </div>

        </div>

      </header>

      <main>

        {/* HERO */}
        <section
          id="home"
          className="hero-section"
        >

          <div className="hero-container">

            {/* LEFT SIDE */}
            <div className="hero-content">

              <p className="hero-eyebrow">
                HANDMADE WITH PURPOSE
              </p>

              <h1 className="hero-title">

                <span className="hero-title-top">
                  Small Stitches
                </span>

                <span className="hero-title-script">
                  Brighter Days

                  <img
                    src={heartAccent}
                    alt=""
                    className="hero-heart-svg"
                    aria-hidden="true"
                  />
                </span>

              </h1>

              <p className="hero-description">
                Cozy, cute, and handmade just for you. Welcome to Ladybug Lane Crochet - where every stitch brings a little more joy.
              </p>

              <a
                href="/shop"
                className="hero-button"
              >
                <span>
                  SHOP HANDMADE
                </span>

                <span className="hero-arrow">
                  →
                </span>
              </a>

              {/* Decorative Flower */}
              <img
                src={flowerAccent}
                alt=""
                className="hero-flower-svg hero-flower-left-svg"
                aria-hidden="true"
              />

            </div>

            {/* RIGHT SIDE */}
            <div className="hero-visual">

              <div className="hero-image-wrap">
                <img
                  src={strawberryCow}
                  alt="Handmade crochet strawberry cow baby blanket"
                  className="hero-image"
                />
              </div>

              {/* Ladybug */}
              <img
                src={ladybugAccent}
                alt=""
                className="hero-ladybug-svg"
                aria-hidden="true"
              />

              {/* Handwritten Note */}
              <div className="hero-note">
                good things
                <br />
                are
                <br />
                handmade
              </div>

              <div className="hero-corner-flowers">
                <img
                  src={flowerAccent}
                  alt=""
                  className="hero-cornoer-flower hero-corner-flower-large"
                  aria-hidden="true"
                />

                <img
                  src={flowerAccent}
                  alt=""
                  className="hero-corner-flower hero-corner-flower-small"
                  aria-hidden="true"
                />
              </div>

            </div>

          </div>

        </section>

        {/* SHOP CATEGORIES */}
        <section className="category-section" id="shop">
          <div className="category-container">

          {/* Shop All */}
          <a href="/shop#products" className="category-item">
            <div className="category-blob category-yellow">
              <img
                src={categoryFlower}
                alt=""
                className="category-icon category-flower-icon"
                aria-hidden="true"
              />
            </div>

            <span className="category-label">SHOP ALL</span>
          </a>

          {/* Plushies */}
          <a href="/shop?category=Plushies#products" className="category-item">
            <div className="category-blob category-pink">
              <img
                src={categoryYarn}
                alt=""
                className="category-icon"
                aria-hidden="true"
              />
            </div>

            <span className="category-label">PLUSHIES</span>
          </a>

          {/* Accessories */}
          <a href="/shop?category=Accessories#products" className="category-item">
            <div className="category-blob category-green">
              <img
                src={categoryPurse}
                alt=""
                className="category-icon"
                aria-hidden="true"
              />
            </div>

            <span className="category-label">ACCESSORIES</span>
          </a>

          {/* Home Decor */}
          <a href="/shop?category=Home%20Decor#products" className="category-item">
            <div className="category-blob category-yellow">
              <img
                src={categoryHome}
                alt=""
                className="category-icon"
                aria-hidden="true"
              />
            </div>

            <span className="category-label">HOME DECOR</span>
          </a>

          {/* Patterns */}
          <a href="/coming-soon" className="category-item">
            <div className="category-blob category-pink">
              <img
                src={categoryBook}
                alt=""
                className="category-icon category-book-icon"
                aria-hidden="true"
              />
            </div>

            <span className="category-label">PATTERNS</span>
          </a>

          {/* Custom Orders */}
          <a href="/contact" className="category-item">
            <div className="category-blob category-green">
              <span className="category-heart">♡</span>
            </div>

            <span className="category-label">CUSTOM ORDERS</span>
          </a>

        </div>
      </section>

       {/* FEATURED FAVORITES */}
       <section className="featured-section">

        {/* Section Heading */}
        <div className="featured-heading">
          <span className="featured-ladybug">🐞</span>

          <h2>FEATURED FAVORITES</h2>

          <span className="featured-ladybug">🐞</span>
        </div>

        {/* Products */}
        <div className="featured-grid">

          {/* Teddy Bear Plushie */}
          <article className="product-card">

            <div className="product-image-wrap">
              <img
                src={teddyBear}
                alt="Pink & White Teddy Bear"
                className="product-image"
              />

              <button
                className={`favorite-button ${
                  favorites.includes(87) ? "is-favorite" : ""
                }`}
                type="button"
                onClick={() => toggleFavorite(87)}
                aria-label={
                  favorites.includes(87)
                    ? "Remove Teddy Bear from favorites"
                    : "Add Teddy Bear to favorites"
                }
              >
                {favorites.includes(87) ? "♥" : "♡"}
              </button>
            </div>

            <div className="product-info">
              <h3>Teddy Bear Plushie</h3>
              <p>$30.00</p>
            </div>

            <button
              className="add-cart-button"
              type="button"
              onClick={() =>
                addToCart({
                  id: 87,
                  name: "Teddy Bear",
                  category: "Plushie",
                  categories: ["Plushies"],
                  price: 25,
                  image: teddyBear,
                })
              }
            >
              ADD TO CART
            </button>

          </article>

          {/* Granny Stitch Blanket */}
          <article className="product-card">

            <div className="product-image-wrap">
              <img
                src={grannyBlanket}
                alt="Granny Stitch Blanket"
                className="product-image"
              />

              <button
                className={`favorite-button ${
                  favorites.includes(29) ? "is-favorite" : ""
                }`}
                type="button"
                onClick={() => toggleFavorite(29)}
                aria-label={
                  favorites.includes(29)
                    ? "Remove Granny Stitch Blanket from favorites"
                    : "Add Granny Stitch Blanket to favorites"
                }
              >
                {favorites.includes(29) ? "♥" : "♡"}
              </button>
            </div>

            <div className="product-info">
              <h3>Granny Stitch Blanket</h3>
              <p>$70.00</p>
            </div>

            <button
              className="add-cart-button"
              type="button"
              onClick={() =>
                addToCart({
                  id: 29,
                  name: "Granny Blanket",
                  category: "Home Decor",
                  categories: ["Home Decor"],
                  price: 40,
                  image: grannyBlanket,
                })
              }
            >
              ADD TO CART
            </button>

          </article>

          {/* Pink Fish Plushie */}
          <article className="product-card">

            <div className="product-image-wrap">
              <img
                src={pinkFish}
                alt="Pink Fish Plushie"
                className="product-image"
              />

              <button
                className={`favorite-button ${
                  favorites.includes(89) ? "is-favorite" : ""
                }`}
                type="button"
                onClick={() => toggleFavorite(89)}
                aria-label={
                  favorites.includes(89)
                    ? "Remove Pink Fish from favorites"
                    : "Add Pink Fish to favorites"
                }
              >
                {favorites.includes(89) ? "♥" : "♡"}
              </button>
            </div>

            <div className="product-info">
              <h3>Pink Fish Plushie</h3>
              <p>$15.00</p>
            </div>

            <button
              className="add-cart-button"
              type="button"
              onClick={() =>
                addToCart({
                  id: 89,
                  name: "Pink Fish",
                  category: "Plushie",
                  categories: ["Plushies"],
                  price: 15,
                  image: pinkFish,
                })
              }
            >
              ADD TO CART
            </button>

          </article>

          {/* Earwarmers */}
          <article className="product-card">

            <div className="product-image-wrap">
              <img
                src={earWarmers}
                alt="Twisted Earwarmers"
                className="product-image"
              />

              <button
                className={`favorite-button ${
                  favorites.includes(21) ? "is-favorite" : ""
                }`}
                type="button"
                onClick={() => toggleFavorite(21)}
                aria-label={
                  favorites.includes(21)
                    ? "Remove Earwarmers from favorites"
                    : "Add Earwarmers to favorites"
                }
              >
                {favorites.includes(21) ? "♥" : "♡"}
              </button>
            </div>

            <div className="product-info">
              <h3>Earwarmers</h3>
              <p>$15.00</p>
            </div>

            <button
              className="add-cart-button"
              type="button"
              onClick={() =>
                addToCart({
                  id: 21,
                  name: "Earwarmers",
                  category: "Accessory",
                  categories: ["Accessories", "Seasonal"],
                  price: 20,
                  image: earWarmers,
                })
              }
            >
              ADD TO CART
            </button>

          </article>

        </div>
       </section>

       {/* ABOUT SECTION */}
       <section className="about-section" id="about">

        <div className="about-container">

          {/* LEFT */}
          <div className="about-visual">

            <div className="about-image-wrap">
              <img
                src={aboutImage}
                alt="Yarn and crochet supplies"
                className="about-image"
              />
            </div>

            <img
              src={flowerAccent}
              alt=""
              className="about-accent-flower"
              aria-hidden="true"
            />

          </div>

          {/* CENTER */}
          <div className="about-content">

            <p className="about-eyebrow">
              A LITTLE ABOUT
            </p>

            <h2 className="about-title">
              Ladybug Lane Crochet
            </h2>

            <p className="about-description">
              Ladybug Lane Crochet is a small handmade business created with a love for cozy creations, bright colors, and the little things that make life sweet. Every piece is thoughfully crafted to bring a little more joy into your day.
            </p>

            <a href="/contact" className="about-button">
              <span>CONTACT US</span>
              <span className="about-arrow">→</span>
            </a>

          </div>

          {/* RIGHT */}
          <div className="about-decoration">
            <img
              src={aboutDecor}
              alt=""
              className="about-decoration-image"
              aria-hidden="true"
            />
          </div>

        </div>

       </section>

       {/* NEWSLETTER SECTION */}
       <section className="newsletter-section">

        <svg
          className="newsletter-background"
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M0,38
              
              C120,12 220,58 350,34
              C480,10 590,58 720,34
              C850,10 960,58 1090,34
              C1210,12 1330,54 1440,32
              
              L1440,318
              
              C1320,344 1210,296 1080,322
              C950,348 840,298 710,322
              C580,346 470,298 340,322
              C210,346 110,300 0,326
              
              Z
            "
            fill="#f9df83"
          />
        </svg>

        <div className="newsletter-container">

          {/* LEFT */}
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              Join the Lane
            </h2>

            <p className="newsletter-description">
              Be the first to know about new drops, restocks, and special offers.
            </p>
          </div>

          {/* CENTER */}
          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
            />

            <Link
              to="/coming-soon"
              className="newsletter-subscribe-button"
            >
              SUBSCRIBE
            </Link>

          </form>

          {/* RIGHT */}
          <div className="newsletter-flowers-wrap">
            <img
              src={newsletterFlowers}
              alt=""
              className="newsletter-flowers"
            />
          </div>

        </div>

       </section>

       {/* FOOTER */}
       <footer className="footer">

        <div className="footer-container">

          {/* TOP ROW */}
          <div className="footer-top">

            {/* Logo */}
            <a href="#home" className="footer-brand">
              <img
                src={logo}
                alt="Ladybug Lane Crochet"
                className="footer-logo"
              />
            </a>

            {/* Footer Navigation */}
            <nav className="footer-nav">
              <a href="/shop">Shop</a>
              <a href="#about">About</a>
              <a href="/contact">Contact</a>
              <a href="/coming-soon">FAQs</a>
              <a href="/coming-soon">Shipping</a>
              <a href="/contact">Returns</a>
            </nav>

            {/* Social Icons */}
            <div className="footer-socials">

              <a
                href="http://www.instagram.com/bugzzie14"
                aria-label="Instagram"
                className="footer-social"
              >
                <FaInstagram />
              </a>

              <a
                href="/coming-soon"
                aria-label="Pinterest"
                className="footer-social"
              >
                <FaPinterestP />
              </a>

              <a
                href="/coming-soon"
                aria-label="TikTok"
                className="footer-social"
              >
                <FaTiktok />
              </a>

              <a
                href="/coming-soon"
                aria-label="Facebook"
                className="footer-social footer-facebook"
              >
                f
              </a>

            </div>

          </div>

          {/* BOTTOM ROW */}
          <div className="footer-bottom">

            <p className="footer-copyright">
              © 2026 Ladybug Lane Crochet. All rights reserved.
            </p>

            <p className="developer-credit">
              Designed &amp; developed by <span>Maddie W.</span>
            </p>

            <p className="footer-tagline">
              handmade happiness <span className="footer-tagline-heart">♡</span>
            </p>

          </div>

        </div>

       </footer>

      {cartMessage && (
        <div className="cart-toast">
          {cartMessage}
        </div>
       )}

      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
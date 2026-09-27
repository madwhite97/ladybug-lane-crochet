import "./Contact.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaInstagram, FaPinterestP, FaTiktok, FaHeart } from "react-icons/fa"
import { FiShoppingBag, FiMail } from "react-icons/fi"

import logo from "./assets/ladybug-lane-logo.svg"
import shopLeaf from "./assets/shop-leaf.svg"
import shopHeart from "./assets/shop-heart.svg"
import shopFlower from "./assets/shop-flower.svg"
import contactNote from "./assets/contact-note.svg"
import contactDoodle from "./assets/contact-doodle.svg"
import shopBow from "./assets/shop-bow.svg"
import shopFooterFlower from "./assets/shop-footer-flower.svg"
import shopMushroom from "./assets/shop-mushroom.svg"
import shopLadybug from "./assets/shop-ladybug.svg"
import divider from "./assets/contact-divider.svg"
import mobileLogo from "./assets/ladybug-lane-logo-cropped.svg"

import puppy from "./assets/puppy.jpg"

function Contact() {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("ladybugLaneCart")
        return savedCart ? JSON.parse(savedCart) : []
    })



    const [messageSent, setMessageSent] = useState(false)





    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    )



    const handleSubmit = (e) => {
        e.preventDefault()

        setMessageSent(true)

        setTimeout(() => {
            setMessageSent(false)
        }, 2000)
    }



    return (
        <main className="contact-page">

            <img
                src={shopLeaf}
                alt=""
                className="contact-corner-leaf"
            />

            {/* ANNOUNCEMENT BAR */}
            <div className="contact-announcement">

                <div className="contact-announcement-inner">

                    <span className="contact-announcement-ladybug">
                        🐞
                    </span>

                    <p>
                        HANDMADE GOODIES FOR A BRIGHTER DAY
                    </p>

                    <span className="contact-announcement-ladybug">
                        🐞
                    </span>

                </div>

                <div className="contact-announcement-socials">

                    <a
                        href="https://www.instagram.com/bugzzie14"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="/coming-soon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Pinterest"
                    >
                        <FaPinterestP />
                    </a>

                    <a
                        href="/coming-soon"
                        target="_blank"
                        rel="nooepener noreferrer"
                        aria-label="Tiktok"
                    >
                        <FaTiktok />
                    </a>

                </div>

            </div>

            {/* NAVBAR */}
            <nav className="contact-navbar">

                <div className="contact-nav-left">
                    <Link to="/">HOME</Link>
                    <Link to="/shop">SHOP</Link>
                    <Link to="/#about">ABOUT</Link>
                </div>

                <Link to="/" className="contact-nav-logo-link">
                    <picture>
                        <source media="(max-width: 650px)" srcSet={mobileLogo} />
                        <img
                            src={logo}
                            alt="Ladybug Lane Crochet"
                            className="contact-nav-logo"
                        />
                    </picture>
                </Link>

                <div className="contact-nav-right">
                    <Link to="/coming-soon">CUSTOMS</Link>
                    <Link to="/coming-soon">FAQ</Link>
                    <Link to="/contact">CONTACT</Link>

                    <Link to="/cart" className="shop-cart-link">
                        <div className="shop-cart-wrapper">
                            <FiShoppingBag className="nav-cart-icon" />
                        
                            {cartCount > 0 && (
                                <span className="shop-cart-count">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </Link>

                </div>

            </nav>

            {/* HERO */}
            <section className="contact-hero">

                <svg
                    className="contact-hero-wave contact-hero-wave-top"
                    viewBox="0 0 1440 90"
                    preserveAspectRatio="none"
                >
                    <path
                        d="
                            M0,28
                            C140,2 250,55 390,28
                            C540,0 660,58 810,28
                            C960,0 1080,55 1220,26
                            C1320,8 1390,20 1440,30
                            L1440,0
                            L0,0
                            Z
                        "
                    />
                </svg>

                <div className="contact-hero-left">

                    <h1 className="contact-hero-title">Contact</h1>

                    <img
                        src={contactNote}
                        alt="Let's chat"
                        className="contact-hero-note"
                    />

                    <p className="contact-hero-description">
                        Have a question, custom request, or just want to say hi?
                        {" "}<br />
                        I'd love to hear from you!
                    </p>

                </div>

                <div className="contact-hero-image">

                    <svg
                        className="contact-photo-svg"
                        viewBox="0 0 1000 1000"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <clipPath id="contactPhotoShape">
                                <path
                                    d="
                                        M 90 35
                                        
                                        C 230 5, 340 45, 470 25
                                        C 610 5, 760 35, 900 45
                                        
                                        C 965 120, 930 220, 955 315
                                        C 980 410, 925 485, 955 585
                                        C 980 690, 945 820, 895 925
                                        
                                        C 750 975, 620 940, 500 965
                                        C 365 990, 220 970, 95 920
                                        
                                        C 35 820, 70 710, 40 610
                                        C 10 505, 70 420, 40 315
                                        C 15 215, 35 110, 90 35
                                        
                                        Z
                                    "
                                />
                            </clipPath>
                        </defs>

                        <image
                            href={puppy}
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid slice"
                            clipPath="url(#contactPhotoShape)"
                        />
                    </svg>

                    <img
                        src={shopHeart}
                        alt=""
                        className="contact-image-heart"
                    />

                    <img
                        src={contactDoodle}
                        alt=""
                        className="contact-image-doodle"
                    />

                </div>

                <img
                    src={shopFlower}
                    alt=""
                    className="contact-hero-flower"
                />

                <svg
                    className="contact-hero-wave contact-hero-wave-bottom"
                    viewBox="0 0 1440 90"
                    preserveAspectRatio="none"
                >
                    <path
                        d="
                            M0,48
                            C140,82 260,8 420,45
                            C570,82 700,12 850,48
                            C1000,84 1120,10 1260,44
                            C1340,62 1400,58 1440,46
                            L1440,90
                            L0,90
                            Z
                        "
                    />
                </svg>

            </section>

            {/* CONTENT */}
            <section className="contact-content">

                {/* LEFT - MESSAGE FORM */}
                <div className="contact-form-card">

                    <img
                        src={shopBow}
                        alt=""
                        className="contact-form-bow"
                    />

                    <img
                        src={shopHeart}
                        alt=""
                        className="contact-form-heart"
                    />

                    <img
                        src={shopFooterFlower}
                        alt=""
                        className="contact-form-flower"
                    />

                    <h2>Send a Message</h2>

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="NAME *"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="EMAIL *"
                            required
                        />

                        <select
                            name="subject"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                SUBJECT *
                            </option>
                            <option value="general">General Questions</option>
                            <option value="custom">Custom Order</option>
                            <option value="order">Order Question</option>
                            <option value="other">Other</option>
                        </select>
                        
                        <textarea
                            name="message"
                            placeholder="MESSAGE *"
                            required
                        />

                        <button type="submit" className="contact-submit">
                            SEND MESSAGE <span>→</span>
                        </button>

                    </form>

                </div>

                {/* DIVIDER */}
                <img
                    src={divider}
                    alt=""
                    className="contact-divider"
                />

                {/* RIGHT - OTHER CONTACT OPTIONS */}
                <div className="contact-other">

                    <h2>Other Ways to Reach Me</h2>

                    <div className="contact-methods">

                        <div className="contact-method">
                            <div className="contact-method-icon">
                                <FiMail aria-hidden="true" />
                            </div>

                            <div>
                                <h3>EMAIL</h3>
                                <p>ladybuglanecrochet@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="contact-method-icon">
                                <FaInstagram />
                            </div>

                            <div>
                                <h3>INSTAGRAM</h3>
                                <p>@bugzzie14</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="contact-method-icon">
                                <FaPinterestP />
                            </div>

                            <div>
                                <h3>PINTEREST</h3>
                                <p>@ladybuglanecrochet</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="contact-method-icon">
                                <FaTiktok />
                            </div>

                            <div>
                                <h3>TIKTOK</h3>
                                <p>@ladybuglanecrochet</p>
                            </div>
                        </div>

                    </div>

                    <div className="contact-before-message">

                        <img
                            src={shopMushroom}
                            alt=""
                            className="contact-before-mushroom"
                        />

                        <h3>Before You Message</h3>

                        <p>
                            You might find the answer you're looking
                            <br />
                            for in my FAQ! It covers, shipping, customs,
                            <br />
                            processing times, and more.
                        </p>

                        <Link to="/coming-soon" className="contact-faq-button">
                            VIEW FAQ <span>→</span>
                        </Link>
                    
                    </div>

                    <div className="contact-thank-you">

                        <div className="contact-thank-you-title">
                            <span>thank you</span>

                            <img
                                src={shopHeart}
                                alt=""
                                className="contact-thank-you-title-heart"
                            />
                        </div>

                        <p>FOR SUPPORTING MY SMALL BUSINESS!</p>

                        <span className="contact-thank-you-heart">
                            <FaHeart aria-hidden="true" />
                        </span>
                    </div>

                </div>

            </section>

            {/* Footer */}
            <footer className="shop-footer">

                <img
                    src={shopLadybug}
                    alt=""
                    className="shop-footer-ladybug"
                />

                <img
                    src={shopFooterFlower}
                    alt=""
                    className="shop-footer-flower"
                />

                <svg
                    className="shop-footer-wave"
                    viewBox="0 0 1440 240"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="
                            M 0 80
                            C 100 45, 200 45, 300 80
                            C 400 115, 490 110, 585 70
                            C 680 30, 780 30, 875 70
                            C 970 110, 1060 115, 1160 80
                            C 1260 45, 1360 45, 1440 82
                            L 1440 240
                            L 0 240
                            Z
                        "
                    />
                </svg>

                <div className="shop-footer-text">
                    <span>CROCHET</span>
                    <span className="shop-footer-heart">
                        <FaHeart aria-hidden="true" />
                    </span>
                    <span>CREATE</span>
                    <span className="shop-footer-heart">
                        <FaHeart aria-hidden="true" />
                    </span>
                    <span>BELONG</span>
                </div>

            </footer>

            {messageSent && (
                <div className="message-sent-toast">
                    Message sent ✓
                </div>
            )}

        </main>
    )
}

export default Contact
import "./ComingSoon.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"

import logo from "./assets/ladybug-lane-logo.svg"

import leftDecor from "./assets/coming-soon-decoration.svg"
import titleHeart from "./assets/coming-soon-heart.svg"
import handmadeNote from "./assets/coming-soon-note.svg"
import rightDecor from "./assets/coming-soon-right-decor.svg"
import waveHeart from "./assets/coming-soon-wave-heart.svg"
import bottomWave from "./assets/coming-soon-bottom-wave.jpg"

function ComingSoon() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [])


    
    return (
        <main className="coming-page">

            {/* Back to Home */}
            <Link to="/" className="coming-back-home">
                <span>←</span>
                Back to Home
            </Link>

            {/* Logo */}
            <div className="coming-logo-wrap">
                <img
                    src={logo}
                    alt="Ladybug Lane Crochet"
                    className="coming-logo"
                />
            </div>

            {/* Main Content */}
            <section className="coming-content">

                {/* Title */}
                <div className="coming-title-positioner">
                    
                    <div className="coming-title-arch">

                        <svg
                            className="coming-title-svg"
                            viewBox="0 0 1000 260"
                            aria-label="Coming Soon"
                        >
                            <defs>
                                <path
                                    id="comingSoonCurve"
                                    d="M 80 205 Q 500 35 920 205"
                                />
                            </defs>

                            <text className="coming-title-text">
                                <textPath
                                    href="#comingSoonCurve"
                                    startOffset="50%"
                                    textAnchor="middle"
                                >
                                    Coming Soon
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    <img
                        src={titleHeart}
                        alt=""
                        className="coming-title-heart"
                    />

                </div>

                {/* Stay Tuned */}
                <div className="coming-stay-tuned">
                    <span></span>
                    <p>STAY TUNED</p>
                    <span></span>
                </div>

                {/* Description */}
                <p className="coming-description">
                    We're busy stitching up something special!
                    <br />
                     Follow along soon for
                    <br />
                    crochet inspiration, new products, behind the scenes,
                    <br />
                    and a little more handmade happiness.
                </p>

            </section>

            {/* Left artwork */}
            <img
                src={leftDecor}
                alt=""
                className="coming-left-decor"
            />

            {/* Right artwork */}
            <div className="coming-right-group">
                <img
                    src={rightDecor}
                    alt=""
                    className="coming-right-decor"
                />
            </div>

            {/* Yellow Wave */}
            <img
                src={bottomWave}
                alt=""
                className="coming-bottom-wave"
            />

        </main>
    )
}

export default ComingSoon
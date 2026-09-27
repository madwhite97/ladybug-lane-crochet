import "./Shop.css"
import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react" 
import { FaInstagram, FaPinterestP, FaTiktok, FaRegHeart, FaHeart } from "react-icons/fa"
import { FiShoppingBag } from "react-icons/fi"

import logo from "./assets/ladybug-lane-logo.svg"
import shopLeaf from "./assets/shop-leaf.svg"
import heroBlanket from "./assets/chunky-blanket.jpg"
import shopNote from "./assets/shop-note.svg"
import shopHeart from "./assets/shop-heart.svg"
import shopHeroNote from "./assets/shop-hero-note.svg"
import shopFlower from "./assets/shop-flower.svg"
import shopBow from "./assets/shop-bow.svg"
import shopPurse from "./assets/shop-purse.svg"
import shopStrawberry from "./assets/shop-strawberry.svg"
import shopMushroom from "./assets/shop-mushroom.svg"
import shopFlowerIcon from "./assets/shop-category-flower.svg"
import footerWave from "./assets/shop-wave.svg"
import shopLadybug from "./assets/shop-ladybug.svg"
import shopFooterFlower from "./assets/shop-footer-flower.svg"
import mobileLogo from "./assets/ladybug-lane-logo-cropped.svg"

import arielHat from "./assets/ariel-hat.jpg"
import basket from "./assets/basket.jpg"
import basketTwo from "./assets/basket-2.jpg"
import beadedLizard from "./assets/beaded-lizard.jpg"
import secondBeadedLizard from "./assets/beaded-lizard-2.jpg"
import cowBabyBlanket from "./assets/blue-cow-baby-blanket.jpg"
import blueFish from "./assets/blue-fish.jpg"
import blueWhiteRoseHat from "./assets/blue-white-rose-hat.jpg"
import bohoRainbow from "./assets/boho-rainbow-baby-blanket.jpg"
import bohoRainbowBaby from "./assets/boho-rainbow-baby-blanket-2.jpg"
import brownMintRoseHat from "./assets/brown-mint-rose-hat.jpg"
import burgundyWhiteScarf from "./assets/burgundy-white-scarf-hat-combo.jpg"
import catSweater from "./assets/cat-sweater.jpg"
import secondCatSweater from "./assets/cat-sweater-2.jpg"
import chicken from "./assets/chicken.jpg"
import legwarmers from "./assets/crocodile-stitch-legwarmers.jpg"
import crocodileLegwarmers from "./assets/crocodile-stitch-legwarmers-2.jpg"
import deer from "./assets/deer-baby-blanket.jpg"
import diamond from "./assets/diamond-stitch-scarf.jpg"
import diamondStitch from "./assets/diamond-stitch-scarf-2.jpg"
import earwarmers from "./assets/earwarmer.jpg"
import secondEarwarmers from "./assets/earwarmers.jpg"
import thirdEarwarmers from "./assets/earwarmers-2.jpg"
import fourthEarwarmers from "./assets/earwarmers-3.jpg"
import fifthEarwarmers from "./assets/earwarmers-4.jpg"
import sixthEarwarmers from "./assets/earwarmers-5.jpg"
import flowerSkunk from "./assets/flower-the-skunk.jpg"
import fruit from "./assets/fruit-slice-hotpad-collection.jpg"
import granny from "./assets/granny-stitch-18.jpg"
import secondGranny from "./assets/granny-stitch-20.jpg"
import thirdGranny from "./assets/granny-stitch-blanket.jpg"
import fourthGranny from "./assets/granny-stitch-blanket-2.jpg"
import fifthGranny from "./assets/granny-stitch-blanket-3.jpg"
import sixthGranny from "./assets/granny-stitch-blanket-4.jpg"
import seventhGranny from "./assets/granny-stitch-blanket-5.jpg"
import eighthGranny from "./assets/granny-stitch-blanket-6.jpg"
import ninthGranny from "./assets/granny-stitch-blanket-7.jpg"
import tenthGranny from "./assets/granny-stitch-blanket-8.jpg"
import eleventhGranny from "./assets/granny-stitch-blanket-9.jpg"
import twelthGranny from "./assets/granny-stitch-blanket-10.jpg"
import thirteenthGranny from "./assets/granny-stitch-blanket-11.jpg"
import fourteenthGranny from "./assets/granny-stitch-blanket-12.jpg"
import fifteenthGranny from "./assets/granny-stitch-blanket-13.jpg"
import sixteenthGranny from "./assets/granny-stitch-blanket-14.jpg"
import seventeenthGranny from "./assets/granny-stitch-blanket-15.jpg"
import eighteenthGranny from "./assets/granny-stitch-blanket-16.jpg"
import ninteenthGranny from "./assets/granny-stitch-blanket-17.jpg"
import twentiethGranny from "./assets/granny-stitch-blanket-19.jpg"
import twentyfirstGranny from "./assets/granny-stitch-blanket-20.jpg"
import grayRed from "./assets/gray-and-red-scarf-and-hat-combo.jpg"
import hat from "./assets/hat.jpg"
import hedwig from "./assets/hedwig.jpg"
import hotpad from "./assets/hotpad.jpg"
import secondHotpad from "./assets/hotpad-2.jpg"
import thirdHotpad from "./assets/hotpad-3.jpg"
import fourthHotpad from "./assets/hotpad-4.jpg"
import fifthHotpad from "./assets/hotpad-5.jpg"
import sixthHotpad from "./assets/hotpad-6.jpg"
import seventhHotpad from "./assets/hotpad-7.jpg"
import eigthHotpad from "./assets/hotpad-8.jpg"
import ninthHotpad from "./assets/hotpad-9.jpg"
import tenthHotpad from "./assets/hotpad-10.jpg"
import eleventhHotpad from "./assets/hotpad-11.jpg"
import twelthHotpad from "./assets/hotpad-12.jpg"
import thirteenthHotpad from "./assets/hotpad-13.jpg"
import fourteenthHotpad from "./assets/hotpad-14.jpg"
import fifteenthHotpad from "./assets/hotpad-15.jpg"
import sixteenthHotpad from "./assets/hotpad-16.jpg"
import seventeenthHotpad from "./assets/hotpad-17.jpg"
import eighteenthHotpad from "./assets/hotpad-18.jpg"
import ninteenthHotpad from "./assets/hotpad-19.jpg"
import twentiethHotpad from "./assets/hotpad-20.jpg"
import twentyfirstHotpad from "./assets/hotpad-21.jpg"
import twentysecondHotpad from "./assets/hotpad-22.jpg"
import twentythirdHotpad from "./assets/hotpad-23.jpg"
import twentyfourthHotpad from "./assets/hotpad-24.jpg"
import mermaid from "./assets/mermaid-tail-blanket.jpg"
import mermaidTail from "./assets/mermaid-tail-blanket-2.jpg"
import octopus from "./assets/octopus-2.jpg"
import octopusPlush from "./assets/octopus.jpg"
import passionflower from "./assets/passionflower-hotpad.jpg"
import secondPassionflower from "./assets/passionflower-hotpad-2.jpg"
import thirdPassionflower from "./assets/passionflower-hotpad-3.jpg"
import fourthPassionFlower from "./assets/passionflower-hotpad-4.jpg"
import pastel from "./assets/pastel-c2c-baby-blanket.jpg"
import teddy from "./assets/pink-and-white-teddy-bear.jpg"
import pinkBlue from "./assets/pink-blue-rose-hat.jpg"
import pinkFish from "./assets/pink-fish.jpg"
import puppy from "./assets/puppy.jpg"
import purpleBlue from "./assets/purple-and-blue-rose-hat.jpg"
import purpleWhite from "./assets/purple-and-white-rose-hat.jpg"
import purpleBlack from "./assets/purple-black-scarf-hat-combo.jpg"
import purpleFish from "./assets/purple-fish.jpg"
import purpleGray from "./assets/purple-gray-scarf-hat-combo.jpg"
import purpleGreen from "./assets/purple-green-heart-hat.jpg"
import redPurple from "./assets/red-purple-heart-hat.jpg"
import scrunchie from "./assets/scrunchie.jpg"
import secondScrunchie from "./assets/scrunchie-2.jpg"
import thirdScrunchie from "./assets/scrunchie-3.jpg"
import seal from "./assets/seal.jpg"
import sockMonkey from "./assets/sock-monkey-hat.jpg"
import sockMonkeyHat from "./assets/sock-monkey-hat-2.jpg"
import stingray from "./assets/stingray.jpg"
import strawberryCow from "./assets/strawberry-cow.jpg"
import summerBlossom from "./assets/summer-blossom-hotpad.jpg"
import summberBlossomMandala from "./assets/summer-blossom-mandala.jpg"
import secondSummerBlossomMandala from "./assets/summer-blossom-mandala-2.jpg"
import sunflower from "./assets/sunflower-hotpad.jpg"
import tanCream from "./assets/tan-cream-rose-hat.jpg"
import tealBlue from "./assets/teal-blue-heart-hat.jpg"
import tealCoral from "./assets/teal-coral-rose-hat.jpg"
import twirly from "./assets/twirly-scarf.jpg"
import secondTwirly from "./assets/twirly-scarf-2.jpg"
import thirdTwirly from "./assets/twirly-scarf-3.jpg"
import fourthTwirly from "./assets/twirly-scarf-4.jpg"
import voodoo from "./assets/voodoo-doll.jpg"
import voodooDoll from "./assets/voodoo-doll-2.jpg"


function Shop() {

    const products = [
        {
            id: 1,
            name: "Ariel Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: arielHat,
        },
        {
            id: 2,
            name: "Basket",
            category: ["Home Decor"],
            price: 15,
            image: basket,
        },
        {
            id: 3,
            name: "Basket",
            category: "Home Decor",
            categories: ["Home Decor", "Seasonal"],
            price: 15,
            image: basketTwo,
        },
        {
            id: 4,
            name: "90s Lizard",
            category: "Plushie",
            categories: ["Plushies"],
            price: 20,
            image: beadedLizard,
        },
        {
            id: 5,
            name: "90s Lizard",
            category: "Plushie",
            categories: ["Plushies"],
            price: 20,
            image: secondBeadedLizard,
        },
        {
            id: 6,
            name: "Baby Blanket",
            category: ["Home Decor"],
            price: 50,
            image: cowBabyBlanket,
        },
        {
            id: 7,
            name: "Blue Fish",
            category: "Plushie",
            categories: ["Plushies"],
            price: 15,
            image: blueFish,
        },
        {
            id: 8,
            name: "Rose Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: blueWhiteRoseHat,
        },
        {
            id: 9,
            name: "Baby Blanket",
            category: ["Home Decor"],
            price: 35,
            image: bohoRainbow,
        },
        {
            id: 10,
            name: "Baby Blanket",
            category: ["Home Decor"],
            price: 35,
            image: bohoRainbowBaby,
        },
        {
            id: 11,
            name: "Rose Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: brownMintRoseHat,
        },
        {
            id: 12,
            name: "Hat & Scarf",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 35,
            image: burgundyWhiteScarf,
        },
        {
            id: 13,
            name: "Cat Sweater",
            category: "Accessory",
            categories: ["Accessories"],
            price: 15,
            image: catSweater,
        },
        {
            id: 14,
            name: "Cat Sweater",
            category: "Accessory",
            categories: ["Accessories"],
            price: 15,
            image: secondCatSweater,
        },
        {
            id: 15,
            name: "Chicken",
            category: "Plushie",
            categories: ["Plushies"],
            price: 25,
            image: chicken,
        },
        {
            id: 16,
            name: "Legwarmers",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 25,
            image: legwarmers,
        },
        {
            id: 17,
            name: "Legwarmers",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 25,
            image: crocodileLegwarmers,
        },
        {
            id: 18,
            name: "Baby Blanket",
            category: ["Home Decor"],
            price: 40,
            image: deer,
        },
        {
            id: 19,
            name: "Scarf",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 20,
            image: diamond,
        },
        {
            id: 20,
            name: "Scarf",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 20,
            image: diamondStitch,
        },
        {
            id: 21,
            name: "Earwarmers",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 20,
            image: earwarmers,
        },
        {
            id: 22,
            name: "Earwarmers",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 20,
            image: secondEarwarmers,
        },
        {
            id: 23,
            name: "Earwarmers",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 20,
            image: thirdEarwarmers,
        },
        {
            id: 24,
            name: "Earwarmers",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 20,
            image: fourthEarwarmers,
        },
        {
            id: 25,
            name: "Earwarmers",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 20,
            image: fifthEarwarmers,
        },
        {
            id: 26,
            name: "Earwarmers",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 20,
            image: sixthEarwarmers,
        },
        {
            id: 27,
            name: "Flower the Skunk",
            category: "Plushie",
            categories: ["Plushies"],
            price: 25,
            image: flowerSkunk,
        },
        {
            id: 28,
            name: "Fruit Hotpads",
            category: ["Home Decor"],
            price: 15,
            image: fruit,
        },
        {
            id: 29,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: granny,
        },
        {
            id: 30,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: secondGranny,
        },
        {
            id: 31,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: thirdGranny,
        },
        {
            id: 32,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: fourthGranny,
        },
        {
            id: 33,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: fifthGranny,
        },
        {
            id: 34,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: sixthGranny,
        },
        {
            id: 35,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: seventhGranny,
        },
        {
            id: 36,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: eighthGranny,
        },
        {
            id: 37,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: eighthGranny,
        },
        {
            id: 38,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: ninthGranny,
        },
        {
            id: 39,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: tenthGranny,
        },
        {
            id: 40,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: eleventhGranny,
        },
        {
            id: 41,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: twelthGranny,
        },
        {
            id: 42,
            name: "Granny Blanket",
            category: "Home Decor",
            categories: ["Home Decor", "Seasonal"],
            price: 40,
            image: thirteenthGranny,
        },
        {
            id: 43,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: fourteenthGranny,
        },
        {
            id: 44,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: fifteenthGranny,
        },
        {
            id: 45,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: sixteenthGranny,
        },
        {
            id: 46,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: seventeenthGranny,
        },
        {
            id: 47,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: eighteenthGranny,
        },
        {
            id: 48,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: ninteenthGranny,
        },
        {
            id: 49,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: twentiethGranny,
        },
        {
            id: 50,
            name: "Granny Blanket",
            category: ["Home Decor"],
            price: 40,
            image: twentyfirstGranny,
        },
        {
            id: 51,
            name: "Scarf & Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 35,
            image: grayRed,
        },
        {
            id: 52,
            name: "Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: hat,
        },
        {
            id: 53,
            name: "Hedwig",
            category: "Plushie",
            categories: ["Plushies"],
            price: 15,
            image: hedwig,
        },
        {
            id: 54,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: hotpad,
        },
        {
            id: 55,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: secondHotpad,
        },
        {
            id: 56,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: thirdHotpad,
        },
        {
            id: 57,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: fourthHotpad,
        },
        {
            id: 58,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: fifthHotpad,
        },
        {
            id: 59,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: sixthHotpad,
        },
        {
            id: 60,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: seventhHotpad,
        },
        {
            id: 61,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: eigthHotpad,
        },
        {
            id: 62,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: ninthHotpad,
        },
        {
            id: 63,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: tenthHotpad,
        },
        {
            id: 64,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: eleventhHotpad,
        },
        {
            id: 65,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: twelthHotpad,
        },
        {
            id: 66,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: thirteenthHotpad,
        },
        {
            id: 67,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: fourteenthHotpad,
        },
        {
            id: 68,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: fifteenthHotpad,
        },
        {
            id: 69,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: sixteenthHotpad,
        },
        {
            id: 70,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: seventeenthHotpad,
        },
        {
            id: 71,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: eighteenthHotpad,
        },
        {
            id: 72,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: ninteenthHotpad,
        },
        {
            id: 73,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: twentiethHotpad,
        },
        {
            id: 74,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: twentyfirstHotpad,
        },
        {
            id: 75,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: twentysecondHotpad,
        },
        {
            id: 76,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: twentythirdHotpad,
        },
        {
            id: 77,
            name: "Hotpad",
            category: ["Home Decor"],
            price: 5,
            image: twentyfourthHotpad,
        },
        {
            id: 78,
            name: "Mermaid Tail Blanket",
            category: ["Home Decor"],
            price: 40,
            image: mermaid,
        },
        {
            id: 79,
            name: "Mermaid Tail Blanket",
            category: ["Home Decor"],
            price: 40,
            image: mermaidTail,
        },
        {
            id: 80,
            name: "Octopus",
            category: "Plushie",
            categories: ["Plushies"],
            price: 30,
            image: octopus,
        },
        {
            id: 81,
            name: "Octopus",
            category: "Plushie",
            categories: ["Plushies"],
            price: 30,
            image: octopusPlush,
        },
        {
            id: 82,
            name: "Passionflower Hotpad",
            category: "Home Decor",
            categories: ["Home Decor", "Seasonal"],
            price: 10,
            image: passionflower,
        },
        {
            id: 83,
            name: "Passionflower Hotpad",
            category: "Home Decor",
            categories: ["Home Decor", "Seasonal"],
            price: 10,
            image: secondPassionflower,
        },
        {
            id: 84,
            name: "Passionflower Hotpad",
            category: "Home Decor",
            categories: ["Home Decor", "Seasonal"],
            price: 10,
            image: thirdPassionflower,
        },
        {
            id: 85,
            name: "Passionflower Hotpad",
            category: "Home Decor",
            categories: ["Home Decor", "Seasonal"],
            price: 10,
            image: fourthPassionFlower,
        },
        {
            id: 86,
            name: "Baby Blanket",
            category: ["Home Decor"],
            price: 30,
            image: pastel,
        },
        {
            id: 87,
            name: "Teddy Bear",
            category: "Plushie",
            categories: ["Plushies"],
            price: 25,
            image: teddy,
        },
        {
            id: 88,
            name: "Rose Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: pinkBlue,
        },
        {
            id: 89,
            name: "Pink Fish",
            category: "Plushie",
            categories: ["Plushie"],
            price: 15,
            image: pinkFish,
        },
        {
            id: 90,
            name: "Puppy",
            category: "Plushie",
            categories: ["Plushies"],
            price: 25,
            image: puppy,
        },
        {
            id: 91,
            name: "Rose Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: purpleBlue,
        },
        {
            id: 92,
            name: "Rose Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: purpleWhite,
        },
        {
            id: 93,
            name: "Scarf & Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 35,
            image: purpleBlack,
        },
        {
            id: 94,
            name: "Purple Fish",
            category: "Plushie",
            categories: ["Plushies"],
            price: 15,
            image: purpleFish,
        },
        {
            id: 95,
            name: "Scarf & Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 35,
            image: purpleGray,
        },
        {
            id: 96,
            name: "Heart Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: purpleGreen,
        },
        {
            id: 97,
            name: "Heart Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: redPurple,
        },
        {
            id: 98,
            name: "Scrunchie",
            category: "Accessory",
            categories: ["Accessories"],
            price: 5,
            image: scrunchie,
        },
        {
            id: 99,
            name: "Scrunchie",
            category: "Accessory",
            categories: ["Accessories"],
            price: 5,
            image: secondScrunchie,
        },
        {
            id: 100,
            name: "Scrunchie",
            category: "Accessory",
            categories: ["Accessories"],
            price: 5,
            image: thirdScrunchie,
        },
        {
            id: 101,
            name: "Seal",
            category: "Plushie",
            categories: ["Plushies"],
            price: 15,
            image: seal,
        },
        {
            id: 102,
            name: "Sock Monkey Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: sockMonkey,
        },
        {
            id: 103,
            name: "Sock Monkey Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: sockMonkeyHat,
        },
        {
            id: 104,
            name: "Stringray",
            category: "Plushie",
            categories: ["Plushies"],
            price: 30,
            image: stingray,
        },
        {
            id: 105,
            name: "Baby Blanket",
            category: ["Home Decor"],
            price: 40,
            image: strawberryCow,
        },
        {
            id: 106,
            name: "Summer Blossom Hotpad",
            category: ["Home Decor"],
            price: 10,
            image: summerBlossom,
        },
        {
            id: 107,
            name: "Summer Blossom Mandala",
            category: ["Home Decor"],
            price: 120,
            image: summberBlossomMandala,
        },
        {
            id: 108,
            name: "Summer Blossom Mandala",
            category: ["Home Decor"],
            price: 120,
            image: secondSummerBlossomMandala,
        },
        {
            id: 109,
            name: "Sunflower Hotpad",
            category: ["Home Decor"],
            price: 10,
            image: sunflower,
        },
        {
            id: 110,
            name: "Rose Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: tanCream,
        },
        {
            id: 111,
            name: "Rose Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: tealBlue,
        },
        {
            id: 112,
            name: "Heart Hat",
            category: "Accessory",
            categories: ["Accessories", "Seasonal"],
            price: 15,
            image: tealCoral,
        },
        {
            id: 113,
            name: "Scarf",
            category: "Accessory",
            categories: ["Accessories"],
            price: 15,
            image: twirly,
        },
        {
            id: 114,
            name: "Scarf",
            category: "Accessory",
            categories: ["Accessories"],
            price: 15,
            image: secondTwirly,
        },
        {
            id: 115,
            name: "Scarf",
            category: "Accessory",
            categories: ["Accessories"],
            price: 15,
            image: thirdTwirly,
        },
        {
            id: 116,
            name: "Scarf",
            category: "Accessory",
            categories: ["Accessories"],
            price: 15,
            image: fourthTwirly,
        },
        {
            id: 117,
            name: "Voodoo Doll",
            category: "Plushie",
            categories: ["Plushies", "Seasonal"],
            price: 15,
            image: voodoo,
        },
        {
            id: 118,
            name: "Voodoo Doll",
            category: "Plushie",
            categories: ["Plushies", "Seasonal"],
            price: 15,
            image: voodooDoll,
        },
    ]

    const [searchParams] = useSearchParams()

    const validCategories = [
        "All Items",
        "Plushies",
        "Accessories",
        "Home Decor",
        "Patterns",
    ]

    const categoryFromUrl = searchParams.get("category")

    const [activeCategory, setActiveCategory] = useState(
        validCategories.includes(categoryFromUrl)
            ? categoryFromUrl
            : "All Items"
    )

        const [sortBy, setSortBy] = useState("featured")
        const [visibleProducts, setVisibleProducts] = useState(8)


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

        const filteredProducts =
            activeCategory === "All Items"
                ? products
                : activeCategory === "Favorites"
                ? products.filter((product) =>
                    favorites.includes(product.id)
                )
                : products.filter((product) =>
                    product.categories?.includes(activeCategory)
                )

        const sortedProducts = [...filteredProducts].sort((a, b) => {

            if (sortBy === "price-low") {
                return a.price - b.price
            }

            if (sortBy === "price-high") {
                return b.price - a.price
            }

            if (sortBy === "name-az") {
                return a.name.localeCompare(b.name)
            }

            if (sortBy === "name-za") {
                return b.name.localeCompare(a.name)
            }

            return 0
        })

        const displayedProducts = sortedProducts.slice(0, visibleProducts)

        const toggleFavorite = (productId) => {

            setFavorites((currentFavorites) => {
                const updatedFavorites = currentFavorites.includes(productId)
                    ? currentFavorites.filter((id) => id !== productId)
                    : [...currentFavorites, productId]

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
            setVisibleProducts(8)
        }, [activeCategory, sortBy])

        useEffect(() => {
            if (window.location.hash === "#products") {
                setTimeout(() => {
                    const productsSection = document.getElementById("products")

                    if (productsSection) {
                        productsSection. scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                    }
                }, 100)
            }
        }, [])

    return (
        <main className="shop-page">

            <img
                src={shopLeaf}
                alt=""
                className="shop-corner-leaf"
            />

            {/*ANNOUNCEMENT BAR */}
            <div className="shop-announcement">

                <div className="shop-announcement-inner">

                    <span className="shop-announcement-ladybug">
                        🐞
                    </span>

                    <p>
                        HANDMADE GOODIES FOR A BRIGHTER DAY
                    </p>

                    <span className="shop-announcement-ladybug">
                        🐞
                    </span>

                </div>

                <div className="shop-announcement-socials">

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
                        rel="nooepenr noreferrer"
                        aria-label="TikTok"
                    >
                        <FaTiktok />
                    </a>

                </div>

            </div>

            {/* SHOP NAVBAR */}
            <nav className="shop-navbar">

                <div className="shop-nav-left">
                    <Link to="/">HOME</Link>
                    <Link to="/shop">SHOP</Link>
                    <Link to="/#about">ABOUT</Link>
                </div>

                <Link to="/" className="shop-nav-logo-link">
                    <picture>
                        <source media="(max-width: 650px)" srcSet={mobileLogo} />
                        <img
                            src={logo}
                            alt="Ladybug Lane Crochet"
                            className="shop-nav-logo"
                        />
                    </picture>
                </Link>

                <div className="shop-nav-right">
                    <Link to="/contact">CUSTOMS</Link>
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

            {/* SHOP HERO */}
            <section className="shop-hero">

                <svg
                    className="shop-hero-wave shop-hero-wave-top"
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

                <div className="shop-hero-left">

                    <h1>Shop</h1>

                    <img
                        src={shopNote}
                        alt="Handmade happiness"
                        className="shop-hero-note"
                    />

                    <p className="shop-hero-description">
                        Cozy creations, made with care,
                        <br />
                        for brighter days.
                    </p>

                    <button
                        className="shop-all-button"
                        onClick={() => {
                            document
                                .getElementById("products")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }}
                    >
                        SHOP ALL
                        <span>→</span>
                    </button>

                </div>

                <div className="shop-hero-image">

                    <svg
                        className="shop-photo-top-wave"
                        viewBox="0 0 1440 90"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="
                                M0,0 H1440 V45
                                C1320,80 1200,10 1080,45
                                C960,80 840,10 720,45
                                C600,80 480,10 360,45
                                C240,80 120,10 0,45
                                Z
                            "
                            fill="#f6eee3"
                        />
                    </svg>

                    <img
                        src={heroBlanket}
                        alt="Handmade chunky crochet blanket"
                        className="shop-blanket-image"
                    />

                    <img
                        src={shopHeart}
                        alt=""
                        className="shop-image-heart"
                    />

                    <div className="shop-image-note-wrap">

                        <div className="shop-image-note-glow"></div>

                        <img
                            src={shopHeroNote}
                            alt="Good things are handmade"
                            className="shop-image-note"
                        />

                    </div>

                </div>

                <img
                    src={shopFlower}
                    alt=""
                    className="shop-hero-flower"
                />

                <svg
                    className="shop-hero-wave shop-hero-wave-bottom"
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

            {/* CATEGORIES */}
            <div className="shop-main">

                <section className="shop-categories">

                    <button
                        className={`shop-category ${
                            activeCategory === "Plushies" ? "active" : ""
                        }`}
                        onClick={() => setActiveCategory("Plushies")}
                    >
                        <img
                            src={shopFlowerIcon}
                            alt=""
                            className="shop-category-icon shop-category-flower"
                        />
                        <span>PLUSHIES</span>
                    </button>

                    <button
                        className={`shop-category ${activeCategory === "Accessories" ? "active" : ""}`}
                        onClick={() => setActiveCategory("Accessories")}
                    >
                        <img
                            src={shopBow}
                            alt=""
                            className="shop-category-icon shop-category-bow"
                        />
                        <span>ACCESSORIES</span>
                    </button>
                    
                    <Link
                        to="/coming-soon"
                        className="shop-category"
                    >
                        <img
                            src={shopPurse}
                            alt=""
                            className="shop-category-icon shop-category-purse"
                        />
                        <span>BAGS</span>
                    </Link>

                    <button
                        className={`shop-category ${activeCategory === "Home Decor" ? "active" : ""}`}
                        onClick={() => setActiveCategory("Home Decor")}
                    >
                        <img
                            src={shopStrawberry}
                            alt=""
                            className="shop-category-icon shop-category-strawberry"
                        />
                        <span>HOME DECOR</span>
                    </button>

                    <button
                        className={`shop-category ${activeCategory === "Seasonal" ? "active" : ""}`}
                        onClick={() => setActiveCategory("Seasonal")}
                    >
                        <img
                            src={shopMushroom}
                            alt=""
                            className="shop-category-icon shop-category-mushroom"
                        />
                        <span>SEASONAL</span>
                    </button>

                    <button
                        className={`shop-category ${activeCategory === "All Items" ? "active" : ""}`}
                        onClick={() => setActiveCategory("All Items")}
                    >
                        <img
                            src={shopLeaf}
                            alt=""
                            className="shop-category-icon shop-category-leaf"
                        />
                        <span>ALL ITEMS</span>
                    </button>

                </section>
            
            </div>

            {/* PRODUCTS */}
            <div className="shop-main">

                <section className="shop-products" id="products">

                    <div className="shop-products-header">
                        
                        <h2>
                            {activeCategory} <span>({sortedProducts.length})</span>
                        </h2>

                        <div className="shop-products-controls">
                            <button
                                className={`shop-favorites-filter ${
                                    activeCategory === "Favorites" ? "active" : ""
                                }`}
                                onClick={() =>
                                    setActiveCategory(
                                        activeCategory === "Favorites"
                                            ? "All Items"
                                            : "Favorites"
                                    )
                                }
                            >
                                <FaRegHeart />
                                FAVORITES
                            </button>

                            <select
                                className="shop-sort"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="featured">Sort by: Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name-az">Name: A-Z</option>
                                <option value="name-za">Name: Z-A</option>
                            </select>
                        </div>
                    </div>

                    <div className="shop-product-grid">

                        {displayedProducts.map((product) => (

                            <article
                                className="shop-product-card"
                                key={product.id}
                            >

                                <div className="shop-product-image-wrap">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="shop-product-image"
                                    />

                                    <button
                                        className={`shop-favorite ${
                                            favorites.includes(product.id) ? "is-favorite" : ""
                                        }`}
                                        onClick={() => toggleFavorite(product.id)}
                                        aria-label={
                                            favorites.includes(product.id)
                                                ? `Remove ${product.name} from favorites`
                                                : `Add ${product.name} to favorites`
                                        }
                                    >
                                        {favorites.includes(product.id)
                                            ? <FaHeart />
                                            : <FaRegHeart />
                                        }
                                    </button>

                                </div>

                                <div className="shop-product-info">

                                    <h3>{product.name}</h3>

                                    <p className="shop-product-category">
                                    {product.displayCategory}
                                    </p>

                                    <p className="shop-product-price">
                                    ${product.price.toFixed(2)}
                                    </p>

                                </div>

                                <button
                                    className="shop-add-cart"
                                    onClick={() => addToCart(product)}
                                >
                                    ADD TO CART
                                </button>

                            </article>

                        ))}

                    </div>

                    {visibleProducts < sortedProducts.length && (
                        <button
                            className="shop-load-more"
                            onClick={() =>
                                setVisibleProducts((current) => current + 8)
                            }
                        >
                            LOAD MORE
                        </button>
                    )}

                </section>

            </div>

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

            {cartMessage && (
                <div className="cart-toast">
                    {cartMessage}
                </div>
            )}

        </main>
    )
}

export default Shop
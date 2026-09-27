import { useState } from "react"
import { Link } from "react-router-dom"
import { FiTrash2 } from "react-icons/fi"
import "./Cart.css"

function Cart() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("ladybugLaneCart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    const saveCart = (updatedCart) => {
        setCart(updatedCart)

        localStorage.setItem(
            "ladybugLaneCart",
            JSON.stringify(updatedCart)
        )
    }

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map((item) =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )

        saveCart(updatedCart)
    }

    const decreaseQuantity = (productId) => {
        const updatedCart = cart
            .map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0)

        saveCart(updatedCart)
    }

    const removeItem = (productId) => {
        const updatedCart = cart.filter(
            (item) => item.id !== productId
        )

        saveCart(updatedCart)
    }

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    )

    return (
        <main className="cart-page">

            <div className="cart-heading">
                <p>YOUR LITTLE BAG OF HAPPINESS</p>
                <h1>Your Cart</h1>
                <span>
                    {cartCount} {cartCount === 1 ? "item" : "items"}
                </span>
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <div className="empty-cart-heart">♡</div>

                    <h2>Your cart is feeling a little empty</h2>

                    <p>
                        Let's find something handmade to fill it with.
                    </p>

                    <Link to="/shop" className="cart-shop-button">
                        SHOP ALL →
                    </Link>
                </div>
            ) : (
                <div className="cart-layout">

                    <section className="cart-items">
                        {cart.map((item) => (
                            <article
                                className="cart-item"
                                key={item.id}
                            >
                                <Link
                                    to="/shop"
                                    className="cart-item-image-wrap"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image"
                                    />
                                </Link>

                                <div className="cart-item-details">
                                    <div>
                                        <h2>{item.name}</h2>

                                        <p className="cart-item-category">
                                            {item.category}
                                        </p>

                                        <p className="cart-item-price">
                                            ${item.price.toFixed(2)}
                                        </p>
                                    </div>

                                    <div className="cart-item-bottom">
                                        <div className="cart-quantity">
                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                aria-label="Decrease quantity"
                                            >
                                                −
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                aria-label="Increase quantity"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            className="cart-remove"
                                            onClick={() =>
                                                removeItem(item.id)
                                            }
                                            aria-label={`Remove ${item.name}`}
                                        >
                                            <FiTrash2 />
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <p className="cart-line-total">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </article>
                        ))}
                    </section>

                    <aside className="cart-summary">
                        <h2>Order Summary</h2>

                        <div className="cart-summary-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="cart-summary-row">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>

                        <div className="cart-summary-divider" />

                        <div className="cart-summary-total">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <button
                            type="button"
                            className="cart-checkout cart-checkout-desktop"
                        >
                            CHECKOUT →
                        </button>

                        <Link
                            to="/coming-soon"
                            className="cart-checkout cart-checkout-mobile"
                        >
                            CHECKOUT →
                        </Link>

                        <Link
                            to="/shop"
                            className="continue-shopping"
                        >
                            ← Continue Shopping
                        </Link>
                    </aside>

                </div>
            )}

        </main>
    )
}

export default Cart
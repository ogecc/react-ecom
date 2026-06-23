
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const {user, logout} = useAuth()
    const {cartItems} = useCart()

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

    return <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className="navbar-brand">Voltic</Link>
            <div className="navbar-links">
                <Link to='/'>Home</Link>
                <Link to='/checkout'>
                    Cart
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </Link>
            </div>
            <div className="navbar-auth">
                {!user ? (<div className="navbar-auth-links">
                    <Link to="/auth?mode=login" className="btn btn-secondary">Login</Link>
                    <Link to="/auth?mode=signup" className="btn btn-primary">Signup</Link>
                </div>) : (
                    <div className="navbar-user">
                        <span className="navbar-greeting">Hello, {user.email}</span>
                        <button className="btn btn-primary" onClick={logout}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    </nav>
}
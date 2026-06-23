import { useState } from 'react'
import {getProducts} from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
    const products = getProducts();
    const [search, setSearch] = useState("")

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    )

    return <div className="page">
        <div className="home-hero">
            <span className="home-eyebrow">New season drop</span>
            <h1 className="home-title">Smart tech, <span className="home-title-accent">sharper living</span></h1>
            <p className="home-subtitle">Curated gadgets and gear engineered to keep up with you.</p>
        </div>
        <div className="container">
            <div className="products-header">
                <h2 className="page-title">Our Products</h2>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {filteredProducts.length === 0 ? (
                <p className="no-results">No products match "{search}".</p>
            ) : (
                <div className='product-grid'>
                    {filteredProducts.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            )}
        </div>
    </div>
}

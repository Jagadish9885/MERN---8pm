
import Banner from './components/Banner'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

import Nav from './components/Nav'
import Products from './components/Products'

import WirelessHeadphonesImage from "./assets/images_pui/1.jpg"



function App() {
  
  const productdetails = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 30 hours battery life.",
    price: 99.99,
    image: WirelessHeadphonesImage,
    category: "Electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Smartphone",
    description: "6.5-inch display, 128GB storage, dual camera system.",
    price: 499.99,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    rating: 4.7,
    inStock: true
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight shoes designed for comfort and performance.",
    price: 79.99,
    image: "https://via.placeholder.com/150",
    category: "Fashion",
    rating: 4.2,
    inStock: false
  },
  {
    id: 4,
    name: "Coffee Maker",
    description: "Automatic drip coffee maker with programmable timer.",
    price: 59.99,
    image: "https://via.placeholder.com/150",
    category: "Home Appliances",
    rating: 4.0,
    inStock: true
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    description: "Mechanical keyboard with RGB backlight and programmable keys.",
    price: 89.99,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    rating: 4.6,
    inStock: true
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and waterproof design.",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    rating: 4.3,
    inStock: true
  },
  {
    id: 7,
    name: "Smartwatch",
    description: "Fitness tracking, heart rate monitor, and notifications.",
    price: 199.99,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    rating: 4.4,
    inStock: true
  },
  {
    id: 8,
    name: "Backpack",
    description: "Durable backpack with multiple compartments for travel.",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    category: "Fashion",
    rating: 4.1,
    inStock: true
  },
  {
    id: 9,
    name: "Desk Lamp",
    description: "LED lamp with adjustable brightness and USB charging port.",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    category: "Home Appliances",
    rating: 4.0,
    inStock: true
  },
  {
    id: 10,
    name: "Electric Kettle",
    description: "1.5L stainless steel kettle with auto shut-off.",
    price: 24.99,
    image: "https://via.placeholder.com/150",
    category: "Home Appliances",
    rating: 4.2,
    inStock: false
  },
  {
    id: 11,
    name: "Laptop",
    description: "15-inch laptop with Intel i5 processor and 8GB RAM.",
    price: 799.99,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    rating: 4.6,
    inStock: true
  },
  {
    id: 12,
    name: "Office Chair",
    description: "Ergonomic chair with lumbar support and adjustable height.",
    price: 149.99,
    image: "https://via.placeholder.com/150",
    category: "Furniture",
    rating: 4.3,
    inStock: true
  },
  {
    id: 13,
    name: "Sunglasses",
    description: "UV-protected stylish sunglasses for men and women.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    category: "Fashion",
    rating: 4.1,
    inStock: true
  },
  {
    id: 14,
    name: "Microwave Oven",
    description: "Compact microwave oven with quick heating function.",
    price: 129.99,
    image: "https://via.placeholder.com/150",
    category: "Home Appliances",
    rating: 4.2,
    inStock: true
  },
  {
    id: 15,
    name: "Tablet",
    description: "10-inch tablet with 64GB storage and Wi-Fi connectivity.",
    price: 299.99,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: 16,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life.",
    price: 25.99,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    rating: 4.3,
    inStock: true
  },
  {
    id: 17,
    name: "Water Bottle",
    description: "Insulated stainless steel bottle keeps drinks cold or hot.",
    price: 15.99,
    image: "https://via.placeholder.com/150",
    category: "Home",
    rating: 4.0,
    inStock: true
  },
  {
    id: 18,
    name: "T-Shirt",
    description: "Cotton t-shirt available in multiple colors.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    category: "Fashion",
    rating: 4.2,
    inStock: true
  },
  {
    id: 19,
    name: "Vacuum Cleaner",
    description: "Bagless vacuum cleaner with powerful suction.",
    price: 159.99,
    image: "https://via.placeholder.com/150",
    category: "Home Appliances",
    rating: 4.4,
    inStock: false
  },
  {
    id: 20,
    name: "Wireless Charger",
    description: "Fast charging pad compatible with all Qi devices.",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: 21,
    name: "Sneakers",
    description: "Casual sneakers with breathable fabric.",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    category: "Fashion",
    rating: 4.3,
    inStock: true
  },
  {
    id: 22,
    name: "Bookshelf",
    description: "Wooden bookshelf with 5 tiers for storage.",
    price: 89.99,
    image: "https://via.placeholder.com/150",
    category: "Furniture",
    rating: 4.2,
    inStock: true
  },
  {
    id: 23,
    name: "Camera",
    description: "DSLR camera with 24MP sensor and Wi-Fi connectivity.",
    price: 999.99,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    rating: 4.7,
    inStock: true
  },
  {
    id: 24,
    name: "Blender",
    description: "High-speed blender for smoothies and shakes.",
    price: 59.99,
    image: "https://via.placeholder.com/150",
    category: "Home Appliances",
    rating: 4.3,
    inStock: true
  },
  {
    id: 25,
    name: "Winter Jacket",
    description: "Warm and stylish jacket for cold weather.",
    price: 129.99,
    image: "https://via.placeholder.com/150",
    category: "Fashion",
    rating: 4.5,
    inStock: true
  }
];

  return (
    <>
      <div className='border border-2 border-danger p-2 m-2'>
       <Nav></Nav>
       <Banner></Banner>
       <Feedback></Feedback>
       {/* <Products>CellPhone</Products>
       <Products>Washing Machine</Products> */}
       {
        productdetails.map((p)=>{
          return(
            <Products desc={p.description} rate={p.price}
             pic={p.image} category={p.category}
             rating={p.rating}>{p.name}</Products>
          )
        })
       }
       </div>
    </>
  )
}

// id: 1,
//     name: "Wireless Headphones",
//     description: "Noise-cancelling over-ear headphones with 30 hours battery life.",
//     price: 99.99,
//     image: "https://via.placeholder.com/150",
//     category: "Electronics",
//     rating: 4.5,
//     inStock: true



export default App

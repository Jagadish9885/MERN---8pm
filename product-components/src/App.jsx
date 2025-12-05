
import Banner from './components/Banner'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

import Nav from './components/Nav'
import Products from './components/Products'


import WirelessHeadphonesImage from './assets/images_pui/1.jpg'
import Smartphone from './assets/images_pui/2.webp'
import RunningShoes from './assets/images_pui/3.webp'
import CoffeeMaker from './assets/images_pui/4.webp'
import GamingKeyboard from './assets/images_pui/5.jpg'
import BluetoothSpeaker from './assets/images_pui/6.webp'
import Smartwatch from './assets/images_pui/7.jpeg'
import Backpack from './assets/images_pui/8.jpeg'
import DeskLamp from './assets/images_pui/9.jpeg'
import ElectricKettle from './assets/images_pui/10.jpeg'




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
    image: Smartphone,
    category: "Electronics",
    rating: 4.7,
    inStock: true
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight shoes designed for comfort and performance.",
    price: 79.99,
    image: RunningShoes,
    category: "Fashion",
    rating: 4.2,
    inStock: false
  },
  {
    id: 4,
    name: "Coffee Maker",
    description: "Automatic drip coffee maker with programmable timer.",
    price: 59.99,
    image: CoffeeMaker,
    category: "Home Appliances",
    rating: 4.0,
    inStock: true
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    description: "Mechanical keyboard with RGB backlight and programmable keys.",
    price: 89.99,
    image: GamingKeyboard,
    category: "Electronics",
    rating: 4.6,
    inStock: true
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and waterproof design.",
    price: 49.99,
    image: BluetoothSpeaker,
    category: "Electronics",
    rating: 4.3,
    inStock: true
  },
  {
    id: 7,
    name: "Smartwatch",
    description: "Fitness tracking, heart rate monitor, and notifications.",
    price: 199.99,
    image: Smartwatch,
    category: "Electronics",
    rating: 4.4,
    inStock: true
  },
  {
    id: 8,
    name: "Backpack",
    description: "Durable backpack with multiple compartments for travel.",
    price: 39.99,
    image: Backpack,
    category: "Fashion",
    rating: 4.1,
    inStock: true
  },
  {
    id: 9,
    name: "Desk Lamp",
    description: "LED lamp with adjustable brightness and USB charging port.",
    price: 29.99,
    image: DeskLamp,
    category: "Home Appliances",
    rating: 4.0,
    inStock: true
  },
  {
    id: 10,
    name: "Electric Kettle",
    description: "1.5L stainless steel kettle with auto shut-off.",
    price: 24.99,
    image: ElectricKettle,
    category: "Home Appliances",
    rating: 4.2,
    inStock: false
  },
];

  return (
    <>
      <div className='border border-2 border-danger p-2 m-2'>
       <Nav></Nav>
       <Banner></Banner>
       <Feedback></Feedback>
       {/* <Products>CellPhone</Products>
       <Products>Washing Machine</Products> */}
      <div className='d-flex flex-wrap justify-content-evenly'>
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

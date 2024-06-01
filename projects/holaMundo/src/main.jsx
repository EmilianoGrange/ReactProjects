//import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import { TwitterCard } from './components/TwitterCard.jsx'
import './index.css'

// const createButton = ({text}) => {
//   return(<button>{text}</button>)
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     {createButton({text: "Hola!"})}
//     {createButton({text: "mundo!"})}
//     {createButton({text: "Chau!"})}
//   </>
// )

// const Button = ({text}) => {
//   return(<button>{text}</button>)
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <Button text="Hola!" />
//     <Button text="mundo!" />
//     <Button text="Chau!" />
//   </>
// )

// const Button = ({text}) => {
//   return(<button>{text}</button>)
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <section className="tw-cards-container">
    <TwitterCard isFollowing initialFollowing userName="midudev" name="Miguel Angel Duran" />
    <TwitterCard isFollowing={false} userName="maxifirtman" name="Maximiliano Firtman" />
    <TwitterCard isFollowing userName="InternetH0F" name="Internet Hall of Fame" />
  </section>
)
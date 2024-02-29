
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/footer/footer'
import Header from './component/header/header'



 

function App() {


  return (
    <>
      <div className="complete">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App

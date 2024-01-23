import BarNotice from "../BarNotice/BarNotice"
import LandingPage from "../LandingPage/LandingPage"
import PruebaMontaje from "../PruebaMontaje"
import PruebaMontake from "../PruebaMontake"
import PruebaRef from "../PruebaRef"
import NavBar from "../navbar/navbar"
import "./headermain.css"

function HeaderMain() {
  return (
    <div>
        <BarNotice>
            <p>¡Envíos <strong>gratis</strong> a todo el país!</p>
        </BarNotice>
        <LandingPage/>
    </div>
  )
}

export default HeaderMain
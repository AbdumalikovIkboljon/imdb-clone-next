
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkMode from './DarkMode'
import { LiaImdb } from "react-icons/lia";

const Header = () => {
  return (
    <div className="flex max-w-7xl mx-auto justify-between items-center p-3">
        <div className="flex items-center gap-4">
            <MenuItem title="home" address="/"  Icon={AiFillHome} />
            <MenuItem title="about" address="/about"  Icon={BsFillInfoCircleFill} />
        </div>
        <div className="flex items-center gap-4">
            <DarkMode />
            
            <LiaImdb className="bg-amber-400 w-[80px] p-0 h-10 rounded-full" />
        </div>

    </div>
  )
}

export default Header
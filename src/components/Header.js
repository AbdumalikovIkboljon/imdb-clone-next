
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkMode from './DarkMode'

const Header = () => {
  return (
    <div className="flex max-w-[1240px] mx-auto justify-between items-center p-3">
        <div className="flex items-center gap-4">
            <MenuItem title="home" address="/"  Icon={AiFillHome} />
            <MenuItem title="about" address="/about"  Icon={BsFillInfoCircleFill} />
        </div>
        <div className="flex items-center gap-4">
            <DarkMode />
            <div className="flex items-center">
                <span className="text-2xl font-bold bg-amber-400 px-2 py-1 rounded-md">IMDb</span>
            </div>
        </div>

    </div>
  )
}

export default Header
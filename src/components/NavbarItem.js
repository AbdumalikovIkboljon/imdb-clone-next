import Link from 'next/link'

import { useSearchParams } from 'next/navigation'

const NavbarItem = ( { title, param }) => {

    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

  return (
    <div>
        <Link className={`hover:text-amber-400 transition-colors duration-300 ${genre && genre === param && 'text-amber-400 border-b-2 border-amber-400 pb-[17px]'}`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem
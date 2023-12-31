import {ReactNode} from 'react'
import { MainNav } from './components/custom/main_nav'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-black'>
      <MainNav/>
      {children}
    </div>
  )
}

export default Layout
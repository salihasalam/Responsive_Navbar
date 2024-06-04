import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
    const [extendNavBar,setExtendNavBar]=useState(false)

  return (
    <div className="bg-blue-800 h-20 px-6">
<div className="max-w-7xl mx-auto flex justify-between">
    <div className="flex items-center h-20 font-PTSansNarrow">
        <h1 className="text-4xl font-bold">Logo</h1>
    </div>
    <div className="flex gap-6">
        <ul className={`lg:static flex flex-col lg:flex-row lg:items-center absolute gap-6 text-xl duration-500 
        ${extendNavBar ? "left-5 top-24":"left-[-150px] top-24"}`}>
            <li className='hover:text-blue-500 cursor-pointer'>Home</li>
            <li className='hover:text-blue-500 cursor-pointer'>Contact</li>
            <li className='hover:text-blue-500 cursor-pointer'>About</li>
            <li className='hover:text-blue-500 cursor-pointer'>Signin</li>
            <li className='hover:text-blue-500 cursor-pointer'>Signup</li>

        </ul>
        <div className="flex h-20 items-center cursor-pointer lg:hidden" 
        onClick={()=>{setExtendNavBar(open=>!open)}}>
            {
                extendNavBar ? <ClearIcon/> : <MenuIcon/>
            }
        </div>
    </div>
</div>

    </div>
  )
}

export default Navbar
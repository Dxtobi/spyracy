import { Link, useLocation} from "react-router-dom";
import {IoMdNotifications} from 'react-icons/io'
// import { useState } from "react";

const LinksArray = ['watch', 'movies', 'extras', 'life streams', 'pay it forward', 'community']
const logedInLinksArray = ['home', 'uploads', 'community', ]
function Header() {
   const logedin = true
    const location = useLocation()

            if (logedin) {
                return LogedInHeader(location)
            } else {
                return notLogedInHeader(location)
            }
    
}

export default Header;

function LogedInHeader(location) {
    return (
        <div className="w-full flex bg-[#CBC5B6] p-4 items-center justify-between px-10">
                <div className="flex gap-[3rem] items-center">
                    <a href="/" className="text-2xl font-bold ">SPIRACY</a>
                    <div className="flex gap-10 ">
                        {
                            logedInLinksArray.map((link, i) => (
                                <Link key={i} to={`/${link}`} className={`uppercase py-2 ${location.pathname === `/${link}` ? 'border-b-orange-600 border-b-4' : ''}`}>{link}</Link>
                            ))
                        }
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                <Link to='/notifications' className=""><IoMdNotifications className="text-3xl text-[#EB440F]"/></Link>
                    <Link to='/signup' className="rounded-full p-3 bg-[#EB440F]">SWITCH TO APP</Link>
                </div>
                
            </div>
    )
}

function notLogedInHeader(location) {
    return (
        <div className="w-full flex bg-[#CBC5B6] p-4 items-center justify-between px-10">
          <div className="flex gap-[3rem] items-center">
            <a href="/" className="text-2xl font-bold">SPIRACY</a>
            <div className="flex gap-10">
              {LinksArray.map((link, i) => (
                <Link
                  key={i}
                  to={`/${link}`}
                  className={`uppercase ${location.pathname === `/${link}` ? 'font-bold' : ''}`}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
      
          <div className="flex gap-2 items-center">
            <Link to="/notifications" className="">
              <IoMdNotifications className="text-3xl text-[#EB440F]" />
            </Link>
            <Link to="/signup" className="rounded-full p-3 bg-[#EB440F]">Signup</Link>
          </div>
        </div>
      );
}
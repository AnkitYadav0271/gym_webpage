import { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/mediaQuery";

import { Bars3Icon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useScrollHook } from "../hooks/useScroll";
import { Login } from "../authentication/Login";
import { Signup } from "../authentication/Signup";



export default function Navbar() {
    const flexBox = "flex items-center justify-center  ";
    const [selected, setSelected] = useState('home');
    const [isToggled, setToggled] = useState(false);
    const scroll = useScrollHook()
    let isAboveMediumScreens = useMediaQuery("(min-width:800px)");
    const [showModal, setShowModal] = useState<'login' | 'signup' | null>(null);

    return (
        <nav>
            <div
                className={`${flexBox} w-full py-6  fixed top-0 bg-[#DFCCCC]  font-sans z-20 nav-div`}

            >
                <div
                    className={` flex items-center justify-between gap-16 w-5/6 m-auto`}
                >
                    <a href="/"><img src="Logo.png" alt="logo" /></a>
                    {isAboveMediumScreens ? (<div
                        className={"flex justify-between items-center gap-16  text-sm"}
                    >
                        <div className="links gap-8 flex items-center justify-between">
                            <Link to="/" onClick={() => { setSelected('home'); scroll(`home`) }} className={`${selected === 'home' ? "text-[#ff616a]" : "text-[#5e0000]"} capitalize text-sm font-medium hover:text-[#FF616A]`}>home</Link>
                            <Link to="/benefits" onClick={() => { setSelected('benefits'); scroll(`benefits`) }} className={`${selected === 'benefits' ? "text-[#ff616a]" : "text-[#5e0000]"} capitalize text-sm font-medium hover:text-[#FF616A]`}>benefits</Link>
                            <Link to="/our-classes" onClick={() => { setSelected('ourClasses'); scroll(`our-classes`) }} className={`${selected === 'ourClasses' ? "text-[#ff616a]" : "text-[#5e0000]"} capitalize text-sm font-medium hover:text-[#FF616A]`}>our classes</Link>
                            <Link to="/contact-us" onClick={() => { setSelected('contactUs'); scroll(`contact-us`) }} className={`${selected === 'contactUs' ? "text-[#ff616a]" : "text-[#5e0000]"} capitalize text-sm font-medium hover:text-[#FF616A]`}>contact us</Link>

                        </div>

                        <div className="flex items-center justify-between gap-8  ">
                            <button className={" h-10 capitalize rounded cursor-pointer text-sm font-medium text-[#5e0000] bg-white px-2"}  onClick={()=>setShowModal("login")}>login</button>
                            <button onClick={()=> setShowModal("signup")}  className="h-10 rounded cursor-pointer bg-[#ffc837] px-2 " >Become a Member</button>
                        </div>
                    </div>) :
                        (<button
                            onClick={() => setToggled(!isToggled)}
                            className="rounded-full bg-[#ffc132] p-2"
                        >

                            <Bars3Icon className="text-white h-6 w-6" />
                        </button>)
                    }

                </div>

            </div>

            {
                !isAboveMediumScreens && isToggled && (
                    <div
                        className="fixed bg-[#ffa6a3] h-full z-20 top-0 right-0 bottom-0 w-[300px]  drop-shadow-xl"
                    >
                        <div className="flex items-center justify-end ">
                            <button onClick={() => setToggled(false)}>
                                <XMarkIcon className=" text-gray-400 h-16 w-16 p-2" />
                            </button>
                        </div>

                        <div className="links gap-8 flex items-center flex-col justify-between">
                            <Link to="/" onClick={() => { setSelected('home'); scroll(`home`) }} className={`${selected === 'home' ? "text-[#ff616a]" : "text-[#5e0000]"} font-bold capitalize text-sm font-medium hover:text-[#ff616a]`}>home</Link>
                            <Link to="/benefits" onClick={() => { setSelected('benefits'); scroll(`benefits`) }} className={`${selected === 'benefits' ? "text-[#ff616a]" : "text-[#5e0000]"} font-bold capitalize text-sm font-medium hover:text-[#ff616a]`}>benefits</Link>
                            <Link to="/our-classes" onClick={() => { setSelected('ourClasses'); scroll(`our-classes`) }} className={`${selected === 'ourClasses' ? "text-[#ff616a]" : "text-[#5e0000]"} font-bold capitalize text-sm font-medium hover:text-[#ff616a]`}>our classes</Link>
                            <Link to="/contact-us" onClick={() => { setSelected('contactUs'); scroll(`contact-us`) }} className={`${selected === 'contactUs' ? "text-[#ff616a]" : "text-[#5e0000]"} font-bold capitalize text-sm font-medium hover:text-[#ff616a]`}>contact us</Link>

                        </div>
                    </div>
                )
            }

        {showModal && (
  <div className="fixed inset-0 bg-white/30 backdrop-blur-sm rounded  bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white/60 p-3 rounded shadow-lg  backdrop-blur-lg w-5/12 drop-shadow-sm">
      {showModal === 'login' ? <Login /> : <Signup/>}
      <button className="mt-2 text-sm text-gray-500 cursor-pointer hover:text-[#ff616a] transition-colors" onClick={() => setShowModal(null)}>Close</button>
    </div>
  </div>
)}

        </nav>
    );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/mediaQuery";
import { Button } from "../shared/Button";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useScrollHook } from "../hooks/useScroll";



export default function Navbar() {
    const flexBox = "flex items-center justify-center  ";
    const [selected, setSelected] = useState('home');
    const [isToggled,setToggled] = useState(false);
    const scroll = useScrollHook()
    let isAboveMediumScreens = useMediaQuery("(min-width:800px)")
    return (
        <nav>
            <div
                className={`${flexBox} w-full py-6  fixed top-0 bg-[#DFCCCC]  font-sans z-10 nav-div`} 
                
            >
                <div
                    className={` flex items-center justify-between gap-16 w-5/6 m-auto`}
                >
                    <a href="/"><img src="Logo.png" alt="logo" /></a>
                    {isAboveMediumScreens ? (<div
                        className={"flex justify-between items-center gap-16  text-sm"}
                    >
                        <div className="links gap-8 flex items-center justify-between">
                            <Link to="/" onClick={() =>{ setSelected('home'); scroll(`home`)}} className={`${selected === 'home' ? "text-[#ff616a]" : "text-[#5e0000]"} capitalize text-sm font-medium hover:text-[#FF616A]`}>home</Link>
                            <Link to="/benefits" onClick={() =>{ setSelected('benefits'); scroll(`benefits`)}} className={`${selected === 'benefits' ? "text-[#ff616a]" : "text-[#5e0000]"} capitalize text-sm font-medium hover:text-[#FF616A]`}>benefits</Link>
                                <Link to="/our-classes" onClick={() =>{ setSelected('ourClasses'); scroll(`our-classes`) }} className={`${selected === 'ourClasses' ? "text-[#ff616a]" : "text-[#5e0000]"} capitalize text-sm font-medium hover:text-[#FF616A]`}>our classes</Link>
                            <Link to="/contact-us" onClick={() => {setSelected('contactUs'); scroll(`contact-us`)}} className={`${selected === 'contactUs' ? "text-[#ff616a]" : "text-[#5e0000]"} capitalize text-sm font-medium hover:text-[#FF616A]`}>contact us</Link>

                        </div>

                        <div className="flex items-center justify-between gap-8  ">
                            <Link className={" capitalize  text-sm font-medium text-[#5e0000] "} to="/">login</Link>
                            <Button className="rounded  bg-[#ffc837] px-2 " to="/become-a-member">Become a Member</Button>
                        </div>
                    </div>) :
                        (<button
                            onClick={()=> setToggled(!isToggled)}
                            className="rounded-full bg-[#ffc132] p-2"
                        >
                            
                        <Bars3Icon className="text-white h-6 w-6"/>
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
                    <button onClick={()=>setToggled(false)}>
                     <XMarkIcon className=" text-gray-400 h-16 w-16 p-2"/>
                    </button>
                    </div>

                    <div className="links gap-8 flex items-center flex-col justify-between">
                            <Link to="/" onClick={() =>{ setSelected('home'); scroll(`home`)}} className={`${selected === 'home' ? "text-[#ff616a]" : "text-[#5e0000]"} font-bold capitalize text-sm font-medium hover:text-[#ff616a]`}>home</Link>
                            <Link to="/benefits" onClick={() =>{ setSelected('benefits'); scroll(`benefits`) }} className={`${selected === 'benefits' ? "text-[#ff616a]" : "text-[#5e0000]"} font-bold capitalize text-sm font-medium hover:text-[#ff616a]`}>benefits</Link>
                            <Link to="/our-classes" onClick={() =>{setSelected('ourClasses'); scroll(`our-classes`)}} className={`${selected === 'ourClasses' ? "text-[#ff616a]" : "text-[#5e0000]"} font-bold capitalize text-sm font-medium hover:text-[#ff616a]`}>our classes</Link>
                            <Link to="/contact-us" onClick={() => {setSelected('contactUs'); scroll(`contact-us`)} } className={`${selected === 'contactUs' ? "text-[#ff616a]" : "text-[#5e0000]"} font-bold capitalize text-sm font-medium hover:text-[#ff616a]`}>contact us</Link>

                        </div>
                    </div>
                )
            }

            
        </nav>
    );
}
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/mediaQuery";
import { Button } from "../shared/Button";
import { motion } from "framer-motion";
import { useScrollHook } from "../hooks/useScroll";
import { useState } from "react";
import { Signup } from "../authentication/Signup";
import { Login } from "../authentication/Login";


export function Home() {
    let isAboveMediumScreens = useMediaQuery("(min-width:800px)")
    let scroll = useScrollHook();
    const [showModal, setShowModal] = useState<'login' | 'signup' | null>(null);

    return (

        <section id="home" className="gap-16 bg-[#DFCCCC] py-2  md:py-10 md:h-full md:pb-0">
            {/* image and main header  */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }} className="md:flex items-center justify-center mx-auto w-5/6 md:h-5/6 gap-5">
                {/* main header  */}
                <div className="z-10 md:basis-3/5 mt-32">
                    {/* headings  */}
                    <div className="md:-top-30">
                        <div className="relative   ">
                            <div className=" md:before:absolute md:before:-top-30  image-before p-6 flex items-center justify-center">
                                <img src="HomePageText.png" alt="home_page_text" />
                            </div>
                        </div>
                        <p className="font-alt text-[#5e0000] ">
                            Your body can stand almost anything. It’s your mind you have to convince.
                            Every rep, every drop of sweat—you're rewriting your limits.
                        </p>
                    </div>
                    <div className="flex gap-8 items-center   py-3">
                        <button  onClick={()=> setShowModal("signup")} className="bg-[#ffc132] hover:text-[#ffa6a3] p-2 cursor-pointer rounded"><p className="text-[#5e0000]" >Join Now</p></button>
                        <Link to={"/contact-us"} onClick={()=> scroll("contact-us")}> <p className=" text-[#e63946] underline font-alt">learn more</p> </Link>
                    </div>
                </div>


                {/* images are going to placed here  */}

                <div className="top-20 flex items-center justify-center basis-3/5 md:ml-27 md:mt-16 z-10">
                    <img className="h-[300px]" src="HomePageGraphic.png" alt="" />
                </div>
            </motion.div>

            {
                isAboveMediumScreens && (
                    <div className="bg-[#ffa6a3]">
                        <div>
                            <div className="flex justify-center items-center gap-32 py-6">
                                <img src="SponsorRedBull.png" alt="red-bull-sponsor" />
                                <img src="SponsorFortune.png" alt="fortune-sponsor" />
                                <img src="SponsorForbes.png" alt="forbes-sponsor" />
                            </div>
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
        
        </section>

    );
}
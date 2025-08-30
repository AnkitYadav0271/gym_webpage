

import { motion } from "framer-motion";
import { HeaderText } from "../shared/HeaderText";
import { features } from "../API/features";

import { Link } from "react-router-dom";
import { Button } from "../shared/Button";

export function Benefits() {


    return (
        <section className="py-6 mx-auto min-h-full w-5/7" id="benefits">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }} >
                <div className="md:w-5/12 md:my-6">
                    <HeaderText className="text-[#5e0000]">More Than Just a Gym</HeaderText>
                    <p className="text-[#5e0000] my-5 text-sm ">Elevate your fitness journey with world-class equipment, expert trainers, and personalized workout plans. From beginners to pros, we provide the tools and space where health meets excellence.</p>
                </div>

                <motion.div className=" flex flex-col md:flex-row gap-8 mt-6 items-center justify-between py-2.5">
                    {
                        features.map((benefit) => (
                            <div className="border-2 border-[#5e0000] flex items-center justify-center flex-col gap-4 py-4 rounded " key={benefit.id}>
                                <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center">
                                    <benefit.icon className="text-[#5e0000] h-8 w-8"></benefit.icon>
                                </div>
                                <h3 className="mt-4 text-[#5e0000] px-4">{benefit.title}</h3>
                                <p className="mt-4 text-[#5e0000] px-4 text-sm" >{
                                    benefit.description
                                } </p>

                                <Link to={"/contact-us"} className="underline "><p className="text-[#ff616a] text-sm underline">Learn more</p></Link>
                            </div>
                        ))


                    }
                </motion.div>
                {/**  graphic and description  */}

                <motion.div initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }} className="mt-10 md:flex-row flex-col flex justify-center items-center gap-16">
                    <img src="/BenefitsPageGraphic.png" alt="benefits page" className="h-90 mx-auto" />
                    <div className="relative ">
                        {/* title  */}

                        <motion.div className=" p-6 md:before:absolute md:before:-top-30   ">
                            <HeaderText className="">MILLIONS OF MEMBERS GETTING {" "} <span className="text-[#ff616a]">FIT</span>.</HeaderText>

                        </motion.div>

                        {/* description  */}

                        <div className="px-4">
                            <p className="text-base text-[#5e0000]">
                                Join a thriving community where motivation meets movement. Whether you're just starting out or pushing past plateaus, our members support each other every step of the way. From personalized workouts to real-time progress tracking, we make fitness feel empowering, inclusive, and fun. Let’s redefine what it means to get fit—together.
                            </p>

                            <p className="text-base font-medium text-[#5e0000] mt-2">
                                Whether you're just starting out or pushing past plateaus, our community is built to uplift, challenge, and celebrate every step of your fitness journey.
                            </p>


                        </div>

                        <div className="mt-6 px-4">
                            <Button to="contact-us">Join Now</Button>
                        </div>

                        {/* button  */}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
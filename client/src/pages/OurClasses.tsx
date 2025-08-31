import { motion } from "framer-motion";
import { HeaderText } from "../shared/HeaderText";
import { gymClasses } from "../API/features";


export function OurClasses() {
    const overlayStyles = `p-5 absolute z-14 flex h-[287px]  flex-col items-center justify-center whitespace-normal bg-[#ff616a] text-center text-white transition duration-500 opacity-0 hover:opacity-90 overflow-hidden`
    return (
        <section id="our-classes" className="w-full bg-[#DFCCCC] py-6">
            <motion.div className="py-6 w-5/6 mx-auto ">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="md:w-3/5 ml-5">
                        <HeaderText>
                            Our Classes
                        </HeaderText>

                        <p className="mt-3 text-[#5e0000]">
                            Our classes blend deep learning with hands-on practice to build real-world skills. Each session encourages curiosity, collaboration, and creative problem-solving. With expert guidance and interactive methods, we make learning both effective and enjoyable.
                        </p>
                    </div>

                    <div className="mt-10 w-full overflow-x-auto overflow-y-hidden h-[353px]">
                        <ul className="w-[2500px] whitespace-nowrap">

                            {
                                gymClasses.map((ourClass) => (
                                    <li className="mx-5 relative inline-block h-[380px] w-[380px] cursor-pointer " key={ourClass.id}>
                                        <div className={overlayStyles}>
                                            <p className="text-2xl">{ourClass.name}</p>
                                            <p className="mt-5">{ourClass.description}</p>
                                        </div>

                                        <img src={ourClass.image} alt={ourClass.name} />
                                    </li>
                                )

                                )
                            }

                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
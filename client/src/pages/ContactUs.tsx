
import { HeaderText } from "../shared/HeaderText";
import { useForm } from "react-hook-form"
import { motion } from "framer-motion";


export const ContactUs = () => {

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const formSubmitHandler = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (<section id="contact-us">

        <div className=" justify-center items-center w-5/6 m-auto mt-5 py-6">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                <HeaderText className="text-3xl font-bold text-[#5e0000]"><span className="text-[#ff616a]">JOIN NOW</span>  TO GET IN SHAPE</HeaderText>
                <p className=" text-[#5e0000] mt-5  ">Start your transformation today with expert guidance and a supportive community. Whether you're a beginner or a seasoned athlete, our programs are built to push limits and deliver results. No excuses—just progress, strength, and a healthier you.</p>
            </motion.div>
            {/* Form and Contact us GRaphics  */}

            <div className="md:flex justify-between items-center gap-8 mt-10">
                <motion.div className=" md:flex  justify-around mx-auto gap-10"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }} >

                    <form action="https://formsubmit.co/ankitofficial0271@gmail.com" className="flex flex-col gap-6 mt-5  m-auto  " target="_blank" onSubmit={formSubmitHandler}>
                        <input type="text" placeholder="NAME" className="w-full rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white"  {...register("name", {
                            required: true,
                            maxLength: 100

                        })}

                        />

                        {errors.name && (
                            <p className="mt-1 text-[#ff616a]">{
                                errors.name.type === "required" && "Name is required"
                            }
                                {
                                    errors.name.type === "maxLength" && "Maxlength is exceeded for name"
                                }
                            </p>
                        )}


                        <input type="text" placeholder="EMAIL" className="w-full rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white"  {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

                        })}

                        />

                        {errors.email && (
                            <p className="mt-1 text-[#ff616a]">{
                                errors.email.type === "required" && "Name is required"
                            }
                                {
                                    errors.email.type === "pattern" && "Invalid Email"
                                }
                            </p>
                        )}


                        <textarea rows={4} cols={50} placeholder="MESSAGE" className="w-full rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white"  {...register("name", {
                            required: true,
                            maxLength: 100

                        })}

                        />

                        {errors.name && (
                            <p className="mt-1 text-[#ff616a]">{
                                errors.name.type === "required" && "Name is required"
                            }
                                {
                                    errors.name.type === "maxLength" && "Maxlength is exceeded for name"
                                }
                            </p>
                        )}



                        <button className="py-3 mt-3 cursor-pointer bg-amber-300 rounded hover:text-white w-[100px]" type="submit">SUBMIT</button>
                    </form>

                    <div className="flex justify-center  md:mt-0  ">
 <img src="ContactUsPageGraphic.png" alt="contact-us-graphic" className="h-[300px] w-[300px]" />
                    </div>

                   
                </motion.div>
            </div>

        </div>
    </section>);
}
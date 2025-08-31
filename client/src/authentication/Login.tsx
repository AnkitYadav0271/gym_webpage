import { useForm } from "react-hook-form";
import {motion} from"framer-motion"

export const Login = ()=> {
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
    
    return (
        <div>
            <div className="border-b-1 border-b-black/30 w-full ">
                <h2 className="text-3xl font-semibold text-[#5e0000]">Login</h2>
            </div>
            <p className="text-[#5e0000]">Enter your credentials correctly and then click login</p>

            <div className="md:flex justify-between items-center gap-8 mt-10">
                <motion.div className=" md:flex  justify-around mx-auto gap-10 w-full"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }} >

                    <form action="https://formsubmit.co/ankitofficial0271@gmail.com" className="flex flex-col gap-6 mt-5 w-5/6 m-auto  " target="_blank" onSubmit={formSubmitHandler}>

                        <input type="text" placeholder="EMAIL" className="w-full rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white  "  {...register("email", {
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

                         <input type="text" placeholder="PASSWORD" className="w-full rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white"  {...register("password", {
                            required: true,
                            maxLength: 100

                        })}

                        />

                       
                        <button className="py-3 h-10 flex items-center justify-center mt-3 cursor-pointer bg-amber-300 rounded hover:text-white w-[100px]" type="submit">Login</button>

                        </form>
               </motion.div>
               </div>

        </div>
    );
}
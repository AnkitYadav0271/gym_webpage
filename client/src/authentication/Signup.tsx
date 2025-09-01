import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { HeaderText } from "../shared/HeaderText";

export const Signup = () => {
  const {
    register,
    trigger,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const password = watch("password");

  //Form Handler

  const formSubmitHandler = async (data: any) => {
    const { confirmPassword, ...payload } = data;

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      let result;

      try{
         result = await response.json();
      }catch(err){
        result = {message:"Invalid return type"}
      }

    
        if (response.ok) {
          console.log("Signup successful:", result);
        } else {
          console.log("Signup error:", result);
        }
     


    } catch (error) {
      console.error("Signup request failed:", error);
      throw error;
    }
  };

  return (
    <div className="">
      <div className=" w- h-5/6 border-b-1 border-b-black/50 mt-1">
        <HeaderText>Signup</HeaderText>
      </div>
      <p className="text-[#5e0000]">Enter your credentials correctly and then click signup</p>

      <div className="md:flex justify-between items-center gap-4 mt-10">
        <motion.div
          className="md:flex justify-around mx-auto gap-5  w-full"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <form
            action=""
            className="flex flex-col gap-3 mt-5 m-auto w-5/6"
            target="_blank"
            onSubmit={handleSubmit(formSubmitHandler)}
          >
            {/* Name */}
            <input
              type="text"
              placeholder="NAME"
              className="w-full h-10 rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className="mt-1 text-[#ff616a]">
                {errors.name.type === "required" && "Name is required"}
                {errors.name.type === "maxLength" &&
                  "Maxlength is exceeded for name"}
              </p>
            )}

            {/* Email */}
            <input
              type="text"
              placeholder="EMAIL"
              className="w-full h-10 rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
              })}
            />
            {errors.email && (
              <p className="mt-1 text-[#ff616a]">
                {errors.email.type === "required" && "Email is required"}
                {errors.email.type === "pattern" && "Invalid Email"}
              </p>
            )}

            {/* Phone */}
            <input
              type="text"
              placeholder="PHONE"
              className="w-full h-10 rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white"
              {...register("phone", {
                required: true,
                pattern: /^[6-9]\d{9}$/
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-[#ff616a]">
                {errors.phone.type === "required" && "Phone is required"}
                {errors.phone.type === "pattern" && "Invalid Phone number"}
              </p>
            )}

            {/* Password */}
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full h-10 rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white"
              {...register("password", {
                required: true,
                maxLength: 100,
                minLength: 8
              })}
            />
            {errors.password && (
              <p className="mt-1 text-[#ff616a]">
                {errors.password.type === "required" && "Password is required"}
                {errors.password.type === "maxLength" &&
                  "Password length should not exceed 100 chars"}
                {errors.password.type === "minLength" &&
                  "Password should be at least 8 characters long"}
              </p>
            )}

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="CONFIRM PASSWORD"
              className="w-full h-10 rounded border bg-[#ffa6a3] px-5 py-3 placeholder-white"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password
              })}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-[#ff616a]">
                {errors.confirmPassword.type === "validate" &&
                  "Passwords should match"}
              </p>
            )}

            <button
              className="py-3 mt-3 h-10 flex justify-center items-center cursor-pointer bg-amber-300 rounded hover:text-white w-[100px]"
              type="submit"
            >
              Signup
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

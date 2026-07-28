import React, { useEffect, useState } from 'react'
import image1 from "../../../assets/food_images/image1.png"
import image2 from "../../../assets/food_images/image2.png"
import image3 from "../../../assets/food_images/image3.png"
import image4 from "../../../assets/food_images/image4.png"
import image5 from "../../../assets/food_images/image4.png"
import image6 from "../../../assets/food_images/image4.png"
import { motion } from "framer-motion"
import LoginForm from '../components/LoginForm'

const foods = [
    // Top Left
    {
        image: image1,
        top: "-50px",
        left: "-70px",
        size: 320,
        rotate: -18,
        delay: 0,
    },

    // Top Right
    {
        image: image2,
        top: "-20px",
        right: "-50px",
        size: 260,
        rotate: 15,
        delay: 0.8,
    },

    // Middle Left
    {
        image: image3,
        top: "38%",
        left: "-70px",
        size: 240,
        rotate: -12,
        delay: 1.6,
    },

    // Middle Right
    {
        image: image4,
        top: "40%",
        right: "-70px",
        size: 240,
        rotate: 12,
        delay: 2.4,
    },

    // Bottom Left
    {
        image: image5,
        bottom: "-50px",
        left: "20px",
        size: 260,
        rotate: -15,
        delay: 3.2,
    },

    // Bottom Right
    {
        image: image6,
        bottom: "-40px",
        right: "20px",
        size: 260,
        rotate: 10,
        delay: 4,
    },
];
const Login = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX - window.innerWidth / 2) / 40;
            const y = (e.clientY - window.innerHeight / 2) / 40;

            setMouse({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <div className="w-full min-h-screen relative overflow-hidden bg-main flex flex-col-reverse md:flex-row">

            {/* Decorative Blobs */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-light blur-[150px] -top-40 -left-40 opacity-60"></div>

            <div className="absolute w-[380px] h-[380px] rounded-full bg-soft blur-[120px] bottom-[-80px] right-[-80px] opacity-80"></div>

            <div className="relative hidden md:flex md:w-[60%] bg-main overflow-hidden items-center justify-center">

                {/* Decorative Blobs */}
                <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-light blur-[150px] -top-40 -left-40 opacity-60"></div>

                <div className="absolute w-[380px] h-[380px] rounded-full bg-soft blur-[120px] bottom-[-80px] right-[-80px] opacity-80"></div>

                {/* Brand */}
                <div className="z-20 text-center">

                    <span className="badge-success mb-5 inline-block">
                        Restaurant Management
                    </span>

                    <h1 className="text-gradient text-7xl font-black">
                        CafeOS
                    </h1>

                    <p className="text-secondary text-xl mt-5 max-w-lg leading-9">
                        Manage Orders, Inventory, Kitchen, Billing and Customers
                        from one modern dashboard.
                    </p>

                </div>

                {/* Floating Images */}

                {foods.map((food, index) => (
                    <motion.div
                        animate={{
                            x: mouse.x * (index + 1),
                            y: mouse.y * (index + 1),
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 20,
                        }}
                        style={{
                            position: "absolute",
                            top: food.top,
                            left: food.left,
                            right: food.right,
                            bottom: food.bottom,
                        }}
                    >
                        <motion.img
                            src={food.image}
                            style={{
                                width: food.size,
                                filter: "drop-shadow(0px 35px 40px rgba(0,0,0,.18))",
                            }}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [food.rotate, food.rotate + 3, food.rotate],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: food.delay,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                ))}

            </div>

            {/* LOGIN SIDE */}
            <div className="relative w-full  flex justify-center items-center md:w-[40%]  flex items-center justify-center overflow-hidden">



                <LoginForm />

            </div>

        </div>
    )
}

export default Login
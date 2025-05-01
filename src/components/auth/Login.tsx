import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import leftAuthImg from "../../images/LeftauthImg.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0, x: -50 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      try {
        // Safely get and parse users from localStorage
        const usersString = localStorage.getItem("users");
        const users = usersString ? JSON.parse(usersString) : [];

        if (!Array.isArray(users)) {
          throw new Error("Invalid users data");
        }

        const user = users.find(
          (u: any) => u.email === values.email && u.password === values.password
        );

        if (user) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          // Navigate with animation
          setTimeout(() => {
            navigate("/home", {
              state: {
                shouldAnimate: true,
                animationDirection: "right",
              },
            });
          }, 500);
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login");
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="relative md:flex grid md:max-h-[960px]"
    >
      <motion.div className="md:max-w-[50%]" variants={itemVariants}>
        <img
          className="w-full object-cover md:h-full"
          src={leftAuthImg}
          alt="auth Background"
        />
      </motion.div>

      <motion.div
        className="md:max-w-[50%] w-full py-6 md:py-20 lg:py-[100px] xl:py-[158px] px-5 md:px-10 lg:px-16 xl:px-[140px]"
        variants={containerVariants}
      >
        <motion.div className="mb-3 md:mb-5 lg:mb-8" variants={itemVariants}>
          <motion.h2
            className="font-playfair-custom font-medium text-lg leading-[24px] text-[#030000] uppercase pb-1 md:pb-3 lg:pb-4"
            variants={itemVariants}
          >
            WELCOME
          </motion.h2>
          <motion.h1
            className="font-playfair-custom font-medium text-4xl leading-[42px] text-[#757C5B]"
            variants={itemVariants}
          >
            Login
          </motion.h1>
        </motion.div>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="font-century-gothic"
        >
          <motion.div variants={itemVariants}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
              className="border-b border-[#CCCCCC]"
            >
              <label
                className="font-century-gothic font-normal xl:text-base text-[#030000] leading-[22px]"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                variant="underlined"
                prefix={<UserOutlined />}
                placeholder="Email address"
                size="large"
                className="outline-none border-none placeholder:text-[#CCCCCC] py-1 md:py-2 lg:py-4 text-base font-normal"
              />
            </Form.Item>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              className="border-b border-[#CCCCCC]"
            >
              <label
                className="font-century-gothic font-normal xl:text-base text-[#030000] leading-[22px]"
                htmlFor="password"
              >
                Password
              </label>
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
                className="border-none placeholder:text-[#CCCCCC] py-1 md:py-2 lg:py-4 text-base font-normal"
              />
            </Form.Item>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Form.Item>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="font-century-gothic w-full md:w-45%] bg-[#757C5B] py-6 xl:py-8 text-xl font-normal text-white hover:bg-slate-500"
                  size="large"
                >
                  Login
                </Button>
              </motion.div>
            </Form.Item>
          </motion.div>
        </Form>

        <motion.div className="mt-4" variants={itemVariants}>
          Don't have an account?{" "}
          <Link className="font-bold" to="/signup">
            Register Now
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;

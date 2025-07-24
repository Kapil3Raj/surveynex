import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";


export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    country: "",
    state: "",
    province: "",
    email: "",
    industry: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/register", formData);
      console.log(response.data);
      setSubmitted(true);
      setFormData({
        fullName: "",
        age: "",
        country: "",
        state: "",
        province: "",
        email: "",
        industry: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Submission failed", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const formVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-white text-black px-4"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-8 p-10 border border-black rounded-3xl shadow-2xl bg-white"
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl font-bold text-center uppercase tracking-widest"
          variants={formVariant}
          custom={0}
        >
          Join the Waitlist
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { name: "fullName", placeholder: "Full Name", type: "text" },
            { name: "age", placeholder: "Age", type: "number" },
            { name: "country", placeholder: "Country", type: "text" },
            { name: "state", placeholder: "State", type: "text" },
            { name: "province", placeholder: "City", type: "text" },
            { name: "email", placeholder: "Email Address", type: "email" },
            { name: "industry", placeholder: "Industry / Domain", type: "text", full: true },
          ].map((field, i) => (
            <motion.div
              key={field.name}
              variants={formVariant}
              custom={i + 1}
              className={`w-full ${field.full ? "sm:col-span-2" : ""}`}
            >
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={formData[field.name]} // Add this line
                onChange={handleChange}
                className="input transition-all focus:ring-2 focus:ring-black"
              />
            </motion.div>
          ))}
        </div>

        <motion.button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl text-lg tracking-wide hover:scale-105 active:scale-95 transition-transform duration-200"
          variants={formVariant}
          custom={8}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Register
        </motion.button>

        {submitted && (
          <motion.p
            className="text-center text-green-600 font-semibold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Registered successfully!
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
}

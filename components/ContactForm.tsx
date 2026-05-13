"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

const inputBase =
  "w-full bg-[#141414] border rounded-sm px-4 py-3.5 text-white placeholder-white/25 font-body text-sm outline-none transition-colors duration-150";
const inputNormal = `${inputBase} border-white/10 focus:border-white/30`;
const inputError = `${inputBase} border-red-500/60 focus:border-red-500`;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    await new Promise((res) => setTimeout(res, 1000));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#141414] border border-white/8 rounded-sm p-8"
      >
        <div className="w-8 h-px bg-brand-red mb-6" />
        <h3 className="font-display font-black text-3xl uppercase tracking-tightest text-white mb-3">
          You&apos;re All Set!
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Thanks, <span className="text-white">{form.name}</span>. We&apos;ll
          be in touch at <span className="text-white">{form.email}</span> to
          schedule your first class.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="w-8 h-px bg-brand-red mb-2" />
      <h2 className="font-display font-black text-3xl uppercase tracking-tightest text-white -mt-2 mb-2">
        Start Your Free Trial
      </h2>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-white/45 text-xs font-display font-bold uppercase tracking-widest mb-2">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? inputError : inputNormal}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-white/45 text-xs font-display font-bold uppercase tracking-widest mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? inputError : inputNormal}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-white/45 text-xs font-display font-bold uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What program are you interested in? Any questions?"
          value={form.message}
          onChange={handleChange}
          className={`${errors.message ? inputError : inputNormal} resize-none`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-brand-red hover:bg-brand-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-display font-black uppercase tracking-wider text-base rounded-sm transition-colors duration-150 mt-1"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-white/25 text-xs text-center font-body">
        We&apos;ll get back to you within a few hours.
      </p>
    </form>
  );
}

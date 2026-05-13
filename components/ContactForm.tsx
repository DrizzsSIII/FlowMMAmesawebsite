"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name:    string;
  email:   string;
  message: string;
};
type Errors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): Errors {
  const e: Errors = {};
  if (!data.name.trim())    e.name    = "Name is required.";
  if (!data.email.trim())   e.email   = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    e.email = "Enter a valid email address.";
  if (!data.message.trim()) e.message = "Message is required.";
  return e;
}

const inputBase =
  "w-full bg-flow-card border rounded-sm px-4 py-3.5 font-body text-sm text-flow-cream placeholder-flow-muted/40 outline-none transition-colors duration-150";
const inputNormal = `${inputBase} border-white/10 focus:border-flow-orange`;
const inputError  = `${inputBase} border-flow-sunset/60 focus:border-flow-sunset`;

export default function ContactForm() {
  const [form,   setForm]   = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((p) => ({ ...p, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("submitting");
    await new Promise((res) => setTimeout(res, 1000));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-flow-card border border-flow-teal/30 rounded-sm p-8"
      >
        <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-teal mb-6" />
        <h3 className="font-display text-3xl text-flow-cream mb-3">
          YOU&apos;RE ALL SET!
        </h3>
        <p className="font-body text-flow-muted text-sm leading-relaxed">
          Thanks, <span className="text-flow-cream">{form.name}</span>. We&apos;ll be in touch at{" "}
          <span className="text-flow-orange">{form.email}</span> to schedule your first class.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="w-10 h-0.5 bg-flow-orange mb-2" />
      <h2 className="font-display text-3xl text-flow-cream -mt-1 mb-2">
        GET IN TOUCH
      </h2>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-body font-semibold text-flow-muted/70 text-xs uppercase tracking-widest mb-2">
          Full Name
        </label>
        <input
          id="name" name="name" type="text" autoComplete="name"
          placeholder="Your name"
          value={form.name} onChange={handleChange}
          className={errors.name ? inputError : inputNormal}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="font-body text-flow-sunset text-xs mt-1.5">
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-body font-semibold text-flow-muted/70 text-xs uppercase tracking-widest mb-2">
          Email Address
        </label>
        <input
          id="email" name="email" type="email" autoComplete="email"
          placeholder="you@example.com"
          value={form.email} onChange={handleChange}
          className={errors.email ? inputError : inputNormal}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="font-body text-flow-sunset text-xs mt-1.5">
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-body font-semibold text-flow-muted/70 text-xs uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          id="message" name="message" rows={5}
          placeholder="Which program are you interested in? Any questions?"
          value={form.message} onChange={handleChange}
          className={`${errors.message ? inputError : inputNormal} resize-none`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="font-body text-flow-sunset text-xs mt-1.5">
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-flow-orange hover:bg-flow-orange-hover disabled:opacity-50 disabled:cursor-not-allowed text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-150 shadow-orange hover:shadow-orange-lg mt-1"
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

      <p className="font-body text-flow-muted/30 text-xs text-center">
        We&apos;ll get back to you within a few hours.
      </p>
    </form>
  );
}

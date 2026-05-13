"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name: string;
  phone: string;
  email: string;
  program: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const programs = [
  "MMA",
  "Brazilian Jiu-Jitsu",
  "Muay Thai",
  "Kids Classes",
  "Not sure yet",
];

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\+?[\d\s\-()]{7,}$/.test(data.phone)) {
    errors.phone = "Enter a valid phone number";
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("submitting");
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("success");
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-brand-gray-light border rounded-lg px-4 py-3.5 text-brand-white placeholder-brand-white/30 font-body text-sm outline-none transition-all duration-200 focus:ring-1 ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
        : "border-white/15 focus:border-brand-red focus:ring-brand-red/20"
    }`;

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-gray-mid border border-green-500/30 rounded-xl p-8 text-center"
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-display font-900 text-3xl uppercase tracking-tightest text-white mb-3">
          You&apos;re All Set!
        </h3>
        <p className="text-brand-white/70 text-base leading-relaxed">
          Thanks, <strong className="text-white">{form.name}</strong>! We&apos;ll
          reach out to <strong className="text-white">{form.phone || form.email}</strong> within
          a few hours to get your first class scheduled.
        </p>
        <p className="text-brand-white/50 text-sm mt-4">
          In the meantime, check out our{" "}
          <a href="/schedule" className="text-brand-red hover:underline">
            class schedule
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
      <h2 className="font-display font-900 text-3xl uppercase tracking-tightest text-white mb-2">
        Start Your Free Trial
      </h2>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-brand-white/70 text-xs font-display font-700 uppercase tracking-wider mb-1.5">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="John Smith"
          value={form.name}
          onChange={handleChange}
          className={inputClass("name")}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-red-400 text-xs mt-1.5"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-brand-white/70 text-xs font-display font-700 uppercase tracking-wider mb-1.5">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(480) 555-0000"
            value={form.phone}
            onChange={handleChange}
            className={inputClass("phone")}
          />
          <AnimatePresence>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-red-400 text-xs mt-1.5"
              >
                {errors.phone}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label htmlFor="email" className="block text-brand-white/70 text-xs font-display font-700 uppercase tracking-wider mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass("email")}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-red-400 text-xs mt-1.5"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Program */}
      <div>
        <label htmlFor="program" className="block text-brand-white/70 text-xs font-display font-700 uppercase tracking-wider mb-1.5">
          Interested Program
        </label>
        <select
          id="program"
          name="program"
          value={form.program}
          onChange={handleChange}
          className={inputClass("program")}
        >
          <option value="" className="bg-brand-gray-light text-brand-white/40">
            Select a program (optional)
          </option>
          {programs.map((p) => (
            <option key={p} value={p} className="bg-brand-gray-light text-brand-white">
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-brand-white/70 text-xs font-display font-700 uppercase tracking-wider mb-1.5">
          Anything Else?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Any questions, your experience level, goals, etc."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass("message")} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-brand-red hover:bg-brand-red-light active:bg-brand-red-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-800 uppercase tracking-wider text-lg rounded-lg transition-all duration-200 shadow-[0_4px_24px_rgba(200,16,46,0.35)] hover:shadow-[0_4px_32px_rgba(200,16,46,0.5)] mt-2"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Claim My Free Trial"
        )}
      </button>

      <p className="text-brand-white/30 text-xs text-center">
        No spam. We&apos;ll only contact you about your free trial.
      </p>
    </form>
  );
}

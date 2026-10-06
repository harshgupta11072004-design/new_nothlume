"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder:text-mute/70";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-ink-200 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-mute">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`${fieldClass} mt-2`}
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm text-mute">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`${fieldClass} mt-2`}
            placeholder="you@email.com"
          />
        </label>
        <label className="block text-sm text-mute">
          Phone
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={`${fieldClass} mt-2`}
            placeholder="+91 00000 00000"
          />
        </label>
        <label className="block text-sm text-mute">
          Subject
          <input
            required
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`${fieldClass} mt-2`}
            placeholder="How can we help?"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm text-mute">
        Message
        <textarea
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`${fieldClass} mt-2 resize-y`}
          placeholder="Tell us a little about your question."
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent-gradient px-6 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110 sm:w-auto"
      >
        Send Message
      </button>
      {submitted ? (
        <p className="mt-4 text-sm text-emerald-300">
          Thank you. Your message has been received. We will get back to you soon.
        </p>
      ) : null}
    </form>
  );
}

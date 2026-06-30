"use client";

import { site, services } from "../data";

export default function ContactPanel() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `SBS consultation request - ${form.get("service")}`;
    const body = [
      "Hello Smart Brain Solutions,",
      "",
      form.get("message"),
      "",
      "--- Contact details ---",
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company")}`,
      `Email: ${form.get("email")}`,
      `Service: ${form.get("service")}`,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contactForm reveal" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </label>
      <label>
        Company Name
        <input name="company" type="text" autoComplete="organization" required placeholder="Company name" />
      </label>
      <label>
        Email Address
        <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
      </label>
      <label>
        Service Required
        <select name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
          <option>General Consultation</option>
        </select>
      </label>
      <label className="full">
        Message
        <textarea name="message" rows="6" required placeholder="Tell us about your business goals, current systems, and timeline." />
      </label>
      <button className="primaryButton full" type="submit">Send Message</button>
    </form>
  );
}

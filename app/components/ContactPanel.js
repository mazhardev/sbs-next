"use client";

import { useState } from "react";
import { site, services } from "../data";

export default function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);

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
      `Phone / Cell: ${form.get("phone")}`,
      `Service: ${form.get("service")}`,
    ].join("\n");
    const whatsappText = [
      `New SBS contact form inquiry: ${form.get("service")}`,
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company")}`,
      `Email: ${form.get("email")}`,
      `Phone / Cell: ${form.get("phone")}`,
      `Message: ${form.get("message")}`,
    ].join("\n");

    setSubmitted(true);
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappText)}`, "_blank", "noopener,noreferrer");
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
        Phone / Cell Number
        <input name="phone" type="tel" autoComplete="tel" required placeholder="+92 300 0000000" />
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
      {submitted ? (
        <p className="formSuccess full" role="status">
          Thank you. Our team will contact you shortly.
        </p>
      ) : null}
      <button className="primaryButton full" type="submit">Get Consultation</button>
    </form>
  );
}

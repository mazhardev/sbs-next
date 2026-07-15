"use client";

import { useState } from "react";
import { site, services } from "../data";

export default function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);
  const [deliveryOptions, setDeliveryOptions] = useState(null);

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

    setSubmitted(false);
    setDeliveryOptions({ subject, body, whatsappText });
  };

  const sendViaWhatsApp = () => {
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(deliveryOptions.whatsappText)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setDeliveryOptions(null);
    setSubmitted(true);
  };

  const sendViaEmail = () => {
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(deliveryOptions.subject)}&body=${encodeURIComponent(deliveryOptions.body)}`;
    setDeliveryOptions(null);
    setSubmitted(true);
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
          Your selected messaging app has been opened. Please send the prepared message there.
        </p>
      ) : null}
      {deliveryOptions ? (
        <div className="deliveryPrompt full" role="dialog" aria-labelledby="deliveryPromptTitle">
          <strong id="deliveryPromptTitle">How would you like to send your message?</strong>
          <p>Choose WhatsApp or email to open your message in that app.</p>
          <div className="deliveryPromptActions">
            <button className="primaryButton" type="button" onClick={sendViaWhatsApp}>Send via WhatsApp</button>
            <button className="secondaryButton" type="button" onClick={sendViaEmail}>Send via Email</button>
            <button className="deliveryCancel" type="button" onClick={() => setDeliveryOptions(null)}>Cancel</button>
          </div>
        </div>
      ) : null}
      <button className="primaryButton full" type="submit">Get Consultation</button>
    </form>
  );
}

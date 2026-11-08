"use client";

import { useEffect, useRef, useState } from "react";
import { site, services } from "../data";
import { attributionLines, getAttribution, track } from "../tracking";

const intents = {
  consultation: { label: "Book a consultation", subject: "consultation request" },
  proposal: { label: "Request a proposal", subject: "proposal request" },
};

function detailLines(form) {
  return [
    `Name: ${form.get("name")}`,
    form.get("company") && `Company: ${form.get("company")}`,
    `Email: ${form.get("email")}`,
    `Phone / WhatsApp: ${form.get("phone")}`,
    `Service: ${form.get("service")}`,
  ].filter(Boolean);
}

export default function ContactPanel({ defaultService = "" }) {
  const [intent, setIntent] = useState("consultation");
  const [service, setService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryOptions, setDeliveryOptions] = useState(null);
  const started = useRef(false);
  const promptRef = useRef(null);

  // Buttons elsewhere on the site preselect the form through the URL.
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (intents[query.get("intent")]) setIntent(query.get("intent"));
    const match = services.find((item) => item.slug === query.get("service"));
    if (match) setService(match.title);
  }, []);

  useEffect(() => {
    if (deliveryOptions) promptRef.current?.focus();
  }, [deliveryOptions]);

  const handleFocus = () => {
    if (started.current) return;
    started.current = true;
    track("form_start", { intent });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const source = attributionLines();
    const message = form.get("message");
    const details = detailLines(form);

    const body = [
      "Hello Smart Brain Solutions,",
      "",
      message || `I would like to ${intents[intent].label.toLowerCase()}.`,
      "",
      "--- Contact details ---",
      ...details,
      ...(source.length ? ["", "--- Campaign ---", ...source] : []),
    ].join("\n");

    const whatsappText = [
      `SBS ${intents[intent].subject}`,
      ...details,
      message && `Message: ${message}`,
      ...source,
    ].filter(Boolean).join("\n");

    setSubmitted(false);
    setDeliveryOptions({
      subject: `SBS ${intents[intent].subject} - ${form.get("service")}`,
      body,
      whatsappText,
      service: form.get("service"),
    });
    track("form_submit", { intent, service: form.get("service") });
  };

  const recordLead = (method) => {
    const { utm_source, utm_medium, utm_campaign } = getAttribution();
    track("generate_lead", { method, intent, service: deliveryOptions.service, utm_source, utm_medium, utm_campaign });
    setDeliveryOptions(null);
    setSubmitted(true);
  };

  const sendViaWhatsApp = () => {
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(deliveryOptions.whatsappText)}`,
      "_blank",
      "noopener,noreferrer",
    );
    recordLead("whatsapp");
  };

  const sendViaEmail = () => {
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(deliveryOptions.subject)}&body=${encodeURIComponent(deliveryOptions.body)}`;
    recordLead("email");
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit} onFocus={handleFocus}>
      <fieldset className="formIntent full">
        <legend>What would you like to do?</legend>
        {Object.entries(intents).map(([key, value]) => (
          <label className={intent === key ? "isSelected" : ""} key={key}>
            <input type="radio" name="intent" value={key} checked={intent === key} onChange={() => setIntent(key)} />
            {value.label}
          </label>
        ))}
      </fieldset>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </label>
      <label>
        Work email
        <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
      </label>
      <label>
        Phone / WhatsApp
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+92 300 0000000" />
      </label>
      <label>
        <span>Company <small>(optional)</small></span>
        <input name="company" type="text" autoComplete="organization" placeholder="Company name" />
      </label>
      <label className="full">
        Service
        <select name="service" required value={service} onChange={(event) => setService(event.target.value)}>
          <option value="" disabled>Select a service</option>
          {services.map((item) => (
            <option key={item.slug}>{item.title}</option>
          ))}
          <option>General Consultation</option>
        </select>
      </label>
      <label className="full">
        <span>Message <small>(optional)</small></span>
        <textarea name="message" rows="3" placeholder="Your goals, current systems, and timeline." />
      </label>
      {submitted ? (
        <p className="formSuccess full" role="status">
          Your messaging app should now be open. Please send the prepared message there.
          If nothing opened, write to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      ) : null}
      {deliveryOptions ? (
        <div className="deliveryPrompt full" role="group" aria-labelledby="deliveryPromptTitle" tabIndex={-1} ref={promptRef}>
          <strong id="deliveryPromptTitle">How should we receive your request?</strong>
          <p>Your message is ready. Choose an app to open it and press send.</p>
          <div className="deliveryPromptActions">
            <button className="primaryButton" type="button" onClick={sendViaWhatsApp}>Send via WhatsApp</button>
            <button className="secondaryButton" type="button" onClick={sendViaEmail}>Send via Email</button>
            <button className="deliveryCancel" type="button" onClick={() => setDeliveryOptions(null)}>Cancel</button>
          </div>
        </div>
      ) : (
        <button className="primaryButton full" type="submit">{intents[intent].label}</button>
      )}
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const services = [
  "Odoo ERP Implementation",
  "Odoo Customization",
  "Odoo Support",
  "Odoo Integration",
  "General Enquiry",
];

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [challenge, setChallenge] = useState({ first: 4, second: 5 });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event) => event.key === "Escape" && setIsOpen(false);
    document.body.classList.add("modalOpen");
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("modalOpen");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const openForm = () => {
    setChallenge({
      first: Math.floor(Math.random() * 6) + 3,
      second: Math.floor(Math.random() * 5) + 2,
    });
    setError("");
    setIsOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    if (form.get("website")) return;
    if (Number(form.get("verification")) !== challenge.first + challenge.second) {
      setError("Please complete the human verification correctly.");
      return;
    }

    const name = form.get("name").trim();
    const email = form.get("email").trim();
    const company = form.get("company").trim() || "Not provided";
    const phone = form.get("phone").trim() || "Not provided";
    const service = form.get("service");
    const message = form.get("message").trim();
    const channel = event.nativeEvent.submitter?.value || "email";
    const subject = `Odoo enquiry from ${name} — ${service}`;
    const body = [
      "Hello Smart Brain Solutions,",
      "",
      message,
      "",
      "--- Contact details ---",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Service required: ${service}`,
      "",
      "Sent from smartbrainsolution.com",
    ].join("\n");

    if (channel === "whatsapp") {
      const whatsappMessage = [
        "*New Odoo Enquiry — Smart Brain Solutions*",
        "",
        `*Name:* ${name}`,
        `*Email:* ${email}`,
        `*Company:* ${company}`,
        `*Phone:* ${phone}`,
        `*Service required:* ${service}`,
        "",
        "*Project details:*",
        message,
        "",
        "Sent from smartbrainsolution.com",
      ].join("\n");
      window.open(`https://wa.me/923047542018?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = `mailto:info@smartbrainsolution.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <button className="contactTrigger" type="button" onClick={openForm}>
        <span>Start a conversation</span>
        <i aria-hidden="true">↗</i>
      </button>

      {isOpen && createPortal(
        <div className="modalBackdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <section
            className="contactModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modalClose" type="button" onClick={() => setIsOpen(false)} aria-label="Close contact form">×</button>
            <div className="modalHeading">
              <p>Let&apos;s build something better</p>
              <h2 id="contact-title">Tell us about your Odoo needs.</h2>
              <span>Your email application will open with all details ready to send.</span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="honeypot" aria-hidden="true">
                <label>Website<input name="website" tabIndex="-1" autoComplete="off" /></label>
              </div>
              <div className="fieldGrid">
                <label>
                  Full name <b>*</b>
                  <input name="name" type="text" autoComplete="name" required minLength="2" placeholder="Your name" />
                </label>
                <label>
                  Work email <b>*</b>
                  <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
                </label>
                <label>
                  Company
                  <input name="company" type="text" autoComplete="organization" placeholder="Company name" />
                </label>
                <label>
                  Phone
                  <input name="phone" type="tel" autoComplete="tel" placeholder="+00 000 000 000" />
                </label>
              </div>
              <label>
                How can we help? <b>*</b>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => <option key={service}>{service}</option>)}
                </select>
              </label>
              <label>
                Project details <b>*</b>
                <textarea name="message" required minLength="20" rows="4" placeholder="Tell us about your current system, goals, and timeline…" />
              </label>
              <div className="formFooter">
                <label className="verification">
                  Human check: {challenge.first} + {challenge.second} =
                  <input name="verification" type="number" required inputMode="numeric" aria-label="Human verification answer" />
                </label>
                <div className="sendOptions">
                  <button className="sendButton emailButton" type="submit" name="channel" value="email">Send by email <span>↗</span></button>
                  <button className="sendButton whatsappButton" type="submit" name="channel" value="whatsapp">Send by WhatsApp <span aria-hidden="true">↗</span></button>
                </div>
              </div>
              {error && <p className="formError" role="alert">{error}</p>}
              <p className="privacyNote">Your information stays on your device until you send the email.</p>
            </form>
          </section>
        </div>,
        document.body
      )}
    </>
  );
}

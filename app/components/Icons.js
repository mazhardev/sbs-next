const servicePaths = {
  "erp-implementation": ["M12 3 3 8l9 5 9-5-9-5Z", "m3 12.5 9 5 9-5", "m3 17 9 5 9-5"],
  "sap-implementation": [
    "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Z",
    "M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6",
    "M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  ],
  "odoo-implementation": ["M4 4h6v6H4z", "M14 4h6v6h-6z", "M4 14h6v6H4z", "M14 14h6v6h-6z"],
  "digital-transformation-automation": ["M13 2 4 14h7l-1 8 9-12h-7l1-8Z"],
  "tax-compliance-advisory": ["M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3Z", "m8.5 12 2.5 2.5 4.5-5"],
  "tax-technology": ["M6 2h9l4 4v16H6z", "M14 2v5h5", "m9 15 2 2 4-4"],
  "accounting-financial-solutions": ["M4 20h16", "M7 20v-6", "M12 20V8", "M17 20V11"],
  "business-process-optimization": ["M4 7h12", "m13 4 3 3-3 3", "M20 17H8", "m11 14-3 3 3 3"],
  "managed-services-outsourcing": [
    "M4 14v-2a8 8 0 0 1 16 0v2",
    "M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z",
    "M20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z",
    "M18 18c0 2-2 3-5 3",
  ],
};

function StrokeIcon({ paths, className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d) => <path d={d} key={d} />)}
    </svg>
  );
}

export function ServiceIcon({ slug }) {
  return (
    <span className="iconBadge">
      <StrokeIcon paths={servicePaths[slug] || servicePaths["erp-implementation"]} />
    </span>
  );
}

export function ArrowIcon() {
  return <StrokeIcon className="arrowIcon" paths={["M5 12h14", "m13 6 6 6-6 6"]} />;
}

export function PhoneIcon() {
  return <StrokeIcon paths={["M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"]} />;
}

export const whatsappIconPath = "M12.1 2A9.8 9.8 0 0 0 3.7 17l-1.2 4.5 4.6-1.2A9.9 9.9 0 1 0 12.1 2Zm0 2a7.9 7.9 0 1 1-4 14.7l-.3-.2-2.5.7.7-2.4-.2-.4A7.9 7.9 0 0 1 12.1 4Zm-3.3 4.2c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.9 4.4 3.9 2.2.9 2.6.7 3.1.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.4l-1.8-.9c-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-.8-1.9c-.2-.5-.4-.5-.6-.5h-.6Z";

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d={whatsappIconPath} />
    </svg>
  );
}

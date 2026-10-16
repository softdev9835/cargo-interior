/**
 * Single Source of Truth for all Contact Information:
 * Phone, WhatsApp, Email, Address, Location, and Business Details.
 *
 * Update any value here and it will reflect across the entire website automatically.
 */
export const CONTACT_INFO = {
  // Brand & Business Details
  brandName: "Cargo Interiors",
  foundingYear: "2015",
  tagline: "Best Interior Designer in Gurugram",

  // Phone
  phone: "+91 90506 56162",
  phoneRaw: "+919050656162",
  phoneDigits: "919050656162",
  telLink: "tel:+919050656162",

  // Email
  email: "contact@cargointerior.in",
  mailLink: "mailto:contact@cargointerior.in",

  // WhatsApp
  whatsappNumber: "919050656162",
  defaultWhatsAppMessage:
    "Hi, Cargo Interiors! I wanted to discuss about some interior designing project, Please reply. Thanks!",
  getWhatsAppUrl: (customMessage?: string) => {
    const text =
      customMessage ||
      "Hi, Cargo Interiors! I wanted to discuss about some interior designing project, Please reply. Thanks!";
    return `https://wa.me/919050656162?text=${encodeURIComponent(text)}`;
  },

  // Address & Location
  address: "Badshahpur, Teekli Road, Gurugram, Haryana 122101",
  shortAddress: "Badshahpur, Gurugram",
  streetAddress: "Badshahpur, Teekli Road",
  locality: "Gurugram",
  region: "Haryana",
  postalCode: "122101",
  country: "IN",
  googleMapsQueryUrl:
    "https://maps.google.com/?q=Badshahpur,+Teekli+Road,+Gurugram,+Haryana+122101",
} as const;

// Convenience re-exports
export const PHONE = CONTACT_INFO.phone;
export const TEL = CONTACT_INFO.telLink;
export const EMAIL = CONTACT_INFO.email;
export const MAILTO = CONTACT_INFO.mailLink;
export const ADDRESS = CONTACT_INFO.address;
export const WA = CONTACT_INFO.getWhatsAppUrl();
export const getWhatsAppUrl = CONTACT_INFO.getWhatsAppUrl;

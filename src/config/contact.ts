/**
 * Single Source of Truth for all Contact Information:
 * Phone, WhatsApp, Email, Address, Location, and Business Details.
 *
 * Update any value here and it will reflect across the entire website automatically.
 */
export const CONTACT_INFO = {
  // Brand & Business Details
  brandName: "Top Design",
  foundingYear: "2015",
  tagline: "Best Interior Designer in Laxmi Nagar, Delhi",

  // Phone
  phone: "+91 92660 41927",
  phoneRaw: "+919266041927",
  phoneDigits: "9266041927",
  telLink: "tel:+919266041927",

  // Email
  email: "support@topdesign.co.in",
  mailLink: "mailto:support@topdesign.co.in",

  // WhatsApp
  whatsappNumber: "9266041927",
  defaultWhatsAppMessage:
    "Hi, Top Design! I wanted to discuss about some interior designing project, Please reply. Thanks!",
  getWhatsAppUrl: (customMessage?: string) => {
    const text =
      customMessage ||
      "Hi, Top Design! I wanted to discuss about some interior designing project, Please reply. Thanks!";
    return `https://wa.me/919266041927?text=${encodeURIComponent(text)}`;
  },

  // Address & Location
  address: "E 59, Vikas Marg, near hira sweets, Veer Savarkar Block, Block G, Laxmi Nagar, Delhi, 110092, India",
  shortAddress: "Laxmi Nagar, Delhi",
  streetAddress: "E 59, Vikas Marg, near hira sweets, Veer Savarkar Block, Block G",
  locality: "Laxmi Nagar",
  region: "Delhi",
  postalCode: "110092",
  country: "IN",
  googleMapsQueryUrl:
    "https://maps.google.com/?q=E+59,+Vikas+Marg,+near+hira+sweets,+Veer+Savarkar+Block,+Block+G,+Laxmi+Nagar,+Delhi,+110092,+India",
  website: "https://topdesign.co.in",
} as const;

// Convenience re-exports
export const PHONE = CONTACT_INFO.phone;
export const TEL = CONTACT_INFO.telLink;
export const EMAIL = CONTACT_INFO.email;
export const MAILTO = CONTACT_INFO.mailLink;
export const ADDRESS = CONTACT_INFO.address;
export const WA = CONTACT_INFO.getWhatsAppUrl();
export const getWhatsAppUrl = CONTACT_INFO.getWhatsAppUrl;

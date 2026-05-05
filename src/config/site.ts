/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SITE = {
  brandName: import.meta.env.VITE_BRAND_NAME,
  brandTagline: import.meta.env.VITE_BRAND_TAGLINE,
  logoUrl: import.meta.env.VITE_LOGO_URL,
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL,
    phone: import.meta.env.VITE_CONTACT_PHONE,
    phoneAvailability: import.meta.env.VITE_CONTACT_PHONE_AVAILABILITY,
    address: import.meta.env.VITE_CONTACT_ADDRESS,
    addressDetail: import.meta.env.VITE_CONTACT_ADDRESS_DETAIL,
    addressSub: import.meta.env.VITE_CONTACT_ADDRESS_SUB,
  },
  workingHours: {
    days: import.meta.env.VITE_WORKING_DAYS,
    hours: import.meta.env.VITE_WORKING_HOURS,
  },
  social: {
    twitter: import.meta.env.VITE_TWITTER_URL,
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
  },
  formspreeId: import.meta.env.VITE_FORMSPREE_ID,
} as const;

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getpages", () => {
  return [
    "https://frontendmentor-flax-omega.vercel.app/article-preview-component-master/index.html",
    "https://frontendmentor-flax-omega.vercel.app/blog-preview-card-main/index.html",
    "https://frontendmentor-flax-omega.vercel.app/four-card-feature-section-master/index.html",
    "https://frontendmentor-flax-omega.vercel.app/newsletter-sign-up-with-success-message-main/index.html",
    "https://frontendmentor-flax-omega.vercel.app/product-preview-card-component-main/index.html",
    "https://frontendmentor-flax-omega.vercel.app/qr-code-component-main/index.html",
    "https://frontendmentor-flax-omega.vercel.app/recipe-page-main/index.html",
    "https://frontendmentor-flax-omega.vercel.app/social-links-profile-main/index.html",
    "https://frontendmentor-flax-omega.vercel.app/testimonials-grid-section-main/index.html",
    "https://frontendmentor-flax-omega.vercel.app/time-tracking-dashboard-main/index.html",
    "https://frontendmentor-flax-omega.vercel.app/tip-calculator-app-main/index.html",
  ];
});

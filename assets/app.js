const app = Vue.createApp({
  data() {
    return {
      challenges: [],
    };
  },
  methods: {
    challenges_data() {
      return [
        {
          id: 10,
          name: "Tip calculator app",
          path: "tip-calculator-app-main",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/tip-calculator-app-main/index.html",
        },
        {
          id: 9,
          name: "Time tracking dashboard",
          path: "time-tracking-dashboard-main",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/time-tracking-dashboard-main/index.html",
        },
        {
          id: 8,
          name: "Newsletter sign-up form with success message",
          path: "newsletter-sign-up-with-success-message-main",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/newsletter-sign-up-with-success-message-main/index.html",
        },
        {
          id: 7,
          name: "Article preview component",
          path: "article-preview-component-master",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/article-preview-component-master/index.html",
        },
        {
          id: 6,
          name: "Testimonials grid section",
          path: "testimonials-grid-section-main",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/testimonials-grid-section-main/index.html",
        },
        {
          id: 5,
          name: "Four card feature section",
          path: "four-card-feature-section-master",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/four-card-feature-section-master/index.html",
        },
        {
          id: 4,
          name: "Product preview card component",
          path: "product-preview-card-component-main",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/product-preview-card-component-main/index.html",
        },
        {
          id: 3,
          name: "Recipe page",
          path: "recipe-page-main",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/recipe-page-main/index.html",
        },
        {
          id: 2,
          name: "Social links profile",
          path: "social-links-profile-main",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/social-links-profile-main/index.html",
        },
        {
          id: 1,
          name: "Blog preview card",
          path: "blog-preview-card-main",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/blog-preview-card-main/index.html",
        },
        {
          id: 0,
          name: "QR code component",
          path: "qr-code-component-main",
          vercel_url:
            "https://frontendmentor-flax-omega.vercel.app/qr-code-component-main/index.html",
        },
      ];
    },
    contents() {
      console.log(this.challenges_data());
    },
    mobile() {
      this.challenges = this.challenges_data()
        .map((data) => {
          data.path = `${data.path}_mobile`;
          return data;
        })
        .sort((a, b) => b.id - a.id);
    },
    desktop() {
      this.challenges = this.challenges_data()
        .map((data) => {
          return data;
        })
        .sort((a, b) => b.id - a.id);
    },
  },
  mounted() {
    this.challenges = this.challenges_data().sort((a, b) => b.id - a.id);
    console.log(this.challenges);
  },
});

app.mount("#app");

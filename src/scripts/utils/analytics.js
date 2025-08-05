export const setupAnalytics = () => {
  // Only setup analytics in production
  if (import.meta.env.DEV) {
    console.log("📊 Analytics disabled in development");
    return;
  }

  const gaId = import.meta.env.VITE_GA_ID;
  if (!gaId) {
    console.warn("Analytics ID not configured");
    return;
  }

  // Load Google Analytics
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", gaId);

  window.gtag = gtag;

  console.log("📊 Analytics initialized");
};

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
  }
};

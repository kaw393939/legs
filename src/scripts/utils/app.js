export const initializeApp = () => {
  console.log("🚀 App initialized");

  // Set up global error handling
  window.addEventListener("error", (event) => {
    console.error("Global error:", event.error);
  });

  // Set up unhandled promise rejection handling
  window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);
  });

  // Initialize smooth scrolling for anchor links
  document.addEventListener("click", (event) => {
    const target = event.target.closest('a[href^="#"]');
    if (target) {
      event.preventDefault();
      const element = document.querySelector(target.getAttribute("href"));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
};

export const loadContent = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to load content from ${url}:`, error);
    return null;
  }
};

const filterButtons = document.querySelectorAll("[data-filter]");
const caseCards = document.querySelectorAll(".case-card");
const fallbackImages = document.querySelectorAll("[data-image-fallback]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    caseCards.forEach((card) => {
      const shouldShow = activeFilter === "all" || card.dataset.category === activeFilter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

fallbackImages.forEach((image) => {
  const fallback = document.querySelector(image.dataset.imageFallback);

  if (!fallback) {
    return;
  }

  const showFallback = () => {
    image.hidden = true;
    fallback.hidden = false;
  };

  if (image.complete && image.naturalWidth === 0) {
    showFallback();
  } else {
    image.addEventListener("error", showFallback, { once: true });
  }
});

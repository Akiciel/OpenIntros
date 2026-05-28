const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];
const progressBar = document.querySelector(".scroll-progress span");
const backToTop = document.querySelector(".back-to-top");
const introEffect = document.querySelector(".intro-effect");
const introSkip = document.querySelector(".intro-skip");
const filterButtons = [...document.querySelectorAll("[data-character-filter]")];
const characterGroups = [...document.querySelectorAll("[data-character-group]")];
const characterHeadings = [...document.querySelectorAll("[data-character-heading]")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function closeIntro() {
  if (!introEffect) return;

  introEffect.classList.add("is-hidden");
  document.body.classList.remove("is-intro-active");

  window.setTimeout(() => {
    introEffect.remove();
  }, prefersReducedMotion ? 0 : 780);
}

function setActiveNav(id) {
  navLinks.forEach((link) => {
    const isActive = link.hash === `#${id}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateScrollState() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

  if (progressBar) {
    progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
  }

  if (backToTop) {
    backToTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.65);
  }
}

function applyCharacterFilter(filter) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.characterFilter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  characterGroups.forEach((group) => {
    group.hidden = filter !== "all" && group.dataset.characterGroup !== filter;
  });

  characterHeadings.forEach((heading) => {
    heading.hidden = filter !== "all" && heading.dataset.characterHeading !== filter;
  });
}

const observedSections = navLinks
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);

if (observedSections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveNav(visible.target.id);
      }
    },
    {
      rootMargin: "-18% 0px -56% 0px",
      threshold: [0.08, 0.18, 0.32, 0.48],
    },
  );

  observedSections.forEach((section) => observer.observe(section));
}

const revealItems = [
  ...document.querySelectorAll(
    ".section-head, .section-visual, .image-band, .feature-grid, .orbit-grid, .wide-card, .facility-grid, .institution-grid, .pair-grid, .resonance-scale, .timeline, .kern-layout, .calendar-grid, .threat-grid, .character-tools, .group-title, .character-grid, .glossary-list, .closing p, .closing-links",
  ),
];

if (!prefersReducedMotion && revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.08,
    },
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal-item");
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (introEffect && !prefersReducedMotion) {
  document.body.classList.add("is-intro-active");
  window.setTimeout(closeIntro, 2600);
} else {
  closeIntro();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyCharacterFilter(button.dataset.characterFilter || "all");
  });
});

backToTop?.addEventListener("click", () => {
  document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
});

introSkip?.addEventListener("click", closeIntro);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeIntro();
  }
});

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);
updateScrollState();

const headers = document.querySelectorAll(".site-header");

headers.forEach((header) => {
  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".site-nav");

  if (!toggle || !nav) return;

  const setOpen = (isOpen) => {
    header.classList.toggle("site-header--nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
});

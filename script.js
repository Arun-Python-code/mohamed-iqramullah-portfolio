document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const topBtn = document.getElementById("backToTop");
  const refresh = () =>
    topBtn?.classList.toggle("visible", window.scrollY > 420);
  window.addEventListener("scroll", refresh, { passive: true });
  refresh();
  topBtn?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
  const menu = document.getElementById("nav");
  if (menu && window.bootstrap) {
    menu.querySelectorAll(".nav-link").forEach((a) =>
      a.addEventListener("click", () => {
        const instance = bootstrap.Collapse.getInstance(menu);
        if (instance && menu.classList.contains("show")) instance.hide();
      }),
    );
  }
});

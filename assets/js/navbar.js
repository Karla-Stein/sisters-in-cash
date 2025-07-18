/* jshint esversion: 11 */

//   JavaScript code to ensure the Bootstrap mobile navbar collapses when navigating to in-page links
//   perplexity output/ the Javascript from the homepage didn't work here

document
  .querySelectorAll(".navbar-collapse .nav-link, .navbar-collapse .dropdown-item")
  .forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      // 1) if it's the dropdown toggle ("#") or no "#" at all, ignore
      if (href === "#" || href.indexOf("#") === -1) return;

      // 2) grab just the "#id" part
      const hash = href.slice(href.indexOf("#"));
      const section = document.querySelector(hash);
      if (!section) return;

      // 3) we found a real section, do the smooth scroll
      e.preventDefault();
      const navbarHeight =
        document.querySelector(".navbar-toggler").offsetHeight;
      window.scroll({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      // 4) collapse the menu
      document
        .querySelector(".navbar-collapse")
        .classList.remove("show");
    });
  });
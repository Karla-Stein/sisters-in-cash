
/* jshint esversion: 11 */

//   JavaScript code to ensure the Bootstrap mobile navbar collapses when navigating to in-page links
//   perplexity output/ refined by mentor Tim Nelson

document
  .querySelectorAll(".navbar-collapse .nav-link, .navbar-collapse .dropdown-item")
  .forEach((link) => {

    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      // 1) if it's the dropdown toggle ("#") or no "#" at all, ignore
      if (href === "#" || !href.includes("#")) return;

      // 2) grab just the "#id" part and section it belongs to
      const hash = href.slice(href.indexOf("#"));
      const section = document.querySelector(hash);
      if (!section) return;

      // 3) we found a real section, do the smooth scroll via CSS
      e.preventDefault();

      // 4) collapse the menu
      document.querySelector(".navbar-collapse").classList.remove("show");

      // 5) this triggers a native scroll (respects CSS scroll‐margin‐top + smooth)
      location.hash = hash;
    });
  });





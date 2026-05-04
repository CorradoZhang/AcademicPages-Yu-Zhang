document.addEventListener("DOMContentLoaded", function () {
  var page = document.body.dataset.page || "about";
  var hideSidebar = document.body.dataset.hideSidebar === "true";
  var inBlogSubdirectory = window.location.pathname.indexOf("/blogs/") !== -1;
  var basePath = inBlogSubdirectory ? "../" : "";

  var navItems = [
    { key: "about", label: "About", href: basePath + "index.html" },
    { key: "education", label: "Education", href: basePath + "education.html" },
    { key: "publications", label: "Publications", href: basePath + "publications.html" },
    { key: "research", label: "Research", href: basePath + "research.html" },
    { key: "projects", label: "Projects", href: basePath + "projects.html" },
    { key: "blog", label: "Blog", href: basePath + "blog.html" },
    // { key: "cv", label: "CV", href: "cv.html" }
  ];

  var headerHost = document.querySelector("[data-site-header]");
  if (headerHost) {
    var navHtml = navItems.map(function (item) {
      var active = item.key === page ? "active" : "";
      return '<a class="' + active + '" href="' + item.href + '">' + item.label + "</a>";
    }).join("");

    headerHost.innerHTML =
      '<header class="site-header">' +
      '<div class="container">' +
      '<a class="site-title" href="' + basePath + 'index.html">Yu Zhang</a>' +
      '<nav class="site-nav" aria-label="Primary">' + navHtml + "</nav>" +
      "</div>" +
      "</header>";
  }

  var sidebarHost = document.querySelector("[data-profile-sidebar]");
  if (sidebarHost && !hideSidebar) {
    var sidebarEducation =
      '<div class="sidebar-section">' +
      '<h3 class="sidebar-section-title">Education</h3>' +
      '<div class="sidebar-education-list">' +
      '<div class="sidebar-education-item">' +
      '<strong>PhD in Computer Science</strong>' +
      '<p>University of Galway, 2025–2029 (expected)</p>' +
      "</div>" +
      '<div class="sidebar-education-item">' +
      '<strong>MSc in Computer Science</strong>' +
      '<p>University of Galway, 2024–2025</p>' +
      "</div>" +
      '<div class="sidebar-education-item">' +
      '<strong>BEng in CS &amp; BSc in Mathematics</strong>' +
      '<p>Heilongjiang University of Science and Technology, 2020–2024</p>' +
      "</div>" +
      "</div>" +
      "</div>";

    sidebarHost.innerHTML =
      '<aside class="sidebar" aria-label="Profile">' +
      '<img class="profile-photo" src="' + basePath + 'Figures/avatar.png" alt="Yu Zhang" onerror="this.onerror=null;this.src=\'' + basePath + 'avatar.png\'">' +
      '<h2 class="profile-name">Yu Zhang</h2>' +
      '<p class="profile-title">PhD Student</p>' +
      '<p class="profile-affiliation">University of Galway</p>' +
      '<ul class="profile-links">' +
      '<li><i class="fa-regular fa-envelope" aria-hidden="true"></i><a href="mailto:Y.Zhang34@universityofgalway.ie">Y.Zhang34@universityofgalway.ie</a></li>' +
      '<li><i class="fa-brands fa-github" aria-hidden="true"></i><a href="https://github.com/CorradoZhang" target="_blank" rel="noreferrer">GitHub</a></li>' +
      '<li><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><a href="https://scholar.google.com/citations?user=a2Pyq-kAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a></li>' +
      '<li><i class="fa-brands fa-linkedin" aria-hidden="true"></i><a href="https://www.linkedin.com/in/yu-zhang-ml-rl-rbt/" target="_blank" rel="noreferrer">LinkedIn</a></li>' +
      '<li><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>Galway, Ireland</span></li>' +
      "</ul>" +
      sidebarEducation +
      "</aside>";
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

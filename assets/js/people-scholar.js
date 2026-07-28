(function () {
  "use strict";

  var verifiedProfiles = {
    "Ziran Wang": "https://scholar.google.com/citations?user=hdKpuOEAAAAJ",
    "Jiaru Zhang": "https://scholar.google.com/citations?user=d6q4zkMAAAAJ",
    "Chuheng Wei": "https://scholar.google.com/citations?user=LXwEufAAAAAJ",
    "Bingyao Du": "https://scholar.google.com/citations?user=RXduNWgAAAAJ",
    "Ruijie Chen": "https://scholar.google.com/citations?user=gF5htwwAAAAJ",
    "Juanwu (David) Lu":
      "https://scholar.google.com/citations?user=L-_ePj0AAAAJ",
    "Can Cui": "https://scholar.google.com/citations?user=9rqTLMcAAAAJ",
  };

  document.querySelectorAll(".people-page .col-6 > h3").forEach(function (heading) {
    var name = heading.textContent.replace(/\s+/g, " ").trim();
    var profile = heading.closest(".col-6");
    var icons = profile && profile.querySelector(":scope > ul.icons");

    if (!name || !icons || icons.querySelector(".scholar-link")) {
      return;
    }

    var scholarUrl =
      verifiedProfiles[name] ||
      "https://scholar.google.com/scholar?q=" +
        encodeURIComponent('"' + name + '" Purdue');

    var item = document.createElement("li");
    var link = document.createElement("a");
    var icon = document.createElement("i");

    link.className = "scholar-link";
    link.href = scholarUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = verifiedProfiles[name]
      ? "Google Scholar profile"
      : "Search Google Scholar";
    link.setAttribute("aria-label", link.title + " for " + name);

    icon.className = "fas fa-graduation-cap";
    icon.setAttribute("aria-hidden", "true");

    link.appendChild(icon);
    item.appendChild(link);
    icons.appendChild(item);
  });
})();

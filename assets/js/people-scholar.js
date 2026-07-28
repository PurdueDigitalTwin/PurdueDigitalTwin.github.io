(function () {
  "use strict";

  var verifiedProfiles = {
    "Ziran Wang": "https://scholar.google.com/citations?user=hdKpuOEAAAAJ",
    "Jiaru Zhang":
      "https://scholar.google.com/citations?user=d6q4zkMAAAAJ",
    "Chuheng Wei": "https://scholar.google.com/citations?user=LXwEufAAAAAJ",
    "Hyun-Soo Yun":
      "https://scholar.google.com/citations?user=NvC2dcgAAAAJ&hl=en&oi=ao",
    "Zichong Yang":
      "https://scholar.google.com/citations?user=CoXhxXYAAAAJ&hl=en&oi=ao",
    "Sung-Yeon Park":
      "https://scholar.google.com/citations?user=SKXAwssAAAAJ&hl=en&oi=ao",
    "Juntong Peng":
      "https://scholar.google.com/citations?user=govlUiQAAAAJ&hl=en&oi=ao",
    "Yupeng Zhou":
      "https://scholar.google.com/citations?user=E2QyHRoAAAAJ&hl=en&oi=ao",
    "Bingyao Du": "https://scholar.google.com/citations?user=RXduNWgAAAAJ",
    "Zeyun Deng":
      "https://scholar.google.com/citations?user=zSkMp_AAAAAJ&hl=en&oi=ao",
    "Joochan Kim":
      "https://scholar.google.com/citations?user=8DtoB2QAAAAJ&hl=en&oi=ao",
    "Ruijie Chen": "https://scholar.google.com/citations?user=gF5htwwAAAAJ",
    "Luyang Jiang":
      "https://scholar.google.com/citations?user=BoIYggoAAAAJ&hl=en&oi=ao",
    "Manav Gagvani":
      "https://scholar.google.com/citations?user=ls5DW-cAAAAJ&hl=en&oi=ao",
    "Juanwu (David) Lu":
      "https://scholar.google.com/citations?user=449fpysAAAAJ&hl=en",
    "Yunsheng Ma":
      "https://scholar.google.com/citations?user=ZsDMG_4AAAAJ&hl=en&oi=sra",
    "Can Cui": "https://scholar.google.com/citations?user=9rqTLMcAAAAJ",
    "Zihao Li":
      "https://scholar.google.com/citations?user=2nIM9EoAAAAJ&hl=en&oi=ao",
    "Peiran Liu":
      "https://scholar.google.com/citations?user=9YZxnQ4AAAAJ&hl=en&oi=ao",
  };

  var profilesWithoutScholar = {
    "Guanxiao Li": true,
    "Yaguang Li": true,
    "Kyungmin Kim": true,
    "Kahyun Lee": true,
    "Prashanth Sankaranarayanan": true,
  };

  document.querySelectorAll(".people-page .col-6 > h3").forEach(function (heading) {
    var name = heading.textContent.replace(/\s+/g, " ").trim();
    var profile = heading.closest(".col-6");
    var icons = profile && profile.querySelector(":scope > ul.icons");

    if (
      !name ||
      !icons ||
      profilesWithoutScholar[name] ||
      icons.querySelector(".scholar-link")
    ) {
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

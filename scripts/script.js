let searchString = "";

document.getElementById("search-bar").addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    runSearch();
  }
});

function runSearch() {
  searchString = document.getElementById("search-bar").value;

  if (searchString === "") {
  } else {
    let URL =
      "https://www.google.com/search?q=" +
      searchString +
      "&sca_esv=31965a7022b4d05c&sxsrf=ADLYWIIQTrY5VJ9OzsbQZcvSDAtTkd410Q%3A1736260863229&ei=_zx9Z5rYDeKW5OMP-ZvlsQQ&ved=0ahUKEwja0_Xf6-OKAxViC3kGHflNOUYQ4dUDCBA&uact=5&oq=" +
      searchString +
      "&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3phY2hiZXR0ZXJzMgUQABjvBTIIEAAYgAQYogQyBRAAGO8FMggQABiiBBiJBUiMHVDHD1jyG3ABeAGQAQCYAXegAcIHqgEDOC4zuAEDyAEA-AEBmAIMoAL2B8ICChAAGLADGNYEGEfCAgQQIxgnwgIKECMYgAQYJxiKBcICCxAAGIAEGJECGIoFwgILEC4YgAQYsQMYgwHCAhEQLhiABBixAxjRAxiDARjHAcICDhAAGIAEGLEDGIMBGIoFwgIREC4YgAQYkQIYsQMYgwEYigXCAhEQLhiABBiRAhjRAxjHARiKBcICDRAuGIAEGLEDGBQYhwLCAg4QLhiABBixAxjRAxjHAcICEBAuGIAEGLEDGIMBGBQYhwLCAggQLhiABBixA8ICCxAAGIAEGLEDGIMBwgILEC4YgAQYkQIYigXCAgUQLhiABMICDRAuGIAEGLEDGEMYigXCAg4QLhiABBiRAhixAxiKBcICDhAuGIAEGLEDGIMBGIoFwgIHEC4YgAQYCsICBxAAGIAEGArCAgUQABiABMICFhAuGIAEGAoYlwUY3AQY3gQY3wTYAQHCAgoQLhiABBixAxgKwgIJEC4YgAQYChgNwgIHEC4YgAQYDcICBxAAGIAEGA3CAgkQABiABBgKGA3CAhgQLhiABBgKGA0YlwUY3AQY3gQY3wTYAQHCAgYQABgNGB7CAggQABgIGA0YHpgDAIgGAZAGCLoGBggBEAEYFJIHAzkuM6AHzeMB&sclient=gws-wiz-serp";

    window.open(URL, "_blank");
  }
}

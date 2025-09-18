 // Get article ID from URL (e.g., article.html?id=2)
   const params = new URLSearchParams(window.location.search);
      const articleId = parseInt(params.get("id")); // نجيب ID

// async function loadArticle() {
  async function loadNews() {
    try {
      const response = await fetch("News.json");
      const data = await response.json();
  
      const article = data.find(item => item.id === articleId);
      if (!article) {
        document.getElementById("article-title").innerText = "Article not found!";
        return;
      }
    const res = await fetch("News.json");
    const news = await res.json();
    const sortedNews = news;

    document.getElementById("article-title").innerText = article.title;

    document.getElementById("article-body").innerHTML = `
    <h3>${article.content_one}</h3>
    <img loading="lazy" src="${article.image_one}" alt="${article.title}">
    <p>${article.content_one_p}</p>
    <div class="ad">Ad Space 728x90</div>
    <h3>${article.content_two}</h3>
  <img loading="lazy" src="${article.image_two}" alt="${article.title}">
    <p>${article.content_two_p}</p>
    <div class="ad">Ad Space 728x90</div>
    <h3>${article.content_three}</h3>
  <img loading="lazy" src="${article.image_three}" alt="${article.title}">
    <p>${article.content_three_p}</p>
        <div class="ad">Ad Space 728x90</div>
  `;
    const date = new Date(article.date);
    document.getElementById("article-date").innerText = date.toDateString();

    const mediaContainer = document.getElementById("article-media");
    if (article.video) {
      mediaContainer.innerHTML = `
        <div class="video-container">
          <iframe src="${article.video}" allowfullscreen></iframe>
        </div>
      `;
    }
  } catch (err) {
    console.error("Error loading article:", err);
  }
}
loadNews();
async function loadNewse() {
  const res = await fetch("news.json");
  const news = await res.json();

  const sortedNews = news.sort((a, b) => b.id - a.id);

  const mainArticle = sortedNews[1];
  const latestFour = sortedNews.slice(1, 5);
  // Latest links in sidebar
  const sidebarLinks = document.getElementById("sidebar-links");
  latestFour.forEach(article => {
    sidebarLinks.innerHTML += `
    <li>
    <div class="boxsid">
    <a href="${article.link}">
    <img class="sideimg" loading="lazy" src="${article.image_one}" alt="${article.title}">
    <p class="sidetext">${article.title.substring(0, 80)}</p>
    </a>
    </div>
    </li>`;
  });
  }
loadNewse();
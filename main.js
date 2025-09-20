async function loadNews() {
  const res = await fetch("News.json");
  const news = await res.json();

  const sortedNews = news.sort((a, b) => b.id - a.id);

  const mainArticle = sortedNews[0];
  const latestFour = sortedNews.slice(5, 9);

  document.getElementById("main-article").innerHTML = `
    <h2>${mainArticle.title}</h2>
    <h3>${mainArticle.content_one}</h3>
    <img loading="lazy" src="${mainArticle.image_one}" alt="${mainArticle.title}">
    <p>${mainArticle.content_one_p}</p>
    <div class="ad">Ad Space 728x90</div>
    <h3>${mainArticle.content_two}</h3>
  <img loading="lazy" src="${mainArticle.image_two}" alt="${mainArticle.title}">
    <p>${mainArticle.content_two_p}</p>
    <div class="ad">Ad Space 728x90</div>
    <h3>${mainArticle.content_three}</h3>
  <img loading="lazy" src="${mainArticle.image_three}" alt="${mainArticle.title}">
    <p>${mainArticle.content_three_p}</p>
        <div class="ad">Ad Space 728x90</div>
  `;

   const boxes = document.querySelector(".more-boxes");
  latestFour.forEach(article => {
    boxes.innerHTML += `
      <div class="box">
      <a href="${article.link}">
        <img src="${article.image_one}" alt="${article.title}">
        <h3>${article.title}</h3>
        <p>${article.content_one_p.substring(0, 80)}...</p>
        </a>
      </div>
    `;
  });
}

loadNews();

async function loadNewse() {
  const res = await fetch("News.json");
  const news = await res.json();

  const sortedNews = news.sort((a, b) => b.id - a.id);

  const mainArticle = sortedNews[1];
  const latestFour = sortedNews.slice(1, 5);
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
  const newsList = document.querySelector(".latest-news");
  latestFour.forEach(article => {
    newsList.innerHTML += `
      <article>
        <a href="${article.link}">${article.title}</a>
      </article>
    `;
  });

  const sideBarboxe = document.querySelector(".boxe");
  sideBarboxe.innerHTML += `<div><a href="#">Box</a></div>`

}
loadNewse();


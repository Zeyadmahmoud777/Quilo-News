async function loadNewse() {
  const res = await fetch("data/News.json");
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
  sideBarboxe.innerHTML += `<div><a href="#"></a></div>`

}
loadNewse();


// // Sample articles data (will be replaced with articles.json later)
// const articles = [
//   {
//     id: 1,
//     title: "Breaking: New AI Technology Revolutionizes Healthcare",
//     date: "2025-09-15",
//     image: "https://via.placeholder.com/400x200.png?text=AI+Healthcare",
//     content: "Scientists announced a groundbreaking AI system improving early disease detection..."
//   },
//   {
//     id: 2,
//     title: "Global Markets Hit Record Highs",
//     date: "2025-09-14",
//     image: "https://via.placeholder.com/400x200.png?text=Markets",
//     content: "Stock markets across the world reached unprecedented levels..."
//   },
//   {
//     id: 3,
//     title: "SpaceX Prepares Next Mission to Mars",
//     date: "2025-09-13",
//     image: "https://via.placeholder.com/400x200.png?text=Mars+Mission",
//     content: "Elon Musk’s company announced new timelines for the ambitious Mars project..."
//   },
//   {
//     id: 4,
//     title: "Climate Summit 2025: Leaders Take Action",
//     date: "2025-09-12",
//     image: "https://via.placeholder.com/400x200.png?text=Climate+Summit",
//     content: "World leaders signed a new agreement to reduce emissions..."
//   }
// ];

// // Display latest article
// const latestArticle = articles[0];
// document.getElementById("latest-article").innerHTML = `
//   <h3>${latestArticle.title}</h3>
//   <p>${latestArticle.content.substring(0, 120)}...</p>
//   <a href="articles/article-${latestArticle.id}.html">Read more</a>
// `;

// // Display recent headlines in aside
// const headlinesList = document.getElementById("recent-headlines");
// articles.slice(1).forEach(article => {
//   const li = document.createElement("li");
//   li.innerHTML = `<a href="articles/article-${article.id}.html">${article.title}</a>`;
//   headlinesList.appendChild(li);
// });

// // Display grid news (first 4 articles)
// const gridContainer = document.getElementById("grid-news");
// articles.forEach(article => {
//   const div = document.createElement("div");
//   div.classList.add("grid-item");
//   div.innerHTML = `
//     <img src="${article.image}" alt="${article.title}">
//     <div class="content">
//       <h3>${article.title}</h3>
//       <p>${article.content.substring(0, 80)}...</p>
//       <a href="articles/article-${article.id}.html">Read more</a>
//     </div>
//   `;
//   gridContainer.appendChild(div);
// });


async function loadNews() {
  const res = await fetch("News.json");
  const news = await res.json();

  // Sort by id (latest = highest id)
  const sortedNews = news.sort((a, b) => b.id - a.id);

  const mainArticle = sortedNews[0];
  const latestFour = sortedNews.slice(5, 9);

  // Main Article
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

 
  // News Boxes
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
 // Latest News https://picsum.photos/700/350?random=5 imgs
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
// `<a href="#">Ads 180 * 180</a>`
loadNewse();


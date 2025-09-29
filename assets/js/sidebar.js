async function loadSidebarNews() {
  const possiblePaths = [
    "data/News.json",       // لو الصفحة في الـ root
    "../data/News.json",    // لو الصفحة جوه فولدر articles/
    "../../data/News.json"  // لو في فولدر أعمق
  ];

  let news = null;
  for (const path of possiblePaths) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        news = await res.json();
        break;
      }
    } catch (e) {
      // جرب المسار اللي بعده
    }
  }

  if (!news) {
    console.error("❌ Couldn't load News.json from any path!");
    return;
  }

  // استخرج الـ id بتاع المقال الحالي (من اسم الملف)
  const currentFile = window.location.pathname.split("/").pop(); 
  const currentId = parseInt(currentFile.replace("article-", "").replace(".html", ""));

  // شيل المقال الحالي
  const otherNews = news.filter(article => article.id !== currentId);

  // هات 4 أخبار (من الأحدث)
  const latestFour = otherNews.slice(0, 10);

  // مكان السايد بار
  const sidebarLinks = document.getElementById("sidebar-links");
  if (!sidebarLinks) return;

  sidebarLinks.innerHTML = "";
  latestFour.forEach(article => {
    sidebarLinks.innerHTML += `
      <li>
        <div class="boxsid">
          <a href="article-${article.id}.html">
            <img class="sideimg" loading="lazy" src="${article.image_one}" alt="${article.title}">
            <p class="sidetext">${article.title.substring(0, 80)}</p>
          </a>
        </div>
      </li>`;
  });
}

// نفّذ السكريبت
loadSidebarNews();

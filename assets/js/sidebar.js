async function loadSidebarNews() {
  try {
    // هات البيانات من ملف الجيسون
    const res = await fetch("../data/News.json");
    const news = await res.json();

    // استخرج الـ id بتاع المقال الحالي من الرابط
    const params = new URLSearchParams(window.location.search);
    const currentId = parseInt(params.get("id"));

    // شيل المقال الحالي من القائمة
    const otherNews = news.filter(article => article.id !== currentId);

    // هات آخر 4 أخبار
    const latestFour = otherNews.slice(0, 4);

    // مكان السايد بار
    const sidebarLinks = document.getElementById("sidebar-links");
    sidebarLinks.innerHTML = "";

    latestFour.forEach(article => {
      sidebarLinks.innerHTML += `
        <li>
          <div class="boxsid">
            <a href="articals/article.html?id=${article.id}">
              <img class="sideimg" loading="lazy" src="${article.image_one}" alt="${article.title}">
              <p class="sidetext">${article.title.substring(0, 80)}</p>
            </a>
          </div>
        </li>`;
    });
  } catch (err) {
    console.error("Error loading sidebar news:", err);
  }
}

// نفّذ السكريبت
loadSidebarNews();

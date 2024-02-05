var articles = [
  {
    image:
      "https://www.cointribune.com/app/uploads/2024/01/Crypto-Explosion-1024x683.png",
    title: "Riset: Kejaatan Kripto Turun Drastis Pada Tahun 2023",
    description:
      "Kejahatan terkait kripto turun pada tahun 2023 karena sebagian besar aset digital tetap sideways dan sebagian besar berada di wilayah..",
  },
  {
    image:
      "https://news.tokocrypto.com/wp-content/uploads/2023/11/Jangan-Panik-Lakukan-Tips-Ini-Saat-Harga-Bitcoin-Anjlok-1024x683-1.webp",
    title: "Mengapa Harga BTC Tidak Naik meskipun Ada ETF Bitcoin Spot",
    description:
      "Pada awal tahun 2024, komunitas kripto dengan penuh harap-harap cemas menyambut kehadiran Exchange-Traded Fund (ETF) Bitcoin spot. Namun ...",
  },
  {
    image:
      "https://blog.pintu.co.id/wp-content/uploads/2024/01/historical-cost-1-1.jpg",
    title:
      "Pengertian Historical Cost dan Fair Value, Point Penting, Prinsip, dan Cara Menyesuaikannya!",
    description: "Dalam dunia akuntansi dan keuangan, pemahaman...",
  },
  {
    image:
      "https://www.cointribune.com/app/uploads/2024/01/Crypto-Explosion-1024x683.png",
    title: "Riset: Kejaatan Kripto Turun Drastis Pada Tahun 2023",
    description:
      "Kejahatan terkait kripto turun pada tahun 2023 karena sebagian besar aset digital tetap sideways dan sebagian besar berada di wilayah...",
  },
  {
    image:
      "https://news.tokocrypto.com/wp-content/uploads/2023/11/Jangan-Panik-Lakukan-Tips-Ini-Saat-Harga-Bitcoin-Anjlok-1024x683-1.webp",
    title: "Mengapa Harga BTC Tidak Naik meskipun Ada ETF Bitcoin Spot",
    description:
      "Pada awal tahun 2024, komunitas kripto dengan penuh harap-harap cemas menyambut kehadiran Exchange-Traded Fund (ETF) Bitcoin spot. Namun ...",
  },
  {
    image:
      "https://blog.pintu.co.id/wp-content/uploads/2024/01/historical-cost-1-1.jpg",
    title:
      "Pengertian Historical Cost dan Fair Value, Point Penting, Prinsip, dan Cara Menyesuaikannya!",
    description: "Dalam dunia akuntansi dan keuangan, pemahaman...",
  },
];

function createArticleCard(article) {
  var card = document.createElement("article");
  card.classList.add("card-article");

  var img = document.createElement("img");
  img.src = article.image;
  img.alt = article.title;
  img.classList.add("image-rounded");

  var title = document.createElement("h2");
  title.textContent = article.title;

  var description = document.createElement("p");
  description.textContent = article.description;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);

  return card;
}

var articleContainer = document.querySelector(".home-articles");
articles.forEach(function (article) {
  var card = createArticleCard(article);
  articleContainer.appendChild(card);
});

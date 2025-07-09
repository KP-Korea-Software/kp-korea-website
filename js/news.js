fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('http://www.kcna.kp/en'))
  .then(res => res.json())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');

    const article = doc.querySelector('div.img-title a');
    if (!article) {
      console.warn("No top article found in .img-title a");
      return;
    }

    const title = article.textContent.trim().replace(/\s+/g, ' ');
    const link = "http://www.kcna.kp" + article.getAttribute('href');

    const newsLink = document.getElementById('news-link');
    newsLink.textContent = title;
    newsLink.href = link;

    document.getElementById('news-bar').style.display = 'block';
  })
  .catch(err => console.error('KCNA fetch error:', err));
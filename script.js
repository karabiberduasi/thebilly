// Büyük manşet yazısını her 5 saniyede bir alttaki sıradaki haberin başlığına çevirir.
// Aktif haberin kartı kırmızı olur ve gerekirse şerit o karta kayar.

(function () {
  var INTERVAL = 5000; // geçiş süresi (milisaniye): 5000 = 5 saniye
  var FADE = 300;      // solma süresi, style.css'teki transition ile aynı olmalı

  var statement = document.querySelector('.statement');
  var statementLink = statement.querySelector('a');
  var more = document.querySelector('.more');
  var items = Array.prototype.slice.call(document.querySelectorAll('.more .item'));

  if (!items.length) return;

  function setImage(el, url) {
    el.style.backgroundImage = url ? 'url("' + url + '")' : '';
  }

  // Alttaki her kart bir hikaye olur
  var stories = items.map(function (item) {
    var link = item.querySelector('.item__title a');
    setImage(item.querySelector('.item__photo'), item.getAttribute('data-image') || '');
    return {
      title: link.textContent,
      href: link.getAttribute('href'),
      item: item
    };
  });

  var current = 0;
  var paused = false;

  function fill(story) {
    statementLink.textContent = story.title;
    statementLink.setAttribute('href', story.href);

    items.forEach(function (item) {
      item.classList.toggle('is-active', item === story.item);
    });

    // Aktif kart şeritte görünmüyorsa şeridi ona kaydır (sayfayı kaydırmaz)
    var left = story.item.offsetLeft - more.offsetLeft;
    var right = left + story.item.offsetWidth;
    if (left < more.scrollLeft || right > more.scrollLeft + more.clientWidth) {
      more.scrollTo({ left: left, behavior: 'smooth' });
    }
  }

  function show(index) {
    current = index;
    statement.classList.add('is-fading');
    setTimeout(function () {
      fill(stories[current]);
      statement.classList.remove('is-fading');
    }, FADE);
  }

  fill(stories[0]);

  setInterval(function () {
    if (paused) return;
    show((current + 1) % stories.length);
  }, INTERVAL);

  // Fare manşetin ya da kartların üzerindeyken geçiş durur
  [statement, more].forEach(function (el) {
    el.addEventListener('mouseenter', function () { paused = true; });
    el.addEventListener('mouseleave', function () { paused = false; });
  });
})();

// Ana sayfadaki kartları ve dev manşeti haberler.js verisiyle doldurur ve döndürür.
document.addEventListener('DOMContentLoaded', function () {
  var INTERVAL = 5000; // 5 saniye
  var FADE = 300;
// --- MOUSE WHEEL (SCROLL) İLE YATAY KAYDIRMA ---
  if (more) {
    more.addEventListener('wheel', function (e) {
      if (e.deltaY !== 0) {
        e.preventDefault(); // Sayfanın aşağı kaymasını engelle
        more.scrollLeft += e.deltaY * 1.5; // Yatay olarak yumuşak kaydır
      }
    }, { passive: false });
  }

  // --- SAĞ-SOL OK BUTONLARI İLE KAYDIRMA ---
  var btnPrev = document.querySelector('.more-nav--prev');
  var btnNext = document.querySelector('.more-nav--next');
  var SCROLL_AMOUNT = 350; // Tek tıklamada bir kart boyu kaydır

  if (btnPrev && more) {
    btnPrev.addEventListener('click', function () {
      more.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    });
  }

  if (btnNext && more) {
    btnNext.addEventListener('click', function () {
      more.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    });
  }
  var statement = document.querySelector('.statement');
  var statementLink = statement ? statement.querySelector('a') : null;
  var more = document.querySelector('.more');

  // haberler.js yüklü mü kontrol et
  if (typeof HABERLER === 'undefined' || !HABERLER.length) {
    console.error("HABERLER değişkeni bulunamadı. haberler.js dosyasının index.html'e eklendiğinden emin olun.");
    return;
  }

  // 1. Kartları haberler.js'ten gelen verilerle doldur
  var listeHaberleri = HABERLER.filter(function (h) { return h.id !== 'manset'; });
  var kartlar = Array.prototype.slice.call(document.querySelectorAll('.more .item'));

  kartlar.forEach(function (kart, index) {
    var haber = listeHaberleri[index];
    if (!haber) {
      kart.style.display = 'none';
      return;
    }

    var tagEl = kart.querySelector('.tag');
    var titleLink = kart.querySelector('.item__title a');
    var descEl = kart.querySelector('.item__desc');
    var readLink = kart.querySelector('.item__link');
    var photoEl = kart.querySelector('.item__photo');

    if (tagEl) tagEl.textContent = haber.kategori || '';
    if (titleLink) {
      titleLink.textContent = haber.baslik || '';
      titleLink.setAttribute('href', 'haber.html?id=' + haber.id);
    }
    if (descEl) descEl.textContent = haber.ozet || '';
    if (readLink) readLink.setAttribute('href', 'haber.html?id=' + haber.id);

    if (photoEl && haber.gorsel) {
      photoEl.style.backgroundImage = 'url("' + haber.gorsel + '")';
    }
  });

  // 2. Slayt / Döngü için hikayeleri hazırla
  var activeItems = kartlar.filter(function (k) { return k.style.display !== 'none'; });
  if (!activeItems.length || !statementLink) {
    console.warn("Manşet linki veya aktif kart bulunamadı.");
    return;
  }

  var stories = activeItems.map(function (item) {
    var link = item.querySelector('.item__title a');
    return {
      title: link ? link.textContent : '',
      href: link ? link.getAttribute('href') : '#',
      item: item
    };
  });

  var current = 0;
  var paused = false;

  function fill(story) {
    if (!story) return;
    statementLink.textContent = story.title;
    statementLink.setAttribute('href', story.href);

    activeItems.forEach(function (item) {
      item.classList.toggle('is-active', item === story.item);
    });

    if (more) {
      var left = story.item.offsetLeft - more.offsetLeft;
      var right = left + story.item.offsetWidth;
      if (left < more.scrollLeft || right > more.scrollLeft + more.clientWidth) {
        more.scrollTo({ left: left, behavior: 'smooth' });
      }
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

  // İlk haberi hemen yazdır
  fill(stories[0]);

  // 5 saniyede bir sonrakine geç
  setInterval(function () {
    if (paused) return;
    show((current + 1) % stories.length);
  }, INTERVAL);

  if (statement && more) {
    [statement, more].forEach(function (el) {
      el.addEventListener('mouseenter', function () { paused = true; });
      el.addEventListener('mouseleave', function () { paused = false; });
    });
  }
});

// Ana sayfadaki kartları ve dev manşeti haberler.js verisiyle doldurur ve döndürür.
document.addEventListener('DOMContentLoaded', function () {
  var INTERVAL = 5000; // 5 saniye
  var FADE = 300;

  var statement = document.querySelector('.statement');
  var statementLink = statement ? statement.querySelector('a') : null;
  var statementBg = document.getElementById('statement-bg');
  var more = document.querySelector('.more');

 // --- MOUSE WHEEL İLE YAĞ GİBİ SMOOTH YATAY KAYDIRMA ---
  if (more) {
    var targetScroll = more.scrollLeft;
    var currentScroll = more.scrollLeft;
    var isAnimating = false;

    function smoothScrollLoop() {
      // Mevcut pozisyon ile hedef pozisyon arasındaki mesafeyi yumuşakça kapat (0.1 yumuşaklık katsayısı)
      currentScroll += (targetScroll - currentScroll) * 0.1;
      more.scrollLeft = currentScroll;

      // Hedefe çok yaklaştıysa animasyonu durdur
      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        requestAnimationFrame(smoothScrollLoop);
      } else {
        more.scrollLeft = targetScroll;
        isAnimating = false;
      }
    }

    more.addEventListener('wheel', function (e) {
      if (e.deltaY !== 0) {
        e.preventDefault();

        var maxScroll = more.scrollWidth - more.clientWidth;
        // İvme katsayısı (e.deltaY * 2.2)
        targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + e.deltaY * 2.2));

        if (!isAnimating) {
          isAnimating = true;
          requestAnimationFrame(smoothScrollLoop);
        }
      }
    }, { passive: false });
  }
  // haberler.js kontrolü
  if (typeof HABERLER === 'undefined' || !HABERLER.length) {
    console.error("HABERLER değişkeni bulunamadı. haberler.js yüklenemedi.");
    return;
  }

  // 1. Kartları doldur
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

  // 2. Slayt Hazırlığı
  var activeItems = kartlar.filter(function (k) { return k.style.display !== 'none'; });
  if (!activeItems.length || !statementLink) return;

  var stories = activeItems.map(function (item, index) {
    var haber = listeHaberleri[index];
    var link = item.querySelector('.item__title a');
    return {
      title: link ? link.textContent : '',
      href: link ? link.getAttribute('href') : '#',
      gorsel: haber ? haber.gorsel : '',
      item: item
    };
  });

  var current = 0;
  var paused = false;

  var recentIndexes = [];
  var MAX_HISTORY = Math.min(8, stories.length - 1);

  function fill(story) {
    if (!story) return;

    statementLink.textContent = story.title;
    statementLink.setAttribute('href', story.href);

    if (statementBg) {
      if (story.gorsel) {
        statementBg.style.backgroundImage = 'url("' + story.gorsel + '")';
      } else {
        statementBg.style.backgroundImage = '';
      }
    }

    var len = story.title.length;
    if (len > 90) {
      statement.style.fontSize = '2.2vw';
    } else if (len > 60) {
      statement.style.fontSize = '3vw';
    } else {
      statement.style.fontSize = '';
    }

    activeItems.forEach(function (item) {
      item.classList.toggle('is-active', item === story.item);
    });

    if (more && !paused) {
      var left = story.item.offsetLeft - more.offsetLeft;
      more.scrollTo({ left: left, behavior: 'smooth' });
    }
  }

  function show(index, instant) {
    current = index;
    
    if (recentIndexes.indexOf(index) === -1) {
      recentIndexes.push(index);
      if (recentIndexes.length > MAX_HISTORY) {
        recentIndexes.shift();
      }
    }

    // Hover yaparken anında değiştir (instant), otomatik döngüde fade efekti ver
    if (instant) {
      fill(stories[current]);
    } else {
      if (statement) statement.classList.add('is-fading');
      setTimeout(function () {
        fill(stories[current]);
        if (statement) statement.classList.remove('is-fading');
      }, FADE);
    }
  }

  // --- KARTLARIN ÜSTÜNE GELİNCE MANŞETTE GÖSTERME (HOVER) ---
  stories.forEach(function (story, index) {
    story.item.addEventListener('mouseenter', function () {
      paused = true;
      show(index, true); // Anında manşeti değiştir
    });

    story.item.addEventListener('mouseleave', function () {
      paused = false;
    });
  });

  // İlk açılış
  show(0, true);

  // 5 saniyede bir otomatik döngü
  setInterval(function () {
    if (paused) return;

    var availableIndexes = [];
    for (var i = 0; i < stories.length; i++) {
      if (recentIndexes.indexOf(i) === -1) {
        availableIndexes.push(i);
      }
    }

    if (availableIndexes.length === 0) {
      availableIndexes = [(current + 1) % stories.length];
    }

    var randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    show(randomIndex, false);

  }, INTERVAL);

  // Manşet alanının üstüne gelince de otomatik kaymayı duraklat
  if (statement) {
    statement.addEventListener('mouseenter', function () { paused = true; });
    statement.addEventListener('mouseleave', function () { paused = false; });
  }
});
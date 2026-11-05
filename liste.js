// podcast.html, video.html ve fotograf.html sayfalarını icerik.js'teki verilerle doldurur.
// Hangi sayfa olduğunu #icerik elemanındaki data-sayfa="podcast | video | fotograf" belirler.

(function () {
  var host = document.getElementById('icerik');
  if (!host) return;
  var tur = host.getAttribute('data-sayfa');

  var PLAY = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"></path></svg>';

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function setBg(node, url) {
    if (url) node.style.backgroundImage = 'url("' + String(url).replace(/"/g, '%22') + '")';
  }

  function trUpper(s) { return s.toLocaleUpperCase('tr-TR'); }

  /* ---------- PODCAST ---------- */
  function podcast() {
    if (typeof PODCASTLER === 'undefined') return;
    PODCASTLER.forEach(function (p) {
      var row = el('article', 'pod');
      row.appendChild(el('div', 'pod__no', (p.bolum < 10 ? '0' : '') + p.bolum));

      var cover = el('div', 'pod__cover');
      setBg(cover, p.gorsel);
      row.appendChild(cover);

      var body = el('div', 'pod__body');
      body.appendChild(el('span', 'tag tag--small', trUpper('Bölüm ' + p.bolum + ' · ' + p.sure + ' · ' + p.tarih)));
      body.appendChild(el('h2', 'pod__title', p.baslik));
      body.appendChild(el('p', 'pod__desc', p.ozet));

      if (p.ses) {
        var audio = document.createElement('audio');
        audio.controls = true;
        audio.preload = 'none';
        audio.src = p.ses;
        body.appendChild(audio);
      } else {
        body.appendChild(el('span', 'meta meta--small', '[Ses dosyası eklenince oynatıcı burada görünür]'));
      }

      row.appendChild(body);
      host.appendChild(row);
    });
  }

  /* ---------- VİDEO HABER ---------- */
  function video() {
    if (typeof VIDEOLAR === 'undefined' || !VIDEOLAR.length) return;

    var feature = el('div', 'vid-feature');
    var stage = el('div', 'vid-stage');
    var info = el('div', 'vid-info');
    feature.appendChild(stage);
    feature.appendChild(info);

    var grid = el('div', 'vid-grid');
    host.appendChild(feature);
    host.appendChild(grid);

    var cards = [];

    function show(i) {
      var v = VIDEOLAR[i];

      stage.textContent = '';
      stage.style.backgroundImage = '';
      if (v.video) {
        var player = document.createElement('video');
        player.controls = true;
        player.preload = 'metadata';
        player.src = v.video;
        if (v.gorsel) player.poster = v.gorsel;
        stage.appendChild(player);
      } else {
        setBg(stage, v.gorsel);
        var ph = el('div', 'vid-stage__ph');
        var icon = el('span');
        icon.innerHTML = PLAY.replace('width="16" height="16"', 'width="40" height="40"');
        ph.appendChild(icon);
        ph.appendChild(el('span', '', '[Video dosyası eklenince burada oynar]'));
        stage.appendChild(ph);
      }

      info.textContent = '';
      info.appendChild(el('span', 'tag', v.kategori));
      info.appendChild(el('h2', '', v.baslik));
      info.appendChild(el('p', '', v.ozet));
      info.appendChild(el('span', 'meta', v.tarih + ' · ' + v.sure));

      cards.forEach(function (c, j) {
        c.classList.toggle('is-active', j === i);
        c.setAttribute('aria-pressed', j === i ? 'true' : 'false');
      });
    }

    VIDEOLAR.forEach(function (v, i) {
      var card = el('button', 'vid-card');
      card.type = 'button';

      var thumb = el('div', 'vid-card__thumb');
      setBg(thumb, v.gorsel);
      var play = el('span', 'vid-card__play');
      play.innerHTML = PLAY;
      thumb.appendChild(play);
      thumb.appendChild(el('span', 'vid-card__time', v.sure));
      card.appendChild(thumb);

      var body = el('div', 'vid-card__body');
      body.appendChild(el('span', 'tag tag--small', v.kategori));
      body.appendChild(el('span', 'vid-card__title', v.baslik));
      card.appendChild(body);

      card.addEventListener('click', function () {
        show(i);
        feature.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      cards.push(card);
      grid.appendChild(card);
    });

    show(0);
  }

  /* ---------- FOTOĞRAF ---------- */
  function fotograf() {
    if (typeof FOTOGRAFLAR === 'undefined' || !FOTOGRAFLAR.length) return;

    // büyütme penceresi (lightbox)
    var box = el('div', 'lightbox');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Fotoğraf');
    var boxImg = el('div', 'lightbox__img');
    var boxCap = el('p', 'lightbox__cap');
    var btnClose = el('button', 'lightbox__btn lightbox__btn--close', '✕');
    var btnPrev = el('button', 'lightbox__btn lightbox__btn--prev', '←');
    var btnNext = el('button', 'lightbox__btn lightbox__btn--next', '→');
    btnClose.type = btnPrev.type = btnNext.type = 'button';
    btnClose.setAttribute('aria-label', 'Kapat');
    btnPrev.setAttribute('aria-label', 'Önceki fotoğraf');
    btnNext.setAttribute('aria-label', 'Sonraki fotoğraf');
    [boxImg, boxCap, btnClose, btnPrev, btnNext].forEach(function (n) { box.appendChild(n); });
    document.body.appendChild(box);

    var current = 0;
    var opener = null;

    function render(i) {
      var f = FOTOGRAFLAR[i];
      current = i;
      boxImg.style.backgroundImage = '';
      setBg(boxImg, f.gorsel);
      boxCap.textContent = f.baslik + ' · ' + f.yazar + ' · ' + f.tarih;
    }

    function open(i, trigger) {
      opener = trigger;
      render(i);
      box.classList.add('is-open');
      btnClose.focus();
    }

    function close() {
      box.classList.remove('is-open');
      if (opener) opener.focus();
    }

    function step(d) {
      render((current + d + FOTOGRAFLAR.length) % FOTOGRAFLAR.length);
    }

    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', function () { step(-1); });
    btnNext.addEventListener('click', function () { step(1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });

    // fotoğraf ızgarası
    FOTOGRAFLAR.forEach(function (f, i) {
      var fig = el('figure', 'photo');

      var btn = el('button', 'photo__btn');
      btn.type = 'button';
      btn.setAttribute('aria-label', f.baslik + ' fotoğrafını büyüt');
      var img = el('div', 'photo__img');
      img.style.aspectRatio = f.oran || '4 / 3';
      setBg(img, f.gorsel);
      btn.appendChild(img);
      btn.addEventListener('click', function () { open(i, btn); });
      fig.appendChild(btn);

      var cap = el('figcaption');
      cap.appendChild(el('b', '', f.baslik));
      cap.appendChild(document.createElement('br'));
      cap.appendChild(document.createTextNode(f.yazar + ' · ' + f.tarih));
      fig.appendChild(cap);

      host.appendChild(fig);
    });
  }

  if (tur === 'podcast') podcast();
  else if (tur === 'video') video();
  else if (tur === 'fotograf') fotograf();
})();

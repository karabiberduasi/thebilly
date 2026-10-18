document.addEventListener('DOMContentLoaded', function () {
  // 1. URL'deki parametreden haber id'sini al (?id=haber-1 gibi)
  var params = new URLSearchParams(window.location.search);
  var haberId = params.get('id') || 'haber-1';

  // 2. Veri kontrolü
  if (typeof HABERLER === 'undefined' || !HABERLER.length) {
    console.error("HABERLER verisi bulunamadı!");
    return;
  }

  // 3. Eşleşen haberi bul, bulamazsa ilk haberi getir
  var haber = HABERLER.find(function (item) {
    return item.id === haberId;
  }) || HABERLER[0];

  // 4. Başlık ve meta alanlarını doldur
  document.title = haber.baslik + " – The Billy";
  
  var elKategori = document.getElementById('h-kategori');
  var elBaslik = document.getElementById('h-baslik');
  var elOzet = document.getElementById('h-ozet');
  var elYazar = document.getElementById('h-yazar');
  var elTarih = document.getElementById('h-tarih');
  var elSure = document.getElementById('h-sure');

  if (elKategori) elKategori.textContent = haber.kategori || '';
  if (elBaslik) elBaslik.textContent = haber.baslik || '';
  if (elOzet) elOzet.textContent = haber.ozet || '';
  if (elYazar) elYazar.textContent = haber.yazar || '';
  if (elTarih) elTarih.textContent = haber.tarih || '';
  if (elSure) elSure.textContent = haber.sure || '';

  // 5. Görsel alanını doldur
  var elGorsel = document.getElementById('h-gorsel');
  var elGorselAciklama = document.getElementById('h-gorsel-aciklama');

  if (elGorsel && haber.gorsel) {
    elGorsel.style.backgroundImage = 'url("' + haber.gorsel + '")';
    elGorsel.classList.add('has-image');
  }
  if (elGorselAciklama) {
    elGorselAciklama.textContent = haber.gorselAciklama || '';
  }

  // 6. Paragrafları ve ## alt başlıkları içeriğe bas
  var elMetin = document.getElementById('h-metin');
  if (elMetin && Array.isArray(haber.metin)) {
    elMetin.innerHTML = '';
    haber.metin.forEach(function (satir) {
      if (satir.startsWith('## ')) {
        var h2 = document.createElement('h2');
        h2.textContent = satir.replace('## ', '');
        elMetin.appendChild(h2);
      } else {
        var p = document.createElement('p');
        p.textContent = satir;
        elMetin.appendChild(p);
      }
    });
  }

  // 7. Sağ taraftaki "Diğer haberler" listesini doldur
  var elDiger = document.getElementById('h-diger');
  if (elDiger) {
    elDiger.innerHTML = '';
    HABERLER.filter(function (item) { return item.id !== haber.id; }).forEach(function (diger) {
      var itemDiv = document.createElement('article');
      itemDiv.className = 'rail-item';
      
      var bgStyle = diger.gorsel ? ' style="background-image:url(\'' + diger.gorsel + '\')"' : '';
      
      itemDiv.innerHTML = 
        '<div class="rail-item__photo"' + bgStyle + '></div>' +
        '<div class="rail-item__body">' +
          '<span class="tag tag--small">' + (diger.kategori || '') + '</span>' +
          '<a href="haber.html?id=' + diger.id + '">' + diger.baslik + '</a>' +
        '</div>';
      
      elDiger.appendChild(itemDiv);
    });
  }
});

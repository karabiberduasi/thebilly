// ===== HABER VERİ DOSYASI =====
// Yeni haber eklemek için aşağıdaki listeye bir blok ekle (virgülü unutma).
// id: haberin adresi olur  →  haber.html?id=haber-1
// metin: her satır bir paragraf. "## " ile başlayan satır alt başlık olur.
// gorsel: fotoğraf dosyasının adı (ör. "foto1.jpg"). Boşsa gri yer tutucu görünür.

var HABERLER = [
  {
    id: "manset",
    kategori: "[KATEGORİ]",
    baslik: "[Manşet başlığı buraya gelecek, iki üç satıra yayılan güçlü bir cümle]",
    ozet: "[Haberin kısa özeti buraya gelecek.]",
    yazar: "[Yazar adı]",
    tarih: "[Tarih]",
    sure: "5 dk okuma",
    gorsel: "",
    gorselAciklama: "[Fotoğraf açıklaması ve kaynağı]",
    metin: [
      "[Haber metninin ilk paragrafı buraya gelecek.]",
      "## [Alt başlık]",
      "[Haber metninin ikinci paragrafı buraya gelecek.]",
      "[Haber metninin üçüncü paragrafı buraya gelecek.]"
    ]
  },
{
    id: "haber-1",
    kategori: "YAŞAM",
    baslik: "71 Yıllık Berber, Müşterileriyle Dostluk Bağını Sürdürüyor",
    ozet: "Eskişehir'de 71 yıldır berberlik yapan 83 yaşındaki Zeki Tarhan, mesleğini ilk günkü hevesiyle sürdürürken yarım asrı aşan müşteri dostluklarıyla dikkat çekiyor.",
    yazar: "Demet Çayır",
    tarih: "16 Ekim 2026",
    sure: "3 dk okuma",
    gorsel: "images/demetçayir_LATE_74782_179331_IMG_4909.jpg",
    gorselAciklama: "Eskişehir'de 71 yıldır aralıksız berberlik yapan Zeki Tarhan",
    metin: [
      "Eskişehir’de 71 yıldır aralıksız berberlik yapan Zeki Tarhan (83), hala dükkanını ilk günkü hevesiyle açtığını söyledi. Küçük dükkanından kazandığıyla 3 çocuğunu büyütüp okuttuğunu ifade eden Tarhan, “Müşterilerim uzun yıllardır benden başkasına tıraş olmaz. Ayağında kısa pantolonla gelip şu anda dede olmuş müşterilerim hala bana geliyor” dedi.",
      "Eskişehir’de oturan Zeki Tarhan, 12 yaşındayken meslek arayışına girdiği sırada abileri ve babasının teşvik etmesiyle 1955 yılında berber çıraklığına başladı. Berberliği çok sevdiğini fark ederek mesleğini severek yapmaya başlayan Tarhan, kazancıyla evini geçindirip 3 çocuğunu büyüttü. Mesleğinde 71 yılı geride bırakmasına rağmen her sabah ilk günkü hevesle dükkanını açtığını söyleyen Tarhan, güne tıraş malzemelerini temizleyip tezgâha dizerek başladığını, dükkânın temizliğini yaptıktan sonra müşterilerini beklediğini anlattı.",
      "Kendisine tıraş olmaya gelenleri yalnızca müşteri olarak değil, arkadaş olarak gördüğünü belirten Tarhan, meslek hayatı boyunca kurduğu dostluklar sayesinde bazı müşterileriyle 50-60 yıldır görüştüğünü söyledi. Müşterilerinin yalnızca tıraş olmak için değil, kahvaltı yapmak ve sohbet etmek için de dükkâna geldiğini ifade eden Tarhan, “Ben şimdi gençliğimdeki gibi dükkânı her sabah aynı şevkle, aynı hevesle açıyorum. 71 yıldır aynı saatte açarım. Dükkânda temizlik yapıyorum, her şeyi hazırlıyorum. Müşterileri bekliyoruz. Dünyaya bir kez daha gelsem berber olurum. Müşterilerle bir ağabey kardeş gibi burada kahvaltımızı da yapıyoruz, yemeğimizi de yiyoruz. Bir kere koltuğa oturdular mı bir daha kalkmazlar. Artık bir aile gibi olduk. Birbirimizi tanıdık. Burada muhabbet, sohbet var. Başka bir yere gidip tıraş olmazlar. Başka şehre gittiklerinde bir hafta, 10 gün beni beklerler. Çocukluğundan beri, ayağında kısa pantolonla gelip şimdi 70-80 yaşında dede olmuş müşterilerim hala bana tıraş oluyor” diye konuştu.",
      "## ‘7 Yaşımdan Beri Zeki Abiye Tıraş Oluyorum’",
      "Eskişehir’in Alpu ilçesine bağlı Mamure köyünden emekli öğretmen Abdullah Taşkın da Zeki Tarhan’ın uzun yıllardır müşterileri arasında yer alıyor. Yaklaşık 66-70 yıldır Tarhan’a tıraş olduğunu belirten Taşkın, çocukluğunda köyde berberlik yapan Tarhan’ın daha sonra şehir merkezine taşınmasına rağmen kendisinin tıraş olmak için Eskişehir’e gelmeye devam ettiğini söyledi.",
      "Ağrı’da öğretmenlik yaptığı 3 yıl boyunca yalnızca 3 kez başka bir yerde tıraş olduğunu anlatan Taşkın, o dönemde uzun saç kullanmanın serbest olduğunu, bu nedenle saçlarını uzattığını ve 3-4 ayda bir Eskişehir’e geldiğinde tıraşını yine Zeki Tarhan’a olduğunu ifade etti. Taşkın, Zeki Tarhan’dan başka bir berbere tıraş olmadığını belirterek, gelmeden önce mutlaka telefonla arayıp randevu aldığını söyledi. Tarhan’ın kendisine verdiği saate göre köyden yola çıktığını anlatan Taşkın, “Yarın gel derse yarın, bir saat sonra gel derse hemen arabaya atlar, köyden çıkarım. Yaklaşık bir saat süren yolu gelip Zeki abiye tıraş olurum. Çocukluğumdan beri kendisine geliyorum” dedi."
    ]
  },
  {
    id: "haber-2",
    kategori: "[KATEGORİ]",
    baslik: "[2. haber başlığı buraya gelecek, kısa ve net]",
    ozet: "[2. haberin özeti buraya gelecek.]",
    yazar: "[Yazar adı]",
    tarih: "[Tarih]",
    sure: "4 dk okuma",
    gorsel: "",
    gorselAciklama: "",
    metin: [
      "[2. haberin ilk paragrafı buraya gelecek.]",
      "[2. haberin ikinci paragrafı buraya gelecek.]"
    ]
  },
  {
    id: "haber-3",
    kategori: "[KATEGORİ]",
    baslik: "[3. haber başlığı buraya gelecek, kısa ve net]",
    ozet: "[3. haberin özeti buraya gelecek.]",
    yazar: "[Yazar adı]",
    tarih: "[Tarih]",
    sure: "6 dk okuma",
    gorsel: "",
    gorselAciklama: "",
    metin: [
      "[3. haberin ilk paragrafı buraya gelecek.]",
      "[3. haberin ikinci paragrafı buraya gelecek.]"
    ]
  },
  {
    id: "haber-4",
    kategori: "[KATEGORİ]",
    baslik: "[4. haber başlığı buraya gelecek, kısa ve net]",
    ozet: "[4. haberin özeti buraya gelecek.]",
    yazar: "[Yazar adı]",
    tarih: "[Tarih]",
    sure: "5 dk okuma",
    gorsel: "",
    gorselAciklama: "",
    metin: [
      "[4. haberin ilk paragrafı buraya gelecek.]",
      "[4. haberin ikinci paragrafı buraya gelecek.]"
    ]
  },
  {
    id: "haber-5",
    kategori: "[KATEGORİ]",
    baslik: "[5. haber başlığı buraya gelecek, kısa ve net]",
    ozet: "[5. haberin özeti buraya gelecek.]",
    yazar: "[Yazar adı]",
    tarih: "[Tarih]",
    sure: "4 dk okuma",
    gorsel: "",
    gorselAciklama: "",
    metin: [
      "[5. haberin ilk paragrafı buraya gelecek.]",
      "[5. haberin ikinci paragrafı buraya gelecek.]"
    ]
  },
  {
    id: "haber-6",
    kategori: "[KATEGORİ]",
    baslik: "[6. haber başlığı buraya gelecek, kısa ve net]",
    ozet: "[6. haberin özeti buraya gelecek.]",
    yazar: "[Yazar adı]",
    tarih: "[Tarih]",
    sure: "3 dk okuma",
    gorsel: "",
    gorselAciklama: "",
    metin: [
      "[6. haberin ilk paragrafı buraya gelecek.]",
      "[6. haberin ikinci paragrafı buraya gelecek.]"
    ]
  }
];

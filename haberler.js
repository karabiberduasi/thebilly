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
    kategori: "[KATEGORİ]",
    baslik: "[1. haber başlığı buraya gelecek, kısa ve net]",
    ozet: "[1. haberin özeti buraya gelecek.]",
    yazar: "[Yazar adı]",
    tarih: "[Tarih]",
    sure: "3 dk okuma",
    gorsel: "",
    gorselAciklama: "",
    metin: [
      "[1. haberin ilk paragrafı buraya gelecek.]",
      "[1. haberin ikinci paragrafı buraya gelecek.]"
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

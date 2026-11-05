// ===== PODCAST, VİDEO HABER VE FOTOĞRAF VERİ DOSYASI =====
// Yeni içerik eklemek için ilgili listeye bir blok kopyala (virgülü unutma).
// gorsel / ses / video: dosyanın adı ya da yolu (ör. "images/kapak1.jpg", "ses/bolum1.mp3", "video/haber1.mp4").
// Boş bırakırsan gri yer tutucu görünür.

// ---- PODCAST ----
// bolum: bölüm numarası, sure: ör. "32 dk", ses: .mp3 dosyası
var PODCASTLER = [
  {
    id: "podcast-6",
    bolum: 6,
    baslik: "[Bölüm başlığı buraya gelecek]",
    ozet: "[Bölümün kısa tanıtımı buraya gelecek, en fazla iki üç cümle.]",
    sure: "32 dk",
    tarih: "[Tarih]",
    gorsel: "",
    ses: ""
  },
  {
    id: "podcast-5",
    bolum: 5,
    baslik: "[Bölüm başlığı buraya gelecek]",
    ozet: "[Bölümün kısa tanıtımı buraya gelecek, en fazla iki üç cümle.]",
    sure: "28 dk",
    tarih: "[Tarih]",
    gorsel: "",
    ses: ""
  },
  {
    id: "podcast-4",
    bolum: 4,
    baslik: "[Bölüm başlığı buraya gelecek]",
    ozet: "[Bölümün kısa tanıtımı buraya gelecek, en fazla iki üç cümle.]",
    sure: "41 dk",
    tarih: "[Tarih]",
    gorsel: "",
    ses: ""
  },
  {
    id: "podcast-3",
    bolum: 3,
    baslik: "[Bölüm başlığı buraya gelecek]",
    ozet: "[Bölümün kısa tanıtımı buraya gelecek, en fazla iki üç cümle.]",
    sure: "35 dk",
    tarih: "[Tarih]",
    gorsel: "",
    ses: ""
  }
];

// ---- VİDEO HABER ----
// video: .mp4 dosyası ya da adresi, gorsel: videonun kapak fotoğrafı
var VIDEOLAR = [
  {
    id: "video-1",
    kategori: "[KATEGORİ]",
    baslik: "[Video haber başlığı buraya gelecek]",
    ozet: "[Videonun kısa özeti buraya gelecek.]",
    sure: "2:45",
    tarih: "[Tarih]",
    gorsel: "",
    video: ""
  },
  {
    id: "video-2",
    kategori: "[KATEGORİ]",
    baslik: "[Video haber başlığı buraya gelecek]",
    ozet: "[Videonun kısa özeti buraya gelecek.]",
    sure: "1:58",
    tarih: "[Tarih]",
    gorsel: "",
    video: ""
  },
  {
    id: "video-3",
    kategori: "[KATEGORİ]",
    baslik: "[Video haber başlığı buraya gelecek]",
    ozet: "[Videonun kısa özeti buraya gelecek.]",
    sure: "3:12",
    tarih: "[Tarih]",
    gorsel: "",
    video: ""
  },
  {
    id: "video-4",
    kategori: "[KATEGORİ]",
    baslik: "[Video haber başlığı buraya gelecek]",
    ozet: "[Videonun kısa özeti buraya gelecek.]",
    sure: "4:03",
    tarih: "[Tarih]",
    gorsel: "",
    video: ""
  },
  {
    id: "video-5",
    kategori: "[KATEGORİ]",
    baslik: "[Video haber başlığı buraya gelecek]",
    ozet: "[Videonun kısa özeti buraya gelecek.]",
    sure: "2:20",
    tarih: "[Tarih]",
    gorsel: "",
    video: ""
  },
  {
    id: "video-6",
    kategori: "[KATEGORİ]",
    baslik: "[Video haber başlığı buraya gelecek]",
    ozet: "[Videonun kısa özeti buraya gelecek.]",
    sure: "1:36",
    tarih: "[Tarih]",
    gorsel: "",
    video: ""
  }
];

// ---- FOTOĞRAF ----
// oran: fotoğrafın en/boy oranı, ör. "4 / 3" (yatay), "3 / 4" (dikey), "1 / 1" (kare)
var FOTOGRAFLAR = [
  { id: "foto-1", baslik: "[Fotoğraf başlığı]", yazar: "[Fotoğrafçı adı]", tarih: "[Tarih]", oran: "4 / 3", gorsel: "" },
  { id: "foto-2", baslik: "[Fotoğraf başlığı]", yazar: "[Fotoğrafçı adı]", tarih: "[Tarih]", oran: "3 / 4", gorsel: "" },
  { id: "foto-3", baslik: "[Fotoğraf başlığı]", yazar: "[Fotoğrafçı adı]", tarih: "[Tarih]", oran: "1 / 1", gorsel: "" },
  { id: "foto-4", baslik: "[Fotoğraf başlığı]", yazar: "[Fotoğrafçı adı]", tarih: "[Tarih]", oran: "3 / 4", gorsel: "" },
  { id: "foto-5", baslik: "[Fotoğraf başlığı]", yazar: "[Fotoğrafçı adı]", tarih: "[Tarih]", oran: "4 / 3", gorsel: "" },
  { id: "foto-6", baslik: "[Fotoğraf başlığı]", yazar: "[Fotoğrafçı adı]", tarih: "[Tarih]", oran: "1 / 1", gorsel: "" },
  { id: "foto-7", baslik: "[Fotoğraf başlığı]", yazar: "[Fotoğrafçı adı]", tarih: "[Tarih]", oran: "4 / 3", gorsel: "" },
  { id: "foto-8", baslik: "[Fotoğraf başlığı]", yazar: "[Fotoğrafçı adı]", tarih: "[Tarih]", oran: "3 / 4", gorsel: "" },
  { id: "foto-9", baslik: "[Fotoğraf başlığı]", yazar: "[Fotoğrafçı adı]", tarih: "[Tarih]", oran: "1 / 1", gorsel: "" }
];

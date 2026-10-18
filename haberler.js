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
    kategori: "EKONOMİ",
    baslik: "Fon Vurgunu",
    ozet: "Manisa Akhisar’daki süt fabrikası atıl bırakılırken borsa değeri katbekat şişirildi; o hisseler fonlara doldurulurken denetleyen ile denetlenen aynı masadaydı.",
    yazar: "Ekonomi Servisi",
    tarih: "18 Ekim 2026",
    sure: "5 dk okuma",
    gorsel: "images/fon vurgunu.jpeg",
    gorselAciklama: "",
    metin: [
      "Manisa Akhisar’daki süt fabrikası atıl bırakılırken şirket borsada katbekat şişirildi; o hisseler fonlara doldurulurken denetleyen ile denetlenen aynı masada oturuyordu. Türkiye’de ne zaman büyük bir finansal kriz patlasa kamuoyuna hemen 'denetimsizlik' veya 'mevzuat açığı' masalı anlatılır. Oysa son dönemde yatırım fonları üzerinden patlayan ve yüz milyarlarca lirayı yutan tablo, denetimsizliğin değil; bilakis her şeyin kayıt altında olduğu bir sistemde göz göre göre işletilen bir mekanizmanın hikâyesidir.",
      "Meseleyi karmaşık borsa terimlerinden arındırıp en yalın haliyle anlatalım. Önce Borsa İstanbul’da işlem gören, bölgesel olarak bilinen ancak borsa ölçeğinde 'sığ' sayılabilecek bir şirket seçiyorsunuz. Somut örneğimiz Manisa Akhisar Organize Sanayi Bölgesi’nde peynir ve süt tesisleri bulunan Gündoğdu Gıda. Şirket Ağustos 2024’te 35 liradan halka arz edildiğinde, toplam piyasa değeri yaklaşık 1 milyar liraydı. Borsada fiilen dönen yüzde 30’luk halka açık payın büyüklüğü ise sadece 315 milyon lira civarındaydı. O günlerde İzmir, Eskişehir ve Şanlıurfa’da devasa fabrikaları bulunan yarım asırlık sektör devi Pınar Süt’ün borsa değeri ise yaklaşık 4 milyar liraydı; yani her şey doğal mecrasındaydı.",
      "Burada iki yönlü bir abluka kuruluyor: Önce tahtadaki bu 315 milyon liralık sığ hisseler organize hesaplarca piyasadan hızla toplanıyor. Ardından kurucu ailenin elinde kalan yüzde 70’lik blok paylar, KAP (Kamuyu Aydınlatma Platformu) bildirimleriyle fon yöneticilerinin kontrolündeki başka şirketlere toptan devrediliyor. Böylece eski sahiplerin şirketle bağı tamamen koparılıyor; yönetim tek bir merkezin mutlak kontrolüne geçiyor. Kontrol sağlandıktan sonra üretim yavaşlıyor, tesisler ıssızlaşıyor; geriye sadece borsa kotunda işlem gören bir tabela kalıyor.",
      "## Pınar Süt Yerinde Sayarken Tabela İkiye Katladı",
      "Peki, üretimi durma noktasına gelen bu işletmenin borsa değeri ne oluyor? İlişkili hesaplar arasında yapılan karşılıklı işlemlerle hisse fiyatı sürekli tavan serisine sokuluyor. Halka arzda 35 lira olan hisse, kısa sürede 200 liranın üzerine fırlatılıyor. 1 milyar liralık şirket, kağıt üzerinde 8 milyar liraya ulaşıyor.",
      "Tam bu noktada durup bakmak gerekiyor: Aynı dönemde Türkiye’nin dev entegre fabrikalarına sahip, binlerce çiftçiyle çalışan Pınar Süt ne yaptı? Sektör büyümedi; Pınar Süt aynı aylarda 4 milyar liradan ancak 4,5 milyar liraya çıkabildi, yani yerinde saydı. Ama kapısında sadece bekçinin kaldığı tek bir mandıra, koskoca süt devini borsada ikiye katladı.",
      "Sanayi devlerini geride bırakan bu astronomik fiyattaki içi boş hisseleri normal hiçbir yatırımcı almaz. İşte burada devreye kontrol altındaki portföy yönetim şirketleri ve fonlar sokuluyor. Fon yöneticileri, TEFAS (Türkiye Elektronik Fon Alım Satım Platformu) vitrininde yüksek getiri vaadiyle vatandaştan topladıkları milyarlarca liralık nakitle, bu şişirilmiş hisseleri tepe fiyattan organize ortaklardan satın alıyor. Sığ kağıtlar fonun içine yani tasarruf sahibinin sırtına yüklenirken; yüz milyonlarca liralık temiz nakit para tezgâhı kuranların ceplerine akıyor. Meclis kürsüsünde belgeleriyle açıklanan tablo budur: 163 milyon lira yatırıp 5 ayda 2,2 milyar lira nakit çekebilen ayrıcalıklı hesaplar bu çark sayesinde yaratılıyor.",
      "## Denetleyen ile Denetlenen Aynı Masada",
      "Bu kadar açık bir tablo nasıl fark edilmedi? Fark edilmedi değil; başından beri canlı yayında izlendi. Türkiye’de MKK (Merkezi Kayıt Kuruluşu) kimin hangi hisseyi tuttuğunu saniyesinde görür. Takasbank paranın kuruşunu takip eder. Borsa İstanbul’un gözetim algoritmaları bu yapay fiyatlamalarda anında kırmızı alarm verir. Fakat asıl düğüm burada atılıyor: Çünkü denetleyen ile denetlenen aynı kişiler.",
      "Bu hisselerin fonlara doldurulduğu dönemde Tera Grubu’nun patronu Emre Tezmen, Türkiye’deki tüm hisse ve borsa kayıtlarının kalbi olan MKK’nın Yönetim Kurulu masasında oturuyordu. Diğer tarafta iktidar tepe yönetimindeki siyasetçilerin oğulları, eski bakan çocukları ve kamu bürokrasisinden gelen yöneticiler fonların ve kurulmak istenen yatırım bankalarının yönetimindeydi. SPK (Sermaye Piyasası Kurulu) denetimine giden müfettişin karşısına dün kendi amiri olan isimler çıkarsa, o denetim çalışır mı? Çalışmadı.",
      "## Kasım 2025 Uyarısı ve Rodos Kaçışı",
      "Çark ancak fonlardan para çıkışları başlayıp sistem nakit üretemez hale gelince kilitlendi. Aslında Türkiye’deki regülatörlerin aylarca görmezden geldiği bu kara para trafiğini Kasım 2025’te resmi yazıyla ilk soran İngiltere Mali Polisi olmuştu. Ardından çöküş hızlandı: Pusula Portföy yöneticisi Muhammed Yarız’ın 14,5 milyon dolarlık süper yatının uydu takip sistemini kapatıp Marmaris’ten Rodos’a kaçırmaya çalışması, İsviçre bankalarına aktarılan 4 milyar lirayı aşan jet transferler ve MASAK raporlarına giren 26 bin liraya devredilmiş lüks araçlar birer birer patladı.",
      "Şimdi ise sahneye başka bir bürokratik kalkan sürülüyor. Tam da bu yolsuzluğun para trafiğini kuruşu kuruşuna çıkaracak tek kurum olan MASAK hedef tahtasına oturtuluyor; raporların şaibeli olduğu öne sürülerek deliller zayıflatılmak isteniyor. Amaç çok açık: Dosyanın ucu siyasi ve bürokratik zırha dokunduğu anda davayı kadük bırakmak. Bu dosya bize bir kez daha gösterdi ki; Türkiye’de sorun kuralların yokluğu değil, kurumların liyakatten koparılarak kişisel ve zümresel menfaatlerin kalkanı haline getirilmesidir. Kapısına kilit vurulan fabrikaların borsada milyarlarca lira ettiği bir ülkede batan sadece fonlar değil; bizzat hukukun itibarıdır.",
      "## Buzdağının Görünen Yüzünden Dört Profil",
      "**Emre Tezmen (Tera Grubu):** Fonlar tabela hisseleriyle şişirilirken, aynı anda tüm borsa takas ve saklama kayıtlarının kalbi olan MKK’da (Merkezi Kayıt Kuruluşu) Yönetim Kurulu Üyesiydi.",
      "**Mustafa Yazıcı (Adil Yatırım):** AK Parti Genel Başkan Yardımcısı Hayati Yazıcı’nın oğlu. Portföy yönetiminden yatırım bankacılığı lisansına uzanan süreçte adı dosyada yer aldı.",
      "**Muhammed Yarız (Pusula Portföy):** Fon temerrüdü öncesinde İsviçre hesaplarına milyarlık transferler ve lüks yatıyla Rodos’a kaçış girişimi iddialarıyla tutuklandı.",
      "**Prof. Dr. Emre & Kerem Alkin:** Biri eski büyükelçi ve ekonomi bürokratı, diğeri üniversite rektörü. Tera Grubu yönetiminde yer alarak yapıya akademik vitrin sağladıkları gerekçesiyle soruşturmaya girdiler."
    ]
  },
  {
    id: "haber-3",
    kategori: "[KATEGORİ]",
    baslik: "[YAZI]",
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
    baslik: "[Size Xl]",
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
    baslik: "İşporta Holding",
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
    baslik: "Neşesine",
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

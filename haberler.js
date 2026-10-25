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
    yazar: "Mehmet Taşdöğen",
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
    kategori: "DÜNYA",
    baslik: "Azerbaycan ve Aliyev’in Hamleleri",
    ozet: "Uluslararası ilişkilerde 'ebedi dostluklar değil, kalıcı çıkarlar vardır' kuralı Kafkasya'da gözler önüne serilirken, Bakü yönetiminin adımları Türkiye-Azerbaycan hattında yeni bir süreci tetikliyor.",
    yazar: "Mehmet Taşdöğen",
    tarih: "25 Ekim 2026",
    sure: "5 dk okuma",
    gorsel: "images/aliyev.jpeg",
    gorselAciklama: "",
    metin: [
      "Uluslararası ilişkilerde \"ebedi dostluklar veya düşmanlıklar değil, kalıcı çıkarlar vardır\" kuralı, bugün Kafkasya hattında tüm çıplaklığıyla gözler önüne seriliyor. Uzun yıllar \"iki devlet, tek millet\" şiarıyla simgeleşen Türkiye-Azerbaycan ilişkileri, son dönemde geleneksel ezberlerin çok ötesinde, yeni ve sert bir jeopolitik sürece evriliyor. Bu dönüşümün merkezinde ise Bakü yönetiminin, özellikle ABD ve İsrail eksenine yönelik açık ve meydan okuyan hamleleri yer alıyor.",
      "## Aliyev’in Zihniyet Dünyası",
      "İlham Aliyev’in liderlik profilini ve stratejik tercihlerini doğru okuyabilmek için onun arka planına bakmak şarttır. Aliyev; Sovyet bürokrasisinin ve KGB geleneğinin süzgecinden geçmiş bir aileden gelmenin de etkisiyle devleti merkeziyetçi, pragmatik ve aile merkezli bir yapıyla yönetmektedir. 2017 yılında eşi Mihriban Aliyeva’yı birinci başkan yardımcılığı makamına getirerek iktidarın ve devasa enerji servetinin kontrolünü tamamen aile havuzunda tutması, bu otokratik ve hanedan tipi aklın en somut göstergesidir. Bugün Aliyev yönetimi, Batı ve İsrail ile olan ilişkilerini gizli bir \"denge politikası\" kisvesi altında yürütmekten vazgeçmiş; aksine bu yakınlaşmayı Ankara’nın güvenlik hassasiyetlerini doğrudan hedef alacak bir boyuta taşımıştır.",
      "## İç Siyasetin ve Stratejik Kapanın Gölgesinde Ankara",
      "Bakü’den yükselen bu meydan okuma, Türkiye’nin iç siyasi dengeleri açısından da ciddi bir ikilem yaratmaktadır. Aliyev yönetiminin başörtüsü krizleri ve İslami hassasiyetleri hedef alan söylemleri, Türkiye’deki muhafazakâr tabanın ve sivil toplumun tepkisini çekmektedir. Özgür-Der Genel Başkanı Rıdvan Kaya ve benzeri isimlerin hedef alınması, uluslararası yakalama kararları ve ardından Bakü medyasına yansıyan asılsız istihbarat suçlamaları, iki ülke arasındaki diplomatik bağları geren eşikler olmuştur. Türkiye’de karar alıcılar, yıllardır savunduğu değerler ve iç siyasi hassasiyetler nedeniyle bu tür başlıklara kayıtsız kalamamaktadır. Ancak diğer yandan, bölgedeki jeopolitik çıkarlar ve Türk dünyası ile olan bağların zedelenmemesi gerekliliği, süreci \"ne şiş yansın ne kebap\" şeklinde özetlenebilecek zorlu bir denge siyasetine itmektedir.",
      "## Küresel Akıl ve \"Bir Taşla Üç Kuş\" Stratejisi",
      "Bütün bu tablonun arkasında ise ABD ve İsrail’in bölgeyi dizayn etme çabaları yatmaktadır. Mekke Antlaşması gibi bölgesel paktların tartışıldığı, İslam dünyasının kendi içinde yeni güvenlik mimarileri aradığı bir dönemde Azerbaycan’ın bu denklemlerin tamamen dışında tutulması ve Tel Aviv ile stratejik bir ortaklığa kilitlenmesi tesadüf değildir. Bu durum, emperyalist ve Siyonist aklın, Türkiye’yi doğu sınırından çevreleme, bölgesel paktları kontrol altında tutma ve Kafkasya’yı kendine bir üs yapma stratejisinin bir ürünüdür. Aliyev yönetimi de bu küresel satranç tahtasında kendine açılan alanı, Ankara’nın etkisini sınırlamak için bir kaldıraç olarak kullanmaktadır.",
      "## Sonuç Yerine",
      "Bugün görünen odur ki, iki ülke arasındaki ilişkiler artık duygusal bağlarla değil, soğuk reel-politik gerçeklerle sınanmaktadır. Aliyev yönetiminin attığı bu radikal adımlar, Ankara’nın Kafkasya politikasını gözden geçirmesini ve duygusallıktan arındırılmış, uzun vadeli ve stratejik bir akılla yeniden ele almasını zorunlu kılmaktadır. Kafkasya’da kartlar yeniden dağıtılırken, Türkiye’nin bu kuşatma stratejisini boşa çıkaracak yeni ve kapsayıcı bölgesel hamleler geliştirmesi hayati bir sorumluluk olarak masada durmaktadır."
    ]
  },
  {
    id: "haber-4",
    kategori: "EĞİTİM",
    baslik: "‘Dolabınızda iyiliğe yer açın’ Sloganıyla, Kıyafetlerini İhtiyaç Sahibi Arkadaşlarıyla Paylaşıyorlar",
    ozet: "Eskişehir Anadolu Üniversitesi’nde ihtiyaç sahibi öğrencilerin, kıyafet ihtiyaçlarını karşılayabilmeleri için rektörlük katkılarıyla, ‘Öğrenci Butiği, İş Gardırobu’ kuruldu.",
    yazar: "Demet Çayır",
    tarih: "25 Ekim 2026",
    sure: "4 dk okuma",
    gorsel: "images/butik.JPG",
    gorselAciklama: "",
    metin: [
      "Eskişehir Anadolu Üniversitesi’nde ihtiyaç sahibi öğrencilerin, kıyafet ihtiyaçlarını karşılayabilmeleri için rektörlük katkılarıyla, ‘Öğrenci Butiği, İş Gardırobu’ kuruldu. ‘Dolabınızda iyiliğe yer açın’ sloganıyla Anadolu Üniversitesi Öğrenci Merkezi’nde faaliyete başlayan Öğrenci Butiği’nde öğrenciler tarafından getirilen kullanılabilir durumdaki ikinci el giyim eşyaları ve aksesuarlar, ihtiyaç sahibi öğrencilerin hizmetine sunuluyor. Üniversite çalışanları da hiç kullanılmamış, yeni ürünlerle butiğe destek veriyor.",
      "Anadolu Üniversitesi Rektörlüğü, üniversitede eğitim gören ihtiyaç sahibi öğrencilere kıyafet desteğinde bulunmak amacıyla, şubat ayında ‘Öğrenci Butiği, İş Gardırobu’ projesini hayata geçirdi. ‘Dolabınızda iyiliğe yer açın’ sloganıyla Anadolu Üniversitesi Öğrenci Merkezi’nde faaliyete başlayan Öğrenci Butiği’ne öğrenciler tarafından getirilen kullanılabilir durumdaki ikinci el giyim eşyaları ve aksesuarlar, ihtiyaç sahibi öğrencilerin hizmetine sunuluyor. Üniversite çalışanları da yeni, kullanılmamış ürünlerle butiğe destek veriyor. Abiye kıyafetlerden takım elbiselere, spor giyimden iç çamaşıra kadar farklı kategoriden ürünleri öğrencilerle buluşturmayı amaçlayan proje çerçevesinde, 9 ayda 5 bin kıyafet butiğe teslim edildi. Tek seferde 7 farklı ürünün alınabildiği butikte şu ana kadar ise 3 bin kıyafet ihtiyaç sahibi öğrencilere ulaştırıldı.",
      "## ‘KİMSEYE YOKSULLUĞUYLA ALAKALI BİR ARAŞTIRMA YAPMIYORUZ’",
      "Butiğe kıyafet teslim eden ve butikten kıyafet temin eden öğrencilerin isimleri gizli tutulurken, öğrenciler butikten anlık kıyafet ihtiyaçlarını da karşılayabiliyor. Soğuk havada üşüyen, yağmurda ıslanan ya da gün içerisinde kıyafetine zarar gelen öğrencilerin de butikten kıyafet alıp giyebildiklerini söyleyen Öğrenci Butiği Sorumlusu, Anadolu Üniversitesi Sağlık, Kültür ve Spor Başkanlığı Daire Başkanı Abdurrahman Şafak, “Bu projenin içeriği, üniversitemizde okuyan ihtiyaç sahibi öğrencilerimizin farklı dönemlerde farklı ihtiyaçlarını görebilmeleri için planlanmış bir sosyal sorumluluk organizasyonu aslında. Üniversitemizin personeli, kendi ikinci elde giymediği, eskittiği demiyorum, giymediği ama kullanılabilir kıyafetlerini temiz, ütülü, düzgün ve düzenli bir şekilde buraya teslim ediyor. Bunlar bir kontrolden geçiyor. Kullanılabilir olanlar tekrar temizlenip, ütülenip, askılara asılıyor ve öğrencinin hizmetine sunuluyor. Öğrenci günlük ihtiyaçlarını, o gün farklı bir iş için bir ihtiyacı varsa gelip, bunu burada görüp, çok rahat giderebiliyor. Bu konuda kimseye yoksulluğu ile alakalı bir araştırma yapmıyoruz. Hiçbir ücret ödemiyor. Çok yoğun bir öğrenci sirkülasyonu var, getiren öğrenci anlamında da yoğun bir sirkülasyon var” dedi.",
      "## ‘2 TEKSTİL FİRMASI DA SIFIR ÜRÜNLERLE KATKI SAĞLIYOR’",
      "Sadece öğrencilerin değil üniversite personelinin de projeye dahil olduğunu ve onların da butiğe kıyafet desteği verdiğini belirten Şafak, iki firmanın da butiğe sponsor olduğuna dikkat çekerek, “Butiğimize aynı zamanda Türkiye’nin gerçekten çok üst düzey tekstil firmalarından 2 tanesi ciddi anlamda sıfır ürünle katkı sağlayarak, öğrencilerimizin kendi projelerinin de bir devamı olarak, ‘Dolabında iyiliğe yer aç’ sloganıyla, bir hareket de başlatmış oldular. Ciddi katkılar sağlıyorlar. İnşallah diğer firmalara da bu bir örnek olur” diye konuştu.",
      "## ‘ÖĞRENCİLER BURADA ARADIĞI HER ŞEYİ BULABİLİR’",
      "Butik görevlisi Şermin Akaltan ise öğrencilerin özel günleri için de butikten kıyafet aldıklarını söyleyerek, “Buradaki amacımız öğrencilerimizin istediği kıyafetleri kendi evlerinde gibi rahat hissederek gelip, alıp, giyinip gitmeleri. Bağışçılarımızdan yaklaşık 5 bin ürün kabul ettik ve 3 bine yakın ürünü de öğrencilerimize verdik. Butiğimizden 700’e yakın öğrencimiz hizmet aldı, yoğun talep var. Öğrenciler burada aradığı her şeyi bulabilir. Spor giyimden tutun, abiye kıyafete kadar, hatta iç çamaşırı, çorap, atkı, bujiteri, takı, eldiven ve hatta halı ile kilim getiriyorlar. Her türlü hizmet var. Öğrencilerimiz burada A’dan Z’ye her şeyi bulabilir. Bir öğrencimiz ağabeyinin düğünü olacağını söyledi, abiye kıyafetimiz, ayakkabısı ve çantası ile birlikte burada bir kombin oluşturarak ayrıldı. Bu bizi çok mutlu etti. Ağabeyinin düğününde giyinmesi ve fotoğrafları bizimle paylaşması gerçekten de motivasyonumuzu arttırdı. Hatta bir öğrencimiz de emlakçıda çalışıyor. Bir iş görüşmesi olduğunu ve performansının yüksek olması için, kıyafete ihtiyacı olduğunu söyledi. Kravatından gömleğine, ayakkabısına, pantolon ve ceketini kombinleyerek buradan ayrıldı. Dönüşlerin bu şekilde olması bizi çok mutlu ediyor. Hatta bizim çalışan personelimizden birisinin de ayakkabısı yırtılmış ve eve gidemeyecek durumdaydı. O da gelip, hemen buradan ayakkabısını değiştirerek ayrıldı. Bu gibi durumlar bizi mutlu ediyor” ifadelerini kullandı.",
      "## ‘EŞYA GETİRDİĞİMDE, BURADA BEĞENDİĞİM ÇOK ÜRÜN OLDU’",
      "Öğrenci butiğine kıyafet bağışı yaptığı sırada buradaki ürünleri çok beğendiğini ve butiğin kaliteli hizmet verdiğini söyleyen Gazetecilik Bölümü öğrencisi Tanju Güher ise şöyle konuştu: “Bu projeyi hem duyurudan gördüm hem de İletişim Fakültesi kantininde otururken el broşürlerine rastladım. Zor durumda kalmış birçok arkadaşım var, eskiden olsun, şimdi olsun. Bu da benim içimde nostaljik bir his yarattı ve bunu görünce buraya bağışta bulunmak istedim. ‘Dolabında iyiliğe yar aç’ sloganını duyunca içimde güzel bir his oluştu ve bu konuda hemen faaliyete geçtim. ‘Ben de bir şeyler yapmalıyım, bir şeyler bağışlamalıyım’ dedim. Öncelikle çok huzur doldum. Onun dışında bence bağış yapmak çok güzel bir his, herkes yapmalı. Buraya eşya getirdiğimde, burada beğendiğim birçok ürün oldu. Ceketler olsun, takım elbiseler ya da pantolonlar olsun, böyle göz gezdirdiğimde hepsi gözüme çok hoş geldi. O yüzden herkese tavsiye ederim almaları konusunda. ‘Dolabında iyiliğe yer aç’ sloganı kapsamında, herkesin ve özellikle de arkadaşlarımın buraya bağış yapmasını tavsiye ediyorum. Anadolu Üniversitesi’ne böyle bir fırsat sunduğu için teşekkür ediyorum.”"
    ]
  },
{
    id: "haber-5",
    kategori: "YEREL",
    baslik: "Eskişehir’de Engelli Bireyler İçin Erişilebilirlik Sorunu",
    ozet: "Türkiye’de yaklaşık 2,5 milyon engelli birey kayıtlı. Eskişehir’de ise bazı kaldırımlarda ve işletme girişlerinde erişim sorunları dikkat çekiyor.",
    yazar: "Aruzhan Makhmutova",
    tarih: "25 Ekim 2026",
    sure: "4 dk okuma",
    gorsel: "images/Gemini_Generated_Image_2aq5942aq5942aq5.jpeg",
    gorselAciklama: "",
    metin: [
      "Türkiye’de Ulusal Engelli Veri Sistemi’ne kayıtlı yaklaşık 2,5 milyon engelli birey bulunuyor. Cumhurbaşkanlığı Strateji ve Bütçe Başkanlığının raporunda yer alan verilere göre sistemde kayıtlı kişi sayısı 2 milyon 511 bin 950 ancak bu sayı, kayıt sisteminde yer almayan tüm engelli bireyleri kapsamıyor olabilir.",
      "Engelli bireylerin şehir içinde rahat ve bağımsız hareket edebilmesi için kaldırımların, yaya geçitlerinin, toplu kullanım alanlarının ve işletme girişlerinin erişilebilir olması gerekiyor. Eskişehir’de yapılan gözlemler, bazı erişilebilirlik düzenlemelerinin bulunduğunu, ancak bazı noktalarda sorunların devam ettiğini gösteriyor.",
      "## Şehirde Erişimi Kolaylaştıran Düzenlemeler",
      "Eskişehir’de engelli bireyler için ayrılmış otopark alanları, bazı binalardaki asansörler, kaldırımlardaki sarı hissedilebilir yüzeyler ve yaya geçitlerindeki rampalar bulunuyor.Engelli otoparkları, araç kullanan engelli bireylerin park etmesini kolaylaştırıyor. Asansörler, merdivenleri kullanmakta zorlanan kişilerin farklı katlara ulaşmasına yardımcı oluyor. Kaldırımlardaki sarı hissedilebilir yüzeyler ise görme engelli bireylerin yönlerini bulmalarını kolaylaştırıyor.Yaya geçitlerindeki rampalar da tekerlekli sandalye kullanan bireylerin kaldırım ile yol arasında daha rahat hareket etmesine yardımcı oluyor.",
      "## Bazı Kafe Girişlerinde Rampa Bulunmuyor",
      "Şehirde dikkat çeken sorunlardan biri, bazı kafelerin girişlerinde tekerlekli sandalye kullanan bireylerin kullanabileceği rampaların bulunmaması.Girişte merdiven veya yüksek basamak bulunan bu tür yerlerde, tekerlekli sandalye kullanan bireylerin içeriye bağımsız şekilde girmesi zorlaşabiliyor. Bazı durumlarda başka bir kişinin yardımına ihtiyaç duyulabiliyor.Kafe ve restoran gibi işletmelerin girişlerinin erişilebilir olması, engelli bireylerin sosyal alanları bağımsız şekilde kullanabilmesi açısından önem taşıyor.",
      "## Kaldırımlarda Park Edilen Araçlar ve Bozuk Zeminler",
      "Şehirde karşılaşılabilen bir diğer sorun, bazı araçların kaldırımlara park edilmesi. Bu durum yayaların geçiş alanını daraltabiliyor ve özellikle tekerlekli sandalye kullanan bireylerin hareket etmesini zorlaştırabiliyor.",
      "Bazı kaldırımlardaki kırık taşlar, çatlaklar ve düzensiz zeminler de ulaşımı güçleştirebiliyor. Kaldırımların düzenli olarak onarılması ve yaya yollarının açık tutulması, engelli bireylerin güvenli hareket edebilmesi için önem taşıyor.",
      "## Yaya Geçitlerinde Sesli Trafik Işıkları",
      "Bazı yaya geçitlerinde kaldırım ile yol arasındaki geçişi kolaylaştıran rampalar bulunuyor. Ancak gözlemler sırasında bazı yaya geçitlerinde görme engelli bireyler için sesli trafik ışıklarının bulunmadığı da fark edildi.Sesli trafik ışıkları, görme engelli bireylerin trafik ışığının durumunu anlamalarına ve karşıdan karşıya daha güvenli geçmelerine yardımcı oluyor. Bu sistemlerin bulunmadığı noktalarda karşıdan karşıya geçmek daha zor olabiliyor.Ayrıca kaldırımlardaki sarı hissedilebilir yüzeylerin önünün açık olması ve kesintisiz devam etmesi gerekiyor. Bu yüzeylerin araçlar veya başka engeller tarafından kapatılması, görme engelli birelerin hareket etmesini zorlaştırabilir.",
      "## Erişilebilirlik İçin Neler Yapılabilir?",
      "Eskişehir’de engelli bireylerin kullanımına yönelik otoparklar, asansörler ve rampalar gibi çeşitli düzenlemeler bulunuyor. Bununla birlikte bazı kafe girişlerinde rampa olmaması, kaldırımlara araç park edilmesi, bozuk zeminler ve bazı yaya geçitlerinde sesli trafik ışıklarının bulunmaması erişim açısından sorun oluşturabiliyor.Şehirde erişilebilirliğin geliştirilmesi için kaldırımların düzenli olarak onarılması, yaya yollarının açık tutulması, kafe ve mağaza girişlerinin uygun rampalarla düzenlenmesi ve yaya geçitlerinde sesli trafik ışıklarının yaygınlaştırılması önem taşıyor.Engelli bireylerin şehirde bağımsız ve güvenli bir şekilde hareket edebilmesi için mevcut düzenlemelerin korunması ve eksiklerin giderilmesi gerekiyor."
    ]
  },
  {
    id: "haber-6",
    kategori: "EĞİTİM",
    baslik: "Anadolu Üniversitesi’nde Engelli Öğrenciler İçin Eğitimde Fırsat Eşitliği",
    ozet: "Engelli öğrencilerin üniversite eğitimine eşit koşullarda erişebilmesi, fiziksel erişilebilirliğin yanı sıra ders materyalleri, sınav düzenlemeleri ve akademik destek hizmetlerini de kapsıyor.",
    yazar: "Gaziza ***",
    tarih: "25 Ekim 2026",
    sure: "3 dk okuma",
    gorsel: "images/engelli 2.jpg",
    gorselAciklama: "",
    metin: [
      "Engelli öğrencilerin üniversite eğitimine eşit koşullarda erişebilmesi, fiziksel erişilebilirliğin yanı sıra ders materyalleri, sınav düzenlemeleri ve akademik destek hizmetlerini de kapsıyor. Anadolu Üniversitesi’nde bu alanda sunulan destekler ve yürütülen çalışmalar, ilgili birimin yöneticisiyle yapılan görüşmede ele alınıyor.",
      "Eğitim hakkı, her öğrencinin eşit koşullarda öğrenim görebilmesini gerektiriyor. Ancak engelli öğrenciler, üniversite yaşamında bina girişlerinden ders materyallerine, sınav uygulamalarından kampüs içindeki ulaşım olanaklarına kadar farklı ihtiyaçlarla karşılaşabiliyor. Üniversitelerin bu ihtiyaçlara ne ölçüde yanıt verdiği, eğitimde fırsat eşitliğinin sağlanmasında önemli rol oynuyor.",
      "Fırsat eşitliği, yalnızca öğrencilerin aynı sınıflarda eğitim almasıyla sınırlı kalmıyor. Derslere katılım, bilgi kaynaklarına erişim, sınavlarda ihtiyaçlara uygun düzenlemelerden yararlanma ve kampüs olanaklarını mümkün olduğunca bağımsız kullanabilme de bu kapsamda değerlendiriliyor.",
      "Fiziksel erişilebilirlik, engelli öğrencilerin üniversite yaşamını doğrudan etkileyen konular arasında yer alıyor. Bina girişleri, rampalar, asansörler, kaldırımlar, sınıflar ve tuvaletlerin erişilebilir olması, öğrencilerin eğitim faaliyetlerine katılımını kolaylaştırabiliyor. Bunun yanı sıra görme veya işitme engelli öğrenciler için ders materyallerinin erişilebilir formatlarda hazırlanması ve sınavlarda gerekli düzenlemelerin yapılması da önem taşıyor.",
      "Anadolu Üniversitesi’nde engelli öğrencilerin eğitim süreçlerinde hangi desteklerden yararlanabildiğini ve bu hizmetlerin nasıl yürütüldüğünü öğrenmek amacıyla Engelliler Entegre Yüksekokulu Müdürü Prof. Dr. Güzin Karasu Sivas ile görüşüldü. Görüşmede, sunulan hizmetler, öğrencilerin karşılaştığı sorunların çözümü ve erişilebilirliği geliştirmeye yönelik çalışmalar ele alındı.",
      "Sivas, Anadolu Üniversitesi’nde engelli öğrencilere yönelik desteğin iki farklı birim aracılığıyla yürütüldüğünü belirtti. Bunlardan ilki olan Engelliler Entegre Yüksekokulu, özellikle dil ve iletişim becerileri sınırlı olan işitme engelli gençlere yükseköğretim düzeyinde eğitim veriyor. Yüksekokulda ikisi ön lisans, ikisi lisans düzeyinde olmak üzere dört farklı program bulunuyor. Öğrencilerin Türkçe dil yeterliliklerinin değerlendirildiğini aktaran Sivas, dil becerileri sınırlı olan öğrencilerin temel Türkçe hazırlık eğitimine yönlendirilebildiğini ifade etti. Eğitim içeriklerinin diğer yükseköğretim programlarıyla aynı olduğunu belirten Sivas, öğretim sürecinin öğrencilerin ihtiyaçlarına göre düzenlendiğini söyledi.",
      "Üniversitenin diğer destek birimi olan Engelli Öğrenciler Birimi ise farklı fakülte ve yüksekokullarda kaynaştırma ortamında eğitim alan engelli öğrencilere hizmet veriyor. Sivas’ın verdiği bilgilere göre, üniversitede bu kapsamda eğitim alan 37 öğrenci bulunuyor ve bunların 26’sı birimden destek alıyor. Bu öğrenciler arasında işitme, görme ve ortopedik engeli bulunanların yanı sıra dikkat eksikliği ve hiperaktivite bozukluğu olan öğrenciler de yer alıyor.",
      "Birim tarafından sağlanan destekler arasında akademik uyarlamalar ve ulaşım hizmetleri bulunuyor. Erişilebilir servis aracıyla öğrencilerin evleri veya yurtları ile üniversite arasındaki ulaşımı sağlanıyor. Derslerde ve sınavlarda ise öğrencilerin bireysel ihtiyaçlarına uygun düzenlemeler yapılıyor. Sivas, fakülte ve yüksekokullardaki birim temsilcilerinin öğrenciler ve birim yönetimiyle birlikte ihtiyaçları değerlendirdiğini belirtti. Daha büyük puntoyla hazırlanmış sınav materyalleri gibi taleplerin de bu kapsamda ele alındığını ifade etti.",
      "Öğrencilerin karşılaştığı sorunların belirlenmesi amacıyla anketler yapıldığını ve elde edilen geri bildirimlerin ilgili öğretim elemanlarıyla paylaşıldığını aktaran Sivas, öğretim elemanlarına engelli öğrencileri daha iyi destekleyebilmeleri için hizmet içi eğitimler verildiğini söyledi. Üniversitenin kendi imkânları dâhilinde çözebileceği sorunlara yönelik çalışmaların devam ettiğini ifade etti.",
      "Engelli öğrencilerin eğitim hakkından eşit biçimde yararlanabilmesi, sunulan desteklerin bireysel ihtiyaçlara ne ölçüde yanıt verdiğiyle yakından ilişkili. Anadolu Üniversitesi’nde yürütülen çalışmaların değerlendirilmesi, eğitimde fırsat eşitliğinin güçlendirilmesi ve erişilebilirliğin geliştirilmesi açısından önem taşıyor."
    ]
  },
];

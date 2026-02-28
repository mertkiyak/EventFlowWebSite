import React from 'react';

const TermsOfService = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '24px' }}>Hizmet ve Koşullar</h1>
            <p style={{ color: '#6B7280', marginBottom: '32px' }}>Son Güncelleme: 1 Ocak 2026</p>

            <div style={{ color: '#1C1C1E', lineHeight: '1.8', fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <section>

                    <p style={{ color: '#6B7280' }}>
                        EventFlow mobil uygulamasına ("Uygulama" veya "Platform") hoş geldiniz. İşbu Hizmet Şartları ve Son Kullanıcı Lisans Sözleşmesi (EULA) ("Şartlar" veya "Sözleşme"), EventFlow tarafından sunulan tüm hizmetlere, içeriklere ve yazılım arayüzlerine erişiminizi ve kullanımınızı düzenleyen yasal olarak bağlayıcı bir sözleşmedir. Uygulamayı indirerek, bir hesap oluşturarak, erişim sağlayarak veya kullanarak işbu Sözleşmede yer alan tüm hüküm ve koşulları okuduğunuzu, anladığınızı ve gayrikabili rücu olarak kabul ettiğinizi beyan edersiniz. Bu şartları kabul etmiyorsanız, Uygulamayı cihazınızdan derhal silmeli ve kullanıma son vermelisiniz.</p>
                </section>

                <section>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>1. Hesap Kaydı, Uygunluk ve Güvenlik</h2>
                    <p style={{ color: '#6B7280' }}>
                        1.1. Kayıt Zorunluluğu: Uygulamanın etkinlik oluşturma ve etkileşim özelliklerini kullanabilmek için bir kullanıcı hesabı oluşturmanız şarttır. Kayıt esnasında kendiniz hakkında doğru, güncel ve eksiksiz bilgi sağlamayı, bu bilgileri zaman içinde güncel tutmayı kabul edersiniz.
                        1.2. Hesap Güvenliği: Hesap giriş bilgilerinizin (şifre vb.) gizliliğini sağlamak münhasıran sizin sorumluluğunuzdadır. Hesabınız üzerinden gerçekleştirilen her türlü eylemden ve paylaşılan içerikten doğrudan hukuki ve cezai olarak siz sorumlu tutulacaksınız. Yetkisiz bir kullanım tespit ettiğinizde durumu derhal destek birimimize bildirmelisiniz.
                        1.3. Yaş Sınırlandırması ve Yasal Ehliyet: Uygulamayı kullanabilmek için bulunduğunuz ülkenin yasalarına göre reşit (genellikle 18 yaş ve üzeri) olmanız veya geçerli bir yasal vasi onayına sahip olmanız gerekmektedir. Etkinliklerde organizatörler tarafından belirlenen yaş sınırlarına uymak esastır. Yanıltıcı yaş beyanında bulunmak, Sözleşmenin esaslı ihlali sayılacak olup, hesabınızın önceden haber verilmeksizin kalıcı olarak feshedilmesine neden olacaktır.  </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>2. Uygulama Kullanımı ve Davranış Kuralları (Code of Conduct)</h2>
                    <p style={{ color: '#6B7280' }}>EventFlow, bireylerin ortak ilgi alanları etrafında dijitalde tanışıp fiziksel etkinliklerde güvenli ve saygılı bir ortamda bir araya gelmesini sağlayan bir sosyal etkileşim ağıdır. Topluluğun sağlığını ve güvenliğini tehlikeye atacak eylemlere karşı toleransımız yoktur. Uygulamayı kullanırken aşağıdaki eylemlerde bulunmanız kesinlikle yasaktır:

                        Taciz ve Nefret Söylemi: Din, dil, ırk, etnik köken, cinsiyet, cinsel yönelim, engellilik veya fiziksel görünüm temelinde ayrımcılık yapan, nefret söylemi barındıran, taciz edici, hakaret içeren veya şiddeti/zorbalığı teşvik eden herhangi bir mesaj göndermek, etkinlik başlığı açmak veya içerik üretmek.

                        Yasadışı Faaliyetler: Bulunulan ülkenin veya uluslararası hukukun yasakladığı eylemleri (uyuşturucu madde ticareti, yasadışı kumar, fuhuş vb.) organize etmek veya teşvik etmek.

                        Dolandırıcılık ve Yanıltma: Başka bir bireyin, kurumun veya EventFlow temsilcisinin kimliğine bürünmek (impersonation), yanıltıcı etkinlikler düzenleyerek haksız kazanç sağlamaya çalışmak.

                        Spam ve Reklam: Platformu önceden yazılı izin almaksızın kitlesel ticari pazarlama, zincirleme mesajlaşma, yetkisiz reklam veya çok katmanlı pazarlama şemaları (MLM) için kullanmak.

                        Sistem İstismarı: Uygulamanın kaynak kodlarına tersine mühendislik (reverse engineering) yapmak, virüs, solucan (worm) veya zararlı kod parçacıkları yaymak, veri kazıma (scraping) yazılımları kullanarak platformdan sistematik olarak kullanıcı verisi çekmek veya altyapıya orantısız yük bindirecek hizmet engelleme (DDoS) saldırıları düzenlemek.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>3. Kullanıcı Türevli İçerik (UGC) ve Moderasyon - Sıfır Tolerans Politikası</h2>
                    <p style={{ color: '#6B7280' }}>EventFlow, Apple App Store (Guideline 1.2) ve Google Play Store güvenlik gereksinimleri uyarınca, kullanıcıların oluşturduğu içeriklere (UGC) ilişkin katı bir güvenlik politikası uygulamaktadır.
                        3.1. Sıfır Tolerans: Sakıncalı, yasadışı veya diğer kullanıcıları rahatsız edici içeriklere ve eylemlere karşı hiçbir şekilde tolerans gösterilmeyecektir.
                        3.2. Güvenlik Mekanizmaları: Uygulama arayüzünde, diğer kullanıcıları veya içerikleri denetleyebilmeniz için spesifik araçlar sunulmaktadır:

                        Filtreleme: Uygulama, bilinen sakıncalı anahtar kelimeleri ve görsel algoritmalarını kullanarak içerikleri yayınlanmadan önce filtreleme kapasitesine sahiptir.

                        Bildirme (Flagging/Reporting): Karşılaştığınız herhangi bir rahatsız edici mesajı, etkinliği veya profili, ilgili gönderinin yanındaki "Bildir" butonunu kullanarak doğrudan moderasyon ekibimize iletebilirsiniz.

                        Engelleme (Blocking): Sizinle iletişim kurmasını istemediğiniz veya tacizkâr davranışlar sergileyen herhangi bir kullanıcıyı profilindeki "Kullanıcıyı Engelle" seçeneği ile sistem düzeyinde anında engelleyebilirsiniz.
                        3.3. 24 Saat İçinde Müdahale Kuralı: EventFlow geliştirici ve moderasyon ekipleri, kullanıcılar tarafından rapor edilen sakıncalı içerik bildirimlerini en geç 24 saat içerisinde incelemekle ve aksiyon almakla yükümlüdür. İşbu Sözleşme kurallarını ihlal ettiği tespit edilen içerikler sistemden tamamen silinecek ve ihlali gerçekleştiren kullanıcının hesabı kalıcı olarak uygulamadan uzaklaştırılacaktır.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>4. Fikri Mülkiyet Hakları ve İçerik Lisanslama</h2>
                    <p style={{ color: '#6B7280' }}>4.1. Kullanıcı İçeriği Sahipliği: Uygulamaya yüklediğiniz veya Uygulama üzerinden paylaştığınız her türlü fotoğraf, metin, etkinlik açıklaması ve diğer içeriklerin (UGC) telif ve mülkiyet hakları size veya orijinal lisans sahiplerine aittir.
                        4.2. Lisans Verilmesi: Ancak, içerik yayınlayarak veya platforma veri girerek; EventFlow şirketine, bu içerikleri uygulamayı işletmek, geliştirmek, barındırmak, çoğaltmak, sunucularda yedeklemek, dağıtmak, halka açık olarak sergilemek, formatını değiştirmek ve platformu sosyal medyada veya diğer mecralarda tanıtmak amacıyla kullanmak üzere; dünya çapında geçerli, sürekli, telifsiz (royalty-free), alt lisanslanabilir ve münhasır olmayan (non-exclusive) bir lisans vermiş olursunuz.
                        4.3. Uygulamanın Fikri Mülkiyeti: EventFlow markası, logoları, kaynak kodları, görsel tasarımları, yazılım mimarisi ve sağlanan tüm metinler telif hakları ve ticari marka yasaları ile korunmaktadır. Önceden yazılı iznimiz olmadan bu varlıkların kopyalanması veya kullanılması yasaktır.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>5. Fiziksel Etkinlikler, Sorumluluğun Sınırlandırılması ve Risk Reddi</h2>
                    <p style={{ color: '#6B7280' }}>Uygulamanın insanları çevrimdışı (gerçek) hayatta bir araya getiren doğası gereği, aşağıdaki sorumluluk reddi (Disclaimer of Liability) beyanlarını dikkatlice okumanız elzemdir:
                        5.1. Yalnızca Aracı Statüsü: EventFlow, kullanıcıların etkinlik oluşturmasını ve keşfetmesini sağlayan bir bilgi teknolojisi sağlayıcısı ve aracı (intermediary) platformdur. Uygulama üzerinde listelenen hiçbir fiziksel etkinliğin (EventFlow'un açıkça kendi markasıyla düzenlediği resmi etkinlikler hariç) organizatörü, denetleyicisi, güvenlik sağlayıcısı veya mekanı değiliz.
                        5.2. Kendi Riskinde Kullanım (Use at Your Own Risk): Uygulama vasıtasıyla haberdar olduğunuz veya katıldığınız fiziksel etkinliklerdeki eylemleriniz tamamen kendi özgür iradeniz ve riskiniz altındadır. Platform, etkinliklerin kalitesini, diğer kullanıcıların sağladığı bilgilerin doğruluğunu, mekanların sağlık ve güvenlik koşullarını veya katılımcıların niyetlerini kontrol etmez ve bunlara dair hiçbir garanti vermez.
                        5.3. Tazminat ve Sorumluluk Feragati: Uygulamada tanıştığınız kişilerle fiziksel olarak buluşmanızdan, mekana ulaşımınızdan veya etkinlik esnasında gerçekleşebilecek her türlü eylemden doğan; yaralanma, can veya mal kaybı, maddi hasar, hastalık, psikolojik sarsıntı, hukuki uyuşmazlık, hırsızlık veya taciz vakalarında EventFlow, şirket yöneticileri, çalışanları ve iştirakleri hiçbir şart ve koşul altında sorumlu tutulamaz. Diğer insanlarla gerçek hayatta bir araya gelirken, buluşmaları aydınlatılmış ve halka açık alanlarda yapmak, bir yakınınıza haber vermek gibi temel kişisel güvenlik önlemlerini almak münhasıran sizin sorumluluğunuzdadır.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>6. Garanti Reddi (Disclaimer of Warranties)</h2>
                    <p style={{ color: '#6B7280' }}>Yürürlükteki kanunların izin verdiği azami ölçüde; Uygulama ve içindeki tüm hizmetler "OLDUĞU GİBİ" (AS IS) ve "MEVCUT OLDUĞU ŞEKİLDE" (AS AVAILABLE) temelinde sunulmaktadır. EventFlow; uygulamanın kesintisiz, tamamen hatasız, güvenli, virüssüz olacağına veya sunucularımızın her zaman erişilebilir kalacağına dair açık veya zımni hiçbir garanti (ticari elverişlilik veya belirli bir amaca uygunluk garantileri dahil) vermemektedir.
                    </p>
                </section>
                <section>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>7. Sözleşmenin Feshi ve Hesabın Askıya Alınması</h2>
                    <p style={{ color: '#6B7280' }}>7.1. Kullanıcı Tarafından Fesih: İstediğiniz zaman, uygulamanın ayarlar menüsündeki "Hesabı Sil" fonksiyonunu kullanarak bu Sözleşmeyi kendi isteğinizle feshedebilir ve hizmetten ayrılabilirsiniz.
                        7.2. EventFlow Tarafından Fesih: Uygulama yönetimi, işbu Hizmet Şartlarını veya Davranış Kurallarını ihlal etmeniz, üçüncü şahısların haklarına tecavüz etmeniz, yasadışı eylemlerde bulunduğunuzdan şüphelenilmesi veya teknik/güvenlik gereksinimlerinin ortaya çıkması durumlarında; tamamen kendi takdirine bağlı olarak ve tarafınıza önceden herhangi bir ihtarda bulunmaksızın hesabınızı derhal askıya alma, kalıcı olarak silme ve hizmetlere erişiminizi yasaklama hakkını saklı tutar.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>8. Uygulanacak Hukuk ve Uyuşmazlıkların Çözümü (Governing Law & Jurisdiction)</h2>
                    <p style={{ color: '#6B7280' }}>8.1. Uygulanacak Hukuk: İşbu Hizmet Şartlarının yorumlanması, ifası ve bu Sözleşmeden (veya Sözleşme dışı haksız fiillerden) doğabilecek her türlü uyuşmazlığın çözümü, kanunlar ihtilafı kurallarına (conflict of laws) bakılmaksızın doğrudan Türkiye Cumhuriyeti kanunlarına tabidir.
                        8.2. Yetkili Yargı Merci: Tüketiciyi koruyan mevzuatların emredici yerel mahkeme yetki kuralları saklı kalmak kaydıyla; işbu Sözleşme ile bağlantılı olarak taraflar arasında ortaya çıkabilecek her türlü anlaşmazlık, dava ve icra takibinde münhasıran İstanbul Çağlayan (Merkez) Mahkemeleri ve İcra Daireleri yetkili olacaktır.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>9. Sözleşme Şartlarının Güncellenmesi ve Bölünebilirlik</h2>
                    <p style={{ color: '#6B7280' }}>EventFlow, yasal mevzuatlardaki değişiklikler, teknolojik gelişmeler veya ticari model ihtiyaçları doğrultusunda bu Hizmet Şartlarını dilediği zaman tek taraflı olarak değiştirme, güncelleme veya yenileme hakkını saklı tutar. Sözleşmede esaslı bir değişiklik yapıldığında (örneğin haklarınızı daraltan bir husus), size uygulama içi bildirim (push notification) veya kayıtlı e-posta adresiniz aracılığıyla önceden makul bir süre içinde bilgi verilecektir. Yapılan güncellemelerin yürürlüğe girmesinin ardından Uygulamayı kullanmaya devam etmeniz, revize edilmiş yeni şartları okuduğunuz ve kabul ettiğiniz anlamına gelecektir. İşbu Sözleşmenin herhangi bir hükmünün yetkili bir mahkeme tarafından geçersiz veya uygulanamaz bulunması halinde, söz konusu hüküm Sözleşmeden çıkarılacak, geri kalan tüm hükümler tam bir geçerlilikle yürürlükte kalmaya devam edecektir. </p>
                </section>



            </div>
        </div>
    );
};

export default TermsOfService;

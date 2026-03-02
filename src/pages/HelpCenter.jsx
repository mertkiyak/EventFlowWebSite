import React from 'react';

const HelpCenter = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
            <h1 style={{ marginBottom: '40px' }}>Yardım Merkezi</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>EventFlow Nedir ve Nasıl Kullanılır?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        EventFlow, çevrenizdeki etkinlikleri keşfetmenizi ve kendi etkinliklerinizi oluşturmanızı sağlayan sosyal bir platformdur. Ana sayfadan veya harita üzerinden yeni etkinlikler bulabilir, ilgi alanlarınıza göre sosyalleşebilirsiniz. </p>
                </div>

                <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Nasıl Yeni Bir Etkinlik Oluşturabilirim?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Profilim &gt; Ayarlar &gt; Alt menüde bulunan '+' (Ekle) ikonuna tıklayarak etkinlik oluşturma sayfasına ulaşabilirsiniz. Etkinliğinizin adını, açıklamasını, tarihini, saatini, konumunu ve katılımcı sınırını belirleyip fotoğraf ekleyerek yayınlayabilirsiniz. </p>
                </div>

                <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Bir Etkinliğe Nasıl Katılırım?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Ana sayfa veya haritada ilginizi çeken bir etkinliğe tıklayarak detay sayfasına gidin. Ekranda yer alan 'Katıl' butonuna basarak etkinliğe kaydınızı tamamlayabilirsiniz. Katıldığınız etkinlikleri etkinlik filtrelerinden bulup takip edebilirsiniz. </p>

                </div>
                <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Etkinlik Filtrelerini Nasıl Kullanabilirim?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Ana sayfanın üst kısmında yer alan sekmelerden (Tüm Etkinlikler, Yakınımda, vb.) veya kategorilerden (Eğlence, Spor, Sanat vb.) filtreleme yapabilirsiniz. Ayrıca Ayarlar'dan 'Yakınındaki Mesafe' (km) değerini ayarlayarak alanı daraltıp genişletebilirsiniz.</p>

                </div>  <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Profilimi Nasıl Düzenlerim?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Alt menüden 'Profil' sekmesine gidin. Oradan veya Ayarlar menüsündeki 'Profili Düzenle' seçeneğine tıklayarak adınızı, biyografinizi ve profil fotoğrafınızı dilediğiniz zaman güncelleyebilirsiniz. </p>

                </div>  <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Birine Nasıl Mesaj Gönderirim?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Diğer kullanıcıların profillerinde veya etkinlik detay sayfaları aracılığıyla kişilerin sayfalarına gidip 'Mesaj Gönder' butonunu kullanarak onlarla iletişime geçebilirsiniz. </p>

                </div>  <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Bana Kimlerin Mesaj Gönderebileceğini Nasıl Ayarlarım?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        'Ayarlar' {'>'} 'Gizlilik' menüsünden 'Mesaj İzni' seçeneğini açıp kapatarak diğer kullanıcıların size rastgele mesaj gönderip gönderemeyeceğini belirleyebilirsiniz.</p>

                </div>  <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Şifremi Nasıl Değiştirebilirim?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Ayarlar' {'>'} 'Güvenlik' sekmesinden güvenli bir şekilde hesap şifrenizin değişimini gerçekleştirebilirsiniz.
                    </p>

                </div>  <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Karanlık Mod (Dark Mode) Destekleniyor mu?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Evet, 'Ayarlar' {'>'} 'Görünüm' altından Karanlık Mod anahtarını kullanarak temanızı açık veya koyu renk ayarlarına dönüştürebilirsiniz.  </p>

                </div>  <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Bildirimleri Kapatabilir miyim?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Evet, 'Ayarlar' {'>'} 'Bildirimler' menüsünden anlık push bildirimlerini ve e-posta bildirimi alımını kendi kişisel tercihlerinize göre açıp kapatabilirsiniz. </p>

                </div>  <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Geri Bildirim veya Şikayetlerimi Nasıl İletebilirim?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Uygulama deneyiminizle ilgili öneri, hata veya şikayetleri 'Ayarlar' {'>'} 'Geri Bildirim' menüsünden bize kolayca bir mesaj olarak ulaştırabilirsiniz. </p>

                </div>  <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Hesabımı Tamamen Silebilir miyim?</h3>
                    <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                        Evet, 'Ayarlar' menüsünün en alt kısmında yer alan 'Hesabı Sil' butonunu kullanarak hesabınızı silebilirsiniz. Ancak bu işlem kalıcıdır ve sonrasında geri döndürülemez.</p>

                </div>
            </div>
        </div>
    );
};

export default HelpCenter;

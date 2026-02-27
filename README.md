# Eventflow - Etkinlik Uygulaması Website

Modern ve responsive bir etkinlik uygulaması web sitesi. Eventflow, kullanıcıların çevresindeki etkinlikleri keşfetmelerini, katılmalarını, yeni insanlarla tanışmalarını ve kendi etkinliklerini oluşturmalarını sağlayan bir mobil uygulamadır.

## 🎨 Özellikler

- Modern ve şık tasarım
- Tamamen responsive (mobil, tablet, desktop)
- Smooth scroll ve animasyonlar
- Interaktif UI elementleri
- Gradient renkler ve modern ikonlar
- Optimized performans

## 📁 Dosya Yapısı

```
eventflow-website/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS stil dosyası
├── script.js           # JavaScript interaktif özellikler
└── README.md          # Bu dosya
```

## 🚀 Kullanım

1. Dosyaları bir klasöre indirin
2. `index.html` dosyasını bir web tarayıcısında açın
3. Web sitesi hazır!

### Yerel Sunucu ile Çalıştırma (Önerilen)

Python 3 ile:
```bash
cd eventflow-website
python -m http.server 8000
```

Sonra tarayıcınızda `http://localhost:8000` adresine gidin.

## 🎯 Bölümler

- **Hero Section**: Uygulamanın ana tanıtımı ve istatistikler
- **Özellikler**: 6 ana özelliğin detaylı açıklamaları
- **Nasıl Çalışır**: 3 adımda kullanım rehberi
- **İndir**: App Store ve Google Play indirme linkleri
- **Footer**: Sosyal medya linkleri ve site haritası

## 🎨 Renk Paleti

- Primary: #6366F1 (Indigo)
- Secondary: #EC4899 (Pink)
- Dark: #0F172A
- Background: #F8FAFC

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 968px - 1199px
- Mobile: 640px - 967px
- Small Mobile: <640px

## 🔧 Özelleştirme

### Renkleri Değiştirme
`style.css` dosyasındaki `:root` değişkenlerini düzenleyin:

```css
:root {
    --primary: #6366F1;
    --secondary: #EC4899;
    /* ... */
}
```

### İçerik Güncelleme
`index.html` dosyasındaki metinleri doğrudan düzenleyebilirsiniz.

### Yeni Özellik Ekleme
`.features-grid` içine yeni `.feature-card` div'leri ekleyin.

## 🌟 Gelecek Geliştirmeler

- [ ] Mobil menü implementasyonu
- [ ] Karanlık mod
- [ ] Çoklu dil desteği
- [ ] Blog bölümü
- [ ] Gerçek API entegrasyonu
- [ ] Video tanıtım bölümü
- [ ] Kullanıcı yorumları bölümü
- [ ] SSS (Sıkça Sorulan Sorular) bölümü

## 📄 Lisans

Bu proje kişisel kullanım için tasarlanmıştır.

## 👨‍💻 Geliştirici

Eventflow Web Sitesi - 2025

---

**Not**: Bu bir statik web sitesidir. Gerçek uygulama indirme linkleri ve API entegrasyonları için backend geliştirme gereklidir.
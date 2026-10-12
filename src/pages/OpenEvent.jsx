import React, { useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Uygulamadan paylaşılan etkinlik linkleri (https://www.eventflowapp.net/event-detail?eventId=...)
// Uygulama yüklüyse iOS Universal Link / Android App Link sayesinde bu sayfa hiç açılmaz.
// Açıldıysa: Android'de uygulamayı açmayı dener, yoksa Play Store'a düşer; iOS'ta App Store'a yönlendirir.
const APP_STORE_URL = 'https://apps.apple.com/app/id6759735272';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.eventflow.app';
const ANDROID_PACKAGE = 'com.eventflow.app';
const IOS_REDIRECT_DELAY_MS = 1800;

function detectPlatform() {
    const ua = navigator.userAgent || '';
    if (/android/i.test(ua)) return 'android';
    // iPadOS masaüstü Safari kimliğiyle gelir
    if (/iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
    return 'desktop';
}

const OpenEvent = () => {
    const { search } = useLocation();
    const eventId = new URLSearchParams(search).get('eventId') || '';
    const platform = useMemo(() => detectPlatform(), []);
    const userActedRef = useRef(false);

    const query = eventId ? `?eventId=${encodeURIComponent(eventId)}` : '';
    const schemeUrl = `eventflow://event-detail${query}`;
    const androidIntentUrl =
        `intent://event-detail${query}#Intent;scheme=eventflow;package=${ANDROID_PACKAGE};` +
        `S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`;
    const openAppUrl = platform === 'android' ? androidIntentUrl : schemeUrl;

    useEffect(() => {
        if (platform === 'android') {
            // Chrome: uygulama yüklüyse açar, değilse browser_fallback_url ile Play Store'a gider
            window.location.replace(androidIntentUrl);
            return undefined;
        }
        if (platform === 'ios') {
            const timer = setTimeout(() => {
                if (!userActedRef.current && document.visibilityState === 'visible') {
                    window.location.replace(APP_STORE_URL);
                }
            }, IOS_REDIRECT_DELAY_MS);
            return () => clearTimeout(timer);
        }
        return undefined;
    }, [platform, androidIntentUrl]);

    const storeUrl = platform === 'ios' ? APP_STORE_URL : PLAY_STORE_URL;

    return (
        <section className="open-event">
            <div className="open-event__card">
                <img className="open-event__logo" src="/logo.png" alt="" width="72" height="72" />
                <h1 className="open-event__title">Bu etkinlik EventFlow'da</h1>
                <p className="open-event__text">
                    {platform === 'desktop'
                        ? 'Etkinliği görmek için EventFlow uygulamasını telefonuna indir.'
                        : 'Uygulama açılmadıysa aşağıdan aç ya da hemen indir.'}
                </p>

                <div className="open-event__actions">
                    {platform !== 'desktop' && (
                        <a
                            className="open-event__btn open-event__btn--primary"
                            href={openAppUrl}
                            onClick={() => { userActedRef.current = true; }}
                        >
                            Uygulamada aç
                        </a>
                    )}
                    {platform === 'desktop' ? (
                        <>
                            <a className="open-event__btn" href={APP_STORE_URL} target="_blank" rel="noreferrer">App Store</a>
                            <a className="open-event__btn" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">Google Play</a>
                        </>
                    ) : (
                        <a
                            className="open-event__btn"
                            href={storeUrl}
                            onClick={() => { userActedRef.current = true; }}
                        >
                            {platform === 'ios' ? "App Store'dan indir" : "Google Play'den indir"}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OpenEvent;

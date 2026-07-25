"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Проверяем, давал ли пользователь согласие раньше
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      setIsAccepted(true);
      loadMetrics();
    } else {
      // Показываем баннер через 1 секунду после загрузки страницы
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const loadMetrics = () => {
    // Загружаем скрипт Яндекс.Метрики
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0];
        k.async=1;
        k.src=r;
        a.parentNode.insertBefore(k,a);
      })
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(110207584, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });
    `;
    document.head.appendChild(script);

    // Добавляем noscript-версию для статистики
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <div>
        <img src="https://mc.yandex.ru/watch/110207584" style="position:absolute; left:-9999px;" alt="" />
      </div>
    `;
    document.body.appendChild(noscript);
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsAccepted(true);
    setIsVisible(false);
    loadMetrics();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible || isAccepted) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="h-6 w-6 text-[#1B4D2E] shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-foreground">
              Мы используем файлы cookies для сбора статистики и улучшения работы сайта.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Подробнее в{' '}
              <a href="/cookie-policy" target="_blank" className="text-[#1B4D2E] hover:underline font-medium">
                Политике использования cookies
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Отказаться
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-[#1B4D2E] hover:bg-[#2D6B3F] text-white text-sm font-medium rounded-lg transition-colors"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
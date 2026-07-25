import { MessageCircle, Send } from "lucide-react";
import { site, socialLinks } from "@/lib/data";

function VkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.684 0H8.316C3.732 0 0 3.732 0 8.316v7.368C0 20.268 3.732 24 8.316 24h7.368C20.268 24 24 20.268 24 15.684V8.316C24 3.732 20.268 0 15.684 0zm3.6 16.968h-1.512c-.72 0-.936-.576-2.232-1.872-1.128-1.116-1.608-1.26-1.884-1.26-.384 0-.504.144-.504.864v1.296c0 .504-.216.792-1.44.792-2.124 0-4.464-1.296-6.084-3.708-2.52-3.384-3.204-5.904-3.204-6.408 0-.36.144-.648.864-.648h1.512c.648 0 .9.288 1.152.972.756 2.196 2.016 4.176 2.556 4.176.216 0 .324-.108.324-.648v-2.556c-.036-1.152-.684-1.26-.684-1.656 0-.18.144-.36.36-.36h2.448c.36 0 .504.18.504.648v3.204c0 .36.144.504.36.504.288 0 .504-.144.828-.468 1.08-1.188 1.872-3.06 1.872-3.06.108-.288.36-.504.756-.504h1.512c.54 0 .756.36.612.936-.216.972-2.34 3.492-2.34 3.492-.216.324-.288.504 0 .828.18.288.792.864 1.188 1.296.756.828 1.332 1.512 1.476 2.016.216.72-.072 1.08-.648 1.08z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ReactNode> = {
  Vk: <VkIcon className="h-5 w-5" />,
  Send: <Send className="h-5 w-5" />,
  MessageCircle: <MessageCircle className="h-5 w-5" />,
};

export function Footer() {
  return (
    <footer className="bg-[#1B4D2E] text-white/80">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Блок 1: Название и описание */}
          <div>
            <h3 className="font-bold text-lg text-white mb-3">{site.name}</h3>
            <p className="text-sm text-white/60">{site.tagline}</p>
          </div>

          {/* Блок 2: Контакты (без телефона) */}
          <div>
            <h4 className="font-semibold text-white mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>{site.address}</li>
              <li>{site.schedule}</li>
              {/* ============================================================
                  ТЕЛЕФОН ВРЕМЕННО ЗАКОММЕНТИРОВАН
                  Раскомментируйте, когда появится рабочий номер
                  ============================================================ */}
              {/*
              <li>
                <a
                  href={site.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              */}
              {/* ============================================================
                  КОНЕЦ ЗАКОММЕНТИРОВАННОГО БЛОКА
                  ============================================================ */}
            </ul>
          </div>

          {/* Блок 3: Соцсети */}
          <div>
            <h4 className="font-semibold text-white mb-3">Мы в соцсетях</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={link.name}
                >
                  {socialIcons[link.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Блок 4: Документы */}
          <div>
            <h4 className="font-semibold text-white mb-3">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/requisites"
                  className="hover:text-white transition-colors"
                >
                  Реквизиты
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="hover:text-white transition-colors"
                >
                  Политика cookies
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
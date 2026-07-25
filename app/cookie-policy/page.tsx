import { ScrollReveal } from "@/components/scroll-reveal";
import { Cookie, Eye, Shield, FileText, Clock, Info } from "lucide-react";
import { site } from "@/lib/data";

export const metadata = {
  title: "Политика использования cookies — Зелёнка",
  description: "Политика использования файлов cookies в садовом центре «Зелёнка».",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-[#F9F6F0]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4D2E] text-white mb-4">
              <Cookie className="h-7 w-7" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B4D2E]">Политика использования cookies</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              {site.name} — как мы используем файлы cookies
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-8">

            {/* 1. Что такое cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Info className="h-6 w-6 text-[#4CAF50]" />
                1. Что такое файлы cookies
              </h2>
              <p className="text-muted-foreground">
                Cookies (файлы cookie) — это небольшие текстовые файлы, которые сохраняются на устройстве пользователя 
                (компьютере, планшете, смартфоне) при посещении сайта. Они позволяют сайту запоминать ваши действия 
                и настройки (например, язык, шрифт) на определённый период времени.
              </p>
              <p className="text-muted-foreground">
                Файлы cookies не содержат вирусов и не могут навредить вашему устройству. Они используются для улучшения 
                работы сайта и удобства пользователей.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 2. Какие cookies мы используем */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Eye className="h-6 w-6 text-[#4CAF50]" />
                2. Какие cookies мы используем
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#F9F6F0] rounded-xl p-4">
                  <h4 className="font-semibold text-[#1B4D2E] mb-2">✅ Обязательные</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Необходимы для работы сайта</li>
                    <li>Запоминают настройки сессии</li>
                    <li>Не требуют согласия пользователя</li>
                  </ul>
                </div>
                <div className="bg-[#F9F6F0] rounded-xl p-4">
                  <h4 className="font-semibold text-[#1B4D2E] mb-2">📊 Аналитические</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Сбор статистики посещений</li>
                    <li>Анализ поведения пользователей</li>
                    <li>Улучшение работы сайта</li>
                    <li><span className="text-amber-600 font-medium">Требуют согласия!</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 3. Для чего мы используем cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#4CAF50]" />
                3. Для чего мы используем cookies
              </h2>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Обеспечение корректной работы сайта</li>
                <li>Сохранение настроек пользователя</li>
                <li>Сбор аналитики для улучшения сайта</li>
                <li>Анализ поведения пользователей</li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* 4. Управление cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Shield className="h-6 w-6 text-[#4CAF50]" />
                4. Как управлять файлами cookies
              </h2>
              <p className="text-muted-foreground">
                Вы можете управлять файлами cookies через настройки вашего браузера. 
                В большинстве браузеров есть возможность:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Принимать или отклонять все cookies</li>
                <li>Удалять уже сохранённые cookies</li>
                <li>Настраивать исключения для отдельных сайтов</li>
              </ul>
              <div className="bg-[#F9F6F0] rounded-xl p-4 mt-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-[#1B4D2E]">Важно:</span> Отключение некоторых cookies может 
                  повлиять на работу сайта и доступность отдельных функций.
                </p>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 5. Сроки хранения */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Clock className="h-6 w-6 text-[#4CAF50]" />
                5. Сроки хранения cookies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#F9F6F0] rounded-xl p-4">
                  <h4 className="font-semibold text-[#1B4D2E] mb-2">⏱️ Сессионные cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Хранятся временно и удаляются после закрытия браузера.
                  </p>
                </div>
                <div className="bg-[#F9F6F0] rounded-xl p-4">
                  <h4 className="font-semibold text-[#1B4D2E] mb-2">📅 Постоянные cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Хранятся до указанной даты или до тех пор, пока пользователь их не удалит вручную.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 6. Сторонние cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Eye className="h-6 w-6 text-[#4CAF50]" />
                6. Сторонние cookies
              </h2>
              <p className="text-muted-foreground">
                Наш сайт использует сервис Яндекс.Метрики для сбора аналитики. Яндекс.Метрика также может устанавливать 
                свои файлы cookies для сбора статистики. Мы используем её только с согласия пользователя.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 7. Согласие */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Shield className="h-6 w-6 text-[#4CAF50]" />
                7. Ваше согласие
              </h2>
              <p className="text-muted-foreground">
                При первом посещении сайта мы запрашиваем ваше согласие на использование файлов cookies. 
                Вы можете дать или отказаться от согласия.
              </p>
              <p className="text-muted-foreground">
                Продолжая использовать сайт без изменения настроек браузера, вы соглашаетесь с использованием cookies.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 8. Контакты */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Info className="h-6 w-6 text-[#4CAF50]" />
                8. Контакты
              </h2>
              <p className="text-muted-foreground">
                Если у вас есть вопросы по использованию файлов cookies, вы можете связаться с нами:
              </p>
              <div className="bg-[#F9F6F0] rounded-xl p-4 space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-[#1B4D2E]">Email:</span>{' '}
                  <a href={`mailto:${site.email}`} className="text-[#1B4D2E] hover:underline">
                    {site.email}
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-[#1B4D2E]">Адрес:</span> {site.address}
                </p>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 9. Дата */}
            <section className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Политика использования cookies действует с {new Date().toLocaleDateString("ru-RU")}.
                <br />
                {site.name} оставляет за собой право вносить изменения в настоящую Политику без предварительного уведомления пользователей.
              </p>
            </section>

          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
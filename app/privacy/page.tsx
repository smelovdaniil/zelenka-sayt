import { ScrollReveal } from "@/components/scroll-reveal";
import { Shield, Lock, Eye, FileText, Users, Server, Clock, MessageCircle, } from "lucide-react";
import { site } from "@/lib/data";

export const metadata = {
  title: "Политика конфиденциальности — Зелёнка",
  description: "Политика обработки персональных данных в садовом центре «Зелёнка».",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-[#F9F6F0]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4D2E] text-white mb-4">
              <Shield className="h-7 w-7" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B4D2E]">Политика конфиденциальности</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              {site.name} — защита ваших персональных данных
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-8">
            
            {/* 1. Общие положения */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#4CAF50]" />
                1. Общие положения
              </h2>
              <p className="text-muted-foreground">
                Настоящая Политика конфиденциальности (далее — Политика) действует в отношении всей информации, 
                которую {site.name} (далее — Оператор) может получить о пользователе во время использования сайта 
                {site.address ? `, расположенного по адресу: ${site.address}` : ''}.
              </p>
              <p className="text-muted-foreground">
                Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой 
                и указанными в ней условиями обработки его персональной информации.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 2. Собираемые данные */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Eye className="h-6 w-6 text-[#4CAF50]" />
                2. Какие данные мы собираем
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#F9F6F0] rounded-xl p-4">
                  <h4 className="font-semibold text-[#1B4D2E] mb-2">📋 При заполнении форм</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Имя пользователя</li>
                    <li>Номер телефона</li>
                    <li>Email</li>
                    <li>Текст комментария или заявки</li>
                  </ul>
                </div>
                <div className="bg-[#F9F6F0] rounded-xl p-4">
                  <h4 className="font-semibold text-[#1B4D2E] mb-2">📊 Технические данные</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>IP-адрес</li>
                    <li>Тип браузера и устройства</li>
                    <li>Файлы cookies</li>
                    <li>Страницы, которые посещает пользователь</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 3. Цели сбора */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Lock className="h-6 w-6 text-[#4CAF50]" />
                3. Цели обработки персональных данных
              </h2>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Обработка заявок и заказов пользователей</li>
                <li>Консультация по товарам и услугам</li>
                <li>Улучшение работы сайта и сервисов</li>
                <li>Анализ поведения пользователей для оптимизации сайта</li>
                <li>Информирование о новых товарах и акциях (с согласия пользователя)</li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* 4. Правовые основания */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Server className="h-6 w-6 text-[#4CAF50]" />
                4. Правовые основания обработки данных
              </h2>
              <p className="text-muted-foreground">
                Обработка персональных данных осуществляется в соответствии с:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»</li>
                <li>Настоящей Политикой конфиденциальности</li>
                <li>Согласием пользователя на обработку персональных данных</li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* 5. Защита данных */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Lock className="h-6 w-6 text-[#4CAF50]" />
                5. Как мы защищаем ваши данные
              </h2>
              <p className="text-muted-foreground">
                Мы принимаем все необходимые организационные и технические меры для защиты персональных данных 
                от неправомерного доступа, уничтожения, изменения, блокирования и других несанкционированных действий.
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Использование защищённого соединения (HTTPS)</li>
                <li>Ограничение доступа к персональным данным сотрудников</li>
                <li>Регулярное обновление программного обеспечения</li>
                <li>Хранение данных на российских серверах</li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* 6. Сроки хранения */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Clock className="h-6 w-6 text-[#4CAF50]" />
                6. Сроки хранения персональных данных
              </h2>
              <p className="text-muted-foreground">
                Персональные данные хранятся не дольше, чем этого требуют цели их обработки, но не более 3 лет 
                с момента последнего взаимодействия с пользователем.
              </p>
              <p className="text-muted-foreground">
                По истечении срока хранения данные уничтожаются или обезличиваются.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 7. Права пользователя */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Users className="h-6 w-6 text-[#4CAF50]" />
                7. Права пользователя
              </h2>
              <p className="text-muted-foreground">
                Пользователь имеет право:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Получить информацию о том, какие его данные хранятся у Оператора</li>
                <li>Требовать уточнения, блокирования или уничтожения своих данных, если они неполные, устаревшие или обрабатываются с нарушением закона</li>
                <li>Отозвать своё согласие на обработку персональных данных</li>
                <li>Подать жалобу в уполномоченный орган по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* 8. Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Eye className="h-6 w-6 text-[#4CAF50]" />
                8. Использование файлов cookies
              </h2>
              <p className="text-muted-foreground">
                Сайт использует файлы cookies для сбора статистики и улучшения работы сайта. 
                Использование cookies является добровольным — пользователь может отключить их в настройках браузера.
              </p>
              <p className="text-muted-foreground">
                Подробнее об использовании cookies читайте в <a href="/cookie-policy" className="text-[#1B4D2E] hover:underline font-medium">Политике использования cookies</a>.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 9. Контакты */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-[#4CAF50]" />
                9. Контакты
              </h2>
              <p className="text-muted-foreground">
                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
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
                <p className="text-muted-foreground">
                  <span className="font-medium text-[#1B4D2E]">ИНН:</span> {site.inn || "Укажите в реквизитах"}
                </p>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 10. Дата */}
            <section className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Политика конфиденциальности действует с {new Date().toLocaleDateString("ru-RU")}.
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
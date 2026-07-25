import { ScrollReveal } from "@/components/scroll-reveal";
import { FileText, Shield, CheckCircle, AlertCircle, ShoppingBag, Truck, RefreshCw, Scale, Users } from "lucide-react";
import { site } from "@/lib/data";

export const metadata = {
  title: "Пользовательское соглашение — Зелёнка",
  description: "Пользовательское соглашение садового центра «Зелёнка». Условия использования сайта и заказа товаров.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-[#F9F6F0]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4D2E] text-white mb-4">
              <FileText className="h-7 w-7" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B4D2E]">Пользовательское соглашение</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              {site.name} — условия использования сайта и заказа товаров
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
                Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между 
                {site.name} (далее — Продавец) и пользователем сайта (далее — Покупатель) при использовании 
                сайта {site.address ? `, расположенного по адресу: ${site.address}` : ''}.
              </p>
              <p className="text-muted-foreground">
                Использование сайта означает полное и безоговорочное согласие Покупателя с условиями настоящего Соглашения.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 2. Информация о продавце */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Shield className="h-6 w-6 text-[#4CAF50]" />
                2. Информация о продавце
              </h2>
              <div className="bg-[#F9F6F0] rounded-xl p-4 space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-[#1B4D2E]">Полное наименование:</span> ИП Воробьёва Наталья Алексеевна
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-[#1B4D2E]">ИНН:</span> {site.inn || "781419504777"}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-[#1B4D2E]">ОГРНИП:</span> {site.ogrn || "316784700321280"}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-[#1B4D2E]">Адрес:</span> {site.address}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-[#1B4D2E]">Email:</span>{' '}
                  <a href={`mailto:${site.email}`} className="text-[#1B4D2E] hover:underline">
                    {site.email}
                  </a>
                </p>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 3. Товары и цены */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-[#4CAF50]" />
                3. Товары и цены
              </h2>
              <p className="text-muted-foreground">
                На сайте представлена информация о растениях, их характеристиках и ценах. Все цены указаны в рублях 
                и являются окончательными.
              </p>
              <p className="text-muted-foreground">
                Продавец оставляет за собой право изменять цены на товары в любое время без предварительного уведомления.
              </p>
              <p className="text-muted-foreground">
                Фотографии растений могут незначительно отличаться от реального внешнего вида в зависимости от 
                освещения, периода вегетации и индивидуальных особенностей растения.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 4. Порядок заказа */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-[#4CAF50]" />
                4. Порядок заказа
              </h2>
              <p className="text-muted-foreground">
                Заказ товара осуществляется через формы обратной связи на сайте. Покупатель заполняет форму, 
                указывая своё имя, номер телефона и комментарий к заказу.
              </p>
              <p className="text-muted-foreground">
                После получения заявки Продавец связывается с Покупателем для подтверждения заказа, уточнения 
                деталей и согласования времени доставки.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 5. Доставка */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Truck className="h-6 w-6 text-[#4CAF50]" />
                5. Доставка
              </h2>
              <p className="text-muted-foreground">
                Доставка осуществляется по Санкт-Петербургу и Ленинградской области. Стоимость и сроки доставки 
                обсуждаются с Покупателем при подтверждении заказа.
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-[#1B4D2E]">Условие акции:</span> При заказе от 10 000 ₽ доставка 
                осуществляется бесплатно.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 6. Возврат и обмен */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <RefreshCw className="h-6 w-6 text-[#4CAF50]" />
                6. Возврат и обмен товара
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <span className="font-medium">Важно:</span> Растения относятся к товарам надлежащего качества, 
                    которые не подлежат возврату или обмену в соответствии с Перечнем непродовольственных товаров 
                    надлежащего качества, не подлежащих возврату или обмену (утверждён Постановлением Правительства РФ).
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                <span className="font-medium">Гарантия приживаемости:</span> Продавец гарантирует приживаемость растений 
                в течение 30 дней с момента посадки при условии соблюдения рекомендаций по уходу. В случае гибели растения 
                по вине Продавца, осуществляется замена или возврат денежных средств.
              </p>
              <p className="text-muted-foreground">
                В случае обнаружения дефектов или несоответствия товара заказу, Покупатель обязан уведомить Продавца 
                в течение 24 часов с момента получения товара.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 7. Ответственность */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Scale className="h-6 w-6 text-[#4CAF50]" />
                7. Ответственность сторон
              </h2>
              <p className="text-muted-foreground">
                Продавец не несёт ответственности за:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Неправильный уход за растением со стороны Покупателя</li>
                <li>Неблагоприятные погодные условия</li>
                <li>Действия третьих лиц</li>
                <li>Задержки в доставке по вине транспортных компаний</li>
              </ul>
              <p className="text-muted-foreground">
                Покупатель несёт ответственность за достоверность предоставленной при заказе информации.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 8. Конфиденциальность */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <Users className="h-6 w-6 text-[#4CAF50]" />
                8. Конфиденциальность
              </h2>
              <p className="text-muted-foreground">
                Продавец обязуется не разглашать персональные данные Покупателя третьим лицам, за исключением случаев, 
                предусмотренных законодательством РФ.
              </p>
              <p className="text-muted-foreground">
                Подробнее об обработке персональных данных читайте в{' '}
                <a href="/privacy" className="text-[#1B4D2E] hover:underline font-medium">
                  Политике конфиденциальности
                </a>.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 9. Срок действия */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1B4D2E] flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#4CAF50]" />
                9. Срок действия соглашения
              </h2>
              <p className="text-muted-foreground">
                Настоящее Соглашение вступает в силу с момента его публикации на сайте и действует до момента его замены 
                новой редакцией.
              </p>
              <p className="text-muted-foreground">
                Продавец оставляет за собой право вносить изменения в настоящее Соглашение без предварительного уведомления. 
                Актуальная версия Соглашения всегда доступна на этой странице.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 10. Дата */}
            <section className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Пользовательское соглашение действует с {new Date().toLocaleDateString("ru-RU")}.
                <br />
                {site.name} оставляет за собой право вносить изменения в настоящее Соглашение без предварительного уведомления пользователей.
              </p>
            </section>

          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
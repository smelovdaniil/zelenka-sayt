import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Sprout,
  ShieldCheck,
  Truck,
  MessageCircle,
  Timer,
  Percent,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import {
  hero,
  benefits,
  popularPlants,
  about,
  landscaping, // ← НОВЫЙ ИМПОРТ
  faq,
  contacts,
  site,
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroTimer } from "@/components/hero-timer";
import { OrderButton } from "@/components/order-button";
import { OrderProjectButton } from "@/components/order-project-button"; // ← НОВЫЙ ИМПОРТ
import { FaqAccordion } from "@/components/faq-accordion";
// import { CallbackButton } from "@/components/callback-button"; // Раскомментируйте, когда создадите компонент

const benefitIcons: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Truck: <Truck className="h-6 w-6" />,
  MessageCircle: <MessageCircle className="h-6 w-6" />,
  Timer: <Timer className="h-6 w-6" />,
  Percent: <Percent className="h-6 w-6" />,
};

export default function HomePage() {
  return (
    <>
      {/* Блок 1: Герой с таймером */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1B4D2E] via-[#2D6B3F] to-[#1B4D2E] px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge variant="secondary" className="text-sm px-4 py-1.5">
            Садовый центр в Санкт-Петербурге
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-[#4CAF50]">
            {hero.highlight}
          </p>
          <HeroTimer cta={hero.cta} />
        </div>
      </section>

      {/* Блок 2: Преимущества / Доставка */}
      <ScrollReveal>
        <section id="delivery" className="py-20 px-4 bg-brand-cream">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#1B4D2E]">
              Почему выбирают нас
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              5 причин доверить озеленение своего участка садовому центру «Зелёнка»
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((item) => (
                <Card
                  key={item.title}
                  className="text-center border-0 shadow-sm card-hover"
                >
                  <CardContent className="pt-8 pb-6 px-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B4D2E]/10 text-[#1B4D2E] mb-4">
                      {benefitIcons[item.icon]}
                    </div>
                    <h3 className="font-semibold text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Блок 3: Популярные растения (Каталог) */}
      <ScrollReveal>
        <section id="showcase" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#1B4D2E]">
              Популярные растения
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Эти растения чаще всего выбирают наши клиенты
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPlants.map((plant) => (
                <Card
                  key={plant.id}
                  className="overflow-hidden border-0 shadow-sm card-hover"
                >
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={plant.imagePlaceholder}
                      alt={plant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg">{plant.name}</h3>
                    <p className="text-sm text-muted-foreground italic">
                      {plant.latinName}
                    </p>
                    <p className="text-xl font-bold text-[#1B4D2E]">
                      {plant.price.toLocaleString()} ₽
                    </p>
                    <OrderButton plantName={plant.name} />
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="/Каталог_растений.xlsx"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1B4D2E] bg-transparent px-6 py-3 text-base font-medium text-[#1B4D2E] transition-colors hover:bg-[#1B4D2E]/5"
              >
                Скачать полный каталог
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===================== НОВЫЙ БЛОК: ЛАНДШАФТНЫЙ ДИЗАЙН ===================== */}
      <ScrollReveal>
        <section id="landscaping" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#1B4D2E]">
              {landscaping.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
              {/* Фото слева (меняем местами с текстом) */}
              <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden order-1 lg:order-1">
                <img
                  src={landscaping.imagePlaceholder}
                  alt="Ландшафтный дизайн"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Текст справа */}
              <div className="space-y-4 text-muted-foreground order-2 lg:order-2">
                {landscaping.text.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <div className="pt-4">
                  <OrderProjectButton />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* ===================== КОНЕЦ БЛОКА ЛАНДШАФТНЫЙ ДИЗАЙН ===================== */}

      {/* Блок 4: О компании */}
      <ScrollReveal>
        <section id="about" className="py-20 px-4 bg-brand-cream">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#1B4D2E]">
              {about.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
              <div className="space-y-4 text-muted-foreground">
                {about.text.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden">
                <img
                  src={about.imagePlaceholder}
                  alt="О компании"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Блок 5: Частые вопросы */}
      <ScrollReveal>
        <section id="faq" className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#1B4D2E]">
              Частые вопросы
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Ответы на самые популярные вопросы наших клиентов
            </p>
            <FaqAccordion items={faq} />
          </div>
        </section>
      </ScrollReveal>

      {/* Блок 6: Контакты */}
      <ScrollReveal>
        <section id="contacts" className="py-20 px-4 bg-[#1B4D2E] text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Контакты</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#4CAF50] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">{contacts.address}</p>
                    <p className="text-white/70 text-sm">
                      Ленинградская область
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-[#4CAF50] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">График работы</p>
                    <p className="text-white/70 text-sm">{contacts.schedule}</p>
                  </div>
                </div>

                {/* ============================================================
                    ТЕЛЕФОН И КНОПКА "ПОЗВОНИТЬ СЕЙЧАС" — ВРЕМЕННО ЗАКОММЕНТИРОВАНЫ
                    Раскомментируйте, когда появится рабочий номер
                    ============================================================ */}
                {/*
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-[#4CAF50] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">{contacts.phone}</p>
                    <p className="text-white/70 text-sm">
                      Звоните, мы на связи
                    </p>
                  </div>
                </div>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#4CAF50] hover:bg-[#43A047] text-white px-6 py-3 font-medium transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Позвонить сейчас
                </a>
                */}
                {/* ============================================================
                    КОНЕЦ ЗАКОММЕНТИРОВАННОГО БЛОКА
                    ============================================================ */}

                {/* Кнопка "Заказать звонок" — пока закомментирована, т.к. компонент может отсутствовать */}
                {/*
                <div className="pt-4">
                  <CallbackButton />
                </div>
                */}
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <iframe
                  src={contacts.mapIframe}
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Яндекс.Карта — Приозерск, Ленинградское шоссе, 31А"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
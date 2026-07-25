import { ScrollReveal } from "@/components/scroll-reveal";
import { Building2, User, FileText, Banknote } from "lucide-react";
import { site } from "@/lib/data";

export const metadata = {
  title: "Реквизиты — Зелёнка",
  description: "Полные реквизиты садового центра «Зелёнка» для оформления заказов и договоров.",
};

export default function RequisitesPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-[#F9F6F0]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4D2E] text-white mb-4">
              <Building2 className="h-7 w-7" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B4D2E]">Реквизиты</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              {site.name} — {site.tagline}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-8">
            {/* Информация о компании */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <User className="h-4 w-4" />
                  Полное наименование
                </div>
                <p className="text-lg font-medium text-foreground">
                  ИП Воробьёва Наталья Алексеевна {/* ← Замените на своё */}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  ИНН
                </div>
                <p className="text-lg font-medium text-foreground font-mono tracking-wider">
                  {site.inn || "781419504777"}
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* ОГРН */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  {site.ogrnType || "ОГРНИП"}
                </div>
                <p className="text-lg font-medium text-foreground font-mono tracking-wider">
                  {site.ogrn || "316784700321280"}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  Адрес
                </div>
                <p className="text-lg font-medium text-foreground">
                  {site.legalAddress}
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Банковские реквизиты */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Banknote className="h-5 w-5 text-[#1B4D2E]" />
                Банковские реквизиты
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Наименование банка</p>
                  <p className="font-medium">{site.bankName || "АО КБ «МОДУЛЬБАНК»"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">БИК</p>
                  <p className="font-medium font-mono">{site.bik || "044525092"}</p>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <p className="text-sm text-muted-foreground">Расчётный счёт (р/с)</p>
                  <p className="font-medium font-mono tracking-wider text-lg">
                    {site.account || "40802810570110004785"}
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Контакты */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-[#1B4D2E] hover:underline"
                >
                  {site.email}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">График работы</p>
                <p className="font-medium">{site.schedule}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Все реквизиты актуальны на {new Date().toLocaleDateString("ru-RU")}.
              <br />
              Информация обновляется при изменении данных.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
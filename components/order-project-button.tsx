"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

// ======================================================
// ⚠️ ВАЖНО! ЗАМЕНИТЕ ЭТУ ПОЧТУ НА СВОЮ!
// Сейчас здесь стоит daniilsmelov2@yandex.ru
// ======================================================
const FORM_SUBMIT_URL = "https://formsubmit.co/ajax/daniilsmelov2@yandex.ru";

export function OrderProjectButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false); // ← НОВЫЙ СТЕЙТ ДЛЯ ЧЕКБОКСА

  const resetForm = () => {
    setName("");
    setPhone("");
    setComment("");
    setConsent(false); // ← СБРАСЫВАЕМ ЧЕКБОКС
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // =============================================
    // ⚠️ ПРОВЕРКА СОГЛАСИЯ НА ОБРАБОТКУ ДАННЫХ
    // Без галочки форма НЕ отправится!
    // =============================================
    if (!consent) {
      toast.error("Пожалуйста, дайте согласие на обработку персональных данных.");
      return;
    }

    setSubmitting(true);

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("phone", phone.trim());
    formData.append("comment", comment.trim() || "Заказ проекта ландшафтного дизайна");
    formData.append("_captcha", "false");
    formData.append("_subject", "Заказ проекта ландшафтного дизайна — Зелёнка");

    try {
      const res = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Ошибка отправки");
      }

      toast.success("✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время для обсуждения проекта.");
      // ========== ОТПРАВКА ЦЕЛИ В ЯНДЕКС.МЕТРИКУ ==========
if (typeof window !== "undefined" && (window as any).ym) {
  (window as any).ym(110207584, "reachGoal", "ORDER_PROJECT");
}
// =====================================================
      setOpen(false);
      resetForm();
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast.error("❌ Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Кнопка вызова формы */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B4D2E] hover:bg-[#2D6B3F] text-white px-6 py-3 font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
      >
        Заказать проект
      </button>

      {/* Модальное окно */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#1B4D2E]">
              🌿 Заказать проект ландшафтного дизайна
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              Оставьте свои контакты, и мы свяжемся с вами для обсуждения всех деталей.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
            {/* Поле "Имя" */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="project-name" className="text-sm font-medium text-foreground">
                Ваше имя <span className="text-destructive">*</span>
              </label>
              <Input
                id="project-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Например: Александр"
                required
                disabled={submitting}
                className="h-11"
              />
            </div>

            {/* Поле "Телефон" */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="project-phone" className="text-sm font-medium text-foreground">
                Номер телефона <span className="text-destructive">*</span>
              </label>
              <Input
                id="project-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                required
                disabled={submitting}
                className="h-11"
              />
            </div>

            {/* Поле "Комментарий" */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="project-comment" className="text-sm font-medium text-foreground">
                Пожелания к проекту
              </label>
              <Textarea
                id="project-comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Опишите примерную площадь участка, стиль, какие растения нравятся..."
                rows={4}
                disabled={submitting}
                className="resize-none"
              />
            </div>

            {/* =============================================
                ЧЕКБОКС СОГЛАСИЯ НА ОБРАБОТКУ ДАННЫХ
                ============================================= */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="project-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#1B4D2E] cursor-pointer"
              />
              <label htmlFor="project-consent" className="text-xs text-muted-foreground">
                Я согласен(на) на обработку моих персональных данных в соответствии с{' '}
                <a
                  href="/privacy"
                  target="_blank"
                  className="text-[#1B4D2E] hover:underline font-medium"
                >
                  Политикой конфиденциальности
                </a>
              </label>
            </div>
            {/* =============================================
                КОНЕЦ ЧЕКБОКСА
                ============================================= */}

            {/* Скрытые поля для FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Заказ проекта ландшафтного дизайна — Зелёнка"
            />
            <input
              type="hidden"
              name="_template"
              value="table"
            />

            {/* Кнопка отправки */}
            <Button
              type="submit"
              className="bg-[#1B4D2E] hover:bg-[#2D6B3F] text-white h-11 text-base font-medium transition-colors duration-200 mt-1"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Отправка...
                </>
              ) : (
                "Отправить заявку"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
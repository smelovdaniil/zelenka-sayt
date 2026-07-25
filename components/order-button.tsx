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

// ======================================================
// ⚠️ ВАЖНО! ЗАМЕНИТЕ ЭТУ ПОЧТУ НА СВОЮ!
// Сейчас здесь стоит daniilsmelov2@yandex.ru
// ======================================================
const FORM_SUBMIT_URL = "https://formsubmit.co/ajax/daniilsmelov2@yandex.ru";

interface OrderButtonProps {
  plantName: string;
}

export function OrderButton({ plantName }: OrderButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState(plantName);
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false); // ← НОВЫЙ СТЕЙТ ДЛЯ ЧЕКБОКСА

  const resetForm = () => {
    setName("");
    setPhone("");
    setComment(plantName);
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
    formData.append("comment", comment.trim() || plantName);
    formData.append("_captcha", "false");
    formData.append("_subject", "Новый заказ из питомника Зелёнка");

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

      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      // ========== ОТПРАВКА ЦЕЛИ В ЯНДЕКС.МЕТРИКУ ==========
if (typeof window !== "undefined" && (window as any).ym) {
  (window as any).ym(110207584, "reachGoal", "ORDER_PROJECT");
}
// =====================================================
      setOpen(false);
      resetForm();
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast.error("Произошла ошибка. Попробуйте позже.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        className="w-full mt-2 bg-[#1B4D2E] hover:bg-[#2D6B3F] text-white"
        onClick={() => setOpen(true)}
      >
        Заказать
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Заказ растения</DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами для подтверждения заказа.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Поле "Имя" */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Имя
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              required
            />
          </div>

          {/* Поле "Телефон" */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Телефон
            </label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              required
            />
          </div>

          {/* Поле "Комментарий" */}
          <div className="flex flex-col gap-2">
            <label htmlFor="comment" className="text-sm font-medium">
              Комментарий
            </label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
            />
          </div>

          {/* =============================================
              ЧЕКБОКС СОГЛАСИЯ НА ОБРАБОТКУ ДАННЫХ
              ============================================= */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#1B4D2E] cursor-pointer"
            />
            <label htmlFor="consent" className="text-xs text-muted-foreground">
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
            value="Новый заказ из питомника Зелёнка"
          />

          <Button
            type="submit"
            className="bg-[#1B4D2E] hover:bg-[#2D6B3F] text-white"
            disabled={submitting}
          >
            {submitting ? "Отправка..." : "Отправить"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
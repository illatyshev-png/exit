"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "welcomePopupClosed";

interface WelcomePopupProps {
  onClose?: () => void;
}

export default function WelcomePopup({ onClose }: WelcomePopupProps) {
  const [open, setOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Проверка гидрации - только на клиенте
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Проверяем sessionStorage и показываем popup
  useEffect(() => {
    if (!isHydrated) return;

    try {
      const wasClosed = sessionStorage.getItem(STORAGE_KEY);
      if (!wasClosed) {
        // Задержка для полной загрузки страницы
        const timer = setTimeout(() => {
          setOpen(true);
        }, 500);

        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Error accessing sessionStorage:", error);
    }
  }, [isHydrated]);

  const handleClose = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch (error) {
      console.error("Error setting sessionStorage:", error);
    }
    onClose?.();
  }, [onClose]);

  // Обработчик Escape
  useEffect(() => {
    if (!open || !isHydrated) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [open, isHydrated, handleClose]);

  // Не рендерим на сервере и до полной гидрации
  if (!isHydrated || !open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-popup-title"
      onClick={handleClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

      {/* Content */}
      <div
        className={cn(
          "relative z-10 w-full max-w-md rounded-lg border bg-background p-6 shadow-lg",
          "animate-in fade-in-0 zoom-in-95 duration-200"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 p-1"
          aria-label="Закрыть"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="space-y-2 pr-8">
          <h2 id="welcome-popup-title" className="text-lg font-semibold text-accent">
            Актуально
          </h2>
          <p className="font-medium text-foreground">
            19-я группа стартует в марте 2026
          </p>
          <p className="text-sm text-muted-foreground">
            В группе осталось 2 места. Стартуем сразу, как только вы к нам присоединитесь!
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="w-full sm:w-auto"
          >
            Узнать подробности
          </Button>
          <Button
            variant="default"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
              const pricingEl = document.getElementById("pricing");
              if (pricingEl) {
                pricingEl.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Присоединиться к группе
          </Button>
        </div>
      </div>
    </div>
  );
}

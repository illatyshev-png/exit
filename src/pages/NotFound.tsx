import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Страница не найдена | Группа подготовки к экзамену в Минюсте";
    
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute("content", "noindex, nofollow");
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">
          Страница не найдена
        </h2>
        <p className="mb-8 text-muted-foreground">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
        
        <div className="space-y-4">
          <div>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="/">Вернуться на главную</a>
            </Button>
          </div>
          
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              Полезные ссылки:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#solution"
                className="text-sm text-primary hover:underline"
              >
                Что входит в программу
              </a>
              <a
                href="/#pricing"
                className="text-sm text-primary hover:underline"
              >
                Стоимость участия
              </a>
              <a
                href="/#faq"
                className="text-sm text-primary hover:underline"
              >
                Часто задаваемые вопросы
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

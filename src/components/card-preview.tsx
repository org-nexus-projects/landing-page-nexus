import React from "react";
import { Card, CardContent } from "#components/ui/card";
import { Badge } from "#components/ui/badge";
import { Button } from "#components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "#lib/utils";

interface CardPreviewProps {
  color?: string;
  className?: string;
}

const CardPreview = ({ color = "bg-primary", className }: CardPreviewProps) => {
  return (
    <div className="p-6 flex justify-center">
      <Card
        className={cn(
          "max-w-[340px] overflow-hidden shadow-sm hover:shadow-md transition-shadow",
          className,
        )}
      >
        <div className={`h-4 ${color} rounded-t-xl`} />

        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Badge variant="outline" className="text-xs font-medium">
              <span className="font-bold">2025.2</span>
            </Badge>
            <span className="text-xs text-muted-foreground">
              Turma A1 - Diurno
            </span>
          </div>

          <h3 className="text-lg font-bold mb-2">Fenômenos Térmicos</h3>

          <p className="text-sm text-muted-foreground mb-1">
            Campus: Santo André
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Prof. Ana Paula Santos
          </p>

          <div className="flex justify-center">
            <Button variant="outline" className="px-6" asChild>
              <a href="#" target="_blank" rel="noopener">
                Entrar <ExternalLink size={16} className="ml-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardPreview;

import React from "react";
import {
  BookOpen,
  Video,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "#components/ui/button";
import { Progress } from "#components/ui/progress";
import { Badge } from "#components/ui/badge";
import { cn } from "#lib/utils";

interface CourseCardProps {
  title: string;
  code: string;
  professor: string;
  progress: number;
  imageColor: string;
  semester: string;
  pendingTasks?: number;
}

const CourseCard = ({
  title,
  code,
  professor,
  progress,
  imageColor,
  semester,
  pendingTasks = 0,
}: CourseCardProps) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`h-2 ${imageColor}`} />
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <Badge variant="outline" className="text-xs mb-2">
              {semester}
            </Badge>
            <h3 className="font-semibold text-lg leading-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{code}</p>
            <p className="text-sm mt-1">Prof. {professor}</p>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex justify-between text-sm mb-1">
            <span>Progresso</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-8 h-8 p-0"
            >
              <BookOpen size={15} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-8 h-8 p-0"
            >
              <Video size={15} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-8 h-8 p-0"
            >
              <FileText size={15} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-8 h-8 p-0"
            >
              <Download size={15} />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-xs font-medium flex items-center gap-1"
          >
            Ver mais
            <ExternalLink size={12} className="ml-1" />
          </Button>
        </div>

        {pendingTasks > 0 && (
          <div className="mt-3 text-xs font-medium text-orange-500">
            {pendingTasks} atividade{pendingTasks > 1 ? "s" : ""} pendente
            {pendingTasks > 1 ? "s" : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;

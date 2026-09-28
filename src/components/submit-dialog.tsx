import { Button } from "#components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "#components/ui/dialog";
import { Input } from "#components/ui/input";
import { Label } from "#components/ui/label";

interface SubmitDialogProps {
  type: "mentor" | "volunteer";
  buttonText: string;
  buttonClassName?: string;
}

export default function SubmitDialog({ 
  type, 
  buttonText, 
  buttonClassName 
}: SubmitDialogProps) {
  const isMentor = type === "mentor";
  const title = isMentor ? "Cadastro de Mentor" : "Cadastro de Voluntário";
  const description = isMentor
    ? "Preencha os detalhes abaixo para se cadastrar como mentor no Nexus."
    : "Preencha os detalhes abaixo para se cadastrar como voluntário no Nexus.";
  const idSuffix = isMentor ? "" : "-vol";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor={`name${idSuffix}`}>Nome completo</Label>
            <Input
              id={`name${idSuffix}`}
              placeholder="Digite seu nome"
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`email${idSuffix}`}>Email</Label>
            <Input
              id={`email${idSuffix}`}
              type="email"
              placeholder="seu.email@exemplo.com"
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`phone${idSuffix}`}>Telefone</Label>
            <Input
              id={`phone${idSuffix}`}
              type="tel"
              placeholder="(11) 99999-9999"
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
            Enviar cadastro
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

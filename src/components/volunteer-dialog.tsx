import { useState } from "react";
import { toast } from "sonner";
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
import { Textarea } from "#components/ui/textarea";

interface VolunteerDialogProps {
  type: "mentor" | "volunteer";
  buttonText: string;
  buttonClassName?: string;
}

export default function VolunteerDialog({
  type,
  buttonText,
  buttonClassName,
}: VolunteerDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMentor = type === "mentor";
  const title = isMentor ? "Cadastro de Mentor" : "Cadastro de Voluntário";
  const description = isMentor
    ? "Preencha os detalhes abaixo para se cadastrar como mentor no Nexus."
    : "Preencha os detalhes abaixo para se cadastrar como voluntário no Nexus.";
  const idSuffix = isMentor ? "" : "-vol";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const description = String(formData.get("description") ?? "").trim();

    if (description.length < 20) {
      toast.error("A descrição deve ter pelo menos 20 caracteres.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xljdanpp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      toast.success("Cadastro enviado com sucesso!");
      setIsOpen(false);
    } catch {
      toast.error("Não foi possível enviar o cadastro. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="type" value={type} />
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor={`name${idSuffix}`}>Nome completo</Label>
              <Input
                id={`name${idSuffix}`}
                name="name"
                placeholder="Digite seu nome"
                className="col-span-3"
                pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)+"
                title="Digite seu nome completo, com pelo menos duas palavras e sem números."
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`email${idSuffix}`}>Email</Label>
              <Input
                id={`email${idSuffix}`}
                name="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`description${idSuffix}`}>Descrição</Label>
              <Textarea
                id={`description${idSuffix}`}
                name="description"
                placeholder="Descreva sua experiência e interesses"
                className="col-span-3 min-h-24 resize-y"
                minLength={20}
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white hover:bg-primary/90"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

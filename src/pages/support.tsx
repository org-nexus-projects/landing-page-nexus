
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "#hooks/use-toast";
import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import { Textarea } from "#components/ui/textarea";
import { Label } from "#components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Upload, FileText, AlertTriangle, Send } from "lucide-react";
import Header from "#components/header";
import Sidebar from "#components/sidebar";
import { Alert, AlertDescription } from "#components/ui/alert";

const formSchema = z.object({
  problemType: z.string({
    required_error: "Por favor, selecione o tipo de problema",
  }),
  description: z.string().min(10, {
    message: "A descrição deve ter pelo menos 10 caracteres",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido",
  }),
  files: z.any().optional(),
});

const SupportPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileList, setFileList] = useState<File[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problemType: "",
      description: "",
      email: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFileList(Array.from(files));
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simular envio para o backend
    setTimeout(() => {
      console.log({
        ...values,
        files: fileList,
      });
      
      setIsSubmitting(false);
      setShowSuccess(true);
      
      toast({
        title: "Relatório enviado",
        description: "Retornaremos em breve pelo email fornecido.",
      });
      
      // Resetar o formulário depois de 2 segundos
      setTimeout(() => {
        form.reset();
        setFileList([]);
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 px-4 py-8 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <AlertTriangle className="mr-2 h-6 w-6 text-primary" />
                Reportar um Problema
              </h1>
              <p className="text-gray-600">
                Preencha o formulário abaixo para reportar um problema ou sugerir melhorias na plataforma.
              </p>
            </div>
            
            {showSuccess && (
              <Alert className="mb-6 bg-green-50 border-green-200">
                <AlertDescription className="text-green-800 flex items-center gap-2">
                  <svg 
                    className="h-5 w-5 text-green-500" 
                    fill="none" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Relato enviado com sucesso! Retornaremos em breve pelo email fornecido.
                </AlertDescription>
              </Alert>
            )}
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="problemType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de problema</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo de problema" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="course_error">Erro na disciplina</SelectItem>
                            <SelectItem value="technical_issue">Problema técnico</SelectItem>
                            <SelectItem value="improvement">Sugestão de melhoria</SelectItem>
                            <SelectItem value="other">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição detalhada</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva aqui com detalhes o que aconteceu..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Quanto mais detalhes, mais rápido poderemos resolver o problema.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2">
                    <Label htmlFor="files">Anexar arquivos</Label>
                    <div className="border-2 border-dashed border-gray-200 rounded-md p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <input
                        id="files"
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="files" className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-600 mb-1">
                          Arraste arquivos ou clique para selecionar
                        </span>
                        <span className="text-xs text-gray-500">
                          (Prints de tela, documentos ou evidências)
                        </span>
                      </label>
                    </div>
                    
                    {fileList.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {fileList.map((file, index) => (
                          <div key={index} className="flex items-center p-2 bg-gray-50 rounded-md">
                            <FileText className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-700 truncate">{file.name}</span>
                            <span className="text-xs text-gray-500 ml-auto">
                              {(file.size / 1024).toFixed(0)} KB
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email para resposta</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="seu.email@aluno.ufabc.edu.br" 
                            type="email"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Utilizaremos este email para responder sua solicitação.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar relatório
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupportPage;

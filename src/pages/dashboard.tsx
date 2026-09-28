import React, { useState } from "react";
import Header from "#components/header";
import Sidebar from "#components/sidebar";
import CourseCard from "#components/course-card";
import CardPreview from "#components/card-preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#components/ui/select";
import { Button } from "#components/ui/button";
import { Link } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "Cálculo Vetorial e Integral",
    code: "MCTA001-17",
    professor: "Ana Paula Santos",
    progress: 78,
    imageColor: "bg-blue-500",
    semester: "2023.2",
    pendingTasks: 2
  },
  {
    id: 2,
    title: "Álgebra Linear",
    code: "MCTA002-17",
    professor: "Roberto Oliveira",
    progress: 92,
    imageColor: "bg-green-500",
    semester: "2023.2",
    pendingTasks: 0
  },
  {
    id: 3,
    title: "Física Geral I",
    code: "MCTB019-17",
    professor: "Carlos Mendes",
    progress: 65,
    imageColor: "bg-purple-500",
    semester: "2023.2",
    pendingTasks: 1
  },
  {
    id: 4,
    title: "Bases Computacionais",
    code: "MCTA023-13",
    professor: "Patrícia Silva",
    progress: 100,
    imageColor: "bg-teal-500",
    semester: "2023.2",
    pendingTasks: 0
  },
  {
    id: 5,
    title: "Bases Epistemológicas",
    code: "MCTB025-13",
    professor: "João Fernandes",
    progress: 45,
    imageColor: "bg-red-500",
    semester: "2023.2",
    pendingTasks: 3
  },
  {
    id: 6,
    title: "Processamento da Informação",
    code: "MCTA028-15",
    professor: "Mariana Costa",
    progress: 72,
    imageColor: "bg-amber-500",
    semester: "2023.2",
    pendingTasks: 0
  },
  {
    id: 7,
    title: "Fenômenos Mecânicos",
    code: "MCTB018-17",
    professor: "Lucas Pereira",
    progress: 85,
    imageColor: "bg-indigo-500",
    semester: "2023.1",
    pendingTasks: 0
  },
  {
    id: 8,
    title: "Estrutura da Matéria",
    code: "MCTB009-17",
    professor: "Juliana Souza",
    progress: 60,
    imageColor: "bg-cyan-500",
    semester: "2023.1",
    pendingTasks: 0
  }
];

const Index = () => {
  const [activeSemester, setActiveSemester] = useState<string>("all");
  
  const filteredCourses = activeSemester === "all" 
    ? coursesData 
    : coursesData.filter(course => course.semester === activeSemester);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-end mb-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  Voltar para Landing Page
                </Button>
              </Link>
            </div>
            
            <div className="mb-8 bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4">Preview do Card Vue Convertido para React</h2>
              <CardPreview color="bg-blue-500" />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-semibold">Minhas Disciplinas</h1>
                <p className="text-muted-foreground">Gerencie suas disciplinas e acompanhe seu progresso</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Select defaultValue="all" onValueChange={setActiveSemester}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Semestre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="2023.2">2023.2</SelectItem>
                    <SelectItem value="2023.1">2023.1</SelectItem>
                    <SelectItem value="2022.3">2022.3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Tabs defaultValue="current" className="mb-6">
              <TabsList>
                <TabsTrigger value="current">Em andamento</TabsTrigger>
                <TabsTrigger value="completed">Concluídas</TabsTrigger>
                <TabsTrigger value="upcoming">Próximas</TabsTrigger>
              </TabsList>
              
              <TabsContent value="current" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      code={course.code}
                      professor={course.professor}
                      progress={course.progress}
                      imageColor={course.imageColor}
                      semester={course.semester}
                      pendingTasks={course.pendingTasks}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="text-center py-16">
                  <p className="text-muted-foreground">Não há disciplinas concluídas para exibir.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="upcoming">
                <div className="text-center py-16">
                  <p className="text-muted-foreground">Não há disciplinas agendadas para o próximo semestre.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

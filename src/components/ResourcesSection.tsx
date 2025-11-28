import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, Download, ExternalLink } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      type: "PDF",
      size: "2.4 MB",
      icon: FileText,
      course: "CS101",
      downloads: 234,
    },
    {
      id: 2,
      title: "Data Structures Lecture Recording",
      type: "Video",
      size: "145 MB",
      icon: Video,
      course: "CS201",
      downloads: 156,
    },
    {
      id: 3,
      title: "Calculus II Study Guide",
      type: "PDF",
      size: "1.8 MB",
      icon: FileText,
      course: "MATH202",
      downloads: 189,
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Resource Library</h2>
            <p className="text-muted-foreground">Access course materials, study guides, and recordings</p>
          </div>
          <Button variant="outline" className="gap-2">
            View All <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription className="flex items-center justify-between text-xs">
                  <span>{resource.course}</span>
                  <span>{resource.size}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{resource.downloads} downloads</span>
                  <Button size="sm" variant="ghost" className="gap-2">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
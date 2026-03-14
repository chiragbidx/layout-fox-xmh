import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile-first, Always",
    description:
      "Every section and visual is responsive out of the box for agency sites, SaaS dashboards, and studios.",
  },
  {
    icon: "BadgeCheck",
    title: "Production-Grade Patterns",
    description:
      "Landyze follows industry standards — modern architecture, reusable UI, real performance.",
  },
  {
    icon: "Goal",
    title: "Easy Customization",
    description:
      "Modular section layout lets your team swap, add, or edit blocks with no headaches.",
  },
  {
    icon: "PictureInPicture",
    title: "Professional Visuals",
    description:
      "Cards, spacing, and motion that communicate premium value to clients and customers.",
  },
  {
    icon: "MousePointerClick",
    title: "Optimized for Conversion",
    description:
      "Section hierarchy and CTA patterns designed for demo/sales pipelines or agency leads.",
  },
  {
    icon: "Newspaper",
    title: "Documented & Maintainable",
    description:
      "Clear boundaries, typed props, and extensible config mean your next dev onboards fast.",
  },
];

export const LayoutFeatureGridSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Landyze — everything you really need
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Landyze helps you deliver agency or SaaS projects quickly, safely, and with fewer product emergencies.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
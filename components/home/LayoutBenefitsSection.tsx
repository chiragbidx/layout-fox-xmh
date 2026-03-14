import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Ready for Launch",
    description:
      "Landyze's architecture gets your agency project, SaaS MVP, or client dashboard live in days.",
  },
  {
    icon: "LineChart",
    title: "Accelerated Revenue",
    description:
      "Jump instantly to product value — the platform handles boilerplate, env setup, and design system.",
  },
  {
    icon: "Wallet",
    title: "Efficient Budgets",
    description:
      "Stop reinventing auth, landing flows, or UI scaffolding. Get proven code, polish, and support.",
  },
  {
    icon: "Sparkle",
    title: "First-Class UX",
    description:
      "Sections adapt for your agency's brand. Modern theme, dark mode, and accessible defaults built-in.",
  },
];

export const LayoutBenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Why Landyze</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The starter that grows with your agency
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Built for founders and agencies who need real production security, flexibility, and performance — not a toy template you'll need to rip out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
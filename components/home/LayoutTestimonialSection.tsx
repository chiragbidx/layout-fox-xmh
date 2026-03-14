"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/demo-img.jpg",
    name: "Aarav Shah",
    userName: "Agency Founder, FinchFlow",
    comment:
      "Landyze helped us launch an agency portal in record time. The team moved twice as fast, and clients loved the polish.",
    rating: 5.0,
  },
  {
    image: "/demo-img.jpg",
    name: "Maya Patel",
    userName: "Lead Product Designer, OrbitStudio",
    comment:
      "The structure and section system in Landyze made it painless to deliver a professional onboarding site for our agency.",
    rating: 4.8,
  },
  {
    image: "/demo-img.jpg",
    name: "Nikhil Rao",
    userName: "CTO, TeamForge",
    comment:
      "We transitioned to Landyze and instantly got a better developer workflow — less refactor, happier clients, beautiful UI.",
    rating: 4.9,
  },
  {
    image: "/demo-img.jpg",
    name: "Emma Brooks",
    userName: "Head of Growth, Nimbus.io",
    comment:
      "Conversion rates jumped after we started using Landyze’s CTA-driven layout. The agency site finally feels as good as our SaaS.",
    rating: 5.0,
  },
  {
    image: "/demo-img.jpg",
    name: "Daniel Kim",
    userName: "Engineering Manager, PulseOps",
    comment:
      "I was able to onboard new engineers right away with Landyze. Docs, code, layout — everything is truly maintainable.",
    rating: 5.0,
  },
  {
    image: "/demo-img.jpg",
    name: "Sofia Green",
    userName: "Co-founder, LaunchPad AI",
    comment:
      "Exactly what we needed for our SaaS MVP: clean, extensible, and agency-class design with a dev-friendly foundation.",
    rating: 4.9,
  },
];

export const LayoutTestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Agencies & teams moving faster with Landyze
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
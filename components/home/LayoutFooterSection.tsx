import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const LayoutFooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

              <h3 className="text-2xl">Landyze</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="mailto:hi@chirag.co" className="opacity-60 hover:opacity-100">
                hi@chirag.co
              </Link>
            </div>

            <div>
              <Link href="https://github.com/" className="opacity-60 hover:opacity-100">
                Github
              </Link>
            </div>

            <div>
              <Link href="https://x.com" className="opacity-60 hover:opacity-100">
                X / Twitter
              </Link>
            </div>

            <div>
              <Link href="https://discord.com" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <div>
              <Link href="#features" className="opacity-60 hover:opacity-100">
                Features
              </Link>
            </div>

            <div>
              <Link href="#pricing" className="opacity-60 hover:opacity-100">
                Pricing
              </Link>
            </div>

            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="https://nextjs.org/docs" className="opacity-60 hover:opacity-100">
                Docs
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="https://github.com/" className="opacity-60 hover:opacity-100">
                GitHub
              </Link>
            </div>

            <div>
              <Link href="https://discord.com" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>

            <div>
              <Link href="https://x.com" className="opacity-60 hover:opacity-100">
                X
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section>
          <h3>
            &copy; 2026 Landyze — minimal Next.js Agency app starter, by Chirag Dodiya.
            <span className="ml-2">
              <Link
                target="_blank"
                href="https://nextjs.org"
                className="text-primary transition-all border-primary hover:border-b-2 ml-1"
              >
                Built on Next.js
              </Link>
              {" • "}
              <Link
                target="_blank"
                href="https://vercel.com/new"
                className="text-indigo-400 hover:border-b-2 border-indigo-400 ml-1"
              >
                Deploy on Vercel
              </Link>
              {" • "}
              <Link
                target="_blank"
                href="https://railway.app"
                className="text-orange-400 hover:border-b-2 border-orange-300 ml-1"
              >
                Powered by Railway
              </Link>
            </span>
          </h3>
        </section>
      </div>
    </footer>
  );
};
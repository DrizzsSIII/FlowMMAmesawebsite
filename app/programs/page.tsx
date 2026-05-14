import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProgramLogoCard from "@/components/ProgramLogoCard";
import ProgramsSharedCTA from "@/components/ProgramsSharedCTA";
import { PROGRAMS } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs — MMA, BJJ, Muay Thai & Kids Classes",
  description:
    "Explore MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids martial arts programs in Mesa, AZ. All skill levels welcome. Flow MMA Academy.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Train at Flow MMA"
        title="PROGRAMS"
        description="Brazilian Jiu-Jitsu, Muay Thai, Mixed Martial Arts, and Kids Classes."
      />

      {PROGRAMS.map((program, i) => {
        const bg = i % 2 === 0 ? "bg-flow-black" : "bg-flow-dark";
        const border = program.accent === "teal" ? "border-flow-teal/10" : "border-flow-orange/10";

        return (
          <section
            key={program.id}
            id={program.id}
            className={`border-b ${border} ${bg} py-24 lg:py-32`}
          >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <ProgramLogoCard program={program} size="page" />
            </div>
          </section>
        );
      })}

      <section className="border-t border-white/8 bg-flow-dark py-20 lg:py-28">
        <ProgramsSharedCTA variant="featured" />
      </section>
    </>
  );
}

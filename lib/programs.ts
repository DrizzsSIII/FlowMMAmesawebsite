/** Shared program copy and logo paths (assets under /public/images/programs/). */

export type ProgramAccent = "orange" | "teal";

export interface ProgramDefinition {
  id:          string;
  title:       string;
  description: string;
  image:       string;
  accent:      ProgramAccent;
}

export const PROGRAMS: ProgramDefinition[] = [
  {
    id:          "bjj",
    title:       "Brazilian Jiu-Jitsu",
    description:
      "Learn grappling, submissions, and positional control in a structured class environment.",
    image:       "/images/programs/brazilian-jiu-jitsu-logo.png",
    accent:      "orange",
  },
  {
    id:          "muay-thai",
    title:       "Muay Thai",
    description:
      "Develop striking skills including punches, kicks, elbows, and knees while improving conditioning and technique.",
    image:       "/images/programs/muay-thai-logo.png",
    accent:      "teal",
  },
  {
    id:          "mma",
    title:       "Mixed Martial Arts",
    description:
      "Combine striking and grappling into a complete system designed for both competition and general training.",
    image:       "/images/programs/mixed-martial-arts-logo.png",
    accent:      "orange",
  },
  {
    id:          "kids",
    title:       "Kids Classes",
    description:
      "Classes focused on helping kids build confidence, discipline, and fitness in a structured and supportive setting.",
    image:       "/images/programs/kids-classes-logo.png",
    accent:      "teal",
  },
];

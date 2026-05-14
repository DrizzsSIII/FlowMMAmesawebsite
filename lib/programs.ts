/** Shared program copy and logo paths (assets under /public/images/programs/). */

export type ProgramAccent = "orange" | "teal";

export interface ProgramDefinition {
  id:               string;
  title:            string;
  description:      string;
  /** Asset under /public; omit if wrong/missing so a labeled placeholder is shown instead. */
  image?:           string;
  /** Shown when `image` is omitted or fails to load (no generic “program logo” copy). */
  placeholderLabel: string;
  accent:           ProgramAccent;
}

export const PROGRAMS: ProgramDefinition[] = [
  {
    id:               "bjj",
    title:            "Brazilian Jiu-Jitsu",
    description:
      "Learn grappling, submissions, and positional control in a structured class environment.",
    // When a distinct BJJ asset exists at this path (not a duplicate of MMA), set:
    // image: "/images/programs/brazilian-jiu-jitsu-logo.png",
    placeholderLabel: "Brazilian Jiu-Jitsu image coming soon",
    accent:           "orange",
  },
  {
    id:               "muay-thai",
    title:            "Muay Thai",
    description:
      "Develop striking skills including punches, kicks, elbows, and knees while improving conditioning and technique.",
    image:            "/images/programs/muay-thai-logo.png",
    placeholderLabel: "Muay Thai image coming soon",
    accent:           "teal",
  },
  {
    id:               "mma",
    title:            "Mixed Martial Arts",
    description:
      "Combine striking and grappling into a complete system designed for both competition and general training.",
    image:            "/images/programs/mixed-martial-arts-logo.png",
    placeholderLabel: "Mixed Martial Arts image coming soon",
    accent:           "orange",
  },
  {
    id:               "kids",
    title:            "Kids Classes",
    description:
      "Classes focused on helping kids build confidence, discipline, and fitness in a structured and supportive setting.",
    placeholderLabel: "Kids Classes image coming soon",
    accent:           "teal",
  },
];

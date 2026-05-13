import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Class Schedule — Weekly MMA, BJJ & Muay Thai Times",
  description:
    "View the weekly class schedule for MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids classes at Flow MMA Academy in Mesa, AZ.",
};

type ClassEntry = {
  time: string;
  name: string;
  level: string;
  type: "mma" | "bjj" | "muay-thai" | "kids" | "open";
};

type DaySchedule = {
  day: string;
  full: string;
  classes: ClassEntry[];
};

const schedule: DaySchedule[] = [
  {
    day: "Mon",
    full: "Monday",
    classes: [
      { time: "6:00 AM", name: "MMA Fundamentals", level: "All Levels", type: "mma" },
      { time: "12:00 PM", name: "BJJ Noon Class", level: "All Levels", type: "bjj" },
      { time: "5:00 PM", name: "Kids MMA", level: "Ages 5–15", type: "kids" },
      { time: "7:00 PM", name: "Muay Thai", level: "All Levels", type: "muay-thai" },
    ],
  },
  {
    day: "Tue",
    full: "Tuesday",
    classes: [
      { time: "6:00 AM", name: "Muay Thai", level: "All Levels", type: "muay-thai" },
      { time: "12:00 PM", name: "BJJ Noon Class", level: "All Levels", type: "bjj" },
      { time: "5:00 PM", name: "Kids BJJ", level: "Ages 5–15", type: "kids" },
      { time: "6:30 PM", name: "BJJ Intermediate", level: "White–Blue Belt", type: "bjj" },
      { time: "7:30 PM", name: "MMA", level: "All Levels", type: "mma" },
    ],
  },
  {
    day: "Wed",
    full: "Wednesday",
    classes: [
      { time: "6:00 AM", name: "MMA", level: "All Levels", type: "mma" },
      { time: "12:00 PM", name: "Muay Thai", level: "All Levels", type: "muay-thai" },
      { time: "5:00 PM", name: "Kids MMA", level: "Ages 5–15", type: "kids" },
      { time: "7:00 PM", name: "BJJ Advanced", level: "Blue Belt+", type: "bjj" },
    ],
  },
  {
    day: "Thu",
    full: "Thursday",
    classes: [
      { time: "6:00 AM", name: "BJJ", level: "All Levels", type: "bjj" },
      { time: "12:00 PM", name: "MMA Fundamentals", level: "All Levels", type: "mma" },
      { time: "5:00 PM", name: "Kids Muay Thai", level: "Ages 5–15", type: "kids" },
      { time: "6:30 PM", name: "Muay Thai", level: "All Levels", type: "muay-thai" },
      { time: "7:30 PM", name: "MMA Sparring", level: "Intermediate+", type: "mma" },
    ],
  },
  {
    day: "Fri",
    full: "Friday",
    classes: [
      { time: "6:00 AM", name: "MMA", level: "All Levels", type: "mma" },
      { time: "12:00 PM", name: "BJJ Noon", level: "All Levels", type: "bjj" },
      { time: "5:00 PM", name: "Kids Classes", level: "Ages 5–15", type: "kids" },
      { time: "6:00 PM", name: "Open Mat", level: "All Welcome", type: "open" },
    ],
  },
  {
    day: "Sat",
    full: "Saturday",
    classes: [
      { time: "9:00 AM", name: "Kids MMA", level: "Ages 5–15", type: "kids" },
      { time: "10:00 AM", name: "BJJ All Levels", level: "All Levels", type: "bjj" },
      { time: "11:00 AM", name: "Open Mat", level: "All Welcome", type: "open" },
      { time: "12:00 PM", name: "Muay Thai", level: "All Levels", type: "muay-thai" },
    ],
  },
  {
    day: "Sun",
    full: "Sunday",
    classes: [
      { time: "10:00 AM", name: "Open Mat", level: "All Welcome", type: "open" },
      { time: "11:00 AM", name: "BJJ Fundamentals", level: "Beginners", type: "bjj" },
    ],
  },
];

const typeColors: Record<string, string> = {
  mma: "bg-brand-red/15 border-brand-red/30 text-brand-red",
  bjj: "bg-blue-500/15 border-blue-500/30 text-blue-400",
  "muay-thai": "bg-yellow-500/15 border-yellow-500/30 text-yellow-400",
  kids: "bg-green-500/15 border-green-500/30 text-green-400",
  open: "bg-purple-500/15 border-purple-500/30 text-purple-400",
};

const typeLabels: Record<string, string> = {
  mma: "MMA",
  bjj: "BJJ",
  "muay-thai": "Muay Thai",
  kids: "Kids",
  open: "Open Mat",
};

export default function SchedulePage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-red/8 blur-[160px] rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
            Plan Your Week
          </p>
          <h1 className="font-display font-900 text-5xl lg:text-8xl uppercase tracking-tightest text-white leading-none mb-6">
            Class Schedule
          </h1>
          <p className="text-brand-white/60 text-lg max-w-2xl mb-8">
            Classes run 6 days a week with early morning, noon, and evening
            options to fit any schedule. All classes are drop-in friendly.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3">
            {Object.entries(typeLabels).map(([type, label]) => (
              <span
                key={type}
                className={`px-3 py-1.5 text-xs font-display font-700 uppercase tracking-wider rounded-full border ${typeColors[type]}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile card layout / Desktop grid */}
      <section className="py-12 lg:py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Mobile: stacked cards */}
          <div className="lg:hidden flex flex-col gap-6">
            {schedule.map((day) => (
              <div key={day.day} className="bg-brand-gray-mid border border-white/10 rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-white/10 bg-brand-gray-light/30">
                  <h2 className="font-display font-900 text-xl uppercase text-white">
                    {day.full}
                  </h2>
                </div>
                <div className="divide-y divide-white/5">
                  {day.classes.map((cls) => (
                    <div key={`${day.day}-${cls.time}`} className="flex items-center gap-4 px-5 py-3.5">
                      <div className="w-16 shrink-0">
                        <p className="text-brand-white/50 text-xs font-body">{cls.time}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-brand-white text-sm font-body font-500">{cls.name}</p>
                        <p className="text-brand-white/40 text-xs">{cls.level}</p>
                      </div>
                      <span className={`px-2 py-0.5 text-xs font-display font-700 uppercase rounded-full border shrink-0 ${typeColors[cls.type]}`}>
                        {typeLabels[cls.type]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 7-column grid */}
          <div className="hidden lg:grid grid-cols-7 gap-4">
            {schedule.map((day) => (
              <div key={day.day} className="bg-brand-gray-mid border border-white/10 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10 text-center">
                  <h2 className="font-display font-900 text-xl uppercase text-white">{day.day}</h2>
                  <p className="text-brand-white/40 text-xs">{day.full}</p>
                </div>
                <div className="flex flex-col gap-2 p-3">
                  {day.classes.map((cls) => (
                    <div
                      key={`${day.day}-${cls.time}`}
                      className={`rounded-lg border p-2.5 ${typeColors[cls.type]}`}
                    >
                      <p className="font-body font-600 text-xs leading-tight mb-0.5">{cls.name}</p>
                      <p className="opacity-70 text-xs">{cls.time}</p>
                      <p className="opacity-60 text-xs mt-1">{cls.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="pb-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="bg-brand-gray-mid border border-white/10 rounded-xl p-6 max-w-2xl">
            <h3 className="font-display font-800 text-lg uppercase tracking-tight text-brand-red mb-2">
              First Time?
            </h3>
            <p className="text-brand-white/60 text-sm leading-relaxed">
              Just show up 10 minutes early for any class. We&apos;ll pair you
              with an instructor who will get you settled in. Your first class
              is completely free — no signup required.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Come Try a Class"
        subtext="All skill levels. No commitment. Just show up."
        ctaLabel="Start Free Trial"
        variant="red"
      />
    </>
  );
}

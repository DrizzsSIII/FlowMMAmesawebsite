"use client";

import Image from "next/image";
import { useState } from "react";

export default function ScheduleImageBlock() {
  const [src, setSrc] = useState("/images/flow-schedule-branded.png");
  const [failedOnce, setFailedOnce] = useState(false);

  return (
    <Image
      src={src}
      alt="Flow MMA Academy weekly class schedule"
      width={1200}
      height={641}
      className="w-full h-auto"
      priority={false}
      onError={() => {
        if (!failedOnce) {
          setFailedOnce(true);
          setSrc("/images/schedule.png");
        }
      }}
    />
  );
}

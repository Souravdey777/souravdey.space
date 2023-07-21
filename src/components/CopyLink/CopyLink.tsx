"use client";

import { Link2 } from "lucide-react";
import React from "react";

function CopyLink({ link }: { link: string }) {
  return (
    <Link2
      onClick={() => {
        navigator.clipboard.writeText(link);
      }}
      color="var(--foreground-hex)"
      size={24}
    />
  );
}

export default CopyLink;

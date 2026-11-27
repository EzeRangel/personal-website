"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

type NavItem = { key: string; label: string; href: string };

function Links({ items, current }: { items: NavItem[]; current: string | null }) {
  return items.map((item) => (
    <Link key={item.key} href={item.href} aria-current={item.key === current ? "page" : undefined}>
      {item.label}
    </Link>
  ));
}

// Marks Work on /work and every /work/[slug] (and Writing, About the same way).
function LiveLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname() ?? "/";
  const rest = pathname.replace(/^\/(en|es)(?=\/|$)/, "");
  const current = rest.match(/^\/(work|writing|about)(?=\/|$)/)?.[1] ?? null;
  return <Links items={items} current={current} />;
}

export function NavLinks({ items }: { items: NavItem[] }) {
  return (
    <Suspense fallback={<Links items={items} current={null} />}>
      <LiveLinks items={items} />
    </Suspense>
  );
}

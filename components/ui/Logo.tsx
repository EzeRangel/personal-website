import Link from "next/link";
import { site } from "@/config/site";
import { Cursor } from "@/components/ui/Cursor";

export function Logo({ href }: { href: string }) {
  return (
    <Link className="er-logo" href={href}>
      {site.name}
      <Cursor />
    </Link>
  );
}

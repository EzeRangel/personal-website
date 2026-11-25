"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@ui-sdk/react/dialog";
import { Logo } from "@/components/ui/Logo";

type MobileMenuProps = {
  homeHref: string;
  navLabel: string;
  labels: { open: string; close: string };
  items: { key: string; label: string; href: string }[];
};

export function MobileMenu({ homeHref, navLabel, labels, items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pendingHash = useRef<string | null>(null);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (next) pendingHash.current = null;
        setOpen(next);
      }}
      onOpenChangeComplete={(isOpen) => {
        if (isOpen || !pendingHash.current) return;
        // The modal locks scrolling, so in-page links scroll once the dialog has closed.
        window.history.pushState(null, "", `#${pendingHash.current}`);
        document.getElementById(pendingHash.current)?.scrollIntoView();
      }}
    >
      <DialogTrigger className="er-toggle er-menu-btn">{labels.open}</DialogTrigger>
      <DialogContent
        className="er-mobile-menu"
        finalFocus={() => (pendingHash.current ? document.getElementById(pendingHash.current) : null)}
      >
        <div className="pg">
          <div className="er-header">
            <Logo href={homeHref} />
            <DialogClose className="er-toggle">{labels.close}</DialogClose>
          </div>
          <DialogTitle className="er-sr">{labels.open}</DialogTitle>
          <nav className="er-mobile-menu__nav" aria-label={navLabel}>
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={(event) => {
                  if (item.href.startsWith("#")) {
                    event.preventDefault();
                    pendingHash.current = item.href.slice(1);
                  }
                  setOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
}

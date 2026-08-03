"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/resources";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3 px-4 py-12 sm:px-6">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border transition ${
              isOpen
                ? "border-[var(--accent)]/30 bg-[var(--paper-elevated)]"
                : "border-[var(--line)] bg-[var(--paper-elevated)]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-white sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-[var(--ink-muted)] transition-transform ${
                  isOpen ? "rotate-180 text-[var(--accent)]" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

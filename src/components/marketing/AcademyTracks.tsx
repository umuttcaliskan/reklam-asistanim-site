"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { ACADEMY_TRACKS } from "@/lib/resources";

export function AcademyTracks() {
  const [activeTrack, setActiveTrack] = useState(ACADEMY_TRACKS[0].id);
  const track = ACADEMY_TRACKS.find((t) => t.id === activeTrack) ?? ACADEMY_TRACKS[0];
  const [activeVideo, setActiveVideo] = useState(0);
  const video = track.videos[Math.min(activeVideo, track.videos.length - 1)];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap gap-2">
        {ACADEMY_TRACKS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              setActiveTrack(t.id);
              setActiveVideo(0);
            }}
            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
              t.id === activeTrack
                ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                : "border-[var(--line)] bg-white text-[var(--ink-muted)] hover:border-emerald-200"
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-black shadow-[var(--shadow)]">
              <div className="aspect-video">
                <iframe
                  key={`${track.id}-${activeVideo}`}
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
            <h2 className="mt-4 text-xl font-bold text-[var(--ink)]">{video.title}</h2>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              {track.title} · {track.level} · {video.duration}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
              {track.description}
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white p-3">
            <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              Bu setteki videolar ({track.videos.length})
            </p>
            <div className="space-y-1">
              {track.videos.map((v, i) => (
                <button
                  key={v.title}
                  type="button"
                  onClick={() => setActiveVideo(i)}
                  className={`flex w-full items-start gap-2.5 rounded-xl px-3 py-2.5 text-left transition ${
                    i === activeVideo
                      ? "bg-emerald-50 ring-1 ring-emerald-100"
                      : "hover:bg-[var(--paper)]"
                  }`}
                >
                  <PlayCircle
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      i === activeVideo ? "text-[var(--accent-hover)]" : "text-[var(--ink-muted)]"
                    }`}
                  />
                  <span>
                    <span
                      className={`block text-sm font-medium ${
                        i === activeVideo ? "text-[var(--accent-deep)]" : "text-[var(--ink)]"
                      }`}
                    >
                      {v.title}
                    </span>
                    <span className="block text-[11px] text-[var(--ink-muted)]">
                      {v.duration}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

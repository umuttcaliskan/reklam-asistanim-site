import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

/** Panel ekran görüntüsünü tarayıcı penceresi içinde gösterir. */
export function BrowserFrame({
  src,
  alt,
  url = "app.reklamasistanim.com",
  className,
  sizes = "(min-width: 1024px) 1024px, 100vw",
  eager = false,
}: {
  src: StaticImageData;
  alt: string;
  url?: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] shadow-2xl shadow-black/60 sm:rounded-2xl",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 sm:px-4 sm:py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="mx-auto truncate rounded-md bg-white/[0.06] px-3 py-0.5 text-[11px] text-white/50">
          {url}
        </span>
        <span className="w-[42px]" aria-hidden />
      </div>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Panelden kesilmiş tek bir kart (öneri, plan bölümü vb.). */
export function CardShot({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 420px, 90vw",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-black/5",
        className
      )}
    >
      <Image src={src} alt={alt} sizes={sizes} className="block h-auto w-full" />
    </div>
  );
}

/** Mobil uygulama ekran görüntüsü için telefon çerçevesi. */
export function PhoneFrame({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[2.4rem] border border-white/15 bg-[#05080a] p-2 shadow-2xl shadow-black/70",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        sizes="(min-width: 1024px) 280px, 60vw"
        className="block h-auto w-full rounded-[2rem]"
      />
    </div>
  );
}

import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="py-6 md:px-8 mt-8 md:py-0 border-t">
      <div className="container flex flex-col m-auto max-w-md items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={SITE_CONFIG.links.website}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            fomazov
          </a>
          . The source code is available on{" "}
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

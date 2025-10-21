import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo_full.png"
            alt="Brewfather"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="https://docs.brewfather.app/changelog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Changelog
          </Link>
          <Link
            href="https://github.com/warpkode/brewfather-app/issues"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Issue tracker
          </Link>
          <Link
            href="https://discord.gg/invite/brewfather"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </Link>
          <Link
            href="https://docs.brewfather.app/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </Link>
          <Link
            href="https://web.brewfather.app/"
            className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            Open APP
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}

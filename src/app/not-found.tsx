import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-[8rem] font-heading font-bold text-accent leading-none mb-4">404</div>
        <h1 className="text-h2 font-heading font-bold text-ink mb-3">Page Not Found</h1>
        <p className="text-ink-secondary mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/" className="btn-primary inline-flex">
            <span>Go Home</span>
          </Link>
          <Link href="/contact" className="btn-text-link">
            Contact Us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

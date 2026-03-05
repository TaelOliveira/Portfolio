import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center py-4 border-t border-default-200">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href={siteConfig.links.linkedin}
          title="LinkedIn"
        >
          <span className="text-default-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
        </Link>
      </footer>
    </div>
  );
}

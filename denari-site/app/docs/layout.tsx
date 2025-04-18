import { Metadata } from "next"
import { DocSidebar } from "@/components/docs/DocSidebar"
import { DocFooter } from "@/components/docs/DocFooter"

export const metadata: Metadata = {
  title: "Denari Documentation",
  description: "Learn about Denari, the inflation-indexed cryptocurrency.",
}

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <DocSidebar />
          </div>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
          <div className="mx-auto min-w-0 max-w-3xl flex-1 prose prose-slate dark:prose-invert">
            {children}
            <DocFooter />
          </div>
        </main>
      </div>
    </div>
  )
} 
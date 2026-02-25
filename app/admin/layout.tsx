import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-slate-200 antialiased min-h-screen selection:bg-primary selection:text-white">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-y-auto relative bg-background-dark">
                <Header />
                {children}
            </main>
        </div>
    )
}

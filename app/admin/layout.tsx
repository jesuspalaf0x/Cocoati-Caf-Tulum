import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-slate-300">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden relative">
                <Header />
                <div className="flex-1 overflow-y-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}

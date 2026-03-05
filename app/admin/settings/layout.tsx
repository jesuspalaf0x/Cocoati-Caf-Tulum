import SettingsSidebar from './SettingsSidebar'

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col md:flex-row gap-8 h-full">
            <SettingsSidebar />

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 bg-surface-dark rounded-2xl border border-slate-800 p-8 shadow-sm">
                {children}
            </main>
        </div>
    )
}

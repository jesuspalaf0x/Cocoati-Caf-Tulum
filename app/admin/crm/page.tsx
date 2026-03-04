'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

interface Profile {
    id: string
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    membership_level: string | null
    stamps_count: number
    created_at: string
}

interface CRMLevel {
    id: string
    name: string
    color: string
    icon: string
}

export default function CRMPage() {
    const supabase = createClient()
    const [profiles, setProfiles] = useState<Profile[]>([])
    const [levels, setLevels] = useState<CRMLevel[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [isSaving, setIsSaving] = useState(false)

    // New Member Form State
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [selectedLevel, setSelectedLevel] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)

        // Fetch CRM Levels
        const { data: levelsData } = await supabase.from('crm_levels').select('*').order('created_at', { ascending: true })
        if (levelsData) {
            setLevels(levelsData)
            // Set default level to the first one available (likely Aspirante Imperial)
            if (levelsData.length > 0) setSelectedLevel(levelsData[0].name)
        }

        // Fetch Profiles
        const { data: profilesData } = await supabase.from('profiles').select('*').order('created_at', { ascending: false })
        if (profilesData) setProfiles(profilesData)

        setLoading(false)
    }

    const filteredProfiles = profiles.filter(profile => {
        const fullName = `${profile.first_name || ''} ${profile.last_name || ''}`.toLowerCase()
        return fullName.includes(searchTerm.toLowerCase()) || (profile.email && profile.email.toLowerCase().includes(searchTerm.toLowerCase()))
    })

    const handleCreateMember = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!firstName || !lastName || !email) return alert('Por favor, completa los campos obligatorios.')

        setIsSaving(true)

        // Note: For a fully auth-integrated system, new profiles usually come from auth.users creation. 
        // Assuming we are manually inserting into profiles for CRM purposes just tracking them in the DB:
        const { data, error } = await supabase.from('profiles').insert({
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone || null,
            membership_level: selectedLevel.toLowerCase() // Normalizing level name for styling
        })

        if (error) {
            alert('Error al registrar: ' + error.message)
            setIsSaving(false)
            return
        }

        // Show Success View
        setSuccessMessage('El nuevo miembro imperial ha sido registrado exitosamente.')
        fetchData() // Refresh list
        setIsSaving(false)

        // Reset form inputs map
        setTimeout(() => {
            setIsModalOpen(false)
            setSuccessMessage('')
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
        }, 2000)
    }

    // Helper to get styling for levels dynamically
    const getLevelStyle = (levelName: string | null) => {
        if (!levelName) return { bg: 'bg-slate-700/30', text: 'text-slate-400', border: 'border-slate-700/50', icon: 'shield' }

        const matchedLevel = levels.find(l => l.name.toLowerCase() === levelName.toLowerCase())
        if (matchedLevel) {
            return {
                bg: `bg-[${matchedLevel.color}20]`, // Fallback for raw tailwind execution, but inline styled below
                text: `text-[${matchedLevel.color}]`,
                border: `border-[${matchedLevel.color}40]`,
                icon: matchedLevel.icon,
                colorHex: matchedLevel.color
            }
        }

        // Fallbacks based on original design
        if (levelName.toLowerCase().includes('imperator')) return { colorHex: '#FFD700', icon: 'crown' }
        if (levelName.toLowerCase().includes('centurión') || levelName.toLowerCase().includes('centurion')) return { colorHex: '#a855f7', icon: 'military_tech' }
        return { colorHex: '#94a3b8', icon: 'shield' }
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                        <span className="material-symbols-outlined text-gold-500">groups</span>
                        Directorio de Miembros
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-gold-900/30 text-gold-500 text-xs font-medium border border-gold-900/50">
                            Total: {profiles.length}
                        </span>
                        <Link href="/admin/crm/levels" className="text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">settings</span>
                            Configurar Niveles
                        </Link>
                    </div>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative group flex-1 md:flex-initial">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">search</span>
                        <input
                            type="text"
                            placeholder="Buscar por nombre o email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-surface-dark border border-slate-800 rounded-lg text-slate-200 text-sm focus:outline-none focus:border-gold-500 md:w-64 transition-colors"
                        />
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white text-sm font-semibold rounded-lg hover:shadow-glow transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                        <span className="material-symbols-outlined text-[18px]">person_add</span>
                        Nuevo Miembro
                    </button>
                </div>
            </div>

            <div className="bg-surface-dark rounded-xl border border-slate-800 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-black/20 text-xs uppercase tracking-wider text-slate-500 font-medium">
                                <th className="px-6 py-4">Miembro</th>
                                <th className="px-6 py-4">Contacto</th>
                                <th className="px-6 py-4">Nivel</th>
                                <th className="px-6 py-4">Sellos Imperiales</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gold-500 mx-auto mb-3"></div>
                                        Cargando directorio...
                                    </td>
                                </tr>
                            ) : filteredProfiles.length > 0 ? (
                                filteredProfiles.map((profile) => {
                                    const style = getLevelStyle(profile.membership_level)
                                    return (
                                        <tr key={profile.id} className="group hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-gold-500 font-serif font-bold border border-slate-700">
                                                        {profile.first_name ? profile.first_name[0] : 'U'}{profile.last_name ? profile.last_name[0] : ''}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-white group-hover:text-gold-500 transition-colors">
                                                            {profile.first_name} {profile.last_name}
                                                        </div>
                                                        <div className="text-xs text-slate-500">Miembro desde {new Date(profile.created_at).getFullYear()}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-slate-300">{profile.email}</div>
                                                <div className="text-xs text-slate-500">{profile.phone || '--'}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border"
                                                    style={{
                                                        backgroundColor: `${style.colorHex}15`,
                                                        color: style.colorHex,
                                                        borderColor: `${style.colorHex}30`
                                                    }}
                                                >
                                                    <span className="material-symbols-outlined text-[14px]">
                                                        {style.icon}
                                                    </span>
                                                    <span className="capitalize">{profile.membership_level || 'Aspirante'}</span>
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="w-full max-w-[140px]">
                                                    <div className="flex justify-between text-xs mb-1.5">
                                                        <span className="text-gold-500 font-bold">{profile.stamps_count || 0}</span>
                                                        <span className="text-slate-600">/ 10</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                                        <div className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full" style={{ width: `${(profile.stamps_count || 0) * 10}%` }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Link
                                                    href={`/admin/crm/${profile.id}`}
                                                    className="text-sm text-slate-400 hover:text-white transition-colors border border-slate-700 hover:border-slate-500 rounded px-3 py-1.5"
                                                >
                                                    Ver Detalle
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                        No se encontraron miembros para &quot;{searchTerm}&quot;.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Nuevo Miembro Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-surface-dark w-full max-w-lg rounded-2xl shadow-2xl border border-slate-700 overflow-hidden relative animate-in zoom-in-95 duration-300">
                        {successMessage ? (
                            <div className="p-12 text-center">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                    <span className="material-symbols-outlined text-4xl text-green-400">check_circle</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-2">¡Bienvenido al Imperio!</h3>
                                <p className="text-slate-400">{successMessage}</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gold-500">person_add</span>
                                        Añadir al Directorio
                                    </h3>
                                    <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800/50">
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>

                                <form onSubmit={handleCreateMember} className="p-8 space-y-5">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre *</label>
                                            <input
                                                type="text"
                                                value={firstName}
                                                onChange={e => setFirstName(e.target.value)}
                                                className="w-full px-4 py-3 bg-black/30 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
                                                placeholder="Ej. Marco"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Apellido *</label>
                                            <input
                                                type="text"
                                                value={lastName}
                                                onChange={e => setLastName(e.target.value)}
                                                className="w-full px-4 py-3 bg-black/30 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
                                                placeholder="Ej. Aurelio"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Correo Electrónico *</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 bg-black/30 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
                                            placeholder="imperator@roma.com"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teléfono</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                                className="w-full px-4 py-3 bg-black/30 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
                                                placeholder="+52 984..."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nivel Asignado</label>
                                            <div className="relative">
                                                <select
                                                    value={selectedLevel}
                                                    onChange={e => setSelectedLevel(e.target.value)}
                                                    className="w-full px-4 py-3 bg-black/30 border border-slate-700 rounded-lg text-white appearance-none focus:outline-none focus:border-gold-500 cursor-pointer"
                                                >
                                                    {levels.map(lvl => (
                                                        <option key={lvl.id} value={lvl.name}>{lvl.name}</option>
                                                    ))}
                                                </select>
                                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-800 mt-6 flex justify-end gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(false)}
                                            className="px-5 py-2.5 text-slate-400 hover:text-white font-medium transition-colors"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSaving}
                                            className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-lg shadow-lg shadow-gold-500/20 transition-all disabled:opacity-50 flex items-center gap-2"
                                        >
                                            {isSaving ? (
                                                <><span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Guardando...</>
                                            ) : (
                                                'Registrar Miembro'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

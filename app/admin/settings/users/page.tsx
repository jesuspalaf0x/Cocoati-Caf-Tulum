'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Profile {
    id: string
    first_name: string | null
    last_name: string | null
    email: string | null
    role: string
    created_at: string
}

export default function UsersPage() {
    const supabase = createClient()
    const [users, setUsers] = useState<Profile[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching users:', error)
        } else {
            setUsers(data || [])
        }
        setLoading(false)
    }

    const handleRoleChange = async (userId: string, newRole: string) => {
        const { error } = await supabase
            .from('profiles')
            .update({ role: newRole })
            .eq('id', userId)

        if (error) {
            alert('Error actualizando rol: ' + error.message)
        } else {
            fetchUsers()
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-white mb-2">Gestión de Usuarios</h2>
                    <p className="text-slate-400 text-sm">Administra el acceso y roles del personal del Dashboard.</p>
                </div>
                <button className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                    + Invitar Usuario
                </button>
            </div>

            {loading ? (
                <div className="text-center py-20 text-slate-500">Cargando usuarios...</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-700 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <th className="py-4 px-4">Usuario</th>
                                <th className="py-4 px-4">Email</th>
                                <th className="py-4 px-4">Rol</th>
                                <th className="py-4 px-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                                                {user.first_name ? user.first_name[0] : (user.email ? user.email[0].toUpperCase() : '?')}
                                            </div>
                                            <span className="font-medium text-white">
                                                {user.first_name} {user.last_name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-slate-400 text-sm">{user.email}</td>
                                    <td className="py-4 px-4">
                                        <select
                                            value={user.role || 'user'}
                                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                            className="bg-black/20 border border-slate-700 rounded px-2 py-1 text-xs text-white focus:border-gold-500 outline-none"
                                        >
                                            <option value="admin">Administrador</option>
                                            <option value="employee">Empleado</option>
                                            <option value="user">Usuario</option>
                                        </select>
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <button className="text-slate-500 hover:text-red-400 transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

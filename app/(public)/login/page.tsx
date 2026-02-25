'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            router.push('/admin')
            router.refresh()
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background-dark p-4">
            <div className="w-full max-w-md bg-surface-dark border border-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                    <div className="h-16 w-16 mx-auto bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-serif font-bold text-3xl shadow-glow mb-4">
                        C
                    </div>
                    <h1 className="text-2xl font-serif font-bold text-white tracking-wide">Acceso Imperial</h1>
                    <p className="text-slate-500 text-sm mt-2">Ingresa tus credenciales para gestionar el imperio.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold text-slate-500 tracking-wider">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/20 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600"
                            placeholder="emperador@cocoati.com"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold text-slate-500 tracking-wider">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/20 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-gold-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-gold-500/20 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                            'Ingresar'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

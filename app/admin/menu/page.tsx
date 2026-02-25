'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'

type Modifier = {
    name: string
    price: number
}

export default function MenuPage() {
    const supabase = createClient()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    // Form State
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Bebida')
    const [priceStandard, setPriceStandard] = useState('')
    const [priceMagnus, setPriceMagnus] = useState('')
    const [priceImperator, setPriceImperator] = useState('')

    // Modifiers State
    const [modifiers, setModifiers] = useState<Modifier[]>([])
    const [newModName, setNewModName] = useState('')
    const [newModPrice, setNewModPrice] = useState('')

    const handleAddModifier = () => {
        if (newModName && newModPrice) {
            setModifiers([...modifiers, { name: newModName, price: parseFloat(newModPrice) }])
            setNewModName('')
            setNewModPrice('')
        }
    }

    const handleRemoveModifier = (index: number) => {
        setModifiers(modifiers.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)

        const productData: any = {
            name,
            category,
            modifiers: JSON.stringify(modifiers),
        }

        if (category === 'Bebida') {
            productData.price_magnus = parseFloat(priceMagnus)
            productData.price_imperator = parseFloat(priceImperator)
            productData.price_standard = null
        } else {
            productData.price_standard = parseFloat(priceStandard)
            productData.price_magnus = null
            productData.price_imperator = null
        }

        const { error } = await supabase.from('products').insert(productData)

        if (!error) {
            setSuccess(true)
            // Reset form
            setName('')
            setPriceStandard('')
            setPriceMagnus('')
            setPriceImperator('')
            setModifiers([])
        } else {
            alert('Error al guardar: ' + error.message)
        }
        setLoading(false)
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif font-bold text-white">Gestión de Menú</h2>
                <span className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-500 text-xs font-bold border border-gold-500/20 uppercase tracking-widest">
                    Menú Pro
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Formulario */}
                <div className="bg-surface-dark p-8 rounded-2xl border border-slate-800 shadow-xl">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-500">add_circle</span>
                        Nuevo Producto
                    </h3>

                    {success && (
                        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm flex items-center gap-2">
                            <span className="material-symbols-outlined">check_circle</span>
                            Producto guardado correctamente en el Imperio.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nombre del Producto</label>
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full bg-black/20 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-600"
                                placeholder="Ej. Latte Vainilla Supremo"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Categoría</label>
                                <select
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    className="w-full bg-black/20 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                >
                                    <option value="Bebida">Bebida</option>
                                    <option value="Alimento">Alimento</option>
                                    <option value="Postre">Postre</option>
                                    <option value="Merch">Merch</option>
                                </select>
                            </div>
                        </div>

                        {/* Dynamic Prices */}
                        {category === 'Bebida' ? (
                            <div className="grid grid-cols-2 gap-4 p-4 bg-black/20 rounded-xl border border-slate-800/50">
                                <div>
                                    <label className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-2">Precio Magnus</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={priceMagnus}
                                            onChange={e => setPriceMagnus(e.target.value)}
                                            className="w-full bg-surface-dark border border-slate-700 rounded-lg pl-8 pr-4 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                            placeholder="0.00"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-2">Precio Imperator</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={priceImperator}
                                            onChange={e => setPriceImperator(e.target.value)}
                                            className="w-full bg-surface-dark border border-slate-700 rounded-lg pl-8 pr-4 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                            placeholder="0.00"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Precio Estándar</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={priceStandard}
                                        onChange={e => setPriceStandard(e.target.value)}
                                        className="w-full bg-black/20 border border-slate-800 rounded-lg pl-8 pr-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                        placeholder="0.00"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Modifiers Section */}
                        <div className="border-t border-slate-800 pt-6">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Modificadores (Opcional)</label>

                            <div className="flex gap-2 mb-4">
                                <input
                                    type="text"
                                    value={newModName}
                                    onChange={e => setNewModName(e.target.value)}
                                    className="flex-1 bg-black/20 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-gold-500"
                                    placeholder="Nombre (ej. Queso Extra)"
                                />
                                <div className="relative w-24">
                                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-xs">$</span>
                                    <input
                                        type="number"
                                        value={newModPrice}
                                        onChange={e => setNewModPrice(e.target.value)}
                                        className="w-full bg-black/20 border border-slate-800 rounded-lg pl-5 pr-2 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-gold-500"
                                        placeholder="0.00"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={handleAddModifier}
                                    className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm">add</span>
                                </button>
                            </div>

                            {modifiers.length > 0 && (
                                <div className="space-y-2">
                                    {modifiers.map((mod, idx) => (
                                        <div key={idx} className="flex justify-between items-center bg-black/20 px-3 py-2 rounded-lg border border-slate-800/50">
                                            <span className="text-sm text-slate-300">{mod.name}</span>
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-mono text-gold-500">+${mod.price.toFixed(2)}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveModifier(idx)}
                                                    className="text-slate-500 hover:text-red-400 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-sm">delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-gold-500/20 transition-all hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Guardando...' : 'Guardar Producto en Bóveda'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Preview / Instructions */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-gold-900/20 to-black p-6 rounded-2xl border border-gold-500/30">
                        <h4 className="text-gold-500 font-serif font-bold text-xl mb-2">Guía Imperial</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Utiliza este módulo para expandir el menú del imperio. Recuerda que las bebidas deben tener precios diferenciados para los tamaños Magnus e Imperator.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

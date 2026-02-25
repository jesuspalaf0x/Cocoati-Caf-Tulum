'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

type Modifier = {
    name: string
    price: number
}

type Product = {
    id: string
    created_at: string
    name: string
    category: string
    price_standard: number | null
    price_magnus: number | null
    price_imperator: number | null
    image_url?: string
}

export default function MenuPage() {
    const supabase = createClient()
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState<Product[]>([])
    const [view, setView] = useState<'table' | 'add'>('table')

    // Form State
    const [success, setSuccess] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Bebida')
    const [priceStandard, setPriceStandard] = useState('')
    const [priceMagnus, setPriceMagnus] = useState('')
    const [priceImperator, setPriceImperator] = useState('')

    // Modifiers State
    const [modifiers, setModifiers] = useState<Modifier[]>([])
    const [newModName, setNewModName] = useState('')
    const [newModPrice, setNewModPrice] = useState('')

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false })

        if (!error && data) {
            setProducts(data)
        }
        setLoading(false)
    }

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
        setIsSaving(true)
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
            // Refresh table
            fetchProducts()
            setTimeout(() => {
                setView('table')
                setSuccess(false)
            }, 1000)
        } else {
            alert('Error al guardar: ' + error.message)
        }
        setIsSaving(false)
    }

    if (view === 'add') {
        return (
            <div className="max-w-4xl mx-auto p-4 lg:p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-white">Nuevo Producto</h2>
                        <button onClick={() => setView('table')} className="text-sm text-gold-500 hover:underline mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            Volver al inventario
                        </button>
                    </div>
                </div>

                <div className="bg-surface-dark p-8 rounded-2xl border border-slate-800 shadow-xl">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-500">add_circle</span>
                        Añadir al Menú
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
                                disabled={isSaving}
                                className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-gold-500/20 transition-all hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSaving ? 'Guardando...' : 'Guardar Producto en Bóveda'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    // TABLE VIEW
    return (
        <div className="p-4 lg:p-12 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Gestión de Productos</h1>
                    <p className="text-slate-400">Administra el catálogo de productos disponibles en la aplicación.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <div className="relative group w-full sm:w-64">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </span>
                        <input className="w-full pl-10 pr-4 py-2.5 bg-surface-dark border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" placeholder="Buscar por nombre..." type="text" />
                    </div>
                    <div className="relative w-full sm:w-48">
                        <select className="w-full pl-4 pr-10 py-2.5 bg-surface-dark border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 appearance-none cursor-pointer">
                            <option value="">Todas las Categorías</option>
                            <option value="Bebida">Bebidas</option>
                            <option value="Alimento">Alimentos</option>
                            <option value="Postre">Postres</option>
                            <option value="Merch">Merch</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                            <span className="material-symbols-outlined text-lg">expand_more</span>
                        </span>
                    </div>
                    <button onClick={() => setView('add')} className="px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white text-sm font-bold rounded-lg shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        Añadir Nuevo
                    </button>
                </div>
            </div>

            <div className="bg-surface-dark rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black/20 border-b border-slate-700/50 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                                <th className="px-6 py-4 w-20">Imagen</th>
                                <th className="px-6 py-4">Producto</th>
                                <th className="px-6 py-4">Categoría</th>
                                <th className="px-6 py-4 text-center">Precio</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gold-500 mx-auto"></div>
                                        <p className="text-slate-500 text-sm mt-4">Sincronizando inventario con el Imperio...</p>
                                    </td>
                                </tr>
                            ) : products.length > 0 ? (
                                products.map((product) => (
                                    <tr key={product.id} className="group hover:bg-gold-500/5 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="h-12 w-12 rounded-lg bg-slate-800 border border-slate-700 overflow-hidden relative flex items-center justify-center">
                                                {product.image_url ? (
                                                    <img alt={product.name} className="h-full w-full object-cover" src={product.image_url} />
                                                ) : (
                                                    <span className="material-symbols-outlined text-slate-600">image</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-semibold text-white group-hover:text-gold-500 transition-colors">{product.name}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${product.category === 'Bebida' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                                    product.category === 'Postre' ? 'bg-pink-500/10 text-pink-400 border-pink-500/20' :
                                                        'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                }`}>
                                                {product.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {product.category === 'Bebida' ? (
                                                <div className="flex flex-col items-center justify-center gap-1">
                                                    <span className="text-xs text-slate-400 font-mono"><span className="text-slate-600">M:</span> ${product.price_magnus?.toFixed(2) || '0.00'}</span>
                                                    <span className="text-xs text-white font-mono font-bold"><span className="text-gold-500">I:</span> ${product.price_imperator?.toFixed(2) || '0.00'}</span>
                                                </div>
                                            ) : (
                                                <span className="text-sm text-white font-mono font-bold">${product.price_standard?.toFixed(2) || '0.00'}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                                Activo
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" title="Editar">
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-gold-500/10 rounded-lg transition-colors" title="Duplicar">
                                                    <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors" title="Eliminar">
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500 text-sm">
                                        No se encontraron productos en el menú.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between px-6 py-4 bg-black/20 border-t border-slate-800">
                    <div className="text-sm text-slate-400">
                        Mostrando <span className="font-medium text-white">{products.length}</span> resultados
                    </div>
                </div>
            </div>
        </div>
    )
}

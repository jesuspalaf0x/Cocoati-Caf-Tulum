'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import ProductCard from '@/components/ProductCard'

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
    description?: string
    label?: string
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

    // New Fields
    const [description, setDescription] = useState('')
    const [label, setLabel] = useState('none')
    const [image, setImage] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [currentStep, setCurrentStep] = useState(1)

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

    const handleNext = () => {
        if (currentStep === 1) {
            if (!name) {
                alert('Por favor agrega el nombre del producto.');
                return;
            }
            if (category === 'Bebida') {
                if (!priceMagnus || !priceImperator) {
                    alert('Por favor completa los precios de bebida.');
                    return;
                }
            } else {
                if (!priceStandard) {
                    alert('Por favor completa el precio estándar.');
                    return;
                }
            }
            setCurrentStep(2);
        } else if (currentStep === 2) {
            setCurrentStep(3);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setImage(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (currentStep !== 3) {
            handleNext();
            return;
        }

        setIsSaving(true)
        setSuccess(false)

        let uploadedImageUrl = null;
        if (image) {
            const fileExt = image.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const { error: uploadError, data } = await supabase.storage
                .from('menu-images')
                .upload(fileName, image)

            if (uploadError) {
                alert('Error subiendo imagen: ' + uploadError.message)
                setIsSaving(false)
                return
            }

            const { data: { publicUrl } } = supabase.storage
                .from('menu-images')
                .getPublicUrl(fileName)

            uploadedImageUrl = publicUrl
        }

        const productData: any = {
            name,
            category,
            description,
            label: label !== 'none' ? label : null,
            image_url: uploadedImageUrl,
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
            setDescription('')
            setLabel('none')
            setPriceStandard('')
            setPriceMagnus('')
            setPriceImperator('')
            setModifiers([])
            setImage(null)
            setPreviewUrl(null)
            setCurrentStep(1)
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

    return (
        <div className="p-4 lg:p-12 max-w-7xl mx-auto w-full relative">
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

            {/* PRODUCT TABLE - Always rendered behind the modal */}
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

            {/* MODAL OVERLAY */}
            {view === 'add' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-[#0f1116] w-full max-w-2xl rounded-2xl shadow-2xl border border-gold-500/40 shadow-gold-500/10 flex flex-col max-h-[90vh] overflow-hidden relative animate-in zoom-in-95 duration-300">
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-[#15171E]">
                            <div>
                                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                                    <span className="material-symbols-outlined text-gold-500">verified</span>
                                    Nuevo Producto Imperial
                                </h2>
                                <p className="text-sm text-slate-400 mt-1 pl-9">Configura los detalles exclusivos para el menú.</p>
                            </div>
                            <button onClick={() => setView('table')} className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800/50">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {success && (
                            <div className="m-4 mx-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined">check_circle</span>
                                Producto guardado correctamente en el Imperio.
                            </div>
                        )}

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto bg-[#0B0C10] flex flex-col custom-scrollbar">
                            {/* Stepper Headers */}
                            <div className="px-12 py-8 bg-[#15171E]/50 border-b border-slate-800/50">
                                <div className="relative flex justify-between max-w-md mx-auto">
                                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2 z-0"></div>
                                    {[1, 2, 3].map(step => (
                                        <div key={step} className="relative z-10 flex flex-col items-center gap-2 group">
                                            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors shadow-lg ${currentStep === step ? 'bg-gold-500 text-[#0B0C10] border-gold-500' : currentStep > step ? 'bg-[#15171E] text-gold-500 border-gold-500' : 'bg-[#15171E] text-slate-500 border-slate-600'}`}>
                                                {currentStep > step ? <span className="material-symbols-outlined text-[18px]">check</span> : step}
                                            </div>
                                            <span className={`text-xs uppercase tracking-wider bg-[#0B0C10] px-2 rounded ${currentStep === step ? 'font-semibold text-gold-500' : 'font-medium text-slate-500'}`}>
                                                {step === 1 ? 'Básicos' : step === 2 ? 'Detalles' : 'Revisión'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Form Logic per Step */}
                            <div className="p-8 md:p-10 flex-1">
                                <form id="productFormModal" onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-10">
                                    {currentStep === 1 && (
                                        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                                            <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-2">
                                                <span className="material-symbols-outlined text-lg">info</span> Información General
                                            </div>
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre del Producto *</label>
                                                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 bg-[#1F222B] text-white border border-slate-700 rounded-lg focus:outline-none focus:border-gold-500 placeholder-slate-600 transition-colors" placeholder="Ej: Golden Latte Signature" required />
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Categoría</label>
                                                        <div className="relative">
                                                            <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-3 bg-[#1F222B] text-white border border-slate-700 rounded-lg focus:outline-none focus:border-gold-500 appearance-none cursor-pointer">
                                                                <option value="Bebida">Bebidas</option>
                                                                <option value="Alimento">Alimentos</option>
                                                                <option value="Postre">Postres</option>
                                                                <option value="Merch">Merch</option>
                                                            </select>
                                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Etiqueta</label>
                                                        <div className="relative">
                                                            <select value={label} onChange={e => setLabel(e.target.value)} className="w-full px-4 py-3 bg-[#1F222B] text-white border border-slate-700 rounded-lg focus:outline-none focus:border-gold-500 appearance-none cursor-pointer">
                                                                <option value="none">Sin etiqueta</option>
                                                                <option value="new">Nuevo</option>
                                                                <option value="bestseller">Más Vendido</option>
                                                                <option value="seasonal">De Temporada</option>
                                                            </select>
                                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">label</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Descripción de la Experiencia</label>
                                                    <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full px-4 py-3 bg-[#1F222B] text-white border border-slate-700 rounded-lg focus:outline-none focus:border-gold-500 placeholder-slate-600 resize-none min-h-[120px] transition-colors" placeholder="Describe los matices de sabor, origen del grano y la experiencia sensorial..." rows={4}></textarea>
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                                                    Visualización
                                                </label>
                                                <div className="relative border-2 border-dashed border-slate-700 rounded-xl bg-[#12141a] h-48 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:border-gold-500/50 hover:bg-[#1F222B]/50 overflow-hidden group">
                                                    <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                                                    {previewUrl ? (
                                                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover z-10" />
                                                    ) : (
                                                        <>
                                                            <div className="w-14 h-14 rounded-full bg-[#1F222B] border border-slate-700 group-hover:border-gold-500 group-hover:bg-gold-500/10 flex items-center justify-center mb-3 transition-all transform group-hover:scale-110">
                                                                <span className="material-symbols-outlined text-gold-500 text-2xl">add_a_photo</span>
                                                            </div>
                                                            <p className="text-sm text-slate-300 font-medium relative z-10">Subir imagen del producto</p>
                                                            <p className="text-xs text-slate-500 mt-1 relative z-10">Alta resolución .PNG, .JPG</p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-sm">payments</span>
                                                    Precio de Venta
                                                </label>
                                                <div className="bg-[#1F222B]/50 p-6 rounded-xl border border-slate-800">
                                                    {category === 'Bebida' ? (
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="text-center">
                                                                <span className="text-[10px] text-gold-500 font-bold uppercase block mb-2">Precio Magnus</span>
                                                                <div className="flex items-center gap-2 bg-[#15171E] rounded-lg border border-gold-500/30 px-3 py-2">
                                                                    <span className="text-gold-500 text-lg font-bold">$</span>
                                                                    <input type="number" step="0.01" value={priceMagnus} onChange={e => setPriceMagnus(e.target.value)} className="bg-transparent w-full font-mono text-lg font-bold text-white focus:outline-none placeholder-slate-600 text-center" placeholder="0.00" required />
                                                                </div>
                                                            </div>
                                                            <div className="text-center">
                                                                <span className="text-[10px] text-gold-500 font-bold uppercase block mb-2">Precio Imperator</span>
                                                                <div className="flex items-center gap-2 bg-[#15171E] rounded-lg border border-gold-500/30 px-3 py-2">
                                                                    <span className="text-gold-500 text-lg font-bold">$</span>
                                                                    <input type="number" step="0.01" value={priceImperator} onChange={e => setPriceImperator(e.target.value)} className="bg-transparent w-full font-mono text-lg font-bold text-white focus:outline-none placeholder-slate-600 text-center" placeholder="0.00" required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="max-w-xs mx-auto">
                                                            <span className="text-[10px] text-gold-500 font-bold uppercase block mb-2 text-center">Precio final al público</span>
                                                            <div className="flex items-center gap-3 bg-[#15171E] rounded-lg border border-gold-500/50 px-4 py-3 shadow-[0_0_15px_rgba(190,157,85,0.1)]">
                                                                <span className="text-gold-500 text-lg font-bold">$</span>
                                                                <input type="number" step="0.01" value={priceStandard} onChange={e => setPriceStandard(e.target.value)} className="bg-transparent w-full font-mono text-xl font-bold text-white focus:outline-none placeholder-slate-600 text-center" placeholder="0.00" required />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 2 && (
                                        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300 min-h-[400px]">
                                            <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-2">
                                                <span className="material-symbols-outlined text-lg">tune</span> Modificadores (Opcional)
                                            </div>
                                            <div className="bg-[#1F222B]/30 p-6 rounded-xl border border-slate-800 space-y-4">
                                                <p className="text-sm text-slate-400 mb-4">Añade opciones extra para personalizar este producto (ej. Leches vegetales, extra shot de café, sin cebolla, etc.)</p>

                                                <div className="flex gap-3">
                                                    <input type="text" value={newModName} onChange={e => setNewModName(e.target.value)} className="flex-1 bg-[#15171E] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 placeholder-slate-500" placeholder="Nombre (ej. Queso Extra)" />
                                                    <div className="relative w-32">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500 text-sm">$</span>
                                                        <input type="number" step="0.01" value={newModPrice} onChange={e => setNewModPrice(e.target.value)} className="w-full bg-[#15171E] border border-slate-700 rounded-lg pl-7 pr-3 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-gold-500 placeholder-slate-500" placeholder="0.00" />
                                                    </div>
                                                    <button type="button" onClick={handleAddModifier} className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center">
                                                        <span className="material-symbols-outlined">add</span>
                                                    </button>
                                                </div>

                                                {modifiers.length > 0 && (
                                                    <div className="mt-6 space-y-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                                                        {modifiers.map((mod, idx) => (
                                                            <div key={idx} className="flex justify-between items-center bg-[#15171E] px-4 py-3 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
                                                                <span className="text-sm font-medium text-slate-200">{mod.name}</span>
                                                                <div className="flex items-center gap-4">
                                                                    <span className="text-sm font-mono font-bold text-gold-500">+${mod.price.toFixed(2)}</span>
                                                                    <button type="button" onClick={() => handleRemoveModifier(idx)} className="text-slate-500 hover:text-red-400 transition-colors p-1 rounded-md hover:bg-red-400/10">
                                                                        <span className="material-symbols-outlined text-sm">delete</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 3 && (
                                        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300 min-h-[400px]">
                                            <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-2">
                                                <span className="material-symbols-outlined text-lg">visibility</span> Vista Previa
                                            </div>
                                            <p className="text-sm text-slate-400 mb-6 font-medium text-center">Así es como tus clientes verán este producto en el menú.</p>

                                            <div className="max-w-[280px] mx-auto">
                                                {/* Live Preview Card */}
                                                <ProductCard
                                                    name={name || "Nombre del Producto"}
                                                    category={category}
                                                    description={description}
                                                    price_standard={category !== 'Bebida' ? parseFloat(priceStandard) || 0 : undefined}
                                                    price_magnus={category === 'Bebida' ? parseFloat(priceMagnus) || 0 : undefined}
                                                    price_imperator={category === 'Bebida' ? parseFloat(priceImperator) || 0 : undefined}
                                                    image_url={previewUrl || undefined}
                                                />
                                            </div>

                                            <div className="mt-6 bg-[#1F222B]/30 p-4 rounded-xl border border-slate-800">
                                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Resumen de Modificadores</h4>
                                                {modifiers.length > 0 ? (
                                                    <div className="flex flex-wrap gap-2">
                                                        {modifiers.map((mod, idx) => (
                                                            <div key={idx} className="bg-[#15171E] px-3 py-1.5 rounded-lg border border-slate-700/50 text-xs text-slate-300 flex items-center gap-2">
                                                                <span>{mod.name}</span>
                                                                <span className="text-gold-500 font-medium">+${mod.price.toFixed(2)}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-xs text-slate-500 italic">No se agregaron modificadores.</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>

                            {/* Footer Actions */}
                            <div className="px-8 py-5 border-t border-slate-800 bg-[#15171E] flex justify-between items-center z-10">
                                <div className="text-xs text-slate-500 sm:flex items-center gap-2 hidden">
                                    <span className="material-symbols-outlined text-sm">lock</span>
                                    Visible solo para administradores
                                </div>
                                <div className="flex gap-3 w-full sm:w-auto justify-end">
                                    {currentStep > 1 ? (
                                        <button type="button" onClick={handleBack} disabled={isSaving} className="px-6 py-2.5 border border-slate-700 text-slate-400 text-sm font-semibold rounded-lg hover:bg-[#1F222B] hover:text-white transition-all disabled:opacity-50">
                                            Anterior
                                        </button>
                                    ) : (
                                        <button type="button" onClick={() => { setView('table'); setCurrentStep(1); }} disabled={isSaving} className="px-6 py-2.5 border border-slate-700 text-slate-400 text-sm font-semibold rounded-lg hover:bg-[#1F222B] hover:text-white transition-all disabled:opacity-50">
                                            Cancelar
                                        </button>
                                    )}

                                    <button type="button" onClick={handleSubmit} disabled={isSaving} className="px-6 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white text-sm font-bold rounded-lg shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 group disabled:opacity-50 disabled:hover:translate-y-0 cursor-pointer">
                                        {isSaving ? (
                                            <>
                                                <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                                                Guardando...
                                            </>
                                        ) : currentStep < 3 ? (
                                            <>
                                                Siguiente Paso
                                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                            </>
                                        ) : (
                                            <>
                                                Guardar Producto
                                                <span className="material-symbols-outlined text-[18px]">save</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

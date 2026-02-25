"use client";

import { useState } from "react";

interface FaqItemProps {
    question: string;
    answer: string;
    icon?: string;
    children?: React.ReactNode;
}

export default function FaqItem({ question, answer, icon, children }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`group bg-white dark:bg-white/5 rounded-xl shadow-sm border border-slate-200 dark:border-white/10 transition-all duration-300 ${isOpen ? 'shadow-xl ring-1 ring-primary/30' : ''}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-6 text-left"
            >
                <div className="flex items-center gap-4">
                    {icon && (
                        <span className="material-symbols-outlined text-primary font-bold">
                            {icon}
                        </span>
                    )}
                    <h3 className={`text-lg font-bold text-slate-900 dark:text-white transition-colors ${isOpen ? 'text-primary' : 'group-hover:text-primary'}`}>
                        {question}
                    </h3>
                </div>
                <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                </span>
            </button>

            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 ml-0 md:ml-10">
                        <p className="text-slate-600 dark:text-cream/70 leading-relaxed mb-4">
                            {answer}
                        </p>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

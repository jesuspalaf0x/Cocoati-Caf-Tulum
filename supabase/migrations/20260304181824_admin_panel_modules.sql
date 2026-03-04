-- Blog CMS Extensions
ALTER TABLE public.authors ADD COLUMN IF NOT EXISTS facebook_url TEXT;
ALTER TABLE public.authors ADD COLUMN IF NOT EXISTS instagram_url TEXT;
ALTER TABLE public.authors ADD COLUMN IF NOT EXISTS x_url TEXT;

ALTER TABLE public.categories ADD COLUMN IF NOT EXISTS color TEXT DEFAULT '#FFD700';

-- CRM Levels Table
CREATE TABLE IF NOT EXISTS public.crm_levels (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    color TEXT DEFAULT '#FFD700',
    icon TEXT DEFAULT 'shield',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial values safely
INSERT INTO public.crm_levels (name, color, icon)
SELECT 'Aspirante Imperial', '#94a3b8', 'shield'
WHERE NOT EXISTS (SELECT 1 FROM public.crm_levels WHERE name = 'Aspirante Imperial');

INSERT INTO public.crm_levels (name, color, icon)
SELECT 'Centurión', '#a855f7', 'military_tech'
WHERE NOT EXISTS (SELECT 1 FROM public.crm_levels WHERE name = 'Centurión');

-- Menu Tables
CREATE TABLE IF NOT EXISTS public.menu_categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert defaults for menu categories
INSERT INTO public.menu_categories (name)
SELECT 'Bebida' WHERE NOT EXISTS (SELECT 1 FROM public.menu_categories WHERE name = 'Bebida');
INSERT INTO public.menu_categories (name)
SELECT 'Alimento' WHERE NOT EXISTS (SELECT 1 FROM public.menu_categories WHERE name = 'Alimento');
INSERT INTO public.menu_categories (name)
SELECT 'Postre' WHERE NOT EXISTS (SELECT 1 FROM public.menu_categories WHERE name = 'Postre');
INSERT INTO public.menu_categories (name)
SELECT 'Merch' WHERE NOT EXISTS (SELECT 1 FROM public.menu_categories WHERE name = 'Merch');


CREATE TABLE IF NOT EXISTS public.menu_tags (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    value TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert defaults for menu tags
INSERT INTO public.menu_tags (name, value)
SELECT 'Nuevo', 'new' WHERE NOT EXISTS (SELECT 1 FROM public.menu_tags WHERE value = 'new');
INSERT INTO public.menu_tags (name, value)
SELECT 'Más Vendido', 'bestseller' WHERE NOT EXISTS (SELECT 1 FROM public.menu_tags WHERE value = 'bestseller');
INSERT INTO public.menu_tags (name, value)
SELECT 'De Temporada', 'seasonal' WHERE NOT EXISTS (SELECT 1 FROM public.menu_tags WHERE value = 'seasonal');


CREATE TABLE IF NOT EXISTS public.menu_modifiers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10,2) DEFAULT 0.00,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


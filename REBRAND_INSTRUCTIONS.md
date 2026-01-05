# Beechwood Green Rebrand Instructions

## Color Scheme Replacement Rules

Replace ALL instances of purple/cyan colors with Beechwood green palette:

### Tailwind Classes
- `purple-600` → `beechwood-700` or `beechwood-main`
- `purple-500` → `beechwood-600` or `beechwood-main`
- `purple-400` → `beechwood-sage`
- `cyan-600` → `beechwood-sage`
- `cyan-500` → `beechwood-tech`
- `cyan-400` → `beechwood-lime`

### Hex Colors
- `#8B5CF6` → `#2d6a4f` (beechwood main)
- `#06B6D4` → `#52b788` (sage)
- `#7C3AED` → `#0d4d2d` (forest)
- `#3B82F6` → `#74c69d` (tech green)

### Gradient Classes
- `from-purple-600 to-cyan-600` → `from-beechwood-main to-beechwood-sage`
- `from-purple-400 to-cyan-400` → `from-beechwood-sage to-beechwood-lime`

## Files to Update
- src/app/page.tsx (homepage)
- src/app/products/[slug]/page.tsx (all product pages)
- src/components/DemoModal.tsx
- All demo components in src/components/demos/

## Logo Updates
- Replace icon.png with Beechwood logo (transparent background)
- Update all Image components that reference logo
- Use BeechwoodLogo component for consistent branding

## DO NOT CHANGE
- Component structure
- Layout and spacing
- Functionality and logic
- Animation timings
- Text content




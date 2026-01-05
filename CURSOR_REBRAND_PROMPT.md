# 🎨 CURSOR REBRAND PROMPT - Beechwood Green Theme

## 📋 INSTRUCTIONS FOR CURSOR

I need to rebrand my entire site from purple/cyan to Beechwood green theme based on the logo colors.

### STEP 1: Read Color Scheme
- Color definitions: `src/styles/beechwood-colors.ts`
- Replacement rules: `REBRAND_INSTRUCTIONS.md`

### STEP 2: Update Tailwind Config
- Already updated with new colors
- Use beechwood-* classes instead of purple-*/cyan-*

### STEP 3: Color Replacement Rules

**Purple → Beechwood Green:**
- `purple-600` → `beechwood-700` or `beechwood-main`
- `purple-500` → `beechwood-600` or `beechwood-main`
- `purple-400` → `beechwood-sage`
- `purple-300` → `beechwood-lime`
- `purple-500/20` → `beechwood-main/20`
- `purple-500/30` → `beechwood-main/30`
- `purple-500/50` → `beechwood-main/50`

**Cyan → Beechwood Green:**
- `cyan-600` → `beechwood-sage`
- `cyan-500` → `beechwood-tech`
- `cyan-400` → `beechwood-lime`
- `cyan-300` → `beechwood-mint`

**Gradients:**
- `from-purple-600 to-cyan-600` → `from-beechwood-main to-beechwood-sage`
- `from-purple-500 to-cyan-500` → `from-beechwood-main to-beechwood-tech`
- `from-purple-400 to-cyan-400` → `from-beechwood-sage to-beechwood-lime`
- `from-purple-400 via-cyan-400 to-purple-400` → `from-beechwood-sage via-beechwood-tech to-beechwood-sage`

**Hex Colors:**
- `#8B5CF6` → `#2d6a4f` (beechwood-main)
- `#7C3AED` → `#0d4d2d` (beechwood-forest)
- `#06B6D4` → `#52b788` (beechwood-sage)
- `#3B82F6` → `#74c69d` (beechwood-tech)

**Background Orbs/Glows:**
- `bg-purple-600/20` → `bg-beechwood-main/20`
- `bg-cyan-500/20` → `bg-beechwood-sage/20`
- `bg-blue-500/10` → `bg-beechwood-tech/10`

**Borders:**
- `border-purple-500/20` → `border-beechwood-main/20`
- `border-purple-500/30` → `border-beechwood-main/30`
- `border-cyan-500/30` → `border-beechwood-sage/30`

**Text Colors:**
- `text-purple-400` → `text-beechwood-sage`
- `text-cyan-400` → `text-beechwood-lime`
- `text-purple-300` → `text-beechwood-lime`

**Grid Patterns:**
- `rgba(139,92,246,0.03)` → `rgba(45, 106, 79, 0.03)` (beechwood-main with 3% opacity)

### STEP 4: Files to Update (in order)

1. **src/app/page.tsx** (homepage - most important)
   - Navigation colors
   - Hero section gradients
   - Stats section
   - Product cards
   - All purple/cyan references

2. **src/app/products/[slug]/page.tsx** (product pages)
   - All color references
   - Progress indicators
   - Feature cards
   - CTAs

3. **src/components/DemoModal.tsx**
   - Border colors
   - Header gradients

4. **src/components/demos/*.tsx** (all 6 demo components)
   - Button colors
   - Accent colors
   - Status indicators

5. **src/app/admin/blog/page.tsx**
   - Form colors
   - Button gradients

6. **src/app/products/visual-counter/page.tsx**
   - Video section colors
   - All purple/cyan references

### STEP 5: Logo Updates

- Replace `<Brain />` icon with `<BeechwoodLogo />` component in navigation
- Use `BeechwoodLogo` component from `src/components/BeechwoodLogo.tsx`
- Ensure logo has transparent background (no white)

### STEP 6: Critical Rules

✅ **DO:**
- Replace all purple/cyan colors systematically
- Use beechwood-* Tailwind classes where possible
- Keep all component structure identical
- Maintain all animations and transitions
- Preserve all functionality
- Keep text content unchanged

❌ **DON'T:**
- Change component structure
- Modify layout or spacing
- Alter functionality or logic
- Change animation timings
- Modify text content
- Remove any features

### STEP 7: Testing Checklist

After rebrand, verify:
- [ ] Homepage loads with green theme
- [ ] All gradients use beechwood colors
- [ ] Product pages use green accents
- [ ] Demo modals have green borders
- [ ] Logo displays correctly (no white background)
- [ ] All hover states work
- [ ] Mobile menu uses green theme
- [ ] Admin page uses green theme

## 🚀 START REBRANDING NOW

Begin with `src/app/page.tsx` and work through each file systematically. Replace colors one section at a time, testing as you go.




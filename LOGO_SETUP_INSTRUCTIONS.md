# 🖼️ Logo Setup Instructions

## Issue: White Background Around Logo

The logo should have a **transparent background** but is showing white. This needs to be fixed.

## Solution Steps

### Option 1: Re-download from Envato (Recommended)

1. **Go to Envato** where you edited the logo
2. **Check Background Settings:**
   - Make sure background is set to **TRANSPARENT** (not white)
   - Verify the preview shows transparency (checkerboard pattern)
3. **Export Settings:**
   - Format: **PNG**
   - Background: **Transparent**
   - Size: **512x512** minimum (1024x1024 for high-res)
4. **Download and Save:**
   - Save as: `public/icon.png` (for favicon/nav icon)
   - Save as: `public/logo.png` (for full logo with text)
   - Save as: `public/logos/beechwood-logo.png` (backup)

### Option 2: Fix Existing Images (If you can't re-download)

If the images already have transparency but are showing white on the site:

1. **Check Image Format:**
   ```bash
   file public/icon.png
   file public/logo.png
   ```
   Should show: `PNG image data, ... with alpha channel`

2. **Verify CSS:**
   The `BeechwoodLogo` component already has:
   - `mixBlendMode: 'normal'`
   - Proper transparency handling

3. **Test in Browser:**
   - Open DevTools
   - Inspect the logo element
   - Check if there's a white background in CSS
   - Verify the image itself has transparency

### Option 3: Use Image Editor

If you need to manually remove white background:

1. **Open in image editor** (Photoshop, GIMP, online tool)
2. **Select white background** (magic wand tool)
3. **Delete selection** (make transparent)
4. **Export as PNG** with transparency enabled
5. **Save to:** `public/icon.png` and `public/logo.png`

## File Structure

```
public/
├── icon.png          ← Main logo (nav icon, favicon)
├── logo.png          ← Full logo with text
└── logos/
    ├── beechwood-logo.png    ← Backup/alternative
    └── beechwood-icon.png    ← Icon only version
```

## Verification

After fixing, verify:
- [ ] Logo shows no white background on dark site
- [ ] Logo displays correctly in navigation
- [ ] Favicon shows correctly in browser tab
- [ ] Logo works on both light and dark backgrounds

## Current Logo Usage

The logo is used in:
- `src/app/page.tsx` - Navigation (currently using `<Brain />` icon)
- `src/components/BeechwoodLogo.tsx` - Logo component (ready to use)

**Next Step:** Once logo is fixed, replace `<Brain />` with `<BeechwoodLogo />` in navigation.


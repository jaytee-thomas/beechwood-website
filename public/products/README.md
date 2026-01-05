# Product Images Guide

## Folder Structure

Each product has its own folder in `/public/products/`:

```
public/products/
├── beacon/
│   ├── hero.png (recommended: 1920x1080 or 16:9 aspect ratio)
│   ├── icon.png (recommended: 512x512 or square)
│   ├── screenshot-1.png (optional)
│   ├── screenshot-2.png (optional)
│   └── screenshot-3.png (optional)
├── i65sports/
├── where2gonashville/
├── visual-counter/
├── clock-work/
└── beechwood-os/
```

## Image Naming Convention

### Required Images:
- **`hero.png`** - Main product screenshot (shown prominently on product page)
  - Recommended size: 1920x1080px (16:9 aspect ratio)
  - Format: PNG, JPG, or WebP

### Optional Images:
- **`icon.png`** - Product icon (for cards/homepage)
  - Recommended size: 512x512px (square)
  - Format: PNG with transparency preferred
  
- **`screenshot-1.png`** - Additional screenshot
- **`screenshot-2.png`** - Additional screenshot  
- **`screenshot-3.png`** - Additional screenshot
  - Recommended size: 1920x1080px (16:9 aspect ratio)
  - Format: PNG, JPG, or WebP

## How to Add Images

1. **Navigate to the product folder:**
   ```bash
   cd public/products/[product-slug]/
   ```
   
   Example: `cd public/products/beacon/`

2. **Add your images:**
   - Place `hero.png` in the folder (required for main display)
   - Place `icon.png` in the folder (optional, for homepage cards)
   - Place `screenshot-1.png`, `screenshot-2.png`, etc. (optional, for gallery)

3. **Image Formats Supported:**
   - PNG (recommended for screenshots)
   - JPG/JPEG
   - WebP (best compression)

## Product Slugs

Use these folder names (slugs):
- `beacon`
- `i65sports`
- `where2gonashville`
- `visual-counter`
- `clock-work`
- `beechwood-os`

## Fallback Behavior

If images are missing:
- **Hero image**: Shows "Product Screenshots Coming Soon" message
- **Screenshots**: Shows placeholder with image name
- **Icons**: Uses default icon (if not specified)

## Tips

- **Optimize images**: Use tools like ImageOptim, TinyPNG, or Squoosh to compress images
- **Consistent sizing**: Keep all hero screenshots at the same aspect ratio (16:9 recommended)
- **File size**: Aim for < 500KB per image for fast loading
- **Naming**: Use lowercase, hyphens for spaces (e.g., `screenshot-1.png` not `Screenshot 1.png`)

## Current Status

All product folders are created and ready for images. Simply add your images to the appropriate folders!


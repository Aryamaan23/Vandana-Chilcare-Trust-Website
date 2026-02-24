# Programme photographs

Place programme photos in this folder and reference them in `lib/programmes-data.ts`.

## How to add a new programme with photos

1. Add your image files here (e.g. `health-camp-jan-2026.jpg`, `event-photo-1.png`).
2. Open `lib/programmes-data.ts` and add a new entry to the `programmes` array:
   - `id`: unique slug (e.g. `health-camp-jan-2026`)
   - `title`, `date`, `location`, `category`, `status`, `description`
   - `images`: array of paths, e.g. `['/programmes/health-camp-jan-2026.jpg']`
3. The first image in `images` is used as the cover; up to 4 more show as thumbnails.

You can also use images from `/gallery/` by using the same path format as in the gallery data file.

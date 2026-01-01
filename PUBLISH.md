# Publishing ng-thaana to npm

## The Correct Way

The library should be published from the `dist/ng-thaana` directory after building:

```bash
# 1. Build the library
npm run build

# 2. Navigate to the built output
cd dist/ng-thaana

# 3. Publish from the dist directory
npm publish
```

## Why This Matters

Publishing from the root directory (running `npm publish` at the project root) will publish the SOURCE CODE instead of the BUILT LIBRARY. This causes:

- Import errors (can't resolve 'ng-thaana')
- Missing type definitions
- Broken module resolution
- Users getting Angular project source instead of the compiled library

## What Gets Published

When publishing from `dist/ng-thaana`, npm will include:
- ✅ `fesm2022/ng-thaana.mjs` - The compiled ES module
- ✅ `index.d.ts` - TypeScript definitions
- ✅ `package.json` - With correct peer dependencies for Angular 17-21
- ✅ `README.md` - Documentation

## Version 1.6.0 Issue

Version 1.6.0 was accidentally published from the root directory, which is why it's broken.

To fix:
```bash
npm unpublish ng-thaana@1.6.0
npm run build
cd dist/ng-thaana
npm publish
```

Or publish as 1.6.1 with the correct files.

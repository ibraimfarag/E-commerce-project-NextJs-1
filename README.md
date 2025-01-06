# E-commerce Project

This is a modern e-commerce platform built using **Next.js** with the App Router. The platform incorporates multiple features to provide a robust and dynamic shopping experience. Below is a detailed overview of the project and its functionality.

## Features

### 1. Multi-Language Support
- **i18n Integration:** The application supports multiple languages using `react-i18next`. This ensures that users from different regions can seamlessly interact with the platform in their preferred language.

### 2. Optimized Images
- **Next.js Image Optimization:** Images are optimized using the `<Image />` component from `next/image`, improving performance and reducing bandwidth usage.

### 3. Responsive Design
- Fully responsive design that adapts to various screen sizes, ensuring a great user experience on mobile, tablet, and desktop devices.

### 4. Custom Headers and Footers
- Customized headers and footers tailored to the e-commerce theme, including navigation menus and branding.

### 5. Static Export Support
- Configured for static HTML export, allowing the application to be hosted on platforms like MAMP or static file servers.

### 6. Code Splitting and Optimization
- Leverages Next.js's built-in features for efficient code splitting, optimizing the delivery of JavaScript bundles.

### 7. Modular Components
- Built using modular components to enhance reusability and maintainability of the codebase.

### 8. SEO Optimizations
- Custom `<Head />` elements for better search engine optimization, including meta tags and structured data.

### 9. ESLint Integration
- Configured ESLint rules for consistent code quality and adherence to best practices.

### 10. App Router
- Utilizes the Next.js App Router for routing and dynamic rendering.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ibraimfarag/E-commerce-project-NextJs-1.git
   ```

2. Navigate to the project directory:
   ```bash
   cd e-commerce-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Building and Exporting

### Build the Project
To create an optimized production build:
```bash
npm run build
```

### Export Static Files
To export the project for static hosting:
```bash
npm run export
```
The exported files will be available in the `_static` folder.


## Configuration

### `next.config.js`
The `next.config.js` file is configured with:
- `output: 'export'` for static exports.
- `distDir: '_static'` to define the output directory for the static files.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '_static',
};

module.exports = nextConfig;
```

### i18n Setup
Ensure `react-i18next` is properly configured:
- Include translations for supported languages in a `locales` directory.
- Initialize i18n using `initReactI18next`.

## Known Issues
- Ensure the i18n instance is correctly initialized to avoid warnings like `NO_I18NEXT_INSTANCE`.
- Avoid using synchronous scripts as recommended by Next.js best practices.

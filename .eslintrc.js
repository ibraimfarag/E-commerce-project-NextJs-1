module.exports = {
    extends: ['next/core-web-vitals'], // Keep the base config for Next.js
    rules: {
      '@next/next/no-img-element': 'off', // Disable warnings for <img> usage
      '@next/next/no-sync-scripts': 'off', // Disable warnings for sync scripts
      '@next/next/no-head-element': 'off', // Disable warnings for <head> usage
      '@next/next/no-css-tags': 'off', // Disable warnings for manual CSS links
      '@next/next/no-page-custom-font': 'off', // Disable warnings for custom fonts
      'react-hooks/exhaustive-deps': 'off', // Disable warnings for missing useEffect dependencies
    },
  };
  
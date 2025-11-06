// This file can be used to define theme variables for the application.

// Fix: Defined and exported themes object and ThemeName type.
// The context expects these to exist. Placeholder colors are used
// as the actual values are likely in a tailwind config file.
export const themes = {
  sereneTrust: {
    'clinic-light': '#F8F9FA',
    'clinic-dark': '#212529',
    'clinic-primary': '#007bff',
    'clinic-secondary': '#6c757d',
    'clinic-deep-blue': '#0d2c4f',
    'clinic-gray': '#6c757d',
  },
};

export type ThemeName = keyof typeof themes;

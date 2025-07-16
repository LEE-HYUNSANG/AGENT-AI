import type { Preview } from '@storybook/react';
import '../src/index.css';
import { create } from '@storybook/theming';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.cjs';

const { theme } = resolveConfig(tailwindConfig);

const customTheme = create({
  base: 'light',
  brandTitle: 'AgentWork',
  colorPrimary: theme.colors.primary as string,
  colorSecondary: theme.colors.secondary as string,
  fontBase: Array.isArray(theme.fontFamily.sans) ? theme.fontFamily.sans.join(', ') : theme.fontFamily.sans as string,
});

const preview: Preview = {
  parameters: {
    docs: {
      theme: customTheme,
    },
  },
};

export default preview;

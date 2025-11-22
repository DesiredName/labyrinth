interface ThemeDefinition {
  '--color-primary': string;
  '--color-secondary': string;
  '--color-accent': string;

  '--color-toolbar-bg': string;

  '--color-btn-bg': string;
  '--color-btn-text': string;
  '--color-btn-border': string;

  '--color-btn-bg-hover': string;
  '--color-btn-border-hover': string;
}

type Theme = Partial<ThemeDefinition>;

export type { Theme, ThemeDefinition };

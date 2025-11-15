const AppThemeSwitch = ['light', 'dark', 'system'] as const;
type AppThemeSwitchType = (typeof AppThemeSwitch)[number];

export { AppThemeSwitch };
export type { AppThemeSwitchType };

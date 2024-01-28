import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoAriaHiddenOnFocusableOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yNoAriaHiddenOnFocusableOptions = [
  JsxA11yNoAriaHiddenOnFocusableOption?,
];

/**
 * Apply `jsx-a11y/no-aria-hidden-on-focusable` rule to Astro components.
 *
 * @see [jsx-a11y/no-aria-hidden-on-focusable](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-aria-hidden-on-focusable/)
 */
export type JsxA11yNoAriaHiddenOnFocusableRuleConfig =
  RuleConfig<JsxA11yNoAriaHiddenOnFocusableOptions>;

/**
 * Apply `jsx-a11y/no-aria-hidden-on-focusable` rule to Astro components.
 *
 * @see [jsx-a11y/no-aria-hidden-on-focusable](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-aria-hidden-on-focusable/)
 */
export interface JsxA11yNoAriaHiddenOnFocusableRule {
  /**
   * Apply `jsx-a11y/no-aria-hidden-on-focusable` rule to Astro components.
   *
   * @see [jsx-a11y/no-aria-hidden-on-focusable](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-aria-hidden-on-focusable/)
   */
  'astro/jsx-a11y/no-aria-hidden-on-focusable': JsxA11yNoAriaHiddenOnFocusableRuleConfig;
}

import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YTabindexNoPositiveOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yTabindexNoPositiveOptions = [
  JsxA11yTabindexNoPositiveOption?,
];

/**
 * Apply `jsx-a11y/tabindex-no-positive` rule to Astro components.
 *
 * @see [jsx-a11y/tabindex-no-positive](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/tabindex-no-positive/)
 */
export type JsxA11yTabindexNoPositiveRuleConfig =
  RuleConfig<JsxA11yTabindexNoPositiveOptions>;

/**
 * Apply `jsx-a11y/tabindex-no-positive` rule to Astro components.
 *
 * @see [jsx-a11y/tabindex-no-positive](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/tabindex-no-positive/)
 */
export interface JsxA11yTabindexNoPositiveRule {
  /**
   * Apply `jsx-a11y/tabindex-no-positive` rule to Astro components.
   *
   * @see [jsx-a11y/tabindex-no-positive](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/tabindex-no-positive/)
   */
  'astro/jsx-a11y/tabindex-no-positive': JsxA11yTabindexNoPositiveRuleConfig;
}

import type { RuleConfig } from '../rule-config';

/**
 * Disallow selectors defined in `style` tag that don't use in HTML.
 *
 * @see [no-unused-css-selector](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-css-selector/)
 */
export type NoUnusedCssSelectorRuleConfig = RuleConfig<[]>;

/**
 * Disallow selectors defined in `style` tag that don't use in HTML.
 *
 * @see [no-unused-css-selector](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-css-selector/)
 */
export interface NoUnusedCssSelectorRule {
  /**
   * Disallow selectors defined in `style` tag that don't use in HTML.
   *
   * @see [no-unused-css-selector](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-css-selector/)
   */
  'astro/no-unused-css-selector': NoUnusedCssSelectorRuleConfig;
}

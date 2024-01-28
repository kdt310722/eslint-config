import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YLangOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yLangOptions = [JsxA11yLangOption?];

/**
 * Apply `jsx-a11y/lang` rule to Astro components.
 *
 * @see [jsx-a11y/lang](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/lang/)
 */
export type JsxA11yLangRuleConfig = RuleConfig<JsxA11yLangOptions>;

/**
 * Apply `jsx-a11y/lang` rule to Astro components.
 *
 * @see [jsx-a11y/lang](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/lang/)
 */
export interface JsxA11yLangRule {
  /**
   * Apply `jsx-a11y/lang` rule to Astro components.
   *
   * @see [jsx-a11y/lang](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/lang/)
   */
  'astro/jsx-a11y/lang': JsxA11yLangRuleConfig;
}

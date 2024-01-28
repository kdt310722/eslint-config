import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YHtmlHasLangOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yHtmlHasLangOptions = [JsxA11yHtmlHasLangOption?];

/**
 * Apply `jsx-a11y/html-has-lang` rule to Astro components.
 *
 * @see [jsx-a11y/html-has-lang](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/html-has-lang/)
 */
export type JsxA11yHtmlHasLangRuleConfig =
  RuleConfig<JsxA11yHtmlHasLangOptions>;

/**
 * Apply `jsx-a11y/html-has-lang` rule to Astro components.
 *
 * @see [jsx-a11y/html-has-lang](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/html-has-lang/)
 */
export interface JsxA11yHtmlHasLangRule {
  /**
   * Apply `jsx-a11y/html-has-lang` rule to Astro components.
   *
   * @see [jsx-a11y/html-has-lang](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/html-has-lang/)
   */
  'astro/jsx-a11y/html-has-lang': JsxA11yHtmlHasLangRuleConfig;
}

import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YIframeHasTitleOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yIframeHasTitleOptions = [JsxA11yIframeHasTitleOption?];

/**
 * Apply `jsx-a11y/iframe-has-title` rule to Astro components.
 *
 * @see [jsx-a11y/iframe-has-title](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/iframe-has-title/)
 */
export type JsxA11yIframeHasTitleRuleConfig =
  RuleConfig<JsxA11yIframeHasTitleOptions>;

/**
 * Apply `jsx-a11y/iframe-has-title` rule to Astro components.
 *
 * @see [jsx-a11y/iframe-has-title](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/iframe-has-title/)
 */
export interface JsxA11yIframeHasTitleRule {
  /**
   * Apply `jsx-a11y/iframe-has-title` rule to Astro components.
   *
   * @see [jsx-a11y/iframe-has-title](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/iframe-has-title/)
   */
  'astro/jsx-a11y/iframe-has-title': JsxA11yIframeHasTitleRuleConfig;
}

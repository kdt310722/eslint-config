import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoStaticElementInteractionsOption {
  handlers?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yNoStaticElementInteractionsOptions = [
  JsxA11yNoStaticElementInteractionsOption?,
];

/**
 * Apply `jsx-a11y/no-static-element-interactions` rule to Astro components.
 *
 * @see [jsx-a11y/no-static-element-interactions](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-static-element-interactions/)
 */
export type JsxA11yNoStaticElementInteractionsRuleConfig =
  RuleConfig<JsxA11yNoStaticElementInteractionsOptions>;

/**
 * Apply `jsx-a11y/no-static-element-interactions` rule to Astro components.
 *
 * @see [jsx-a11y/no-static-element-interactions](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-static-element-interactions/)
 */
export interface JsxA11yNoStaticElementInteractionsRule {
  /**
   * Apply `jsx-a11y/no-static-element-interactions` rule to Astro components.
   *
   * @see [jsx-a11y/no-static-element-interactions](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-static-element-interactions/)
   */
  'astro/jsx-a11y/no-static-element-interactions': JsxA11yNoStaticElementInteractionsRuleConfig;
}

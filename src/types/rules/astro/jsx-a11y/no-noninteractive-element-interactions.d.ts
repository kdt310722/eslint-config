import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoNoninteractiveElementInteractionsOption {
  handlers?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yNoNoninteractiveElementInteractionsOptions = [
  JsxA11yNoNoninteractiveElementInteractionsOption?,
];

/**
 * Apply `jsx-a11y/no-noninteractive-element-interactions` rule to Astro components.
 *
 * @see [jsx-a11y/no-noninteractive-element-interactions](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-interactions/)
 */
export type JsxA11yNoNoninteractiveElementInteractionsRuleConfig =
  RuleConfig<JsxA11yNoNoninteractiveElementInteractionsOptions>;

/**
 * Apply `jsx-a11y/no-noninteractive-element-interactions` rule to Astro components.
 *
 * @see [jsx-a11y/no-noninteractive-element-interactions](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-interactions/)
 */
export interface JsxA11yNoNoninteractiveElementInteractionsRule {
  /**
   * Apply `jsx-a11y/no-noninteractive-element-interactions` rule to Astro components.
   *
   * @see [jsx-a11y/no-noninteractive-element-interactions](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-interactions/)
   */
  'astro/jsx-a11y/no-noninteractive-element-interactions': JsxA11yNoNoninteractiveElementInteractionsRuleConfig;
}

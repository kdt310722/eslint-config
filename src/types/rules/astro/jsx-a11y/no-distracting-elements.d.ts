import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoDistractingElementsOption {
  /**
   * @minItems 0
   */
  elements?: ('marquee' | 'blink')[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yNoDistractingElementsOptions = [
  JsxA11yNoDistractingElementsOption?,
];

/**
 * Apply `jsx-a11y/no-distracting-elements` rule to Astro components.
 *
 * @see [jsx-a11y/no-distracting-elements](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-distracting-elements/)
 */
export type JsxA11yNoDistractingElementsRuleConfig =
  RuleConfig<JsxA11yNoDistractingElementsOptions>;

/**
 * Apply `jsx-a11y/no-distracting-elements` rule to Astro components.
 *
 * @see [jsx-a11y/no-distracting-elements](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-distracting-elements/)
 */
export interface JsxA11yNoDistractingElementsRule {
  /**
   * Apply `jsx-a11y/no-distracting-elements` rule to Astro components.
   *
   * @see [jsx-a11y/no-distracting-elements](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-distracting-elements/)
   */
  'astro/jsx-a11y/no-distracting-elements': JsxA11yNoDistractingElementsRuleConfig;
}

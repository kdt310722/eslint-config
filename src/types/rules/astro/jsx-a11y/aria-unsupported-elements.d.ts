import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAriaUnsupportedElementsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAriaUnsupportedElementsOptions = [
  JsxA11yAriaUnsupportedElementsOption?,
];

/**
 * Apply `jsx-a11y/aria-unsupported-elements` rule to Astro components.
 *
 * @see [jsx-a11y/aria-unsupported-elements](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-unsupported-elements/)
 */
export type JsxA11yAriaUnsupportedElementsRuleConfig =
  RuleConfig<JsxA11yAriaUnsupportedElementsOptions>;

/**
 * Apply `jsx-a11y/aria-unsupported-elements` rule to Astro components.
 *
 * @see [jsx-a11y/aria-unsupported-elements](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-unsupported-elements/)
 */
export interface JsxA11yAriaUnsupportedElementsRule {
  /**
   * Apply `jsx-a11y/aria-unsupported-elements` rule to Astro components.
   *
   * @see [jsx-a11y/aria-unsupported-elements](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-unsupported-elements/)
   */
  'astro/jsx-a11y/aria-unsupported-elements': JsxA11yAriaUnsupportedElementsRuleConfig;
}

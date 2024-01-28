import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoNoninteractiveElementToInteractiveRoleOption {
  [k: string]: string[];
}

/**
 * Options.
 */
export type JsxA11yNoNoninteractiveElementToInteractiveRoleOptions = [
  JsxA11yNoNoninteractiveElementToInteractiveRoleOption?,
];

/**
 * Apply `jsx-a11y/no-noninteractive-element-to-interactive-role` rule to Astro components.
 *
 * @see [jsx-a11y/no-noninteractive-element-to-interactive-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-to-interactive-role/)
 */
export type JsxA11yNoNoninteractiveElementToInteractiveRoleRuleConfig =
  RuleConfig<JsxA11yNoNoninteractiveElementToInteractiveRoleOptions>;

/**
 * Apply `jsx-a11y/no-noninteractive-element-to-interactive-role` rule to Astro components.
 *
 * @see [jsx-a11y/no-noninteractive-element-to-interactive-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-to-interactive-role/)
 */
export interface JsxA11yNoNoninteractiveElementToInteractiveRoleRule {
  /**
   * Apply `jsx-a11y/no-noninteractive-element-to-interactive-role` rule to Astro components.
   *
   * @see [jsx-a11y/no-noninteractive-element-to-interactive-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-to-interactive-role/)
   */
  'astro/jsx-a11y/no-noninteractive-element-to-interactive-role': JsxA11yNoNoninteractiveElementToInteractiveRoleRuleConfig;
}

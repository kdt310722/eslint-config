import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoInteractiveElementToNoninteractiveRoleOption {
  [k: string]: string[];
}

/**
 * Options.
 */
export type JsxA11yNoInteractiveElementToNoninteractiveRoleOptions = [
  JsxA11yNoInteractiveElementToNoninteractiveRoleOption?,
];

/**
 * Apply `jsx-a11y/no-interactive-element-to-noninteractive-role` rule to Astro components.
 *
 * @see [jsx-a11y/no-interactive-element-to-noninteractive-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-interactive-element-to-noninteractive-role/)
 */
export type JsxA11yNoInteractiveElementToNoninteractiveRoleRuleConfig =
  RuleConfig<JsxA11yNoInteractiveElementToNoninteractiveRoleOptions>;

/**
 * Apply `jsx-a11y/no-interactive-element-to-noninteractive-role` rule to Astro components.
 *
 * @see [jsx-a11y/no-interactive-element-to-noninteractive-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-interactive-element-to-noninteractive-role/)
 */
export interface JsxA11yNoInteractiveElementToNoninteractiveRoleRule {
  /**
   * Apply `jsx-a11y/no-interactive-element-to-noninteractive-role` rule to Astro components.
   *
   * @see [jsx-a11y/no-interactive-element-to-noninteractive-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-interactive-element-to-noninteractive-role/)
   */
  'astro/jsx-a11y/no-interactive-element-to-noninteractive-role': JsxA11yNoInteractiveElementToNoninteractiveRoleRuleConfig;
}

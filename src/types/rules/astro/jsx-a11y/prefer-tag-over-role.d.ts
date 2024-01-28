import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YPreferTagOverRoleOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yPreferTagOverRoleOptions = [JsxA11yPreferTagOverRoleOption?];

/**
 * Apply `jsx-a11y/prefer-tag-over-role` rule to Astro components.
 *
 * @see [jsx-a11y/prefer-tag-over-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/prefer-tag-over-role/)
 */
export type JsxA11yPreferTagOverRoleRuleConfig =
  RuleConfig<JsxA11yPreferTagOverRoleOptions>;

/**
 * Apply `jsx-a11y/prefer-tag-over-role` rule to Astro components.
 *
 * @see [jsx-a11y/prefer-tag-over-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/prefer-tag-over-role/)
 */
export interface JsxA11yPreferTagOverRoleRule {
  /**
   * Apply `jsx-a11y/prefer-tag-over-role` rule to Astro components.
   *
   * @see [jsx-a11y/prefer-tag-over-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/prefer-tag-over-role/)
   */
  'astro/jsx-a11y/prefer-tag-over-role': JsxA11yPreferTagOverRoleRuleConfig;
}

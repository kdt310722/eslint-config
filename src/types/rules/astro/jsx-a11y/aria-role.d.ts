import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAriaRoleOption {
  allowedInvalidRoles?: string[];
  ignoreNonDOM?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAriaRoleOptions = [JsxA11yAriaRoleOption?];

/**
 * Apply `jsx-a11y/aria-role` rule to Astro components.
 *
 * @see [jsx-a11y/aria-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-role/)
 */
export type JsxA11yAriaRoleRuleConfig = RuleConfig<JsxA11yAriaRoleOptions>;

/**
 * Apply `jsx-a11y/aria-role` rule to Astro components.
 *
 * @see [jsx-a11y/aria-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-role/)
 */
export interface JsxA11yAriaRoleRule {
  /**
   * Apply `jsx-a11y/aria-role` rule to Astro components.
   *
   * @see [jsx-a11y/aria-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-role/)
   */
  'astro/jsx-a11y/aria-role': JsxA11yAriaRoleRuleConfig;
}

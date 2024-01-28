import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoRedundantRolesOption {
  [k: string]: string[];
}

/**
 * Options.
 */
export type JsxA11yNoRedundantRolesOptions = [JsxA11yNoRedundantRolesOption?];

/**
 * Apply `jsx-a11y/no-redundant-roles` rule to Astro components.
 *
 * @see [jsx-a11y/no-redundant-roles](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-redundant-roles/)
 */
export type JsxA11yNoRedundantRolesRuleConfig =
  RuleConfig<JsxA11yNoRedundantRolesOptions>;

/**
 * Apply `jsx-a11y/no-redundant-roles` rule to Astro components.
 *
 * @see [jsx-a11y/no-redundant-roles](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-redundant-roles/)
 */
export interface JsxA11yNoRedundantRolesRule {
  /**
   * Apply `jsx-a11y/no-redundant-roles` rule to Astro components.
   *
   * @see [jsx-a11y/no-redundant-roles](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-redundant-roles/)
   */
  'astro/jsx-a11y/no-redundant-roles': JsxA11yNoRedundantRolesRuleConfig;
}

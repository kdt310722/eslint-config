import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YRoleHasRequiredAriaPropsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yRoleHasRequiredAriaPropsOptions = [
  JsxA11yRoleHasRequiredAriaPropsOption?,
];

/**
 * Apply `jsx-a11y/role-has-required-aria-props` rule to Astro components.
 *
 * @see [jsx-a11y/role-has-required-aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-has-required-aria-props/)
 */
export type JsxA11yRoleHasRequiredAriaPropsRuleConfig =
  RuleConfig<JsxA11yRoleHasRequiredAriaPropsOptions>;

/**
 * Apply `jsx-a11y/role-has-required-aria-props` rule to Astro components.
 *
 * @see [jsx-a11y/role-has-required-aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-has-required-aria-props/)
 */
export interface JsxA11yRoleHasRequiredAriaPropsRule {
  /**
   * Apply `jsx-a11y/role-has-required-aria-props` rule to Astro components.
   *
   * @see [jsx-a11y/role-has-required-aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-has-required-aria-props/)
   */
  'astro/jsx-a11y/role-has-required-aria-props': JsxA11yRoleHasRequiredAriaPropsRuleConfig;
}

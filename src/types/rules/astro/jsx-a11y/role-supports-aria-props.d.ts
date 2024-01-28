import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YRoleSupportsAriaPropsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yRoleSupportsAriaPropsOptions = [
  JsxA11yRoleSupportsAriaPropsOption?,
];

/**
 * Apply `jsx-a11y/role-supports-aria-props` rule to Astro components.
 *
 * @see [jsx-a11y/role-supports-aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-supports-aria-props/)
 */
export type JsxA11yRoleSupportsAriaPropsRuleConfig =
  RuleConfig<JsxA11yRoleSupportsAriaPropsOptions>;

/**
 * Apply `jsx-a11y/role-supports-aria-props` rule to Astro components.
 *
 * @see [jsx-a11y/role-supports-aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-supports-aria-props/)
 */
export interface JsxA11yRoleSupportsAriaPropsRule {
  /**
   * Apply `jsx-a11y/role-supports-aria-props` rule to Astro components.
   *
   * @see [jsx-a11y/role-supports-aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-supports-aria-props/)
   */
  'astro/jsx-a11y/role-supports-aria-props': JsxA11yRoleSupportsAriaPropsRuleConfig;
}

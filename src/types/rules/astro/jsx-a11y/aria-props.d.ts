import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAriaPropsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAriaPropsOptions = [JsxA11yAriaPropsOption?];

/**
 * Apply `jsx-a11y/aria-props` rule to Astro components.
 *
 * @see [jsx-a11y/aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-props/)
 */
export type JsxA11yAriaPropsRuleConfig = RuleConfig<JsxA11yAriaPropsOptions>;

/**
 * Apply `jsx-a11y/aria-props` rule to Astro components.
 *
 * @see [jsx-a11y/aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-props/)
 */
export interface JsxA11yAriaPropsRule {
  /**
   * Apply `jsx-a11y/aria-props` rule to Astro components.
   *
   * @see [jsx-a11y/aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-props/)
   */
  'astro/jsx-a11y/aria-props': JsxA11yAriaPropsRuleConfig;
}

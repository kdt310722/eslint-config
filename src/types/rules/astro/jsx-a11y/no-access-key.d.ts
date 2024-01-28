import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoAccessKeyOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yNoAccessKeyOptions = [JsxA11yNoAccessKeyOption?];

/**
 * Apply `jsx-a11y/no-access-key` rule to Astro components.
 *
 * @see [jsx-a11y/no-access-key](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-access-key/)
 */
export type JsxA11yNoAccessKeyRuleConfig =
  RuleConfig<JsxA11yNoAccessKeyOptions>;

/**
 * Apply `jsx-a11y/no-access-key` rule to Astro components.
 *
 * @see [jsx-a11y/no-access-key](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-access-key/)
 */
export interface JsxA11yNoAccessKeyRule {
  /**
   * Apply `jsx-a11y/no-access-key` rule to Astro components.
   *
   * @see [jsx-a11y/no-access-key](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-access-key/)
   */
  'astro/jsx-a11y/no-access-key': JsxA11yNoAccessKeyRuleConfig;
}

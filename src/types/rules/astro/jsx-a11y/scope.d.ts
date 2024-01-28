import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YScopeOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yScopeOptions = [JsxA11yScopeOption?];

/**
 * Apply `jsx-a11y/scope` rule to Astro components.
 *
 * @see [jsx-a11y/scope](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/scope/)
 */
export type JsxA11yScopeRuleConfig = RuleConfig<JsxA11yScopeOptions>;

/**
 * Apply `jsx-a11y/scope` rule to Astro components.
 *
 * @see [jsx-a11y/scope](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/scope/)
 */
export interface JsxA11yScopeRule {
  /**
   * Apply `jsx-a11y/scope` rule to Astro components.
   *
   * @see [jsx-a11y/scope](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/scope/)
   */
  'astro/jsx-a11y/scope': JsxA11yScopeRuleConfig;
}

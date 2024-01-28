import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoAutofocusOption {
  ignoreNonDOM?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yNoAutofocusOptions = [JsxA11yNoAutofocusOption?];

/**
 * Apply `jsx-a11y/no-autofocus` rule to Astro components.
 *
 * @see [jsx-a11y/no-autofocus](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-autofocus/)
 */
export type JsxA11yNoAutofocusRuleConfig =
  RuleConfig<JsxA11yNoAutofocusOptions>;

/**
 * Apply `jsx-a11y/no-autofocus` rule to Astro components.
 *
 * @see [jsx-a11y/no-autofocus](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-autofocus/)
 */
export interface JsxA11yNoAutofocusRule {
  /**
   * Apply `jsx-a11y/no-autofocus` rule to Astro components.
   *
   * @see [jsx-a11y/no-autofocus](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-autofocus/)
   */
  'astro/jsx-a11y/no-autofocus': JsxA11yNoAutofocusRuleConfig;
}

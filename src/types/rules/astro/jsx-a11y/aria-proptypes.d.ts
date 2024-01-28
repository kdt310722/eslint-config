import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAriaProptypesOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAriaProptypesOptions = [JsxA11yAriaProptypesOption?];

/**
 * Apply `jsx-a11y/aria-proptypes` rule to Astro components.
 *
 * @see [jsx-a11y/aria-proptypes](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-proptypes/)
 */
export type JsxA11yAriaProptypesRuleConfig =
  RuleConfig<JsxA11yAriaProptypesOptions>;

/**
 * Apply `jsx-a11y/aria-proptypes` rule to Astro components.
 *
 * @see [jsx-a11y/aria-proptypes](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-proptypes/)
 */
export interface JsxA11yAriaProptypesRule {
  /**
   * Apply `jsx-a11y/aria-proptypes` rule to Astro components.
   *
   * @see [jsx-a11y/aria-proptypes](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-proptypes/)
   */
  'astro/jsx-a11y/aria-proptypes': JsxA11yAriaProptypesRuleConfig;
}

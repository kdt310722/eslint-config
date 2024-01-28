import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YClickEventsHaveKeyEventsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yClickEventsHaveKeyEventsOptions = [
  JsxA11yClickEventsHaveKeyEventsOption?,
];

/**
 * Apply `jsx-a11y/click-events-have-key-events` rule to Astro components.
 *
 * @see [jsx-a11y/click-events-have-key-events](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/click-events-have-key-events/)
 */
export type JsxA11yClickEventsHaveKeyEventsRuleConfig =
  RuleConfig<JsxA11yClickEventsHaveKeyEventsOptions>;

/**
 * Apply `jsx-a11y/click-events-have-key-events` rule to Astro components.
 *
 * @see [jsx-a11y/click-events-have-key-events](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/click-events-have-key-events/)
 */
export interface JsxA11yClickEventsHaveKeyEventsRule {
  /**
   * Apply `jsx-a11y/click-events-have-key-events` rule to Astro components.
   *
   * @see [jsx-a11y/click-events-have-key-events](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/click-events-have-key-events/)
   */
  'astro/jsx-a11y/click-events-have-key-events': JsxA11yClickEventsHaveKeyEventsRuleConfig;
}

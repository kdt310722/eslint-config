import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YMouseEventsHaveKeyEventsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yMouseEventsHaveKeyEventsOptions = [
  JsxA11yMouseEventsHaveKeyEventsOption?,
];

/**
 * Apply `jsx-a11y/mouse-events-have-key-events` rule to Astro components.
 *
 * @see [jsx-a11y/mouse-events-have-key-events](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/mouse-events-have-key-events/)
 */
export type JsxA11yMouseEventsHaveKeyEventsRuleConfig =
  RuleConfig<JsxA11yMouseEventsHaveKeyEventsOptions>;

/**
 * Apply `jsx-a11y/mouse-events-have-key-events` rule to Astro components.
 *
 * @see [jsx-a11y/mouse-events-have-key-events](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/mouse-events-have-key-events/)
 */
export interface JsxA11yMouseEventsHaveKeyEventsRule {
  /**
   * Apply `jsx-a11y/mouse-events-have-key-events` rule to Astro components.
   *
   * @see [jsx-a11y/mouse-events-have-key-events](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/mouse-events-have-key-events/)
   */
  'astro/jsx-a11y/mouse-events-have-key-events': JsxA11yMouseEventsHaveKeyEventsRuleConfig;
}

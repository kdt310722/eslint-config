import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YMediaHasCaptionOption {
  audio?: string[];
  video?: string[];
  track?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yMediaHasCaptionOptions = [JsxA11yMediaHasCaptionOption?];

/**
 * Apply `jsx-a11y/media-has-caption` rule to Astro components.
 *
 * @see [jsx-a11y/media-has-caption](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/media-has-caption/)
 */
export type JsxA11yMediaHasCaptionRuleConfig =
  RuleConfig<JsxA11yMediaHasCaptionOptions>;

/**
 * Apply `jsx-a11y/media-has-caption` rule to Astro components.
 *
 * @see [jsx-a11y/media-has-caption](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/media-has-caption/)
 */
export interface JsxA11yMediaHasCaptionRule {
  /**
   * Apply `jsx-a11y/media-has-caption` rule to Astro components.
   *
   * @see [jsx-a11y/media-has-caption](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/media-has-caption/)
   */
  'astro/jsx-a11y/media-has-caption': JsxA11yMediaHasCaptionRuleConfig;
}

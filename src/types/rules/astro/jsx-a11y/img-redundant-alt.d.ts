import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YImgRedundantAltOption {
  components?: string[];
  words?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yImgRedundantAltOptions = [JsxA11yImgRedundantAltOption?];

/**
 * Apply `jsx-a11y/img-redundant-alt` rule to Astro components.
 *
 * @see [jsx-a11y/img-redundant-alt](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/img-redundant-alt/)
 */
export type JsxA11yImgRedundantAltRuleConfig =
  RuleConfig<JsxA11yImgRedundantAltOptions>;

/**
 * Apply `jsx-a11y/img-redundant-alt` rule to Astro components.
 *
 * @see [jsx-a11y/img-redundant-alt](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/img-redundant-alt/)
 */
export interface JsxA11yImgRedundantAltRule {
  /**
   * Apply `jsx-a11y/img-redundant-alt` rule to Astro components.
   *
   * @see [jsx-a11y/img-redundant-alt](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/img-redundant-alt/)
   */
  'astro/jsx-a11y/img-redundant-alt': JsxA11yImgRedundantAltRuleConfig;
}

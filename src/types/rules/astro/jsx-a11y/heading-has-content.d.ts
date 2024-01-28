import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YHeadingHasContentOption {
  components?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yHeadingHasContentOptions = [JsxA11yHeadingHasContentOption?];

/**
 * Apply `jsx-a11y/heading-has-content` rule to Astro components.
 *
 * @see [jsx-a11y/heading-has-content](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/heading-has-content/)
 */
export type JsxA11yHeadingHasContentRuleConfig =
  RuleConfig<JsxA11yHeadingHasContentOptions>;

/**
 * Apply `jsx-a11y/heading-has-content` rule to Astro components.
 *
 * @see [jsx-a11y/heading-has-content](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/heading-has-content/)
 */
export interface JsxA11yHeadingHasContentRule {
  /**
   * Apply `jsx-a11y/heading-has-content` rule to Astro components.
   *
   * @see [jsx-a11y/heading-has-content](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/heading-has-content/)
   */
  'astro/jsx-a11y/heading-has-content': JsxA11yHeadingHasContentRuleConfig;
}

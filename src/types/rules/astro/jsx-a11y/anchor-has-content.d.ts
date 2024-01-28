import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAnchorHasContentOption {
  components?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAnchorHasContentOptions = [JsxA11yAnchorHasContentOption?];

/**
 * Apply `jsx-a11y/anchor-has-content` rule to Astro components.
 *
 * @see [jsx-a11y/anchor-has-content](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-has-content/)
 */
export type JsxA11yAnchorHasContentRuleConfig =
  RuleConfig<JsxA11yAnchorHasContentOptions>;

/**
 * Apply `jsx-a11y/anchor-has-content` rule to Astro components.
 *
 * @see [jsx-a11y/anchor-has-content](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-has-content/)
 */
export interface JsxA11yAnchorHasContentRule {
  /**
   * Apply `jsx-a11y/anchor-has-content` rule to Astro components.
   *
   * @see [jsx-a11y/anchor-has-content](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-has-content/)
   */
  'astro/jsx-a11y/anchor-has-content': JsxA11yAnchorHasContentRuleConfig;
}

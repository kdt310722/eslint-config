import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAnchorAmbiguousTextOption {
  words?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAnchorAmbiguousTextOptions = [
  JsxA11yAnchorAmbiguousTextOption?,
];

/**
 * Apply `jsx-a11y/anchor-ambiguous-text` rule to Astro components.
 *
 * @see [jsx-a11y/anchor-ambiguous-text](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-ambiguous-text/)
 */
export type JsxA11yAnchorAmbiguousTextRuleConfig =
  RuleConfig<JsxA11yAnchorAmbiguousTextOptions>;

/**
 * Apply `jsx-a11y/anchor-ambiguous-text` rule to Astro components.
 *
 * @see [jsx-a11y/anchor-ambiguous-text](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-ambiguous-text/)
 */
export interface JsxA11yAnchorAmbiguousTextRule {
  /**
   * Apply `jsx-a11y/anchor-ambiguous-text` rule to Astro components.
   *
   * @see [jsx-a11y/anchor-ambiguous-text](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-ambiguous-text/)
   */
  'astro/jsx-a11y/anchor-ambiguous-text': JsxA11yAnchorAmbiguousTextRuleConfig;
}

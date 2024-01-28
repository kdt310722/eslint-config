import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YNoNoninteractiveTabindexOption {
  /**
   * An array of ARIA roles
   */
  roles?: string[];
  /**
   * An array of HTML tag names
   */
  tags?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yNoNoninteractiveTabindexOptions = [
  JsxA11yNoNoninteractiveTabindexOption?,
];

/**
 * Apply `jsx-a11y/no-noninteractive-tabindex` rule to Astro components.
 *
 * @see [jsx-a11y/no-noninteractive-tabindex](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-tabindex/)
 */
export type JsxA11yNoNoninteractiveTabindexRuleConfig =
  RuleConfig<JsxA11yNoNoninteractiveTabindexOptions>;

/**
 * Apply `jsx-a11y/no-noninteractive-tabindex` rule to Astro components.
 *
 * @see [jsx-a11y/no-noninteractive-tabindex](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-tabindex/)
 */
export interface JsxA11yNoNoninteractiveTabindexRule {
  /**
   * Apply `jsx-a11y/no-noninteractive-tabindex` rule to Astro components.
   *
   * @see [jsx-a11y/no-noninteractive-tabindex](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-tabindex/)
   */
  'astro/jsx-a11y/no-noninteractive-tabindex': JsxA11yNoNoninteractiveTabindexRuleConfig;
}

import type { RuleConfig } from '../rule-config';

/**
 * Disallow use of `set:html` to prevent XSS attack.
 *
 * @see [no-set-html-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-html-directive/)
 */
export type NoSetHtmlDirectiveRuleConfig = RuleConfig<[]>;

/**
 * Disallow use of `set:html` to prevent XSS attack.
 *
 * @see [no-set-html-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-html-directive/)
 */
export interface NoSetHtmlDirectiveRule {
  /**
   * Disallow use of `set:html` to prevent XSS attack.
   *
   * @see [no-set-html-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-html-directive/)
   */
  'astro/no-set-html-directive': NoSetHtmlDirectiveRuleConfig;
}

import type { RuleConfig } from '../rule-config';

/**
 * Disallow unused `define:vars={...}` in `style` tag.
 *
 * @see [no-unused-define-vars-in-style](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-define-vars-in-style/)
 */
export type NoUnusedDefineVarsInStyleRuleConfig = RuleConfig<[]>;

/**
 * Disallow unused `define:vars={...}` in `style` tag.
 *
 * @see [no-unused-define-vars-in-style](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-define-vars-in-style/)
 */
export interface NoUnusedDefineVarsInStyleRule {
  /**
   * Disallow unused `define:vars={...}` in `style` tag.
   *
   * @see [no-unused-define-vars-in-style](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-define-vars-in-style/)
   */
  'astro/no-unused-define-vars-in-style': NoUnusedDefineVarsInStyleRuleConfig;
}

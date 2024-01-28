import type { RuleConfig } from '../rule-config';

/**
 * Disallow conflicting set directives and child contents.
 *
 * @see [no-conflict-set-directives](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-conflict-set-directives/)
 */
export type NoConflictSetDirectivesRuleConfig = RuleConfig<[]>;

/**
 * Disallow conflicting set directives and child contents.
 *
 * @see [no-conflict-set-directives](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-conflict-set-directives/)
 */
export interface NoConflictSetDirectivesRule {
  /**
   * Disallow conflicting set directives and child contents.
   *
   * @see [no-conflict-set-directives](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-conflict-set-directives/)
   */
  'astro/no-conflict-set-directives': NoConflictSetDirectivesRuleConfig;
}

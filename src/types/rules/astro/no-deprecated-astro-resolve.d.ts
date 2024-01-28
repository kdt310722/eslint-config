import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `Astro.resolve()`.
 *
 * @see [no-deprecated-astro-resolve](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-resolve/)
 */
export type NoDeprecatedAstroResolveRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `Astro.resolve()`.
 *
 * @see [no-deprecated-astro-resolve](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-resolve/)
 */
export interface NoDeprecatedAstroResolveRule {
  /**
   * Disallow using deprecated `Astro.resolve()`.
   *
   * @see [no-deprecated-astro-resolve](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-resolve/)
   */
  'astro/no-deprecated-astro-resolve': NoDeprecatedAstroResolveRuleConfig;
}

import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `Astro.canonicalURL`.
 *
 * @see [no-deprecated-astro-canonicalurl](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-canonicalurl/)
 */
export type NoDeprecatedAstroCanonicalurlRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `Astro.canonicalURL`.
 *
 * @see [no-deprecated-astro-canonicalurl](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-canonicalurl/)
 */
export interface NoDeprecatedAstroCanonicalurlRule {
  /**
   * Disallow using deprecated `Astro.canonicalURL`.
   *
   * @see [no-deprecated-astro-canonicalurl](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-canonicalurl/)
   */
  'astro/no-deprecated-astro-canonicalurl': NoDeprecatedAstroCanonicalurlRuleConfig;
}

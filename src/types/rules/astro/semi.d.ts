import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SemiOption =
  | []
  | ['never']
  | [
      'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
      },
    ]
  | []
  | ['always']
  | [
      'always',
      {
        omitLastInOneLineBlock?: boolean;
        omitLastInOneLineClassBody?: boolean;
      },
    ];

/**
 * Options.
 */
export type SemiOptions = SemiOption;

/**
 * Require or disallow semicolons instead of ASI.
 *
 * @see [semi](https://ota-meshi.github.io/eslint-plugin-astro/rules/semi/)
 */
export type SemiRuleConfig = RuleConfig<SemiOptions>;

/**
 * Require or disallow semicolons instead of ASI.
 *
 * @see [semi](https://ota-meshi.github.io/eslint-plugin-astro/rules/semi/)
 */
export interface SemiRule {
  /**
   * Require or disallow semicolons instead of ASI.
   *
   * @see [semi](https://ota-meshi.github.io/eslint-plugin-astro/rules/semi/)
   */
  'astro/semi': SemiRuleConfig;
}

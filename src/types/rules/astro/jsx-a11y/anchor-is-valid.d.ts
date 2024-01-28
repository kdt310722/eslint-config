import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YAnchorIsValidOption {
  components?: string[];
  specialLink?: string[];
  /**
   * @minItems 1
   */
  aspects?: [
    'noHref' | 'invalidHref' | 'preferButton',
    ...('noHref' | 'invalidHref' | 'preferButton')[],
  ];
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yAnchorIsValidOptions = [JsxA11yAnchorIsValidOption?];

/**
 * Apply `jsx-a11y/anchor-is-valid` rule to Astro components.
 *
 * @see [jsx-a11y/anchor-is-valid](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-is-valid/)
 */
export type JsxA11yAnchorIsValidRuleConfig =
  RuleConfig<JsxA11yAnchorIsValidOptions>;

/**
 * Apply `jsx-a11y/anchor-is-valid` rule to Astro components.
 *
 * @see [jsx-a11y/anchor-is-valid](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-is-valid/)
 */
export interface JsxA11yAnchorIsValidRule {
  /**
   * Apply `jsx-a11y/anchor-is-valid` rule to Astro components.
   *
   * @see [jsx-a11y/anchor-is-valid](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-is-valid/)
   */
  'astro/jsx-a11y/anchor-is-valid': JsxA11yAnchorIsValidRuleConfig;
}

import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YControlHasAssociatedLabelOption {
  labelAttributes?: string[];
  controlComponents?: string[];
  ignoreElements?: string[];
  ignoreRoles?: string[];
  /**
   * JSX tree depth limit to check for accessible label
   */
  depth?: number;
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yControlHasAssociatedLabelOptions = [
  JsxA11yControlHasAssociatedLabelOption?,
];

/**
 * Apply `jsx-a11y/control-has-associated-label` rule to Astro components.
 *
 * @see [jsx-a11y/control-has-associated-label](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/control-has-associated-label/)
 */
export type JsxA11yControlHasAssociatedLabelRuleConfig =
  RuleConfig<JsxA11yControlHasAssociatedLabelOptions>;

/**
 * Apply `jsx-a11y/control-has-associated-label` rule to Astro components.
 *
 * @see [jsx-a11y/control-has-associated-label](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/control-has-associated-label/)
 */
export interface JsxA11yControlHasAssociatedLabelRule {
  /**
   * Apply `jsx-a11y/control-has-associated-label` rule to Astro components.
   *
   * @see [jsx-a11y/control-has-associated-label](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/control-has-associated-label/)
   */
  'astro/jsx-a11y/control-has-associated-label': JsxA11yControlHasAssociatedLabelRuleConfig;
}

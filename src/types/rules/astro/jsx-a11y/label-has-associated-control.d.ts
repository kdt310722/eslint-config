import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface JsxA11YLabelHasAssociatedControlOption {
  labelComponents?: string[];
  labelAttributes?: string[];
  controlComponents?: string[];
  /**
   * Assert that the label has htmlFor, a nested label, both or either
   */
  assert?: 'htmlFor' | 'nesting' | 'both' | 'either';
  /**
   * JSX tree depth limit to check for accessible label
   */
  depth?: number;
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxA11yLabelHasAssociatedControlOptions = [
  JsxA11yLabelHasAssociatedControlOption?,
];

/**
 * Apply `jsx-a11y/label-has-associated-control` rule to Astro components.
 *
 * @see [jsx-a11y/label-has-associated-control](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/label-has-associated-control/)
 */
export type JsxA11yLabelHasAssociatedControlRuleConfig =
  RuleConfig<JsxA11yLabelHasAssociatedControlOptions>;

/**
 * Apply `jsx-a11y/label-has-associated-control` rule to Astro components.
 *
 * @see [jsx-a11y/label-has-associated-control](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/label-has-associated-control/)
 */
export interface JsxA11yLabelHasAssociatedControlRule {
  /**
   * Apply `jsx-a11y/label-has-associated-control` rule to Astro components.
   *
   * @see [jsx-a11y/label-has-associated-control](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/label-has-associated-control/)
   */
  'astro/jsx-a11y/label-has-associated-control': JsxA11yLabelHasAssociatedControlRuleConfig;
}

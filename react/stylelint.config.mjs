import stylelintConfigStandardSass from 'stylelint-config-standard-scss';
import stylelintConfigStandard from 'stylelint-config-standard';
import stylelintFormatter from 'stylelint-formatter-pretty';
import stylelintOrder from 'stylelint-order';
import stylelintPrettier from 'stylelint-prettier';
import stylelintSass from 'stylelint-scss';

/** @type {import('stylelint').Linter.Config} */
export default {
    plugins: {
        'stylelint-scss': stylelintSass,
        'stylelint-prettier': stylelintPrettier,
        'stylelint-order': stylelintOrder,
    },
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended',
        'stylelint-config-standard-scss',
    ],
    rules: {
        ...stylelintConfigStandard.rules,
        ...stylelintConfigStandardSass.rules,
        ...stylelintFormatter.rules,
        ...stylelintOrder.rules,
        ...stylelintPrettier.rules,
        ...stylelintSass.rules,

        // Ensures that Prettier formatting is enforced
        'prettier/prettier': true,
        'no-descending-specificity': null, // not compatible with Prettier

        // Ensure that properties are ordered alphabetically
        'order/properties-order': 'alphabetical',

        // SCSS specific
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-rule-no-unknown': true,
        'scss/at-rule-conditional-no-parentheses': true,
        'scss/dollar-variable-pattern': '[^_a-zA-Z0-9-]+$',
        'scss/operator-no-unspaced': true,
    },
};
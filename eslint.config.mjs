/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", ".tools/**"],
  },
];

export default eslintConfig;

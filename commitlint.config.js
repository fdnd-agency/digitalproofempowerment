export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "style", "test"],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-case": [0],
    "header-max-length": [2, "always", 100],
    "footer-leading-blank": [0],
    "references-empty": [2, "never"],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ["#"],
    },
  },
};

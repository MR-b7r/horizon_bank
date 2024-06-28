module.exports = {
  extends: ["next", "next/core-web-vitals", "plugin:tailwindcss/recommended"],
  plugins: ["tailwindcss"],
  rules: {
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-contradicting-classname": "error",
  },
};

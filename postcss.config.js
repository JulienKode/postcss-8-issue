const prefixer = require("postcss-prefix-selector");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    require("postcss-nested"),
    prefixer({
      prefix: ".stuff",
      transform: (prefix, selector, prefixedSelector) => {
        if (["html", "body"].includes(selector)) {
          return prefix;
        }
        return prefixedSelector;
      },
    }),
  ],
};

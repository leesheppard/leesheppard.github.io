# frozen_string_literal: true

group :red_green_refactor, halt_on_fail: true do
  guard "process",
        # NOTE: Specificity on what HTML files is needed here otherwise
        # Jekyll-generated files under the _site/ directory get linted
        # and htmllint has a sad. Also, only lint files that I have direct
        # control over and are not theme override files.
        # command: ["htmllint", "_includes/*.html"],
        command: ["htmllint", "src/_includes/stripped_markdown.html"],
        name: "htmllint" do
    watch(%r{src/\A_includes/.+\.html\z})
  end

  guard "process",
        command: ["markdownlint", "src/_posts" "README.md"],
        name: "markdownlint" do
    watch(%r{src/\A_posts/.+\.md\z})
    watch(%r{src/\A.+\.md\z})
  end

  guard "process",
        command: ["sass-lint", "--verbose", "--no-exit"],
        name: "sass-lint" do
    watch(%r{src/\A_sass/.+\.scss\z})
  end
end
source "https://rubygems.org"
ruby "2.5.3"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem 'html-proofer'

group :development do
  gem "guard", "~> 2.14"
  gem "guard-process", "~> 1.2"
end

group :development, :test do
  gem "rspec"
  gem "selenium-webdriver"
  gem "chromedriver-helper"
  gem "capybara"
  gem "rack-jekyll"
  gem "pry"
end

group :jekyll_plugins do
  gem "github-pages", ">= 3.8.5"
  gem "jekyll-feed", "~> 0.6"
  # incorporate LiveReload
  gem "hawkins", "~> 2.0"
end

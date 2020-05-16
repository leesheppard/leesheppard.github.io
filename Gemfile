source "https://rubygems.org"
ruby "2.5.3"

# gem "jekyll", "3.8.5"
# If you want to use GitHub Pages, remove the "gem 'jekyll'" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem 'html-proofer', '>= 3.11.1'
gem 'jekyll-sitemap', '~> 1.4.0'

group :development do
  gem "guard", "~> 2.14"
  gem "guard-process", "~> 1.2"
end

group :development, :test do
  gem "rspec"
  gem "selenium-webdriver", ">= 3.141.0"
  gem "webdrivers"
  gem "capybara", ">= 3.28.0"
  gem "rack-jekyll"
  gem "pry"
end

group :jekyll_plugins do
  gem "github-pages", ">= 204"
  gem "jekyll-assets"
  gem "jekyll-feed", "~> 0.13.0"
  # incorporate LiveReload
  gem "hawkins", "~> 2.0"
end

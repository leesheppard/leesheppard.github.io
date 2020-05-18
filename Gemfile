source "https://rubygems.org"
ruby "2.7.0"

gem "jekyll", "~> 4.0"
gem "json"
gem "hash-joiner"

group :development do
  gem "guard", "~> 2.14"
  gem "guard-process", "~> 1.2"
end

group :development, :test do
  gem "html-proofer", "~> 3.15"
  gem "rspec"
  gem "selenium-webdriver", ">= 3.141.0"
  gem "webdrivers"
  gem "capybara", ">= 3.32.0"
  gem "rack-jekyll"
  gem "pry"
end

group :jekyll_plugins do
  gem "jekyll-feed", ">= 0.13"
  gem "jekyll-sitemap", "~> 1.4"
end

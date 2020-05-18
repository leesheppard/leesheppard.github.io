[![CircleCI](https://circleci.com/gh/leesheppard/leesheppard.github.io/tree/release.svg?style=svg)](https://circleci.com/gh/leesheppard/leesheppard.github.io/tree/release)
<a href="https://codeclimate.com/github/leesheppard/leesheppard.github.io"><img src="https://codeclimate.com/github/leesheppard/leesheppard.github.io/badges/gpa.svg" /></a>
[![Total alerts](https://img.shields.io/lgtm/alerts/g/leesheppard/leesheppard.github.io.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/leesheppard/leesheppard.github.io/alerts/)
[![Build Status](https://travis-ci.com/leesheppard/leesheppard.github.io.svg?branch=release)](https://travis-ci.com/leesheppard/leesheppard.github.io)

# lee.sheppard.io
This is the repository for my personal blog and to serve as an example of development literacy.

Thanks for checking out my work.

![Lee Sheppard signature](http://res.cloudinary.com/leesheppard/image/upload/v1496495524/Lee-Sheppard-Black_iv1j84.png)

# Requirements
- [Ruby](Gemfile#L2)
- [Bundler](https://bundler.io)
- [Jekyll](https://jekyllrb.com)
- Deployed via GH-Pages, [check dependency support](https://pages.github.com/versions/)

[![forthebadge](https://forthebadge.com/images/badges/made-with-ruby.svg)](https://forthebadge.com)

# Install
```bash
$ git clone git@github.com:leesheppard/leesheppard.github.io.git
$ cd leesheppard.github.io
$ bundle install
```

# How to run the app

### Monitor files

This app uses Guard to monitor file changes. Start Guard with the following command:

    $ bundle exec guard

### Run app
Run Jekyll with:

```bash
$ jekyll build -w
$ jekyll serve
```

Visit [http://localhost:4000](http://localhost:4000)

### Cleanup

Remove all generated files: destination folder, metadata file, Sass and Jekyll caches.

    $ jekyll clean

# Modifications and Customisation

### CI/CD
[TravisCI](https://travis-ci.com/github/leesheppard/leesheppard.github.io) is used to integrate and operate tests before deploying a build to Github.

### Security monitoring
[Snyk](https://snyk.io) is used to monitor dependencies for security patches.

## Modified structure

### File Structure
This folder structure has been modified from the original Jekyll install. I prefer to keep the main directory structure 
clean and have removed the `_site` folder and added `src` for the development files and a `public` folder to push all 
build files into when ready to deploy.

These changes require to modify the [config file](_config.yml) to recognise the change locations.
```yaml
destination: public
source: src
```

### Deploy structure
Github Pages is not using current versions of Jekyll and its plugins. To bypass this I have used TravisCI to build out 
and deploy the static files to the `Master` branch where Github Pages is viewed from. To do this, I have modified the 
default branch for the repo to be `Release`.

Changes to the branch structure to allow the build to occur via TravisCI:

```bash
master <- generated static site content
release <- Jekyll code to be generated into site
develop <- Branch that contains changes until merged into release
```

# Copyright
Images, specifically illustrations, used in this application are subject to copyright by Lee Sheppard.

# Social
[![Hello](https://img.shields.io/badge/Hello-%40leesheppard-blue.svg)](https://twitter.com/leesheppard)

- [Dribbble](https://dribbble.com/leesheppard)
- [Instagram](https://instagram.com/leesheppard)
- [Linkedin](https://www.linkedin.com/in/leesheppard)
- [Twitter](https://twitter.com/leesheppard)

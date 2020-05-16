[![CircleCI](https://circleci.com/gh/leesheppard/leesheppard.github.io/tree/master.svg?style=svg)](https://circleci.com/gh/leesheppard/leesheppard.github.io/tree/master)
<a href="https://codeclimate.com/github/leesheppard/leesheppard.github.io"><img src="https://codeclimate.com/github/leesheppard/leesheppard.github.io/badges/gpa.svg" /></a>
[![Total alerts](https://img.shields.io/lgtm/alerts/g/leesheppard/leesheppard.github.io.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/leesheppard/leesheppard.github.io/alerts/)

[![forthebadge](https://forthebadge.com/images/badges/made-with-ruby.svg)](https://forthebadge.com)

# lee.sheppard.io
This is the repository for my personal blog and to serve as an example of development literacy.

Thanks for checking out my work.

![Lee Sheppard signature](http://res.cloudinary.com/leesheppard/image/upload/v1496495524/Lee-Sheppard-Black_iv1j84.png)

# Requirements
- [Ruby](Gemfile#L2)
- [Bundler](https://bundler.io)
- [Jekyll](https://jekyllrb.com)
- Deployed via GH-Pages, [check dependency support](https://pages.github.com/versions/)

# Install
```bash
$ git clone git@github.com:leesheppard/leesheppard.github.io.git
$ cd leesheppard.github.io
$ bundle install
```

# How to run the app

Run Jekyll with:

```bash
$ jekyll build -w
$ jekyll serve
```

Visit [http://localhost:4000](http://localhost:4000)

Remove all generated files: destination folder, metadata file, Sass and Jekyll caches.

    $ jekyll clean

# Modifications

### CI/CD
CircleCI is used to integrate and operate tests.

### File Structure
This folder structure has been modified from the original Jekyll install. I prefer to keep the main directory structure 
clean and have removed the `_site` folder and added `src` for the development files and a `public` folder to push all 
build files into when ready to deploy.

These changes require to modify the [config file](_config.yml) to recognise the change locations.
```yaml
destination: public
source: src
```


# Copyright
Images, specifically illustrations, used in this application are subject to copyright by Lee Sheppard.

# Social
[![Hello](https://img.shields.io/badge/Hello-%40leesheppard-blue.svg)](https://twitter.com/leesheppard)

- [Dribbble](https://dribbble.com/leesheppard)
- [Instagram](https://instagram.com/leesheppard)
- [Linkedin](https://www.linkedin.com/in/leesheppard)
- [Twitter](https://twitter.com/leesheppard)

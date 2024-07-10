import { Glyph } from "./constants/glyph";
import { IconSet } from "./utils/icon-set";

export const minimal = new IconSet("minimal");

export const legacy = new IconSet("legacy")
  .icon(Glyph.Angular, {
    fileExtensions:
      "{component,directive,guard,module,resolver,service,pipe}.{js,ts},filter.js,ng-template",
    fileNames: "angular.json,angular-cli.json",
  })
  .icon(Glyph.Archive, {
    fileExtensions: "7z,br,brotli,bzip2,gz,gzip,rar,tar,tgz,xz,zip",
  })
  .icon(Glyph.Audio, {
    fileExtensions: "aiff,flac,m4a,mp3,wav,wma",
  })
  .icon(Glyph.Braces, {
    fileExtensions: "js",
    languageIds:
      "c,coffeescript,cpp,csharp,css,fsharp,go,groovy,handlebars,html,jade,java,javascript,javascriptreact,less,lua,objective-c,perl,php,properties,python,ruby,rust,scss,swift,typescript,typescriptreact,xml,yaml",
  })
  .icon(Glyph.Brackets, {
    fileExtensions: "htm,html,xml",
  })
  .icon(Glyph.Camera, {
    fileExtensions: "snap",
  })
  .icon(Glyph.Certificate, {
    fileExtensions: "cer,cert,crt",
    fileNames: "{licence,license,unlicense}{,.md,.txt}",
  })
  .icon(Glyph.Copyright, {
    fileNames: "authors{,.md,.txt}",
  })
  .icon(Glyph.Database, {
    fileExtensions: "graphql,json,sqlite",
    languageIds: "json,sql",
  })
  .icon(Glyph.Docs, {
    fileExtensions: "md,mdx",
    languageIds: "markdown",
  })
  .icon(Glyph.Document, {
    fileExtensions: "doc,docx,pdf,ppt,pptx,rtf,txt",
    fileNames: "_headers,_redirects,.htaccess,robots.txt,sitemap.xml",
  })
  .icon(Glyph.Fingerprint, {
    fileExtensions: "asc,gpg,key,pem,pub",
    fileNames: ".htpasswd",
  })
  .icon(Glyph.Format, {
    fileNames:
      ".prettierignore,.prettierrc{,.js,.json,.yaml,.yml},prettier.config.js",
  })
  .icon(Glyph.Gatsby, {
    fileNames: "gatsby-{browser,config,node,ssr}.js",
  })
  .icon(Glyph.Git, {
    fileExtensions: "patch",
    fileNames:
      ".git-history,.gitattributes,.gitconfig,.gitignore,.gitkeep,.gitmodules",
  })
  .icon(Glyph.History, {
    fileNames: "{changelog,changes}{,.md,.txt}",
  })
  .icon(Glyph.I18n, {
    fileExtensions: "mo,po,pot",
  })
  .icon(Glyph.Image, {
    fileExtensions:
      "bmp,eps,gif,ico,img,jpeg,jpg,png,psd,raw,svg,tif,tiff,webp",
  })
  .icon(Glyph.Information, {
    fileExtensions: "log",
    fileNames: "readme{,.md,.txt}",
  })
  .icon(Glyph.Lock, {
    fileExtensions: "lock",
    fileNames: "security{,.md,.txt}",
  })
  .icon(Glyph.Microsoft, {
    fileExtensions:
      "code-workplace,csproj,ruleset,sln,suo,vb,vbs,{vcxitems,vcxproj}{,.filters},vscodeignore,vsix,vsixmanifest",
  })
  .icon(Glyph.OpenSource, {
    fileNames: "contributing.md,credits{,.md,.txt}",
  })
  .icon(Glyph.Parenthesis, {
    fileExtensions: "cl,el,elc,fasl,l,lisp,lsp,wat",
    languageIds: "clojure",
  })
  .icon(Glyph.React, {
    fileExtensions: "jsx,tsx",
  })
  .icon(Glyph.Settings, {
    fileExtensions:
      "cfg,conf,config,dlc,dll,env{,.example},ini,option,prefs,prop,properties,props,settings,sln.dotsettings{,.user},toml",
    fileNames:
      ".buildignore,.jshintignore,.clang-{format,tidy},.mrconfig,.yardopts,manifest.mf,package.json",
    languageIds: "makefile",
  })
  .icon(Glyph.Shell, {
    fileExtensions: "awk,fish,tcsh,zshrc",
    languageIds: "bat,powershell,shellscript",
  })
  .icon(Glyph.Shield, {
    fileNames:
      ".eslintcache,.eslintignore,.eslintrc{,.cjs,.js,.json,.yaml,.yml}",
  })
  .icon(Glyph.Table, {
    fileExtensions: "csv,tsv,xls,xlsx",
  })
  .icon(Glyph.Tag, {
    fileExtensions: "css,less,sass,scss,styl",
  })
  .icon(Glyph.Test, {
    fileExtensions:
      "e2e-spec.{js,ts},{js,jsx,ts,tsx}.snap,{spec,test}.{js,jsx,ts,tsx}",
  })
  .icon(Glyph.Video, {
    fileExtensions: "avi,m2v,m4v,mkv,mov,mp4,mpeg,mpg,mpv,webm,wmv",
  })
  .icon(Glyph.Vue, {
    fileExtensions: "store.{js,ts},vue",
    fileNames: "store.{js,ts},{nuxt.config,vue.config}.{js,ts}",
  });

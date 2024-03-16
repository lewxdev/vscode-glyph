# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- New **Glyph** icon theme contribution (the full set of icons available, a
  kitchen sink of sorts)
- Color settings available for fine-tuning the icon colors (with some presets)

### Changed

- Update icons to use a `.woff` icon font rather than `.svg` files to make it
  easier to create new icon theme contributions with more customization

## [0.2.0] - 2024-03-15

### Added

- New **Glyph (Legacy)** icon theme contribution (all icons from the original
  Spectrum Icon extension)
  ([#7](https://github.com/lewxdev/vscode-glyph/pull/7))

### Changed

- Promoted the extension out of preview status 🎉
- Updated social preview image with the new icon changes included

### Fixed

- Gear icon outermost stroke not rendering correctly (also improved the shape
  and size of the icon)

## [0.1.2] - 2024-03-15

### Fixed

- Unnecessary files included in the extension package
  ([#4](https://github.com/lewxdev/vscode-glyph/pull/4))

## [0.1.1] - 2024-03-15

### Fixed

- Incorrect branch for the initial release
  ([#3](https://github.com/lewxdev/vscode-glyph/pull/3))
- Missing updated content in `CHANGELOG.md` for the 0.1.0 release
  ([#3](https://github.com/lewxdev/vscode-glyph/pull/3))

## [0.1.0] - 2024-03-15

### Added

- New **Glyph (Minimal)** icon theme contribution (just the most essential icons
  to ensure everything is working as expected)
  ([#2](https://github.com/lewxdev/vscode-glyph/pull/2))
- All icons made available for the file icon theme
- Initial contribution-forward setup for the repository
  ([#1](https://github.com/lewxdev/vscode-glyph/pull/1))

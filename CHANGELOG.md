# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.2.0] - 2026-04-03

### Added

- Updated `projects.json` with two newly built projects

### Fixed

- Added missing links in `CHANGELOG.md`
- Corrected skills listed in `About.jsx`

## [2.1.0] - 2026-01-16

### Added

- **Smart Navigation:** Implemented scroll-aware NavBar that hides on scroll-down
  and reveals on scroll-up.
- **Visual Feedback:** Added dynamic active link indicators that synchronize
  with `useActiveSection` and React Router location.

---

## [2.0.1] - 2026-01-15

### Fixed

- **Vercel Routing:** Resolved 404 error on page refresh/direct URL access
  by adding `vercel.json` rewrite rules.
- **State Synchronization:** Fixed synchronous set state errors occurring
  during scroll-to-section transitions.

---

## [2.0.0] - 2026-01-15

### Added

- Project showcase page (`/showcase`)
- Frontend projects to portfolio
- Improved loading states and route hydration handling

### Changed

- Portfolio layout and visual design improvement
- Refactored project metadata structure

### Fixed

- Loader not appearing during fast navigation
- Hydration fallback warnings in React Router

---

## [1.0.0] - Initial release

- First public version of the portfolio

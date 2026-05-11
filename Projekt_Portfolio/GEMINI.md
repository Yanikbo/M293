# Projekt Portfolio - Gemini Context

This project is a personal portfolio application built with **Angular 21**. It showcases skills, projects, and personal information through a modular, component-based architecture.

## Technical Overview

- **Framework:** Angular 21.2.x (Standalone Components)
- **Styling:** SCSS (Sass)
- **Language:** TypeScript
- **Testing:** Vitest
- **Package Manager:** npm

## Project Structure

The codebase follows a standard Angular structure with logic concentrated in `src/app`:

- `src/app/about-me/`: Component for the "About Me" section, including a counter-based slider/navigation.
- `src/app/skills/`: Component displaying technical skills.
- `src/app/gallerie/`: Component for the project gallery.
- `src/app/kontakt/`: Contact form component.
- `src/app/navigation/`: Main site navigation component.
- `src/app/fusszeile/`: Footer component.
- `src/app/Services/`: Angular services (e.g., `ProjectServive`, `SkillService`) for data management. Note: `ProjectServive` has a typo in its filename (`servive.ts`).
- `src/app/classes/`: TypeScript classes defining data models like `Project` and `Skill`.
- `public/`: Static assets including images for projects and skills.

## Building and Running

### Development Server
Run the following command for a local development server:
```powershell
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/`.

### Build
To build the project for production:
```powershell
npm run build
# or
ng build
```
Build artifacts are stored in the `dist/` directory.

### Testing
To execute unit tests using Vitest:
```powershell
npm test
# or
ng test
```

## Development Conventions

- **Standalone Components:** The project heavily utilizes Angular's standalone component feature (introduced in Angular 14/15 and default in newer versions).
- **Service-Based Data:** Data for skills and projects is managed via services (`src/app/Services/`), which initialize data in their constructors.
- **Naming:** Components are generally named in lowercase-kebab-flat folders (e.g., `about-me`) but exported as PascalCase classes (e.g., `AboutMe`).
- **Styles:** Each component has its own `.scss` file for scoped styling.
- **Routing:** App routes are defined in `src/app/app.routes.ts`.

## Deployment
The project includes `angular-cli-ghpages`, suggesting it may be configured for deployment to GitHub Pages.

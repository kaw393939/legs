# Technical Stack

## Core Technologies

- **HTML5**: Semantic markup with component-based structure
- **CSS3**: Modern CSS with custom properties, grid, flexbox
- **Vanilla JavaScript (ES6+)**: Component system, DOM manipulation, state management
- **Build Tools**: Vite for development server and production builds
- **Deployment**: GitHub Pages with automated CI/CD

## Architecture Philosophy

- **Component-Based**: Reusable, self-contained components
- **Content-Driven**: Easy content updates without touching code
- **Performance-First**: Minimal dependencies, optimized loading
- **Maintainable**: Clear separation of concerns, modular structure

## Component System

### Web Components Approach

- **Custom Elements**: Define reusable HTML elements
- **Shadow DOM**: Encapsulated styling and behavior
- **HTML Templates**: Declarative component templates
- **ES6 Modules**: Modern import/export for component organization

### Content Management Strategy

- **JSON Data Files**: Structured content in `/src/data/`
- **Template System**: HTML templates with placeholder replacement
- **Dynamic Rendering**: JavaScript-driven content injection
- **Static Generation**: Build-time content compilation

## Development Tools

- **Vite**: Fast development server, hot module replacement
- **PostCSS**: CSS processing, autoprefixer, minification
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Stylelint**: CSS linting and conventions

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Features Used**: ES6 modules, Custom Elements, Shadow DOM, CSS Grid
- **Fallbacks**: Graceful degradation for older browsers
- **Progressive Enhancement**: Core functionality works without JavaScript

## Performance Targets

- **Bundle Size**: < 100KB gzipped JavaScript
- **First Paint**: < 1.5 seconds
- **Time to Interactive**: < 3 seconds
- **Lighthouse Score**: 90+ across all categories

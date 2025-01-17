# Tableau Visualization Dashboard

A React-based web application that integrates with Tableau to provide interactive data visualizations. This project uses React, TypeScript, and the Tableau Extensions API to create a seamless visualization experience.

## Features

- React-based frontend with TypeScript
- Tableau Extensions API integration
- Docker containerization
- Responsive design with Tailwind CSS
- Secure HTTPS configuration

## Prerequisites

- Node.js 20 or later
- Docker (for containerized deployment)
- Access to Tableau Server/Online (for visualization integration)

## Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/West-Ben/tab_depth.git
   cd tab_depth
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t tableau-viz-app .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 tableau-viz-app
   ```

The application will be available at `http://localhost:3000`.

## Project Structure

```
tab_depth/
├── src/
│   ├── components/
│   │   └── TableauEmbed.tsx    # Tableau visualization component
│   ├── App.tsx                 # Main application component
│   └── main.tsx               # Application entry point
├── public/                    # Static assets
├── Dockerfile                # Docker configuration
└── vite.config.ts           # Vite configuration
```

## Tableau Integration

The application uses the Tableau Extensions API to embed and interact with Tableau visualizations. The `TableauEmbed` component handles the integration:

```typescript
interface TableauEmbedProps {
  url: string;
  options?: {
    hideTabs?: boolean;
    hideToolbar?: boolean;
  };
}
```

Example usage:
```tsx
<TableauEmbed 
  url="https://public.tableau.com/views/YourDashboard"
  options={{ 
    hideTabs: true,
    hideToolbar: true 
  }}
/>
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally

### Development Guidelines

1. Use TypeScript for type safety
2. Follow React best practices and hooks guidelines
3. Implement responsive design using Tailwind CSS
4. Test Tableau integration thoroughly

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the terms included in the [LICENSE](LICENSE) file.

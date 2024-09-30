# Base image
FROM oven/bun:latest AS build

# Set the working directory
WORKDIR /app

# Copy all necessary files
COPY bun.lockb package.json svelte.config.js tsconfig.json ./
COPY src ./src
COPY static ./static
COPY data ./data 
COPY . .

# Install dependencies using bun
RUN bun install

# Build the SvelteKit app
RUN bun run build

RUN bunx drizzle-kit push || true

# Expose the port the app will run on
EXPOSE 3000

# Start the app using bun (ensure the correct entry point for SvelteKit)
CMD ["bun", "build/index.js"]

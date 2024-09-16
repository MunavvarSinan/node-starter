import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/**/*.ts',
        '!src/**/*.test.*', // Exclude test files
        '!src/**/*.sql', // Exclude .sql files
    ],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    clean: true,
    dts: true,
    loader: {
        '.ts': 'ts',
        '.js': 'js',
        '.sql': 'text', // Optionally handle .sql files as text, or exclude them
    },
});

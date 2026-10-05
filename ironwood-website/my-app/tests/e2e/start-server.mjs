import { cpSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// Exercise the same standalone server and asset layout as the Docker image.
cpSync('.next/static', '.next/standalone/.next/static', { recursive: true });
cpSync('public', '.next/standalone/public', { recursive: true });
await import(pathToFileURL(resolve('.next/standalone/server.js')).href);

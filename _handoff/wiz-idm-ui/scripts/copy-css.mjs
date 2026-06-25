// Copies the token CSS into the published package (styles/).
import { cp, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url)) + '/..';
await mkdir(root + '/styles', { recursive: true });
await cp(root + '/src/styles.css', root + '/styles/styles.css');
await cp(root + '/src/tokens', root + '/styles/tokens', { recursive: true });
console.log('Copied styles.css + tokens/ → styles/');

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.resolve(__dirname, '../design-tokens.tokens.json');
const outputPath = path.resolve(__dirname, '../src/styles/tokens.css');

function toKebabCase(str) {
  return str.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()).replace(/[_\s]+/g, '-');
}

function flattenTokens(obj, prefix = []) {
  let vars = [];
  for (const key in obj) {
    const value = obj[key];

    // Support custom-fontStyle (font tokens)
    if (value?.type === 'custom-fontStyle' && value.value) {
      for (const [prop, val] of Object.entries(value.value)) {
        const cssVarName = `--${[...prefix, key, prop].map(toKebabCase).join('-')}`;
        const cssValue =
          typeof val === 'number' && ['fontSize', 'lineHeight', 'letterSpacing'].includes(prop)
            ? `${val}px`
            : val;
        vars.push(`${cssVarName}: ${cssValue};`);
      }

    // Support primitive tokens (like color, spacing, radius, etc.)
    } else if (value?.value !== undefined) {
      const cssVarName = `--${[...prefix, key].map(toKebabCase).join('-')}`;
      const cssValue =
        typeof value.value === 'number' && value.unit
          ? `${value.value}${value.unit}`
          : value.value;
      vars.push(`${cssVarName}: ${cssValue};`);

    // Recurse if value is an object
    } else if (typeof value === 'object') {
      vars = vars.concat(flattenTokens(value, [...prefix, key]));
    }
  }
  return vars;
}

function generateCSS(tokens) {
  const cssVars = flattenTokens(tokens);
  return `:root {\n  ${cssVars.join('\n  ')}\n}\n`;
}

// Run
const rawTokens = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

// Only include 'font' and 'primitives' keys
const tokens = {
  ...(rawTokens.font ? { font: rawTokens.font } : {}),
  ...(rawTokens.primitives ? { primitives: rawTokens.primitives } : {}),
};

const css = generateCSS(tokens);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, css, 'utf-8');
console.log(`✅ CSS variables written to ${outputPath}`);

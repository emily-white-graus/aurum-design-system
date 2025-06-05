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

function isSkippable(value) {
  const skippableValues = ['none', 'normal', '', null, undefined];
  return skippableValues.includes(value);
}

function flattenTokens(obj, prefix = []) {
  let vars = [];

  for (const key in obj) {
    const value = obj[key];

    // Handle custom font styles
    if (value?.type === 'custom-fontStyle' && value.value) {
      for (const [prop, val] of Object.entries(value.value)) {
        if (isSkippable(val)) continue;
        const cssVarName = `--${[...prefix, key, prop].map(toKebabCase).join('-')}`;
        const cssValue =
          typeof val === 'number' && ['fontSize', 'lineHeight', 'letterSpacing'].includes(prop)
            ? `${val}px`
            : val;
        vars.push(`${cssVarName}: ${cssValue};`);
      }

    // Handle primitive/alias tokens
    } else if (value?.value !== undefined) {
      let cssValue = value.value;
      if (isSkippable(cssValue)) continue;

      const cssVarName = `--${[...prefix, key].map(toKebabCase).join('-')}`;

      if (typeof cssValue === 'string' && cssValue.startsWith('{') && cssValue.endsWith('}')) {
        const ref = cssValue.slice(1, -1);
        cssValue = `var(--${ref.split('.').map(toKebabCase).join('-')})`;
      } else if (typeof cssValue === 'number' && value.unit) {
        cssValue = `${cssValue}${value.unit}`;
      }

      vars.push(`${cssVarName}: ${cssValue};`);

    // Recurse for nested objects
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

// Include top-level keys
const tokens = {
  ...(rawTokens.font ? { font: rawTokens.font } : {}),
  ...(rawTokens.primitives ? { primitives: rawTokens.primitives } : {}),
  ...(rawTokens.alias ? { alias: rawTokens.alias } : {}),
  ...(rawTokens['alias-typography'] ? { 'alias-typography': rawTokens['alias-typography'] } : {}),
};

const css = generateCSS(tokens);

// Write to file
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, css, 'utf-8');
console.log(`✅ Clean CSS variables written to ${outputPath}`);

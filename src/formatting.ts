import startCase from 'lodash.startcase';
import camelCase from 'lodash.camelcase';

import snakeCase from 'lodash.snakecase';

/**
 *
 * @param name
 * @returns
 */
export function pascalCase(name: string) {
  return startCase(camelCase(name)).replace(/\s/g, '');
}

/**
 *
 * @param filename
 * @returns
 */
export function getPathConstruct(filename: string) {
  const [name] = filename.split('.');

  return pascalCase(name);
}
/**
 *
 * @param name
 * @returns
 */
export function splitPascalCase(name: string) {
  return name.replace(/([A-Z][a-z])/g, ' $1').replace(/(\d)/g, ' $1');
}
/**
 *
 * @param name
 * @returns
 */
export function environmentCase(name: string): string {
  return snakeCase(name).toUpperCase();
}
/**
 *
 * @param parameterName
 * @returns
 */
export function getEnvironmentName(parameterName: string): string {
  const [, variableName] = parameterName.split(/^\/\$?\w+\//);
  return environmentCase(variableName);
}

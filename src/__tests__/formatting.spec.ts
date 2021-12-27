import { pascalCase } from 'formatting';

describe('Formatting', () => {
  describe('PascalCase', () => {
    it('Should convert [snake_case] to [PascalCase]', () => {
      const name = pascalCase('snake_case');
      expect(name).toBe('SnakeCase');
    });
  });
});

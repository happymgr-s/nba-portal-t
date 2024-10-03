module.exports = function (plop) {
  /**
   * コンポーネントのテンプレートジェネレータ
   * ・コンポーネントファイル
   * ・ストーリーファイル
   * ・index.ts
   */
  plop.setGenerator('component', {
    description: 'Generate a new component and story',
    prompts: [
      {
        type: 'list',
        name: 'level',
        message: 'Select component level',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name please(it will be converted to PascalCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{level}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{level}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/story.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{level}}/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
    ],
  });

  /**
   * ストーリーのテンプレートジェネレータ
   * ・ストーリーファイル
   */
  plop.setGenerator('stories', {
    description: 'Generate a new story',
    prompts: [
      {
        type: 'list',
        name: 'level',
        message: 'Select component level',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name please(it will be converted to PascalCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{level}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/story.tsx.hbs',
      },
    ],
  });

  /**
   * ストーリーのテンプレートジェネレータ
   * ・ストーリーファイル
   */
  plop.setGenerator('stories_shadcn', {
    description: 'Generate a new story for shadcn',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please(for camelCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/ui/{{name}}.stories.tsx',
        templateFile: 'plop-templates/story.shadcn.tsx.hbs',
      },
    ],
  });

  /**
   * ページのテンプレートジェネレータ
   * ・page.tsx
   */
  plop.setGenerator('page', {
    description: 'Generate a new page',
    prompts: [
      {
        type: 'input',
        name: 'pathname',
        message: 'Pathname please (for lower case)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Page name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{pathname}}/page.tsx',
        templateFile: 'plop-templates/page.tsx.hbs',
      },
    ],
  });
};

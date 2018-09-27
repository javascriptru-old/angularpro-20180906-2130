import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myConfig(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.overwrite('config.ts', `console.log('${JSON.stringify(options)}')`);
    return tree;
  };
}

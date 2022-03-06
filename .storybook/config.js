import { configure } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';

function startStories() {
  const cont = require.context('../src/stories/components', true, /Story/);

  cont.keys().forEach((srcFile) => {
    interopRequireDefault(cont(srcFile));
  });
}

configure(startStories, module);

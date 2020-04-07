const merge = require('webpack-merge');
const defaultEnv = 'production';

module.exports = (env = {}, argv) => {
  /**
   * NODE_ENV: string
   * from command: `webpack` | `webpack-dev-server`
   * `argv.mode`: -p | --mode=production
   * `env.NODE_ENV`: --env.NODE_ENV=production
   * NODE_ENV = production (argv|process)
   */
  const NODE_ENV =
    argv.mode || env.NODE_ENV || process.env.NODE_ENV || defaultEnv;
  console.table({ NODE_ENV });

  return merge(
    // @ts-ignore
    require('./build/webpack.common'),
    require(`./build/webpack.${NODE_ENV === defaultEnv ? 'prod' : 'dev'}`)
  );
};

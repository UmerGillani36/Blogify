const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      reactStrictMode: true,
      env: {
        mongodb_username: 'new_user_36',
        mongodb_password: 'SyKD3QMspWYcd6Pa',
        mongodb_clustername: 'cluster0',
        mongodb_database: '',
      },
    };
  }

  return {
    /* config options for all phases except development here */
    reactStrictMode: true,
    env: {
      mongodb_username: 'new_user_36',
      mongodb_password: 'SyKD3QMspWYcd6Pa',
      mongodb_clustername: 'cluster0',
      mongodb_database: '',
    },
  };
};

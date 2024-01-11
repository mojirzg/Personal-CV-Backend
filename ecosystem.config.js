module.exports = {
  apps: [
    {
      name: "avanteka-backend",
      script: "node index.js",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};

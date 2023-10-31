module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  modularizeImports: {
    "react-bootstrap": {
      transform: "react-bootstrap/{{member}}",
    },
    lodash: {
      transform: "lodash/{{member}}",
    },
  },
};

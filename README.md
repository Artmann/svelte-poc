This is a prof of concept for adding Svelte to a server side rendered app that's already using vanilla JS.

The HTML in `index.html` is meant to resemble an page rendered from a PHP
or Java web service.

The vanilla JS that's used in the side lives in `src/index.js`. The svelte components are located in `src/svelte`.

Webpack is used to create two different bundles. By running `yarn build` or `yarn start`, it will output the two differnt bundles to the `build/` folder.

If you want to test it in your browser, run `yarn serve` and open `http://localhost:3000/`.

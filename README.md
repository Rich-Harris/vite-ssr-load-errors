# vite-ssr-load-errors

Repro for [what I think is a bug](https://github.com/vitejs/vite/issues/2078) with Vite's `ssrLoadModule`. If I `import()` a module that errors upon evaluation, the promise returned from `import()` rejects. I'd expect the same outcome from `ssrLoadModule`, but instead the promise resolves to an empty module, and the only way to figure out if an error occurred is by inspecting the module (assuming you know what shape it should have). There's no way to get hold of the error itself.

To test — clone this repo, `npm install`, then:

```bash
node test-import.js # error is thrown, as expected
node test-vite.js   # error is swallowed
```
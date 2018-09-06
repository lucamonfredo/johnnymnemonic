# \<JohnnyMnemonic />
Ultra easy and lightweight autocomplete input for React.

# Installation
```
npm i @lucamonfredo/johnnymnemonic
```

# Usage
```
<JohnnyMnemonic
  onChange={...} // onChange callback, required
  suggestionFunction={...} // a Promise that returns a string[], required
  suggestionFuncTimeout={...} // number of msec to debounce suggestionFunc, optional
  ... // all other input props, optional
/>
```

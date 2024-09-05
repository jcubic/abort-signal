# Bug reproduction for FB jest

To run the code use:

```bash
git clone https://github.com/jcubic/abort-signal-jest.git
cd abort-signal-jest
npm install
npm test
```

It throws an error that `AbortSignal.timeout` is not a function even that it's defined in Node.

The issue: [#15294](https://github.com/jestjs/jest/issues/15294)

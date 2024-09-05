describe('test', () => {
  it('should work', () => {
    console.log(Object.keys(AbortSignal));
    console.log(process.versions.node);
    console.log(AbortSignal);
    AbortSignal.timeout(100);
  });
});

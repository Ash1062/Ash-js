// Immediately invoked function ()()
( function immediate() {
    console.log('DB Connected')
})();
//  OR
( () => (console.log('DB2 Connected'))
)();
/* Arrow syntax is usually () => { return }, but () => () can also be used
and there is no need to type return as well. */
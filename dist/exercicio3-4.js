var parImpar = function (parImpar) {
    if (parImpar === void 0) { parImpar = 10; }
    if (parImpar % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log("o numero 15 é par? " + parImpar(15));

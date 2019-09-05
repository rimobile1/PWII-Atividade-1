"use strict";
exports.__esModule = true;
var Pscina = /** @class */ (function () {
    function Pscina(diametro, custoConstrucao) {
        this.diametro = diametro;
        this.custoConstrucao = custoConstrucao;
    }
    Pscina.prototype.raio = function () {
        return this.diametro / 2;
    };
    Pscina.prototype.area = function () {
        return this.raio() * this.raio() * 3.1415;
    };
    Pscina.prototype.custoTotal = function () {
        return this.area() * this.custoConstrucao;
    };
    return Pscina;
}());
exports.Pscina = Pscina;

"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem(diametro, custoConstrucao) {
        this.diametro = diametro;
        this.custoConstrucao = custoConstrucao;
    }
    Viagem.prototype.raio = function () {
        return this.diametro / 2;
    };
    Viagem.prototype.area = function () {
        return this.raio() * this.raio() * 3.1415;
    };
    Viagem.prototype.custoTotal = function () {
        return this.area() * this.custoConstrucao;
    };
    return Viagem;
}());
exports.Viagem = Viagem;

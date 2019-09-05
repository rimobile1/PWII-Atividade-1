export class Pscina {

    constructor(public  diametro:number,public custoConstrucao:number){}


raio():number
{
return this.diametro/2

}   

area():number
{

    return this.raio() *  this.raio() * 3.1415
}
custoTotal():number
{
    return this.area() * this.custoConstrucao
}


}
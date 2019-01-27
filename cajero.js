'use strict'


var imagenes = [];
imagenes ["100"] = "100.jpg";
imagenes ["50"] = "50.jpg";
imagenes ["20"] = "20.jpg";
imagenes ["10"] = "10.jpg";

class Billete
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {

    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }

  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
              resultado.innerHTML += "<br />"  + "<img src=" + e.imagen.src + " />" + "<hr />";
      }
    }
    console.log(entregado);
  }
}


var caja = [];
var entregado = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );

var dinero;
var div;
var papeles;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);




const ventas = [
    { producto: 'Zapato deportivo', cantidad: 100 },
    { producto: 'Zapato casual', cantidad: 50 },
    { producto: 'Camiseta', cantidad: 200 },
    { producto: 'Pantalón', cantidad: 150 },
    { producto: 'Zapato de cuero', cantidad: 75 },
    { producto: 'Sombrero', cantidad: 30 }
  ];
  
  const productos_vendidos =  ventas.map(venta => venta.producto)
  
  productos_vendidos // lista productos
  
  const producto_zapato = ventas.filter(venta =>  venta.producto.includes('Zapato'))
  
  producto_zapato // productos con Zapato
  
  const venta_total = ventas.reduce((total,venta) => total + venta.cantidad ,0)
  
  venta_total // cantidad de ventas


  //map est un méthode qui permet de créer un nouveau tableau à partir d'un tableau existant.
  
  
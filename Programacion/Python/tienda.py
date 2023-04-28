mes = 10
precio = 100
iva = 1.21
descuento = 0.85
precio_final= 0


if mes == 10 :
    precio_final = precio * descuento * iva
    print ("El precio es", precio_final)
else :
    precio_final = precio * iva
    print ("El precio es", precio_final)
    
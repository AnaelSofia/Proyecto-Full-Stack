def menuPrincipal():
    continuar=True
    while(continuar):
        opcionCorrecta=False
        while(not opcionCorrecta):
            print("==== Menu Principal ====")
            print("1- Listar Administrador")
            print("2- Registrar administrador")
            print("3- Actualizar administrador")
            print("4- Eliminar administrador")
            print("5- Salir")

            opcion = int(input("seleccione una opcion: "))

            if opcion <1 or opcion>5:
                print("Opcion incorrecta , Ingrese nuevamente...")
            elif opcion ==5:
                continuar = False
                print("Gracias por usar el sistema")
            else:
                opcionCorrecta = True
                ejecutarOpcion(opcion)

def ejecutarOpcion(opcion):
    print(opcion)


menuPrincipal()
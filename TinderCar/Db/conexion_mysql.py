from multiprocessing import connection
import mysql.connector
# password="Rp123456",

try:
    connection=mysql.connector.connect(
        host='localhost',
        port='3306',
        user='root',
        password='Rp123456',
        db='tindercar'
    )

    if connection.is_connected():
        print("Conexion exitosa")
        info_server=connection.get_server_info()
        print(info_server)
        cursor=connection.cursor()
        cursor.execute("SELECT DATABASE()")
        row=cursor.fetchone()
        print("Conectado a la base de datos:  {}".format(row))
        cursor.execute("INSERT INTO adm (nom_adm, apell_adm, rol_adm) VALUES('Juan', 'Test', 'Adm1')")
        connection.commit() #CONFIRMO EL COMMIT EL INSERT
except Exception as ex:
    print(ex)
finally:
    if connection.is_connected():
        connection.close()
        print("Conexion Finalizada.")










import mysql.connector
from mysql.connector import Error

class DAO():

    def __init__(self):
        try:
            self.conexion = mysql.connector.connect(
                 host='localhost',
                port='3306',
                user='root',
                password='Rp123456',
                db='tindercar'
            )
        except Error as ex:
            print("Error al intentar conexion:{0}".format(ex))


    def listarAdministrador(self):
        if self.conexion.is_connected():
            try:
                cursor=self.conexion.cursor()
                cursor.execute("SELECT * FROM adm ORDER BY id_adm ASC")
                resultados = cursor.fetchall()
                return resultados
            except Error as ex:
                print("Error al intentar la conexion: {}".format(ex))
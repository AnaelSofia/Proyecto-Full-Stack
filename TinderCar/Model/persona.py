class Persona:
    nom_cli = ''
    apell_cli = ''
    direccion_cli = ''
    dni_cli = ''
    id_adm1 = ''

    #constructor de la clase
    def __init__(self, nom_cli):
        self.nom_cli = nom_cli

    #setters
    def setNom_cli(self,nom_cli):
        self.nom_cli = nom_cli

    def setApell_cli(self,apell_cli):
        self.apell_cli = apell_cli

    def setDireccion_cli(self, direccion_cli):
        self.direccion_cli = direccion_cli

    def setDni_cli(self,dni_cli):
        self.dni_cli = dni_cli
    
    def setId_adm1(self,id_adm1):
        self.id_adm1 = id_adm1
    

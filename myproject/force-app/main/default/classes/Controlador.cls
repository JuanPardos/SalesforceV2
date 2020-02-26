public with sharing class Controlador {
    public Controlador() {

    }

    @AuraEnabled
    public static Integer Operacion(Integer capital){
        return capital * 2;
    }
}

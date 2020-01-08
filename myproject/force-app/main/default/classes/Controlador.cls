public with sharing class Controlador {
    public Controlador() {

    }

    @AuraEnabled
    public static String sinparam(){
        return 'asdasda';
    }

    @AuraEnabled
    public static String conparam(String hola){
        return 'asdsadasd';
    }
}

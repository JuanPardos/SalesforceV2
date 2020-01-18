public with sharing class Controlador {
    public Controlador() {

    }

    @AuraEnabled
    public static String sinparam(){
        return 'no hay parametros';
    }

    @AuraEnabled
    public static String callWithParam(String msg){
        return msg+' eres el mejor';
    }
}

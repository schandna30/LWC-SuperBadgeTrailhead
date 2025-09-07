public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public  static List<Contact> getContacts() {
        // List<Contact> conList = [select FirstName,LastName,Email from Contact ];
        // return conList;
        throw new auraHandledException('Forced Error');

    }
}
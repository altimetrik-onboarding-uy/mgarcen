public class EmployeeTableController {
    
    @AuraEnabled
    public static List<Timesheet__c> getTotalTimesheets() {
        
        List<Timesheet__c> timesheetList = [SELECT Id,Employee__c,Employee__r.Name,Employee__r.Birthdate,Start_Date__c,End_Date__c,Gross_Pay__c,Total_Week_Hours__c,RecordType.Name,Taxes__c,Submitted__c From Timesheet__c];
        
        return timesheetList;
    }
  
    @AuraEnabled
    public static List<List<Timesheet__c>> getRecent() {
             List<List<Timesheet__c>> listReturn=new List<List<Timesheet__c>>();
    
        for(Contact contact: [select id, (select id,createdDate__c,Employee__c,Employee__r.Name,Employee__r.Birthdate,Start_Date__c,End_Date__c,Gross_Pay__c,Total_Week_Hours__c,RecordType.Name,Taxes__c,Submitted__c
                                          from Employee__r order by createdDate__c desc limit 1) from contact]) {
                                              if(contact.Employee__r.size()>0){
                                                List<Timesheet__c> timesheet=contact.Employee__r;
                                              listReturn.add(timesheet);  
                                              }       
                                          }
        return listReturn;
    }
}
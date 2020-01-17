global class TimesheetProcessingBatch implements Database.Batchable<sObject>{
  
    global Database.QueryLocator start(Database.BatchableContext BC) {
        
        String status= 'NOT SUBMITTED';
        String query = 'SELECT Id,Gross_Pay__c,Timesheet_Status__c FROM Timesheet__c where Gross_Pay__c > 5000 AND Timesheet_Status__c=:status';
        return Database.getQueryLocator(query);
    }
   
    global void execute(Database.BatchableContext BC, List<Timesheet__c> timesheetList) { 
        system.debug('Lista: '+timesheetList);
        for(Timesheet__c timesheet : timesheetList)
        {        
            timesheet.Timesheet_Status__c= 'SUBMITTED';
        }
        try {
            
            update timesheetList;
            
        } catch(Exception e) {
           System.debug(e); 
        }
        
    }   
    
    global void finish(Database.BatchableContext BC) {
    }
    
}
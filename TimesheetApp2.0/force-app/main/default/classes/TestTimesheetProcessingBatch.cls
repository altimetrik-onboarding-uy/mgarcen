@isTest
public class TestTimesheetProcessingBatch {
  @testSetup 
    static void setup() {
        List<Timesheet__c> timesheets = new List<Timesheet__c>();
        Contact contact = new Contact(firstname='first', 
                lastname='last',Email='sadas@gmail.com');
        insert contact;
        for (Integer i=0;i<200;i++) {
            timesheets.add(new Timesheet__c(Employee__c=contact.Id,Comments__c='Test',Timesheet_Status__c='NOT SUBMITTED',Monday__c=24,Tuesday__c=24,Wednesday__c=24,Hour_Rate__c=99));
        }
        insert timesheets;
       
    }
    static testmethod void test() {        
        Test.startTest();
        TimesheetProcessingBatch timesheetprocessingbatch = new TimesheetProcessingBatch();
        Database.executeBatch(timesheetprocessingbatch,200);
        Test.stopTest();
       
        System.assertEquals(200, [select count() from Timesheet__c where Comments__c = 'Test' and Timesheet_Status__c='SUBMITTED' ]);
    }
}
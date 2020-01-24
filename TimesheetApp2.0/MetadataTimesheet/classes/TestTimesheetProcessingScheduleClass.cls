@isTest
public class TestTimesheetProcessingScheduleClass {
    
    public static String CRON_EXP = '0 0 0 15 3 ? 2022';
    static testmethod void testScheduledJob() {
        List<Timesheet__c> timesheets = new List<Timesheet__c>();
        Contact contact = new Contact(firstname='first', 
                                      lastname='last');
        insert contact;
        for (Integer i=0;i<200;i++) {
            timesheets.add(new Timesheet__c(Employee__c=contact.Id,Comments__c='Test'));
        }
        insert timesheets;
        
        
        Test.startTest();
        // Schedule the test job
        String jobId = System.schedule('ScheduledApexTest',
                                       CRON_EXP, 
                                       new TimesheetProcessingScheduleClass());         
        
        
        Test.stopTest();
        System.assertEquals(200, [select count() from Timesheet__c where Comments__c = 'Test' and Timesheet_Status__c='SUBMITTED' ]);
        
    }
}
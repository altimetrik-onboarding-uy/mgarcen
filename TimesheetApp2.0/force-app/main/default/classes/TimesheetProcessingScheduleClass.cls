global class TimesheetProcessingScheduleClass implements schedulable{

    global void execute(SchedulableContext sc)
    {
    TimesheetProcessingBatch b = new TimesheetProcessingBatch(); 
    database.executeBatch(b);

String cronexpression = '0 0 0 1/1 * ? *';

//System.schedule(‘Testing’, cronexpression, b);
System.schedule('Processing Timesheets', cronexpression, new TimesheetProcessingScheduleClass());
   
    }

}
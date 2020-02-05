/* eslint-disable vars-on-top */
import { LightningElement, track, wire} from 'lwc';
import getTotalTimesheets from '@salesforce/apex/EmployeeTableController.getTotalTimesheets';
import getRecent from '@salesforce/apex/EmployeeTableController.getRecent';


export default class TableLWC extends LightningElement {
    @track columns = ['Employee Name','Birthdate','Start Date','End Date','Gross Pay','Taxes','Total Hours'
    ,'Record Type','Submitted','Record Page'];
    @track timesheets=[];
    @track recentTimesheets=[];
    @track recentList=false;
   
    handleTotal() {
       this.recentList=false;
    }
    handleRecent() {
        this.recentList=true;
     }
    @wire(getTotalTimesheets, {})
    wiredTotalTimsheets({ error, data }) {
        if (error) {
            this.error = error;
        } else if (data) {
            this.recentList=false;
            this.timesheets = data;
           
        }
    }
    @wire(getRecent, {})
    wiredRecentTimesheets({ error, data }) {
        if (error) {
            this.error = error;
        } else if (data) {
           
            var rows=data;
                
                var  retList=[];
                
                for (var i = 0; i < rows.length; i++) { 
                    var row = rows[i];                
                    for (var j = 0; j <row.length; j++) { 
                        // eslint-disable-next-line no-console
                       
                        var timesheet={Total_Week_Hours__c:row[j].Total_Week_Hours__c,EmployeeBirthdate:row[j].Employee__r.Birthdate,Employee__c:row[j].Employee__c,Start_Date__c: row[j].Start_Date__c,Gross_Pay__c: row[j].Gross_Pay__c, Taxes__c: row[j].Taxes__c,End_Date__c: row[j].End_Date__c,EmployeeName: row[j].Employee__r.Name, Type:row[j].RecordType.Name,Taxes__c: row[j].Taxes__c,Id: row[j].Id,Submitted__c: row[j].Submitted__c};
                        retList.push(timesheet);      
                    }
                } 
              
            this.recentTimesheets=retList;
        }
    }
   

}
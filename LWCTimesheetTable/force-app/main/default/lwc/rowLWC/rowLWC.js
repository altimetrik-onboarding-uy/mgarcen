
import { LightningElement,api,track} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class RowLWC extends NavigationMixin(LightningElement) {
    
    @api timesheet=[];
    @track openmodel = false;
    @track employeeId = " ";
    @track togglehover=false;
    @api recent=false;

    connectedCallback() {

    }
    closeModal() {
        this.openmodel = false
    } 
    handleSubmit(){
        this.openmodel = false
     }
    openmodal(event) {
        this.employeeId = event.target.dataset.targetId;
       
        this.openmodel = true
    }
    handleMouseHover(){
        this.togglehover=true;
       
    }
    handleMouseOut( ) {

        this.togglehover=false;
     
    }
    navigateToRecordViewPage(event) {
        var timesheetId = event.target.dataset.targetId;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: timesheetId,
                objectApiName: 'Timesheet__c', // objectApiName is optional
                actionName: 'view'
            }
        });
    }
}
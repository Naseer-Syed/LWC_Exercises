import { LightningElement, wire } from "lwc";
import getStudents from '@salesforce/apex/studentBrowser.getStudents';

export default class StudentBrowser extends LightningElement {
    @wire(getStudents, {intructorId: "", courseDeliveryId: ""})	
    students;
};
		

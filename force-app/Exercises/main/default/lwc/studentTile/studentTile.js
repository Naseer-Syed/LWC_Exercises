import { LightningElement, api } from "lwc";

export default class StudentTile extends LightningElement {
	get tileSelected() {
		return this.isSelected ? "tile selected" : "tile";
	}
	@api student = {
		Name: "Naseer Syed",
		PhotoUrl: "/services/images/photo/003B0FakePictId"
	};
	@api isSelected = false;
}

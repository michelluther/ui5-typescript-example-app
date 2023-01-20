import Button from "sap/m/Button";
import BaseController from "./BaseController";

/**
 * @namespace com.michelsplayground.typescriptExampleApp.controller
 */
export default class App extends BaseController {

	public onInit() : void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
	const myVariable = 'hello';
	console.log(myVariable)
	}

}

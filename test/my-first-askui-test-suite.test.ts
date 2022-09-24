import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should click on text', async () => {

    /*
      Pre-requisite
      Create new Test Asset Package with name "askUICCSPackage"
      Under this create new folder with name askUICCSFolder
     
    */
    await aui.click().text().withText("Default").exec();
    await aui.mouseRightClick().exec();
    await aui.click().text().withText("New").exec()
    await aui.click().text().withText("Package").exec()
    await aui.typeIn("askUICCSPackage").textfield().exec();
    await aui.click().text().withText("Finish").exec();
    await aui.click().text().withText("askUICCSPackage").exec()
    await aui.mouseRightClick().exec();
    await aui.click().text().withText("New").exec()
    await aui.click().text().withText("Folder").exec()
    await aui.pressKey('backspace').exec();
    await aui.typeIn("askUICCSFolder").textfield().exec();
    await aui.click().text().withText("Finish").exec();

    /*
          Create new Test Asset Package with name "askUICCSPackage"
          Under this create new folder with name askUICCSFolder
          Under this create new Cloud Connector Service with name "askUICCS"
        
        */


    await aui.click().text().withText("askUICCSFolder").exec()
    await aui.mouseRightClick().exec();
    await aui.click().text().withText("New").exec()
    await aui.click().text().withText("Cloud Connector service").exec()
    await aui.pressKey('backspace').exec();
    await aui.typeIn("askUICCS").textfield().exec();


    /*
      
      Select connection from list of available connection from pool
    
    */

    await aui.click().text().withText("Next >").exec();
    await aui.click().text().withText("Salesforce CRM").exec();
    await aui.click().text().withText("Next >").exec();
    await aui.click().text().withText("Connection:Basic").exec();
    await aui.click().text().withText("Finish").exec();




    /*
          Select operation for Cloud Connector Service "askUICCS"
    
   */
    await aui.click().text().withText("askUICCS").exec();
    await aui.click().icon().withText("pen").below().icon().withText("chevron down").exec();
    await aui.click().text().withText("create").exec();
    await aui.click().text().withText("Next >").exec();
    await aui.waitFor(5000).exec();
    await aui.click().text().withText("Account").exec();
    await aui.click().text().withText("Next >").exec();
    await aui.waitFor(2000).exec();
    await aui.click().text().withText("Finish").exec();


    /*
      Execute Cloud Connector Service

    */
    await aui.click().text().withText("File").exec();
    await aui.click().text().withText("Save All").exec();

    await aui.click().text().withText("askUICCS").exec();
    await aui.mouseRightClick().exec();
    await aui.click().text().withText("Run As").exec();
    await aui.click().text().withText("2 Run Service").exec();


    await aui.click().icon().withText("caret right").exec();
    await aui.click().text().withText("tns:sObjects").exec();
    await aui.waitFor(2000).exec();

    await aui.click().icon().withText("file").below().text().withText("Enter Input for 'askUICCS'").exec();
    await aui.typeIn("askUICCS").text().withText("ens:Name").exec();
    await aui.click().text().withText("OK").exec();

    await aui.waitFor(3000).exec();


    /*
      Verify response after executing Cloud Connector Service
 
 
    */

    await aui.click().text().withText("Results").exec();
    await aui.mouseDoubleLeftClick().exec();
    await aui.click().text().withText("tns:result[0]").exec();
    await aui.click().text().withText("tns:success").exec();

    await aui.expect().text().withText("true").exists;

  });

  xit('interactive', async () => {
    await aui.annotate();
  });


  
  /*
      Below use case is for future, please ignore as of now

  */

  // await aui.click().text().withText("CCS").exec();
  // await aui.mouseRightClick().exec();
  // await aui.click().text().withText("New").exec()
  // await aui.click().text().withText("Cloud Connector service").exec()

  // await aui.pressKey('delete').text().withText("new_cloudservice").exec();

  // await aui.pressKey('backspace').exec();
  //await aui.click().text().withText("CCS:CreateRelation").exec();
  // await aui.moveMouseTo().text().withText("CreateRelation").exec();
  // await aui.mouseToggleDown().exec();
  // //.text().withText("*askUIFlov")
  // //await aui.moveMouseTo().text().withText("*askUIFlow").below().
  // await aui.moveMouseRelativelyTo(0, 30).text().withText("*askUIFlow").exec()
  // await aui.mouseToggleUp().exec();




  // await aui.typeIn("askUICCS").text().withText("Element name").exec();

  // await aui.click().text().withText("Next >").exec();
  // await aui.click().text().withText("Salesforce CRM").exec();
  // await aui.click().text().withText("Next >").exec();
  // await aui.click().text().withText("Connection:Basic").exec();
  // await aui.click().text().withText("Finish").exec();

  //.text().withText("Element name")
  //await aui.click().text().withText("new_cloaskUICCSudservice").exec();


});

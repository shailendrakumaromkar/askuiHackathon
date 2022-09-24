## About Use Case
This is iPaaS product which integrates with different SaaS backeng e.g. Salesforce, Amazon, Microsoft, Adobe, Google etc
I have taken example of Salesforce backend
Conection has been created via Admin UI
I am using customised version Eclipse product where customer can create different type Business workflow which integrates with different backend

## Steps to follow
In Eclipse 
Create package "askUICCSPackage"
Create folder "askUICCSFolder"
Create Cloud Connector Service "askUICCS"
Select operation using connection "Connection:Basic" which is of basic type authentication
Select "Create" operation
Select "Account" Business object
Select required field to run this service e.g. "Name"
Save the changes
Run the  Cloud Connector Service "askUICCS"
Click on Add Row,we can insert multiple rows
Give input for mandatory field "Name"
click on OK button
Wait for sometime till service executes successfully
Double click on Results tab
verify in Response tns:success getting "true" which send is by backedn as 200 OK


## Benefits
This can be furthre enhanced to create complete business flow like query, update, delete
This can also be used by across team
This can also be used for other backend as well Amazon, Microsoft, Adobe, Google.


## Refer below recording covering each of the above steps

http://recordit.co/yt2FJfJMsL --> create package
https://recordit.co/v74ec4B5dF  --> Create Folder

https://recordit.co/768N4JGWjG --> enter CCS name

http://recordit.co/EtAxpOudQW --> create CCS, Select operation, Run CCS

http://recordit.co/39UMsh30yc --> clicking in Add Row icon

http://recordit.co/TbJbdAQYzy   --> Executing asset and verify the response

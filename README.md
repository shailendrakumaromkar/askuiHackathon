## About Use Case
This is iPaaS product which integrates with different SaaS backeng e.g. Salesforce, Amazon, Microsoft, Adobe, Google etc
I have taken example of Salesforce backend
Conection has been created via Admin UI
I am using customised version of Eclipse product developed by my Company where customer can create different type of integration Business workflow which integrates with different SaaS backend.
Product supports creating different type of assets e.g.- .Net,C, GraphQL,gRPC,REST, SOAP, WSDL,JSON, JMS etc.
For Hackathon I have used Creating Cloud Connector Service type of asset via askui

## Steps to follow
1.	In Eclipse 
2.	Create package "askUICCSPackage"
3.	Create folder "askUICCSFolder"
4.	Create Cloud Connector Service "askUICCS"
5.	Select operation using connection "Connection:Basic" which is of basic type authentication
6.	Select "Create" operation
7.	Select "Account" Business object
8.	Select required field to run this service e.g. "Name"
9.	Save the changes
10.	Run the  Cloud Connector Service "askUICCS"
11.	Click on Add Row,we can insert multiple rows
12.	Give input for mandatory field "Name"
13.	click on OK button
14.	Wait for sometime till service executes successfully
15.	Double click on Results tab
16.	verify in Response tns:success getting "true" which send is by backedn as 200 OK



## Benefits
•	This can be furthre enhanced to create complete business flow like query, update, delete
•	This can also be used by across team
•	This can also be used for other backend as well Amazon, Microsoft, Adobe, Google.



## Refer below recording covering each of the above steps

http://recordit.co/yt2FJfJMsL --> create package

https://recordit.co/v74ec4B5dF  --> Create Folder

https://recordit.co/768N4JGWjG --> enter CCS name

http://recordit.co/EtAxpOudQW --> create CCS, Select operation, Run CCS

http://recordit.co/39UMsh30yc --> clicking in Add Row icon

http://recordit.co/TbJbdAQYzy   --> Executing asset and verify the response

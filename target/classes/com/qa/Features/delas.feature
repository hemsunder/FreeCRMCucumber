Feature: FREE CRM Application Deals Features 

Scenario: Create new Deals scenario
	Given The user is browser url 
	Then The user is on loginpage 
	When The login page title is correct 
	Then The user entered username and password
	|	hemsunder	|	hem@123	|
	And The user logged into application 
	Then The user is on HomePage 
	When The title of the homepage is correct 
	And The user wants to add deals 
	Then User enteres deal details
	| test deal | google | 50 | 20 |
	And The user clicks on Save button 
	Then Quit the browser
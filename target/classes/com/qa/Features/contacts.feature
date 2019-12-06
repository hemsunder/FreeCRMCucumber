Feature: FREE CRM Application Features 

Scenario Outline: Free CRM application adding contacts scenario 
	Given The user is browser url 
	Then The user is on loginpage 
	When The login page title is correct 
	Then The user entered "<user name>" and "<password>" 
	And The user logged into application 
	Then The user is on HomePage 
	When The title of the homepage is correct 
	And The user wants to add contacts 
	Then User enteres "<first name>" and "<last name>" and "<company>" 
	And The user clicks on Save button 
	Then Quit the browser
	
	Examples: 
	
		| 	user name	|	password	|	first name	|	last name	|	company	|
		|	hemsunder	|	hem@123		|	jack		|	jones		|	google	|
		|	hemsunder	|	hem@123		|	nick		|	menon		|	amazon	|
		|	hemsunder	|	hem@123		|	joseph		|	kelen		|  cognizant|
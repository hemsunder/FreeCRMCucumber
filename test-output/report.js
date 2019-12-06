$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Automation/FreeCRMCucumber/src/main/java/com/qa/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "FREE CRM Application Features",
  "description": "",
  "id": "free-crm-application-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM application adding contacts scenario",
  "description": "",
  "id": "free-crm-application-features;free-crm-application-adding-contacts-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is browser url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user is on loginpage",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "The login page title is correct",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user entered \"\u003cuser name\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user logged into application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The title of the homepage is correct",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user wants to add contacts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enteres \"\u003cfirst name\u003e\" and \"\u003clast name\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Quit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "free-crm-application-features;free-crm-application-adding-contacts-scenario;",
  "rows": [
    {
      "cells": [
        "user name",
        "password",
        "first name",
        "last name",
        "company"
      ],
      "line": 18,
      "id": "free-crm-application-features;free-crm-application-adding-contacts-scenario;;1"
    },
    {
      "cells": [
        "hemsunder",
        "hem@123",
        "jack",
        "jones",
        "google"
      ],
      "line": 19,
      "id": "free-crm-application-features;free-crm-application-adding-contacts-scenario;;2"
    },
    {
      "cells": [
        "hemsunder",
        "hem@123",
        "nick",
        "menon",
        "amazon"
      ],
      "line": 20,
      "id": "free-crm-application-features;free-crm-application-adding-contacts-scenario;;3"
    },
    {
      "cells": [
        "hemsunder",
        "hem@123",
        "joseph",
        "kelen",
        "cognizant"
      ],
      "line": 21,
      "id": "free-crm-application-features;free-crm-application-adding-contacts-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM application adding contacts scenario",
  "description": "",
  "id": "free-crm-application-features;free-crm-application-adding-contacts-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is browser url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user is on loginpage",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "The login page title is correct",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user entered \"hemsunder\" and \"hem@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user logged into application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The title of the homepage is correct",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user wants to add contacts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enteres \"jack\" and \"jones\" and \"google\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_is_browser_url()"
});
formatter.result({
  "duration": 8929584500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_is_on_loginpage()"
});
formatter.result({
  "duration": 15668400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_login_page_title_is_correct()"
});
formatter.result({
  "duration": 1219400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hemsunder",
      "offset": 18
    },
    {
      "val": "hem@123",
      "offset": 34
    }
  ],
  "location": "ContactsStepDefinition.the_user_entered_and(String,String)"
});
formatter.result({
  "duration": 219937500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_logged_into_application()"
});
formatter.result({
  "duration": 9747441600,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_is_on_HomePage()"
});
formatter.result({
  "duration": 14261900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_title_of_the_homepage_is_correct()"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_wants_to_add_contacts()"
});
formatter.result({
  "duration": 502422400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jack",
      "offset": 14
    },
    {
      "val": "jones",
      "offset": 25
    },
    {
      "val": "google",
      "offset": 37
    }
  ],
  "location": "ContactsStepDefinition.user_enteres_and_and(String,String,String)"
});
formatter.result({
  "duration": 1782577600,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 162908900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 677611600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM application adding contacts scenario",
  "description": "",
  "id": "free-crm-application-features;free-crm-application-adding-contacts-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is browser url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user is on loginpage",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "The login page title is correct",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user entered \"hemsunder\" and \"hem@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user logged into application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The title of the homepage is correct",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user wants to add contacts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enteres \"nick\" and \"menon\" and \"amazon\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_is_browser_url()"
});
formatter.result({
  "duration": 8124832700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_is_on_loginpage()"
});
formatter.result({
  "duration": 25748900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_login_page_title_is_correct()"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hemsunder",
      "offset": 18
    },
    {
      "val": "hem@123",
      "offset": 34
    }
  ],
  "location": "ContactsStepDefinition.the_user_entered_and(String,String)"
});
formatter.result({
  "duration": 345167800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_logged_into_application()"
});
formatter.result({
  "duration": 10034104500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_is_on_HomePage()"
});
formatter.result({
  "duration": 14188800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_title_of_the_homepage_is_correct()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_wants_to_add_contacts()"
});
formatter.result({
  "duration": 443885400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nick",
      "offset": 14
    },
    {
      "val": "menon",
      "offset": 25
    },
    {
      "val": "amazon",
      "offset": 37
    }
  ],
  "location": "ContactsStepDefinition.user_enteres_and_and(String,String,String)"
});
formatter.result({
  "duration": 1596189100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 150810700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 659631400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM application adding contacts scenario",
  "description": "",
  "id": "free-crm-application-features;free-crm-application-adding-contacts-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is browser url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user is on loginpage",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "The login page title is correct",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user entered \"hemsunder\" and \"hem@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user logged into application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The title of the homepage is correct",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user wants to add contacts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enteres \"joseph\" and \"kelen\" and \"cognizant\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_is_browser_url()"
});
formatter.result({
  "duration": 7953844200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_is_on_loginpage()"
});
formatter.result({
  "duration": 24141300,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_login_page_title_is_correct()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hemsunder",
      "offset": 18
    },
    {
      "val": "hem@123",
      "offset": 34
    }
  ],
  "location": "ContactsStepDefinition.the_user_entered_and(String,String)"
});
formatter.result({
  "duration": 307840500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_logged_into_application()"
});
formatter.result({
  "duration": 10140414100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_is_on_HomePage()"
});
formatter.result({
  "duration": 11646100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_title_of_the_homepage_is_correct()"
});
formatter.result({
  "duration": 39400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_wants_to_add_contacts()"
});
formatter.result({
  "duration": 451739200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "joseph",
      "offset": 14
    },
    {
      "val": "kelen",
      "offset": 27
    },
    {
      "val": "cognizant",
      "offset": 39
    }
  ],
  "location": "ContactsStepDefinition.user_enteres_and_and(String,String,String)"
});
formatter.result({
  "duration": 1632667200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.the_user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 187934800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 668736500,
  "status": "passed"
});
});
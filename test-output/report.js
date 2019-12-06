$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Automation/FreeCRMCucumber/src/main/java/com/qa/Features/delas.feature");
formatter.feature({
  "line": 1,
  "name": "FREE CRM Application Deals Features",
  "description": "",
  "id": "free-crm-application-deals-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create new Deals scenario",
  "description": "",
  "id": "free-crm-application-deals-features;create-new-deals-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "The user entered username and password",
  "rows": [
    {
      "cells": [
        "hemsunder",
        "hem@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "The user logged into application",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The title of the homepage is correct",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The user wants to add deals",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enteres deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "google",
        "50",
        "20"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "The user clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.the_user_is_browser_url()"
});
formatter.result({
  "duration": 10179357500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.the_user_is_on_loginpage()"
});
formatter.result({
  "duration": 13000300,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.the_login_page_title_is_correct()"
});
formatter.result({
  "duration": 1298500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.the_user_entered_and(DataTable)"
});
formatter.result({
  "duration": 156158300,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.the_user_logged_into_application()"
});
formatter.result({
  "duration": 9668402000,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.the_user_is_on_HomePage()"
});
formatter.result({
  "duration": 8671200,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.the_title_of_the_homepage_is_correct()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.the_user_wants_to_add_deals()"
});
formatter.result({
  "duration": 295042800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enteres_deal_details(DataTable)"
});
formatter.result({
  "duration": 1439987200,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.the_user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 77330900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 646443900,
  "status": "passed"
});
});
package com.qa.Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="C:/Automation/FreeCRMCucumber/src/main/java/com/qa/Features/delas.feature",
		glue = "com.qa.StepDefinition",
		format = {"pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		dryRun = false,
		monochrome = true,
		strict = true
		
		
		)


public class TestRunner {
	

}

package com.qa.StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginPageStepDefinition {
	WebDriver driver;
	
	@Given("^The user is browsed to url$")
	public void the_user_is_browsed_to_url() {
		System.setProperty("webdriver.chrome.driver", "C:\\Softwares&Drivers\\WebDriver\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Then("^The user is on login page$")
	public void the_user_is_on_login_page() {
		driver.get("https://classic.crmpro.com/index.html");
	}

	@When("^The title of the login page is correct$")
	public void the_title_of_the_login_page_is_correct()  {
		String loginpage_title = driver.getTitle();
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", loginpage_title);
	}

	@Then("^User logged into application$")
	public void user_logged_into_application() throws Exception  {
		driver.findElement(By.name("username")).sendKeys("hemsunder");
		driver.findElement(By.name("password")).sendKeys("hem@123");
		Thread.sleep(4000);
		driver.findElement(By.xpath("//input[@value='Login']")).click();
	   
	}

	@Then("^The title of the home page is correct$")
	public void the_title_of_the_home_page_is_correct()  {
	    String homepage_title = driver.getTitle();
	    Assert.assertEquals("CRMPRO", homepage_title);
	}
	
	@Then("^Close the browser$")
	public void close_the_browser()  {
	    driver.quit();
	}



}

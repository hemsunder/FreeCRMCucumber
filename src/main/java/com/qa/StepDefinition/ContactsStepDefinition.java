package com.qa.StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ContactsStepDefinition {
	
	WebDriver driver;
	public String loginpage_title;
	public String homepage_title;
	
	@Given("^The user is browser url$")
	public void the_user_is_browser_url() {
		System.setProperty("webdriver.chrome.driver", "C:\\Softwares&Drivers\\WebDriver\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://classic.crmpro.com/index.html");
	}

	@Then("^The user is on loginpage$")
	public void the_user_is_on_loginpage() {
	    loginpage_title = driver.getTitle();
	    System.out.println("Login page title is "+loginpage_title);
	}

	@When("^The login page title is correct$")
	public void the_login_page_title_is_correct() {
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", loginpage_title);
	}

	@Then("^The user entered \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_entered_and(String username, String password)  {
		driver.findElement(By.name("username")).sendKeys("hemsunder");
		driver.findElement(By.name("password")).sendKeys("hem@123");
		
		
	}

	@Then("^The user logged into application$")
	public void the_user_logged_into_application() throws Exception {
		Thread.sleep(4000);
		driver.findElement(By.xpath("//input[@value='Login']")).click();
	}

	@Then("^The user is on HomePage$")
	public void the_user_is_on_HomePage() {
	   homepage_title = driver.getTitle();
	   System.out.println("HomePage title is "+homepage_title);
	}

	@When("^The title of the homepage is correct$")
	public void the_title_of_the_homepage_is_correct()  {
		Assert.assertEquals("CRMPRO", homepage_title);
	}

	@When("^The user wants to add contacts$")
	public void the_user_wants_to_add_contacts()  {
	   driver.switchTo().frame("mainpanel");
	   Actions act = new Actions(driver);
	   act.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
	   driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}

	@Then("^User enteres \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enteres_and_and(String fname, String lname, String comp) {
	    driver.findElement(By.name("first_name")).sendKeys(fname);
	    driver.findElement(By.name("surname")).sendKeys(lname);
	    driver.findElement(By.name("client_lookup")).sendKeys(comp);
	}

	@Then("^The user clicks on Save button$")
	public void the_user_clicks_on_Save_button() {
	    driver.findElement(By.xpath("//input[@value='Load From Company']//following-sibling::input[@value='Save']")).click();
	}
	
	@Then("^Quit the browser$")
	public void quit_the_browser()  {
	    driver.quit();
	}

}

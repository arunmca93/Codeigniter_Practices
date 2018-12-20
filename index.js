
//https://www.youtube.com/watch?v=IeWui8d0wHU&list=PLDcL8dhuVQJzgNMCXtlEe8QeDIEByxBFX&index=2
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

var baseURL = 'http://vvinspect.io';
//open Firefox
var driver = new webdriver.Builder().forBrowser('chrome').build();

//Maximize the window
driver.manage().window().maximize();

driver.manage().deleteAllCookies();

driver.get(baseURL);

driver.findElement(webdriver.By.xpath("//*[@id='loginfrm']/form/div[2]/input")).sendKeys("admin");
driver.findElement(webdriver.By.xpath("//*[@id='loginfrm']/form/div[3]/input")).sendKeys("test123");
driver.findElement(webdriver.By.xpath("//*[@id='loginfrm']/form/div[4]/button")).click()
driver.findElement(webdriver.By.id('user_menu')).click();

//driver.findElement(By.css('#sidebar-menu > div > ul > li:nth-child(3) > a')).click();
//#sidebar-menu > div > ul > li:nth-child(3) > a

driver.navigate().to(baseURL+'/users');

//This is test with githup



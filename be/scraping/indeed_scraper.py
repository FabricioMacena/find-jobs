from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

from time import sleep

def jobs(job_name, job_city):
    
    driver = webdriver.Chrome()
    driver.get("https://br.indeed.com/")

    try:
        element = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, 'text-input-what'))
        )
    except Exception as e:
        print(e)
    finally:
        input_job = driver.find_element(By.ID, 'text-input-what')
        input_job.click()
        sleep(0.5)
        input_job.send_keys(job_name)

    try:
        element = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, 'text-input-where'))
        )
    except Exception as e:
        print(e)
    finally:
        input_city = driver.find_element(By.ID, 'text-input-where')
        input_city.click()
        sleep(1)

        actions = ActionChains(driver)
        actions.key_down(Keys.CONTROL).send_keys('a').key_up(Keys.CONTROL).perform()

        input_city.send_keys(Keys.BACKSPACE)

        sleep(0.5)
        input_city.send_keys(job_city)
        sleep(0.5)
        input_city.send_keys(Keys.ENTER)

    # PÁGINA DE VAGAS


    try:
        elements = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'job_seen_beacon'))
        )
    except Exception as e:
        print(e)
    finally:
        html_source = driver.page_source

    try:
        driver.implicitly_wait(5)
        soup = BeautifulSoup(html_source, 'html.parser')
        jobs = soup.find_all('div', class_='job_seen_beacon')
    except Exception as e:
        print(e)
    finally:
        print(len(jobs))
        list_jobs = []

        for job in jobs:
            job_tag = job.find('a', class_='jcs-JobTitle')

            job_name = job_tag.find('span').text
            job_href = "https://br.indeed.com" + job_tag.get('href')

            company_tag = job.find('div', class_='company_location')

            company_name = company_tag.find('span').text
            company_address = company_tag.find('div', class_='eu4oa1w0').text

            day_posted = job.find('span', class_='css-qvloho eu4oa1w0').text

            day_posted = day_posted.replace("Posted", "") if day_posted[0] == 'P' else day_posted.replace("Employer", "")

            dict_job = {
                'site_name': 'Indeed',
                'job_name': job_name,
                'company_name': company_name,
                'company_adress': company_address,
                'day_posted': day_posted,
                'job_href': job_href
            }

            list_jobs.append(dict_job)

    sleep(5)

    driver.close()
    return list_jobs
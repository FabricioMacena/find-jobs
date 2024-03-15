from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from time import sleep

def jobs(job_name, job_city):
    driver = webdriver.Chrome()
    driver.get("https://www.linkedin.com/")

    try:
        element = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '/html/body/nav/ul/li[4]/a'))
        )
    except Exception as e:
        print(f"Erro ao tentar encontrar o botão inicial: {e}")
    finally:
        btn_jobs = driver.find_element(By.XPATH, '/html/body/nav/ul/li[4]/a')
        btn_jobs.click()

    driver.implicitly_wait(5)

    try:
        element = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="job-search-bar-keywords"]'))
        )
    except Exception as e:
        print(e)
    finally:
        input_job = driver.find_element(By.XPATH, '//*[@id="job-search-bar-keywords"]')
        input_job.click()
        sleep(0.5)

        input_job.send_keys(job_name)


    try:
        element = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="job-search-bar-location"]'))
        )
    except Exception as e:
        print(e)
    finally:
        input_city = driver.find_element(By.XPATH, '//*[@id="job-search-bar-location"]')
        input_city.click()
        sleep(0.5)

        input_city.clear()
        input_city.send_keys(job_city)
        sleep(0.5)

        input_city.send_keys(Keys.DOWN)
        sleep(0.5)
        input_city.send_keys(Keys.ENTER)


    sleep(3)


    try:
        driver.implicitly_wait(10)

        html_source = driver.page_source
        soup = BeautifulSoup(html_source, 'html.parser')

        ul_tag = soup.find('ul', class_='jobs-search__results-list')

        print(ul_tag)

        jobs = ul_tag.find_all('li')

    except Exception as e:
        print(e)
    finally:
        list_jobs = []

        for job in jobs:
            job_name = job.find('h3', class_='base-search-card__title').text
            company_name = job.find('h4', class_='base-search-card__subtitle').text
            company_address = job.find('span', class_='job-search-card__location').text
            job_href = job.find('a').get('href')
            day_posted = job.find('time').text

            dict_job = {
                'site_name': 'Linkedin',
                'job_name': job_name.strip(),
                'company_name': company_name.strip(),
                'company_address': company_address.strip(),
                'day_posted': day_posted.strip(),
                'job_href': job_href
            }

            list_jobs.append(dict_job)

    sleep(5)

    driver.close()
    return list_jobs
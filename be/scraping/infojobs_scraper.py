from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

from time import sleep

def jobs(job_name, job_city):

    driver = webdriver.Chrome()
    
    driver.get("https://www.infojobs.com.br/")

    driver.implicitly_wait(10)
    
    # aceitando os termos
    try:
        elemnet = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, 'didomi-notice-agree-button'))
        )
    except Exception as e:
        print(e)
        driver.quit()
    finally:
        driver.find_element(By.ID, 'didomi-notice-agree-button').click()


    # enviando dados ao input de empregos
    try:
        try:
            element = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.ID, 'keywordsCombo'))
            )

            input_field1 = driver.find_element(By.ID, 'keywordsCombo')
            input_field1.clear()

            input_field1.send_keys(job_name)
            sleep(2)
        except Exception as e:
            print(f"Houve um erro ao inserir o emprego: {e}")

        try:
            element = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.ID, 'city'))
            )

            input_field2 = driver.find_element(By.ID, 'city')
            input_field2.clear()

            input_field2.send_keys(job_city)
        except Exception as e:
            print(f"Houve um erro ao inserir a cidade: {e}")
            
    except Exception as e:
        print(e)
        driver.quit()
    finally:
        sleep(5)
        input_field2.send_keys(Keys.DOWN)
        input_field2.send_keys(Keys.ENTER)


    # selecionando as vagas
    try:
        driver.implicitly_wait(10)
        html_source = driver.page_source
        soup = BeautifulSoup(html_source, 'html.parser')

        jobs = soup.find_all('div', class_='pl-24')
    except Exception as e:
        print(e)
    finally:
        print(len(jobs))
        list_job = []

        for job in jobs:
            job_name = job.find('h2').text
            job_href = job.find('a').get('href')
            company_name = job.find('div', class_='text-body').text
            company_address = job.find('div', class_='small text-medium mr-24').text

            dict_job = {
                'job_name': job_name.strip(),
                'company_name': company_name.strip(),
                'company_address': company_address.strip(),
                'job_href': 'https://www.infojobs.com.br' + job_href.strip()
            }

            list_job.append(dict_job)

    driver.close()
    return list_job
import { useState } from "react";
import { Container, Input, Submit } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Main(){
    const [formData, setFormData] = useState({
        jobname: '',
        jobcity: ''
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const queryParams = new URLSearchParams(formData).toString();
            
            const dataJob = formData;
            setFormData({
                jobname: '',
                jobcity: ''
            })

            const response = await axios.get(`http://localhost:5000/api/jobs?${queryParams}`);

            navigate('jobs/', { state: { dataJob: dataJob, jobsData: response.data } });
        } catch (error){
            console.log('Erro na ao fazer requisição: ', error)
        }
    }

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    name="jobname" 
                    id="jobname"
                    value={formData.jobname}
                    onChange={handleInputChange}
                    placeholder="Digite o Cargo ou Empresa" />
                    
                <Input 
                    type="text" 
                    name="jobcity" 
                    id="jobcity"
                    value={formData.jobcity}
                    onChange={handleInputChange}
                    placeholder="Insira a Cidade" />

                <Submit type="submit" value="Enviar" />
            </form>
        </Container>
    )
}
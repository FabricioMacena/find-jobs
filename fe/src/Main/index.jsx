import { Container, Input, Submit } from "./styles";

export default function Main(){
    return(
        <Container>
            <form action="post">
                <Input 
                    type="text" 
                    name="jobname" 
                    id="jobname"
                    placeholder="Digite o Cargo ou Empresa" />
                    
                <Input 
                    type="text" 
                    name="jobcity" 
                    id="jobcity"
                    placeholder="Insira a Cidade" />

                <Submit type="submit" value="Enviar" />
            </form>
        </Container>
    )
}
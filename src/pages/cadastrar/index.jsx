import { useNavigate } from "react-router-dom"
import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { api } from "../../services/api"

import { useForm } from "react-hook-form"

import {
	Container,
	Title,
	Column,
	TitleLogin,
	SubtitleLogin,
	Wrapper,
	TenhoContaText,
	LoginButton,
} from "./styles"
import { useState } from "react"

const Cadastrar = () => {
	const navigate = useNavigate()

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const { control, handleSubmit } = useForm({
		reValidateMode: "onSubmit",
		mode: "onSubmit",
	})

	const addUser = async () => {
		try {
			if (name === "" || email === "" || password === "") {
				alert("Todos os campos são obrigatórios")
				return
			} else {
				await api.post("/users", {
					nome: name,
					email: email,
					senha: password,
				})
				navigate("/feed")
			}
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<Header />
			<Container>
				<Column>
					<Title>
						A plataforma para você aprender com experts, dominar as principais
						tecnologias e entrar mais rápido nas empresas mais desejadas.
					</Title>
				</Column>
				<Column>
					<Wrapper>
						<TitleLogin>Comece agora grátis</TitleLogin>
						<SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
						<form onSubmit={handleSubmit(addUser)}>
							<Input
								placeholder="Nome..."
								leftIcon={<MdPerson />}
								name="name"
								control={control}
								onChange={(e) => setName(e.target.value)}
							/>
							<Input
								placeholder="E-mail"
								leftIcon={<MdEmail />}
								name="email"
								control={control}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								type="password"
								placeholder="Senha"
								leftIcon={<MdLock />}
								name="senha"
								control={control}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button
								title="Criar minha conta"
								variant="secondary"
								type="submit"
							/>
						</form>
						<SubtitleLogin>
							Ao clicar em "criar minha conta grátis", declaro que aceito as
							Políticas de Privacidade e os Termos de Uso da DIO.
						</SubtitleLogin>
						<TenhoContaText>Já tenho conta. </TenhoContaText>
						<LoginButton onClick={() => navigate("/login")}>
							Fazer login
						</LoginButton>
					</Wrapper>
				</Column>
			</Container>
		</>
	)
}

export { Cadastrar }

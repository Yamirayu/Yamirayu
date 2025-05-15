<!DOCTYPE html>
<html>

<head>
	<title>Login</title>
	<link rel="stylesheet" type="text/css" href="login.css">
	<style>
		body {
			font-family: 'Arial', sans-serif;
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
			transition: all 0.5s;
			overflow: hidden;
		}

		.light-mode {
			background: linear-gradient(135deg, #a8d8ea 0%, #ddf0f7 100%);
			color: #333;
		}

		.dark-mode {
			background: linear-gradient(135deg, #0a192f 0%, #172a45 100%);
			color: #fff;
		}

		.toggle-container {
			position: relative;
			width: 80px;
			height: 40px;
		}

		.toggle-input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		.toggle-slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border-radius: 40px;
			transition: .4s;
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
			overflow: hidden;
		}

		.light-mode .toggle-slider {
			background: #7ec4f0;
		}

		.dark-mode .toggle-slider {
			background: #0f1c2e;
		}

		.toggle-slider:before {
			content: "";
			position: absolute;
			height: 30px;
			width: 30px;
			left: 5px;
			bottom: 5px;
			border-radius: 50%;
			transition: .4s;
			z-index: 2;
		}

		.light-mode .toggle-slider:before {
			background: #FFEB3B;
			box-shadow: 0 0 15px rgba(255, 193, 7, 0.6);
		}

		.dark-mode .toggle-slider:before {
			background: #f5f5f5;
			transform: translateX(40px);
			box-shadow: 0 0 10px rgba(176, 190, 197, 0.6);
		}

		.cloud {
			position: absolute;
			background: rgba(255, 255, 255, 0.7);
			border-radius: 50%;
			filter: blur(2px);
		}

		.cloud1 {
			width: 20px;
			height: 12px;
			top: 10px;
			left: 45px;
		}

		.cloud2 {
			width: 25px;
			height: 15px;
			top: 18px;
			left: 55px;
		}

		.star {
			position: absolute;
			background: white;
			clip-path: polygon(50% 0%, 61% 35%, 98% 35%,
					68% 57%, 79% 91%, 50% 70%,
					21% 91%, 32% 57%, 2% 35%, 39% 35%);
			opacity: 0;
			transition: opacity 0.8s;
		}

		.dark-mode .star {
			opacity: 0.9;
		}

		.star1 {
			width: 3px;
			height: 3px;
			top: 10px;
			left: 20px;
		}

		.star2 {
			width: 2px;
			height: 2px;
			top: 15px;
			left: 35px;
		}

		.star3 {
			width: 2.5px;
			height: 2.5px;
			top: 5px;
			left: 60px;
		}
	</style>
</head>

<body class="light-mode">
	<label class="toggle-container">
		<input type="checkbox" class="toggle-input" id="themeToggle">
		<div class="toggle-slider">
			<div class="cloud cloud1"></div>
			<div class="cloud cloud2"></div>
			<div class="star star1"></div>
			<div class="star star2"></div>
			<div class="star star3"></div>
		</div>
	</label>
	<script>
		const toggle = document.getElementById('themeToggle'); // Seleciona o botão toggle
		const div = document.body; // Seleciona o corpo da página

		// Verifica se há um tema salvo no localStorage e aplica o tema correspondente
		if (localStorage.getItem('theme') === 'dark-mode') {
			div.classList.add('dark-mode'); // Adiciona a classe do tema escuro ao body
			toggle.checked = true; // Mantém o toggle ativado caso o tema já esteja salvo
		}

		// Evento de mudança do tema ao alternar o botão
		toggle.addEventListener('change', function () {
			div.classList.toggle('dark-mode'); // Alterna entre modo claro e escuro
			// Atualiza o localStorage com a escolha do usuário
			localStorage.setItem('theme', div.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
		});
	</script>
	</head>


	<div class="container">
		<div class="header">
			<h1>Login</h1>
		</div>

		<form name="login" onsubmit="return false;" method="post">
			<ul>
				<li>Username: <input class="username" type="text" name="nome"></li>
				<li>Password: <input class="password" type="password" name="senha"></li>
				<li><span id="error-message" class="error"></span></li>
				<!-- Mensagem de erro abaixo do campo de senha -->
				<li><a href="esqueci_a_senha.html">Esqueci minha senha</a></li>
			</ul>
			<input type="button" class="submit" value="Entrar" name="submit" onclick="validate()">

			<div class="cadastro">
				<p>Ainda não tem uma conta? <a href="esqueci a senha.html">Cadastre-se aqui</a></p>
			</div>
		</form>
	</div>

	<script src="login.js"></script>
</body>

</html>

// Seleciona o título principal pelo ID
const title = document.getElementById("main-title");
const titleText = title.textContent;
title.innerHTML = ""; // Limpa o conteúdo original

// Divide o texto do título em letras e adiciona cada uma como um span
titleText.split("").forEach((letter, index) => {
  const span = document.createElement("span");

  // Se o caractere for um espaço, adiciona um espaço visível
  if (letter === " ") {
    span.innerHTML = "&nbsp;"; // Preserva o espaço
  } else {
    span.textContent = letter; // Para as letras normais
  }

  span.classList.add("letter");

  // Adiciona um delay de animação individual para cada letra
  span.style.animationDelay = `${index * 0.03}s`; // Atraso de 100ms por letra

  // Adiciona cada letra ao título
  title.appendChild(span);
});

var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");


//Convertendo para um array novamente, e pegando os itens do Local localStorage
var todos = JSON.parse(localStorage.getItem("list_To-dos")) || [];// o "|| []" seria que se a primeira situacao nao retornar nenhum valor, ele ira para a segunda 
function renderTodos(){

	listElement.innerHTML = "";//Limpando tudo que estiver na "ul", para quando mostrarmos, os itens não se repetirem

	for(todo of todos){
		var todoElement = document.createElement("li");
		var todoText = document.createTextNode(todo);
		
		todoElement.appendChild(todoText);
		listElement.appendChild(todoElement);

		var linkElement = document.createElement("a");
		var textLink = document.createTextNode("Excluir");

		linkElement.setAttribute("href", "#");	

		var position = todos.indexOf(todo);//Retorna a posição de acordo com o nome procurado(todo) e no array escolhido(todos)

		linkElement.setAttribute('onclick', 'deleteTodo('+ position + ')');


		linkElement.appendChild(textLink);
		listElement.appendChild(linkElement);

	}
}

renderTodos();


function addTodo(){

	var textInput = inputElement.value;
	todos.push(textInput);//adicionando o textInput no array "todos"
	inputElement.value = "";//limpando a caixa do input

	renderTodos();
	saveToStorage();

}

buttonElement.onclick = addTodo;

function deleteTodo(position){
	todos.splice(position, 1); //apagando o primeiro item a partir do position
	renderTodos();
	saveToStorage();
}


function saveToStorage(){
	localStorage.setItem("list_To-dos", JSON.stringify(todos));//criando uma linha e setando os item do todos (ja convertidos para string) no local Storage



}

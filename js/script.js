//stampare in pagina un item per ogni elemento contenuto in un array
//ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
//predisporre un input per aggiungere un nuovo item alla lista: 
//digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista


var app = new Vue (
    {
        el: '#root',
        data: {
           //array di Todo list
           todoList: [
               'Fare la spesa',
               'Fare i compiti',
               'Stendere il bucato'
           ],

           newTodo: '',
        },

        methods: {
            
            //funzione che al click del button aggiunge il valore della input all' array e svuota la input stessa
            addNewTodo(){
                if(this.newTodo.length > 0){
                    this.todoList.push(this.newTodo);
                    this.newTodo = '';
                }         
            },

            //funzione che al click della X rimuove l' elemento
            removeTodo(index){
                this.todoList.splice(index,1)
            }
        }
    }
);
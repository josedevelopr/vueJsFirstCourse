var data= 
{       
    tareas:[
        {
         texto:'Aprender Vue.js',
         terminada:false
        },
        {
         texto:'Aprender Angular 2',
         terminada:false
        },
        {
         texto:'Aprender Ionic 2',
         terminada:false
        },       
    ],
    nuevaTarea:''
 }


//creando componentes
Vue.component('nueva-tarea',{
    template:`<div class="input-group">          
                <input type="text" v-model="nuevaTarea" v-on:keyup.enter='agregarTarea' placeholder="Escribe una nueva tarea" class="form-control">     
                <span class="input-group-btn">
                <button class="btn btn-primary" v-on:click='agregarTarea'>Agregar</button>
                </span>
            </div>`,
    data:function(){
        return data;
    },
    methods:{
        agregarTarea:function(){
            var texto = this.nuevaTarea.trim();

            if(texto){
                this.tareas.push({
                    texto:texto,
                    terminada:false
                })
            }
            else
            {
                alert('Por favor escriba una tarea para agregar')
            }
            this.nuevaTarea = '';            
        }
    }
})

Vue.component('lista-tarea',{
    template:`<ul class="list-group">  
                <li v-for='(tarea,indice) in tareas' class="list-group-item" v-bind:class='{terminada: tarea.terminada}'>
                    {{tarea.texto}} 
                    <span class="float-right ">
                        <button type="button" class="btn btn-success btn-xs" 
                            v-on:click='tarea.terminada =!tarea.terminada'>
                        Done
                        </button>
                        <button type="button" class="btn btn-danger btn-xs" 
                            v-on:click='borrar(indice)'>
                        Delete
                        </button>
                    </span>
                </li>
            </ul>`,
    data:function(){
        return data;
    },
    methods:{
       
        borrar:function(indice){
            this.tareas.splice(indice,1);
        }
    }
})
Vue.component('titulo',{
    //la interpolacion dentro de un componente debe ser con propiedades que se 
    //encuentren dentro del componente mismos, por eso se crea un data al finalizar
    template:'<h2>{{titulo}}</h2>',
    data: function(){
        return{titulo:'--Lista de tareas--'}
    }
})

var app = new Vue({
    el:'#app',        
    data:data,    
})
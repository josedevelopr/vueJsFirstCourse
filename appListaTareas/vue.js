var app = new Vue({
    el:'#app',
    data:{
       titulo:'Lista de tareas',
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
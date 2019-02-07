var app = new Vue(
    {
        el : '.vue',
        data:{
            mensaje :'Aprende Vue.js facilmente',
            src:'https://vuejs.org/images/logo.png'
        },
        methods:{
            mostrarMensaje:function(){
                return this.mensaje;
            }
        }
    }
)
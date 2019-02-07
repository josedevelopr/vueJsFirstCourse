new Vue({
    el:'#eventos',
    data:{
        contador:0,
        x:0,
        y:0,
        clicks:0
    },
    methods:{
        sumarUno:function()
        {
            this.contador +=1;
        },
        restarUno:function()
        {
            this.contador -=1;
        },
        alerta:function(mensaje){
            alert(mensaje);
        },
        mostrarUbicacion(evento){
            //Estamos obteniendo el envento de mousemove
            // y estamos pidiendo que nos brinde la posicion en X y Y
            this.x = evento.clientX;
            this.y = evento.clientY;
        },
        sumar:function(cantidad){
            this.contador+=cantidad;
        },
        clickButton:function(){
            this.clicks+=1;
        }
        
    }
})
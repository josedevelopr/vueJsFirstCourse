var app = new Vue(
    {
        el : '#vm',
        data:{
            primero:0,
            segundo:0,
            tercero:0,
            cuarto:0,
            quinto:0,
            suma:0
        },    
        //computed -> propiedad que cambia automaticamente, cuando uno de sus elementos es alterado
        computed:{
            total:function(){
                return this.primero+this.segundo+this.tercero+this.cuarto;
            }
        }    
    }
)
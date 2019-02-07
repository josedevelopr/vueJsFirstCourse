var app = new Vue(
    {
        el : '#vm',
        data:{
            imagen:'http://lorempixel.com/300/200',
            texto : 'Bienvenidos al curso de vue.js 2!',
            html : '<em>Bienvenidos al curso de vue.js 2!</em>',
            mostrar:false ,
            parrafo:4,
            paises:[
                {
                    nombre:'Mexico',
                    idioma:'español'
                },
                {
                    nombre:'España',
                    idioma:'español'
                },
                {
                    nombre:'Colombia',
                    idioma:'español'
                }
            ],
            empleado:{
                nombre:'Carlos Castro',
                edad:'30 años',
                nacionalidad:'Mexicano',
                profesion:'Programador',
                empresa:'IBM',
                telefono:'978654312'
            }

        },    
    }
)
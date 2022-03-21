let persona = {
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 28,
        idioma: 'es',
        get lang() {
            return this.idioma.toUpperCase();
        },
        set lang(lang) {
            return this.idioma = lang;
        },
        get nombreCompleto() {
            //this funciona como apuntador a el objeto persona que se ejecuta 
            //y que contiene los atributos nombre y apellido
            return this.nombre + ' ' + this.apellido;
        }
    }
    //get
console.log(persona.nombreCompleto);
console.log(persona.idioma);
persona.lang = 'en';
console.log(persona.idioma);
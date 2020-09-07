class Pregunta {
    pregunta = '';
    favor = 0;
    contra = 0;
    abstencion = 0;

    set textoPregunta(texto){
        this.pregunta = texto;
        console.log('Objeto pregunta: ' + this.pregunta);
        this.favor = 0;
        this.contra = 0;
        this.abstencion = 0;
    }

    masFavor(){
        this.favor++;
        console.log('fav' + this.favor);
    }

    masContra(){
        this.contra++;
        console.log('cont' + this.contra);
    }

    masAbstencion(){
        this.abstencion++;
        console.log('abs' + this.abstencion);
    }

    get datos(){
        let divRes = document.createElement('div');

        divRes.classList = 'text-center';

        divRes.innerHTML = `<h3>Pregunta: ${this.pregunta}</h3>
        <p class="alert alert-success">A favor: ${this.favor}</p>
        <p class="alert alert-danger">En contra: ${this.contra}</p>
        <p class="alert alert-warning">Abstenciones: ${this.abstencion}</p>`;
        return divRes;
    }
}
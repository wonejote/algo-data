class Knight
{
    constructor(){
        this.visitados = new Set();
        this.queue = [];
        this.queueRetroceso = [];
        this.encontrado = false;
        this.camino = [];

        this.movimientosPosibles = [
            [-1, 2, "lu1"], //leftUp1
            [-2, 1, "lu2"], //leftUp2
            [-1,-2, "ld1"], //leftDown1
            [-2,-1, "ld2"], //leftDown2
            [ 1, 2, "ru1"], //rightUp1
            [ 2, 1, "ru2"], //rightUp2
            [ 1,-2, "rd1"], //rightDown1
            [ 2,-1, "rd2"], //rightDown2

    ]

    }

    movimientos(x,y,xf,yf){
        let nuevo = [x,y].toString();
        
            this.visitados.add(nuevo);
        for ( let posible of this.movimientosPosibles){
            let movimiento = [x + posible[0], y + posible[1]];
            let movimientoInvertir = [x + posible[0],  y+  posible[1], posible[2]]

            if (movimiento[0] >= 0 && movimiento[0] <= 7 && movimiento[1] >= 0 && movimiento[1] <= 7 )
            {   let movimientoAdd = movimiento.toString();
                if (!this.visitados.has(movimientoAdd)) {
                    this.visitados.add(movimientoAdd);
                    this.queue.push(movimiento);
                    this.queueRetroceso.push(movimientoInvertir);
                if (movimiento[0] == xf && movimiento[1] == yf){
                    console.log("encontrado " + movimiento); 
                    this.encontrado = true;
                    return movimientoInvertir;
                }
                }
            }
            
        
    }
    }

    movimientoPorNivel(x,y, xf,yf)
    {
    
        this.queue.push([x,y]);
        let turnos = 0;

        while (this.queue.length > 0 && this.encontrado == false){

            let size = this.queue.length;
            let turno = [];

            for ( let i = 0; i < size; i++){
                let actual = this.queue.shift();
               let final = this.movimientos(actual[0],actual[1],xf,yf);
                if (this.encontrado){
                     this.devolver(final,x,y);
                    return;}
            }
            turnos++;
        
        }
    
    }
    getq(){
        console.log(this.queueRetroceso);
    }

    devolver (punto,x,y){
         if (!punto){this.camino.unshift([x,y]); console.log(this.camino); return;} 
        
        let actual = [punto[0], punto[1]];
        if (actual[0] == x && actual[1] == y){
            console.log(this.camino);
            return;}
        this.camino.unshift([punto[0],punto[1]]);
        let toMov = [];
        

        switch(punto[2]){
            case "lu1" : toMov = [1,-2]; break;
            case "lu2" : toMov = [2, -1]; break;
            case "ld1" : toMov = [1, 2]; break;
            case "ld2" : toMov = [2, 1]; break;
            case "ru1" : toMov = [-1,-2]; break;
            case "ru2" : toMov = [-2, -1]; break;
            case "rd1" : toMov = [-1, 2]; break;
            case "rd2" : toMov = [-2, 1]; break;
        }
        let NextPunto = [actual[0] + toMov[0], actual[1] + toMov[1]];

        this.devolver(this.find(NextPunto[0], NextPunto[1]),x, y );


    }
    find(xf,yf){
        for (let element of this.queueRetroceso){
            if (element[0] == xf && element[1] == yf)
            {return element;}
        }
    }
}

let caballo = new Knight();

caballo.movimientoPorNivel(1,0,6,4);



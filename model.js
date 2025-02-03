export default class Serpiente {
    constructor(name,orangeEat){
        this.name = name
        this.orangeEat = orangeEat
        this.point = orangeEat.length
    }
}


serpiente = new Serpiente("Cesar", 0)


console.log(serpiente)
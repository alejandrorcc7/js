/**
 * How to implimene Singleton?
 * 
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 * constructor and save the instance in a static variable
 */
class Singleton {
    static instace = underfined;

constructor(version) {
    this.version = this.version;
}

static getInstance(version) {
    if(!Singleton.instace) {
        Singleton.instace = new Singleton(version);
    }
    
    return Singleton.instace; 
    }
}

function appSigleton() {
    const singleton1 =  Singleton.getInstance("version-1");
    const singleton2 =  Singleton.getInstance("version-2");
    const singleton3 =  Singleton.getInstance("version-3");

    console.log(singleton1 === singleton2);
}

appSigleton();






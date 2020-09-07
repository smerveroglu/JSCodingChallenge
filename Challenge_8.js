class TownElements {
    constructor (name, year){
        this.name = name;
        this.year = year;
    }
}

class Park extends TownElements {
    constructor (name, year, parkArea, tree){
        super(name, year);
        this.tree = tree;
        this.parkArea = parkArea;
    }
    treeDensity(){
        return this.tree/this.parkArea;
    }
    oneThousandTree(){
        if(this.tree > 1000){
            console.log(`${this.name} has more than 1000 trees.`);
        }
    }
}

class Street extends TownElements {
    constructor (name, year, length, size){
        super(name, year);
        this.length = length;
        this.size = size;
    }
    streetSize(){
        const sizeMap = new Map();
        sizeMap.set(1000, 'tiny');
        sizeMap.set(1500, 'small');
        sizeMap.set(2000, 'normal');
        sizeMap.set(2500, 'big');
        sizeMap.set(3000, 'huge');
        console.log(`${this.name}, build in ${this.year}, is a ${sizeMap.get(this.size)} street.`);
        

    }
}

const parks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const streets = [new Street('Ocean Avenue', 1999, 1.1, 2500),
                   new Street('Evergreen Street', 2008, 2.7, 1500),
                   new Street('4th Street', 2015, 0.8, 1000),
                   new Street('Sunset Boulevard', 1982, 2.5, 3000)];



function reportofPark(park){
    console.log(`--------------------------------------------------------------------`);
    const avgp = (new Date().getFullYear() * 3 - (park[0].year+park[1].year+park[2].year))/park.length;
    console.log(`Our ${park.length} parks have an average of ${avgp} years.`);
    for(const p of park){
        console.log(`${p.name} has a tree density of ${p.treeDensity()} trees per square km.`);
        p.oneThousandTree();
    }
    console.log(`--------------------------------------------------------------------`);
}
                
function reportofStreet(street){
                
    var total = 0;
    var avgs = 0;
    for(const s of street){
        total += s.length;
    }
    avgs = total / street.length;
    console.log(`Our ${street.length} streets have a total length of ${total} km, with an average of ${avgs} km.`);
    street.forEach(s => s.streetSize());
    console.log(`--------------------------------------------------------------------`);
}
                
reportofPark(parks);
reportofStreet(streets);
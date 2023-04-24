class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        const noMatchedValues = []
        let reply
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] != key) {
                    noMatchedValues.push(currentBucket[i])
                } else {
                    reply = currentBucket[i][0]
                }
            }
            this.data[address] = noMatchedValues
            return reply
        }
        return undefined;
    }
    
    getAllKeys(){
        let reply = []
        // Tu código aquí 👈
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let y = 0; y < this.data[i].length; y++) {
                    console.log(this.data[i][y]);
                    reply.push(this.data[i][y][0])
                }
            }
            
        }

        return reply
    }
    
}

const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990)
myHashTable.set("Mariana", 1998)
myHashTable.set("Miranda", 2000)
myHashTable.set("Cat", 2010)

console.log(myHashTable.getAllKeys());



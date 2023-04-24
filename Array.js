class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    unShiftIndex() {
        for (let i = this.length - 1; i >= 0; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.length++;
    }
    
    unshift(item){
        if (item) {
            if(this.length == 0){
                this.push(item)
            } else {
                this.unShiftIndex();
                this.data[0] = item;
            }
        }
        return this.length
    }

    shift(){
        if(this.length == 0){
            return undefined
        } else {
            return this.delete(0);
        }
    }
}

const myArray = new MyArray();

console.log(myArray.unshift("!!!"));
console.log(myArray.unshift("Platzinauta"));
console.log(myArray.unshift("lograste"));
console.log(myArray.unshift("lo"));
console.log(myArray.unshift("!!!"));
console.log(myArray.unshift("Suerte"));
console.log(myArray.unshift("Con el"));
console.log(myArray.unshift("desafio"));
console.log(myArray.unshift("platzinauta"));
console.log(myArray.unshift("Un 🐱 random en el desafío"));


console.log(myArray.shift());
console.log(myArray.shift());
console.log(myArray.data);
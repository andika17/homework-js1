function getRandomNumber() {
    // get random number from 1 - 10
    return Math.random() * 10;
  }
  
   class AppleTree {
      // Initialize a new AppleTree
      constructor() {
        this._umur = 0;
        this._tinggi = 0;
        this._qty = [];
        this._health = true;
      }
  
      // Grow the tree
    grow() {
        const tinggiSekarang = getRandomNumber();
        this._tinggi = this._tinggi + tinggiSekarang;
        this._qty = [];
        this._umur++;
        if(this._umur > 10){
            this._health = false; //jika umur pohon lebih dari 10 tahun, kesehatan pohon sama dengan false
           console.log("pohon apel ini busuk")
          }
       
    }
  
    // Produce some apple
    produceApples() {
          const jumlahProduksi = Math.floor(getRandomNumber());
          //perulangan for untuk apel yg diproduksi
          for (let i = 0; i < jumlahProduksi; i++) {
              const apelNew = 0;
              this._qty.push(apelNew); 
          }
    }
  
     // Get some fruits
    harvest() {
          return this._qty.length //mengembalikan data jumlah array pada this._qty
    }
  }
  
  class Apple {
    constructor() {
      this.qty = 1
    }
  }
  
  var tree = new AppleTree()
  do {
    tree.grow();
    tree.produceApples();
  
    console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi} Meter | Apples Harvested = ${tree.harvest()}`);
  } while (tree._health != false)
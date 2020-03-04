function Product(name, description, Import, Export, min_stock,cur_stock){
    this.Name = name;
    this.Description = description;
    this.Import = Import;
    this.Export = Export;
    this.Export_btw= Export*1.21;
    this.Min_stock = min_stock;
    this.Cur_stock = cur_stock;
}

function Clothing(name, description, Import, Export, min_stock,cur_stock, color, size){
    Product.call(this, name, description, Import, Export, min_stock,cur_stock);
    this.Color = color;
    this.Size = size;
}

function Tierlantin(name, description, Import, Export, min_stock,cur_stock, weight){
    Product.call(this, name, description, Import, Export, min_stock,cur_stock);
    this.Weight = weight;
}

function Decoration(name, description, Import, Export, min_stock,cur_stock, length, color, amountinpackage){
    Product.call(this, name, description, Import, Export, min_stock,cur_stock);
    this.Length = length;
    this.Color = color;
    this.AmountInPackage = amountinpackage;
}
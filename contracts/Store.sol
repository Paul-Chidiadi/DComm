pragma solidity ^0.5.0;

contract Store {
  uint public productCount = 0;

  struct Product {
    uint id;
    uint price;
    string name;
    string imageUrl;
    bool bought;
    address owner;
  }

  mapping(uint => Product) public products;

  constructor() public {
    uploadProduct(10, "iwatch", "images/watch.png");
    uploadProduct(8, "bracelet", "images/bracelet.png");
  }

  function uploadProduct(uint _price, string memory _name, string memory _imageUrl) public {
    productCount ++;
    address _owner = msg.sender;
    products[productCount] = Product(productCount, _price, _name, _imageUrl, false, _owner);
  }

}
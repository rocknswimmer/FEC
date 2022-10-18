import React, { useState, useEffect } from 'react';

const ItemSelection = ({ currentDisplayedStyle, productId }) => {

  const [sizeDropdownIsOpen, setSizeDropDownOpen] = useState(false);
  const [quantityDropdownIsOpen, setQuantityDropDownOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [] = useState();


  //makes array of sku-styles objects
  const arrayMaker = (obj) => {
    const styleArr = [];
    for (let key in currentDisplayedStyle.skus) {
      let newObj = currentDisplayedStyle.skus[key];
      newObj.sku = key;
      newObj.product_id = productId;
      newObj.style_id = obj.style_id;
      styleArr.push(newObj);
    }
    return styleArr;
  };

  //handler for size dropdown
  const toggleSizeDropdown = () => {
    console.log('size dropdown should be toggled');
    setSizeDropDownOpen(!sizeDropdownIsOpen);
  };

  const toggleQuantityDropdown = () => {
    console.log('quantity dropdown should be toggled');
    setQuantityDropDownOpen(!quantityDropdownIsOpen);
  };

  // Closes the drop down when the mouse stops hovering
  const handleMouseLeavingSizeDropDown = (event) => {
    setSizeDropDownOpen(false);
  };

  const handleMouseLeavingQuantityDropDown = (event) => {
    setQuantityDropDownOpen(false);
  };

  //sets selected Sku for quantity/cart
  const handleItemClick = (index) => {
    let skuObj = {};
    Object.assign(skuObj, items[index]);
    console.log(skuObj);
    setSelectedItem(skuObj);
    setSizeDropDownOpen(false);
  };

//When a sku has been selected, the fn below should make the appropriate num of quantity options
  const quantityArrayMaker = () => {
    let quantityArr = [];
    if (selectedItem.quantity > 15) {
      quantityArr = Array.from(Array(16).keys());

    } else if (selectedItem.quantity === 0) {
      // quantityArr make it so it says it's out of stock
    } else {
      quantityArr = Array.from(Array(selectedItem.quantity).keys());
    }
    quantityArr.splice(0, 1, '--');
    return quantityArr;
  };

  //when a quantity has been chosen, it will update the current sku obj
  const updateSelectedQty = (qty) =>{
    console.log(qty, '<- qty');
    let newObj = {};
    Object.assign(newObj, selectedItem);
    newObj.selectedQty = qty;
    setSelectedItem(newObj);
    console.log('selectedItem -->', selectedItem);
  };

  useEffect(() => {
    setItems(arrayMaker(currentDisplayedStyle));
  }, [currentDisplayedStyle]);

  return (
    <div>
      <div onMouseLeave={handleMouseLeavingSizeDropDown}>
        <div onClick={toggleSizeDropdown}>
          Select your style
          <i></i>
        </div>
        <div>
          {
            sizeDropdownIsOpen && items.map((item, index) => {
              return (
                <div key={index} onClick={(e) => { handleItemClick(index); }} value={item.sku}>
                  {item.size}
                </div>
              );
            })
          }
        </div>

      </div>
      <div onClick={toggleQuantityDropdown} onMouseLeave={ handleMouseLeavingQuantityDropDown}>
        Select Quanitity
        {
          quantityDropdownIsOpen && quantityArrayMaker().map((num, index) => {
            return (<div key ={index} value ={num} onClick = {(event) => {updateSelectedQty(num); }}>{num}</div>);
          })
        }
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ItemSelection;

// onClick={e => handleItemClick(e.target.id)}
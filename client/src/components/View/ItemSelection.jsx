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
  const toggleDropdown = () => {
    console.log('dropdown should be toggled');
    setSizeDropDownOpen(!sizeDropdownIsOpen);
  };

  // Closes the drop down when the mouse stops hovering
  const handleMouseLeaving = (event) => {
    setSizeDropDownOpen(false);
  };

  //sets selected Sku for quantity/cart
  const handleItemClick = (index) => {
    // console.log('index =>', index);
    let skuObj = {};
    Object.assign(skuObj, items[index]);
    // console.log(skuObj, '<---- skuObj');
    setSelectedItem(skuObj);
  };

  //write a clickhandler for quantity
  const quantityDropDownHandler = (event) => {
    setQuantityDropDownOpen(!quantityDropdownIsOpen);

  };

  const quantityArrayMaker = () => {
    let quantityArr = [];
    if (selectedItem.quantity > 15) {
      quantityArr = Array.from(Array(16).keys());
      quantityArr.splice(0, 1, 'select the quantity here');
    } else {
      quantityArr = Array.from(Array(selectedItem.quantity).keys());
    }
    return quantityArr;
  };
  // const onSelectDropDown = (event) => {
  //   console.log(event.target);
  //   setSelectedItem(event.target.value);
  //   console.log(selectedItem);
  // };

  useEffect(() => {
    setItems(arrayMaker(currentDisplayedStyle));
  }, [currentDisplayedStyle]);

  return (
    <div>
      <div onMouseLeave={handleMouseLeaving}>
        <div onClick={toggleDropdown}>
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
      <select onClick={quantityDropDownHandler}>
        {
          quantityArrayMaker().map(num => {
            return <option value ={num}>{num}</option>;
          })
        }
      </select>
    </div>
  );
};

export default ItemSelection;

// onClick={e => handleItemClick(e.target.id)}
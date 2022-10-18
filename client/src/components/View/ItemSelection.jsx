import React, { useState, useEffect } from 'react';

const ItemSelection = ({ currentDisplayedStyle, productId }) => {

  const [sizeDropdownIsOpen, setSizeDropDownOpen] = useState(false);
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

  const handleItemClick = (index) => {
    let skuObj =
  };

  const onSelectDropDown = (event) => {
    console.log(event.target);
    setSelectedItem(event.target.value);
    console.log(selectedItem);
  };

  useEffect(()=> {
    setItems(arrayMaker(currentDisplayedStyle));
  }, [currentDisplayedStyle]);

  return (
    <div onMouseLeave ={handleMouseLeaving}>
      <div onClick={toggleDropdown}>
        Select your style
        <i></i>
      </div>
      <div>
        {
          sizeDropdownIsOpen && items.map((item, index) => {
            return (
              <div key={index} onClick={onSelectDropDown} value={item.sku}>
                {item.size}
              </div>
            );
          })
        }
      </div>

    </div>
  );
};

export default ItemSelection;

// onClick={e => handleItemClick(e.target.id)}
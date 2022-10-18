import React, { useState, useEffect } from 'react';

const ItemSelection = ({ currentDisplayedStyle }) => {




  const [sizeDropdownIsOpen, setSizeDropDownOpen] = useState(false);
  const [items, setItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [] = useState();


  //makes array of sku-styles objects
  const arrayMaker = (obj) => {
    console.log('inarraymaker');
    const styleArr = [];
    for (let key in currentDisplayedStyle.skus) {
      let newObj = currentDisplayedStyle.skus[key];
      newObj.sku = key;
      newObj.product_id = obj.product_id;
      newObj.style_id = obj.style_id;
      styleArr.push(newObj);
      console.log(newObj);
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

  const handleItemClick = (id) => {
    selectedItem = id ? setSelectedItem(null) : setSelectedItem(id);
  };

  const onSelectDropDown = (event) => {
    console.log(event.target);
    setSelectedItem(event.target.value);
    console.log(selectedItem);
  };

  useEffect(()=> {
    setItem(arrayMaker(currentDisplayedStyle));
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
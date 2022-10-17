import React, { useState, useEffect } from 'react';

const ItemSelection = ({ currentDisplayedStyle }) => {


  let styleArr = [];
  const arrayMaker = (obj) => {
    for (let key in currentDisplayedStyle.skus) {
      let newObj = currentDisplayedStyle.skus[key];
      newObj.sku = key;
      styleArr.push(newObj);
    }
  };

  arrayMaker(currentDisplayedStyle);
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(styleArr);
  const [selectedItem, setSelectedItem] = useState(null);


  //handler for dropdown
  const toggleDropdown = () => {
    console.log('dropdown should be toggled');
    console.log(styleArr);
    setOpen(!isOpen);
  };

  const handleItemClick = (id) => {
    selectedItem = id ? setSelectedItem(null) : setSelectedItem(id)
  };

  const onSelectDropDown = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <div onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id === selectedItem).label : "Select your style"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div>
        {
          isOpen && styleArr.map((item, index) => {
            return (
              <div onClick={e => handleItemClick(e.target.id)} key={index}>
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
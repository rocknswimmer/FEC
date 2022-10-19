import React, { useState, useEffect } from 'react';
import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from './Styled/DropDownStyles.jsx';
import { FaChevronDown, FaMinus } from 'react-icons/fa';

const ItemSelection = ({ currentDisplayedStyle, productId, addToCart, cartContents }) => {

  const [sizeDropdownIsOpen, setSizeDropDownOpen] = useState(false);
  const [quantityDropdownIsOpen, setQuantityDropDownOpen] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [sizeChosen, setSizeChosen] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});



  //makes array of sku-sizes objects
  const sizeArrayMaker = (obj) => {
    const styleArr = [];
    for (let key in currentDisplayedStyle.skus) {
      let newObj = currentDisplayedStyle.skus[key];
      if (currentDisplayedStyle.skus[key].quantity === null) {
        setOutOfStock(true);
      }
      newObj.sku = key;
      newObj.product_id = productId;
      newObj.style_id = obj.style_id;
      styleArr.push(newObj);
    }

    return styleArr;
  };

  //handler for size and quantity dropdown
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

  //sets selected Sku/size for quantity/cart
  const handleSizeSelection = (index) => {
    let skuObj = {};
    Object.assign(skuObj, items[index]);
    // console.log(skuObj);
    setSizeChosen(true);
    setSelectedItem(skuObj);
    setSizeDropDownOpen(false);
  };

  //When a sku / size has been selected, the fn below should make an arr with the appropriate quantity represented.
  const quantityArrayMaker = () => {
    // console.log('inside quantityArrayMaker');
    // console.log('these are the currentCartContents >', cartContents);
    let quantityArr = [];
    let correctQty;

    if (cartContents.length > 0) {
      cartContents.forEach(cartObj => {
        // console.log(cartObj, '<--- cartContents.forEach()');
        if (cartObj.sku === selectedItem.sku
          && cartObj.product_id === selectedItem.product_id
          && cartObj.style_id === selectedItem.style_id) {
          correctQty = cartObj.quantity;
        }
      });
    } else {
      correctQty = selectedItem.quantity;
    }
    /* if the selected thing is already in cart, use qty available in the cart. When setting the cart contents, update quantity availble by subtracting the selectedQty from quantity */
    if (correctQty >= 15) {
      quantityArr = Array.from(Array(16).keys());

    } else if (correctQty === 0) {
      // quantityArr make it so it says it's out of stock
      setOutOfStock(true);
      console.log('this item is out of stock');
    } else {
      quantityArr = Array.from(Array(correctQty + 1).keys());
    }
    quantityArr.splice(0, 1);
    return quantityArr;
  };

  //Fn - when a quantity has been chosen, it will update the current sku obj
  const updateSelectedQty = (qty=1) => {
    let newObj = {};
    Object.assign(newObj, selectedItem);
    newObj.selectedQty = qty;
    setSelectedItem(newObj);
  };

  //button to add selected items to cart
  const onSubmitButton = (event) => {
    console.log('adding this item to the cart -->', selectedItem);
    addToCart(selectedItem);
  };

  //useEffect to ensure that the sizing updates to newly selected style
  useEffect(() => {
    setItems(sizeArrayMaker(currentDisplayedStyle));
  }, [currentDisplayedStyle]);

  return (
    <div>
      {
        outOfStock && <DropDownContainer>
          <DropDownHeader>
            Out of Stock
          </DropDownHeader>
        </DropDownContainer>
      }
      {
        !outOfStock && <DropDownContainer onMouseLeave={(e) => { handleMouseLeavingSizeDropDown(); }}>
          <DropDownHeader onClick={toggleSizeDropdown}>
            {
              sizeChosen && <>
                <p>{selectedItem.size}</p>
                <FaChevronDown style={{ color: '#B0B0B0' }} />
              </>
            }
            {
              !sizeChosen && <>
                Select Size
                <FaChevronDown style={{ color: '#B0B0B0' }} />

              </>
            }
          </DropDownHeader>
          <DropDownListContainer>
            {
              sizeDropdownIsOpen && <DropDownList>
                {items.map((item, index) => {
                  return (
                    <ListItem key={index} onClick={(e) => { handleSizeSelection(index); }} value={item.sku}>
                      {item.size}
                    </ListItem>
                  );
                })}
              </DropDownList>

            }
          </DropDownListContainer>

        </DropDownContainer>
      }
      {
        !sizeChosen && <DropDownContainer>
          <DropDownHeader>
            <FaMinus style={{ color: '#B0B0B0' }}/> <FaChevronDown style={{ color: '#B0B0B0' }} />
          </DropDownHeader> </DropDownContainer>
      }
      {
        sizeChosen && <DropDownContainer onClick={toggleQuantityDropdown} onMouseLeave={handleMouseLeavingQuantityDropDown}>
          <DropDownHeader>
            1 {<FaChevronDown style={{ color: '#B0B0B0' }} />}
          </DropDownHeader>
          <DropDownListContainer>
            {
              quantityDropdownIsOpen && <DropDownList>
                {
                  quantityArrayMaker().map((num, index) => {
                    return (<ListItem key={index} value={num} onClick={(event) => { updateSelectedQty(num); }}>{num}</ListItem>);
                  })
                }
              </DropDownList>
            }
          </DropDownListContainer>
        </DropDownContainer>
      }

      <button onClick={onSubmitButton}>Add to Cart</button>
    </div>
  );
};

export default ItemSelection;

// export {DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem};
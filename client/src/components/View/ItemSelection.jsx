import React, { useState, useEffect } from 'react';
import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem, DropDownListQty } from './Styled/DropDownStyles.jsx';
import { Button, CartContainer } from './Styled/Form.styled.jsx';
import { FaChevronDown, FaMinus, FaPlus } from 'react-icons/fa';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ItemSelection = ({ currentDisplayedStyle, productId, addToCart, cartContents, interact }) => {

  const [sizeDropdownIsOpen, setSizeDropDownOpen] = useState(false);
  const [quantityDropdownIsOpen, setQuantityDropDownOpen] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [sizeChosen, setSizeChosen] = useState(false);
  const [qtyChosen, setQtyChosen] = useState(0);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const isOutOfSize = () => {
    const obj = cartContents.find(cartObj => cartObj.sku === selectedItem.sku);
    if (obj) {
      return obj.quantity === 0;
    } else {
      return false;
    }
  };

  //makes array of sku-sizes objects
  const sizeArrayMaker = (obj) => {
    const styleArr = [];
    for (let key in obj.skus) {
      let newObj = obj.skus[key];
      if (obj.skus[key].quantity === null) {
        setOutOfStock(true);
      }
      newObj.sku = key;
      newObj.product_id = productId;
      newObj.style_id = obj.style_id;
      styleArr.push(newObj);
    }

    return styleArr;
  };

  //handlers for size and quantity dropdowns
  const toggleSizeDropdown = () => {
    console.log('size dropdown should be toggled');
    setSizeDropDownOpen(!sizeDropdownIsOpen);
  };

  const toggleQuantityDropdown = () => {
    console.log('quantity dropdown should be toggled');
    if (!isOutOfSize()) {
      setQuantityDropDownOpen(!quantityDropdownIsOpen);
    }
  };

  // Closes the dropdowns when the mouse stops hovering
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
        console.log(cartObj, '<--- cart is being checked');
        if (cartObj.sku === selectedItem.sku
          && cartObj.product_id === selectedItem.product_id
          && cartObj.style_id === selectedItem.style_id) {
          correctQty = cartObj.quantity;
        } else {
          correctQty = selectedItem.quantity;
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
      console.log('this item is out of stock');
      return [];
    } else {
      quantityArr = Array.from(Array(correctQty + 1).keys());
    }
    quantityArr.splice(0, 1);
    return quantityArr;
  };

  //Fn - when a quantity has been chosen, it will update the current sku obj
  const updateSelectedQty = (qty = 1) => {
    console.log('this is selected item updating selected quantity', qty);
    let newObj = {};
    Object.assign(newObj, selectedItem);

    newObj.selectedQty = qty;
    console.log(newObj, 'newObj in updatedSelectedQty');
    setSelectedItem(newObj);
    setQtyChosen(qty);
  };

  //button to add selected items to cart
  const onSubmitButton = (event) => {

    if (sizeChosen) {

      if (!selectedItem.selectedQty) {
        let newObj = {};
        Object.assign(newObj, selectedItem);

        newObj.selectedQty = 1;
        setSelectedItem(newObj);
        setQtyChosen(1);
        addToCart(newObj);
        setQtyChosen(0);
        setSizeChosen(false);
        return;
      }
      addToCart(selectedItem);
      setQtyChosen(0);
      setSizeChosen(false);
    }
  };

  //useEffect to ensure that the sizing updates to newly selected style and resets size dropdown
  useEffect(() => {
    setItems(sizeArrayMaker(currentDisplayedStyle));
    setSizeChosen(false);
  }, [currentDisplayedStyle]);

  return (
    <CartContainer>
      {/* <Dropdown options={items}/> */}
      <div className="top-row">
        {
          outOfStock &&
          <DropDownContainer
            className="dropdown-size-container">
            <DropDownHeader>
              Out of Stock
            </DropDownHeader>
          </DropDownContainer>
        }
        {
          !outOfStock &&
          <DropDownContainer
            className="dropdown-size-container"
            onMouseLeave={(e) => { handleMouseLeavingSizeDropDown(); }}
          >
            <DropDownHeader onClick={toggleSizeDropdown}>
              {
                sizeChosen && <>
                  <span>{selectedItem.size}</span>
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
            <DropDownListContainer className="dropdown-size-container">
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
          !sizeChosen &&
          <DropDownContainer className="dropdown-qty-container">
            <DropDownHeader>
              <FaMinus
                style={{ color: '#B0B0B0' }} />
              <FaChevronDown
                style={{ color: '#B0B0B0' }} />
            </DropDownHeader>
          </DropDownContainer>
        }
        {
          sizeChosen &&
          <DropDownContainer
            className="dropdown-qty-container"
            onClick={toggleQuantityDropdown}
            onMouseLeave={handleMouseLeavingQuantityDropDown}>
            {
              !qtyChosen &&
              <DropDownHeader>
                {isOutOfSize() ? 'out of stock' : 1}
                {<FaChevronDown style={{ color: '#B0B0B0' }} />}
              </DropDownHeader>
            }
            {
              qtyChosen > 0 && <DropDownHeader>
                {qtyChosen} <FaChevronDown style={{ color: '#B0B0B0' }} />
              </DropDownHeader>
            }
            <DropDownListContainer>
              {
                quantityDropdownIsOpen && <DropDownListQty>
                  {
                    quantityArrayMaker().map((num, index) => {
                      return (<ListItem key={index} value={num} onClick={(event) => { updateSelectedQty(num); }}>{num}</ListItem>);
                    })
                  }
                </DropDownListQty>
              }
            </DropDownListContainer>
          </DropDownContainer>
        }
      </div>
      <Button disabled={isOutOfSize()} className="add-to-cart-button" onClick={onSubmitButton}>Add to Cart{<FaPlus style={{ color: '#B0B0B0' }} />}</Button>
    </CartContainer>
  );
};

export default ItemSelection;

// export {DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem};
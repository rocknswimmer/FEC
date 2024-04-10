import React from 'react';
import { useState, useEffect } from 'react';
import Reviews from './Reviews/Reviews.jsx';
import View from './View/View.jsx';
import Questions from './Questions/Questions.jsx';
import Header from './Header.jsx';
import axios from 'axios';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Mode/globalStyles.js';
import { lightTheme, darkTheme } from './Mode/Themes.js';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';


const App = () => {
  const randomId = 37311 + Math.floor(Math.random() * 15);
  const [product, setProduct] = useState(37311);

  const [metaData, setMetaData] = useState({});
  const [currentProduct, setCurrentProduct] = useState({});

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };


  const getMetaData = (id) => {
    axios({
      method: 'get',
      url: 'reviews/meta',
      params: {
        'product_id': id
      }
    })
      .then((response) => {
        setMetaData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCurrentProduct = (productId) => {
    axios.get('/products', {
      params: {
        'id': productId
      }
    })
      .then(results => {
        let newProduct = results.data;
        setCurrentProduct(newProduct);
      })
      .catch(err => {
        console.log('There is an error in the getCurrentProduct fn ', err);
      });
  };

  useEffect(() => {
    getMetaData(product);
    getCurrentProduct(product);
  }, []);

  const submitInteraction = (element, widget) => {
    axios.post('/interactions', {
      element: element,
      widget: widget,
      time: JSON.stringify(Date.now())
    })
      .then((res) => {
        console.log('response from interacting: ', res.data);
      })
      .catch((err) => {
        console.log('error posting interaction:', err);
      });
  };


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div id="app">
          <Header
            theme = {theme}
            themeToggler ={themeToggler}
            interact={(element, widget) => { submitInteraction(element, widget); }} />

          {/* <View
            productId={product}
            currentProduct={currentProduct}
            metaData={metaData}
            interact={(element, widget) => { submitInteraction(element, widget); }} /> */}

          <Questions
            productId={37313}
            currentProduct={currentProduct}
            interact={(element, widget) => { submitInteraction(element, widget); }} />

          <Reviews
            productId={product}
            theme={theme}
            metaData={metaData}
            currentProduct={currentProduct}
            interact={(element, widget) => { submitInteraction(element, widget); }} />

        </div>
      </>
    </ThemeProvider>
  );
};

export default App;

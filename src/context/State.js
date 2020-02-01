import React, { useReducer } from 'react';
import axios from 'axios';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    products: [],
    singleProduct: null,
    loading: true,
    productsDisplayType: 'table', // values: 'table' / 'row'
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get data
  const getProducts = () => {
    
    // setLoading(true);
    
    // axios.get('/api/NPP-dcbq7OjykP')
    //   .then(res => {
    //     dispatch({
    //       type: 'get-data',
    //       payload: res.data
    //     })
    //     console.log(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    const data = [{"id":614,"title":"شیر خشک بز هوناپ شماره 2 ( Hunnap )","list_image_url":"http://ninipay.com/media/product-image/1571398590_24733.jpg","can_add_to_cart":false,"sell_price":1450000,"main_price":null},{"id":648,"title":"سرلاک 5 غله و موز بدون شیر ببی ( Bebi )","list_image_url":"http://ninipay.com/media/product-image/1578830038_39251.jpg","can_add_to_cart":false,"sell_price":755000,"main_price":null},{"id":633,"title":"دستمال مرطوب نوزاد وی کر ویژه پوست های حساس 63 برگی","list_image_url":"http://ninipay.com/media/product-image/1573906182_17189.jpg","can_add_to_cart":true,"sell_price":180000,"main_price":200000},{"id":589,"title":"سرلاک سیب و گندم سیاه بدون شیر هاینز  ( Heinz )","list_image_url":"http://ninipay.com/media/product-image/1568568724_24118.jpg","can_add_to_cart":true,"sell_price":680000,"main_price":750000},{"id":590,"title":"سرلاک گندم ، جو دوسر و سیب ، موز ،گلابی بدون شیر هاینز ( Heinz )","list_image_url":"http://ninipay.com/media/product-image/1568568358_51279.jpg","can_add_to_cart":true,"sell_price":680000,"main_price":750000},{"id":592,"title":"سرلاک پنج غله هاینز ( Heinz )","list_image_url":"http://ninipay.com/media/product-image/1568570729_25594.jpg","can_add_to_cart":true,"sell_price":680000,"main_price":750000},{"id":516,"title":"بیسکویت با شیر بز 200 گرم هوناپ ( hunnap )","list_image_url":"http://ninipay.com/media/product-image/1563193188_98587.jpg","can_add_to_cart":false,"sell_price":299000,"main_price":350000},{"id":591,"title":"سرلاک 3 غله ( گندم ، جو دوسر ، ذرت ) و بابونه بدون شیر مخصوص شب هاینز ( Heinz )","list_image_url":"http://ninipay.com/media/product-image/1568569594_26919.jpg","can_add_to_cart":true,"sell_price":680000,"main_price":750000}]

    dispatch({
      type: 'get-data',
      payload: data
    })
  }

  const getSingleProduct = (id) => {

    // setLoading(true);

    // axios.get(`/api/product/${id}`)
    //   .then(res => {
    //     dispatch({
    //       type: 'set-single-product',
    //       payload: res.data
    //     })
    //     setLoading(false)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    const data = JSON.parse(`[{"id":614,"title":"شیر خشک بز هوناپ شماره 2 ( Hunnap )","list_image_url":"http://ninipay.com/media/product-image/1571398590_24733.jpg","can_add_to_cart":false,"sell_price":1450000,"main_price":null},{"id":648,"title":"سرلاک 5 غله و موز بدون شیر ببی ( Bebi )","list_image_url":"http://ninipay.com/media/product-image/1578830038_39251.jpg","can_add_to_cart":false,"sell_price":755000,"main_price":null},{"id":633,"title":"دستمال مرطوب نوزاد وی کر ویژه پوست های حساس 63 برگی","list_image_url":"http://ninipay.com/media/product-image/1573906182_17189.jpg","can_add_to_cart":true,"sell_price":180000,"main_price":200000},{"id":589,"title":"سرلاک سیب و گندم سیاه بدون شیر هاینز  ( Heinz )","list_image_url":"http://ninipay.com/media/product-image/1568568724_24118.jpg","can_add_to_cart":true,"sell_price":680000,"main_price":750000},{"id":590,"title":"سرلاک گندم ، جو دوسر و سیب ، موز ،گلابی بدون شیر هاینز ( Heinz )","list_image_url":"http://ninipay.com/media/product-image/1568568358_51279.jpg","can_add_to_cart":true,"sell_price":680000,"main_price":750000},{"id":592,"title":"سرلاک پنج غله هاینز ( Heinz )","list_image_url":"http://ninipay.com/media/product-image/1568570729_25594.jpg","can_add_to_cart":true,"sell_price":680000,"main_price":750000},{"id":516,"title":"بیسکویت با شیر بز 200 گرم هوناپ ( hunnap )","list_image_url":"http://ninipay.com/media/product-image/1563193188_98587.jpg","can_add_to_cart":false,"sell_price":299000,"main_price":350000},{"id":591,"title":"سرلاک 3 غله ( گندم ، جو دوسر ، ذرت ) و بابونه بدون شیر مخصوص شب هاینز ( Heinz )","list_image_url":"http://ninipay.com/media/product-image/1568569594_26919.jpg","can_add_to_cart":true,"sell_price":680000,"main_price":750000}]`)

    const singleProduct = data.filter(p => p.id === Number(id))[0]

    setLoading(false)

    dispatch({
      type: 'set-single-product',
      payload: singleProduct
    })

    console.log(singleProduct)
  }

  const setLoading = (stat) => {
    dispatch({
      type: 'set-loading',
      payload: stat,
    })
  }

  const setProductsDisplayType = (type) => {
    dispatch({
      type: 'set-products-display-type',
      payload: type
    })
  }

  return (
    <Context.Provider
      value={{
        products: state.products,
        singleProduct: state.singleProduct,
        loading: state.loading,
        productsDisplayType: state.productsDisplayType,
        getProducts,
        getSingleProduct,
        setProductsDisplayType
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
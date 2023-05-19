import Breadcrumb from '@/components/layout/Breadcrumb'
import { useForm } from 'react-hook-form';
import { getCartItems } from '@/utils/cartItems'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BiRupee } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { cookies } from 'next/dist/client/components/headers'

export default function Checkout() {
  const router = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [cart, setCart] = useState(getCartItems());
  const [cartItems, setCartItems] = useState(0);
  const [yourCart, setYourCart] = useState({ subTotal: 0, gstAmount: 0, grandTotal: 0 });

  useEffect(() => {
    const cartData = Cookies.get('yourCart');
    if (cartData) {
      try {
        const parsedCartData = JSON.parse(cartData);
        setYourCart(parsedCartData);
        setCartItems(parsedCartData?.length || 0);
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    }
  }, []);

  const checkoutHandler = (data) => {
    console.log(data);
    router.push({
      pathname: '/thank-you',
      query: {
        cart: JSON.stringify(cart),
        yourCart: JSON.stringify(yourCart),
        shipping: JSON.stringify(data)
      }
    });
    Cookies.remove('yourCart');
    Cookies.remove('cartItems');
  };

  return (
    
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Breadcrumb title={'Checkout'} />
      <form onSubmit={handleSubmit(checkoutHandler)}>
        <div class='row g-4'>
          <div class='col-md-5 col-lg-4 order-md-last'>
            <h4 class='d-flex justify-content-between align-items-center mb-3'>
              <span class='text-primary'>Your cart</span>
              <span class='badge badge-secondary rounded-pill'>{cartItems}</span>
            </h4>
            <ul class='list-group mb-3'>
              <li class='list-group-item d-flex justify-content-between'>
                <div class='my-0'>Subtotal (<BiRupee size={21} />)</div>
                <strong>{yourCart?.subTotal?.toFixed(2)}</strong>
              </li>
              <li class='list-group-item d-flex justify-content-between'>
                <div class='my-0'>GST 19%(<BiRupee size={21} />)</div>
                <strong>{yourCart?.gstAmount?.toFixed(2)}</strong>
              </li>
              {/* <li class='list-group-item d-flex justify-content-between '>
                <div>
                  <div class='my-0'>GST 19% (<BiRupee size={21} />)</div>
                  <strong>{yourCart?.gstAmount?.toFixed(2)}</strong>
                </div>
              </li> */}
              <li class='list-group-item d-flex justify-content-between lh-condensed'>
                <div class='my-0'>Total (<BiRupee size={21} />)</div>
                <strong>{yourCart?.grandTotal?.toFixed(2)}</strong>
              </li>
            </ul>
            <div class='card p-2'>
              <div class='input-group'>
                <button type='submit' className='w-100 btn btn-primary btn-lg'>
                  Order place
                </button>
              </div>
            </div>
          </div>
          <div class='col-md-7 col-md-8'>
            <h4 class='mb-3'>Billing address</h4>
            <div class='row g-3'>
              <div class='col-sm-6 '>

                                <label for="firstName">First name</label>
                                <input type="text" class="form-control" id="firstName" {...register('firstName',{required:true})} required />
                                {errors.firstName && <div class="text-danger">
                                    Valid first name is required.
                                </div>}
                            </div>
                            <div class="col-sm-6">
                                <label for="lastName">Last name</label>
                                <input type="text" class="form-control" id="lastName" {...register('firstName',{required:true})} required />
                                {errors.lastName && <div class="text-danger">
                                    Valid Last Name is required.
                                </div>}
                            </div>
                            <div class="col-12">
                                <label for="phone">Phone</label>
                                <div className="input-group">
                                    <input type="text" class="form-control" id="phone" placeholder="+91" {...register('phone',{required:true})} required />
                                    {errors.lastName && <div class="text-danger">
                                    Valid 10 digit phone number is required
                                </div>}
                                </div>

                            </div>
                            <div class="col-12">
                                <label for="phone">e-mail</label>
                                <div className="input-group">
                                    <input type="email" class="form-control" id="email" placeholder="hello@example.com" {...register('email',{required:true})} required />
                                    {errors.lastName && <div class="text-danger">
                                    Valid 10 digit phone number is required
                                </div>}
                                </div>

                            </div>
                            <div class="col-12">
                                <label for="address">Address</label>
                                <div className="input-group">
                                    <input type="text" class="form-control" id="address" placeholder="1234 main street" {...register('address',{required:true})} required />
                                    {errors.address && <div class="text-danger">
                                    please enter your shipping address.
                                </div>}
                                </div>

                            </div>
                            <div class="col-12">
                                <label for="landmark">Landmark</label>
                                <div className="input-group">
                                    <input type="text" class="form-control" id="landmark" placeholder="1234 main street" {...register('address',{required:true})} required />
                                    {errors.lastName && <div class="text-danger">
                                    please enter a landmark.
                                </div>}
                                </div>

                            </div>
                            <div class="col-md-5 ">
                                <label for="country">Country</label>
                                <select class="custom-select d-block w-100" value="india" id="country" {...register('country',{required:true})} required>
                                   
                                    <option value="india">India</option>
                                </select>
                                {errors.lastName && <div class="text-danger">
                                Please select a valid country.
                                </div>}
                            
                               
                            </div>
                            <div class="col-md-4">
                                <label for="state">State</label>
                                <select class="form-select" id="state" {...register('state',{required:true})}required>
                                    <option value="">Choose...</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="U.P">U.P</option>
                                    <option value="Harayana">Harayana</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                                {errors.country && <div class="text-danger">
                                    Please provide a valid state.
                                </div>}
                            </div>
                            <div class="col-md-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control" id="zip" {...register('zip',{required:true})} placeholder="" required />
                                {errors.zip && <div class="text-danger">
                                        Zip code required.
                                </div>}
                               
                            </div>
                        </div>

                        

                      

                        
                        <hr class="mb-4" />
                        <h4 class="mb-3">Payment</h4>
                        <div class="my-3">
                            <div class="form-check">
                                <input id="cod" name="paymentMethod" type="radio"  {...register('paymentMethod',{required:true})} class="form-check-input" checked="true" required />
                                <label class="form-check-label" for="cod">Cash on delivery</label>
                            </div>
                        </div>
                        <hr class="my-4" />
                    </div>
                </div>
            </form>
        </>
    )
}
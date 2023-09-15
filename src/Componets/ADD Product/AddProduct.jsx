import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProductasync } from '../../Services/Action/Product Action/Productaction';

function AddProduct() {

    const [inputValue, setinputvalue] = useState({
        title: '',
        category: '',
        rating: '',
        price: '',
        description: '',
        image: '',
    }
);

// console.log(inputValue);
const dispatch = useDispatch()



const hadlesubmit = (e) => {
    e.preventDefault();
    dispatch(addProductasync(inputValue));

setinputvalue({
    title: '',
    category: '',
    rating: '',
    price: '',
    description: '',
    image: '',
})
}

const handlechange = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setinputvalue({...inputValue, [name]: value})

}

  return (
    	// <form onSubmit={hadlesubmit}>
		// 		<div class="space-y-12">


		// 			<div class="border-b border-gray-900/10 pb-12">
		// 				<h1 class="text-base font-semibold leading-7 text-gray-900 text-center text-1xl mt-10">Student Information</h1>


		// 				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
		// 					<div class="sm:col-span-3">
		// 						<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
		// 						<div class="mt-2">
		// 							<input type="text" name="fname" id="first-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlechange} value={inputValue.fname} />
		// 						</div>
		// 					</div>

		// 					<div class="sm:col-span-3">
		// 						<label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
		// 						<div class="mt-2">
		// 							<input type="text" name="lname" id="last-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlechange} value={inputValue.lname} />
		// 						</div>
		// 					</div>

		// 					<div class="sm:col-span-4">
		// 						<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
		// 						<div class="mt-2">
		// 							<input id="email" name="email" type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlechange} value={inputValue.email} />
		// 						</div>
		// 					</div>

		// 					<div class="sm:col-span-3">
		// 						<label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
		// 						<div class="mt-2">
		// 							<select id="country" name="country"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handlechange} value={inputValue.country}>
		// 								<option>India</option>
		// 								<option>Bharat</option>
		// 								<option>Hindustan</option>
		// 							</select>
		// 						</div>
		// 					</div>

		// 					<div class="col-span-full">
		// 						<label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
		// 						<div class="mt-2">
		// 							<input type="text" name="address" id="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlechange} value={inputValue.address} />
		// 						</div>
		// 					</div>

		// 					<div class="sm:col-span-2 sm:col-start-1">
		// 						<label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
		// 						<div class="mt-2">
		// 							<input type="text" name="city" id="city"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlechange} value={inputValue.city} />
		// 						</div>
		// 					</div>

		// 					<div class="sm:col-span-2">
		// 						<label for="region" class="block text-sm font-medium leading-6 text-gray-900">STD</label>
		// 						<div class="mt-2">
		// 							<input type="text" name="std" id="region" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlechange} value={inputValue.std} />
		// 						</div>
		// 					</div>

		// 					<div class="sm:col-span-2">
		// 						<label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
		// 						<div class="mt-2">
		// 							<input type="text" name="zip" id="postal-code"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlechange} value={inputValue.zip} />
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>


		// 		</div>

		// 		<div class="mt-6 flex items-center justify-end gap-x-6">
		// 			<button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
		// 			<button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
		// 		</div>
		// 	</form>
        <Container className='d-flex align-items-center'>

        <form className='col-12' onSubmit={hadlesubmit}>
        <div class=" col-6 mb-3 mt-3">
          <label class="form-label">Title :</label>
          <input type="text" class="form-control"  placeholder="Enter Product Title" name="title" onChange={handlechange} value={inputValue.title}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Category :</label>
          <input type="text" class="form-control"  placeholder="Enter Product Category" name="category" onChange={handlechange} value={inputValue.category}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Reting :</label>
          <input type="text" class="form-control"  placeholder="Enter Product Reting" name="rating" onChange={handlechange} value={inputValue.rating}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Price :</label>
          <input type="text" class="form-control"  placeholder="Enter Product Price" name="price" onChange={handlechange} value={inputValue.price}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Description  : </label>
          <input type="text" class="form-control"  placeholder="Enter Product Description" name="description" onChange={handlechange} value={inputValue.description}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Product Image  : </label>
          <input type="file" class="form-control"  placeholder="Enter Product Description" name="image" onChange={handlechange} value={inputValue.image}/>
        </div>
        
     
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </Container>
  )
}

export default AddProduct
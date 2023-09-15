import React, { useEffect, useState } from 'react'
import '../Header/Header.css'
import { Badge, Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux';
import { parsedata } from '../product';



function Header() {

	const navigate = useNavigate();
	const product = parsedata.products

	const [empData, setEmpData] = useState(product);
	// console.log(empData,"======");
	const [option, setOption] = useState([]);

	const [sercgData, setSearchData] = useState({
		search: ''
	});


	const productData = useSelector(state => state.Productreducer.products)


	const handlefilter = (e) => {


		let value = e.target.value;

		let product = parsedata.products


		if (value != -1) {
			const filterdata = product.filter((product) => {
				return product.category == value
			})
			// console.log(filterdata);
			setEmpData(filterdata);
		}
		else {
			setEmpData(product);

		}
	}

	const handleSearch = (e) => {
		let name = e.target.name;
		let val = e.target.value;

		setSearchData({ [name]: val })

		let product = parsedata.products


		let serchdata = product.filter((data) => {
			return data.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
		})

		setEmpData(serchdata);
	}

	// const alldata = productdata;



	useEffect(() => {
		let product = parsedata.products
		const allData = [...new Set(product.map(data => data.category))]
		setOption(allData);
	}, [])



	// const [productd , setproductdata] = useState(productData);

	return (

		<>

			<Navbar variant="dark" className='Nav'>
				<Container >

					<div className="header">
						<div className="container">
							<div className="d-flex align-items-center justify-content-between">

								<div onClick={() => navigate('/')} style={{ cursor: "pointer" }} className='me-3'>
									<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk_header_mobile_logo-bafb3a.svg" alt="" className='logo' />

								</div>
								<div className="div text-white" >
										<ul className='d-flex'>
											<li className='list-unstyled px-4'><a href="" onClick={() => navigate('/')} className='text-white text-decoration-none liststyle-none '>Home</a></li>
											<li className='list-unstyled px-4'><a href="" onClick={() => navigate('/addproduct')} className='text-white text-decoration-none liststyle-none '>Add Product</a></li>
											<li className='list-unstyled px-4'><a href="" className='text-white text-decoration-none liststyle-none '>Contact</a></li>
										</ul>
								</div>

								<div className="menu d-flex justify-content-evenly align-items-center">

									<div className="login">
										<button onClick={() => navigate('/SingUp')}>Login</button>
									</div>
									<div className="cart">
										{/* <Badge bg="danger">1</Badge> */}
										<Button variant="primary" onClick={() => navigate('/viewcart')}>
											<i className="fa-solid fa-cart-shopping text-white" ></i> <Badge bg="danger">{productData.length}</Badge>
											{/* <span className="visually-hidden">0</span> */}
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
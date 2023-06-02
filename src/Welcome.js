

import React from 'react'

class Welcome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productList: [
                {
                    id: 1,
                    productName: 'Solids: Steel Gray',
                    productPrice: 'Rs. 699.00',
                    
                    productImg: 'https://th.bing.com/th?id=OPA.lgpiqFu%2bFVGG7Q474C474&w=160&h=213&dpr=1.3&pid=21.1'
                },
                {
                    id: 2,
                    productName: 'Selected Homme - Black',
                    productPrice: 'Rs. 750.00',
                    productImg: 'https://th.bing.com/th?id=OPA.j0GMZLcf0UlW2g474C474&w=160&h=213&dpr=1.3&pid=21.1'
                },
                {
                    id: 3,
                    productName: 'Solids Slub: Blue',
                    productPrice: '499.00',
                    productImg: 'https://www.bing.com/th?id=OIP.iIzKoYjC3uP1MI0XYXjGygHaKS&w=150&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
                },

                {
                    id: 4,
                    productName: 'Solids Slub: White',
                    productPrice: 'Rs. 30,000',
                    productImg: 'https://www.bing.com/th?id=OIP.RHzRocDQ-VPOif5AmSbAeQHaKl&w=150&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
                },

                {
                    id: 5,
                    productName: 'Solids Light Gray',
                    productPrice: 'Rs. 900.00',
                    productImg: 'https://www.bing.com/th?id=OIP.iTtCdo2MWG8Jg93bWoswpwHaJ4&w=150&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
                },
                {
                    id: 6,
                    productName: 'Solids Slub: Blue ',
                    productPrice: 'Rs. 499.00',
                    productImg: 'https://www.bing.com/th?id=OIP.iIzKoYjC3uP1MI0XYXjGygHaKS&w=150&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
                
                },

                {
                    id: 7,
                    productName: 'Solids Slub: Blue ',
                    productPrice: 'Rs. 499.00',
                    productImg: 'https://th.bing.com/th/id/OIP.Jq4gdC-NZCR1S1MiYP-ySwHaJ4?w=204&h=272&c=7&r=0&o=5&dpr=2&pid=1.7'
                
                },
                {
                    id: 8,
                    productName: 'Solids Slub: Black ',
                    productPrice: 'Rs. 499.00',
                    productImg: 'https://th.bing.com/th/id/OIP.AJGYumtCH7BewlFGh_T9QAHaJQ?w=204&h=255&c=7&r=0&o=5&dpr=2&pid=1.7'
                
                },

                {
                    id: 9,
                    productName: 'Solids Slub: Gray ',
                    productPrice: 'Rs. 800.00',
                    productImg: 'https://th.bing.com/th/id/OIP.smG6C4-n7ERIFbtVLzTI7AHaLy?w=198&h=315&c=7&r=0&o=5&dpr=2&pid=1.7'
                
                },

                
                {
                    id: 10,
                    productName: 'Solids Slub: Gray ',
                    productPrice: 'Rs. 800.00',
                    productImg: 'https://th.bing.com/th/id/OIP.9Xer6GX5hRCa0cFm1qPk9QHaLz?w=198&h=315&c=7&r=0&o=5&dpr=2&pid=1.7'
                
                },
                {
                    id: 11,
                    productName: 'Solids Slub: Gray ',
                    productPrice: 'Rs. 800.00',
                    productImg: 'https://m.media-amazon.com/images/I/51Fuuwo8JqL._AC_UL600_FMwebp_QL65_.jpg'
                
                },

                {
                    id: 12,
                    productName: 'Solids Slub: Yellow ',
                    productPrice: 'Rs. 500.00',
                    productImg: 'https://th.bing.com/th?id=OIP.aY0N7N3byL-527ZyjzdobwHaJe&w=221&h=282&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2'
                
                },

                {
                    id: 13,
                    productName: 'Solids Slub: brown blue ',
                    productPrice: 'Rs. 1000.00',
                    productImg: 'https://m.media-amazon.com/images/I/51bY+0rDCVL._AC_UL600_FMwebp_QL65_.jpg'
                
                },

                {
                    id: 14,
                    productName: 'Solids Slub: Light Pink ',
                    productPrice: 'Rs. 900.00',
                    productImg: 'https://m.media-amazon.com/images/I/81XSu2qqGvL._AC_UL600_FMwebp_QL65_.jpg'
                
                },

                {
                    id: 15,
                    productName: 'Solids Slub: White ',
                    productPrice: 'Rs. 1000.00',
                    productImg: 'https://m.media-amazon.com/images/I/71l8-L56jrL._AC_UL600_FMwebp_QL65_.jpg'
                
                },

                {
                    id: 16,
                    productName: 'Solids Slub: Brown ',
                    productPrice: 'Rs. 500.00',
                    productImg: 'https://m.media-amazon.com/images/I/61DS83K3EQL._AC_UL600_FMwebp_QL65_.jpg'
                
                },

                {
                    id: 17,
                    productName: 'Solids Slub: orange ',
                    productPrice: 'Rs. 600.00',
                    productImg: 'https://m.media-amazon.com/images/I/61fOvOxu3wL._AC_UL600_FMwebp_QL65_.jpg'
                
                },

                
                {
                    id: 18,
                    productName: 'Solids Slub: Aque ',
                    productPrice: 'Rs. 400.00',
                    productImg: 'https://m.media-amazon.com/images/I/71x7sKBF+CL._AC_UL600_FMwebp_QL65_.jpg'
                   
                    },
                
                   
                    {
                        id: 19,
                        productName: 'Solids Slub: Neck ',
                        productPrice: 'Rs. 300.00',
                        productImg: 'https://m.media-amazon.com/images/I/61wbtpbVjsL._AC_UL600_FMwebp_QL65_.jpg'
                       
                        },
                        {
                            id: 20,
                            productName: 'Solids Slub: Ausk',
                            productPrice: 'Rs. 700.00',
                            productImg: 'https://m.media-amazon.com/images/I/7152RCSU4LL._AC_SR350,526_FMwebp_QL65_.jpg'
                           
                            },
                            {
                                id: 21,
                                productName: 'Solids Slub: white',
                                productPrice: 'Rs. 1000.00',
                                productImg: 'https://m.media-amazon.com/images/I/714mCOCGVFL._AC_UL600_FMwebp_QL65_.jpg'
                               
                                },

                                {
                                    id: 22,
                                    productName: 'Solids Slub: Bullmer',
                                    productPrice: 'Rs. 1500.00',
                                    productImg: 'https://m.media-amazon.com/images/I/71TqPqvJCQL._AC_UL600_FMwebp_QL65_.jpg'
                                   
                                    },

                                    {
                                        id: 23,
                                        productName: 'Solids Slub: whitesmoke',
                                        productPrice: 'Rs. 1100.00',
                                        productImg: 'https://m.media-amazon.com/images/I/71QtKMaNYDL._AC_UL600_FMwebp_QL65_.jpg'
                                       
                                        },

                                {
                                    id: 24,
                                   productName: 'Solids Slub: Olive green',
                                  productPrice: 'Rs. 1000.00',
                                 productImg: 'https://m.media-amazon.com/images/I/81J0rekmwBL._AC_UL600_FMwebp_QL65_.jpg'
                                           
                              },
        
            ]
        }
    }



    render() {
        return (
            <>
                <div>
                    {this.state.productList.map((list) => (
                        <div key={list.id} className='productlist'>
                             <img src={list.productImg} className='one' alt='shirt'/> 
                            {list.productName} - {list.productPrice}
                            

                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default Welcome
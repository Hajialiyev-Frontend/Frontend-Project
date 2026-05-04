import { useEffect, useState } from 'react';
import './secondsection.css'
import axios from 'axios';
function Secondsection() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function getData() {
            let { data } = await axios.get("https://6990a3406279728b0152e947.mockapi.io/section")
            setProduct(data)
        }
        getData()
    }, [])
    return (
       <div className="commons">
           <h2>Recommended for You</h2>
         <div className='divdata'>
         
            {
                product.map((item) => (
                 <div className="recommend">
                       <div key={item.id}>
                        <div className='Secondsectionmain '>
                            <div className="Secondsection">
                                <div>
                                    <img src={item.image} />
                                    <br />
                                </div>
                            </div>


                        </div>
                    </div>
                 </div>

                ))
            }

        </div>
       </div>




    )

}
export default Secondsection;
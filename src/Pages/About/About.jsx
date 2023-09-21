import React from 'react';
import aboutImg from '../../../images/Other/img1.jpg'
const About = () => {
    return (
        <div className='grid grid-flow-row lg:flex md:pl-[15%] md:pr-[15%] m-28 '>
            <div >
                <img  src={aboutImg} alt="" />
            </div>
            <div className='flex md:pl-8' style={{alignItems: 'center'}}>
                <div>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia harum eius possimus dolorum suscipit eum at architecto pariatur esse culpa ut eos numquam sint, vel quas molestias optio mollitia sapiente!
                        Explicabo dolorem, voluptate culpa similique aliquam modi tempore eius officia quam, quaerat expedita at. Ipsum, blanditiis quasi similique, corrupti architecto minima dolore eaque, eius esse delectus voluptatum. Iure, fuga sunt.
                        Enim et, architecto quod quae vitae sunt ullam nisi dolor ratione suscipit assumenda inventore earum fuga aspernatur quisquam hic. Molestiae quasi dolorem consequatur quae atque ad perferendis blanditiis veritatis exercitationem.</h3>

                    <button className=' bg-gray-800 hover:bg-yellow-600 text-white pt-2 pb-2 mt-5 pl-10 pr-10 text-center rounded-sm '>LEARN NOW</button>
                </div>
            </div>
        </div>
    );
};

export default About;
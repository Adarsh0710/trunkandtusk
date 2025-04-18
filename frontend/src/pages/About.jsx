// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const About = () => {
//   return (
//     <div>

//       <div className='text-2xl text-center pt-8 border-t'>
//           <Title text1={'ABOUT'} text2={'US'} />
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-16'>
//           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
//           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//               <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
//               <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
//               <b className='text-gray-800'>Our Mission</b>
//               <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
//           </div>
//       </div>

//       <div className=' text-xl py-4'>
//           <Title text1={'WHY'} text2={'CHOOSE US'} />
//       </div>

//       <div className='flex flex-col md:flex-row text-sm mb-20'>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Quality Assurance:</b>
//             <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Convenience:</b>
//             <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Exceptional Customer Service:</b>
//             <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
//           </div>
//       </div>

//       <NewsletterBox/>
      
//     </div>
//   )
// }

// export default About



import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
// import NewsLetter from '../components/NewsLetter'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui ab, aspernatur eveniet fugit dolorem ad at beatae iste quis aliquam ratione maiores suscipit dignissimos illo ipsa impedit, natus deleniti.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus veritatis eos modi et, consequuntur esse? Iusto eligendi, optio animi, quod, itaque nam ratione excepturi consequatur tempora aperiam vitae nihil.</p>

             <b className='text-gray-900'>Our Mission</b>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non quam doloribus unde natus et ipsa repellat sapiente dignissimos culpa. Corrupti est odit iusto quibusdam tempora. Qui inventore nobis harum!</p>
        </div>

      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className=' text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusamus facere iure porro sequi eveniet cumque fugit rerum quis deleniti. </p>
        </div>

        <div className='border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className=' text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusamus facere iure porro sequi eveniet cumque fugit rerum quis deleniti. </p>
        </div>

        <div className='border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p  className=' text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusamus facere iure porro sequi eveniet cumque fugit rerum quis deleniti. </p>
        </div>
      </div>
     <NewsletterBox/>
      
    </div>
  )
}

export default About

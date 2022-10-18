import React from 'react';
import '../Styles/LowerSection.scss';
import Cards from './Cards';
const LowerSection = () => {
  return (
    <div className='sec-banner bg0 p-t-80 p-b-50'>
      <div className='container'>
         <div className='row'>
            <Cards 
               imgURL="https://preview.colorlib.com/theme/cozastore/images/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp"
               Collection="Women"
               Info="Spring 2022"
            />
            <Cards 
               imgURL="https://preview.colorlib.com/theme/cozastore/images/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp"
               Collection="Men"
               Info="Spring 2022"
            />
            <Cards 
               imgURL="https://preview.colorlib.com/theme/cozastore/images/xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp"
               Collection="Accessories"
               Info="New Trend"
            />
            
         </div>
      </div>
    </div>
  )
}

export default LowerSection;





//                <div className='col-md-6 col-xl-4 p-b-30 m-lr-auto'>
//                   <div className='block1 wrap-pic-w'>
//                   <div className='overLay'></div>
//                      <img src="https://preview.colorlib.com/theme/cozastore/images/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp" alt="ima Banner" />
//                      <a href='/' className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'>
//                         <div className='block1-txt-child1 flex-col-l'>
//                            <span className='block1-name ltext-102 trans-04 p-b-8'> Men </span>
//                            <span className='block1-info stext-102 trans-04'> Spring 2020 </span>
//                         </div>
//                      </a>
//                      <div className='shopNow'>
//                         <span>Shop Now</span>
//                      </div>
//                   </div>
                  
//                </div>
//                <div className='col-md-6 col-xl-4 p-b-30 m-lr-auto'>
//                   <div className='block1 wrap-pic-w'>
//                   <div className='overLay'></div>
//                      <img src="https://preview.colorlib.com/theme/cozastore/images/xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp" alt="ima Banner" />
//                         <a href='/' className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'>
//                            <div className='block1-txt-child1 flex-col-l'>
//                               <span className='block1-name ltext-102 trans-04 p-b-8'> Accessories </span>
//                               <span className='block1-info stext-102 trans-04'> New Trend </span>
//                            </div>
//                         </a>
//                         <div className='shopNow'>
//                            <span>Shop Now</span>
//                         </div>
//                   </div>
//                </div>
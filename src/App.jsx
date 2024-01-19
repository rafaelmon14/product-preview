import perfumeMobile from './assets/images/image-product-mobile.jpg'
import perfumeDesktop from './assets/images/image-product-desktop.jpg'
import iconCart from './assets/images/icon-cart.svg'

function App() {
  

  return (
      <main className="w-[343px] sm:w-[600px] sm:h-[450px] sm:flex">

        {/*Image*/}
        <img className="rounded-t-lg sm:hidden" src={perfumeMobile} alt="Perfume Grabielle Chanel" />
        <img className=" hidden rounded-l-lg sm:block" src={perfumeDesktop} alt="Perfume Grabielle Chanel" />

        {/*Description*/}
        <div className="bg-White p-6 max-[639px]:rounded-b-lg sm:rounded-r-lg sm:p-[38px]">
          <p className="uppercase font-montserrat tracking-[0.5em] text-xs text-Dark-grayish-blue mb-5">perfume</p>
          <h1 className="font-bold font-fraunces leading-8 text-3xl my-4 text-Very-dark-blue">Gabrielle Essence Eau De Parfum</h1>
          <p className="font-montserrat text-Dark-grayish-blue leading-6 text-sm mb-8">A floral, solar and vojuptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

          {/*Price*/}
          <div className="grid grid-cols-2 place-items-center ">
            <span className="text-4xl font-fraunces text-Dark-cyan sm:m-auto sm:text-3xl">$149.99</span>
            <del className="text-Dark-grayish-blue font-montserrat text-xs mr-16 sm:m-auto ">$169.99</del>
          </div>

          {/*Button*/}
          <div className="flex rounded-lg bg-Dark-cyan mt-6 p-4 justify-center space-x-3 hover:bg-Dark-cyan-hover hover:text-White sm:p-3">
            <svg className="w-[15px] h-[16px]"> <image  xlinkHref={iconCart}  /> </svg>
            <button className="font-bold text-White font-montserrat text-[13px]">Add to Cart</button>
          </div>          
        </div>        
      </main>
  )
}

export default App

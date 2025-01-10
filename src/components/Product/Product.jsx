import { SectionHeader } from '/src/components/SectionHeader/SectionHeader';
import { ProductCard } from '/src/components/ProductCard/ProductCard';
import './Product.scss'
import img from '/src/images/sectionLine.svg'

export const Product = (props) => {
    return (
        <div className='product__container'>
            <SectionHeader name='PRODUCT'/>

            <div className='product__header'>
                <h1 className='product__header-title'>Choose your product themes.</h1>

                <p className='product__header-text'>Find the theme you want. 
                    If our choice of theme is not what you want, 
                    you can customize it as you want.
                </p>
            </div>

            {props.list.map(item => {
                return (
                    <ProductCard 
                        headerNumber={item.number}
                        headerName={item.headerName}
                        headerText={item.headerText}
                        cardLink={item.cardLink}
                    /> 
                )
            })}
        </div>
    );
}
import React from "react";
// Data
import products from "../../utils/products.json";
// Components
import Layout from "../../components/layout/Layout";
import HomeCategory from "../../components/categoryPreview/HomeCategory";
import ScrollButton from "../../components/scrollButton/ScrollButton";

class Home extends React.Component {
   constructor() {
      super();
      this.state = {
         categories: [],
      };
   }

   componentDidMount() {
      const categories = Object.keys(products);
      this.setState({ categories });
   }

   render() {
      const { scrollBtnVizibility, handleScrollToTop } = this.props;

      return (
         <Layout>
            <div className="container-fluid container-min-max-width">
               <div className="row">
                  {this.state.categories.map((category, index) => (
                     <HomeCategory
                        key={index}
                        route={category}
                        name={products[category].name}
                        description={products[category].description}
                        image={products[category].image}
                     />
                  ))}
               </div>
               <ScrollButton
                  scrollBtnVizibility={scrollBtnVizibility}
                  handleScrollToTop={() => handleScrollToTop()}
               />
            </div>
         </Layout>
      );
   }
}

export default Home;

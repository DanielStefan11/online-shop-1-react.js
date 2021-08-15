import React from "react";
// Data
// import products from "../../utils/products.json";
// Components
import Layout from "../../components/layout/Layout";
import HomeCategory from "../../components/categoryPreview/HomeCategory";
import ScrollButton from "../../components/scrollButton/ScrollButton";
// axios
import axios from "axios";

class Home extends React.Component {
   constructor() {
      super();
      this.state = {
         categories: [],
      };
   }

   componentDidMount() {
      axios.get("http://localhost:1337/categories").then(res => {
         const categories = res.data;
         this.setState({ categories });
      });
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
                        route={category.name}
                        name={category.name}
                        description={category.description}
                        image={category.image.formats.thumbnail.url}
                     />
                  ))}
               </div>
               <ScrollButton scrollBtnVizibility={scrollBtnVizibility} handleScrollToTop={() => handleScrollToTop()} />
            </div>
         </Layout>
      );
   }
}

export default Home;

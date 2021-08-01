import React, { Component } from "react";
// Data
import products from "../../utils/products.json";
// Components
import Layout from "../../components/layout/Layout";
import ProductList from "../../components/productList/ProductList";
import ProductFilters from "../../components/productFilters/ProductFilters";
import FiltersMenuOverlay from "../../components/productFilters/FiltersMenuOverlay";
// redux
import { connect } from "react-redux";
import { toggleFilterMenu } from "../../redux/filters/FiltersActions";

class Category extends Component {
   constructor(props) {
      super(props);
      this.state = {
         category: {},
         items: [],
         filteredItems: [],
      };
   }

   componentDidMount = () => {
      const { match } = this.props;
      const categoryName = match.params.categoryName;
      this.setState({
         category: products[categoryName],
         items: products[categoryName].items,
         filteredItems: products[categoryName].items,
      });
   };

   filterProducts = (lowerLimit, upperLimit) => {
      const filteredItems = this.state.items.filter(
         product => product.price >= lowerLimit && product.price < upperLimit
      );
      this.setState({ filteredItems });
   };

   sortProductsAscending = () => {
      this.setState(prevState => {
         return {
            filteredItems: [
               ...prevState.filteredItems.sort((a, b) => {
                  let value1 = a.name.toLowerCase();
                  let value2 = b.name.toLowerCase();
                  if (value1 < value2) return -1;
                  if (value1 > value2) return 1;
                  return 0;
               }),
            ],
         };
      });
   };

   sortProductsDescending = () => {
      this.setState(prevState => {
         return {
            filteredItems: [
               ...prevState.filteredItems.sort((a, b) => {
                  let value1 = a.name.toLowerCase();
                  let value2 = b.name.toLowerCase();
                  if (value1 > value2) return -1;
                  if (value1 < value2) return 1;
                  return 0;
               }),
            ],
         };
      });
   };

   sortByPriceAscending = () => {
      this.setState(prevState => {
         return {
            filteredItems: [...prevState.filteredItems.sort((a, b) => a.price - b.price)],
         };
      });
   };

   sortByPriceDescending = () => {
      this.setState(prevState => {
         return {
            filteredItems: [...prevState.filteredItems.sort((a, b) => b.price - a.price)],
         };
      });
   };

   sortByStock = () => {
      const filteredItems = this.state.filteredItems.filter(product => product.stock > 0);
      this.setState({ filteredItems });
   };

   returnInitialProducts = () => {
      const initialItems = this.state.items;
      this.setState({ filteredItems: initialItems });
      console.log(this.state.items);
   };

   render() {
      return (
         <Layout>
            <div className="container-fluid container-min-max-width">
               <h2 className="text-center mt-5 mb-3">{this.state.category.name}</h2>
               <div className="w-100 d-flex justify-content-center justify-content-sm-center justify-content-lg-start ">
                  <button className="btn btn-info" onClick={() => this.props.toggleMenuFilter()}>
                     Filter/Sort Products
                  </button>
               </div>
               <FiltersMenuOverlay />
               <ProductFilters
                  filterProducts={(low, high) => this.filterProducts(low, high)}
                  sortProductsAscending={this.sortProductsAscending}
                  sortProductsDescending={this.sortProductsDescending}
                  sortByPriceAscending={this.sortByPriceAscending}
                  sortByPriceDescending={this.sortByPriceDescending}
                  sortByStock={this.sortByStock}
                  returnInitialProducts={this.returnInitialProducts}
               />
               <ProductList products={this.state.filteredItems} />
            </div>
         </Layout>
      );
   }
}

const mapStateToProps = state => {
   return {
      filtersMenuShowed: state.filtersMenu.filterShow,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      toggleMenuFilter: () => dispatch(toggleFilterMenu()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

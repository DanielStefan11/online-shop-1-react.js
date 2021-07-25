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
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const categoryName = match.params.categoryName;
    this.setState({
      category: products[categoryName],
      items: products[categoryName].items,
    });
  }

  render() {
    return (
      <Layout>
        <div className="container-fluid container-min-max-width">
          <h2 className="text-center mt-5 mb-3">{this.state.category.name}</h2>
          <div className="w-100 d-flex justify-content-center justify-content-sm-center justify-content-lg-start ">
            <button
              className="btn btn-info"
              onClick={() => this.props.toggleMenuFilter()}
            >
              Filter/Sort Products
            </button>
          </div>
          <FiltersMenuOverlay />
          <ProductFilters />
          <ProductList products={this.state.items} />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filtersMenuShowed: state.filtersMenu.filterShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuFilter: () => dispatch(toggleFilterMenu()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

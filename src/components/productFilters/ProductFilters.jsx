import React from "react";
// style
import "./Filters.css";
// redux
import { connect } from "react-redux";
import { toggleFilterMenu } from "../../redux/filters/FiltersActions";
// components
import { VscClose as CloseIcon } from "react-icons/vsc";

class ProductFilters extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         filters: [
            {
               name: "ascendFilter",
               checked: false,
            },
            {
               name: "descendFilter",
               checked: false,
            },
            {
               name: "ascendingPrice",
               checked: false,
            },
            {
               name: "descendingPrice",
               checked: false,
            },
            {
               name: "moreThan5000",
               checked: false,
            },
            {
               name: "lessThan5000",
               checked: false,
            },
            {
               name: "stock",
               checked: false,
            },
         ],
      };
   }

   getCheckedValue(name) {
      const selectedFilter = this.state.filters.find(filter => filter.name === name);
      return selectedFilter.checked;
   }

   handleCheckboxUiChange(name) {
      const filters = this.state.filters;
      const modifiedFilters = filters.map(filter => {
         if (filter.name !== name && filter.checked) {
            return {
               ...filter,
               checked: false,
            };
         } else if (filter.name === name) {
            if (filter.checked) {
               return {
                  ...filter,
                  checked: false,
               };
            } else {
               return {
                  ...filter,
                  checked: true,
               };
            }
         } else {
            return filter;
         }
      });
      this.setState({ filters: modifiedFilters });
      this.props.toggleMenuFilter();
   }

   changeProducts(event, lowerLimit, upperLimit) {
      if (event.target.checked) {
         this.props.filterProducts(lowerLimit, upperLimit);
      } else {
         this.props.filterProducts(0, Infinity);
      }
      this.handleCheckboxUiChange(event.target.name);
   }

   changeLowToHigh = event => {
      if (event.target.checked) {
         this.props.sortByPriceAscending();
      } else {
         this.props.returnInitialProducts();
      }
      this.handleCheckboxUiChange(event.target.name);
   };

   changeHighToLow = event => {
      if (event.target.checked) {
         this.props.sortByPriceDescending();
      } else {
         this.props.returnInitialProducts();
      }
      this.handleCheckboxUiChange(event.target.name);
   };

   changeProdByStock = event => {
      if (event.target.checked) {
         this.props.sortByStock();
      } else {
         this.props.returnInitialProducts();
      }
      this.handleCheckboxUiChange(event.target.name);
   };

   render() {
      const { sortProductsAscending, sortProductsDescending } = this.props;

      return (
         <div
            className="h-100 bg-white p-3 d-flex flex-column product-filters"
            style={
               this.props.filtersMenuShowed
                  ? { left: "0px", opacity: "0.96" }
                  : { transform: "translateX(-1000px)", opacity: "0" }
            }
         >
            <div className="w-100 d-flex justify-content-end">
               <CloseIcon className="close-icon" onClick={() => this.props.toggleMenuFilter()} />
            </div>
            <h4 className="text-center mt-4 mb-5 ">Filter Products</h4>

            <div className="w-100 d-flex flex-column mb-5">
               <h5 className="mb-3">Sort by Price:</h5>
               <label className="mb-3">
                  <input
                     type="checkbox"
                     name="lessThan5000"
                     checked={this.getCheckedValue("lessThan5000")}
                     className="mr-2"
                     onChange={event => this.changeProducts(event, 0, 5000)}
                  />
                  {`< 5000 Lei`}
               </label>
               <label className="mb-3">
                  <input
                     type="checkbox"
                     name="moreThan5000"
                     checked={this.getCheckedValue("moreThan5000")}
                     className="mr-2"
                     onChange={event => this.changeProducts(event, 5000, Infinity)}
                  />
                  {`> 5000 Lei`}
               </label>
               <label className="mb-3">
                  <input
                     type="checkbox"
                     name="ascendingPrice"
                     checked={this.getCheckedValue("ascendingPrice")}
                     className="mr-2"
                     onChange={event => this.changeLowToHigh(event)}
                  />
                  {`Low - High`}
               </label>
               <label className="mb-3">
                  <input
                     type="checkbox"
                     name="descendingPrice"
                     checked={this.getCheckedValue("descendingPrice")}
                     className="mr-2"
                     onChange={event => this.changeHighToLow(event)}
                  />
                  {`High - Low`}
               </label>
            </div>

            <div className="w-100 d-flex flex-column mb-5">
               <h5 className="mb-3">Sort by Name:</h5>
               <label className="mb-3">
                  <input
                     type="radio"
                     name="ascendFilter"
                     checked={this.getCheckedValue("ascendFilter")}
                     className="mr-2"
                     onChange={event => {
                        sortProductsAscending();
                        this.handleCheckboxUiChange(event.target.name);
                     }}
                  />
                  A - Z
               </label>
               <label className="mb-3">
                  <input
                     type="radio"
                     name="descendFilter"
                     checked={this.getCheckedValue("descendFilter")}
                     className="mr-2"
                     onChange={event => {
                        sortProductsDescending();
                        this.handleCheckboxUiChange(event.target.name);
                     }}
                  />
                  Z - A
               </label>
            </div>

            <div className="w-100 d-flex flex-column mb-5">
               <h5 className="mb-3">In Stock:</h5>
               <label className="mb-3">
                  <input
                     type="checkbox"
                     name="stock"
                     checked={this.getCheckedValue("stock")}
                     className="mr-2"
                     onChange={event => this.changeProdByStock(event)}
                  />
                  In stock
               </label>
            </div>
         </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);

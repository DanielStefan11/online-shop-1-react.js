import React from "react";
// style
import "./Filters.css";
// redux
import { connect } from "react-redux";
import { toggleFilterMenu } from "../../redux/filters/FiltersActions";
// components
import { VscClose as CloseIcon } from "react-icons/vsc";

const ProductFilters = (props) => {
  return (
    <div
      className="h-100 bg-white p-3 d-flex flex-column product-filters"
      style={
        props.filtersMenuShowed
          ? { left: "0px", opacity: "0.96" }
          : { transform: "translateX(-1000px)", opacity: "0" }
      }
    >
      <div className="w-100 d-flex justify-content-end">
        <CloseIcon
          className="close-icon"
          onClick={() => props.toggleMenuFilter()}
        />
      </div>
      <h4 className="text-center mt-4 mb-5 ">Filter Products</h4>

      <div className="w-100 d-flex flex-column mb-5">
        <h5 className="mb-3">Sort by Price:</h5>
        <label className="mb-3">
          <input type="checkbox" className="mr-2" />0 - 10000
        </label>
        <label className="mb-3">
          <input type="checkbox" className="mr-2" />
          10000 - 0
        </label>
      </div>

      <div className="w-100 d-flex flex-column mb-5">
        <h5 className="mb-3">Sort by Name:</h5>
        <label className="mb-3">
          <input type="checkbox" className="mr-2" />A - Z
        </label>
        <label className="mb-3">
          <input type="checkbox" className="mr-2" />Z - A
        </label>
      </div>

      <div className="w-100 d-flex flex-column mb-5">
        <h5 className="mb-3">In Stock:</h5>
        <label className="mb-3">
          <input type="checkbox" className="mr-2" />
          In stock
        </label>
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);

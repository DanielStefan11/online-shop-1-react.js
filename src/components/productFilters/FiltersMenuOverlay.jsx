import React from "react";
// style
import "./Filters.css";
// redux
import { connect } from "react-redux";
import { toggleFilterMenu } from "../../redux/filters/FiltersActions";

const FiltersMenuOverlay = (props) => {
  return (
    <div
      className="filters-overlay"
      style={
        props.filtersMenuShowed
          ? { right: "0px", opacity: "0.96" }
          : { transform: "translateX(1000px)", opacity: "0", display: "none" }
      }
      onClick={() => props.toggleMenuFilter()}
    ></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FiltersMenuOverlay);

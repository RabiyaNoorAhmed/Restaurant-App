import React from 'react'; // Importing React library
const FilterButtons = ({ categories, selectedCategory, filterItems, showAll }) => {// FilterButtons receiving props
  return (
    <div className="flex flex-row justify-center items-center md:items-center md:gap-8 gap-10  flex-wrap m-12"> {/* Container for filter buttons */}
       {/* Button to show all items */}
       <button onClick={showAll} className={`btn button mr-10 ${selectedCategory === "all" ? "active" : ""}`}>
        All
      </button>
      {/* Mapping through categories to render buttons */}
      {categories.map((category) => (
        <button
          key={category} // Unique key for each button
          onClick={() => filterItems(category)} // Function to handle filtering by category
          className={`btn button ${selectedCategory === category ? "active" : ""}`} // Conditional class based on selected category
        >
          {category} {/* Category name */}


        </button>
      ))}
    </div>
  );
};

export default FilterButtons;

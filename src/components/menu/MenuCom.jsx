import React, { useState, useEffect } from 'react'; 
import Card from '../card/Card';
import FilterButtons from './FilterButtons';
import Pagination from './Pagination';

const MenuCom = () => { 
  const [menu, setMenu] = useState([]); // State for menu items
  const [filteredItems, setFilteredItems] = useState([]); // State for filtered items
  const [selectedCategory, setSelectedCategory] = useState("all"); // State for selected category
  const [currentPage, setCurrentPage] = useState(1); // State for current page number
  const [itemsPerPage] = useState(6); // Number of items per page

  useEffect(() => {
    // Fetch data from the json
    const fetchData = async () => {
      try {
        const response = await fetch("/menuData.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data); // Initially, display all items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const categories = ["Burger", "Chicken", "Sides", "Specialty", "Beverages"]; // Menu categories

  return ( 
    <div>
      <div className='text-center'>
  
        <h2 className="text-textcolor font-primary md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
        We offer people best way <br/> to eat healthy food</h2>
      </div>
      <div className="section-container"> {/* Main section container */}
        {/* Filter buttons */}
        <FilterButtons
          categories={categories}
          selectedCategory={selectedCategory}
          filterItems={filterItems}
          showAll={showAll}
        />
        <div className="flex flex-wrap justify-around items-center gap-4"> {/* Cards container */}
          {/* Rendering cards */}
          {currentItems.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default MenuCom; 


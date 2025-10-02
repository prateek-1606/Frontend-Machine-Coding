import { useEffect, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 20;

const PaginatedProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsData, setProductsData] = useState({});
  const [isLoading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        limit: ITEMS_PER_PAGE.toString(),
        skip: ((currentPage - 1) * ITEMS_PER_PAGE).toString(),
      });
      const response = await fetch(
        `https://dummyjson.com/products?${queryParams.toString()}`
      );
      const data = await response.json();
      setLoading(false);
      setProductsData(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const allPages = useMemo(() => {
    if (!productsData.total) return [];
    return new Array(
      Math.ceil(parseInt(productsData.total) / ITEMS_PER_PAGE)
    ).fill(null);
  }, [productsData]);

  const handlePrevNavigation = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
  };

  const handleNextNavigation = () => {
    if (currentPage === allPages.length) return;

    setCurrentPage(currentPage + 1);
  };

  const handlePageNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="pagination">
            <button onClick={handlePrevNavigation}>Prev</button>
            {allPages.map((page, index) => (
              <button
                className={`${currentPage === index + 1 ? "current-page" : ""}`}
                onClick={() => handlePageNavigation(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={handleNextNavigation}>Next</button>
          </div>
          <div className="products-listing">
            {(productsData?.products ?? []).map((product) => (
              <div className="product">
                <img width="150px" height="150px" src={product.thumbnail} />
                <p>{product.title}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PaginatedProductListing;

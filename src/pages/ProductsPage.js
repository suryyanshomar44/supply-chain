import React from "react";
import ChartSection from "../components/ChartSection";
import TableSection from "../components/TableSection";

const ProductsPage = () => {
  const columns = [
    { Header: "Product ID", accessor: "ProductID" },
    { Header: "Product Name", accessor: "ProductName" },
    { Header: "Quantity", accessor: "Quantity" },
    { Header: "Price", accessor: "Price" },
  ];
  
  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        <div className="chart-section">
          <ChartSection
            dataUrl="/data/products.csv"
            xKey="ProductName"
            yKey="Quantity"
            chartLabel="Product Quantities"
          />
        </div>
        <div className="table-section">
          <TableSection dataUrl="/data/products.csv" columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

import React from "react";
import ChartSection from "../components/ChartSection";
import TableSection from "../components/TableSection";

const columns = [
  { Header: "Supplier ID", accessor: "SupplierID" },
  { Header: "Supplier Name", accessor: "SupplierName" },
  { Header: "Contact Name", accessor: "ContactPerson" },
  { Header: "Country", accessor: "Country" },
  { Header: "Email", accessor: "ContactEmail" },
];

const SuppliersPage = () => {
  return (
    <div>
      <h1>Shipments</h1>
      <div className="container">
        <div className="chart-section">
          <ChartSection
            dataUrl="/data/suppliers.csv"
            xKey="SupplierName"
            yKey="SupplierID"
            chartLabel="Suppliers"
          />
        </div>
        <div className="table-section">
          <TableSection dataUrl="/data/suppliers.csv" columns={columns} />{" "}
        </div>
      </div>
    </div>
  );
};

export default SuppliersPage;

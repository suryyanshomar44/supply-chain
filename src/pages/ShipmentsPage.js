import React from "react";
import ChartSection from "../components/ChartSection";
import TableSection from "../components/TableSection";

const columns = [
  { Header: "Shipment ID", accessor: "ShipmentID" },
  { Header: "Product ID", accessor: "ProductID" },
  { Header: "Quantity", accessor: "Quantity" },
  { Header: "Ship Date", accessor: "Date" },
];

const ShipmentsPage = () => {
  return (
    <div>
      <h1>Shipments</h1>
      <div className="container">
        <div className="chart-section">
          <ChartSection
            dataUrl="/data/shipments.csv"
            xKey="Date"
            yKey="Quantity"
            chartLabel="Shipment Quantities"
          />
        </div>
        <div className="table-section">
          <TableSection dataUrl="/data/shipments.csv" columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default ShipmentsPage;
